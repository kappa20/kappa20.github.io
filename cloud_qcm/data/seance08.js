// Séance 8 — Philosophie DevOps & Agile
const SEANCE_8 = {
  id: 8,
  title: "Philosophie DevOps & Agile",
  questions: [
    {
      type: "single",
      text: "Comment appelle-t-on le modèle de développement logiciel classique en cascade ?",
      options: ["Agile Model", "Waterfall / Silos Model", "DevOps Model", "Scrum Model"],
      correct: [1],
      explanation: "Le modèle de développement logiciel classique est souvent désigné par Waterfall (cascade) ou Silos Model, où les phases se succèdent séquentiellement."
    },
    {
      type: "multi",
      text: "Quelles sont les limites des méthodes classiques de développement (Waterfall) ? (plusieurs réponses)",
      options: ["Cloisonnement (Silos) des équipes Dev et Ops", "Cycles de développement longs", "Automatisation trop importante", "Retour d'information tardif"],
      correct: [0, 1, 3],
      explanation: "Les limites classiques : cloisonnement des équipes, longs cycles de développement, et retour d'information tardif. L'excès d'automatisation n'est pas un problème classique (au contraire, il y en a trop peu)."
    },
    {
      type: "multi",
      text: "Parmi les frameworks Agiles suivants, lesquels sont mentionnés dans le cours ? (plusieurs réponses)",
      options: ["Scrum", "Kanban", "Extreme Programming (XP)", "PRINCE2", "Lean Software Development"],
      correct: [0, 1, 2, 4],
      explanation: "Les frameworks Agiles mentionnés : Scrum, Kanban, Extreme Programming (XP) et Lean Software Development. PRINCE2 est une méthode de gestion de projet traditionnelle, pas Agile."
    },
    {
      type: "single",
      text: "Quelle est la durée typique d'un Sprint dans la méthode Agile ?",
      options: ["1 à 2 jours", "1 à 4 semaines", "1 à 3 mois", "6 mois à 1 an"],
      correct: [1],
      explanation: "Dans la méthode Agile, un Sprint (cycle itératif) dure généralement de 1 à 4 semaines."
    },
    {
      type: "multi",
      text: "Quelles sont les phases du cycle de développement Waterfall (TSDL) ? (plusieurs réponses)",
      options: ["Analyse des besoins", "Conception", "Développement", "Test", "Implémentation (déploiement)", "Sprint"],
      correct: [0, 1, 2, 3, 4],
      explanation: "Le cycle Waterfall comprend : Analyse des besoins, Conception, Développement du logiciel, Test, et Implémentation (déploiement). Sprint est un concept Agile, pas Waterfall."
    },
    {
      type: "single",
      text: "Combien de valeurs et de principes définit le Manifeste Agile ?",
      options: ["2 valeurs et 6 principes", "4 valeurs et 12 principes", "5 valeurs et 10 principes", "3 valeurs et 9 principes"],
      correct: [1],
      explanation: "Le Manifeste Agile définit 4 valeurs et 12 principes, avec pour idée clé de remettre l'humain et la satisfaction client au centre du développement."
    },
    {
      type: "single",
      text: "Quelle est l'idée clé de l'Agilité dans la gestion de projet ?",
      options: ["Planifier tout le projet à l'avance avec une documentation complète", "Avancer par petits pas en cycles courts avec adaptation aux changements", "Séparer strictement les équipes Dev et Ops", "Livrer une seule version finale à la fin du projet"],
      correct: [1],
      explanation: "L'Agilité est une approche itérative et incrémentale où on ne planifie pas tout à l'avance, mais on avance par petits pas en cycles (Sprints), en s'adaptant rapidement aux changements et en livrant des versions fréquentes."
    },
    {
      type: "single",
      text: "Quelle est la définition de DevOps ?",
      options: ["Une méthode Agile basée uniquement sur les tests automatisés", "Un outil de monitoring des serveurs en production", "Une méthode qui combine le développement logiciel (Dev) et les opérations informatiques (Ops) au sein d'un même cycle", "Un langage de programmation pour l'automatisation des déploiements"],
      correct: [2],
      explanation: "Le DevOps est une méthode de développement de logiciels qui combine le développement (Dev) et les opérations informatiques (Ops), intégrant toutes les fonctions du développement à l'exploitation au sein d'un même cycle."
    },
    {
      type: "multi",
      text: "Quelles sont les 3 parties prenantes du cycle DevOps ? (plusieurs réponses)",
      options: ["Le développeur (Dev)", "Le chef de projet (PM)", "Les Opérations (Ops)", "Le QA (Quality Assurance)"],
      correct: [0, 2, 3],
      explanation: "Les 3 parties prenantes de DevOps : le Développeur (créateur du code), les Ops (responsable de l'exploitation et de l'infrastructure), et le QA (Quality Assurance, assure la qualité des logiciels)."
    },
    {
      type: "multi",
      text: "Quelles étapes composent la boucle OPS du cycle DevOps ? (plusieurs réponses)",
      options: ["Plan", "Release", "Deploy", "Operate", "Monitor", "Build"],
      correct: [1, 2, 3, 4],
      explanation: "La boucle OPS comprend : Release (validation finale de l'artefact), Deploy (mise en production), Operate (exploitation, performance), Monitor (surveillance continue, métriques, logs, alertes). Plan et Build font partie de la boucle DEV."
    },
    {
      type: "single",
      text: "Que signifie le concept 'Continuous Everything' dans DevOps ?",
      options: ["L'exécution manuelle de toutes les phases du cycle de vie", "L'automatisation de chaque phase du cycle de vie DevOps, se déclenchant dès que la précédente produit un résultat", "La livraison d'une seule version complète du logiciel", "Le monitoring uniquement des serveurs de production"],
      correct: [1],
      explanation: "Le 'Continuous Everything' est l'automatisation du cycle de vie DevOps : chaque phase est automatisée pour se déclencher dès que la précédente produit un résultat (CI, Tests Continus, CD, Opérations Continues, Feedback Continu)."
    },
    {
      type: "single",
      text: "Que signifie l'acronyme CALMS dans le contexte DevOps ?",
      options: ["Code, Agile, Lean, Management, Supervision", "Culture, Automation, Lean, Measurement, Sharing", "Continuous, Agile, Logging, Monitoring, Security", "Collaboration, Architecture, Lifecycle, Monitoring, Speed"],
      correct: [1],
      explanation: "CALMS signifie : Culture, Automation, Lean, Measurement, Sharing. C'est le cadre qui définit les piliers du mouvement DevOps."
    },
    {
      type: "single",
      text: "Qu'est-ce que la 'blameless culture' dans le pilier Culture de CALMS ?",
      options: ["On identifie et punit le responsable en cas d'erreur", "On cherche une solution plutôt qu'un coupable en cas d'erreur", "On blâme l'outil automatique en cas de défaillance", "On évite de documenter les incidents pour ne pas créer de conflits"],
      correct: [1],
      explanation: "La 'blameless culture' signifie qu'en cas d'erreur, on ne cherche pas un coupable mais une solution. C'est un élément fondamental de la Culture DevOps, instaurant un climat de confiance et de transparence."
    },
    {
      type: "single",
      text: "Que signifie YAGNI dans le pilier Lean de CALMS DevOps ?",
      options: ["Yet Another Git Node Interface", "You Ain't Gonna Need It — ne développe jamais une fonctionnalité 'au cas où'", "Your Agile Guide to New Implementations", "You Always Get Needed Infrastructure"],
      correct: [1],
      explanation: "YAGNI (You Ain't Gonna Need It) signifie 'Tu n'en auras pas besoin'. Principe issu de l'XP : ne jamais développer une fonctionnalité 'au cas où' — écrire du code inutile est un gaspillage de temps et d'énergie."
    },
    {
      type: "single",
      text: "Que représente JIT (Just-In-Time) dans le pilier Lean de CALMS DevOps ?",
      options: ["Java Integration Testing", "Le principe du déploiement à la demande : les environnements sont créés et le code déployé au moment exact où le besoin apparaît", "La planification des serveurs plusieurs mois à l'avance", "Un outil de monitoring en temps réel"],
      correct: [1],
      explanation: "JIT (Just-In-Time) est le 'Juste à Temps' numérique, inspiré de Toyota. En DevOps : on ne prépare plus de serveurs des mois à l'avance, les environnements sont créés et le code déployé au moment exact où le besoin apparaît."
    },
    {
      type: "single",
      text: "Quelle est la relation entre l'Agilité et DevOps ?",
      options: ["DevOps est une alternative à l'Agilité qui la remplace complètement", "DevOps étend le cycle Agile jusqu'à l'utilisateur final (Release → Deploy → Operate → Monitor)", "L'Agilité et DevOps sont deux méthodes indépendantes et incompatibles", "DevOps se concentre uniquement sur la phase de planification Agile"],
      correct: [1],
      explanation: "DevOps n'est pas une alternative à l'Agilité, mais son extension au cycle de vie opérationnel. L'Agilité s'arrêtait à la livraison du code, DevOps étend ce cycle jusqu'à l'utilisateur final : Release → Deploy → Operate → Monitor."
    }
  ],
  flashcards: [
    { term: "DevOps", def: "Culture et pratique unissant le Développement (Dev) et les Opérations (Ops) + QA pour accélérer la livraison de logiciels de qualité via l'automatisation et la collaboration. Objectif : 'Continuous Everything'. Contraire du modèle Silos/Waterfall." },
    { term: "Waterfall (Méthode en Cascade)", def: "Développement séquentiel : Analyse → Conception → Développement → Test → Implémentation. Chaque phase entièrement terminée avant la suivante. Problèmes : silos, cycles longs, retour tardif, pas d'adaptation aux changements." },
    { term: "Agile vs Waterfall", def: "Waterfall : phases figées, livraison tardive (une seule version finale), adapté aux besoins stables. Agile : itératif (Sprints 1-4 semaines), livraison fréquente, adaptation continue, favorise la collaboration client." },
    { term: "Manifeste Agile (4 valeurs, 12 principes)", def: "4 valeurs : individus/interactions > processus/outils ; logiciel fonctionnel > documentation exhaustive ; collaboration client > négociation contractuelle ; réponse au changement > suivi du plan. 12 principes dont la satisfaction client, la livraison fréquente, les équipes motivées." },
    { term: "Scrum", def: "Framework Agile basé sur des Sprints (1-4 semaines). Rôles : Product Owner (backlog, priorisation), Scrum Master (facilite, supprime obstacles), Équipe (développement). Cérémonies : Sprint Planning, Daily Scrum, Sprint Review, Rétrospective." },
    { term: "Sprint (Scrum)", def: "Itération de durée fixe (1-4 semaines) durant laquelle l'équipe livère un incrément logiciel fonctionnel, testé et potentiellement déployable. Pas de changement de scope pendant un sprint. Résultat : un incrément 'Done'." },
    { term: "CALMS (DevOps)", def: "Cadre définissant les 5 piliers DevOps : Culture (blameless, collaboration), Automation (CI/CD, tests auto), Lean (YAGNI, JIT, éliminer gaspillages), Measurement (métriques, DORA), Sharing (transparence, partage des connaissances)." },
    { term: "Blameless culture", def: "Pilier Culture de CALMS : en cas d'erreur ou d'incident, on cherche une solution systémique plutôt qu'un coupable. Favorise la transparence, l'apprentissage et la prise de risque calculé. Post-mortems sans blâme." },
    { term: "YAGNI (You Ain't Gonna Need It)", def: "Principe Lean/XP : ne jamais développer une fonctionnalité 'au cas où' on en aurait besoin dans le futur. Écrire du code inutile est un gaspillage (Muda). Ne développe que ce qui est nécessaire maintenant." },
    { term: "JIT (Just-In-Time) DevOps", def: "Principe Lean appliqué au DevOps : les environnements sont créés et le code déployé au moment exact où le besoin apparaît (Infrastructure as Code). Ne prépare pas des serveurs des mois à l'avance. Inspiré du système Toyota." },
    { term: "Cycle DevOps (6 étapes)", def: "Boucle DEV : Plan → Build → Test. Boucle OPS : Release → Deploy → Operate → Monitor → Feedback → (retour à Plan). 3 parties prenantes : Dev, Ops, QA. Objectif : 'Continuous Everything' — tout est automatisé." },
    { term: "Continuous Everything", def: "Automatisation de toutes les phases du cycle DevOps : CI (build + tests auto à chaque commit), CD (déploiement auto), Continuous Testing, Continuous Monitoring (logs, métriques, alertes), Continuous Feedback (retour vers les devs)." }
  ]
};
