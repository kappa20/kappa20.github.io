// Séance 9 — Développement Continu & Git
const SEANCE_9 = {
  id: 9,
  title: "Développement Continu & Git",
  questions: [
    {
      type: "single",
      text: "Le développement continu est la première étape du cycle de vie DevOps, il implique :",
      options: [
        "Le déploiement automatique en production",
        "La planification et le codage des logiciels",
        "La surveillance des applications en production",
        "La gestion des incidents en production"
      ],
      correct: [1],
      explanation: "Le développement continu est la première étape du cycle de vie DevOps. Il implique la planification et le codage des logiciels, avec des cycles de développement plus petits."
    },
    {
      type: "multi",
      text: "Pourquoi un système de gestion de versions est-il indispensable en développement continu ? (plusieurs réponses)",
      options: [
        "Pour enregistrer l'historique des modifications",
        "Pour collaborer efficacement entre développeurs",
        "Pour remplacer le langage de programmation",
        "Pour gérer les conflits entre développeurs"
      ],
      correct: [0, 1, 3],
      explanation: "Un système de gestion de versions permet : d'enregistrer l'historique, de collaborer efficacement, et de gérer les conflits. Il ne remplace pas le langage de programmation."
    },
    {
      type: "single",
      text: "Dans l'environnement de développement continu, quand sont exécutés les tests automatisés ?",
      options: [
        "Uniquement avant la mise en production finale",
        "Chaque fois qu'une modification est effectuée dans le code",
        "Une fois par semaine lors de la réunion de sprint",
        "Uniquement lors des releases majeures"
      ],
      correct: [1],
      explanation: "En développement continu, les tests sont automatisés et exécutés chaque fois qu'une modification est effectuée dans le code, servant de 'feedbacks techniques' sur la qualité."
    },
    {
      type: "multi",
      text: "Quels sont les risques liés au travail sans système de gestion de versions ? (plusieurs réponses)",
      options: [
        "Conflits élevés lorsque plusieurs développeurs travaillent sur les mêmes fichiers",
        "Impossibilité de revenir à une version stable en cas de problème",
        "Manque de visibilité sur les modifications effectuées",
        "Performance réseau trop lente"
      ],
      correct: [0, 1, 2],
      explanation: "Sans gestion de versions : risques de conflits entre développeurs, impossibilité de revenir en arrière, et manque de visibilité sur les modifications."
    },
    {
      type: "single",
      text: "Quel système de gestion de versions est mentionné comme exemple dans le cours ?",
      options: ["SVN uniquement", "Git et SVN", "Mercurial uniquement", "CVS"],
      correct: [1],
      explanation: "Le cours mentionne Git et SVN comme exemples de systèmes de gestion de versions utilisés dans le développement continu."
    },
    {
      type: "single",
      text: "Le DevOps Lifecycle comprend combien d'étapes continues ?",
      options: ["4", "5", "6", "8"],
      correct: [2],
      explanation: "Le DevOps Lifecycle comprend 6 étapes continues : Continuous Development, Continuous Integration, Continuous Testing, Continuous Deployment, Continuous Monitoring, et Continuous Feedback."
    },
    {
      type: "single",
      text: "Quels sont les deux types de systèmes de contrôle de versions (VCS) ?",
      options: [
        "VCS local et VCS en ligne",
        "VCS Centralisé et VCS distribué",
        "VCS publics et VCS privés",
        "VCS open source et VCS propriétaires"
      ],
      correct: [1],
      explanation: "Il existe deux types de VCS : le VCS Centralisé (un seul serveur central contenant l'intégralité de l'historique) et le VCS distribué (chaque développeur possède une copie complète du dépôt — le dépôt est 'cloné')."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un repository (dépôt) Git ?",
      options: [
        "Un outil de déploiement automatique en production",
        "Un espace de stockage où le code source d'un projet est conservé, versionné et suivi",
        "Un serveur de compilation du code source",
        "Un outil de monitoring des performances"
      ],
      correct: [1],
      explanation: "Un repository est un espace de stockage où le code source d'un projet est conservé, versionné et suivi. Exemples de VCS centralisés : CVS, SVN. Exemples de VCS distribués : Git, Mercurial."
    },
    {
      type: "single",
      text: "Quelle est la différence entre un repository local et un repository distant ?",
      options: [
        "Le repository local est sur GitHub, le distant est sur la machine du développeur",
        "Le repository local est sur la machine du développeur, le distant est sur un serveur ou plateforme comme GitHub, GitLab ou Bitbucket",
        "Le repository local est uniquement en lecture seule",
        "Il n'y a aucune différence fonctionnelle"
      ],
      correct: [1],
      explanation: "Le repository local est un dépôt Git sur la machine locale du développeur (copie complète avec historique). Le repository distant est stocké sur un serveur ou plateforme (GitHub, GitLab, Bitbucket) permettant la collaboration."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un commit dans Git ?",
      options: [
        "Une commande pour supprimer une branche",
        "Un instantané de version stable du projet, contenant un message décrivant les changements effectués",
        "Une copie complète du dépôt distant",
        "Un outil de fusion de branches"
      ],
      correct: [1],
      explanation: "Un commit est appliqué quand on a terminé les modifications et qu'on a une version stable du projet. Chaque commit contient un message décrivant les changements effectués. Dans Git, chaque version est enregistrée sous la forme d'un commit."
    },
    {
      type: "single",
      text: "Qu'est-ce que la Fusion (Merge) dans Git ?",
      options: [
        "Supprimer une branche après développement",
        "Combiner les modifications effectuées sur une branche dans une autre",
        "Copier un repository distant en local",
        "Revenir à un commit précédent"
      ],
      correct: [1],
      explanation: "La Fusion (Merge) consiste à combiner les modifications effectuées sur une branche dans une autre, pour intégrer les fonctionnalités développées dans des branches secondaires à la branche principale."
    },
    {
      type: "single",
      text: "À quoi sert la branche Hotfix dans Git Flow ?",
      options: [
        "Développer de nouvelles fonctionnalités",
        "Préparer la prochaine version du logiciel",
        "Corriger rapidement des bugs critiques directement sur la branche Master",
        "Tester les nouvelles fonctionnalités avant intégration"
      ],
      correct: [2],
      explanation: "La branche Hotfix est destinée à corriger rapidement des bugs critiques directement sur la branche Master. Une fois le correctif appliqué, il est publié sur Master et réinjecté dans Develop."
    },
    {
      type: "multi",
      text: "Quels sont les types de branches secondaires dans Git Flow ? (plusieurs réponses)",
      options: ["Develop", "Feature", "Release", "Hotfix", "Main"],
      correct: [0, 1, 2, 3],
      explanation: "Git Flow définit 4 branches secondaires : Develop (branche d'intégration), Feature (nouvelle fonctionnalité), Release (préparation d'une version), Hotfix (correction urgente de bugs critiques sur Master). Main/Master est la branche principale, pas secondaire."
    },
    {
      type: "single",
      text: "Qu'est-ce que Git Flow ?",
      options: [
        "Un outil graphique pour visualiser les commits",
        "Un langage de script pour automatiser les tests",
        "Un modèle de workflow qui structure le développement en utilisant des branches avec des rôles spécifiques",
        "Un service d'hébergement de dépôts Git"
      ],
      correct: [2],
      explanation: "Git Flow est un modèle de workflow (convention de gestion des branches) qui structure le développement en utilisant des branches avec des rôles spécifiques (Master, Develop, Feature, Release, Hotfix)."
    },
    {
      type: "single",
      text: "Quelle commande Git initialise un nouveau dépôt local ?",
      options: ["git clone", "git commit", "git init", "git push"],
      correct: [2],
      explanation: "La commande 'git init' initialise un nouveau dépôt Git local. Elle crée un fichier caché '.git' qui contient tous les fichiers nécessaires au dépôt (HEAD, config, hooks, objects, refs...)."
    }
  ],
  flashcards: [
    { term: "VCS Centralisé vs Distribué", def: "Centralisé (SVN, CVS) : un seul serveur central avec l'historique, les devs travaillent sur des copies locales. Distribué (Git, Mercurial) : chaque développeur possède une copie COMPLÈTE du dépôt (historique inclus). Git est le standard actuel." },
    { term: "Git", def: "VCS distribué open source. Chaque développeur possède une copie complète du dépôt. Commandes clés : git init (créer dépôt), git clone (copier), git add (indexer), git commit (sauvegarder), git push (envoyer), git pull (recevoir), git merge (fusionner)." },
    { term: "SVN (Subversion)", def: "VCS centralisé. L'intégralité de l'historique est sur un serveur central. Les développeurs travaillent sur des copies locales et doivent se connecter au serveur pour la plupart des opérations. Moins flexible que Git." },
    { term: "Commit (Git)", def: "Instantané (snapshot) de l'état du projet à un moment donné, accompagné d'un message décrivant les changements. Identifié par un hash SHA-1 unique. Représente une version stable sauvegardée dans l'historique du dépôt." },
    { term: "Branch (Branche Git)", def: "Ligne de développement indépendante permettant de travailler sur une fonctionnalité ou un correctif sans affecter le code principal. Création rapide et peu coûteuse dans Git. Merge = intégration de la branche dans une autre." },
    { term: "Git Flow (5 branches)", def: "Convention de branches : Master (code stable en production), Develop (intégration des features), Feature (nouvelle fonctionnalité, créée depuis Develop), Release (préparation d'une version), Hotfix (correctif urgent depuis Master → réinjecté dans Master ET Develop)." },
    { term: "Branche Hotfix (Git Flow)", def: "Branche créée directement depuis Master pour corriger rapidement un bug critique en production. Une fois terminée, fusionnée dans Master (nouvelle release) ET réinjectée dans Develop pour ne pas perdre le correctif." },
    { term: "Repository local vs distant", def: "Local : sur la machine du développeur, copie complète avec tout l'historique. Distant : sur un serveur/plateforme (GitHub, GitLab, Bitbucket), référence partagée pour la collaboration. git push envoie les commits locaux vers le distant." },
    { term: "Merge vs Conflit (Git)", def: "Merge : opération qui intègre les modifications d'une branche dans une autre. Conflit de merge : deux développeurs ont modifié les mêmes lignes — Git ne peut pas fusionner automatiquement, le développeur doit résoudre manuellement." },
    { term: "Développement Continu (DevOps)", def: "1ère étape du cycle DevOps. Inclut la planification (tickets, sprints) et le codage. Utilise un VCS (Git) pour collaborer. Chaque commit déclenche automatiquement le pipeline CI : build → tests → analyse qualité → artefact." }
  ]
};
