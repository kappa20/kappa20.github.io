/* app/quiz.js — QCM (correction immédiate) + questions ouvertes (auto-évaluées).
 * Contenu : data/quiz-chN.js (ne pas ajouter de questions ici). */
(function(){
  "use strict";
  window.MDO = window.MDO || {};

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.random()*(i+1)|0; [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  window.MDO.Quiz = {
    init(ctx){
      const { store, save, chapters, chapterOf, richInline, mdBlock } = ctx;
      const all = (window.MDO.quiz || []).slice();

      const quizChapter = document.getElementById('quizChapter');
      const quizType = document.getElementById('quizType');
      quizChapter.innerHTML = '<option value="all">Tous les chapitres</option>' +
        chapters.map(c=>`<option value="${c.num}">CH${c.num} — ${c.short}</option>`).join('');

      let set = [], qi = 0, correct = 0, answered = 0, activeColor = null;

      function startQuiz(){
        let pool = all.slice();
        if(quizChapter.value!=='all') pool = pool.filter(q=>q.chapter===Number(quizChapter.value));
        if(quizType.value==='mcq') pool = pool.filter(q=>q.type==='mcq');
        else if(quizType.value==='open') pool = pool.filter(q=>q.type==='open');
        set = shuffle(pool);
        qi = 0; correct = 0; answered = 0;
        activeColor = quizChapter.value!=='all' ? chapterOf(Number(quizChapter.value)).color : null;
        document.getElementById('quizSetup').classList.add('hidden');
        document.getElementById('quizDone').classList.add('hidden');
        document.getElementById('quizPlay').classList.remove('hidden');
        if(!set.length){ finishQuiz(); return; }
        renderQ();
      }

      function renderQ(){
        const q = set[qi];
        document.getElementById('quizProgress').textContent = `Question ${qi+1} / ${set.length}`;
        document.getElementById('quizRunning').textContent = `Score : ${correct}/${answered}`;
        const ch = chapterOf(q.chapter);
        document.getElementById('quizTopicTag').textContent = `CH${q.chapter} · ${ch.short}` + (q.type==='open' ? ' · question ouverte (auto-évaluée)' : '');
        document.getElementById('quizQ').innerHTML = richInline(q.q);
        const cc = document.getElementById('quizChoices'); cc.innerHTML='';
        const openBox = document.getElementById('quizOpen');
        const expl = document.getElementById('quizExplain');
        expl.classList.add('hidden'); expl.innerHTML='';
        document.getElementById('quizNext').classList.add('hidden');

        if(q.type==='mcq'){
          openBox.classList.add('hidden');
          cc.classList.remove('hidden');
          q.choices.forEach((choice,i)=>{
            const b = document.createElement('button');
            b.className='choice'; b.innerHTML = richInline(choice);
            b.style.setProperty('--ch', ch.color);
            b.addEventListener('click', ()=>pickMcq(i, b));
            cc.appendChild(b);
          });
        } else {
          cc.classList.add('hidden');
          openBox.classList.remove('hidden');
          document.getElementById('quizModel').classList.add('hidden');
          document.getElementById('quizModel').innerHTML = mdBlock(q.model);
          document.getElementById('quizSelfGrade').classList.add('hidden');
          document.getElementById('quizReveal').classList.remove('hidden');
        }
      }

      function pickMcq(i, btn){
        const q = set[qi];
        [...document.getElementById('quizChoices').children].forEach((b,k)=>{
          b.disabled = true;
          if(k===q.answer) b.classList.add('correct');
          if(k===i && i!==q.answer) b.classList.add('wrong');
        });
        answered++;
        if(i===q.answer) correct++;
        const expl = document.getElementById('quizExplain');
        expl.innerHTML = '<p class="verdict">' + (i===q.answer ? '✓ Correct.' : '✗ Faux.') + '</p>' + mdBlock(q.explain);
        expl.classList.remove('hidden');
        document.getElementById('quizRunning').textContent = `Score : ${correct}/${answered}`;
        nextOrFinish();
      }

      document.getElementById('quizReveal').addEventListener('click', ()=>{
        document.getElementById('quizModel').classList.remove('hidden');
        document.getElementById('quizSelfGrade').classList.remove('hidden');
        document.getElementById('quizReveal').classList.add('hidden');
      });
      [...document.querySelectorAll('#quizSelfGrade button')].forEach(b=>{
        b.addEventListener('click', ()=>{
          answered++; if(b.dataset.sg==='1') correct++;
          document.getElementById('quizSelfGrade').classList.add('hidden');
          document.getElementById('quizRunning').textContent = `Score : ${correct}/${answered}`;
          nextOrFinish();
        });
      });
      function nextOrFinish(){
        const nb = document.getElementById('quizNext');
        nb.classList.remove('hidden');
        nb.textContent = (qi < set.length-1) ? 'Suivant →' : 'Voir le résultat';
      }
      document.getElementById('quizNext').addEventListener('click', ()=>{
        if(qi < set.length-1){ qi++; renderQ(); }
        else finishQuiz();
      });

      function finishQuiz(){
        document.getElementById('quizPlay').classList.add('hidden');
        const done = document.getElementById('quizDone'); done.classList.remove('hidden');
        const pct = answered ? Math.round(100*correct/answered) : 0;
        const color = activeColor || getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        document.getElementById('quizScoreCircle').style.background = `conic-gradient(${color} ${pct}%, #e0e0e0 0%)`;
        document.getElementById('quizScorePct').textContent = pct + ' %';
        document.getElementById('quizScoreLine').textContent = `${correct} / ${answered} bonnes réponses`;
        let verdict;
        if(pct>=85) verdict = "Excellent — tu maîtrises ce périmètre. Passe à l'Examen chronométré.";
        else if(pct>=70) verdict = "Bien. Revois les flashcards des notions ratées, puis recommence.";
        else if(pct>=50) verdict = "À consolider. Repasse par les flashcards du chapitre avant de refaire un tour.";
        else verdict = "Reprends le cours et les flashcards en profondeur avant de refaire le quiz.";
        document.getElementById('quizVerdict').textContent = verdict;
        if(pct > (store.quizBest||0)){ store.quizBest = pct; save(); }
        ctx.refreshHome();
      }

      document.getElementById('quizStart').addEventListener('click', startQuiz);
      document.getElementById('quizAgain').addEventListener('click', ()=>{
        document.getElementById('quizDone').classList.add('hidden');
        document.getElementById('quizSetup').classList.remove('hidden');
      });

      this.startRandom = function(){
        quizChapter.value = 'all'; quizType.value = 'mixed';
        startQuiz();
      };
      this.countFor = function(num){ return all.filter(q=>q.chapter===num).length; };
    }
  };
})();
