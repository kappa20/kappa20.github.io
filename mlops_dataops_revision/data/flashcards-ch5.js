/* Chapter 5 — CI/CD, conteneurisation et déploiement des services ML : flashcards. */
window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  // --- Définitions à rédiger (TD, 9 termes) ---
  { id:"fc-ch5-001", chapter:5, topic:"cicd", kind:"definition", front:`Continuous integration (CI)`, back:`Pratique consistant à **intégrer automatiquement** les changements de code dans un dépôt partagé, en déclenchant une suite de contrôles (tests, linting, validation) à chaque commit ou pull request.
- Systématique, environnement standardisé, résultats partagés par l'équipe` },
  { id:"fc-ch5-002", chapter:5, topic:"cicd", kind:"definition", front:`Continuous delivery (CD)`, back:`Vise à rendre le système **déployable à tout moment**, via une chaîne automatisée qui produit un artefact prêt pour la mise en production.
- S'intéresse à la livraison jusqu'au seuil du déploiement (voire au déploiement lui-même)` },
  { id:"fc-ch5-003", chapter:5, topic:"packaging", kind:"definition", front:`Packaging`, back:`Encapsuler un projet, un modèle ou un service ML dans une forme **organisée, stable et réutilisable**, pour faciliter exécution, partage, intégration et préparation au déploiement.
- Transforme le composant en artefact installable et versionné` },
  { id:"fc-ch5-004", chapter:5, topic:"conteneurisation", kind:"definition", front:`Conteneurisation`, back:`Encapsuler une application avec ses **dépendances et sa configuration d'exécution** dans une unité standardisée appelée conteneur, construite à partir d'une image.
- Instrument de standardisation, pas un simple détail technique` },
  { id:"fc-ch5-005", chapter:5, topic:"services", kind:"definition", front:`Service ML`, back:`Unité applicative qui met à disposition une fonctionnalité fondée sur un **modèle ou un pipeline de traitement**.
- Plusieurs formes selon le besoin métier : batch, API, microservice, serverless` },
  { id:"fc-ch5-006", chapter:5, topic:"services", kind:"definition", front:`Microservice`, back:`Approche architecturale dans laquelle une **fonctionnalité métier est exposée sous forme de service autonome**.
- Modulaire, déployable indépendamment, interface (contrat) claire` },
  { id:"fc-ch5-007", chapter:5, topic:"deploiement", kind:"definition", front:`Pipeline de déploiement`, back:`Enchaînement automatisé des étapes conduisant d'un **changement validé** à un composant mis à disposition dans un environnement cible.
- Organise la promotion depuis le commit jusqu'à la production` },
  { id:"fc-ch5-008", chapter:5, topic:"tests", kind:"definition", front:`Smoke test`, back:`Test qui vérifie que le service **démarre et répond de façon minimale**.
- Premier filtre avant les tests plus poussés (intégration, charge, sécurité)` },
  { id:"fc-ch5-009", chapter:5, topic:"rollout", kind:"definition", front:`Canary deployment`, back:`Expose **progressivement une petite partie du trafic** à la nouvelle version avant généralisation.
- Détection précoce des problèmes, risque faible, pilotage plus complexe` },
  { id:"fc-ch5-010", chapter:5, topic:"deploiement", kind:"definition", front:`Cloud-native`, back:`Application conçue nativement pour le cloud : **conteneurisée, découpée en microservices**, scalable et résiliente par conception.
- S'appuie sur l'automatisation CI/CD et l'orchestration de conteneurs` },

  // --- Vocabulaire complémentaire (cours) ---
  { id:"fc-ch5-011", chapter:5, topic:"deploiement", kind:"definition", front:`Déploiement`, back:`Processus par lequel un composant de données ou de machine learning **validé** est mis en service dans un environnement cible, de manière **contrôlée, reproductible et exploitable**. (AIT DAOUD, 2025)` },
  { id:"fc-ch5-012", chapter:5, topic:"conteneurisation", kind:"definition", front:`Runtime (conteneur)`, back:`Moteur qui **exécute les conteneurs** à partir des images (ex : Docker Engine).
- Chaîne : Image → Conteneur → Runtime` },
  { id:"fc-ch5-013", chapter:5, topic:"rollout", kind:"definition", front:`Rollout`, back:`Stratégie de mise en production d'une nouvelle version d'un service/modèle.
- 5 stratégies : recreate, rolling update, blue-green, canary, shadow` },

  // --- Pourquoi industrialiser ---
  { id:"fc-ch5-014", chapter:5, topic:"cicd", kind:"concept", front:`Déploiement manuel : 5 risques principaux`, back:`- **Erreurs humaines** : étapes oubliées, versions mélangées
- **Faible traçabilité** : pas de trace fiable de ce qui a été déployé
- **Rollback difficile** : retour arrière ni rapide ni garanti
- **Faible reproductibilité** : "ça marche pareil" non garanti ailleurs
- **Lenteur** : temps d'ingénierie non automatisé` },
  { id:"fc-ch5-015", chapter:5, topic:"cicd", kind:"concept", front:`Sans pipeline vs avec pipeline CI/CD`, back:`| | Sans pipeline | Avec pipeline CI/CD |
|---|---|---|
| Déploiement | Ad hoc, dépendant d'une personne | Automatisé, standardisé |
| Étapes | Manuelles, non standardisées | Identiques à chaque exécution |
| Tests | Irréguliers | Systématiques avant promotion |
| Traçabilité | Faible/inexistante | Historique complet |
| Rollback | Lent, incertain | Rapide |` },

  // --- CI ---
  { id:"fc-ch5-016", chapter:5, topic:"cicd", kind:"concept", front:`CI en ML : 6 dimensions vérifiées`, back:`- **Code** : lint, format, tests unitaires
- **Données** : schéma, colonnes, types
- **Modèle** : chargement, version, compatibilité
- **Service** : endpoint, contrat
- **Sécurité** : profils, permissions
- **Config & infra** : dépendances` },
  { id:"fc-ch5-017", chapter:5, topic:"cicd", kind:"concept", front:`Pipeline CI événementiel (GitHub Actions)`, back:`Pull request → Install deps → Lint → Tests unitaires → Tests inférence.
- La CI devient un mécanisme de **contrôle de qualité continu**` },
  { id:"fc-ch5-018", chapter:5, topic:"cicd", kind:"concept", front:`CI ≠ réentraînement automatique`, back:`La CI en ML ne doit pas être confondue avec le réentraînement du modèle à chaque commit.
- Dans beaucoup de cas, la CI valide d'abord la **validité du système**, pas la performance d'un nouvel apprentissage complet` },

  // --- CD ---
  { id:"fc-ch5-019", chapter:5, topic:"cicd", kind:"concept", front:`Build once, run many`, back:`On construit **une image unique**, utilisée dans plusieurs environnements : développement, test, staging (préproduction), production.
- Garantit que l'artefact testé est celui déployé partout` },
  { id:"fc-ch5-020", chapter:5, topic:"cicd", kind:"concept", front:`CI vs CD : rôles`, back:`- **CI** : garantit qu'à chaque étape l'artefact produit est testé et fiable
- **CD** : orchestre le passage de cet artefact d'un environnement à l'autre, jusqu'au service exposé et surveillé` },
  { id:"fc-ch5-021", chapter:5, topic:"cicd", kind:"case", front:`Pipeline CI/CD Data/ML — vue d'ensemble`, back:`Sources de changement (code, données, config, modèle, infra) → **Git** → **CI (7 étapes)** : commit/PR, lint, tests unitaires, tests données/schéma, tests pipeline, validation modèle, build package → **Artefacts validés** (package Python, image Docker, modèle versionné, configs) → **CD (5 étapes)** : registre, staging, smoke/intégration, approbation, prod → **Service en production** (batch/API/microservice/serverless).
- Boucle de **supervision continue** : monitoring, logs, performance, qualité données, dérive, alertes, feedback` },

  // --- Packaging & conteneurisation ---
  { id:"fc-ch5-022", chapter:5, topic:"packaging", kind:"concept", front:`Packaging d'un projet ML — trajectoire`, back:`**Prototype** → **Package ML** → **Service déployable**
Détail : code source + modèle → package versionné → image conteneur → conteneur en exécution.
- Un composant bien empaqueté rend la conteneurisation simple et reproductible` },
  { id:"fc-ch5-023", chapter:5, topic:"conteneurisation", kind:"concept", front:`Image / Conteneur / Runtime`, back:`- **Image** : modèle d'exécution (code + dépendances + config), prêt à être instancié
- **Conteneur** : instance en cours d'exécution d'une image, isolée du système hôte
- **Runtime** : moteur qui exécute les conteneurs à partir des images` },
  { id:"fc-ch5-024", chapter:5, topic:"conteneurisation", kind:"concept", front:`Chaîne de conteneurisation`, back:`Dockerfile → Image → Conteneur → **Service actif**` },
  { id:"fc-ch5-025", chapter:5, topic:"conteneurisation", kind:"concept", front:`Bonnes pratiques de conteneurisation`, back:`- **Image légère** : limiter couches/paquets inutiles
- **Dépendances figées** : verrouiller les versions
- **Séparation claire** : un conteneur = une responsabilité
- **Pas de secrets dans l'image** : injectés à l'exécution
- **Commande de démarrage explicite** : point d'entrée documenté et déterministe` },

  // --- Services ML ---
  { id:"fc-ch5-026", chapter:5, topic:"services", kind:"case", front:`Formes de service ML (tableau)`, back:`| Forme | Principe | Avantage | Limite |
|---|---|---|---|
| Batch | Traitement périodique de gros volumes | Simple, efficace en masse | Résultats non immédiats |
| API | Réponse synchrone à une requête | Faible latence, interactif | Doit rester disponible |
| Microservice | Composant indépendant dans une architecture | Modulaire, évolutif | Complexité d'orchestration |
| Serverless | Exécution à la demande, sans gestion d'infra | Coût à l'usage, élastique | Démarrage à froid possible |` },
  { id:"fc-ch5-027", chapter:5, topic:"services", kind:"concept", front:`Microservice ML dans un système distribué — 3 propriétés`, back:`- **Modularité** : évolue, testé et redéployé indépendamment
- **Indépendance de déploiement** : une mise à jour n'impacte pas le reste du SI
- **Interface claire** : le contrat (entrées/sorties) découple le microservice du reste de l'architecture` },

  // --- Pipeline de déploiement & tests ---
  { id:"fc-ch5-028", chapter:5, topic:"deploiement", kind:"concept", front:`Pipeline de déploiement — étapes`, back:`Commit → CI (contrôle qualité) → Package → Image → Registry → Staging → Tests → Prod (release, activation du service)` },
  { id:"fc-ch5-029", chapter:5, topic:"tests", kind:"concept", front:`6 types de tests de déploiement`, back:`1. **Smoke test** : le service démarre-t-il ?
2. **Test d'intégration** : les composants fonctionnent-ils ensemble ?
3. **Test fonctionnel d'inférence** : prédictions correctes sur cas connus ?
4. **Test de contrat** : format entrées/sorties respecté ?
5. **Test de performance** : charge et latence tenues ?
6. **Test de sécurité** : résiste aux entrées malveillantes/non autorisées ?` },
  { id:"fc-ch5-030", chapter:5, topic:"tests", kind:"concept", front:`Pyramide des tests de déploiement`, back:`De la base au sommet :
- Tests unitaires (fonctions Python)
- Tests d'intégration (pipeline + modèle + API)
- Tests de déploiement (staging, smoke, contrat)
- Tests production contrôlée (canary, monitoring initial)` },

  // --- Rollout ---
  { id:"fc-ch5-031", chapter:5, topic:"rollout", kind:"case", front:`Stratégies de rollout (tableau)`, back:`| Stratégie | Principe | Avantage | Limite | Risque |
|---|---|---|---|---|
| Recreate | Arrêt puis remplacement complet | Simplicité maximale | Interruption de service | Élevé |
| Rolling update | Remplacement progressif des instances | Pas d'interruption totale | Coexistence temporaire de versions | Moyen |
| Blue-green | Deux environnements, bascule instantanée | Rollback immédiat | Double infrastructure nécessaire | Faible |
| Canary | Exposition progressive à un sous-ensemble | Détection précoce des problèmes | Pilotage plus complexe | Faible |
| Shadow | Nouvelle version testée en miroir, sans impact | Aucun risque utilisateur | Coût de duplication du trafic | Très faible |` },

  // --- Illustration fil rouge (churn) ---
  { id:"fc-ch5-032", chapter:5, topic:"cicd", kind:"case", front:`Illustration — pourquoi industrialiser le churn scoring`, back:`Un modèle de churn qui tourne dans un notebook, exporté et copié manuellement, sans versionnement ni tests ni monitoring, illustre les 5 risques du déploiement manuel.
- Cible : pipeline CI/CD + conteneurisation + service programmé (batch) pour un score hebdomadaire fiable` }
);
