/* app/markdown.js — mini renderer Markdown (sans dépendance, marche en file://).
 * Sous-ensemble volontairement réduit (gras/italique, listes, tableaux, citations,
 * code, paragraphes) : le contenu de ce cours est conceptuel, pas besoin de LaTeX.
 * Exposé en window.MDOmd. */
window.MDOmd = (function(){
  "use strict";
  const P0 = String.fromCharCode(0xE000), P1 = String.fromCharCode(0xE001);
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function inl(t){
    t = t.replace(/\*\*([^*]+?)\*\*/g,'<strong>$1</strong>');
    t = t.replace(/(^|[^*\w])\*([^*\n]+?)\*(?!\w)/g,'$1<em>$2</em>');
    t = t.replace(/\[([^\]]+?)\]\(([^)\s]+?)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }

  function mdToHtml(src){
    src = String(src == null ? '' : src).replace(/\r\n?/g,'\n');
    const store = [];
    const put = html => P0 + (store.push(html) - 1) + P1;
    const stashRe = new RegExp(P0 + '(\\d+)' + P1, 'g');
    const stashLine = s => new RegExp('^' + P0 + '\\d+' + P1 + '$').test(s.trim());

    src = src.replace(/```[^\n]*\n([\s\S]*?)```/g,(m,code)=>
      put('<pre><code>'+esc(code.replace(/\n$/,''))+'</code></pre>'));
    src = esc(src);
    src = src.replace(/`([^`]+?)`/g,(m,c)=> put('<code>'+c+'</code>'));

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
        const items = [];
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
            items[items.length-1].text += ' ' + lines[i].trim();
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
  }

  return { mdToHtml: mdToHtml, esc: esc, inl: inl };
})();
