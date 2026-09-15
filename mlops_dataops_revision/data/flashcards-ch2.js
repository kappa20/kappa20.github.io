window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  // --- Définitions (glossaire officiel du TD) ---
  { id:"fc-ch2-001", chapter:2, topic:"lean", kind:"definition", front:`Lean Thinking`, back:`**Philosophie de management** visant à maximiser la valeur livrée au client en éliminant systématiquement tout ce qui n'y contribue pas directement.
- Le "muda" = gaspillage / inutilité
- Deux volets : optimisation du processus (élimination des gaspillages) + product mindset (plutôt que project mindset)
- (Atwal, 2019, *Practical DataOps*)` },
  { id:"fc-ch2-002", chapter:2, topic:"agile", kind:"definition", front:`Agile Collaboration`, back:`Application de **frameworks itératifs** (Scrum, Kanban) et de valeurs collaboratives à tout le cycle de vie de la data science.
- Objectif : éliminer les inefficacités de la gestion de projet traditionnelle
- Permet aux équipes data de livrer en continu des produits analytiques de valeur
- (Atwal, 2019)` },
  { id:"fc-ch2-003", chapter:2, topic:"lean", kind:"definition", front:`Flux de valeur`, back:`Enchaînement ordonné des étapes de traitement (de la donnée brute au résultat exploité par le métier).
- La **cartographie du flux de valeur** (Value Stream Mapping) visualise toutes les étapes et identifie les non-valeurs
- Sert à repérer attentes, redondances et goulots d'étranglement` },
  { id:"fc-ch2-004", chapter:2, topic:"pipelines", kind:"definition", front:`Pipeline de données`, back:`**Chaîne structurée d'étapes automatisées** qui ingère, transforme et prépare des données brutes pour les rendre exploitables de manière fiable et traçable.
- Étapes types : ingestion → validation → nettoyage → transformation → stockage
- Propriétés attendues : idempotent, traçable, déclenchable, testable
- (AIT DAOUD, 2025 ⇔ IBM)` },
  { id:"fc-ch2-005", chapter:2, topic:"pipelines", kind:"definition", front:`Pipeline ML`, back:`**Chaîne structurée d'étapes automatisées** qui transforme des données préparées en modèle déployable et évaluable, avec traçabilité des versions, métriques et artefacts.
- Étapes types : feature engineering → sélection & split → entraînement → évaluation & métriques → artefact modèle
- (AIT DAOUD, 2025 ⇔ IBM)` },
  { id:"fc-ch2-006", chapter:2, topic:"versioning", kind:"definition", front:`Versionnement`, back:`Pratique consistant à **tracer et conserver l'historique des versions** de tous les objets d'un système data/ML — pas seulement le code.
- Concerne : code, données, configurations, schémas, artefacts, modèles, environnements
- Sans versionnement de ces éléments, reproduire un résultat est impossible` },
  { id:"fc-ch2-007", chapter:2, topic:"reproducibility", kind:"definition", front:`Environnement reproductible`, back:`Environnement **dont les dépendances et paramètres sont explicités et reconstruisibles**.
- "Ça marche sur mon laptop" ≠ bon système
- L'absence d'environnement maîtrisé est la 1ère cause d'irreproductibilité en data/ML` },
  { id:"fc-ch2-008", chapter:2, topic:"orchestration", kind:"definition", front:`Orchestration`, back:`Capacité à **coordonner automatiquement l'exécution des étapes** d'un pipeline selon des dépendances définies, un scheduling, avec gestion des erreurs, relances automatiques et supervision centralisée.
- (Atwal, 2019)` },
  { id:"fc-ch2-009", chapter:2, topic:"ci", kind:"definition", front:`Continuous Integration (CI)`, back:`Pratique qui consiste à **intégrer automatiquement les changements de code** dans un dépôt partagé, en déclenchant une suite de contrôles (tests, linting, validation) à chaque commit ou pull request.` },

  // --- Concepts complémentaires (cours) ---
  { id:"fc-ch2-010", chapter:2, topic:"lean", kind:"concept", front:`Les 7 gaspillages (muda) en data/ML`, back:`- **Surproduction** : reports/features/modèles non demandés
- **Attente** : données bloquées en validation manuelle
- **Transport inutile** : copies de datasets sans nécessité
- **Sur-traitement** : enrichissements sans valeur ajoutée
- **Défauts** : données corrompues propagées silencieusement
- **Excès de mouvement** : déplacements inutiles de personnes/équipements
- **Inventaire** : accumulation de travaux en cours / livrables stockés` },
  { id:"fc-ch2-011", chapter:2, topic:"lean", kind:"concept", front:`Les 5 principes du Lean Thinking`, back:`1. **Identifier la valeur** (seeing waste) — du point de vue du client/utilisateur des données
2. **Cartographier le flux** (value stream mapping) — visualiser étapes et non-valeurs
3. **Créer le flux** (deliver fast) — éliminer interruptions, files d'attente, goulots
4. **Systèmes pull** — ne produire que ce qui est demandé
5. **Viser la perfection** (kaizen) — amélioration continue, chaque itération élimine des gaspillages` },
  { id:"fc-ch2-012", chapter:2, topic:"lean", kind:"concept", front:`Root Cause Analysis & See the Whole`, back:`- **RCA** : corriger la cause racine (méthode des 5 Pourquoi), pas seulement le symptôme
  - Ex : si un modèle dérive → analyser la source des données, pas seulement re-entraîner
- **See the Whole** : éviter l'optimisation locale isolée ; un gain local peut devenir une perte globale
- Résumé : "Lean analyse le flux | Agile organise le collectif"` },
  { id:"fc-ch2-013", chapter:2, topic:"agile", kind:"concept", front:`4 valeurs du Manifeste Agile (appliquées à DataOps)`, back:`- **Individus et interactions** plus que processus et outils
- **Logiciel/pipeline fonctionnel** plus que documentation exhaustive
- **Collaboration avec le client** plus que négociation contractuelle
- **Réponse au changement** plus que suivi d'un plan
→ gère l'incertitude inhérente aux projets data (données qui changent, besoins qui évoluent, modèles qui dérivent)` },
  { id:"fc-ch2-014", chapter:2, topic:"agile", kind:"concept", front:`DataOps Manifesto — quelques principes clés`, back:`18 principes (DataKitchen, 2021), notamment :
- Satisfaire continuellement le client
- C'est un **sport d'équipe** (métiers + analystes + ingénieurs + opérations)
- **Orchestrer** : tâches coordonnées, planifiées, pilotées
- **Rendre les résultats reproductibles**
- **Environnements jetables** (recréables facilement)
- **L'analytics est du code** (discipline d'ingénierie)
- La **qualité est primordiale**, mesurée en continu
- **Réduire l'héroïsme** : le système ne doit pas dépendre de 1-2 personnes indispensables` },
  { id:"fc-ch2-015", chapter:2, topic:"agile", kind:"concept", front:`8 principes opérationnels DataOps (AIT DAOUD, 2025)`, back:`- Livrer rapidement et fréquemment de la valeur analytique
- Collaborer en continu entre métiers, data et opérations
- S'adapter au changement, favoriser l'amélioration continue
- Tester, mesurer et surveiller en continu qualité et performance
- Automatiser, simplifier et réutiliser autant que possible
- Orchestrer et reproduire pipelines et environnements
- Industrialiser l'analytics = processus d'ingénierie et de production
- Partager la responsabilité et la transparence (pas d'héroïsme)` },
  { id:"fc-ch2-016", chapter:2, topic:"pipelines", kind:"concept", front:`Approche artisanale vs pipeline industrialisé`, back:`| Artisanal | Industrialisé |
|---|---|
| Scripts isolés, exécution manuelle | Pipeline structuré, exécution contrôlée |
| Dépendance aux individus | Processus partagé |
| Faible traçabilité | Versions et artefacts suivis |
| Environnement implicite | Environnement reproductible |
| Erreurs tardives | Vérifications intégrées |
| Échelle difficile | Robustesse et évolutivité |
"Structurer tard coûte plus cher."` },
  { id:"fc-ch2-017", chapter:2, topic:"pipelines", kind:"concept", front:`Caractéristiques d'un pipeline industrialisé`, back:`- Chaîne structurée de traitements, rôles des étapes définis
- Entrées identifiées, sorties explicites
- Dépendances connues, enchaînement répété et contrôlé
- Fonctionnalités : modulaire, répétable, reproductible, traçable, observable, versionné, automatisable, maintenable
- Avantages : évite la dette technique, facilite la collaboration, raccourcit le temps de correction, prépare qualité/tests/CI` },
  { id:"fc-ch2-018", chapter:2, topic:"pipelines", kind:"concept", front:`Artefacts produits par un pipeline ML`, back:`Un **artefact** = élément produit/consommé/conservé dans un pipeline, qui matérialise une étape et peut être stocké, versionné, tracé, réutilisé.
- Dataset versionné (splits train/val/test avec hash)
- Modèle sérialisé (.pkl / .onnx / SavedModel)
- Métriques (AUC, RMSE, F1-score) loggées
- Rapport d'évaluation (comparaison avec baseline)
- Config d'hyperparamètres (YAML versionné + tracking)` },
  { id:"fc-ch2-019", chapter:2, topic:"pipelines", kind:"concept", front:`Pipeline de données vs pipeline ML — articulation`, back:`| Critère | Pipeline données | Pipeline ML |
|---|---|---|
| Objectif | Rendre les données disponibles/exploitables | Produire un modèle évalué et déployable |
| Déclencheur | Schedule, nouvelles données | Nouveau dataset, dérive, CI |
| Sortie | Table/fichier enrichi, rapport | Modèle, métriques, rapport |
| Outils | Git, dbt, Airflow/Dagster | MLflow, Kubeflow, DVC, Prometheus/Grafana |
Enchaînement : **Pipeline Data → [Features] → Pipeline ML → [Modèle] → Serving Layer**` },
  { id:"fc-ch2-020", chapter:2, topic:"versioning", kind:"concept", front:`Ce qu'il faut versionner dans un système data/ML`, back:`- **Code** → Git (scripts, notebooks, configs applicatives)
- **Données** → DVC / Delta Lake (raw data, datasets transformés, splits)
- **Configurations** → Git + YAML (hyperparamètres, params de pipeline)
- **Schémas** → Great Expectations (contrats de données)
- **Artefacts** → MLflow Artifacts (modèles sérialisés, features)
- **Modèles** → MLflow Registry (métadonnées + métriques)
- **Environnements** → Docker / Conda (images, requirements.txt, env.yaml)` },
  { id:"fc-ch2-021", chapter:2, topic:"versioning", kind:"concept", front:`Git + DVC : rôles complémentaires`, back:`- **Git** : versionne le code — diff ligne à ligne, branches, merge, blame, tag. Limite : ne pas y mettre de gros binaires.
- **DVC** : versionne les données/modèles volumineux — stockage distant (S3/GCS/Azure), fichiers .dvc pointeurs versionnés dans Git.
- Principe : **Git trace le qui/quand/pourquoi**, **DVC trace le quoi (données)** → ensemble ils garantissent la reproductibilité.` },
  { id:"fc-ch2-022", chapter:2, topic:"reproducibility", kind:"concept", front:`4 niveaux de maîtrise de l'environnement`, back:`1. **Dépendances explicites** (requirements.txt / setup.cfg) — nécessaire mais insuffisant
2. **Environnement virtuel** (venv / Conda / Poetry) — isole chaque projet
3. **Fichier déclaratif** (environment.yml / Pipfile) — reproductible, versionnable dans Git
4. **Conteneurisation** (Docker / Podman) — image immuable, reproductibilité maximale` },
  { id:"fc-ch2-023", chapter:2, topic:"orchestration", kind:"concept", front:`Cron (automatisation simple) vs orchestrateur`, back:`**Cron** : pas de gestion de dépendances, pas de retry, pas de monitoring, pas de logs centralisés, pas d'alertes.
**Orchestrateur** (Airflow, Dagster…) : DAG de dépendances, retry configurable, interface de monitoring, logs structurés par run, alertes (email/Slack), parallélisation automatique.` },
  { id:"fc-ch2-024", chapter:2, topic:"orchestration", kind:"definition", front:`DAG (Directed Acyclic Graph)`, back:`Structure de données modélisant des tâches orientées, **sans boucle de retour**.
- Définit l'ordre d'exécution (dépendances) et permet de paralléliser les processus
- Exemple pipeline ML : ingest_data → validate_schema/check_quality → feature_eng → train_model → evaluate → log_metrics → deploy
- (IBM)` },
  { id:"fc-ch2-025", chapter:2, topic:"orchestration", kind:"concept", front:`Orchestrateurs courants en data/ML`, back:`- **Apache Airflow** — DAG Python, le plus répandu
- **Prefect** — Python-native, cloud-friendly
- **Dagster** — assets-oriented, data-aware
- **Metaflow** — Netflix, ML-native
- **Kubeflow Pipelines** — Kubernetes-native, ML` },
  { id:"fc-ch2-026", chapter:2, topic:"ci", kind:"concept", front:`Workflow CI typique pour un pipeline data/ML`, back:`**Push/PR → Lint (flake8, ruff) → Tests unitaires (pytest) → Tests de transformation → Validation données → Build artefact**
- Principe clé : chaque push déclenche automatiquement la validation complète ; un pipeline qui ne passe pas les tests ne peut pas être mergé.` },
  { id:"fc-ch2-027", chapter:2, topic:"ci", kind:"concept", front:`Contrôles intégrables dans une CI data/ML`, back:`| Contrôle | Outil(s) | Vérifie |
|---|---|---|
| Linting | flake8, ruff, pylint | Style, bonnes pratiques |
| Tests unitaires | pytest | Fonctions de transformation |
| Tests de transformation | pytest + fixtures | Étapes clés sur petits datasets |
| Validation config | jsonschema, pydantic | Structure des YAML/JSON |
| Tests sur mini-dataset | pytest + dvc repro | Reproductibilité bout en bout |` },
  { id:"fc-ch2-028", chapter:2, topic:"pipelines", kind:"concept", front:`Modularité, réutilisation, automatisation maîtrisée`, back:`Principe : **on n'automatise pas le chaos** — comprendre, simplifier, standardiser, puis automatiser.
- **Modularité** : composants indépendants, une seule responsabilité (SRP), testables, remplaçables
- **Réutilisation** : bibliothèques internes, templates standardisés — ne pas réécrire ce qui existe déjà
- **Automatisation progressive** : manuel → scripts → pipeline → CI/CD, ne jamais automatiser avant de comprendre` },
  { id:"fc-ch2-029", chapter:2, topic:"pipelines", kind:"concept", front:`Architecture de référence : Git + DVC + Orchestrateur + CI`, back:`- **Data Scientist/ML Engineer** : écrit le code, configure le pipeline, pousse sur Git, tag une version DVC
- **Git + DVC** : versionne code+configs, pointe .dvc vers stockage (S3…), déclenche la CI au push
- **CI/CD** (GitHub Actions…) : lint + tests auto, valide les données, build l'environnement, déploie si OK
- **Orchestrateur** (Dagster/Prefect…) : exécute le DAG, retry automatique, logs & alertes, supervision
- Stockage distant : S3/GCS/Azure (datasets DVC, modèles, images Docker) + Registry MLflow (expériences, métriques, versions)` },
  { id:"fc-ch2-030", chapter:2, topic:"pipelines", kind:"case", front:`Cas fil rouge : pipeline de scoring risque client (TD/TP2)`, back:`Workflow initial : CSV déposé manuellement → script de nettoyage → script d'entraînement → notebook de métriques → export manuel.
- Aucun orchestrateur, versionnement des données non formalisé
- Points de fragilité : tâches manuelles à chaque étape, pas de traçabilité, pas de reproductibilité
- Objectif du TP : cartographier, identifier les objets versionnables, proposer une architecture Git + DVC + orchestrateur + environnement reproductible` },
  { id:"fc-ch2-031", chapter:2, topic:"pipelines", kind:"case", front:`Cas fil rouge (illustratif) : notebook de churn non industrialisé`, back:`Un modèle de prédiction de churn tourne dans un notebook Jupyter : extraction CSV manuelle, pas de versionnement (ni données ni modèle), pas de tests, pas de monitoring.
- "Bon prototype ≠ bon système" : le prototype fonctionne en test mais n'est pas industrialisable en l'état
- Illustre pourquoi versionnement étendu + orchestration + CI sont nécessaires avant la mise en production` },
  { id:"fc-ch2-032", chapter:2, topic:"pipelines", kind:"concept", front:`Étapes typiques d'un pipeline de données`, back:`**Ingestion** (sources multiples, batch/streaming) → **Validation** (schémas, types, règles métier) → **Nettoyage** (valeurs manquantes, doublons) → **Transformation** (agrégation, enrichissement) → **Stockage** (Data Lake / Data Warehouse)
Propriétés : idempotent (f(f(x))=f(x)), traçable, déclenchable (schedule/événement/API), testable` },
  { id:"fc-ch2-033", chapter:2, topic:"pipelines", kind:"concept", front:`Étapes typiques d'un pipeline ML`, back:`**Feature Engineering** → **Sélection & Split** (train/val/test) → **Entraînement** → **Évaluation & Métriques** → **Artefact Modèle**
Chaque étape produit des artefacts versionnables (dataset, modèle sérialisé, métriques, config).` }
);
