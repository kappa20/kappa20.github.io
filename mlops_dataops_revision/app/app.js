/* app/app.js — orchestrateur : navigation, thème, tableau de bord Accueil,
 * persistance localStorage, câblage des modules de fonctionnalités (app/*.js).
 * On ne touche pas ce fichier pour ajouter du contenu (voir data/*.js). */
(function(){
  "use strict";
  const chapters = window.MDO.chapters;
  const byNum = {}; chapters.forEach(c=>byNum[c.num]=c);
  function chapterOf(num){ return byNum[num] || {id:'ch?',num,title:'?',short:'?',color:'#888'}; }

  // chapters.js is the single source of truth for chapter colors — mirror into CSS vars.
  const root = document.documentElement;
  chapters.forEach(c=> root.style.setProperty('--ch'+c.num, c.color));

  const KEY = 'mdo_revision_v1';
  let store = { cards:{}, quizBest:0, mindmapCollapsed:{}, theme:null };
  try{ const raw = localStorage.getItem(KEY); if(raw) store = Object.assign(store, JSON.parse(raw)); }catch(e){}
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch(e){} }

  // ---- rendu markdown-lite partagé ----
  const MD = window.MDOmd;
  function mdBlock(src){
    src = src == null ? '' : String(src);
    if(src.indexOf('\n\n') === -1) src = src.replace(/\n/g, '\n\n');
    return MD.mdToHtml(src).replace(/>\n</g, '><');
  }
  function rich(el, src){ if(el) el.innerHTML = mdBlock(src); }
  function richInline(src){
    const h = mdBlock(src).trim();
    const m = h.match(/^<p>([\s\S]*?)<\/p>$/);
    return (m && m[1].indexOf('<p>') === -1 && m[1].indexOf('<ul') === -1) ? m[1] : h;
  }

  // ---- theme ----
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
    if(confirm('Réinitialiser toute la progression (flashcards, meilleur score, cartes mentales) ?')){
      store = { cards:{}, quizBest:0, mindmapCollapsed:{}, theme:store.theme };
      save(); renderHome(); location.reload();
    }
  });

  // ---- nav ----
  const views = ['home','cards','quiz','exam','mindmap'];
  const tabBtns = [...document.querySelectorAll('#tabs button')];
  function show(v){
    views.forEach(x=>document.getElementById('view-'+x).classList.toggle('hidden', x!==v));
    tabBtns.forEach(b=>b.setAttribute('aria-current', String(b.dataset.view===v)));
    if(v==='home') renderHome();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  tabBtns.forEach(b=>b.addEventListener('click', ()=>show(b.dataset.view)));

  // ---- shared context for feature modules ----
  const ctx = { store, save, chapters, chapterOf, mdBlock, rich, richInline, show, refreshHome: ()=>renderHome() };

  window.MDO.Flashcards.init(ctx);
  window.MDO.Quiz.init(ctx);
  window.MDO.Exam.init(ctx);
  window.MDO.Mindmap.init(ctx);

  /* ================= HOME ================= */
  function renderHome(){
    const box = document.getElementById('homeChapters');
    box.innerHTML = '';
    chapters.forEach(c=>{
      const fc = window.MDO.Flashcards.statsFor ? window.MDO.Flashcards.statsFor(c.num) : {known:0,total:0};
      const qn = window.MDO.Quiz.countFor ? window.MDO.Quiz.countFor(c.num) : 0;
      const el = document.createElement('button');
      el.className = 'ch-card';
      el.style.setProperty('--ch', c.color);
      el.innerHTML = `<div class="num">Chapitre ${c.num}</div><div class="ttl">${c.short}</div>
        <div class="prog" style="margin-bottom:6px"><i style="width:${fc.total?Math.round(100*fc.known/fc.total):0}%;background:${c.color}"></i></div>
        <div class="muted" style="font-size:12px">${fc.known}/${fc.total} flashcards · ${qn} questions de quiz</div>`;
      el.addEventListener('click', ()=>{ show('cards'); window.MDO.Flashcards.goRevise(c.num); });
      box.appendChild(el);
    });

    const prog = document.getElementById('topicProgress');
    prog.innerHTML = chapters.map(c=>{
      const fc = window.MDO.Flashcards.statsFor ? window.MDO.Flashcards.statsFor(c.num) : {known:0,total:0};
      const p = fc.total ? Math.round(100*fc.known/fc.total) : 0;
      return `<div class="topic-line">
        <strong>CH${c.num} — ${c.title}</strong>
        <span class="pill">${p} %</span>
        <div style="grid-column:1/-1"><div class="prog"><i style="width:${p}%;background:${c.color}"></i></div></div>
        <span class="meta">${fc.known}/${fc.total} flashcards connues</span>
      </div>`;
    }).join('');
  }

  renderHome();
  show('home');
})();
