# CLAUDE.md — `revision_ml/`

Offline study app for a Machine Learning final exam (Master DSBD, Pr. Benlahmar, FSBM):
flashcards, quiz, exam-simulation, and the 15 study sheets rendered in-page. French UI.

The canonical course notes live one level up in `../study_guide/*.md`. This folder is the
interactive site built from them.

---

## Hard constraints — do not break these

- **Opens by double-click (`file://`).** So: **classic `<script src>` only** — no ES modules
  (`type="module"`, `import`/`export`), no `fetch`/`XMLHttpRequest`, no dynamic `import()`.
  All cross-file sharing goes through globals on `window`.
- **No network at all.** No CDN, no Google Fonts, no external anything. Everything is local.
- **Every file must stay free of control characters** (bytes < 0x20 except `\t \n \r`).
  Check: `node -e 'for(const f of process.argv.slice(1)){const s=require("fs").readFileSync(f,"utf8");if([...s].some(c=>c!=="\t"&&c!=="\n"&&c!=="\r"&&c.charCodeAt(0)<32))console.log("CTRL",f)}' index.html assets/styles.css data/*.js app/*.js`
- **Load order in `index.html` matters** and is: `data/topics.js` → `flashcards.js` → `quiz.js`
  → `exams.js` → `fiches.js` → `app/markdown.js` → `app/app.js`. Data before app.
- Progress is stored in `localStorage` under key `ml_revision_v1`. Wrap every access in
  try/catch (already done). Don't rename the key without a migration.

---

## File map

| File | Owns | Touch it when… |
|---|---|---|
| `index.html` | page markup + `<link>`/`<script src>` tags | you add a new data file, or change the DOM structure |
| `assets/styles.css` | all CSS (theme tokens, layout, modal, `.md-body`) | restyling |
| `data/topics.js` | `window.ML.topics` (t01..t13), `window.ML.fiches` (sheet list) | add/rename a theme |
| `data/flashcards.js` | `window.ML.flashcards` | **add / fix flashcards — usually the only file to edit** |
| `data/quiz.js` | `window.ML.quiz` | **add / fix quiz questions — usually the only file to edit** |
| `data/exams.js` | `window.ML.exams` | add / fix an "Examen blanc" paper |
| `data/fiches.js` | `window.ML.ficheText` — **GENERATED**, never hand-edit | never (regenerate instead) |
| `app/markdown.js` | `window.MLmd` = mini Markdown + LaTeX renderer | renderer bugs only |
| `app/app.js` | the whole UI (IIFE): tabs, flashcards, quiz, exam, fiches modal, persistence | behaviour / UI changes |
| `build/build_fiches.py` | regenerates `data/fiches.js` from `../../study_guide/*.md` | after editing a sheet |

Namespace contract: each `data/*.js` starts with `window.ML = window.ML || {};` then assigns one
property. `app/app.js` reads `window.ML.{topics,fiches,flashcards,quiz,exams,ficheText}` and
`window.MLmd.mdToHtml`. Nothing else is shared between files.

---

## Common tasks

### Add / edit flashcards  → `data/flashcards.js` only

One card is a 3-string array: `["<themeId>", "<question>", "<answer>"]`

- `themeId` ∈ `t01`…`t13` (see `data/topics.js`).
- `\n` in the answer = line break (shown on the card back).
- Cards are grouped by `// ---- tNN … ----` comments; keep new cards near their theme.
- IDs are positional (`c0, c1, …` assigned at load) — order doesn't matter, don't add an id field.

```js
["t04","Quand un nœud est-il « pur » ?","Tous ses exemples sont de la même classe ⇒ H = 0 et Gini = 0. C'est l'objectif de l'arbre."],
```

### Add / edit quiz questions  → `data/quiz.js` only

MCQ:
```js
{t:"t05", type:"mcq",
 q:"Énoncé de la question ?",
 choices:["choix A","choix B","choix C","choix D"],
 answer:2,                       // index base-0 de la bonne réponse
 explain:"Explication montrée après la réponse."},
```
Open (self-graded, the real exam format):
```js
{t:"t06", type:"open",
 q:"Énoncé ?",
 model:"Réponse modèle.\nUtiliser \\n pour les retours à la ligne."},
```
`t` ∈ `t01`…`t13`. The "Aléatoire — 20" mode samples from all questions; "Par thème" filters on `t`.

### Add an exam paper  → `data/exams.js` + `index.html`

`window.ML.exams` is `{ "<key>": { title:"…", items:[ ["question","réponse modèle"], … ] } }`.
Also add a matching `<option value="<key>">…</option>` in `index.html` (section
`id="view-exam"`, the `#examPick` select).

### Edit or add a study sheet  → `../study_guide/*.md`, then regenerate

1. Edit / create `../study_guide/NN_slug.md` (real Markdown; `$…$` / `$$…$$` for math).
2. If new: add an entry to `window.ML.fiches` in `data/topics.js` (`{f, d}`).
3. Run `python3 build/build_fiches.py` to rebuild `data/fiches.js`.
   The Fiches tab keys sheets by the **first two characters** of the filename (`fid()` in app.js).

### Change look or behaviour

CSS → `assets/styles.css`. Logic → `app/app.js` (single IIFE; sections are marked with
`/* ===== NAME ===== */` banners: HOME, CARDS, QUIZ, EXAM, FICHES, init).

---

## Renderer notes (`app/markdown.js`)

Hand-rolled, supports: headings, `**bold**` / `*italic*`, `` `code` ``, fenced code, GFM pipe
tables, blockquotes, `-`/`1.` lists (+ `- [ ]` checkboxes, one nesting level via 2-space indent),
`---` rules, links, and `$…$` / `$$…$$` math.
Uses PUA sentinels `U+E000..E002` internally for stashing — keep those out of source content.
It's "good enough for these sheets", not a spec-compliant Markdown parser; extend the specific
case rather than rewriting.

**Math → MathML.** `tex(latex, block)` is a small recursive LaTeX→MathML converter (`texParse` +
`texBalanced`). The browser renders the `<math>` natively — real fraction bars, stacked
`msub`/`msup`, `munderover` for `\sum`/`\lim` in display. No KaTeX, no fonts, no network
(MathML Core is built into Chrome 109+/Firefox/Safari). Covered: `\frac \dfrac \tfrac \sqrt
\boxed \text \underbrace \hat \bar \left \right \big… \mathbb \mathcal`, Greek, ~120 operator
macros, `_`/`^` (+ combined), primes, `:=`, French decimals `0{,}5`. Vertical bars
(`| \lvert \lVert \mid`) are forced `stretchy="false"` so they never balloon. `\boxed{…}`
wrapping the whole expression → CSS box on `<math class="boxed">` (`assets/styles.css`, `.md-body
math` rules); mid-expression `\boxed` → `<mrow class="boxed">`. Unknown `\cmd` → `<mi>cmd</mi>`.
To extend: add a case in `command()`, not a post-hoc string replace. Sanity check after edits:
convert every `$…$`/`$$…$$` in `../study_guide/*.md` and assert the `<math>` output has balanced
tags (541 blocks currently).

`data/fiches.js` embeds each sheet as a template literal with `` ` ``, `\`, and `${` escaped
(done by `build_fiches.py`). That's why it must not be hand-edited.

---

## Test before finishing

1. Control-char scan (command above) — must be clean.
2. `node --check` each JS file.
3. Serve and open in a browser (the Chrome extension blocks `file://`, so use a server for the
   automated check): `python3 -m http.server 8080` then load `http://localhost:8080/index.html`.
4. Verify, with **no console errors**: Accueil counts render; Flashcards flips + "Je sais/À
   revoir" persists across reload; Quiz runs an MCQ with feedback; **Fiches** opens a sheet in
   the modal with tables + formulas; Esc / backdrop close it.
5. Quick load-order sanity without a browser: run the 7 files in a `vm` context with a minimal
   `window`/`document` shim and assert `window.ML.flashcards.length` etc.

## Content facts (keep consistent if you change counts)

Currently 145 flashcards, 84 quiz questions, 13 themes, 16 sheets, 2 exam papers. The Accueil
"Progression par thème" expects every `hi`-priority theme to have ≥ 8 flashcards and ≥ 6 quiz
questions.
