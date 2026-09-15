/* app/exam.js — rend un chapitre au format TD/TP réel (QCM / questions directes /
 * définitions / analyse / étude de cas), correction masquée section par section.
 * Contenu : data/exam-chN.js (ne pas ajouter d'exercices ici). */
(function(){
  "use strict";
  window.MDO = window.MDO || {};

  window.MDO.Exam = {
    init(ctx){
      const { chapters, chapterOf, richInline, mdBlock } = ctx;
      const examChapter = document.getElementById('examChapter');
      const body = document.getElementById('examBody');

      examChapter.innerHTML = chapters.map(c=>`<option value="${c.num}">CH${c.num} — ${c.short}</option>`).join('');

      function revealBtn(id){
        return `<button class="reveal-btn" data-target="${id}">Afficher la correction</button>
                <div class="correction hidden" id="${id}"></div>`;
      }

      function render(){
        const num = Number(examChapter.value);
        const ex = (window.MDO.exams || {})['ch'+num];
        const ch = chapterOf(num);
        if(!ex){ body.innerHTML = '<p class="muted">Contenu à venir pour ce chapitre.</p>'; return; }
        let uid = 0;
        const next = () => 'ex-rev-' + (uid++);

        let html = `<h2><span class="ch-badge" style="--ch:${ch.color}">CH${num}</span> ${esc(ex.title)}</h2>`;
        html += `<p class="muted">Durée indicative : ${ex.timeMinutes||90} minutes.</p>`;

        html += `<div class="exam-section"><h3>1 · QCM</h3>`;
        (ex.qcm||[]).forEach((it,i)=>{
          const rid = next();
          html += `<div class="exam-item"><div class="prompt">${i+1}. ${richInline(it.q)}</div>`;
          html += `<ul class="choices">` + it.choices.map((c,k)=>`<li><b>${'abcd'[k]})</b> ${richInline(c)}</li>`).join('') + `</ul>`;
          html += revealBtn(rid);
          html += `</div>`;
          pending.push({id:rid, html: mdBlock(it.correction || ('Réponse : ' + 'abcd'[it.answer]))});
        });
        html += `</div>`;

        html += `<div class="exam-section"><h3>2 · Questions directes</h3>`;
        (ex.questions||[]).forEach((it,i)=>{
          const rid = next();
          html += `<div class="exam-item"><div class="prompt">${i+1}. ${richInline(it.q)}</div>` + revealBtn(rid) + `</div>`;
          pending.push({id:rid, html: mdBlock(it.correction)});
        });
        html += `</div>`;

        html += `<div class="exam-section"><h3>3 · Définitions à rédiger</h3>`;
        (ex.vocab||[]).forEach((it,i)=>{
          const rid = next();
          html += `<div class="exam-item"><div class="prompt">${i+1}. ${richInline(it.term)}</div>` + revealBtn(rid) + `</div>`;
          pending.push({id:rid, html: mdBlock(it.correction)});
        });
        html += `</div>`;

        html += `<div class="exam-section"><h3>4 · Questions d'analyse</h3>`;
        (ex.analysis||[]).forEach((it,i)=>{
          const rid = next();
          html += `<div class="exam-item"><div class="muted" style="margin-bottom:6px">${mdBlock(it.scenario)}</div><div class="prompt">${i+1}. ${richInline(it.question)}</div>` + revealBtn(rid) + `</div>`;
          pending.push({id:rid, html: mdBlock(it.correction)});
        });
        html += `</div>`;

        if(ex.case){
          html += `<div class="exam-section"><h3>5 · Étude de cas</h3><div class="exam-case">`;
          html += `<div class="prompt">${esc(ex.case.title)}</div>`;
          html += `<div class="context">${mdBlock(ex.case.context)}</div>`;
          (ex.case.tasks||[]).forEach((it,i)=>{
            const rid = next();
            html += `<div class="exam-item"><div class="prompt">${richInline(it.prompt)}</div>` + revealBtn(rid) + `</div>`;
            pending.push({id:rid, html: mdBlock(it.correction)});
          });
          if((ex.case.deliverables||[]).length){
            html += `<div class="muted" style="margin-top:10px">Livrables attendus :</div>`;
            html += `<ul class="deliverables">` + ex.case.deliverables.map(d=>`<li>${esc(d)}</li>`).join('') + `</ul>`;
          }
          html += `</div></div>`;
        }

        body.innerHTML = html;
        pending.forEach(p=>{ const el = document.getElementById(p.id); if(el) el.innerHTML = p.html; });
      }
      let pending = [];
      function esc(s){ return window.MDOmd.esc(String(s==null?'':s)); }

      const wrappedRender = () => { pending = []; render(); };

      body.addEventListener('click', (e)=>{
        const btn = e.target.closest('.reveal-btn');
        if(!btn) return;
        const target = document.getElementById(btn.dataset.target);
        target.classList.toggle('hidden');
        btn.textContent = target.classList.contains('hidden') ? 'Afficher la correction' : 'Masquer la correction';
      });

      examChapter.addEventListener('change', wrappedRender);

      // timer
      let timerInt=null, timerStart=0, elapsedBefore=0;
      document.getElementById('examTimerBtn').addEventListener('click', ()=>{
        const btn = document.getElementById('examTimerBtn');
        if(timerInt){ clearInterval(timerInt); timerInt=null; elapsedBefore = parseTimer(); btn.textContent='▶ Reprendre le chrono'; return; }
        const base = Date.now();
        timerInt = setInterval(()=>{
          const s = elapsedBefore + Math.floor((Date.now()-base)/1000);
          const mm = String(Math.floor(s/60)).padStart(2,'0');
          const ss = String(s%60).padStart(2,'0');
          document.getElementById('examTimer').textContent = `${mm}:${ss}` + (s>=5400?' — 1h30 écoulées !':'');
        }, 1000);
        btn.textContent = '⏸ Pause';
      });
      function parseTimer(){
        const t = document.getElementById('examTimer').textContent.slice(0,5).split(':');
        return (parseInt(t[0])||0)*60 + (parseInt(t[1])||0);
      }

      wrappedRender();
    }
  };
})();
