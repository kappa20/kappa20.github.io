window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch2 = {
  chapter: 2,
  title: `TD-TP 2 : Pipelines agiles, versionnement et orchestration`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch2-qcm-01", q:`Le principal objectif d'un pipeline industrialisé est :`, choices:[`remplacer totalement les analystes`,`automatiser uniquement l'entraînement des modèles`,`structurer un flux répétable, traçable et contrôlable`,`réduire uniquement le temps de développement`], answer:2, correction:`c — flux répétable, traçable, contrôlable.` },
    { id:"e-ch2-qcm-02", q:`Dans une logique Lean, un gaspillage correspond :`, choices:[`à toute étape technique complexe`,`à toute activité qui consomme des ressources sans créer de valeur suffisante`,`uniquement aux erreurs humaines`,`uniquement aux temps de calcul élevés`], answer:1, correction:`b — activité qui consomme des ressources sans valeur suffisante (muda).` },
    { id:"e-ch2-qcm-03", q:`Le versionnement dans un système MLOps concerne :`, choices:[`uniquement le code Python`,`uniquement les modèles entraînés`,`le code, les configurations, les données et les artefacts`,`uniquement les jeux de test`], answer:2, correction:`c — code + configs + données + artefacts.` },
    { id:"e-ch2-qcm-04", q:`L'orchestration sert principalement à :`, choices:[`écrire du code plus vite`,`gérer l'enchaînement, la planification et la supervision des tâches`,`remplacer Git`,`éviter toute erreur dans les données`], answer:1, correction:`b — enchaînement + planification + supervision.` },
    { id:"e-ch2-qcm-05", q:`La CI appliquée aux pipelines permet surtout :`, choices:[`de supprimer le besoin de tests`,`de détecter rapidement certaines erreurs après modification`,`de garantir à elle seule la qualité métier`,`de remplacer l'orchestration`], answer:1, correction:`b — détection rapide d'erreurs après modification.` },
    { id:"e-ch2-qcm-06", q:`Un pipeline ML se distingue d'un pipeline de données car il inclut :`, choices:[`le stockage brut uniquement`,`les étapes de collecte manuelle`,`l'entraînement, l'évaluation et la gestion des modèles`,`uniquement la visualisation des résultats`], answer:2, correction:`c — entraînement, évaluation, gestion des modèles.` },
    { id:"e-ch2-qcm-07", q:`Un environnement reproductible est un environnement :`, choices:[`utilisé uniquement en production`,`dont les dépendances et paramètres sont explicités et reconstruisibles`,`qui ne change jamais`,`qui ne contient aucun package externe`], answer:1, correction:`b — dépendances/paramètres explicités et reconstruisibles.` },
    { id:"e-ch2-qcm-08", q:`La logique Agile dans un projet data consiste principalement à :`, choices:[`éviter toute documentation`,`supprimer la planification`,`travailler par itérations avec feedback et adaptation`,`empêcher toute évolution du pipeline`], answer:2, correction:`c — itérations + feedback + adaptation.` }
  ],
  questions: [
    { id:"e-ch2-q-01", q:`Définir la notion de pipeline dans un contexte data ou ML.`, correction:`Chaîne structurée d'étapes automatisées, entrées/sorties identifiées, répétable, traçable, contrôlable.` },
    { id:"e-ch2-q-02", q:`Expliquer la différence entre pipeline de données et pipeline ML.`, correction:`Données : prépare/nettoie → sortie = données exploitables. ML : entraîne/évalue → sortie = modèle + métriques. Le pipeline data alimente le pipeline ML.` },
    { id:"e-ch2-q-03", q:`Pourquoi le versionnement des seules sources de code est-il insuffisant en MLOps ?`, correction:`Un modèle dépend aussi des données, hyperparamètres, environnement, transformations → sans les versionner, pas de reproductibilité possible.` },
    { id:"e-ch2-q-04", q:`En quoi la cartographie du flux de valeur aide-t-elle à améliorer un système de traitement ?`, correction:`Visualise toutes les étapes, identifie les non-valeurs (attentes, goulots) → cible les gaspillages à éliminer.` },
    { id:"e-ch2-q-05", q:`Pourquoi un pipeline peut-il être techniquement correct mais organisationnellement inefficace ?`, correction:`Code correct ≠ bon flux : livraison lente, silos, pas de feedback/amélioration continue → problème Lean/Agile, pas technique.` },
    { id:"e-ch2-q-06", q:`Quel est le rôle de l'orchestration dans la robustesse du workflow ?`, correction:`Dépendances (DAG), retry automatique, supervision et alertes centralisées → workflow résilient, pas seulement exécutable manuellement.` },
    { id:"e-ch2-q-07", q:`Pourquoi la CI est-elle importante même avant le déploiement final ?`, correction:`Détecte tôt les erreurs (code, transformation, config) à chaque commit → réduit le coût de correction avant la mise en prod.` }
  ],
  vocab: [
    { id:"e-ch2-v-01", term:`Lean Thinking`, correction:`Philosophie visant à maximiser la valeur client en éliminant systématiquement le gaspillage (muda).` },
    { id:"e-ch2-v-02", term:`Agile Collaboration`, correction:`Frameworks itératifs (Scrum/Kanban) + valeurs collaboratives appliqués au cycle de vie data science pour livrer en continu.` },
    { id:"e-ch2-v-03", term:`Flux de valeur`, correction:`Enchaînement des étapes de traitement ; sa cartographie (VSM) distingue valeur ajoutée et gaspillage.` },
    { id:"e-ch2-v-04", term:`Pipeline de données`, correction:`Chaîne automatisée qui ingère, transforme et prépare des données brutes exploitables de façon fiable et traçable.` },
    { id:"e-ch2-v-05", term:`Pipeline ML`, correction:`Chaîne automatisée qui transforme des données préparées en modèle déployable et évaluable, avec traçabilité.` },
    { id:"e-ch2-v-06", term:`Versionnement`, correction:`Traçage/conservation de l'historique de tous les objets d'un système (code, données, configs, artefacts, modèles, environnements).` },
    { id:"e-ch2-v-07", term:`Environnement reproductible`, correction:`Environnement dont dépendances et paramètres sont explicités et reconstruisibles.` },
    { id:"e-ch2-v-08", term:`Orchestration`, correction:`Coordination automatique de l'exécution des étapes d'un pipeline : dépendances, scheduling, gestion d'erreurs, relances, supervision.` },
    { id:"e-ch2-v-09", term:`Continuous Integration`, correction:`Intégration automatique des changements de code dans un dépôt partagé, avec contrôles (tests, lint, validation) à chaque commit/PR.` }
  ],
  analysis: [
    {
      id:"e-ch2-a-01",
      scenario:`Une équipe dispose de trois notebooks exécutés manuellement chaque semaine : (1) extraction CRM, (2) nettoyage/agrégation, (3) entraînement d'un modèle de scoring. Aucune version des données n'est conservée, les dépendances Python diffèrent selon les postes, et les résultats sont envoyés par email.`,
      question:`1. Pourquoi ce système est-il artisanal ? 2. Identifier au moins cinq risques. 3. Proposer les premiers éléments de transformation vers un pipeline industrialisé.`,
      correction:`1. Exécution manuelle, pas de versionnement, environnements non maîtrisés, pas de traçabilité → dépend des individus.
2. Risques : perte/incohérence des données (pas de version), résultats non reproductibles (deps différentes), erreurs silencieuses non détectées, dépendance à une personne (héroïsme), pas d'historique pour audit.
3. Transformation : versionner les données (DVC) et le code (Git), fixer l'environnement (requirements/conda), automatiser l'enchaînement (orchestrateur), remplacer l'email par un stockage/registry partagé.` },
    {
      id:"e-ch2-a-02",
      scenario:`Une organisation affirme être "Agile" parce qu'elle fait une réunion hebdomadaire, mais : les scripts ne sont pas mutualisés, les changements ne sont pas tracés, les erreurs sont découvertes tardivement, chaque équipe travaille dans son coin.`,
      question:`1. Pourquoi cette organisation n'est-elle pas réellement Agile au sens DataOps ? 2. Quels principes du DataOps Manifesto semblent manquer ? 3. Quels changements de pratiques proposeriez-vous ?`,
      correction:`1. Une réunion ne suffit pas : pas de collaboration réelle, pas de feedback rapide, pas de traçabilité → Agile de façade.
2. Manquent : "c'est un sport d'équipe", "interactions quotidiennes", "réduire l'héroïsme", "rendre les résultats reproductibles", "l'analytics est du code", "orchestrer".
3. Mutualiser le code (dépôt Git commun), tracer les changements (versionnement + CI), détecter tôt les erreurs (tests + CI), décloisonner les équipes (collaboration continue, pas juste hebdomadaire).` },
    {
      id:"e-ch2-a-03",
      scenario:`Deux étudiants exécutent le même script d'entraînement sur des machines différentes et obtiennent des résultats distincts.`,
      question:`1. Donner trois causes possibles. 2. En quoi cela relève-t-il d'un problème de reproductibilité ? 3. Quelles mesures techniques permettraient de réduire ce problème ?`,
      correction:`1. Versions de bibliothèques différentes, données d'entrée différentes (pas versionnées), seed aléatoire non fixée (ou OS/hardware différent).
2. L'environnement d'exécution n'est pas maîtrisé/reconstruisible → même code, résultats différents = irreproductibilité.
3. Fixer les dépendances (requirements.txt figé), utiliser un environnement déclaratif ou conteneurisé (Docker), versionner les données (DVC), fixer les seeds aléatoires.` }
  ],
  case: {
    title: `TP : Structuration d'un pipeline data/ML simple`,
    context: `Vous êtes chargés d'analyser un mini cas de projet ML académique. Le projet vise à produire un score de risque à partir d'un fichier CSV contenant des données clients. Actuellement, le workflow est le suivant : un fichier CSV est déposé manuellement ; un script Python nettoie les colonnes ; un autre script entraîne un modèle ; un notebook génère des métriques ; un fichier final est exporté manuellement. Aucun orchestrateur n'est utilisé, le versionnement des données n'est pas formalisé, et l'équipe ne sait pas clairement quelles étapes doivent être automatisées.`,
    tasks: [
      {
        id:"e-ch2-c-01",
        prompt:`1. Exercice pratique 1 — Cartographie du pipeline existant. Représenter le pipeline actuel sous forme de schéma ou de liste structurée : identifier les entrées, chaque étape de traitement, les sorties intermédiaires, la sortie finale, et repérer les tâches manuelles.`,
        correction:`Entrée : CSV clients (dépôt manuel). Étapes : nettoyage colonnes (script) → entraînement modèle (script) → génération métriques (notebook) → export final (manuel). Sorties intermédiaires : données nettoyées, modèle entraîné, métriques. Sortie finale : fichier de score exporté. Tâches manuelles : dépôt CSV, lancement des scripts, export final. Points de fragilité : pas d'orchestrateur, pas de version des données, étapes non tracées.` },
      {
        id:"e-ch2-c-02",
        prompt:`2. Exercice pratique 2 — Identification des éléments versionnables. Dresser un tableau des objets à versionner (code source, jeux de données/références, configurations, artefacts de sortie, dépendances d'environnement).`,
        correction:`Tableau élément / pourquoi versionner / outil : Code de nettoyage & entraînement (Git) — reproduire les traitements ; CSV clients / dataset (DVC) — reproduire les résultats sur les mêmes données ; Config (seuils, hyperparamètres) (Git+YAML) — traçer les choix ; Modèle entraîné + métriques (MLflow / DVC) — comparer les versions ; requirements.txt / env (Docker ou Conda) — reproductibilité de l'exécution.` },
      {
        id:"e-ch2-c-03",
        prompt:`3. Exercice pratique 3 — Proposition d'architecture simple. Proposer une architecture minimale utilisant Git, DVC (ou équivalent), un orchestrateur, un environnement reproductible : ce qui est géré par Git, par DVC, le rôle de l'orchestrateur, le mécanisme de reproductibilité, le déclenchement du pipeline.`,
        correction:`Git gère le code et les configs (scripts de nettoyage/entraînement, YAML). DVC gère le CSV, les splits et le modèle sérialisé, avec stockage distant. L'orchestrateur (ex. Airflow/Dagster) enchaîne nettoyage → entraînement → évaluation → export, avec retry et logs. La reproductibilité est assurée par un environnement conteneurisé (Docker) ou déclaratif (env.yml), fixant versions et dépendances. Déclenchement : schedule hebdomadaire ou dépôt d'un nouveau CSV (event-driven).` },
      {
        id:"e-ch2-c-04",
        prompt:`4. Exercice pratique 4 — Lecture critique d'un pipeline artisanal. Rédiger une critique structurée du pipeline initial : manque de modularité, dépendance aux manipulations manuelles, absence de versionnement, faible reproductibilité, absence de contrôle automatisé, difficulté de passage à l'échelle.`,
        correction:`Manque de modularité : scripts non découpés en composants réutilisables/testables. Dépendance manuelle : dépôt CSV et export final = points de rupture et d'erreur humaine. Absence de versionnement : aucune trace des versions de données/modèle → résultats non comparables dans le temps. Faible reproductibilité : environnement non fixé, dépendances implicites. Absence de contrôle automatisé : aucun test ni validation avant export. Passage à l'échelle difficile : processus manuel non tenable avec plus de données/utilisateurs.` },
      {
        id:"e-ch2-c-05",
        prompt:`5. Exercice pratique 5 — Organisation d'un workflow cible. Construire un workflow cible avec : ingestion, validation minimale, transformation, entraînement, évaluation, enregistrement de l'artefact, journalisation de l'exécution. Définir l'ordre des tâches, les dépendances, les points de contrôle, les sorties, une fréquence/mode de déclenchement.`,
        correction:`Ordre : ingestion → validation minimale → transformation → entraînement → évaluation → enregistrement de l'artefact → journalisation. Dépendances : chaque étape dépend du succès de la précédente (DAG linéaire). Points de contrôle : validation du schéma après ingestion, seuil de qualité après évaluation. Sorties : dataset validé, features, modèle, métriques, log d'exécution. Déclenchement : hebdomadaire (schedule) ou à chaque nouveau dépôt de CSV (event-driven).` }
    ],
    deliverables: [
      `Un schéma simple du pipeline actuel + une liste des points de fragilité`,
      `Un tableau à 3 colonnes : élément / pourquoi versionner / outil ou mécanisme envisagé`,
      `Un schéma d'architecture + un texte explicatif de 10 à 15 lignes`,
      `Une note critique de 1 à 2 pages`,
      `Un diagramme de workflow + une justification des choix de structuration`
    ]
  }
};
