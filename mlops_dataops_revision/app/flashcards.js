/* app/flashcards.js — flip-card UI, filtre par chapitre, suivi connu/à revoir.
 * Contenu : data/flashcards-chN.js (ne pas ajouter de cartes ici). */
(function(){
  "use strict";
  window.MDO = window.MDO || {};

  window.MDO.Flashcards = {
    init(ctx){
      const { store, save, chapters, chapterOf, richInline, rich } = ctx;
      const cards = (window.MDO.flashcards || []).slice();

      const fcChapter = document.getElementById('fcChapter');
      const fcReviewOnly = document.getElementById('fcReviewOnly');
      const fcCardEl = document.getElementById('fcCard');
      let order = [], idx = 0;

      fcChapter.innerHTML = '<option value="all">Tous les chapitres</option>' +
        chapters.map(c=>`<option value="${c.num}">CH${c.num} — ${c.short}</option>`).join('');

      function currentDeck(){
        let d = cards.slice();
        if(fcChapter.value!=='all') d = d.filter(c=>c.chapter===Number(fcChapter.value));
        if(fcReviewOnly.checked) d = d.filter(c=>store.cards[c.id]==='review');
        return d;
      }
      function rebuildDeck(shuffle){
        order = currentDeck();
        if(shuffle) for(let i=order.length-1;i>0;i--){ const j=Math.random()*(i+1)|0; [order[i],order[j]]=[order[j],order[i]]; }
        idx = 0; renderCard();
      }
      function renderCard(){
        const empty = document.getElementById('fcEmpty');
        const stage = document.getElementById('fcStage');
        if(!order.length){ empty.classList.remove('hidden'); stage.classList.add('hidden'); return; }
        empty.classList.add('hidden'); stage.classList.remove('hidden');
        if(idx<0) idx=0; if(idx>=order.length) idx=order.length-1;
        const c = order[idx];
        fcCardEl.classList.remove('flip');
        fcCardEl.style.setProperty('--ch', chapterOf(c.chapter).color);
        const status = store.cards[c.id];
        const tag = `CH${c.chapter} · ${chapterOf(c.chapter).short}` + (status ? ' · '+(status==='known'?'connue ✓':'à revoir') : '');
        document.getElementById('fcTagF').textContent = tag;
        document.getElementById('fcTagB').textContent = tag;
        document.getElementById('fcQ').innerHTML = richInline(c.front);
        rich(document.getElementById('fcA'), c.back);
        document.getElementById('fcCounter').textContent = `carte ${idx+1} / ${order.length}`;
      }
      function mark(status){
        if(!order.length) return;
        const c = order[idx];
        store.cards[c.id] = status; save();
        ctx.refreshHome();
        if(idx < order.length-1){ idx++; renderCard(); }
        else renderCard();
      }

      fcCardEl.addEventListener('click', ()=>fcCardEl.classList.toggle('flip'));
      document.getElementById('fcNext').addEventListener('click', ()=>{ if(idx<order.length-1){idx++;renderCard();} });
      document.getElementById('fcPrev').addEventListener('click', ()=>{ if(idx>0){idx--;renderCard();} });
      document.getElementById('fcKnow').addEventListener('click', ()=>mark('known'));
      document.getElementById('fcReview').addEventListener('click', ()=>mark('review'));
      document.getElementById('fcShuffle').addEventListener('click', ()=>rebuildDeck(true));
      [fcChapter, fcReviewOnly].forEach(el=>el.addEventListener('change', ()=>rebuildDeck(false)));
      document.addEventListener('keydown', (e)=>{
        if(document.getElementById('view-cards').classList.contains('hidden')) return;
        if(e.target.tagName==='SELECT'||e.target.tagName==='INPUT') return;
        if(e.code==='Space'){ e.preventDefault(); fcCardEl.classList.toggle('flip'); }
        else if(e.code==='ArrowRight'){ if(idx<order.length-1){idx++;renderCard();} }
        else if(e.code==='ArrowLeft'){ if(idx>0){idx--;renderCard();} }
        else if(e.key==='k'||e.key==='K'){ mark('known'); }
        else if(e.key==='r'||e.key==='R'){ mark('review'); }
      });

      rebuildDeck(false);

      this.stats = function(){
        let known=0, review=0;
        cards.forEach(c=>{ const s=store.cards[c.id]; if(s==='known')known++; else if(s==='review')review++; });
        return {known, review, total:cards.length};
      };
      this.statsFor = function(num){
        const cc = cards.filter(c=>c.chapter===num);
        const known = cc.filter(c=>store.cards[c.id]==='known').length;
        return {known, total: cc.length};
      };
      this.goRevise = function(chapterNum){
        fcChapter.value = chapterNum ? String(chapterNum) : 'all';
        fcReviewOnly.checked = false;
        order = currentDeck().sort((a,b)=>rank(a)-rank(b));
        idx = 0; renderCard();
        function rank(c){ const s=store.cards[c.id]; return s==='review'?0 : s===undefined?1 : 2; }
      };
    }
  };
})();
