/* Chapter 5 — CI/CD, conteneurisation et déploiement des services ML : mindmap. */
window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch5 = [
  { id:"ch5-root", label:"CH5 — CI/CD, conteneurisation & déploiement", parentId:null, kind:"root" },

  { id:"ch5-b1", label:"Pourquoi industrialiser ?", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b1-l1", label:"Erreurs humaines", parentId:"ch5-b1", kind:"leaf", note:"Étapes oubliées, versions mélangées, config incohérente entre environnements." },
  { id:"ch5-b1-l2", label:"Faible traçabilité", parentId:"ch5-b1", kind:"leaf", note:"Aucune trace fiable de ce qui a été déployé, quand, et par qui." },
  { id:"ch5-b1-l3", label:"Rollback difficile", parentId:"ch5-b1", kind:"leaf", note:"Revenir à la version précédente n'est ni rapide ni garanti." },
  { id:"ch5-b1-l4", label:"Faible reproductibilité", parentId:"ch5-b1", kind:"leaf", note:"Impossible de garantir que ça marche pareil sur une autre machine." },
  { id:"ch5-b1-l5", label:"Lenteur", parentId:"ch5-b1", kind:"leaf", note:"Chaque mise à jour mobilise du temps d'ingénierie non automatisé." },

  { id:"ch5-b2", label:"CI — contrôler les changements", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b2-l1", label:"Définition CI", parentId:"ch5-b2", kind:"leaf", note:"Intégrer auto les changements dans un dépôt partagé + contrôles (tests, lint) à chaque commit/PR." },
  { id:"ch5-b2-l2", label:"6 dimensions vérifiées", parentId:"ch5-b2", kind:"leaf", note:"Code, données, modèle, service, sécurité, config & infra." },
  { id:"ch5-b2-l3", label:"Pipeline GitHub Actions", parentId:"ch5-b2", kind:"leaf", note:"Pull request → install deps → lint → tests unitaires → tests inférence." },
  { id:"ch5-b2-l4", label:"CI ≠ réentraînement auto", parentId:"ch5-b2", kind:"leaf", note:"La CI valide d'abord la validité du système, pas la performance d'un nouvel apprentissage." },

  { id:"ch5-b3", label:"CD — livrer un système déployable", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b3-l1", label:"Définition CD", parentId:"ch5-b3", kind:"leaf", note:"Rendre le système déployable à tout moment via une chaîne automatisée." },
  { id:"ch5-b3-l2", label:"Build once, run many", parentId:"ch5-b3", kind:"leaf", note:"Image unique déployée en dev, test, staging et production." },
  { id:"ch5-b3-l3", label:"4 environnements", parentId:"ch5-b3", kind:"leaf", note:"Développement, test, staging (préproduction), production." },
  { id:"ch5-b3-l4", label:"Pipeline CI/CD complet", parentId:"ch5-b3", kind:"leaf", note:"7 étapes CI → artefacts validés → 5 étapes CD → service prod, avec supervision continue." },

  { id:"ch5-b4", label:"Packaging & conteneurisation", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b4-l1", label:"Prototype → Package → Service", parentId:"ch5-b4", kind:"leaf", note:"Code+modèle → package versionné → image conteneur → conteneur en exécution." },
  { id:"ch5-b4-l2", label:"Image / Conteneur / Runtime", parentId:"ch5-b4", kind:"leaf", note:"Image = modèle d'exécution ; Conteneur = instance active ; Runtime = moteur d'exécution." },
  { id:"ch5-b4-l3", label:"Dockerfile → Image → Service actif", parentId:"ch5-b4", kind:"leaf", note:"Chaîne de construction et d'activation d'un conteneur." },
  { id:"ch5-b4-l4", label:"Bonnes pratiques", parentId:"ch5-b4", kind:"leaf", note:"Image légère, dépendances figées, séparation claire, pas de secrets, commande de démarrage explicite." },

  { id:"ch5-b5", label:"Services ML", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b5-l1", label:"Batch", parentId:"ch5-b5", kind:"leaf", note:"Traitement périodique de gros volumes ; résultats non immédiats." },
  { id:"ch5-b5-l2", label:"API", parentId:"ch5-b5", kind:"leaf", note:"Réponse synchrone, faible latence ; doit rester disponible." },
  { id:"ch5-b5-l3", label:"Microservice", parentId:"ch5-b5", kind:"leaf", note:"Composant indépendant, modulaire ; complexité d'orchestration." },
  { id:"ch5-b5-l4", label:"Serverless", parentId:"ch5-b5", kind:"leaf", note:"Exécution à la demande, élastique ; démarrage à froid possible." },
  { id:"ch5-b5-l5", label:"Microservice en système distribué", parentId:"ch5-b5", kind:"leaf", note:"Modularité, indépendance de déploiement, interface (contrat) claire." },

  { id:"ch5-b6", label:"Pipeline de déploiement & tests", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b6-l1", label:"Étapes du pipeline", parentId:"ch5-b6", kind:"leaf", note:"Commit → CI → Package → Image → Registry → Staging → Tests → Prod." },
  { id:"ch5-b6-l2", label:"6 types de tests", parentId:"ch5-b6", kind:"leaf", note:"Smoke, intégration, fonctionnel d'inférence, contrat, performance, sécurité." },
  { id:"ch5-b6-l3", label:"Pyramide de tests", parentId:"ch5-b6", kind:"leaf", note:"Unitaires → intégration → déploiement (staging/smoke) → production contrôlée (canary)." },

  { id:"ch5-b7", label:"Stratégies de rollout", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b7-l1", label:"Recreate", parentId:"ch5-b7", kind:"leaf", note:"Arrêt puis remplacement complet ; simple mais interruption de service (risque élevé)." },
  { id:"ch5-b7-l2", label:"Rolling update", parentId:"ch5-b7", kind:"leaf", note:"Remplacement progressif des instances ; coexistence temporaire de versions (risque moyen)." },
  { id:"ch5-b7-l3", label:"Blue-green", parentId:"ch5-b7", kind:"leaf", note:"Deux environnements, bascule instantanée ; rollback immédiat (risque faible)." },
  { id:"ch5-b7-l4", label:"Canary", parentId:"ch5-b7", kind:"leaf", note:"Exposition progressive à un sous-ensemble ; détection précoce (risque faible)." },
  { id:"ch5-b7-l5", label:"Shadow", parentId:"ch5-b7", kind:"leaf", note:"Version testée en miroir, sans impact utilisateur (risque très faible)." }
];
