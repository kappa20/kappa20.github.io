/* app/mindmap.js — mindmap 2D générique : layout d'arbre "tidy" maison (2 passes),
 * rendu SVG, pan/zoom, plier/déplier, popover de définition. Sans dépendance externe.
 * Contenu : data/mindmap-chN.js (ne pas ajouter de logique de contenu ici). */
(function(){
  "use strict";
  window.MDO = window.MDO || {};

  const ROW_H = 58, COL_W = 250, BOX_W = 196, PAD = 40;

  function hexToRgba(hex, a){
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(!m) return hex;
    const r = parseInt(m[1],16), g = parseInt(m[2],16), b = parseInt(m[3],16);
    return `rgba(${r},${g},${b},${a})`;
  }

  function wrapLabel(text, maxChars){
    const words = String(text).split(/\s+/);
    const lines = [];
    let cur = '';
    words.forEach(w=>{
      const trial = cur ? cur + ' ' + w : w;
      if(trial.length > maxChars && cur){ lines.push(cur); cur = w; }
      else cur = trial;
    });
    if(cur) lines.push(cur);
    if(lines.length > 2){ lines[1] = (lines[1].slice(0, maxChars-1) + '…'); lines.length = 2; }
    return lines;
  }

  function escXml(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  window.MDO.Mindmap = {
    init(ctx){
      const { chapters, chapterOf, store, save } = ctx;
      const mmChapter = document.getElementById('mmChapter');
      const svg = document.getElementById('mmSvg');
      const g = document.getElementById('mmView');
      const stage = document.getElementById('mmStage');

      mmChapter.innerHTML = chapters.map(c=>`<option value="${c.num}">CH${c.num} — ${c.short}</option>`).join('');

      store.mindmapCollapsed = store.mindmapCollapsed || {};

      let currentNum = chapters[0].num;
      let byId = {}, childrenOf = {}, root = null;
      let tx = 0, ty = 0, scale = 1;

      function collapsedSet(){
        const key = 'ch'+currentNum;
        if(!store.mindmapCollapsed[key]) store.mindmapCollapsed[key] = [];
        return new Set(store.mindmapCollapsed[key]);
      }
      function saveCollapsed(set){
        store.mindmapCollapsed['ch'+currentNum] = [...set];
        save();
      }

      function loadChapter(num){
        currentNum = num;
        const nodes = (window.MDO.mindmaps || {})['ch'+num] || [];
        byId = {}; childrenOf = {};
        nodes.forEach(n=>{ byId[n.id] = n; childrenOf[n.id] = []; });
        nodes.forEach(n=>{ if(n.parentId && childrenOf[n.parentId]) childrenOf[n.parentId].push(n); });
        root = nodes.find(n=>n.parentId===null) || nodes[0] || null;
        tx = 0; ty = 0; scale = 1;
        render();
      }

      function countLeaves(id){
        const kids = childrenOf[id] || [];
        if(!kids.length) return 1;
        return kids.reduce((s,k)=>s+countLeaves(k.id), 0);
      }

      function layout(collapsed){
        if(!root) return { visible: [], w: 400, h: 300 };
        let leafCounter = 0;
        const visible = [];
        let maxDepth = 0;
        function visit(node, depth){
          maxDepth = Math.max(maxDepth, depth);
          node._depth = depth;
          node._x = depth * COL_W;
          const kids = childrenOf[node.id] || [];
          const expand = kids.length > 0 && !collapsed.has(node.id);
          visible.push(node);
          if(expand){
            kids.forEach(k=>visit(k, depth+1));
            const ys = kids.map(k=>k._y);
            node._y = (Math.min(...ys) + Math.max(...ys)) / 2;
          } else {
            node._y = leafCounter * ROW_H;
            leafCounter++;
          }
        }
        visit(root, 0);
        const w = (maxDepth+1)*COL_W + BOX_W + PAD*2;
        const h = Math.max(leafCounter,1)*ROW_H + PAD*2;
        return { visible, w, h };
      }

      function render(){
        const collapsed = collapsedSet();
        const { visible, w, h } = layout(collapsed);
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        const color = chapterOf(currentNum).color;
        let svgHtml = '';

        // edges first (so nodes draw on top)
        visible.forEach(n=>{
          if(!n.parentId) return;
          const p = byId[n.parentId];
          if(!p || !visible.includes(p)) return;
          const x1 = p._x + BOX_W, y1 = p._y + PAD, x2 = n._x, y2 = n._y + PAD;
          const mx = (x1+x2)/2;
          svgHtml += `<path class="mm-edge" d="M ${x1},${y1} C ${mx},${y1} ${mx},${y2} ${x2},${y2}"/>`;
        });

        visible.forEach(n=>{
          const kids = childrenOf[n.id] || [];
          const hasKids = kids.length > 0;
          const isCollapsed = hasKids && collapsed.has(n.id);
          const lines = wrapLabel(n.label, 22);
          const boxH = lines.length > 1 ? 54 : 36;
          const x = n._x, y = n._y + PAD - boxH/2;
          const alpha = n.kind==='root' ? 1 : n.kind==='branch' ? 0.88 : 0.62;
          const fill = hexToRgba(n.color || color, alpha);
          const textLines = lines.map((l,i)=>`<tspan x="${x+12}" dy="${i===0 ? (lines.length>1?'-0.3em':'0.32em') : '1.15em'}">${escXml(l)}</tspan>`).join('');
          svgHtml += `<g class="mm-node" data-id="${escXml(n.id)}" style="cursor:pointer">
            <rect x="${x}" y="${y}" width="${BOX_W}" height="${boxH}" rx="10" fill="${fill}" stroke="rgba(0,0,0,.15)"/>
            <text x="${x+12}" y="${y+boxH/2}">${hasKids ? (isCollapsed?'▸ ':'▾ ') : ''}${textLines}</text>`;
          if(isCollapsed){
            const cnt = countLeaves(n.id);
            svgHtml += `<circle class="mm-badge" cx="${x+BOX_W}" cy="${y}" r="10"/><text class="mm-badge-text" x="${x+BOX_W}" y="${y+3}" text-anchor="middle">${cnt}</text>`;
          }
          svgHtml += `</g>`;
        });

        g.innerHTML = svgHtml;
        applyTransform();
      }

      function applyTransform(){
        g.setAttribute('transform', `translate(${tx},${ty}) scale(${scale})`);
      }

      function toWorld(clientX, clientY){
        const pt = svg.createSVGPoint();
        pt.x = clientX; pt.y = clientY;
        return pt.matrixTransform(svg.getScreenCTM().inverse());
      }

      // ---- pan ----
      let dragging = false, dragStart = null, txStart = 0, tyStart = 0;
      svg.addEventListener('pointerdown', (e)=>{
        if(e.target.closest('.mm-node')) return;
        dragging = true;
        svg.classList.add('dragging');
        dragStart = toWorld(e.clientX, e.clientY);
        txStart = tx; tyStart = ty;
        svg.setPointerCapture(e.pointerId);
      });
      svg.addEventListener('pointermove', (e)=>{
        if(!dragging) return;
        const cur = toWorld(e.clientX, e.clientY);
        tx = txStart + (cur.x - dragStart.x);
        ty = tyStart + (cur.y - dragStart.y);
        applyTransform();
      });
      ['pointerup','pointercancel'].forEach(evt=>svg.addEventListener(evt, ()=>{ dragging=false; svg.classList.remove('dragging'); }));

      // ---- zoom ----
      svg.addEventListener('wheel', (e)=>{
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.12 : 1/1.12;
        const s2 = Math.min(2.5, Math.max(0.4, scale*factor));
        const w = toWorld(e.clientX, e.clientY);
        tx = w.x - (w.x - tx) * (s2/scale);
        ty = w.y - (w.y - ty) * (s2/scale);
        scale = s2;
        applyTransform();
      }, { passive:false });

      // ---- click: expand/collapse or popover ----
      svg.addEventListener('click', (e)=>{
        const nodeEl = e.target.closest('.mm-node');
        if(!nodeEl) return;
        const id = nodeEl.dataset.id;
        const node = byId[id];
        if(!node) return;
        const kids = childrenOf[id] || [];
        if(kids.length){
          const set = collapsedSet();
          if(set.has(id)) set.delete(id); else set.add(id);
          saveCollapsed(set);
          render();
        } else if(node.note){
          showPopover(node, e.clientX, e.clientY);
        }
      });

      function showPopover(node, clientX, clientY){
        closePopover();
        const rect = stage.getBoundingClientRect();
        const pop = document.createElement('div');
        pop.className = 'mm-popover';
        pop.id = 'mmPopover';
        pop.style.left = Math.max(8, Math.min(rect.width-296, clientX-rect.left+10)) + 'px';
        pop.style.top = Math.max(8, Math.min(rect.height-120, clientY-rect.top+10)) + 'px';
        pop.innerHTML = `<button class="close" aria-label="Fermer">✕</button><h4>${escXml(node.label)}</h4><div>${window.MDOmd.mdToHtml(node.note)}</div>`;
        pop.querySelector('.close').addEventListener('click', closePopover);
        stage.appendChild(pop);
      }
      function closePopover(){ const p = document.getElementById('mmPopover'); if(p) p.remove(); }
      document.addEventListener('click', (e)=>{
        if(e.target.closest('.mm-popover') || e.target.closest('.mm-node')) return;
        closePopover();
      });

      document.getElementById('mmExpandAll').addEventListener('click', ()=>{ saveCollapsed(new Set()); render(); });
      document.getElementById('mmCollapseAll').addEventListener('click', ()=>{
        const set = new Set();
        Object.keys(childrenOf).forEach(id=>{ if(childrenOf[id].length && id !== (root&&root.id)) set.add(id); });
        if(root) set.delete(root.id);
        saveCollapsed(set); render();
      });
      document.getElementById('mmRecenter').addEventListener('click', ()=>{ tx=0; ty=0; scale=1; applyTransform(); });

      mmChapter.addEventListener('change', ()=>{ closePopover(); loadChapter(Number(mmChapter.value)); });

      loadChapter(currentNum);
    }
  };
})();
