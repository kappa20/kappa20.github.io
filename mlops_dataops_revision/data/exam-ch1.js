/* Chapter 1 — Fondamentaux DataOps & MLOps : examen blanc (TD-TP 1).
   Transcrit de MLOps&DataOps_TD_TP_CH1 (Pr. Mohammed AIT DAOUD) + corrigé officiel manuscrit. */
window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch1 = {
  chapter: 1,
  title: `TD-TP 1 : Fondements de MLOps et DataOps`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch1-qcm-01", q:`Le principal objectif de MLOps est :`, choices:[`améliorer uniquement la précision des modèles`,`industrialiser le cycle de vie des modèles ML`,`remplacer totalement DevOps`,`supprimer la nécessité de données de qualité`], answer:1, correction:`b — industrialiser le cycle de vie des modèles ML.` },
    { id:"e-ch1-qcm-02", q:`DataOps s'intéresse principalement :`, choices:[`au choix des hyperparamètres`,`à la visualisation 3D des données`,`à la fiabilité et à la fluidité des pipelines de données`,`uniquement aux tableaux de bord BI`], answer:2, correction:`c — fiabilité et fluidité des pipelines de données.` },
    { id:"e-ch1-qcm-03", q:`La reproductibilité signifie :`, choices:[`qu'un modèle est toujours exact`,`qu'on peut reproduire un résultat à partir des mêmes entrées et conditions`,`qu'un pipeline n'a pas besoin de documentation`,`qu'un système n'a jamais d'erreurs`], answer:1, correction:`b — reproduire un résultat à partir des mêmes entrées/conditions.` },
    { id:"e-ch1-qcm-04", q:`Lequel des éléments suivants relève le plus directement de MLOps ?`, choices:[`model registry`,`politique RH`,`design graphique`,`gestion des imprimantes réseau`], answer:0, correction:`a — model registry.` },
    { id:"e-ch1-qcm-05", q:`AIOps désigne :`, choices:[`un autre nom de DataOps`,`l'usage de l'IA pour améliorer les opérations IT`,`le nettoyage manuel des données`,`une méthode d'annotation d'images`], answer:1, correction:`b — usage de l'IA pour améliorer les opérations IT.` },
    { id:"e-ch1-qcm-06", q:`Dans une logique de hiérarchie des besoins en MLOps, il est difficile de réussir sans :`, choices:[`CI et versionnement`,`slogans marketing`,`très grands GPU uniquement`,`suppression des tests`], answer:0, correction:`a — CI et versionnement (fondation de la pyramide).` },
    { id:"e-ch1-qcm-07", q:`La dérive d'un modèle désigne :`, choices:[`l'arrêt du serveur`,`la perte de performance ou le changement de comportement lié à l'évolution des données ou du contexte`,`le renommage d'un fichier`,`une opération de compression`], answer:1, correction:`b — perte de performance liée à l'évolution des données/contexte.` },
    { id:"e-ch1-qcm-08", q:`Lequel de ces énoncés est correct ?`, choices:[`DevOps suffit toujours pour tous les problèmes ML`,`MLOps ignore les données`,`DataOps et MLOps complètent DevOps dans les systèmes pilotés par les données`,`LLMOps remplace tout le reste`], answer:2, correction:`c — DataOps et MLOps complètent DevOps dans les systèmes pilotés par les données.` }
  ],
  questions: [
    { id:"e-ch1-q-01", q:`Pourquoi un notebook de data science ne constitue-t-il pas une solution de production ?`, correction:`Un notebook est un outil d'exploration : il permet un test rapide des hypothèses, de la visualisation et des résultats — développement d'un prototype. Bon prototype ≠ bon système.` },
    { id:"e-ch1-q-02", q:`Expliquez la différence entre performance expérimentale et robustesse opérationnelle.`, correction:`Performance expérimentale : performance mesurée en phase de test (métrique d'évaluation). Robustesse opérationnelle : capacité du modèle à bien fonctionner en conditions réelles → système fiable, maintenable, stable dans un environnement réel.` },
    { id:"e-ch1-q-03", q:`Pourquoi les systèmes ML dépendent-ils autant des données que du code ?`, correction:`Les données influencent directement le comportement du modèle. Bon code + mauvaises données = mauvais résultats.` },
    { id:"e-ch1-q-04", q:`En quoi DataOps prolonge-t-il DevOps ?`, correction:`Par l'application des principes DevOps (CI/CD) au pipeline de production des données, pour garantir la fiabilité des données.` },
    { id:"e-ch1-q-05", q:`Citez trois raisons pour lesquelles la traçabilité est indispensable.`, correction:`Conformité/audit réglementaire ; retrouver quelle version (données/code/modèle) a produit un résultat (debug, reproductibilité) ; responsabilité — qui a validé/décidé.` },
    { id:"e-ch1-q-06", q:`Pourquoi parle-t-on de cycle de vie d'un modèle et non d'un simple entraînement ?`, correction:`L'entraînement n'est qu'une étape parmi 8 (cadrage → acquisition → pipelines → entraînement → validation → déploiement → monitoring → maintenance) ; le modèle continue d'exister après l'entraînement (déployé, surveillé, dérive, réentraîné ou retiré).` },
    { id:"e-ch1-q-07", q:`Que signifie considérer une donnée ou un modèle comme un produit ?`, correction:`Utilisateurs identifiés, niveau de service attendu, documentation, cycle de maintenance, métriques de qualité, responsables explicites → conçu pour l'usage durable, pas pour la démonstration ponctuelle.` }
  ],
  vocab: [
    { id:"e-ch1-v-01", term:`DevOps`, correction:`Philosophies + pratiques + outils augmentant la vélocité de livraison logicielle (CI/CD, versionnement, tests, IaC, monitoring, collaboration Dev/Ops).` },
    { id:"e-ch1-v-02", term:`DataOps`, correction:`Agile + DevOps + Lean Manufacturing appliqués aux pipelines de données → fiabilité, fraîcheur, traçabilité, tests automatisés, qualité.` },
    { id:"e-ch1-v-03", term:`MLOps`, correction:`Pratiques industrialisant le cycle de vie ML : entraîner → valider → déployer → surveiller → réentraîner.` },
    { id:"e-ch1-v-04", term:`AIOps`, correction:`Big data + ML pour automatiser les opérations IT : détection d'anomalies, corrélation d'alertes, recherche de cause racine.` },
    { id:"e-ch1-v-05", term:`LLMOps`, correction:`Pratiques et outils gérant le cycle de vie des applications LLM : prompt versioning, RAG, guardrails, fine-tuning, coûts.` },
    { id:"e-ch1-v-06", term:`Reproductibilité`, correction:`Capacité à réexécuter un pipeline/entraînement dans les mêmes conditions (code+données+dépendances+paramètres) → résultat cohérent.` },
    { id:"e-ch1-v-07", term:`Traçabilité`, correction:`Capacité à relier un résultat à tout ce qui l'a produit — données, code, modèle, versions, auteur, validation (les "5 Q").` },
    { id:"e-ch1-v-08", term:`Gouvernance des données`, correction:`Règles, responsabilités, processus et contrôles garantissant qualité, sécurité, conformité, accessibilité et bon usage des données.` },
    { id:"e-ch1-v-09", term:`Monitoring`, correction:`Surveillance continue en production : qualité des données, performance du modèle, latence, erreurs, dérive, incidents.` },
    { id:"e-ch1-v-10", term:`Dérive des données`, correction:`Perte de performance ou changement de comportement du modèle lié à l'évolution des données/du contexte (data drift / concept drift).` }
  ],
  analysis: [
    { id:"e-ch1-a-01", scenario:`Une équipe de data science dispose d'un modèle performant dans un notebook Jupyter, mais le modèle n'est pas versionné, les données d'entraînement proviennent d'extractions manuelles, et aucun test n'existe sur les features.`, question:`Identifiez les risques majeurs et expliquez pourquoi ce projet n'est pas encore dans une logique MLOps.`, correction:`Risques : pas de reproductibilité (modèle non versionné), pas de traçabilité (extractions manuelles), pas de fiabilité (aucun test sur les features). → reste un prototype expérimental : manque automatisation, versionnement, tests, monitoring — conditions de base de MLOps non réunies.` },
    { id:"e-ch1-a-02", scenario:`Une entreprise veut produire un tableau de bord quotidien à partir de plusieurs sources hétérogènes. Les retards sont fréquents, certaines colonnes changent sans préavis, et les utilisateurs perdent confiance dans les chiffres.`, question:`Expliquez pourquoi cette situation relève d'un problème DataOps.`, correction:`Symptômes typiques DataOps : fiabilité/fraîcheur des pipelines multi-sources non maîtrisées, schémas instables (colonnes qui changent), absence de contrôle qualité et de traçabilité → perte de confiance métier = problème de pipeline de données, pas de modèle.` },
    { id:"e-ch1-a-03", scenario:`Une organisation souhaite déployer un assistant conversationnel basé sur un LLM externe.`, question:`Quels nouveaux défis apparaissent par rapport à un système ML classique ?`, correction:`Dépendance à un fournisseur externe (coût, latence, disponibilité) ; prompt versioning ; sorties non déterministes/hallucinations ; sécurité des données envoyées au LLM ; guardrails et modération ; monitoring spécifique (dérive de prompts, coûts) → relève de LLMOps en plus de MLOps classique.` }
  ],
  case: {
    title: `Étude de cas : passage d'un prototype à une chaîne exploitable`,
    context: `Une équipe universitaire a développé un prototype de prédiction de désabonnement client. Le prototype comprend : un notebook Python ; un fichier CSV d'entraînement ; un modèle sauvegardé localement ; une présentation des métriques de performance.
Cependant : les données ne sont pas versionnées ; aucune étape n'est automatisée ; le nettoyage des données est fait manuellement ; aucune documentation n'existe ; le modèle n'est pas surveillé après déploiement ; l'équipe métier demande un score hebdomadaire fiable.
Consigne : à partir de ce contexte, produire une analyse structurée du passage nécessaire vers une démarche DataOps/MLOps.`,
    tasks: [
      { id:"e-ch1-c-01", prompt:`1. Identifier les limites du prototype actuel.`, correction:`Pas de versionnement (données/modèle) ; extraction CSV manuelle ; nettoyage manuel ; aucun test ; aucune documentation ; aucun monitoring post-déploiement.` },
      { id:"e-ch1-c-02", prompt:`2. Classer ces limites selon trois catégories : données ; modèle ; opérations/gouvernance.`, correction:`Données : pas de versionnement, extraction/nettoyage manuels. Modèle : pas de tests, pas de suivi des versions/performances. Opérations/gouvernance : pas de documentation, pas de monitoring, responsabilités non définies.` },
      { id:"e-ch1-c-03", prompt:`3. Proposer un cycle de vie cible du système.`, correction:`Cadrage du besoin → acquisition/préparation des données versionnées → pipeline automatisé → entraînement/validation tracés → déploiement → monitoring (performance + dérive) → réentraînement périodique.` },
      { id:"e-ch1-c-04", prompt:`4. Distinguer ce qui relève de DataOps et ce qui relève de MLOps.`, correction:`DataOps : ingestion, qualité, versionnement des données, pipeline ETL automatisé, fraîcheur du score hebdomadaire. MLOps : entraînement, validation, registre de modèles, déploiement, monitoring/dérive du modèle, réentraînement.` },
      { id:"e-ch1-c-05", prompt:`5. Formuler une première feuille de route en 6 à 8 actions prioritaires.`, correction:`1) Versionner les données (DVC) 2) Versionner le modèle (registry) 3) Automatiser le pipeline (orchestrateur) 4) Ajouter des tests données/features 5) Documenter (pipeline + modèle) 6) Mettre en place monitoring + alertes de dérive 7) Définir un cycle de réentraînement 8) Clarifier les responsabilités DataOps/MLOps.` }
    ],
    deliverables: [
      `Un tableau d'analyse des problèmes`,
      `Un schéma simple du cycle de vie cible`,
      `Une séparation claire des responsabilités DataOps / MLOps`,
      `Une mini feuille de route de transformation`,
      `Une conclusion d'une page : "Pourquoi ce prototype n'est pas encore industrialisable ?"`
    ]
  }
};
