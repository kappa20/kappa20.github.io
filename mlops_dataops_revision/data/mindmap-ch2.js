window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch2 = [
  { id:"ch2-root", label:"CH2 — Pipelines agiles & orchestration", parentId:null, kind:"root" },

  { id:"ch2-b1", label:"Pourquoi les pipelines ?", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b1-l1", label:"Artisanal vs industrialisé", parentId:"ch2-b1", kind:"leaf", note:`Scripts dispersés, exécution manuelle vs pipeline structuré, versionné, reproductible.` },
  { id:"ch2-b1-l2", label:"Il ne suffit pas / il faut", parentId:"ch2-b1", kind:"leaf", note:`Notebook correct + script fonctionnel + modèle performant ne suffisent pas ; il faut robustesse, reproductibilité, traçabilité.` },
  { id:"ch2-b1-l3", label:"Caractéristiques d'un pipeline industrialisé", parentId:"ch2-b1", kind:"leaf", note:`Chaîne structurée, modulaire, répétable, traçable, versionné, automatisable, maintenable.` },

  { id:"ch2-b2", label:"Lean Thinking appliqué au data/ML", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b2-l1", label:"5 principes du Lean Thinking", parentId:"ch2-b2", kind:"leaf", note:`Identifier la valeur, cartographier le flux, créer le flux, systèmes pull, viser la perfection (kaizen).` },
  { id:"ch2-b2-l2", label:"7 gaspillages (muda)", parentId:"ch2-b2", kind:"leaf", note:`Surproduction, attente, transport, sur-traitement, défauts, excès de mouvement, inventaire.` },
  { id:"ch2-b2-l3", label:"Root Cause Analysis / See the Whole", parentId:"ch2-b2", kind:"leaf", note:`Corriger la cause racine (5 pourquoi), pas le symptôme ; regarder le système global, pas l'optimisation locale.` },

  { id:"ch2-b3", label:"Agile Collaboration appliquée à DataOps", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b3-l1", label:"4 valeurs du Manifeste Agile", parentId:"ch2-b3", kind:"leaf", note:`Individus/interactions, logiciel fonctionnel, collaboration client, réponse au changement.` },
  { id:"ch2-b3-l2", label:"DataOps Manifesto (18 principes)", parentId:"ch2-b3", kind:"leaf", note:`Ex : satisfaire le client, sport d'équipe, orchestrer, qualité primordiale, réutiliser, réduire l'héroïsme.` },
  { id:"ch2-b3-l3", label:"8 principes opérationnels DataOps", parentId:"ch2-b3", kind:"leaf", note:`Livrer vite, collaborer en continu, s'adapter, tester/surveiller en continu, automatiser, orchestrer.` },

  { id:"ch2-b4", label:"Pipelines de données et pipelines ML", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b4-l1", label:"Pipeline de données", parentId:"ch2-b4", kind:"leaf", note:`Ingestion, validation, nettoyage, transformation, stockage — idempotent, traçable, testable.` },
  { id:"ch2-b4-l2", label:"Pipeline ML", parentId:"ch2-b4", kind:"leaf", note:`Feature engineering, split, entraînement, évaluation, artefact modèle.` },
  { id:"ch2-b4-l3", label:"Artefacts produits", parentId:"ch2-b4", kind:"leaf", note:`Dataset versionné, modèle sérialisé, métriques, rapport d'évaluation, config d'hyperparamètres.` },
  { id:"ch2-b4-l4", label:"Articulation data → ML → serving", parentId:"ch2-b4", kind:"leaf", note:`Le pipeline data alimente le pipeline ML en features, qui produit un modèle consommé en serving.` },

  { id:"ch2-b5", label:"Versionnement étendu", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b5-l1", label:"Au-delà du code", parentId:"ch2-b5", kind:"leaf", note:`Un modèle ML dépend aussi des données, hyperparamètres et environnement — tout doit être versionné.` },
  { id:"ch2-b5-l2", label:"Objets à versionner", parentId:"ch2-b5", kind:"leaf", note:`Code (Git), données (DVC/Delta Lake), configs (Git+YAML), schémas, artefacts, modèles, environnements.` },
  { id:"ch2-b5-l3", label:"Git + DVC", parentId:"ch2-b5", kind:"leaf", note:`Git trace le qui/quand/pourquoi du code ; DVC trace le quoi des données via pointeurs .dvc versionnés dans Git.` },

  { id:"ch2-b6", label:"Environnements reproductibles", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b6-l1", label:"Ça marche sur mon laptop", parentId:"ch2-b6", kind:"leaf", note:`L'absence d'environnement maîtrisé est la première cause d'irreproductibilité en data/ML.` },
  { id:"ch2-b6-l2", label:"4 niveaux de maîtrise", parentId:"ch2-b6", kind:"leaf", note:`Dépendances explicites → environnement virtuel → fichier déclaratif → conteneurisation.` },
  { id:"ch2-b6-l3", label:"Conteneurisation (Docker)", parentId:"ch2-b6", kind:"leaf", note:`Encapsule OS, dépendances et code dans une image immuable — reproductibilité maximale.` },

  { id:"ch2-b7", label:"Orchestration des pipelines", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b7-l1", label:"Définition de l'orchestration", parentId:"ch2-b7", kind:"leaf", note:`Coordonner automatiquement l'exécution selon dépendances, scheduling, retries et supervision centralisée.` },
  { id:"ch2-b7-l2", label:"Cron vs orchestrateur", parentId:"ch2-b7", kind:"leaf", note:`Cron n'a ni dépendances ni retry ni monitoring ; un orchestrateur gère DAG, retry, alertes, parallélisation.` },
  { id:"ch2-b7-l3", label:"DAG (Directed Acyclic Graph)", parentId:"ch2-b7", kind:"leaf", note:`Graphe orienté acyclique modélisant les dépendances entre tâches, permet la parallélisation.` },
  { id:"ch2-b7-l4", label:"Orchestrateurs courants", parentId:"ch2-b7", kind:"leaf", note:`Airflow, Prefect, Dagster, Metaflow, Kubeflow Pipelines.` },

  { id:"ch2-b8", label:"Continuous Integration appliquée aux pipelines", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b8-l1", label:"Définition de la CI", parentId:"ch2-b8", kind:"leaf", note:`Intégrer automatiquement les changements avec tests, linting, validation à chaque commit/PR.` },
  { id:"ch2-b8-l2", label:"Workflow CI typique", parentId:"ch2-b8", kind:"leaf", note:`Push/PR → lint → tests unitaires → tests de transformation → validation données → build artefact.` },
  { id:"ch2-b8-l3", label:"Contrôles intégrables", parentId:"ch2-b8", kind:"leaf", note:`Linting, tests unitaires, tests de transformation, validation config, tests sur mini-dataset.` },

  { id:"ch2-b9", label:"Modularité, réutilisation, automatisation", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b9-l1", label:"Modularité", parentId:"ch2-b9", kind:"leaf", note:`Composants indépendants, responsabilité unique (SRP), testables et remplaçables.` },
  { id:"ch2-b9-l2", label:"Réutilisation", parentId:"ch2-b9", kind:"leaf", note:`Bibliothèques internes, templates standardisés — ne pas réécrire l'existant validé.` },
  { id:"ch2-b9-l3", label:"Automatisation progressive", parentId:"ch2-b9", kind:"leaf", note:`On n'automatise pas le chaos : comprendre → simplifier → standardiser → automatiser.` }
];
