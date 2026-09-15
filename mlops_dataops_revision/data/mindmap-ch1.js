/* Chapter 1 — Fondamentaux DataOps & MLOps : mindmap. */
window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch1 = [
  { id:"ch1-root", label:"CH1 — Fondamentaux DataOps & MLOps", parentId:null, kind:"root" },

  // Branche 1 — Introduction & contexte
  { id:"ch1-b1", label:"Introduction & contexte", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b1-l1", label:"Pourquoi coupler DataOps et MLOps", parentId:"ch1-b1", kind:"leaf", note:`DataOps et MLOps sont les piliers jumeaux de l'industrialisation de l'IA — transforment un projet IA en levier durable de valeur.` },
  { id:"ch1-b1-l2", label:"Bon prototype ≠ bon système", parentId:"ch1-b1", kind:"leaf", note:`Données instables, processus manuels, déploiement fragile, absence de monitoring.` },
  { id:"ch1-b1-l3", label:"Un problème pas seulement technique", parentId:"ch1-b1", kind:"leaf", note:`Aussi organisationnel, méthodologique, opérationnel : processus standardisés, traçabilité, responsabilités claires.` },

  // Branche 2 — DevOps : la fondation
  { id:"ch1-b2", label:"DevOps : la fondation", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b2-l1", label:"Définition DevOps (Jabbari, 2016)", parentId:"ch1-b2", kind:"leaf", note:`Philosophies, pratiques et outils augmentant la vélocité de livraison logicielle.` },
  { id:"ch1-b2-l2", label:"6 piliers de DevOps", parentId:"ch1-b2", kind:"leaf", note:`Versionnement, tests, CI/CD, Infrastructure as Code, monitoring, collaboration Dev/Ops.` },
  { id:"ch1-b2-l3", label:"Pourquoi DevOps ne suffit pas seul", parentId:"ch1-b2", kind:"leaf", note:`Le comportement dépend aussi des données ; dérive des modèles ; pipelines fragiles ; auditabilité requise.` },

  // Branche 3 — DataOps
  { id:"ch1-b3", label:"DataOps : définition & démarche", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b3-l1", label:"Définitions (Bergh, Atwal)", parentId:"ch1-b3", kind:"leaf", note:`Agile + DevOps + Lean appliqués à la donnée ; DataOps = "usine à données" (Atwal).` },
  { id:"ch1-b3-l2", label:"Objectifs de DataOps", parentId:"ch1-b3", kind:"leaf", note:`Réduire le délai donnée-usage, augmenter qualité/fiabilité, pipelines reproductibles, collaboration, livraisons fréquentes.` },
  { id:"ch1-b3-l3", label:"7 étapes selon Bergh", parentId:"ch1-b3", kind:"leaf", note:`Tests données, gestion de versions, branch & merge, environnements multiples, conteneuriser, paramétrer, travailler sans héroïsme.` },
  { id:"ch1-b3-l4", label:"Démarche de transformation (Atwal)", parentId:"ch1-b3", kind:"leaf", note:`Problèmes traditionnels → approche DataOps → agilité/qualité continue → industrialisation → valeur métier.` },

  // Branche 4 — MLOps
  { id:"ch1-b4", label:"MLOps : définition & cycle de vie", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b4-l1", label:"Définition MLOps (Gift & Deza)", parentId:"ch1-b4", kind:"leaf", note:`Faire passer un modèle du laptop à la production, surveillé, mis à l'échelle, mis à jour automatiquement.` },
  { id:"ch1-b4-l2", label:"Cycle MLOps en 5 étapes", parentId:"ch1-b4", kind:"leaf", note:`Entraîner → valider → déployer → surveiller → réentraîner.` },
  { id:"ch1-b4-l3", label:"Le modèle comme artefact versionné", parentId:"ch1-b4", kind:"leaf", note:`Dépend des données, performance décroissante, non déterministe, réentraînements, biais/explicabilité.` },
  { id:"ch1-b4-l4", label:"Cycle de vie complet (8 étapes)", parentId:"ch1-b4", kind:"leaf", note:`Cadrage → acquisition données → pipelines → entraînement → validation → déploiement → monitoring → maintenance.` },

  // Branche 5 — Comparaison
  { id:"ch1-b5", label:"DevOps vs DataOps vs MLOps", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b5-l1", label:"Objet & finalité", parentId:"ch1-b5", kind:"leaf", note:`Code applicatif / pipelines de données / modèles ML — livrer, fiabiliser, industrialiser.` },
  { id:"ch1-b5-l2", label:"Risques clés par discipline", parentId:"ch1-b5", kind:"leaf", note:`Régression logicielle / drift de données / drift de modèle.` },
  { id:"ch1-b5-l3", label:"DataOps + DevOps + ML Model = MLOps", parentId:"ch1-b5", kind:"leaf", note:`MLOps combine ingestion/transformation/qualité, versionnement/CI/CD/tests, et entraînement/validation/dérive.` },

  // Branche 6 — Hiérarchie des besoins
  { id:"ch1-b6", label:"Hiérarchie des besoins en MLOps", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b6-l1", label:"Pyramide (Atwal, 2020)", parentId:"ch1-b6", kind:"leaf", note:`Base DevOps → ingénierie données → plateforme ML → automatisation → monitoring → gouvernance.` },
  { id:"ch1-b6-l2", label:"Pas seulement du talent algorithmique", parentId:"ch1-b6", kind:"leaf", note:`Le succès dépend de la solidité des couches basses du système technique et organisationnel.` },

  // Branche 7 — Reproductibilité, traçabilité, gouvernance
  { id:"ch1-b7", label:"Reproductibilité, traçabilité, gouvernance", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b7-l1", label:"Reproductibilité", parentId:"ch1-b7", kind:"leaf", note:`Même code + mêmes données + mêmes dépendances + mêmes paramètres = résultat cohérent.` },
  { id:"ch1-b7-l2", label:"Traçabilité — les 5 Q", parentId:"ch1-b7", kind:"leaf", note:`Quelle donnée ? quelle version ? quel modèle ? quel responsable ? quelle validation ?` },
  { id:"ch1-b7-l3", label:"Gouvernance des données", parentId:"ch1-b7", kind:"leaf", note:`Qualité, conformité, documentation, gestion des accès, supervision des changements, auditabilité.` },

  // Branche 8 — Données/modèle comme produit
  { id:"ch1-b8", label:"Donnée / modèle comme produit", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b8-l1", label:"Propriétés d'un produit data/ML", parentId:"ch1-b8", kind:"leaf", note:`Utilisateurs identifiés, niveau de service, documentation, cycle de maintenance, métriques qualité, responsables.` },
  { id:"ch1-b8-l2", label:"Conséquences pratiques", parentId:"ch1-b8", kind:"leaf", note:`Conçu pour l'usage durable, maintenance pensée dès la conception, qualité de service mesurée.` },

  // Branche 9 — AIOps & LLMOps
  { id:"ch1-b9", label:"AIOps & LLMOps : extension du spectre", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b9-l1", label:"AIOps (Gartner, 2017)", parentId:"ch1-b9", kind:"leaf", note:`IA au service des opérations IT : détection d'anomalies, corrélation d'alertes, cause racine.` },
  { id:"ch1-b9-l2", label:"LLMOps (Databricks, 2023)", parentId:"ch1-b9", kind:"leaf", note:`Cycle de vie des apps LLM : prompt versioning, RAG, guardrails, fine-tuning, coûts.` },
  { id:"ch1-b9-l3", label:"Progression Ops", parentId:"ch1-b9", kind:"leaf", note:`DevOps → DataOps → MLOps → AIOps → LLMOps : élargissement progressif du périmètre opérationnel.` }
];
