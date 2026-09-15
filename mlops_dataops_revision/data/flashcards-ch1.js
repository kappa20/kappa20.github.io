/* Chapter 1 — Fondamentaux DataOps & MLOps : flashcards. */
window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  // --- Définitions à rédiger (TD, 10 termes) ---
  { id:"fc-ch1-001", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : DevOps`, back:`Combinaison de philosophies, pratiques et outils qui augmente la capacité d'une organisation à livrer applications et services rapidement (Jabbari et al., 2016).
- Versionnement, tests, CI/CD, Infrastructure as Code, monitoring, collaboration Dev/Ops
- Reste la fondation, mais ne suffit pas seul pour les systèmes data/ML` },
  { id:"fc-ch1-002", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : DataOps`, back:`Combinaison d'Agile, de DevOps et de Lean Manufacturing (Statistical Process Control) appliquée à la data science et à l'ingénierie des données (Bergh, 2017).
- Vise la fiabilité, la fraîcheur, la traçabilité, les tests automatisés et la qualité des données avant consommation (BI, ML)
- Atwal : DataOps = "usine à données" (pipeline = chaîne d'assemblage bout en bout)` },
  { id:"fc-ch1-003", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : MLOps`, back:`Processus qui fait passer un modèle ML du laptop à un environnement de production où il peut être surveillé, mis à l'échelle et mis à jour automatiquement (Gift & Deza, 2021).
- Cycle : entraîner → valider → déployer → surveiller → réentraîner
- Ne se limite pas au déploiement : couvre toute la vie du modèle` },
  { id:"fc-ch1-004", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : AIOps`, back:`Usage du big data et du machine learning pour automatiser les processus d'opérations IT : ingestion, corrélation d'événements, détection d'anomalies, recherche de cause racine (Gartner, 2017).
- N'est pas un autre nom de DataOps
- Réduit le bruit opérationnel, prédit les incidents` },
  { id:"fc-ch1-005", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : LLMOps`, back:`Ensemble de pratiques et d'outils pour gérer le cycle de vie des applications basées sur des LLM : développement, déploiement, maintenance (Databricks, 2023).
- Prompt versioning & évaluation, pipelines RAG, guardrails/safety, fine-tuning, gestion des coûts` },
  { id:"fc-ch1-006", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : Reproductibilité`, back:`Capacité à réexécuter un pipeline, une expérience ou un entraînement dans les mêmes conditions et à obtenir un résultat cohérent.
- Même code + mêmes données + mêmes dépendances + mêmes paramètres = résultat cohérent
- Ne signifie pas qu'un modèle est "toujours exact"` },
  { id:"fc-ch1-007", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : Traçabilité`, back:`Capacité à relier un résultat à l'ensemble des éléments qui l'ont produit : données, transformations, code, modèle, versions, auteurs, décisions de validation.
- Les "5 Q" : quelle donnée ? quelle version ? quel modèle ? quel responsable ? quelle validation ?` },
  { id:"fc-ch1-008", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : Gouvernance des données`, back:`Règles, responsabilités, processus et contrôles mis en place pour garantir la qualité, la sécurité, la conformité, l'accessibilité et le bon usage des données dans une organisation.
- Couvre : qualité, conformité, documentation, gestion des accès, supervision des changements, auditabilité` },
  { id:"fc-ch1-009", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : Monitoring`, back:`Surveillance continue d'un système data/ML en production.
- Qualité des données, performance du modèle, latence, erreurs, dérive, incidents
- Sans monitoring : aucune détection de dérive ou d'erreur (limite typique d'un simple prototype)` },
  { id:"fc-ch1-010", chapter:1, topic:"fondamentaux", kind:"definition", front:`Définir : Dérive des données (drift)`, back:`Perte de performance ou changement de comportement d'un modèle lié à l'évolution des données ou du contexte.
- Data drift : la distribution des données d'entrée change
- Concept drift : la relation entre entrées et cible change
- Ce n'est ni l'arrêt d'un serveur, ni le renommage d'un fichier` },

  // --- Concepts additionnels (cours, hors glossaire) ---
  { id:"fc-ch1-011", chapter:1, topic:"fondamentaux", kind:"concept", front:`Pourquoi coupler DataOps et MLOps dans un même module ?`, back:`Ce sont les **piliers jumeaux** de l'industrialisation de l'IA.
- DataOps : agilité + DevOps appliqués aux pipelines de données (fiabilité, fraîcheur, tests, qualité)
- MLOps : extension au cycle de vie des modèles (expérimentation reproductible, versions, déploiement, surveillance, dérive)
- Ensemble : transforment un projet IA d'un exercice de R&D en un levier durable de création de valeur` },
  { id:"fc-ch1-012", chapter:1, topic:"fondamentaux", kind:"concept", front:`"Bon prototype ≠ bon système" : les 4 symptômes`, back:`- **Données instables** : les pipelines d'entrée changent sans préavis
- **Processus manuels** : interventions humaines non reproductibles
- **Déploiement fragile** : environnement dev ≠ production
- **Absence de monitoring** : aucune détection de dérive ou d'erreur` },
  { id:"fc-ch1-013", chapter:1, topic:"fondamentaux", kind:"concept", front:`Le fossé d'industrialisation`, back:`**Expérimentation locale** (notebook Jupyter, données locales statiques, librairies non fixées, scripts ad hoc)
≠
**Production réelle** (dépendances cachées, données non tracées, scripts non reproductibles, collaboration insuffisante)` },
  { id:"fc-ch1-014", chapter:1, topic:"fondamentaux", kind:"concept", front:`Le problème n'est pas que technique`, back:`Les environnements industriels exigent : processus standardisés, traçabilité, automatisation, contrôle qualité, responsabilités claires, intégration continue.
- Problème central : pas seulement "comment construire un bon modèle ?" mais "comment livrer et maintenir un système data/ML robuste dans la durée ?"` },
  { id:"fc-ch1-015", chapter:1, topic:"fondamentaux", kind:"concept", front:`Les 6 piliers de DevOps`, back:`- Versionnement (Git, historique immuable)
- Tests (unitaires, intégration, régression)
- CI/CD (livraison continue automatisée)
- Infrastructure as Code (Terraform, Ansible)
- Monitoring (alertes, logs, observabilité)
- Collaboration Dev/Ops (culture partagée)` },
  { id:"fc-ch1-016", chapter:1, topic:"fondamentaux", kind:"concept", front:`5 raisons pour lesquelles DevOps ne suffit pas seul`, back:`- Le code ne suffit pas à expliquer le comportement (même code + données différentes = résultat différent)
- Les données changent en permanence (schémas, distributions, sources)
- Les modèles dérivent dans le temps (data/concept drift)
- Les pipelines cassent de façon inattendue (dépendances fragiles)
- Les résultats doivent rester auditables (conformité, responsabilité algorithmique)` },
  { id:"fc-ch1-017", chapter:1, topic:"fondamentaux", kind:"concept", front:`Pourquoi le comportement d'un système ML dépend autant des données que du code ?`, back:`Dans un système classique, le comportement dépend surtout du code. Dans un système data/ML il dépend aussi :
- des données d'entrée et de leurs transformations
- des features générées, des versions de modèles
- des paramètres d'entraînement
- de la dérive des données et des usages
→ bon code + mauvaises données = mauvais résultats` },
  { id:"fc-ch1-018", chapter:1, topic:"fondamentaux", kind:"concept", front:`Les 7 étapes du DataOps selon Christopher Bergh`, back:`1. Ajouter des tests de données et de logique
2. Utiliser un système de gestion de versions
3. Utiliser le branch and merge
4. Utiliser plusieurs environnements (dev/test/prod)
5. Réutiliser et conteneuriser
6. Paramétrer les traitements
7. Travailler sans peur ni héroïsme (réduire la dépendance aux interventions manuelles d'urgence)` },
  { id:"fc-ch1-019", chapter:1, topic:"fondamentaux", kind:"concept", front:`Objectifs typiques de DataOps`, back:`- Réduire le délai entre besoin métier et donnée exploitable
- Augmenter qualité, cohérence, fiabilité des jeux de données
- Rendre les pipelines reproductibles et maintenables
- Favoriser la collaboration métiers/analystes/ingénieurs
- Permettre des livraisons fréquentes et contrôlées
→ la donnée n'est pas un sous-produit passif, c'est un **actif vivant**` },
  { id:"fc-ch1-020", chapter:1, topic:"fondamentaux", kind:"concept", front:`Démarche de transformation DataOps selon Atwal`, back:`Problèmes de la data science traditionnelle → nécessité d'une approche DataOps → agilité + collaboration + automatisation + qualité continue → industrialisation des flux → production continue de produits analytiques fiables → **création de valeur pour le métier**` },
  { id:"fc-ch1-021", chapter:1, topic:"fondamentaux", kind:"concept", front:`Le cycle MLOps en 5 étapes`, back:`1. Entraîner
2. Valider
3. Déployer
4. Surveiller
5. Réentraîner
→ MLOps ne se limite pas au déploiement, il couvre toute la vie du modèle (Dev → Prod)` },
  { id:"fc-ch1-022", chapter:1, topic:"fondamentaux", kind:"concept", front:`Le modèle comme artefact versionné : propriétés spécifiques`, back:`Comparable à un composant logiciel, mais avec des propriétés en plus :
- dépend fortement des données
- ses performances peuvent décroître dans le temps
- comportement non déterministe au sens classique
- nécessite souvent des réentraînements
- pose des enjeux de biais, d'explicabilité, de conformité` },
  { id:"fc-ch1-023", chapter:1, topic:"fondamentaux", kind:"concept", front:`Cycle de vie complet d'un système data/ML (8 étapes)`, back:`1. Cadrage du besoin
2. Acquisition et préparation des données
3. Construction des pipelines
4. Expérimentation et entraînement
5. Validation (performance + robustesse + conformité)
6. Déploiement
7. Monitoring et observabilité
8. Maintenance et amélioration continue
→ évite une vision fragmentée du projet (entraînement ≠ tout le cycle)` },
  { id:"fc-ch1-024", chapter:1, topic:"fondamentaux", kind:"concept", front:`DevOps vs DataOps vs MLOps : tableau comparatif`, back:`| Dimension | DevOps | DataOps | MLOps |
|---|---|---|---|
| Objet | Code applicatif | Pipelines de données | Modèles ML |
| Finalité | Livrer du logiciel | Fiabiliser la donnée | Industrialiser le ML |
| Risque clé | Régression logicielle | Drift de données | Drift de modèle |
| Pratiques phares | CI/CD, tests unitaires | Data quality, lineage | Experiment tracking, registry |` },
  { id:"fc-ch1-025", chapter:1, topic:"fondamentaux", kind:"concept", front:`La hiérarchie des besoins en MLOps (pyramide)`, back:`De la base au sommet :
- Fondation : Base DevOps (versionnement, CI/CD, tests)
- Niveau 2 : Ingénierie des données (pipelines, qualité, lineage)
- Niveau 3 : Plateforme ML (feature store, registre de modèles)
- Niveau 4 : Automatisation (retraining, CI/CD ML)
- Niveau 5 : Monitoring (drift, alertes, observabilité)
- Sommet : Gouvernance (explicabilité, conformité, audit)
→ le succès ne dépend pas que du talent algorithmique, mais de la solidité des couches basses` },
  { id:"fc-ch1-026", chapter:1, topic:"fondamentaux", kind:"concept", front:`L'agilité appliquée à DataOps`, back:`- Livrer un pipeline minimal mais fiable avant un pipeline complexe et fragile
- Mesurer la qualité et les délais
- Traiter rapidement les incidents
- Maintenir un dialogue constant entre technique et métier
→ pas d'application mécanique de Scrum/Kanban : c'est une culture de flux, de feedback et d'amélioration continue` },
  { id:"fc-ch1-027", chapter:1, topic:"fondamentaux", kind:"concept", front:`Considérer une donnée ou un modèle comme un "produit"`, back:`Un produit data/ML possède :
- des utilisateurs identifiés
- un niveau de service (SLA) attendu
- une documentation
- un cycle de maintenance
- des métriques de qualité
- des responsables explicites
→ on conçoit pour l'usage durable, pas pour la démonstration ponctuelle` },
  { id:"fc-ch1-028", chapter:1, topic:"fondamentaux", kind:"concept", front:`Traçabilité : les "5 Q"`, back:`Pour retracer un résultat il faut pouvoir répondre à :
- Quelle donnée ?
- Quelle version ?
- Quel modèle ?
- Quel responsable ?
- Quelle validation ?
→ complète la reproductibilité ("est-ce le même résultat ?") en répondant à "d'où vient ce résultat ?"` },

  // --- Cas illustratifs ---
  { id:"fc-ch1-029", chapter:1, topic:"fondamentaux", kind:"case", front:`Le cas du prototype de churn (illustration)`, back:`Une équipe data science construit un modèle de prédiction du désabonnement dans un notebook Jupyter : extraction CSV manuelle, pas de versionnement, pas de tests, pas de documentation, pas de monitoring après mise en service.
- Le métier veut un score de risque hebdomadaire **fiable**
- Le prototype fonctionne en test mais n'est pas industrialisable en l'état
→ illustre concrètement "bon prototype ≠ bon système"` },
  { id:"fc-ch1-030", chapter:1, topic:"fondamentaux", kind:"case", front:`Performance expérimentale vs robustesse opérationnelle`, back:`- **Performance expérimentale** : performance mesurée en phase de test (métrique d'évaluation), sur un jeu de données figé
- **Robustesse opérationnelle** : capacité du modèle à bien fonctionner en conditions réelles → système fiable, maintenable, stable dans un environnement réel
→ un bon score en test ne garantit pas un bon comportement en production (ex : score churn qui se dégrade quand les données terrain évoluent)` }
);
