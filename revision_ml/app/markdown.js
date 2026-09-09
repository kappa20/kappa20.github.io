/* app/markdown.js — mini renderer Markdown + LaTeX (aucune dépendance, marche en file://).
 * Exposé en window.MLmd. Généralement pas besoin d'y toucher. */
window.MLmd = (function(){
  "use strict";
  const P0 = String.fromCharCode(0xE000), P1 = String.fromCharCode(0xE001), PD = String.fromCharCode(0xE002);
  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function tex(s){
    s = s.replace(/\\(left|right|displaystyle|big|Big|bigg|Bigg|!|,|;|:|\\)/g,' ');
    s = s.replace(/\\quad|\\qquad/g,'  ');
    s = s.replace(/\\operatorname\s*\{([^{}]*)\}/g,'$1');
    s = s.replace(/\\mathbb\s*\{R\}/g,'ℝ').replace(/\\mathbb\s*\{([^{}]*)\}/g,'$1');
    s = s.replace(/\\underbrace\s*\{([^{}]*)\}_\{[^{}]*\}/g,'$1');
    // balanced-brace helpers for \boxed{}, \text{}, \frac{}{}, \sqrt{}
    const grp = (str,p)=>{ let d=0; for(let k=p;k<str.length;k++){ const ch=str[k]; if(ch==='{')d++; else if(ch==='}'){ d--; if(!d) return {c:str.slice(p+1,k), e:k+1}; } } return null; };
    const one = (str,names,fn)=>{ const re=new RegExp('\\\\(?:'+names+')\\s*\\{','g'); let mm,o='',last=0;
      while((mm=re.exec(str))){ const a=grp(str,mm.index+mm[0].length-1); if(!a){ continue; } o+=str.slice(last,mm.index)+fn(rec(a.c)); last=a.e; re.lastIndex=last; } return o+str.slice(last); };
    const two = (str,names,fn)=>{ const re=new RegExp('\\\\(?:'+names+')\\s*\\{','g'); let mm,o='',last=0;
      while((mm=re.exec(str))){ const a=grp(str,mm.index+mm[0].length-1); if(!a){ continue; } let j=a.e; while(str[j]===' ')j++; if(str[j]!=='{'){ continue; } const b=grp(str,j); if(!b){ continue; }
        o+=str.slice(last,mm.index)+fn(rec(a.c),rec(b.c)); last=b.e; re.lastIndex=last; } return o+str.slice(last); };
    function rec(x){ x=one(x,'boxed|text',v=>v); x=two(x,'[dt]?frac',(a,b)=>'('+a+') / ('+b+')'); x=one(x,'sqrt',v=>'√('+v+')'); return x; }
    s = rec(s);
    s = s.replace(/\\hat\s*\{([^{}]*)\}/g,'$1̂');
    const M = {
      partial:'∂',nabla:'∇',sum:'∑',prod:'∏',sigma:'σ',Sigma:'Σ',theta:'θ',Theta:'Θ',
      alpha:'α',beta:'β',gamma:'γ',Gamma:'Γ',delta:'δ',Delta:'Δ',lambda:'λ',mu:'μ',eta:'η',
      xi:'ξ',phi:'φ',varphi:'φ',pi:'π',rho:'ρ',tau:'τ',epsilon:'ε',varepsilon:'ε',
      infty:'∞',times:'×',cdot:'·',div:'÷',pm:'±',mp:'∓',approx:'≈',neq:'≠',ne:'≠',
      le:'≤',leq:'≤',ge:'≥',geq:'≥',ll:'≪',gg:'≫',equiv:'≡',propto:'∝',sim:'∼',
      to:'→',rightarrow:'→',Rightarrow:'⇒',leftarrow:'←',Leftarrow:'⇐',iff:'⟺',mapsto:'↦',
      in:'∈',notin:'∉',subset:'⊂',subseteq:'⊆',cup:'∪',cap:'∩',emptyset:'∅',
      forall:'∀',exists:'∃',land:'∧',lor:'∨',lnot:'¬',
      ldots:'…',dots:'…',cdots:'⋯',top:'ᵀ',prime:'′',angle:'∠',
      mid:'|',lvert:'|',rvert:'|',vert:'|',lVert:'‖',rVert:'‖',Vert:'‖',langle:'⟨',rangle:'⟩',
      log:'log',ln:'ln',exp:'exp',min:'min',max:'max',arg:'arg',lim:'lim',sin:'sin',cos:'cos',tan:'tan',det:'det'
    };
    s = s.replace(/\\([A-Za-z]+)/g,(m,c)=> M[c]!=null ? M[c] : c);
    s = s.replace(/\\([\s{}()[\],;.!|])/g,'$1');   // unescape LaTeX-escaped punctuation/space
    s = s.replace(/\^\{([^{}]*)\}/g,(m,x)=>'<sup>'+x.trim()+'</sup>');
    s = s.replace(/_\{([^{}]*)\}/g,(m,x)=>'<sub>'+x.trim()+'</sub>');
    s = s.replace(/\^([^\s{}])/g,'<sup>$1</sup>');
    s = s.replace(/_([A-Za-z0-9])/g,'<sub>$1</sub>');
    s = s.replace(/[{}]/g,'');
    s = s.replace(/[ \t]{2,}/g,' ');
    return s.trim();
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
      put('<div class="math math-block">'+tex(esc(x.trim()))+'</div>'));
    src = esc(src);
    src = src.replace(/\\\$/g, PD);
    src = src.replace(/`([^`]+?)`/g,(m,c)=> put('<code>'+c+'</code>'));
    src = src.replace(/\$([^$]+?)\$/g,(m,x)=> put('<span class="math'+
      (/\n/.test(x) ? ' mathwrap' : '')+'">'+tex(x.replace(/\n/g,' '))+'</span>'));
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
