# Révision MLOps & DataOps — instructions projet

Site de révision statique (zéro build, zéro dépendance) pour les 6 chapitres du cours
MLOps & DataOps (Pr. AIT DAOUD, FSBM). Quatre fonctionnalités : flashcards, quiz,
examen au format TD/TP réel avec correction, mindmap 2D.

Déployé sur GitHub Pages à `kappa20.github.io/mlops_dataops_revision/`.
Un lien symbolique existe à `pre_mlops_exam/mlops_dataops_revision` (dans le dossier
de cours, hors dépôt git) pointant vers ce dossier, pour un accès local pratique.

## Où toucher pour quoi

| Tâche | Fichier(s) |
|---|---|
| Ajouter/corriger une flashcard | `data/flashcards-chN.js` |
| Ajouter/corriger une question de quiz | `data/quiz-chN.js` |
| Ajouter/corriger un exercice d'examen | `data/exam-chN.js` |
| Ajouter/corriger un nœud de mindmap | `data/mindmap-chN.js` |
| Changer titre/couleur d'un chapitre | `data/chapters.js` (seule source de vérité — la CSS et le JS s'alignent dessus au chargement) |
| Changer le comportement de l'UI | `app/flashcards.js`, `app/quiz.js`, `app/exam.js`, `app/mindmap.js`, `app/app.js` |
| Changer l'apparence | `assets/styles.css` |

**Ne pas** ajouter de contenu dans `app/*.js` ou `index.html` — uniquement dans `data/*.js`.

## Architecture

Aucune dépendance externe, aucun bundler. Chargement classique via `<script src>` dans
`index.html`, dans cet ordre : `data/chapters.js` → tous les `data/flashcards-chN.js` →
tous les `data/quiz-chN.js` → tous les `data/exam-chN.js` → tous les `data/mindmap-chN.js`
→ `app/markdown.js` → `app/flashcards.js` → `app/quiz.js` → `app/exam.js` →
`app/mindmap.js` → `app/app.js` (en dernier — il câble les autres modules).

Namespace global unique : `window.MDO`. Chaque fichier `data/*.js` ne fait que pousser
dans un tableau partagé (`window.MDO.flashcards`, `window.MDO.quiz`) ou assigner une clé
d'objet partagé (`window.MDO.exams.chN`, `window.MDO.mindmaps.chN`).

Chaque module de fonctionnalité (`app/flashcards.js`, etc.) expose
`window.MDO.<Feature>.init(ctx)` mais ne s'exécute **pas** tout seul au chargement —
c'est `app/app.js`, chargé en dernier, qui construit le contexte partagé (`store`, `save`,
`chapters`, helpers de rendu markdown) et appelle `.init(ctx)` sur chaque module, dans
l'ordre. Ça évite tout problème d'ordre de chargement entre données/état/DOM.

## Schémas de données

Voir un fichier existant pour l'exemple exact, mais en résumé :

- **flashcard** : `{id, chapter, topic, kind:"definition"|"concept"|"case", front, back}`
- **quiz** : `{id, chapter, type:"mcq", q, choices[], answer(index), explain}` ou
  `{id, chapter, type:"open", q, model}`
- **exam** (un objet par chapitre) : `{chapter, title, timeMinutes, qcm[8], questions[5-8],
  vocab[8-12], analysis[2-5], case:{title, context, tasks[4-6], deliverables[]}}` — chaque
  item porte un champ `correction` (ou `explain`/`model`) **terse** (style mot-clé/phrase
  courte, pas de dissertation — comme les vrais corrigés manuscrits du cours).
- **mindmap** (un tableau par chapitre) : nœuds plats `{id, label, parentId, kind:"root"|
  "branch"|"leaf", color?, note?}`, un seul `parentId:null` (racine), 20-40 nœuds.

Tous les champs de texte utilisent des template strings (backticks) pour éviter les
soucis d'échappement d'apostrophes en français. Markdown léger supporté dans les champs
longs (`**gras**`, listes `- `, tableaux `| a | b |`) via `app/markdown.js`.

## Vérification

```
node build/verify.js
```
Charge tous les fichiers `data/*.js` dans un contexte `vm` Node, vérifie les schémas,
les comptes par chapitre, l'unicité globale des ids, l'absence de `parentId` orphelin
dans les mindmaps, et lance `node --check` sur chaque fichier JS. À lancer après toute
modification de contenu.

Test manuel : `python3 -m http.server 8080` depuis ce dossier, puis ouvrir
`http://localhost:8080/index.html` — zéro erreur console attendue.

## Contraintes à respecter

- Pas de modules ES, pas de bundler, pas de `fetch`/XHR pour charger les données (le site
  doit pouvoir tourner via un simple serveur statique GitHub Pages).
- Français partout. Corrections/explications terses (mots-clés/phrases courtes), fidèles
  au ton des corrigés réels du cours — pas de dissertations.
- Les 8 QCM et les 5-8 questions ouvertes de chaque chapitre doivent être transcrits
  fidèlement des TD/TP réels (`pre_mlops_exam/tps/`) — ce sont les vraies questions
  d'examen, pas des questions inventées.
