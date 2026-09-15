/* Chapter 1 — Fondamentaux DataOps & MLOps : quiz (QCM + questions ouvertes).
   Transcrit du TD-TP 1 : Fondements de MLOps et DataOps (Pr. Mohammed AIT DAOUD). */
window.MDO = window.MDO || {};
window.MDO.quiz = window.MDO.quiz || [];
window.MDO.quiz.push(
  // --- QCM (8, transcrits du TD) ---
  { id:"q-ch1-mcq-01", chapter:1, type:"mcq", q:`Le principal objectif de MLOps est :`, choices:[`améliorer uniquement la précision des modèles`,`industrialiser le cycle de vie des modèles ML`,`remplacer totalement DevOps`,`supprimer la nécessité de données de qualité`], answer:1, explain:`MLOps = industrialiser le cycle de vie des modèles ML (entraîner, déployer, surveiller, réentraîner).` },
  { id:"q-ch1-mcq-02", chapter:1, type:"mcq", q:`DataOps s'intéresse principalement :`, choices:[`au choix des hyperparamètres`,`à la visualisation 3D des données`,`à la fiabilité et à la fluidité des pipelines de données`,`uniquement aux tableaux de bord BI`], answer:2, explain:`DataOps cible la fiabilité, la fraîcheur et la qualité des pipelines de données.` },
  { id:"q-ch1-mcq-03", chapter:1, type:"mcq", q:`La reproductibilité signifie :`, choices:[`qu'un modèle est toujours exact`,`qu'on peut reproduire un résultat à partir des mêmes entrées et conditions`,`qu'un pipeline n'a pas besoin de documentation`,`qu'un système n'a jamais d'erreurs`], answer:1, explain:`Même code + mêmes données + mêmes conditions = résultat cohérent.` },
  { id:"q-ch1-mcq-04", chapter:1, type:"mcq", q:`Lequel des éléments suivants relève le plus directement de MLOps ?`, choices:[`model registry`,`politique RH`,`design graphique`,`gestion des imprimantes réseau`], answer:0, explain:`Le model registry (versionnement/traçabilité des modèles) est un outil central de MLOps.` },
  { id:"q-ch1-mcq-05", chapter:1, type:"mcq", q:`AIOps désigne :`, choices:[`un autre nom de DataOps`,`l'usage de l'IA pour améliorer les opérations IT`,`le nettoyage manuel des données`,`une méthode d'annotation d'images`], answer:1, explain:`AIOps (Gartner) : big data + ML pour automatiser les opérations IT.` },
  { id:"q-ch1-mcq-06", chapter:1, type:"mcq", q:`Dans une logique de hiérarchie des besoins en MLOps, il est difficile de réussir sans :`, choices:[`CI et versionnement`,`slogans marketing`,`très grands GPU uniquement`,`suppression des tests`], answer:0, explain:`CI et versionnement forment la fondation ("Base DevOps") de la pyramide des besoins MLOps.` },
  { id:"q-ch1-mcq-07", chapter:1, type:"mcq", q:`La dérive d'un modèle désigne :`, choices:[`l'arrêt du serveur`,`la perte de performance ou le changement de comportement lié à l'évolution des données ou du contexte`,`le renommage d'un fichier`,`une opération de compression`], answer:1, explain:`Dérive (drift) = perte de performance liée à l'évolution des données/du contexte.` },
  { id:"q-ch1-mcq-08", chapter:1, type:"mcq", q:`Lequel de ces énoncés est correct ?`, choices:[`DevOps suffit toujours pour tous les problèmes ML`,`MLOps ignore les données`,`DataOps et MLOps complètent DevOps dans les systèmes pilotés par les données`,`LLMOps remplace tout le reste`], answer:2, explain:`DataOps et MLOps prolongent DevOps pour les spécificités data/ML (données, dérive, reproductibilité).` },

  // --- Questions directes (7, transcrites du TD) ---
  { id:"q-ch1-open-01", chapter:1, type:"open", q:`Pourquoi un notebook de data science ne constitue-t-il pas une solution de production ?`, model:`Un notebook est un outil d'exploration : test rapide d'hypothèses, visualisation, développement d'un prototype.
- Bon prototype ≠ bon système : pas de versionnement, pas de reproductibilité, pas de tests, pas de monitoring.` },
  { id:"q-ch1-open-02", chapter:1, type:"open", q:`Expliquez la différence entre performance expérimentale et robustesse opérationnelle.`, model:`Performance expérimentale : performance mesurée en phase de test (métrique d'évaluation).
Robustesse opérationnelle : capacité du modèle à bien fonctionner en conditions réelles → système fiable, maintenable, stable dans un environnement réel.` },
  { id:"q-ch1-open-03", chapter:1, type:"open", q:`Pourquoi les systèmes ML dépendent-ils autant des données que du code ?`, model:`Les données influencent directement le comportement du modèle.
Bon code + mauvaises données = mauvais résultats.` },
  { id:"q-ch1-open-04", chapter:1, type:"open", q:`En quoi DataOps prolonge-t-il DevOps ?`, model:`Par l'application des principes DevOps (CI/CD) au pipeline de production des données, pour garantir la fiabilité des données.` },
  { id:"q-ch1-open-05", chapter:1, type:"open", q:`Citez trois raisons pour lesquelles la traçabilité est indispensable.`, model:`- Conformité/audit réglementaire
- Retrouver quelle version (données, code, modèle) a produit un résultat donné (debug, reproductibilité)
- Responsabilité : savoir qui a validé/décidé quoi` },
  { id:"q-ch1-open-06", chapter:1, type:"open", q:`Pourquoi parle-t-on de cycle de vie d'un modèle et non d'un simple entraînement ?`, model:`L'entraînement n'est qu'une étape parmi 8 (cadrage → acquisition → pipelines → entraînement → validation → déploiement → monitoring → maintenance).
- Le modèle continue d'exister après l'entraînement : il est déployé, surveillé, dérive, doit être réentraîné ou retiré.` },
  { id:"q-ch1-open-07", chapter:1, type:"open", q:`Que signifie considérer une donnée ou un modèle comme un produit ?`, model:`Il possède des utilisateurs identifiés, un niveau de service attendu, une documentation, un cycle de maintenance, des métriques de qualité, des responsables explicites.
- On conçoit pour l'usage durable, pas pour la démonstration ponctuelle.` }
);
