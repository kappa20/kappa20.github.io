/* app/markdown.js — mini renderer Markdown + LaTeX→MathML (aucune dépendance, marche en file://).
 * Exposé en window.MLmd. Le LaTeX ($...$ / $$...$$) est converti en MathML natif,
 * rendu par le navigateur (vraies barres de fraction, indices/exposants empilés). */
window.MLmd = (function(){
  "use strict";
  const P0 = String.fromCharCode(0xE000), P1 = String.fromCharCode(0xE001), PD = String.fromCharCode(0xE002);
  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* ============================ LaTeX → MathML ============================ */
  const TEX_GREEK = {alpha:'α',beta:'β',gamma:'γ',Gamma:'Γ',delta:'δ',Delta:'Δ',epsilon:'ε',
    varepsilon:'ε',zeta:'ζ',eta:'η',theta:'θ',vartheta:'ϑ',Theta:'Θ',iota:'ι',kappa:'κ',
    lambda:'λ',Lambda:'Λ',mu:'μ',nu:'ν',xi:'ξ',Xi:'Ξ',pi:'π',Pi:'Π',rho:'ρ',varrho:'ϱ',
    sigma:'σ',Sigma:'Σ',tau:'τ',upsilon:'υ',phi:'φ',varphi:'φ',Phi:'Φ',chi:'χ',psi:'ψ',
    Psi:'Ψ',omega:'ω',Omega:'Ω'};
  const TEX_OP = {cdot:'⋅',times:'×',div:'÷',pm:'±',mp:'∓',ast:'∗',star:'⋆',circ:'∘',
    bullet:'∙',approx:'≈',cong:'≅',neq:'≠',ne:'≠',equiv:'≡',le:'≤',leq:'≤',ge:'≥',geq:'≥',
    ll:'≪',gg:'≫',prec:'≺',succ:'≻',sim:'∼',simeq:'≃',propto:'∝',to:'→',rightarrow:'→',
    longrightarrow:'⟶',Rightarrow:'⇒',implies:'⟹',leftarrow:'←',Leftarrow:'⇐',
    leftrightarrow:'↔',Leftrightarrow:'⇔',iff:'⟺',mapsto:'↦',in:'∈',notin:'∉',ni:'∋',
    subset:'⊂',subseteq:'⊆',supset:'⊃',supseteq:'⊇',cup:'∪',cap:'∩',setminus:'∖',
    emptyset:'∅',varnothing:'∅',forall:'∀',exists:'∃',nexists:'∄',neg:'¬',lnot:'¬',
    land:'∧',wedge:'∧',lor:'∨',vee:'∨',oplus:'⊕',otimes:'⊗',perp:'⊥',parallel:'∥',
    angle:'∠',nabla:'∇',partial:'∂',infty:'∞',ldots:'…',dots:'…',cdots:'⋯',vdots:'⋮',
    ddots:'⋱',langle:'⟨',rangle:'⟩',lceil:'⌈',rceil:'⌉',lfloor:'⌊',rfloor:'⌋',
    hookrightarrow:'↪',triangleq:'≜',approxeq:'≊',doteq:'≐'};
  const TEX_FUN = {log:1,ln:1,lg:1,exp:1,sin:1,cos:1,tan:1,cot:1,sec:1,csc:1,sinh:1,cosh:1,
    tanh:1,det:1,deg:1,dim:1,ker:1,hom:1,Pr:1};
  const TEX_LIMOP = {lim:'lim',max:'max',min:'min',sup:'sup',inf:'inf',arg:'arg',gcd:'gcd'};
  const TEX_BIG = {sum:'∑',prod:'∏',coprod:'∐',int:'∫',iint:'∬',oint:'∮',bigcup:'⋃',
    bigcap:'⋂',bigoplus:'⨁',bigotimes:'⨂',bigwedge:'⋀',bigvee:'⋁'};

  function texBalanced(str, openIdx){
    if(str[openIdx] !== '{') return null;
    let d = 0;
    for(let k = openIdx; k < str.length; k++){
      if(str[k] === '{') d++;
      else if(str[k] === '}'){ d--; if(!d) return {body: str.slice(openIdx + 1, k), end: k + 1}; }
    }
    return {body: str.slice(openIdx + 1), end: str.length};
  }

  function texParse(str, disp){
    const out = [];
    let i = 0;
    const n = str.length;
    const ent = c => c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const skip = () => { while(i < n && str[i] === ' ') i++; };
    const wrap = x => /^<m(row|i|n|o|frac|sqrt|root|sub|sup|subsup|under|over|underover|space|text)[ />]/.test(x)
      ? x : '<mrow>' + x + '</mrow>';

    function charTok(c){
      if(c >= '0' && c <= '9') return '<mn>' + c + '</mn>';
      if(/[A-Za-z]/.test(c)) return '<mi>' + c + '</mi>';
      if(c === ' ') return '';
      if(c === '~') return '<mspace width="0.33em"/>';
      if(c === '|') return '<mo stretchy="false">|</mo>';
      return '<mo>' + ent(c) + '</mo>';
    }
    function accent(base, ch){
      return '<mover>' + wrap(base) + '<mo stretchy="false">' + ch + '</mo></mover>';
    }
    function readArg(){
      skip();
      if(i >= n) return '<mrow></mrow>';
      if(str[i] === '{'){ const g = texBalanced(str, i); i = g.end; return '<mrow>' + texParse(g.body, disp) + '</mrow>'; }
      if(str[i] === '\\') return command();
      return charTok(str[i++]);
    }
    function command(){
      i++;                                             // passe le backslash
      if(i < n && !/[A-Za-z]/.test(str[i])){
        const ch = str[i++];
        if(ch === ',' || ch === ':') return '<mspace width="0.22em"/>';
        if(ch === ';') return '<mspace width="0.28em"/>';
        if(ch === '!') return '<mspace width="-0.17em"/>';
        if(ch === '\\') return '';
        if(ch === ' ') return '<mspace width="0.25em"/>';
        if(ch === '|') return '<mo stretchy="false">‖</mo>';
        if(ch === '{' || ch === '}') return '<mo>' + ch + '</mo>';
        if(ch === '%' || ch === '#' || ch === '&' || ch === '_' || ch === '$') return '<mo>' + ent(ch) + '</mo>';
        return '<mo>' + ent(ch) + '</mo>';
      }
      let name = '';
      while(i < n && /[A-Za-z]/.test(str[i])) name += str[i++];
      while(i < n && str[i] === ' ') i++;

      if(name === 'frac' || name === 'dfrac' || name === 'tfrac' || name === 'cfrac'){
        const a = readArg(), b = readArg();
        return '<mfrac>' + wrap(a) + wrap(b) + '</mfrac>';
      }
      if(name === 'binom' || name === 'dbinom'){
        const b1 = readArg(), b2 = readArg();
        return '<mrow><mo>(</mo><mfrac linethickness="0">' + wrap(b1) + wrap(b2) + '</mfrac><mo>)</mo></mrow>';
      }
      if(name === 'sqrt'){
        skip();
        if(str[i] === '['){
          const e = str.indexOf(']', i), idx = str.slice(i + 1, e); i = e + 1;
          return '<mroot>' + wrap(readArg()) + '<mrow>' + texParse(idx, disp) + '</mrow></mroot>';
        }
        return '<msqrt>' + readArg() + '</msqrt>';
      }
      if(name === 'boxed' || name === 'fbox') return '<mrow class="boxed">' + readArg() + '</mrow>';
      if(name === 'text' || name === 'textrm' || name === 'textbf' || name === 'textit' || name === 'textsf' || name === 'mbox'){
        skip(); const g = texBalanced(str, i); if(!g) return '';
        i = g.end; return '<mtext>' + ent(g.body) + '</mtext>';
      }
      if(name === 'operatorname'){
        skip(); const g = texBalanced(str, i); if(!g) return '';
        i = g.end; return '<mo lspace="0.17em" rspace="0.17em">' + ent(g.body) + '</mo>';
      }
      if(name === 'mathrm' || name === 'mathbf' || name === 'mathsf' || name === 'mathtt'){
        const vv = {mathrm:'normal', mathbf:'bold', mathsf:'sans-serif', mathtt:'monospace'}[name];
        skip(); const g = texBalanced(str, i);
        if(!g) return '';
        i = g.end; return '<mi mathvariant="' + vv + '">' + ent(g.body) + '</mi>';
      }
      if(name === 'mathbb' || name === 'mathcal' || name === 'mathscr' || name === 'mathfrak'){
        const mvar = name === 'mathbb' ? 'double-struck' : name === 'mathfrak' ? 'fraktur' : 'script';
        skip(); const g = texBalanced(str, i);
        const raw = g ? g.body : (str[i] || ''); if(g) i = g.end; else i++;
        const bb = {R:'ℝ', N:'ℕ', Z:'ℤ', Q:'ℚ', C:'ℂ', E:'𝔼', P:'ℙ'};
        if(name === 'mathbb' && bb[raw]) return '<mi>' + bb[raw] + '</mi>';
        return '<mi mathvariant="' + mvar + '">' + ent(raw) + '</mi>';
      }
      if(name === 'hat' || name === 'widehat') return accent(readArg(), '^');
      if(name === 'bar' || name === 'overline') return accent(readArg(), '‾');
      if(name === 'vec') return accent(readArg(), '→');
      if(name === 'tilde' || name === 'widetilde') return accent(readArg(), '~');
      if(name === 'dot') return accent(readArg(), '˙');
      if(name === 'underbrace'){
        const ub = readArg(); skip();
        let sub = '';
        if(str[i] === '_'){ i++; sub = readArg(); }
        return '<munder><munder accentunder="true">' + wrap(ub) + '<mo stretchy="true">⏟</mo></munder>' + wrap(sub) + '</munder>';
      }
      if(name === 'overbrace'){
        const ob = readArg(); skip();
        let sup = '';
        if(str[i] === '^'){ i++; sup = readArg(); }
        return '<mover><mover accent="true">' + wrap(ob) + '<mo stretchy="true">⏞</mo></mover>' + wrap(sup) + '</mover>';
      }
      if(name === 'left' || name === 'right'){
        skip();
        let d = str[i++] || '';
        if(d === '\\'){
          if(/[A-Za-z]/.test(str[i])){
            let nm = '';
            while(i < n && /[A-Za-z]/.test(str[i])) nm += str[i++];
            if(nm === 'lVert' || nm === 'rVert' || nm === 'Vert') return '<mo stretchy="false">‖</mo>';
            if(nm === 'langle') return '<mo>⟨</mo>';
            if(nm === 'rangle') return '<mo>⟩</mo>';
            return '<mo stretchy="false">|</mo>';      // lvert / rvert / vert
          }
          d = str[i++] || '';                          // \{  \}  \|
          if(d === '|') return '<mo stretchy="false">‖</mo>';
          return '<mo>' + ent(d) + '</mo>';
        }
        if(d === '.' || d === '') return '';
        if(d === '|') return '<mo stretchy="false">|</mo>';
        return '<mo>' + ent(d) + '</mo>';
      }
      if(/^(bigg?|Bigg?)[lrm]?$/.test(name)) return '';       // \big( → le ( devient <mo>
      if(name === 'displaystyle' || name === 'textstyle' || name === 'scriptstyle' ||
         name === 'limits' || name === 'nolimits' || name === 'nonumber' || name === 'nobreak') return '';
      if(name === 'quad') return '<mspace width="1em"/>';
      if(name === 'qquad') return '<mspace width="2em"/>';
      if(name === 'prime') return '<mo>′</mo>';
      if(name === 'top') return '<mo>⊤</mo>';
      if(name === 'bot') return '<mo>⊥</mo>';
      if(name === 'colon') return '<mo>:</mo>';
      if(name === 'mid') return '<mo stretchy="false">∣</mo>';
      if(name === 'lvert' || name === 'rvert' || name === 'vert') return '<mo stretchy="false">|</mo>';
      if(name === 'lVert' || name === 'rVert' || name === 'Vert') return '<mo stretchy="false">‖</mo>';
      if(name === 'backslash') return '<mo>\\</mo>';
      if(TEX_GREEK[name]) return '<mi>' + TEX_GREEK[name] + '</mi>';
      if(TEX_OP[name]) return '<mo>' + TEX_OP[name] + '</mo>';
      if(TEX_BIG[name]) return '<mo class="bigop" largeop="true" movablelimits="' + (disp ? 'true' : 'false') + '">' + TEX_BIG[name] + '</mo>';
      if(TEX_LIMOP[name]) return '<mo class="bigop" lspace="0" rspace="0.12em" movablelimits="' + (disp ? 'true' : 'false') + '">' + TEX_LIMOP[name] + '</mo>';
      if(TEX_FUN[name]) return '<mi mathvariant="normal">' + name + '</mi>';
      return '<mi>' + ent(name) + '</mi>';
    }

    while(i < n){
      const c = str[i];
      if(c === ' '){ i++; continue; }
      if(c === '}'){ i++; continue; }
      if(c === ':' && str[i + 1] === '='){ i += 2; out.push('<mo>:=</mo>'); continue; }
      if(c === '{'){ const g = texBalanced(str, i); i = g.end; out.push('<mrow>' + texParse(g.body, disp) + '</mrow>'); continue; }
      if(c === '\\'){ out.push(command()); continue; }
      if(c === '_' || c === '^'){
        i++;
        const base = out.pop() || '<mrow></mrow>';
        const big = /class="bigop"/.test(base);
        const k1 = c, v1 = readArg();
        let k2 = null, v2 = null;
        skip();
        if(str[i] === '_' || str[i] === '^'){ k2 = str[i++]; v2 = readArg(); }
        const sub = k1 === '_' ? v1 : (k2 === '_' ? v2 : null);
        const sup = k1 === '^' ? v1 : (k2 === '^' ? v2 : null);
        let tag, kids;
        if(sub != null && sup != null){ tag = big ? 'munderover' : 'msubsup'; kids = wrap(base) + wrap(sub) + wrap(sup); }
        else if(sub != null){ tag = big ? 'munder' : 'msub'; kids = wrap(base) + wrap(sub); }
        else { tag = big ? 'mover' : 'msup'; kids = wrap(base) + wrap(sup); }
        out.push('<' + tag + '>' + kids + '</' + tag + '>');
        continue;
      }
      if(c === "'"){
        i++; let p = '′';
        while(str[i] === "'"){ p += '′'; i++; }
        const pb = out.pop() || '<mrow></mrow>';
        out.push('<msup>' + wrap(pb) + '<mo>' + p + '</mo></msup>');
        continue;
      }
      if(c >= '0' && c <= '9'){
        let num = '';
        while(i < n && (/[0-9]/.test(str[i]) || ((str[i] === '.' || str[i] === ',') && /[0-9]/.test(str[i + 1])))) num += str[i++];
        out.push('<mn>' + num + '</mn>');
        continue;
      }
      i++;
      out.push(charTok(c));
    }
    return out.join('');
  }

  function tex(input, block){
    let s = String(input).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
    s = s.replace(/[\s ]+/g,' ').trim();
    s = s.replace(/(\d)\s*\{\s*,\s*\}\s*(\d)/g,'$1,$2').replace(/(\d)\s*\{\s*\.\s*\}\s*(\d)/g,'$1.$2');
    s = s.replace(/\\%/g,'%');
    // \boxed{...} enveloppant toute l'expression → cadre CSS sur <math>
    let boxed = false, m;
    if((m = /^(?:\\[,;:]\s*|\\quad\s*|\\qquad\s*)*\\boxed\s*\{/.exec(s))){
      const open = s.indexOf('{', m.index);
      const g = texBalanced(s, open);
      if(g && s.slice(g.end).replace(/\s|\\[,;:]|\\quad|\\qquad/g,'') === ''){ boxed = true; s = g.body; }
    }
    const body = texParse(s, !!block);
    return '<math class="mathml' + (boxed ? ' boxed' : '') + '"' + (block ? ' display="block"' : '') + '>' + body + '</math>';
  }

  function inl(t){
    t = t.replace(/\*\*([^*]+?)\*\*/g,'<strong>$1</strong>');
    t = t.replace(/(^|[^*\w])\*([^*\n]+?)\*(?!\w)/g,'$1<em>$2</em>');
    t = t.replace(/\[([^\]]+?)\]\(([^)\s]+?)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }
  function mdToHtml(src){
    src = src.replace(/\r\n?/g,'\n');
    const store = [];
    const put = html => P0 + (store.push(html) - 1) + P1;
    const stashRe = new RegExp(P0 + '(\\d+)' + P1, 'g');
    const stashLine = s => new RegExp('^' + P0 + '\\d+' + P1 + '$').test(s.trim());
    src = src.replace(/```[^\n]*\n([\s\S]*?)```/g,(m,code)=>
      put('<pre><code>'+esc(code.replace(/\n$/,''))+'</code></pre>'));
    src = src.replace(/\$\$([\s\S]+?)\$\$/g,(m,x)=>
      put('<div class="math math-block">'+tex(x.trim(), true)+'</div>'));
    src = esc(src);
    src = src.replace(/\\\$/g, PD);
    src = src.replace(/`([^`]+?)`/g,(m,c)=> put('<code>'+c+'</code>'));
    src = src.replace(/\$([^$]+?)\$/g,(m,x)=> put('<span class="math">'+tex(x.replace(/\n/g,' '), false)+'</span>'));
    src = src.split(PD).join('$');

    const lines = src.split('\n');
    const out = [];
    let i = 0;
    const isBlank = s => !s.trim();
    const isTable = k => lines[k] && lines[k].includes('|') && lines[k+1] &&
      /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[k+1]) && /-/.test(lines[k+1]);
    while(i < lines.length){
      const ln = lines[i];
      if(isBlank(ln)){ i++; continue; }
      let m;
      if(/^(---|\*\*\*|___)\s*$/.test(ln)){ out.push('<hr>'); i++; continue; }
      if((m = ln.match(/^(#{1,6})\s+(.*)$/))){ const l=m[1].length; out.push('<h'+l+'>'+inl(m[2])+'</h'+l+'>'); i++; continue; }
      if(stashLine(ln)){ out.push(ln.trim()); i++; continue; }
      if(isTable(i)){
        const row = r => r.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(x=>inl(x.trim()));
        const head = row(ln); i += 2; const body = [];
        while(i<lines.length && lines[i].includes('|') && !isBlank(lines[i])){ body.push(row(lines[i])); i++; }
        out.push('<div class="tbl-wrap"><table><thead><tr>'+head.map(c=>'<th>'+c+'</th>').join('')+
          '</tr></thead><tbody>'+body.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
          '</tbody></table></div>');
        continue;
      }
      if(/^&gt;\s?/.test(ln)){
        const buf = [];
        while(i<lines.length && /^&gt;\s?/.test(lines[i])){ buf.push(lines[i].replace(/^&gt;\s?/,'').trim()); i++; }
        out.push('<blockquote>'+inl(buf.join(' ').replace(/\s+/g,' ').trim())+'</blockquote>');
        continue;
      }
      if(/^\s*([-*+]|\d+\.)\s+/.test(ln)){
        const tag = /^\s*\d+\.\s+/.test(ln) ? 'ol' : 'ul';
        const items = [];   // {deep:boolean, text:string}
        const stop = k => /^(#{1,6}\s|&gt;|(---|\*\*\*|___)\s*$)/.test(lines[k]) || stashLine(lines[k]) || isTable(k);
        while(i<lines.length && !isBlank(lines[i])){
          const mm = lines[i].match(/^(\s*)(?:[-*+]|\d+\.)\s+(.*)$/);
          if(mm){
            let txt = mm[2];
            const cb = txt.match(/^\[([ xX])\]\s+(.*)$/);
            if(cb) txt = '<input type="checkbox" disabled '+(cb[1].trim()?'checked':'')+'> '+cb[2];
            items.push({deep: mm[1].length >= 2, text: txt});
            i++;
          } else if(items.length && !stop(i)){
            items[items.length-1].text += ' ' + lines[i].trim();   // lazy continuation
            i++;
          } else break;
        }
        let html = '<'+tag+'>', nested = false;
        for(const it of items){
          if(it.deep && !nested){ html += '<ul>'; nested = true; }
          else if(!it.deep && nested){ html += '</ul>'; nested = false; }
          html += '<li>'+inl(it.text)+'</li>';
        }
        if(nested) html += '</ul>';
        out.push(html + '</'+tag+'>');
        continue;
      }
      const para = [];
      while(i<lines.length && !isBlank(lines[i]) &&
            !/^(#{1,6}\s|&gt;|\s*([-*+]|\d+\.)\s|(---|\*\*\*|___)\s*$)/.test(lines[i]) &&
            !stashLine(lines[i]) && !isTable(i)){
        para.push(lines[i].trim()); i++;
      }
      if(para.length) out.push('<p>'+inl(para.join(' '))+'</p>');
    }
    return out.join('\n').replace(stashRe,(m,n)=> store[+n] != null ? store[+n] : '');
  }  return { mdToHtml: mdToHtml, tex: tex, esc: esc, inl: inl };
})();
