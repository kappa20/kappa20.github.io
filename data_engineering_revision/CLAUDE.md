# Révision Data Engineering — instructions projet

Site de révision statique (zéro build, zéro dépendance) pour le module Data Engineering
(Master S2, FSBM/Université Hassan II) : NoSQL (MongoDB, Cassandra), Data Warehouse,
modélisation dimensionnelle, ETL/ELT (Talend). Quatre fonctionnalités : flashcards, quiz,
examen au format TD/TP avec correction, mindmap 2D.

Déployé sur GitHub Pages à `kappa20.github.io/data_engineering_revision/`. Même moteur que
`../mlops_dataops_revision/` (copié, pas partagé) ; namespace `window.DE` et clé
localStorage `de_revision_v1` (les deux sites partagent l'origine `kappa20.github.io`, il
ne faut donc jamais réutiliser la clé de l'autre site).

## Où toucher pour quoi

| Tâche | Fichier(s) |
|---|---|
| Ajouter/corriger une flashcard | `data/flashcards-chN.js` |
| Ajouter/corriger une question de quiz | `data/quiz-chN.js` |
| Ajouter/corriger un exercice d'examen | `data/exam-chN.js` |
| Ajouter/corriger un nœud de mindmap | `data/mindmap-chN.js` |
| Changer titre/couleur d'un chapitre | `data/chapters.js` (source de vérité) |
| Changer le comportement de l'UI | `app/*.js` |
| Changer l'apparence | `assets/styles.css` |

**Ne pas** ajouter de contenu dans `app/*.js` ou `index.html` — uniquement dans `data/*.js`.

## Chapitres

1. Big Data & panorama NoSQL — 2. MongoDB : architecture & modélisation —
3. MongoDB : CRUD, requêtes & TP1-3 — 4. Cassandra — 5. Data Warehouse, BI & ETL/ELT
(TP Talend) — 6. Modélisation multidimensionnelle.

## Architecture

Chargement par `<script src>` dans `index.html` : `data/chapters.js` → flashcards → quiz →
exam → mindmap (chN, N=1..6) → `app/markdown.js` → `flashcards.js` → `quiz.js` → `exam.js`
→ `mindmap.js` → `app/app.js` (en dernier, il câble les modules via `.init(ctx)`).
Namespace unique `window.DE` : les fichiers de données poussent dans `window.DE.flashcards`
/ `window.DE.quiz` ou assignent `window.DE.exams.chN` / `window.DE.mindmaps.chN`.

## Schémas de données

- **flashcard** : `{id, chapter, topic, kind:"definition"|"concept"|"case", front, back}`
- **quiz** : `{id, chapter, type:"mcq", q, choices[], answer(index), explain}` ou
  `{id, chapter, type:"open", q, model}`
- **exam** : `{chapter, title, timeMinutes, qcm[8], questions[5-8], vocab[8-12],
  analysis[2-5], case:{title, context, tasks[4-6], deliverables[]}}` — corrections terses.
- **mindmap** : nœuds plats `{id, label, parentId, kind:"root"|"branch"|"leaf", note?}`,
  un seul `parentId:null`, 20-40 nœuds.

Champs de texte en template strings (backticks) ; ne jamais écrire `${` dans le contenu
(le code MongoDB contient des `$`, c'est seulement `${` qui interpole). Markdown léger
supporté (`**gras**`, listes `- `, tableaux `| a | b |`).

## Vérification

```
node build/verify.js
```
Vérifie schémas, comptes par chapitre, ids uniques, mindmaps sans orphelin, `node --check`.
Test manuel : `python3 -m http.server 8080` puis `http://localhost:8080/` — zéro erreur console.

## Provenance du contenu (à respecter)

- Ch.3 : exercices d'examen transcrits des vrais TP1/TP2/TP3 (avec leurs corrigés). Les
  corrigés du TP2 ont des incohérences (`Age` vs `age`, « Taza ou Safi » avec exemple `Fes`) :
  elles sont signalées comme pièges, pas corrigées en silence.
- Ch.5 : cas d'examen = TP Talend. Ch.1, 2, 4, 6 : items construits à partir du cours (pas de TD).
- Français partout, corrections terses (mots-clés/phrases courtes).
