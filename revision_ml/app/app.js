/* app/app.js — logique de l'application. On y touche pour l'UI / le comportement,
 * pas pour ajouter du contenu (voir data/flashcards.js et data/quiz.js). */
(function(){
  "use strict";
(function(){
  "use strict";
  const DATA = window.ML;                       // topics + fiches (data/topics.js)
  const TOPICS = DATA.topics;
  const TMAP = Object.fromEntries(TOPICS.map(t=>[t.id,t.title]));
  const KEY = 'ml_revision_v1';

  // ---- rendu Markdown + LaTeX (mêmes règles que les Fiches) ----
  const MD = window.MLmd;
  // Rendu Markdown + LaTeX. Le contenu "hérité" (texte brut multi-lignes, sans $…$)
  // voit ses simples retours à la ligne promus en paragraphes pour rester lisible.
  function mdBlock(src){
    src = src == null ? '' : String(src);
    if(src.indexOf('$') === -1 && src.indexOf('\n\n') === -1) src = src.replace(/\n/g, '\n\n');
    return MD.mdToHtml(src).replace(/>\n</g, '><');
  }
  function rich(el, src){ if(el) el.innerHTML = mdBlock(src); }
  function richInline(src){
    const h = mdBlock(src).trim();
    const m = h.match(/^<p>([\s\S]*?)<\/p>$/);
    return (m && m[1].indexOf('<p>') === -1 && m[1].indexOf('<div') === -1 && m[1].indexOf('<ul') === -1) ? m[1] : h;
  }

  // ---- persistence ----
  let store = {cards:{}, quizBest:0, theme:null};
  try{ const raw = localStorage.getItem(KEY); if(raw) store = Object.assign(store, JSON.parse(raw)); }catch(e){}
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch(e){} }

  // ---- cards: give stable ids ----
  const cards = window.ML.flashcards.map((c,i)=>({id:'c'+i, topic:c[0], q:c[1], a:c[2]}));
  const quiz = window.ML.quiz.map((q,i)=>Object.assign({id:'q'+i}, q));

  // ---- theme ----
  const root = document.documentElement;
  function applyTheme(){
    if(store.theme) root.setAttribute('data-theme', store.theme);
    else root.removeAttribute('data-theme');
  }
  applyTheme();
  document.getElementById('themeBtn').addEventListener('click', ()=>{
    const cur = store.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
    store.theme = cur === 'dark' ? 'light' : 'dark';
    applyTheme(); save();
  });
  document.getElementById('resetBtn').addEventListener('click', ()=>{
    if(confirm('Réinitialiser toute la progression (flashcards + meilleur score) ?')){
      store = {cards:{}, quizBest:0, theme:store.theme}; save(); renderHome(); buildCardFilters(); alert('Progression réinitialisée.');
    }
  });

  // ---- nav ----
  const views = ['home','cards','quiz','exam','viz','fiches'];
  const tabBtns = [...document.querySelectorAll('#tabs button')];
  function show(v){
    views.forEach(x=>document.getElementById('view-'+x).classList.toggle('hidden', x!==v));
    tabBtns.forEach(b=>b.setAttribute('aria-current', String(b.dataset.view===v)));
    if(v==='home') renderHome();
    if(v==='fiches') renderFiches();
    if(v==='viz' && window.MLviz) window.MLviz.show();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  tabBtns.forEach(b=>b.addEventListener('click', ()=>show(b.dataset.view)));

  /* ================= HOME ================= */
  function cardStats(){
    let known=0, review=0;
    cards.forEach(c=>{ const s=store.cards[c.id]; if(s==='known')known++; else if(s==='review')review++; });
    return {known, review, total:cards.length};
  }
  function renderHome(){
    const s = cardStats();
    const pct = s.total ? Math.round(100*s.known/s.total) : 0;
    document.getElementById('cardsPct').textContent = pct+' %';
    document.getElementById('cardsBar').style.width = pct+'%';
    document.getElementById('cardsKnown').textContent = s.known;
    document.getElementById('cardsReview').textContent = s.review;
    document.getElementById('cardsTotal').textContent = s.total;
    document.getElementById('quizBest').textContent = store.quizBest ? (store.quizBest+' %') : '—';

    const box = document.getElementById('topicProgress');
    box.innerHTML = '';
    TOPICS.forEach(t=>{
      const tc = cards.filter(c=>c.topic===t.id);
      const k = tc.filter(c=>store.cards[c.id]==='known').length;
      const p = tc.length ? Math.round(100*k/tc.length) : 0;
      const qn = quiz.filter(q=>q.t===t.id).length;
      const el = document.createElement('div');
      el.className = 'topic-line';
      el.innerHTML = `<strong>${t.title}</strong>
        <span class="pill ${t.prio}">${t.prio==='hi'?'Haute':'Moyenne'}</span>
        <div style="grid-column:1/-1"><div class="prog"><i style="width:${p}%"></i></div></div>
        <span class="meta">${k}/${tc.length} flashcards · ${qn} questions de quiz · ${p} %</span>`;
      box.appendChild(el);
    });
  }
  document.getElementById('goRevise').addEventListener('click', ()=>{
    show('cards');
    document.getElementById('fcTopic').value = 'all';
    document.getElementById('fcReviewOnly').checked = false;
    document.getElementById('fcHiOnly').checked = false;
    // order: review first, then unseen, then known
    fcOrder = [...cards].sort((a,b)=>rank(a)-rank(b));
    fcIdx = 0; renderCard();
    function rank(c){ const s=store.cards[c.id]; return s==='review'?0 : s===undefined?1 : 2; }
  });
  document.getElementById('goQuizRandom').addEventListener('click', ()=>{
    show('quiz'); document.getElementById('quizMode').value='random20';
    document.getElementById('quizTopicWrap').classList.add('hidden');
    startQuiz();
  });

  /* ================= FLASHCARDS ================= */
  const fcTopic = document.getElementById('fcTopic');
  const fcReviewOnly = document.getElementById('fcReviewOnly');
  const fcHiOnly = document.getElementById('fcHiOnly');
  const fcCardEl = document.getElementById('fcCard');
  let fcOrder = [], fcIdx = 0;

  function buildCardFilters(){
    fcTopic.innerHTML = '<option value="all">Tous les thèmes</option>' +
      TOPICS.map(t=>`<option value="${t.id}">${t.title}</option>`).join('');
    // quiz topic select
    const qt = document.getElementById('quizTopic');
    qt.innerHTML = TOPICS.map(t=>`<option value="${t.id}">${t.title}</option>`).join('');
  }
  function currentDeck(){
    let d = cards.slice();
    if(fcTopic.value!=='all') d = d.filter(c=>c.topic===fcTopic.value);
    if(fcHiOnly.checked){ const hi=new Set(TOPICS.filter(t=>t.prio==='hi').map(t=>t.id)); d=d.filter(c=>hi.has(c.topic)); }
    if(fcReviewOnly.checked) d = d.filter(c=>store.cards[c.id]==='review');
    return d;
  }
  function rebuildDeck(shuffle){
    fcOrder = currentDeck();
    if(shuffle) for(let i=fcOrder.length-1;i>0;i--){ const j=Math.random()*(i+1)|0; [fcOrder[i],fcOrder[j]]=[fcOrder[j],fcOrder[i]]; }
    fcIdx = 0; renderCard();
  }
  function renderCard(){
    const empty = document.getElementById('fcEmpty');
    const stage = document.getElementById('fcStage');
    if(!fcOrder.length){ empty.classList.remove('hidden'); stage.classList.add('hidden'); return; }
    empty.classList.add('hidden'); stage.classList.remove('hidden');
    if(fcIdx<0) fcIdx=0; if(fcIdx>=fcOrder.length) fcIdx=fcOrder.length-1;
    const c = fcOrder[fcIdx];
    fcCardEl.classList.remove('flip');
    const tag = TMAP[c.topic] + (store.cards[c.id] ? ' · '+(store.cards[c.id]==='known'?'connue ✓':'à revoir') : '');
    document.getElementById('fcTagF').textContent = tag;
    document.getElementById('fcTagB').textContent = tag;
    document.getElementById('fcQ').innerHTML = richInline(c.q);
    rich(document.getElementById('fcA'), c.a);
    document.getElementById('fcCounter').textContent = `carte ${fcIdx+1} / ${fcOrder.length}`;
    fitCard();
  }
  function fitCard(){
    const inner = fcCardEl.querySelector('.fc-inner');
    if(!inner) return;
    inner.style.minHeight = '';
    requestAnimationFrame(()=>{
      let h = 0;
      fcCardEl.querySelectorAll('.fc-face').forEach(f=>{ h = Math.max(h, f.scrollHeight); });
      if(h) inner.style.minHeight = (h + 2) + 'px';
    });
  }
  function mark(status){
    if(!fcOrder.length) return;
    const c = fcOrder[fcIdx];
    store.cards[c.id] = status; save();
    if(fcIdx < fcOrder.length-1){ fcIdx++; renderCard(); }
    else renderCard();
  }
  fcCardEl.addEventListener('click', ()=>fcCardEl.classList.toggle('flip'));
  document.getElementById('fcNext').addEventListener('click', ()=>{ if(fcIdx<fcOrder.length-1){fcIdx++;renderCard();} });
  document.getElementById('fcPrev').addEventListener('click', ()=>{ if(fcIdx>0){fcIdx--;renderCard();} });
  document.getElementById('fcKnow').addEventListener('click', ()=>mark('known'));
  document.getElementById('fcReview').addEventListener('click', ()=>mark('review'));
  document.getElementById('fcShuffle').addEventListener('click', ()=>rebuildDeck(true));
  [fcTopic,fcReviewOnly,fcHiOnly].forEach(el=>el.addEventListener('change', ()=>rebuildDeck(false)));
  document.addEventListener('keydown', (e)=>{
    if(document.getElementById('view-cards').classList.contains('hidden')) return;
    if(e.target.tagName==='SELECT'||e.target.tagName==='INPUT') return;
    if(e.code==='Space'){ e.preventDefault(); fcCardEl.classList.toggle('flip'); }
    else if(e.code==='ArrowRight'){ if(fcIdx<fcOrder.length-1){fcIdx++;renderCard();} }
    else if(e.code==='ArrowLeft'){ if(fcIdx>0){fcIdx--;renderCard();} }
    else if(e.key==='k'||e.key==='K'){ mark('known'); }
    else if(e.key==='r'||e.key==='R'){ mark('review'); }
  });

  /* ================= QUIZ ================= */
  const quizMode = document.getElementById('quizMode');
  quizMode.addEventListener('change', ()=>{
    document.getElementById('quizTopicWrap').classList.toggle('hidden', quizMode.value!=='topic');
  });
  document.getElementById('quizStart').addEventListener('click', startQuiz);
  document.getElementById('quizAgain').addEventListener('click', ()=>{
    document.getElementById('quizDone').classList.add('hidden');
    document.getElementById('quizSetup').classList.remove('hidden');
  });

  let qSet=[], qi=0, qCorrect=0, qAnswered=0;
  function startQuiz(){
    let pool = quiz.slice();
    if(quizMode.value==='topic'){ pool = pool.filter(q=>q.t===document.getElementById('quizTopic').value); }
    for(let i=pool.length-1;i>0;i--){ const j=Math.random()*(i+1)|0; [pool[i],pool[j]]=[pool[j],pool[i]]; }
    if(quizMode.value==='random20') pool = pool.slice(0,20);
    qSet = pool; qi=0; qCorrect=0; qAnswered=0;
    document.getElementById('quizSetup').classList.add('hidden');
    document.getElementById('quizDone').classList.add('hidden');
    document.getElementById('quizPlay').classList.remove('hidden');
    renderQ();
  }
  function renderQ(){
    const q = qSet[qi];
    document.getElementById('quizProgress').textContent = `Question ${qi+1} / ${qSet.length}`;
    document.getElementById('quizRunning').textContent = `Score : ${qCorrect}/${qAnswered}`;
    document.getElementById('quizTopicTag').textContent = TMAP[q.t] + (q.type==='open'?' · question ouverte (auto-évaluée)':'');
    rich(document.getElementById('quizQ'), q.q);
    const cc = document.getElementById('quizChoices'); cc.innerHTML='';
    const openBox = document.getElementById('quizOpen');
    const expl = document.getElementById('quizExplain');
    expl.classList.add('hidden'); expl.textContent='';
    document.getElementById('quizNext').classList.add('hidden');

    if(q.type==='mcq'){
      openBox.classList.add('hidden');
      cc.classList.remove('hidden');
      q.choices.forEach((ch,idx)=>{
        const b = document.createElement('button');
        b.className='choice'; b.innerHTML = richInline(ch);
        b.addEventListener('click', ()=>pickMcq(idx, b));
        cc.appendChild(b);
      });
    } else {
      cc.classList.add('hidden');
      openBox.classList.remove('hidden');
      document.getElementById('quizModel').classList.add('hidden');
      rich(document.getElementById('quizModel'), q.model);
      document.getElementById('quizSelfGrade').classList.add('hidden');
      document.getElementById('quizReveal').classList.remove('hidden');
    }
  }
  function pickMcq(idx, btn){
    const q = qSet[qi];
    [...document.getElementById('quizChoices').children].forEach((b,i)=>{
      b.disabled = true;
      if(i===q.answer) b.classList.add('correct');
      if(i===idx && idx!==q.answer) b.classList.add('wrong');
    });
    qAnswered++;
    if(idx===q.answer) qCorrect++;
    const expl = document.getElementById('quizExplain');
    expl.innerHTML = '<p class="verdict">' + (idx===q.answer ? '✓ Correct.' : '✗ Faux.') + '</p>' + mdBlock(q.explain);
    expl.classList.remove('hidden');
    document.getElementById('quizRunning').textContent = `Score : ${qCorrect}/${qAnswered}`;
    nextOrFinish();
  }
  document.getElementById('quizReveal').addEventListener('click', ()=>{
    document.getElementById('quizModel').classList.remove('hidden');
    document.getElementById('quizSelfGrade').classList.remove('hidden');
    document.getElementById('quizReveal').classList.add('hidden');
  });
  [...document.querySelectorAll('#quizSelfGrade button')].forEach(b=>{
    b.addEventListener('click', ()=>{
      qAnswered++; if(b.dataset.sg==='1') qCorrect++;
      document.getElementById('quizSelfGrade').classList.add('hidden');
      document.getElementById('quizRunning').textContent = `Score : ${qCorrect}/${qAnswered}`;
      nextOrFinish();
    });
  });
  function nextOrFinish(){
    const nb = document.getElementById('quizNext');
    nb.classList.remove('hidden');
    nb.textContent = (qi < qSet.length-1) ? 'Suivant →' : 'Voir le résultat';
  }
  document.getElementById('quizNext').addEventListener('click', ()=>{
    if(qi < qSet.length-1){ qi++; renderQ(); }
    else finishQuiz();
  });
  function finishQuiz(){
    document.getElementById('quizPlay').classList.add('hidden');
    const done = document.getElementById('quizDone'); done.classList.remove('hidden');
    const pct = qAnswered ? Math.round(100*qCorrect/qAnswered) : 0;
    document.getElementById('quizScore').textContent = `${qCorrect} / ${qAnswered}  (${pct} %)`;
    let verdict;
    if(pct>=85) verdict = "Excellent — tu es prêt sur ce périmètre. Refais le mode « Examen blanc ».";
    else if(pct>=70) verdict = "Bien. Revois les fiches des questions ratées, puis recommence.";
    else if(pct>=50) verdict = "À consolider. Relis les fiches 🔴 priorité haute et refais un tour.";
    else verdict = "Reprends les fiches en profondeur avant de refaire le quiz.";
    document.getElementById('quizVerdict').textContent = verdict;
    if(pct > store.quizBest){ store.quizBest = pct; save(); }
  }

  /* ================= EXAM ================= */
  const examPick = document.getElementById('examPick');
  function renderExam(){
    const ex = window.ML.exams[examPick.value];
    const body = document.getElementById('examBody');
    body.innerHTML = `<h2>${ex.title}</h2>`;
    ex.items.forEach((it,i)=>{
      const d = document.createElement('details');
      d.className = 'exam-q';
      d.innerHTML = `<summary>${i+1}. ${richInline(it[0])}</summary>` +
        `<div class="exam-a md-body">${mdBlock(it[1])}</div>`;
      body.appendChild(d);
    });
  }
  examPick.addEventListener('change', renderExam);

  // timer
  let timerInt=null, timerStart=0;
  document.getElementById('examTimerBtn').addEventListener('click', ()=>{
    const btn = document.getElementById('examTimerBtn');
    if(timerInt){ clearInterval(timerInt); timerInt=null; btn.textContent='▶ Reprendre le chrono'; return; }
    timerStart = Date.now() - (timerStart? (Date.now()-timerStart-0): 0);
    if(!timerStart) timerStart = Date.now();
    const base = Date.now();
    let elapsedBefore = parseTimer();
    timerInt = setInterval(()=>{
      const s = elapsedBefore + Math.floor((Date.now()-base)/1000);
      const mm = String(Math.floor(s/60)).padStart(2,'0');
      const ss = String(s%60).padStart(2,'0');
      document.getElementById('examTimer').textContent = `${mm}:${ss}` + (s>=5400?'  — 1h30 écoulées !':'');
    }, 1000);
    btn.textContent = '⏸ Pause';
  });
  function parseTimer(){
    const t = document.getElementById('examTimer').textContent.slice(0,5).split(':');
    return (parseInt(t[0])||0)*60 + (parseInt(t[1])||0);
  }

  /* ================= FICHES ================= */
  function fid(f){ return f.slice(0,2); }
  function renderFiches(){
    const list = document.getElementById('ficheList');
    if(list.dataset.done) return;
    list.innerHTML = DATA.fiches.map(f=>
      `<button class="fiche" data-f="${f.f}"><b>${f.f}</b><small>${f.d}</small></button>`
    ).join('');
    list.dataset.done = '1';
    list.addEventListener('click', e=>{
      const b = e.target.closest('button.fiche'); if(b) openFiche(b.dataset.f);
    });
  }

  const modal = document.getElementById('ficheModal');
  function openFiche(fname){
    const src = window.ML.ficheText[fid(fname)];
    document.getElementById('ficheTitle').textContent = fname;
    document.getElementById('ficheBody').innerHTML = src
      ? window.MLmd.mdToHtml(src)
      : '<p class="muted">Contenu introuvable. Ouvre le fichier <code>study_guide/'+fname+'</code>.</p>';
    document.getElementById('ficheRaw').onclick = ()=>{ try{ window.open('../study_guide/'+fname,'_blank'); }catch(e){} };
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('ficheBody').scrollTop = 0;
    modal.scrollTop = 0;
    document.getElementById('ficheClose').focus();
  }
  function closeFiche(){ modal.classList.add('hidden'); document.body.style.overflow=''; }
  document.getElementById('ficheClose').addEventListener('click', closeFiche);
  modal.addEventListener('click', e=>{ if(e.target===modal) closeFiche(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !modal.classList.contains('hidden')) closeFiche(); });

  /* ================= init ================= */
  buildCardFilters();
  rebuildDeck(false);
  renderExam();
  renderHome();
  show('home');
})();
})();
