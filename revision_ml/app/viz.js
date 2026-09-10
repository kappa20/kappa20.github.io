/* app/viz.js — onglet "Visuels" : une visualisation 2D interactive par theme.
 * Autonome : classic script, aucune dependance reseau. Expose window.MLviz.
 * app/app.js appelle MLviz.show() quand l'onglet devient actif. */
window.MLviz = (function(){
  "use strict";

  /* ================= utilitaires generaux ================= */
  function rng(s){ return function(){ s = (s*1664525 + 1013904223) >>> 0; return s/4294967296; }; }
  function gauss(r){ return Math.sqrt(-2*Math.log(1 - r())) * Math.cos(6.28318530718 * r()); }
  function blob(r, n, cx, cy, sd, label){
    var a = [];
    for(var i=0;i<n;i++) a.push({x: cx + gauss(r)*sd, y: cy + gauss(r)*sd, c: label});
    return a;
  }
  function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
  var f1 = function(x){ return (+x).toFixed(1); };
  var f2 = function(x){ return (+x).toFixed(2); };

  function colors(){
    var cs = function(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); };
    return {
      text: cs('--text'), soft: cs('--text-soft'), border: cs('--border'),
      accent: cs('--accent'), good: cs('--good'), bad: cs('--bad'), warn: cs('--warn'), surf: cs('--surface'),
      A: '#3b7ec9', B: '#d06a3c',
      Afill: 'rgba(59,126,201,0.13)', Bfill: 'rgba(208,106,60,0.13)',
      Astrong: 'rgba(59,126,201,0.30)', Bstrong: 'rgba(208,106,60,0.30)'
    };
  }

  /* ================= squelette DOM ================= */
  function canvasEl(host, w, h){
    var cv = document.createElement('canvas');
    cv.className = 'viz-canvas';
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = w*dpr; cv.height = h*dpr;
    cv.style.maxWidth = w + 'px';
    var g = cv.getContext('2d');
    g.scale(dpr, dpr);
    host.appendChild(cv);
    return { cv: cv, g: g, w: w, h: h };
  }
  function controls(host){ var d = document.createElement('div'); d.className = 'viz-controls'; host.appendChild(d); return d; }
  function hint(host, t){ var p = document.createElement('p'); p.className = 'viz-hint'; p.textContent = t; host.appendChild(p); }
  function metrics(host){ var d = document.createElement('div'); d.className = 'viz-metrics'; host.appendChild(d); return d; }
  function button(host, label, on){ var b = document.createElement('button'); b.textContent = label; b.addEventListener('click', on); host.appendChild(b); return b; }

  function slider(host, label, min, max, step, val, fmt, on){
    var wrap = document.createElement('label'); wrap.className = 'viz-ctl';
    var cap = document.createElement('span'); cap.innerHTML = label + ' : <span class="v"></span>';
    var inp = document.createElement('input'); inp.type = 'range';
    inp.min = min; inp.max = max; inp.step = step; inp.value = val;
    var vv = cap.querySelector('.v');
    function sync(){ vv.textContent = fmt ? fmt(+inp.value) : inp.value; }
    inp.addEventListener('input', function(){ sync(); on(+inp.value); });
    wrap.appendChild(cap); wrap.appendChild(inp); host.appendChild(wrap);
    sync();
    return { el: inp, set: function(v){ inp.value = v; sync(); } };
  }
  function toggle(host, label, val, on){
    var wrap = document.createElement('label'); wrap.className = 'viz-ctl chk';
    var inp = document.createElement('input'); inp.type = 'checkbox'; inp.checked = val;
    inp.addEventListener('change', function(){ on(inp.checked); });
    var s = document.createElement('span'); s.textContent = label;
    wrap.appendChild(inp); wrap.appendChild(s); host.appendChild(wrap);
    return inp;
  }
  function picker(host, label, opts, val, on){
    var wrap = document.createElement('label'); wrap.className = 'viz-ctl';
    var cap = document.createElement('span'); cap.textContent = label;
    var sel = document.createElement('select');
    opts.forEach(function(o){ var op = document.createElement('option'); op.value = o[0]; op.textContent = o[1]; sel.appendChild(op); });
    sel.value = val;
    sel.addEventListener('change', function(){ on(sel.value); });
    wrap.appendChild(cap); wrap.appendChild(sel); host.appendChild(wrap);
    return sel;
  }

  /* ================= mini moteur de trace ================= */
  function plot(g, w, h, xlim, ylim, pad){
    pad = pad || { l: 38, r: 12, t: 12, b: 26 };
    var iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
    var C = colors();
    function X(x){ return pad.l + (x - xlim[0]) / (xlim[1]-xlim[0]) * iw; }
    function Y(y){ return pad.t + ih - (y - ylim[0]) / (ylim[1]-ylim[0]) * ih; }
    function xInv(px){ return xlim[0] + (px - pad.l) / iw * (xlim[1]-xlim[0]); }
    function yInv(py){ return ylim[0] + (pad.t + ih - py) / ih * (ylim[1]-ylim[0]); }
    var P = { g: g, w: w, h: h, pad: pad, xlim: xlim, ylim: ylim, C: C, X: X, Y: Y, xInv: xInv, yInv: yInv, iw: iw, ih: ih };

    P.clear = function(){ g.fillStyle = C.surf; g.fillRect(0, 0, w, h); };
    P.frame = function(xl, yl){
      g.strokeStyle = C.border; g.lineWidth = 1;
      g.beginPath(); g.moveTo(pad.l, pad.t); g.lineTo(pad.l, pad.t + ih); g.lineTo(pad.l + iw, pad.t + ih); g.stroke();
      g.fillStyle = C.soft; g.font = '11px -apple-system,system-ui,sans-serif';
      if(xl){ g.textAlign = 'center'; g.fillText(xl, pad.l + iw/2, h - 4); }
      if(yl){ g.save(); g.translate(10, pad.t + ih/2); g.rotate(-Math.PI/2); g.textAlign = 'center'; g.fillText(yl, 0, 0); g.restore(); }
    };
    P.text = function(s, px, py, col, align){
      g.fillStyle = col || C.soft; g.font = '11px -apple-system,system-ui,sans-serif';
      g.textAlign = align || 'left'; g.textBaseline = 'alphabetic';
      g.fillText(s, px, py);
    };
    P.dot = function(x, y, col, r){ g.beginPath(); g.arc(X(x), Y(y), r || 3.6, 0, 6.2832); g.fillStyle = col; g.fill(); };
    P.ring = function(x, y, col, r, lw){ g.beginPath(); g.arc(X(x), Y(y), r || 7, 0, 6.2832); g.strokeStyle = col; g.lineWidth = lw || 2; g.stroke(); };
    P.seg = function(x1, y1, x2, y2, col, lw, dash){
      g.save(); g.setLineDash(dash || []); g.beginPath();
      g.moveTo(X(x1), Y(y1)); g.lineTo(X(x2), Y(y2));
      g.strokeStyle = col; g.lineWidth = lw || 1.5; g.stroke(); g.restore();
    };
    P.curve = function(fn, col, lw, n){
      n = n || 140; g.beginPath();
      for(var i=0;i<=n;i++){
        var x = xlim[0] + (xlim[1]-xlim[0]) * i / n, y = fn(x);
        var px = X(x), py = Y(y);
        py = clamp(py, pad.t - 40, pad.t + ih + 40);
        if(i) g.lineTo(px, py); else g.moveTo(px, py);
      }
      g.strokeStyle = col; g.lineWidth = lw || 2; g.stroke();
    };
    P.paramCurve = function(fx, fy, col, lw, dash){
      g.save(); g.setLineDash(dash || []); g.beginPath();
      for(var i=0;i<=120;i++){ var t = i/120*6.2832; var px = X(fx(t)), py = Y(fy(t)); if(i) g.lineTo(px, py); else g.moveTo(px, py); }
      g.strokeStyle = col; g.lineWidth = lw || 1.5; g.stroke(); g.restore();
    };
    P.shade = function(fn, step){
      step = step || 9;
      for(var px = pad.l; px < pad.l + iw; px += step)
        for(var py = pad.t; py < pad.t + ih; py += step){
          var col = fn(xInv(px + step/2), yInv(py + step/2));
          if(!col) continue;
          g.fillStyle = col; g.fillRect(px, py, step + 0.6, step + 0.6);
        }
    };
    P.lineABC = function(a, b, c, col, lw, dash){
      var x0 = xlim[0], x1 = xlim[1], y0 = ylim[0], y1 = ylim[1], pp = [];
      if(Math.abs(b) > 1e-9){
        [x0, x1].forEach(function(x){ var y = -(a*x + c)/b; if(y >= y0 - 1e-6 && y <= y1 + 1e-6) pp.push([x, y]); });
      }
      if(Math.abs(a) > 1e-9){
        [y0, y1].forEach(function(y){ var x = -(b*y + c)/a; if(x >= x0 - 1e-6 && x <= x1 + 1e-6) pp.push([x, y]); });
      }
      if(pp.length < 2) return;
      P.seg(pp[0][0], pp[0][1], pp[1][0], pp[1][1], col, lw || 2, dash);
    };
    P.mouse = function(cv, cb){
      function h(e){
        var rc = cv.getBoundingClientRect();
        var pt = (e.touches ? e.touches[0] : e);
        var px = (pt.clientX - rc.left) * (w / rc.width);
        var py = (pt.clientY - rc.top) * (h / rc.height);
        if(px < pad.l || px > pad.l + iw || py < pad.t || py > pad.t + ih){ cb(null); return; }
        cb({ x: xInv(px), y: yInv(py) });
      }
      cv.addEventListener('mousemove', h);
      cv.addEventListener('touchmove', function(e){ e.preventDefault(); h(e); }, { passive: false });
      cv.addEventListener('mouseleave', function(){ cb(null); });
    };
    return P;
  }

  /* ================= arbre de decision (partage t04 & t08) ================= */
  function gini(c){ var t = c[0] + c[1]; if(!t) return 0; var p = c[0]/t; return 1 - p*p - (1-p)*(1-p); }
  function buildTree(pts, depth, minLeaf){
    var c = [0, 0]; pts.forEach(function(p){ c[p.c]++; });
    var maj = c[1] > c[0] ? 1 : 0;
    var prob = c[1] / (pts.length || 1);
    if(depth <= 0 || pts.length < 2*minLeaf || c[maj] === pts.length) return { leaf: maj, p: prob };
    var best = null;
    for(var ax = 0; ax < 2; ax++){
      var vals = pts.map(function(p){ return ax ? p.y : p.x; }).slice().sort(function(a, b){ return a - b; });
      for(var i = 1; i < vals.length; i++){
        var thr = (vals[i-1] + vals[i]) / 2;
        var L = [], R = [];
        pts.forEach(function(p){ ((ax ? p.y : p.x) < thr ? L : R).push(p); });
        if(L.length < minLeaf || R.length < minLeaf) continue;
        var cl = [0, 0], cr = [0, 0];
        L.forEach(function(p){ cl[p.c]++; }); R.forEach(function(p){ cr[p.c]++; });
        var imp = (L.length * gini(cl) + R.length * gini(cr)) / pts.length;
        if(!best || imp < best.imp) best = { imp: imp, ax: ax, thr: thr, L: L, R: R };
      }
    }
    if(!best) return { leaf: maj, p: prob };
    return { ax: best.ax, thr: best.thr,
             l: buildTree(best.L, depth - 1, minLeaf),
             r: buildTree(best.R, depth - 1, minLeaf) };
  }
  function treeLeaf(node, x, y){
    while(node.leaf === undefined) node = ((node.ax ? y : x) < node.thr) ? node.l : node.r;
    return node;
  }
  function treeSplits(node, box, out){
    if(node.leaf !== undefined) return;
    if(node.ax === 0) out.push([node.thr, box.y0, node.thr, box.y1]);
    else out.push([box.x0, node.thr, box.x1, node.thr]);
    var bl = { x0: box.x0, x1: box.x1, y0: box.y0, y1: box.y1 };
    var br = { x0: box.x0, x1: box.x1, y0: box.y0, y1: box.y1 };
    if(node.ax === 0){ bl.x1 = node.thr; br.x0 = node.thr; } else { bl.y1 = node.thr; br.y0 = node.thr; }
    treeSplits(node.l, bl, out); treeSplits(node.r, br, out);
  }

  /* ================= algebre lineaire (t12 & t13) ================= */
  function solve(A, b){
    var n = b.length, i, j, k;
    for(i = 0; i < n; i++){
      var p = i;
      for(k = i + 1; k < n; k++) if(Math.abs(A[k][i]) > Math.abs(A[p][i])) p = k;
      var ta = A[i]; A[i] = A[p]; A[p] = ta;
      var tb = b[i]; b[i] = b[p]; b[p] = tb;
      var d = A[i][i] || 1e-9;
      for(k = i + 1; k < n; k++){
        var fct = A[k][i] / d;
        for(j = i; j < n; j++) A[k][j] -= fct * A[i][j];
        b[k] -= fct * b[i];
      }
    }
    var x = new Array(n).fill(0);
    for(i = n - 1; i >= 0; i--){
      var s = b[i];
      for(j = i + 1; j < n; j++) s -= A[i][j] * x[j];
      x[i] = s / (A[i][i] || 1e-9);
    }
    return x;
  }
  function polyfit(xs, ys, deg){
    var m = deg + 1, A = [], bb = new Array(m).fill(0), i, j, k;
    for(i = 0; i < m; i++) A.push(new Array(m).fill(0));
    for(k = 0; k < xs.length; k++){
      var pw = [], v = 1;
      for(j = 0; j < 2*m; j++){ pw.push(v); v *= xs[k]; }
      for(i = 0; i < m; i++){ bb[i] += pw[i] * ys[k]; for(j = 0; j < m; j++) A[i][j] += pw[i + j]; }
    }
    return solve(A, bb);
  }
  function polyval(co, x){ var v = 0; for(var i = co.length - 1; i >= 0; i--) v = v * x + co[i]; return v; }

  /* ============================================================
     T01 - Regression lineaire : la droite des moindres carres
     ============================================================ */
  function t01(host){
    var r = rng(11), pts = [];
    for(var i = 0; i < 28; i++){ var x = r()*9 + 0.5; pts.push({ x: x, y: 0.75*x + 2.2 + gauss(r)*1.3 }); }
    var n = pts.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
    pts.forEach(function(p){ sx += p.x; sy += p.y; sxy += p.x*p.y; sxx += p.x*p.x; });
    var aOls = (n*sxy - sx*sy) / (n*sxx - sx*sx), bOls = (sy - aOls*sx) / n;
    var a = 0.2, b = 6, showR = true, anim = 0;

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 14]);
    var mBox = metrics(host);
    var ctl = controls(host);
    var sa = slider(ctl, 'pente a', -1, 3, 0.05, a, f2, function(v){ a = v; draw(); });
    var sb = slider(ctl, "ordonnee b", -2, 10, 0.1, b, f1, function(v){ b = v; draw(); });
    toggle(ctl, 'montrer les residus', showR, function(v){ showR = v; draw(); });
    button(ctl, 'Ajuster (moindres carres)', function(){
      cancelAnimationFrame(anim);
      var a0 = a, b0 = b, t0 = performance.now();
      (function step(t){
        var kk = Math.min(1, (t - t0) / 700);
        a = a0 + (aOls - a0)*kk; b = b0 + (bOls - b0)*kk;
        sa.set(a); sb.set(b); draw();
        if(kk < 1) anim = requestAnimationFrame(step);
      })(t0);
    });
    hint(host, "Objectif : rapprocher ta droite (pleine) de la droite pointillee, la solution optimale.");

    function mse(A, B){ var s = 0; pts.forEach(function(p){ var e = p.y - (A*p.x + B); s += e*e; }); return s / n; }
    function draw(){
      P.clear(); P.frame('x', 'y');
      if(showR) pts.forEach(function(p){ P.seg(p.x, p.y, p.x, a*p.x + b, 'rgba(162,59,46,0.45)', 1.3); });
      P.lineABC(aOls, -1, bOls, 'rgba(130,130,130,0.6)', 1.6, [5, 5]);
      P.curve(function(x){ return a*x + b; }, P.C.accent, 2.6);
      pts.forEach(function(p){ P.dot(p.x, p.y, P.C.A, 3.6); });
      mBox.innerHTML = '<span>Erreur (MSE) de ta droite : <b>' + f2(mse(a, b)) + '</b></span>' +
                       '<span>MSE minimale possible : <b>' + f2(mse(aOls, bOls)) + '</b></span>';
    }
    draw();
  }

  /* ============================================================
     T02 - Descente de gradient : suivre la pente
     ============================================================ */
  function t02(host){
    var J = function(th){ return (th - 3)*(th - 3) + 1; };
    var grad = function(th){ return 2*(th - 3); };
    var alpha = 0.1, theta = 6.2, trail = [], anim = 0;

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [-2, 8], [0, 30]);
    var mBox = metrics(host);
    var ctl = controls(host);
    var sAl = slider(ctl, 'taux alpha', 0.02, 1.05, 0.02, alpha, f2, function(v){ alpha = v; draw(); });
    var sTh = slider(ctl, 'depart', -1, 7, 0.1, theta, f1, function(v){ theta = v; trail = []; draw(); });
    button(ctl, '1 pas', function(){ oneStep(); });
    button(ctl, 'Animer', function(){ run(); });
    button(ctl, 'Reset', function(){ cancelAnimationFrame(anim); theta = +sTh.el.value; trail = []; draw(); });
    hint(host, "Un pas : theta descend de alpha x pente. Monte alpha au-dela de 1 : ca saute par-dessus le minimum.");

    function oneStep(){
      trail.push(theta);
      if(trail.length > 40) trail.shift();
      theta = theta - alpha * grad(theta);
      theta = clamp(theta, -2.4, 8.4);
      draw();
    }
    function run(){
      cancelAnimationFrame(anim);
      var i = 0;
      (function loop(){ oneStep(); if(++i < 26) anim = requestAnimationFrame(loop); })();
    }
    function draw(){
      P.clear(); P.frame('theta', 'cout J(theta)');
      P.curve(J, P.C.accent, 2.4);
      P.lineABC(1, 0, -3, 'rgba(130,130,130,0.5)', 1.2, [4, 4]);
      trail.forEach(function(t){ P.dot(t, J(t), 'rgba(59,126,201,0.35)', 3); });
      var gpente = grad(theta);
      P.seg(theta - 1, J(theta) - gpente, theta + 1, J(theta) + gpente, P.C.bad, 1.6, [4, 3]);
      P.dot(theta, J(theta), P.C.A, 6);
      var diverge = Math.abs(gpente) > 12 || alpha >= 1;
      mBox.innerHTML = '<span>theta = <b>' + f2(theta) + '</b></span>' +
        '<span>pente (gradient) = <b>' + f2(gpente) + '</b></span>' +
        '<span>cout = <b>' + f2(J(theta)) + '</b></span>' +
        (diverge ? '<span style="color:var(--bad)"><b>alpha trop grand : oscille / diverge</b></span>' : '');
    }
    draw();
  }

  /* ============================================================
     T03 - Regression logistique : score lineaire + sigmoide
     ============================================================ */
  function t03(host){
    var r = rng(5);
    var pts = blob(r, 22, 3.2, 3.4, 1.15, 0).concat(blob(r, 22, 6.8, 6.6, 1.15, 1));
    var w1 = 0.6, w2 = 0.6, b = -8;
    function sig(z){ return 1 / (1 + Math.exp(-z)); }

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'poids w1', -2, 2, 0.1, w1, f1, function(v){ w1 = v; draw(); });
    slider(ctl, 'poids w2', -2, 2, 0.1, w2, f1, function(v){ w2 = v; draw(); });
    slider(ctl, 'biais b', -14, 14, 0.5, b, f1, function(v){ b = v; draw(); });
    hint(host, "La couleur = probabilite d'appartenir a la classe orange. La frontiere (proba 0,5) est une droite.");

    function draw(){
      P.clear();
      P.shade(function(x, y){
        var s = sig(w1*x + w2*y + b);
        return s > 0.5 ? 'rgba(208,106,60,' + (0.05 + 0.30*(s - 0.5)*2) + ')'
                       : 'rgba(59,126,201,' + (0.05 + 0.30*(0.5 - s)*2) + ')';
      });
      P.frame('x1', 'x2');
      P.lineABC(w1, w2, b, P.C.text, 2.4);
      var ok = 0;
      pts.forEach(function(p){
        var pred = sig(w1*p.x + w2*p.y + b) >= 0.5 ? 1 : 0;
        if(pred === p.c) ok++;
        P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.8);
      });
      mBox.innerHTML = '<span>score z = w1.x1 + w2.x2 + b, puis proba = sigmoide(z)</span>' +
        '<span>bien classes : <b>' + ok + ' / ' + pts.length + '</b></span>';
    }
    draw();
  }

  /* ============================================================
     T04 - Arbre de decision : coupes horizontales / verticales
     ============================================================ */
  function t04(host){
    var r = rng(3), pts = [];
    for(var i = 0; i < 130; i++){
      var x = r()*10, y = r()*10;
      var c = ((x > 5.5 && y > 4) || (x < 3.5 && y < 5)) ? 1 : 0;
      pts.push({ x: x, y: y, c: c });
    }
    var depth = 2, tree = null;

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'profondeur max', 1, 6, 1, depth, null, function(v){ depth = v; rebuild(); });
    hint(host, "Chaque question 'x > seuil ?' est une ligne. En les empilant on obtient des rectangles.");

    function rebuild(){ tree = buildTree(pts, depth, 3); draw(); }
    function draw(){
      P.clear();
      P.shade(function(x, y){ return treeLeaf(tree, x, y).leaf ? P.C.Bfill : P.C.Afill; }, 8);
      P.frame('x1', 'x2');
      var seg = []; treeSplits(tree, { x0: 0, x1: 10, y0: 0, y1: 10 }, seg);
      seg.forEach(function(s){ P.seg(s[0], s[1], s[2], s[3], P.C.text, 1.4); });
      var ok = 0;
      pts.forEach(function(p){ if(treeLeaf(tree, p.x, p.y).leaf === p.c) ok++; P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.6); });
      mBox.innerHTML = '<span>' + seg.length + ' coupes</span>' +
        '<span>bien classes : <b>' + ok + ' / ' + pts.length + '</b> (' + Math.round(100*ok/pts.length) + ' %)</span>' +
        (depth >= 6 ? '<span style="color:var(--warn)">tres profond = colle au bruit = sur-apprentissage</span>' : '');
    }
    rebuild();
  }

  /* ============================================================
     T05 - KNN : vote des k plus proches voisins
     ============================================================ */
  function t05(host){
    var r = rng(9);
    var pts = blob(r, 16, 3.6, 6, 1.25, 0).concat(blob(r, 16, 6.6, 4, 1.25, 1));
    pts.push({ x: 5.4, y: 6.4, c: 1 }, { x: 4.7, y: 3.6, c: 0 });
    var k = 5, showN = true, q = null;

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'k (voisins)', 1, 15, 2, k, null, function(v){ k = v; draw(); });
    toggle(ctl, 'montrer les voisins', showN, function(v){ showN = v; draw(); });
    hint(host, "Bouge la souris sur le graphe : le point test prend la classe majoritaire de ses k voisins.");
    P.mouse(cc.cv, function(m){ q = m; draw(); });

    function knn(x, y){
      var d = pts.map(function(p){ return { p: p, d: (p.x - x)*(p.x - x) + (p.y - y)*(p.y - y) }; });
      d.sort(function(a, b){ return a.d - b.d; });
      var top = d.slice(0, k), v = [0, 0];
      top.forEach(function(o){ v[o.p.c]++; });
      return { cls: v[1] > v[0] ? 1 : 0, v: v, top: top };
    }
    function draw(){
      P.clear();
      P.shade(function(x, y){ return knn(x, y).cls ? P.C.Bfill : P.C.Afill; }, 10);
      P.frame('x1', 'x2');
      pts.forEach(function(p){ P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.8); });
      if(q){
        var res = knn(q.x, q.y);
        if(showN){
          res.top.forEach(function(o){ P.seg(q.x, q.y, o.p.x, o.p.y, 'rgba(120,120,120,0.55)', 1.1); });
          var rad = Math.sqrt(res.top[res.top.length - 1].d);
          P.paramCurve(function(t){ return q.x + rad*Math.cos(t); }, function(t){ return q.y + rad*Math.sin(t); }, 'rgba(120,120,120,0.5)', 1, [3, 3]);
        }
        P.dot(q.x, q.y, res.cls ? P.C.B : P.C.A, 6);
        P.ring(q.x, q.y, P.C.text, 8, 1.6);
        mBox.innerHTML = '<span>vote : <b>' + res.v[0] + '</b> bleu / <b>' + res.v[1] + '</b> orange</span>' +
          '<span>=> classe <b>' + (res.cls ? 'orange' : 'bleue') + '</b></span>';
      } else {
        mBox.innerHTML = '<span>k petit = frontiere decoupee (bruit) ; k grand = frontiere lisse.</span>';
      }
    }
    draw();
  }

  /* ============================================================
     T06 - SVM : la marge maximale
     ============================================================ */
  function t06(host){
    var r = rng(2);
    var pts = blob(r, 11, 3, 7, 0.85, 0).concat(blob(r, 11, 7, 3, 0.85, 1));
    var sep = maxMargin(pts);
    var pA = { x: 5 - sep.nx*0.6*sep.gap*0.5, y: 5 - sep.ny*0.6*sep.gap*0.5 };
    var pB = { x: 5 + sep.nx*0.6*sep.gap*0.5, y: 5 + sep.ny*0.6*sep.gap*0.5 };
    var Cval = 3, showM = true;

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'C (penalite)', 0.2, 10, 0.2, Cval, f1, function(v){ Cval = v; draw(); });
    toggle(ctl, "montrer la 'rue'", showM, function(v){ showM = v; draw(); });
    hint(host, "La droite pleine est calculee : c'est celle qui laisse la rue vide la plus large. C illustre la tolerance aux points dans la rue.");

    function maxMargin(set){
      var best = null;
      for(var ai = 0; ai < 180; ai++){
        var th = ai / 180 * Math.PI, nx = Math.cos(th), ny = Math.sin(th);
        var amin = Infinity, amax = -Infinity, bmin = Infinity, bmax = -Infinity;
        set.forEach(function(p){
          var d = nx*p.x + ny*p.y;
          if(p.c === 0){ if(d < amin) amin = d; if(d > amax) amax = d; }
          else { if(d < bmin) bmin = d; if(d > bmax) bmax = d; }
        });
        var gap, off;
        if(amax < bmin){ gap = bmin - amax; off = -(amax + bmin) / 2; }
        else if(bmax < amin){ gap = amin - bmax; off = -(bmax + amin) / 2; }
        else continue;
        if(!best || gap > best.gap) best = { gap: gap, nx: nx, ny: ny, c: off };
      }
      return best || { gap: 1, nx: 1, ny: 0, c: -5 };
    }
    function draw(){
      P.clear(); P.frame('x1', 'x2');
      var cn = (Cval - 0.2) / 9.8;
      var half = sep.gap * 0.5 * (1.4 - 1.1*cn);
      if(showM){
        P.shade(function(x, y){
          var d = sep.nx*x + sep.ny*y + sep.c;
          return Math.abs(d) < half ? 'rgba(140,140,140,0.16)' : null;
        }, 8);
        P.lineABC(sep.nx, sep.ny, sep.c + half, 'rgba(120,120,120,0.7)', 1.2, [5, 4]);
        P.lineABC(sep.nx, sep.ny, sep.c - half, 'rgba(120,120,120,0.7)', 1.2, [5, 4]);
      }
      P.lineABC(sep.nx, sep.ny, sep.c, P.C.text, 2.4);
      pts.forEach(function(p){
        P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.8);
        if(Math.abs(sep.nx*p.x + sep.ny*p.y + sep.c) < sep.gap*0.5 + 0.05) P.ring(p.x, p.y, P.C.accent, 8, 2);
      });
      [pA, pB].forEach(function(p){
        var inside = Math.abs(sep.nx*p.x + sep.ny*p.y + sep.c) < half;
        P.dot(p.x, p.y, inside ? 'rgba(176,125,58,0.9)' : P.C.bad, 4.4);
        P.ring(p.x, p.y, inside ? P.C.warn || '#b07d3a' : P.C.bad, 7, 2);
      });
      mBox.innerHTML = '<span>cercles = vecteurs de support (ils fixent la droite)</span>' +
        '<span>' + (Cval < 3 ? 'petit C : rue large, 2 points toleres dedans' : 'grand C : rue etroite, 0 tolerance') + '</span>';
    }
    draw();
  }

  /* ============================================================
     T07 - Naive Bayes : une "cloche" par classe
     ============================================================ */
  function t07(host){
    var ax = 4, ay = 5, bx = 7, by = 5, sd = 1.4, pA = 0.5;
    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 11], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'moyenne orange x', 4, 10, 0.1, bx, f1, function(v){ bx = v; draw(); });
    slider(ctl, 'moyenne orange y', 2, 8, 0.1, by, f1, function(v){ by = v; draw(); });
    slider(ctl, 'prior P(bleu)', 0.15, 0.85, 0.05, pA, f2, function(v){ pA = v; draw(); });
    hint(host, "On garde la classe dont (cloche x prior) est la plus grande. La frontiere se deplace avec le prior.");

    function dens(x, y, mx, my){ var dx = x - mx, dy = y - my; return Math.exp(-(dx*dx + dy*dy) / (2*sd*sd)); }
    function draw(){
      P.clear();
      P.shade(function(x, y){
        var la = pA * dens(x, y, ax, ay), lb = (1 - pA) * dens(x, y, bx, by);
        var tot = la + lb || 1e-9, pa = la / tot;
        return pa > 0.5 ? 'rgba(59,126,201,' + (0.05 + 0.28*(pa - 0.5)*2) + ')'
                        : 'rgba(208,106,60,' + (0.05 + 0.28*(0.5 - pa)*2) + ')';
      });
      P.frame('x1', 'x2');
      [[ax, ay, P.C.A], [bx, by, P.C.B]].forEach(function(m){
        [1, 2].forEach(function(kk){
          P.paramCurve(function(t){ return m[0] + kk*sd*Math.cos(t); }, function(t){ return m[1] + kk*sd*Math.sin(t); }, m[2], 1.4, kk === 2 ? [3, 3] : []);
        });
        P.dot(m[0], m[1], m[2], 5);
      });
      mBox.innerHTML = '<span>cercles = 1 et 2 ecarts-types de chaque cloche</span>' +
        '<span>decision = argmax( P(classe) x cloche )</span>';
    }
    draw();
  }

  /* ============================================================
     T08 - Methodes d'ensemble : moyenner beaucoup d'arbres
     ============================================================ */
  function t08(host){
    var r = rng(4), pts = [];
    for(var i = 0; i < 160; i++){
      var x = r()*10, y = r()*10;
      var c = (y > 5 + 2.4*Math.sin(0.85*x)) ? 1 : 0;
      if(r() < 0.06) c = 1 - c;
      pts.push({ x: x, y: y, c: c });
    }
    var nTrees = 1, forest = [];

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, "nombre d'arbres", 1, 40, 1, nTrees, null, function(v){ nTrees = v; rebuild(); });
    hint(host, "1 arbre = frontiere en escalier, instable. Beaucoup d'arbres moyennes = frontiere lisse.");

    function rebuild(){
      forest = [];
      for(var t = 0; t < nTrees; t++){
        var boot = [], rr = rng(100 + t*7);
        for(var i = 0; i < pts.length; i++) boot.push(pts[(rr() * pts.length) | 0]);
        forest.push(buildTree(boot, 3, 4));
      }
      draw();
    }
    function prob(x, y){
      var s = 0;
      for(var t = 0; t < forest.length; t++) s += treeLeaf(forest[t], x, y).leaf;
      return s / (forest.length || 1);
    }
    function draw(){
      P.clear();
      P.shade(function(x, y){
        var pp = prob(x, y);
        return pp >= 0.5 ? 'rgba(208,106,60,' + (0.08 + 0.30*(pp - 0.5)*2) + ')'
                         : 'rgba(59,126,201,' + (0.08 + 0.30*(0.5 - pp)*2) + ')';
      }, 8);
      P.frame('x1', 'x2');
      P.curve(function(x){ return 5 + 2.4*Math.sin(0.85*x); }, 'rgba(120,120,120,0.7)', 1.6, 160);
      var ok = 0;
      pts.forEach(function(p){ if((prob(p.x, p.y) >= 0.5 ? 1 : 0) === p.c) ok++; P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.2); });
      mBox.innerHTML = '<span>' + nTrees + ' arbre(s), profondeur 3</span>' +
        '<span>frontiere vraie = ligne grise</span>' +
        '<span>bien classes : <b>' + Math.round(100*ok/pts.length) + ' %</b></span>';
    }
    rebuild();
  }

  /* ============================================================
     T09 - Preparation des donnees : mise a l'echelle
     ============================================================ */
  function t09(host){
    var r = rng(6), raw = [];
    for(var i = 0; i < 40; i++){
      var inc = 200 + r()*1000;
      var rooms = 1 + r()*8;
      raw.push({ inc: inc, rooms: rooms, c: rooms > 5 ? 1 : 0 });
    }
    var q = { inc: 720, rooms: 5.6 };
    var std = false;
    var mi = mean(raw, 'inc'), si = sd(raw, 'inc', mi), mr = mean(raw, 'rooms'), sr = sd(raw, 'rooms', mr);

    var cc = canvasEl(host, 540, 360);
    var mBox = metrics(host);
    var ctl = controls(host);
    toggle(ctl, 'standardiser (z-score)', std, function(v){ std = v; draw(); });
    hint(host, "Sans mise a l'echelle, le revenu (0 a 1200) ecrase le nb de pieces (1 a 9) dans le calcul de distance.");

    function mean(a, k){ var s = 0; a.forEach(function(o){ s += o[k]; }); return s / a.length; }
    function sd(a, k, m){ var s = 0; a.forEach(function(o){ s += (o[k] - m)*(o[k] - m); }); return Math.sqrt(s / a.length); }
    function px(o){ return std ? { x: (o.inc - mi) / si, y: (o.rooms - mr) / sr } : { x: o.inc, y: o.rooms }; }

    function draw(){
      var P = std
        ? plot(cc.g, cc.w, cc.h, [-2.6, 2.6], [-2.6, 2.6])
        : plot(cc.g, cc.w, cc.h, [0, 1300], [0, 10]);
      P.clear(); P.frame(std ? 'revenu (z)' : 'revenu', std ? 'pieces (z)' : 'pieces');
      var qq = px(q);
      var d = raw.map(function(o){ var pp = px(o); return { o: o, d: (pp.x - qq.x)*(pp.x - qq.x) + (pp.y - qq.y)*(pp.y - qq.y) }; });
      d.sort(function(a, b){ return a.d - b.d; });
      var top = d.slice(0, 5), v = [0, 0];
      top.forEach(function(t){
        v[t.o.c]++;
        var pp = px(t.o);
        P.seg(qq.x, qq.y, pp.x, pp.y, 'rgba(120,120,120,0.55)', 1.1);
      });
      raw.forEach(function(o){ var pp = px(o); P.dot(pp.x, pp.y, o.c ? P.C.B : P.C.A, 3.8); });
      P.dot(qq.x, qq.y, v[1] > v[0] ? P.C.B : P.C.A, 6);
      P.ring(qq.x, qq.y, P.C.text, 8, 1.6);
      mBox.innerHTML = '<span>point test : classe reelle <b>orange</b> (5,6 pieces)</span>' +
        '<span>5 voisins : ' + v[0] + ' bleu / ' + v[1] + ' orange => <b>' + (v[1] > v[0] ? 'orange (bon)' : 'bleu (faux)') + '</b></span>' +
        '<span>' + (std ? 'les 2 variables comptent autant' : 'voisins choisis surtout sur le revenu') + '</span>';
    }
    draw();
  }

  /* ============================================================
     T10 - Feature engineering : ajouter r2 = x1^2 + x2^2
     ============================================================ */
  function t10(host){
    var r = rng(8), pts = [];
    while(pts.length < 55){
      var x = (r()*2 - 1)*5, y = (r()*2 - 1)*5, rad = Math.sqrt(x*x + y*y);
      if(rad < 2.0) pts.push({ x: x, y: y, c: 0 });
      else if(rad > 2.9 && rad < 4.6) pts.push({ x: x, y: y, c: 1 });
    }
    var useR2 = false, thr = 8;

    var cc = canvasEl(host, 540, 300);
    var P = plot(cc.g, cc.w, cc.h, [-5, 5], [-5, 5]);
    var strip = canvasEl(host, 540, 84);
    var Ps = plot(strip.g, strip.w, strip.h, [0, 25], [0, 1], { l: 38, r: 12, t: 10, b: 22 });
    var mBox = metrics(host);
    var ctl = controls(host);
    toggle(ctl, 'ajouter la feature r2 = x1^2 + x2^2', useR2, function(v){ useR2 = v; draw(); });
    var sT = slider(ctl, 'seuil sur r2', 1, 25, 0.5, thr, f1, function(v){ thr = v; draw(); });
    sT.el.parentNode.style.opacity = 0.4;
    hint(host, "Sans r2 : aucune droite ne separe un disque d'un anneau. Avec r2 : 'r2 < seuil' est lineaire... et dessine un cercle.");

    function draw(){
      sT.el.parentNode.style.opacity = useR2 ? 1 : 0.4;
      P.clear();
      if(useR2){
        P.shade(function(x, y){ return (x*x + y*y) < thr ? P.C.Afill : P.C.Bfill; }, 8);
      } else {
        P.shade(function(x, y){ return y < 0 ? P.C.Afill : P.C.Bfill; }, 8);
      }
      P.frame('x1', 'x2');
      if(useR2) P.paramCurve(function(t){ return Math.sqrt(thr)*Math.cos(t); }, function(t){ return Math.sqrt(thr)*Math.sin(t); }, P.C.text, 2.2);
      else P.lineABC(0, 1, 0, P.C.text, 2.2);
      var ok = 0;
      pts.forEach(function(p){
        var pred = useR2 ? ((p.x*p.x + p.y*p.y) < thr ? 0 : 1) : (p.y < 0 ? 0 : 1);
        if(pred === p.c) ok++;
        P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, 3.8);
      });
      Ps.clear(); Ps.frame('r2 = x1^2 + x2^2', '');
      pts.forEach(function(p){ Ps.dot(p.x*p.x + p.y*p.y, 0.5, p.c ? P.C.B : P.C.A, 3.6); });
      if(useR2) Ps.seg(thr, 0, thr, 1, P.C.text, 2);
      mBox.innerHTML = '<span>bande du bas : chaque point place a sa valeur r2</span>' +
        '<span>bien classes : <b>' + Math.round(100*ok/pts.length) + ' %</b></span>' +
        '<span>' + (useR2 ? 'separable par un simple seuil' : 'impossible avec une droite') + '</span>';
    }
    draw();
  }

  /* ============================================================
     T11 - Evaluation : seuil, ROC, matrice de confusion
     ============================================================ */
  function t11(host){
    var r = rng(13), data = [];
    for(var i = 0; i < 220; i++){
      var lab = r() < 0.42 ? 1 : 0;
      var sc = clamp((lab ? 0.62 : 0.38) + gauss(r)*0.16, 0.01, 0.99);
      data.push({ y: lab, s: sc });
    }
    var thr = 0.5;
    var roc = [];
    for(var t = 0; t <= 100; t++){
      var th = t / 100, tp = 0, fp = 0, fn = 0, tn = 0;
      data.forEach(function(d){
        var pr = d.s >= th ? 1 : 0;
        if(pr && d.y) tp++; else if(pr && !d.y) fp++; else if(!pr && d.y) fn++; else tn++;
      });
      roc.push({ th: th, tpr: tp / (tp + fn || 1), fpr: fp / (fp + tn || 1) });
    }
    var auc = 0;
    for(var k = 1; k < roc.length; k++) auc += (roc[k-1].fpr - roc[k].fpr) * (roc[k].tpr + roc[k-1].tpr) / 2;

    var row = document.createElement('div'); row.className = 'viz-row'; host.appendChild(row);
    var left = document.createElement('div'); var right = document.createElement('div');
    row.appendChild(left); row.appendChild(right);
    var c1 = canvasEl(left, 320, 240);
    var P1 = plot(c1.g, c1.w, c1.h, [0, 1], [0, 3]);
    var c2 = canvasEl(right, 240, 240);
    var P2 = plot(c2.g, c2.w, c2.h, [0, 1], [0, 1]);
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'seuil de decision', 0.02, 0.98, 0.02, thr, f2, function(v){ thr = v; draw(); });
    hint(host, "Baisser le seuil : plus de vrais positifs (rappel monte) mais plus de faux positifs (precision baisse).");

    function draw(){
      var tp = 0, fp = 0, fn = 0, tn = 0;
      data.forEach(function(d){
        var pr = d.s >= thr ? 1 : 0;
        if(pr && d.y) tp++; else if(pr && !d.y) fp++; else if(!pr && d.y) fn++; else tn++;
      });
      P1.clear(); P1.frame('score du modele', '');
      P1.g.fillStyle = 'rgba(140,140,140,0.14)';
      P1.g.fillRect(P1.X(thr), P1.pad.t, P1.iw + P1.pad.l - P1.X(thr), P1.ih);
      data.forEach(function(d){
        var jitter = ((d.s * 97) % 1) * 0.8 + (d.y ? 1.6 : 0.4);
        P1.dot(d.s, jitter, d.y ? P1.C.B : P1.C.A, 3);
      });
      P1.seg(thr, 0, thr, 3, P1.C.text, 2);
      P1.text('negatifs', P1.pad.l + 4, P1.Y(0.4) + 3, P1.C.A);
      P1.text('positifs', P1.pad.l + 4, P1.Y(1.6) + 3, P1.C.B);

      P2.clear(); P2.frame('faux positifs', 'vrais positifs');
      P2.seg(0, 0, 1, 1, 'rgba(140,140,140,0.6)', 1, [4, 4]);
      P2.g.beginPath();
      roc.forEach(function(o, i){ var px = P2.X(o.fpr), py = P2.Y(o.tpr); if(i) P2.g.lineTo(px, py); else P2.g.moveTo(px, py); });
      P2.g.strokeStyle = P2.C.accent; P2.g.lineWidth = 2.2; P2.g.stroke();
      var cur = roc[Math.round(thr * 100)];
      if(cur) P2.dot(cur.fpr, cur.tpr, P2.C.text, 5);

      var prec = tp / (tp + fp || 1), rec = tp / (tp + fn || 1);
      var f1s = 2*prec*rec / (prec + rec || 1), acc = (tp + tn) / data.length;
      mBox.innerHTML =
        '<span>VP <b>' + tp + '</b> &nbsp; FP <b>' + fp + '</b> &nbsp; FN <b>' + fn + '</b> &nbsp; VN <b>' + tn + '</b></span>' +
        '<span>precision <b>' + f2(prec) + '</b></span>' +
        '<span>rappel <b>' + f2(rec) + '</b></span>' +
        '<span>F1 <b>' + f2(f1s) + '</b></span>' +
        '<span>accuracy <b>' + f2(acc) + '</b></span>' +
        '<span>AUC <b>' + f2(auc) + '</b> (independant du seuil)</span>';
    }
    draw();
  }

  /* ============================================================
     T12 - Donnees desequilibrees : l'accuracy ment
     ============================================================ */
  function t12(host){
    var r = rng(21);
    var pts = blob(r, 180, 5, 5, 2.1, 0).concat(blob(r, 12, 6.6, 6.6, 1.5, 1));
    var mode = 'brut';

    var cc = canvasEl(host, 540, 360);
    var P = plot(cc.g, cc.w, cc.h, [0, 10], [0, 10]);
    var mBox = metrics(host);
    var ctl = controls(host);
    picker(ctl, 'strategie', [['brut', 'brut (rien)'], ['weight', 'class_weight (equilibre)'], ['smote', 'sur-echantillonnage']], mode, function(v){ mode = v; draw(); });
    hint(host, "95 % d'une classe : predire toujours 'majorite' donne 94 % d'accuracy en ratant tous les cas rares.");

    function fit(){
      var A = [[0,0,0],[0,0,0],[0,0,0]], b = [0,0,0];
      var n0 = pts.filter(function(p){ return p.c === 0; }).length;
      var n1 = pts.length - n0;
      pts.forEach(function(p){
        var w = 1;
        if(mode !== 'brut') w = p.c ? (pts.length / (2*n1)) : (pts.length / (2*n0));
        var xr = [p.x, p.y, 1], tgt = p.c ? 1 : -1;
        for(var i = 0; i < 3; i++){ b[i] += w*xr[i]*tgt; for(var j = 0; j < 3; j++) A[i][j] += w*xr[i]*xr[j]; }
      });
      return solve(A, b);
    }
    function draw(){
      var wv = fit();
      P.clear();
      P.shade(function(x, y){ return (wv[0]*x + wv[1]*y + wv[2]) >= 0 ? P.C.Bfill : P.C.Afill; }, 9);
      P.frame('x1', 'x2');
      P.lineABC(wv[0], wv[1], wv[2], P.C.text, 2.4);
      var tp = 0, fp = 0, fn = 0, tn = 0;
      pts.forEach(function(p){
        var pr = (wv[0]*p.x + wv[1]*p.y + wv[2]) >= 0 ? 1 : 0;
        if(pr && p.c) tp++; else if(pr && !p.c) fp++; else if(!pr && p.c) fn++; else tn++;
        P.dot(p.x, p.y, p.c ? P.C.B : P.C.A, p.c ? 4.4 : 3);
      });
      var acc = (tp + tn) / pts.length;
      var rec = tp / (tp + fn || 1), prec = tp / (tp + fp || 1);
      mBox.innerHTML =
        '<span>accuracy <b>' + f2(acc) + '</b></span>' +
        '<span>rappel classe rare <b>' + f2(rec) + '</b></span>' +
        '<span>precision classe rare <b>' + f2(prec) + '</b></span>' +
        '<span>' + (mode === 'brut' ? 'la frontiere ignore la classe rare' : 'la frontiere descend capturer la classe rare') + '</span>';
    }
    draw();
  }

  /* ============================================================
     T13 - Fiabilite : biais vs variance (degre du polynome)
     ============================================================ */
  function t13(host){
    var truef = function(x){ return Math.sin(1.15*x) + 0.35*x; };
    var r = rng(17), train = [];
    for(var i = 0; i < 11; i++){ var x = i * 6 / 10; train.push({ x: x, y: truef(x) + gauss(r)*0.35 }); }
    var test = [];
    for(var j = 0; j < 60; j++){ var xx = j * 6 / 59; test.push({ x: xx, y: truef(xx) }); }
    var deg = 3;
    var sx = train.map(function(p){ return (p.x - 3) / 3; });
    var sy = train.map(function(p){ return p.y; });

    var cc = canvasEl(host, 540, 300);
    var P = plot(cc.g, cc.w, cc.h, [0, 6], [-2, 4]);
    var inset = canvasEl(host, 300, 150);
    var Pi = plot(inset.g, inset.w, inset.h, [1, 9], [0, 1.6], { l: 34, r: 10, t: 10, b: 22 });
    var mBox = metrics(host);
    var ctl = controls(host);
    slider(ctl, 'degre du polynome', 1, 9, 1, deg, null, function(v){ deg = v; draw(); });
    hint(host, "Degre faible = trop rigide (biais). Degre eleve = passe par tous les points d'entrainement mais oscille (variance).");

    function rmseFor(d){
      var co = polyfit(sx, sy, d);
      var e = 0; train.forEach(function(p){ var pr = polyval(co, (p.x - 3) / 3); e += (p.y - pr)*(p.y - pr); });
      var et = 0; test.forEach(function(p){ var pr = polyval(co, (p.x - 3) / 3); et += (p.y - pr)*(p.y - pr); });
      return { co: co, tr: Math.sqrt(e / train.length), te: Math.sqrt(et / test.length) };
    }
    function draw(){
      var cur = rmseFor(deg);
      P.clear(); P.frame('x', 'y');
      P.curve(truef, 'rgba(120,120,120,0.6)', 1.4, 160);
      P.curve(function(x){ return polyval(cur.co, (x - 3) / 3); }, P.C.accent, 2.4, 160);
      test.forEach(function(p){ P.dot(p.x, p.y, 'rgba(59,126,201,0.25)', 2); });
      train.forEach(function(p){ P.dot(p.x, p.y, P.C.B, 4); });

      Pi.clear(); Pi.frame('degre', 'RMSE');
      var tr = [], te = [];
      for(var d = 1; d <= 9; d++){ var rr = rmseFor(d); tr.push([d, rr.tr]); te.push([d, Math.min(1.55, rr.te)]); }
      function poly(arr, col){ Pi.g.beginPath(); arr.forEach(function(o, i){ var px = Pi.X(o[0]), py = Pi.Y(o[1]); if(i) Pi.g.lineTo(px, py); else Pi.g.moveTo(px, py); }); Pi.g.strokeStyle = col; Pi.g.lineWidth = 2; Pi.g.stroke(); }
      poly(tr, P.C.B); poly(te, P.C.A);
      Pi.seg(deg, 0, deg, 1.6, P.C.text, 1.5, [3, 3]);
      Pi.text('test', Pi.pad.l + 4, Pi.pad.t + 12, P.C.A);
      Pi.text('train', Pi.pad.l + 4, Pi.pad.t + 26, P.C.B);
      mBox.innerHTML =
        '<span>RMSE entrainement <b>' + f2(cur.tr) + '</b></span>' +
        '<span>RMSE test <b>' + f2(cur.te) + '</b></span>' +
        '<span>' + (deg <= 2 ? 'sous-apprentissage (biais)' : deg >= 7 ? 'sur-apprentissage (variance)' : 'bon compromis') + '</span>';
    }
    draw();
  }

  /* ================= registre + montage ================= */
  var TXT = {
    t01: { title: '1 · Regression lineaire',
      idea: "On cherche la droite qui rend la somme des <b>carres des ecarts verticaux</b> (les residus) la plus petite possible. Les moindres carres donnent directement la meilleure pente et la meilleure ordonnee." },
    t02: { title: '2 · Descente de gradient',
      idea: "On part d'un point au hasard et, a chaque etape, on avance dans le sens de la <b>descente</b> (l'oppose du gradient). Le pas vaut alpha x pente : trop petit = tres lent, trop grand = on saute par-dessus le minimum et ca diverge." },
    t03: { title: '3 · Regression logistique',
      idea: "Le modele calcule un score lineaire <b>w.x + b</b>, puis la <b>sigmoide</b> le comprime entre 0 et 1 pour en faire une probabilite. La frontiere (proba = 0,5) est donc une droite : d'un cote une classe, de l'autre l'autre." },
    t04: { title: '4 · Arbres de decision',
      idea: "L'arbre pose une suite de questions 'variable > seuil ?'. Chaque question coupe le plan par une ligne <b>horizontale ou verticale</b>. En les empilant on obtient des regions rectangulaires ; plus l'arbre est profond, plus il colle aux donnees (et au bruit)." },
    t05: { title: '5 · KNN',
      idea: "Aucun apprentissage : pour classer un point, on regarde ses <b>k plus proches voisins</b> et on prend la classe majoritaire. k petit = frontiere tres decoupee (sensible au bruit), k grand = frontiere lisse." },
    t06: { title: '6 · SVM',
      idea: "Parmi toutes les droites qui separent les classes, le SVM prend celle qui laisse la <b>plus large rue vide</b> entre elles (marge maximale). Seuls les points colles au bord — les vecteurs de support — la determinent. C regle la tolerance aux points mal places." },
    t07: { title: '7 · Naive Bayes',
      idea: "On modelise chaque classe par une <b>cloche</b> de probabilite. Pour un nouveau point on calcule (cloche x frequence de la classe) pour chaque classe et on garde la plus grande. 'Naif' = on suppose les variables independantes." },
    t08: { title: "8 · Methodes d'ensemble",
      idea: "Un seul arbre peu profond fait une frontiere en escalier, instable. En entrainant <b>beaucoup d'arbres</b> sur des tirages aleatoires et en votant (bagging / foret aleatoire), les erreurs se compensent : la frontiere devient lisse. C'est la reduction de variance." },
    t09: { title: '9 · Preparation des donnees',
      idea: "Les algorithmes a base de <b>distance</b> (KNN, SVM, k-means, gradient) sont fausses si une variable va de 0 a 1000 et une autre de 0 a 10 : la premiere ecrase la seconde. La <b>standardisation</b> (moyenne 0, ecart-type 1) remet toutes les variables au meme poids." },
    t10: { title: '10 · Feature engineering',
      idea: "Un modele lineaire ne trace que des droites : impossible de separer un disque d'un anneau. En fabriquant la bonne feature — ici <b>r2 = x1^2 + x2^2</b> — 'r2 < seuil' devient lineaire, et correspond a un cercle dans l'espace de depart." },
    t11: { title: '11 · Evaluation & metriques',
      idea: "On predit 'positif' si score >= seuil. Baisser le seuil attrape plus de vrais positifs (<b>rappel</b> monte) mais aussi plus de faux positifs (<b>precision</b> baisse). La courbe ROC montre ce compromis pour tous les seuils ; l'<b>AUC</b> le resume." },
    t12: { title: '12 · Donnees desequilibrees',
      idea: "Avec 95 % d'une classe, predire toujours la majorite donne deja 95 % d'accuracy en ratant 100 % des cas rares. Solutions : <b>reequilibrer</b> (SMOTE, class_weight) et surtout regarder le <b>rappel / la precision de la classe rare</b>, pas l'accuracy." },
    t13: { title: '13 · Fiabilite (biais / variance)',
      idea: "Modele trop simple : rate la tendance, beaucoup d'erreur partout (<b>biais</b>). Modele trop complexe : passe par tous les points d'entrainement mais oscille ailleurs, l'erreur de <b>test</b> explose (<b>variance</b>). On vise le creux de la courbe de test." }
  };
  var BUILD = { t01: t01, t02: t02, t03: t03, t04: t04, t05: t05, t06: t06, t07: t07, t08: t08, t09: t09, t10: t10, t11: t11, t12: t12, t13: t13 };
  var ORDER = ['t01', 't02', 't03', 't04', 't05', 't06', 't07', 't08', 't09', 't10', 't11', 't12', 't13'];

  var built = false, stageEl = null, pickEl = null;

  function mount(id){
    stageEl.innerHTML = '';
    var meta = TXT[id];
    var head = document.createElement('h2');
    head.style.margin = '4px 0 2px';
    head.textContent = meta.title;
    stageEl.appendChild(head);
    try { BUILD[id](stageEl); }
    catch(e){ var er = document.createElement('p'); er.className = 'viz-hint'; er.textContent = 'Visualisation indisponible.'; stageEl.appendChild(er); }
    var box = document.createElement('div');
    box.className = 'viz-idea';
    box.innerHTML = "<b>L'idee.</b> " + meta.idea;
    stageEl.appendChild(box);
  }

  function show(){
    stageEl = document.getElementById('vizStage');
    pickEl = document.getElementById('vizPick');
    if(!stageEl || !pickEl) return;
    if(!built){
      pickEl.innerHTML = ORDER.map(function(id){ return '<option value="' + id + '">' + TXT[id].title + '</option>'; }).join('');
      pickEl.addEventListener('change', function(){ mount(pickEl.value); });
      built = true;
      mount(ORDER[0]);
    } else {
      mount(pickEl.value);
    }
  }

  return { show: show };
})();
