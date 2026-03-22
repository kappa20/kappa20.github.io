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
    },
    {
      type: "single",
      text: "Quelle est la différence entre 'git pull' et 'git fetch' ?",
      options: ["git pull et git fetch sont des synonymes", "git fetch télécharge les modifications du distant sans les fusionner, git pull télécharge ET fusionne automatiquement dans la branche courante", "git pull télécharge seulement les nouveaux fichiers, git fetch télécharge tout", "git fetch est uniquement pour les branches distantes, git pull pour les branches locales"],
      correct: [1],
      explanation: "git fetch récupère les modifications du dépôt distant mais ne les intègre pas dans la branche locale — vous pouvez les inspecter avant. git pull = git fetch + git merge : il récupère ET fusionne automatiquement. git fetch est plus sûr pour vérifier avant d'intégrer."
    },
    {
      type: "single",
      text: "À quoi sert 'git stash' ?",
      options: ["Supprimer définitivement des fichiers du dépôt", "Mettre temporairement de côté des modifications non committées pour nettoyer le working tree, puis les réappliquer plus tard", "Fusionner deux branches sans créer de commit de merge", "Revenir au dernier commit en annulant toutes les modifications locales"],
      correct: [1],
      explanation: "git stash sauvegarde temporairement les modifications en cours (non committées) dans une pile, rendant le working tree propre. Utile pour changer de branche sans committer un travail inachevé. git stash pop récupère les modifications mises de côté."
    },
    {
      type: "single",
      text: "Quelle est la différence entre GitHub et GitLab ?",
      options: ["GitHub est open source, GitLab est propriétaire", "GitHub est une plateforme d'hébergement Git (Microsoft), GitLab est une plateforme Git complète avec CI/CD intégré (open source, auto-hébergeable)", "GitLab n'utilise pas Git comme système de gestion de versions", "GitHub et GitLab sont identiques dans leurs fonctionnalités"],
      correct: [1],
      explanation: "GitHub (Microsoft) est la principale plateforme d'hébergement de dépôts Git, centrée sur la collaboration et l'open source. GitLab propose en plus un CI/CD intégré natif, une gestion de projet complète, et peut être auto-hébergé sur ses propres serveurs."
    },
    {
      type: "multi",
      text: "Quelles sont les commandes Git essentielles pour le flux de travail quotidien ? (plusieurs réponses)",
      options: ["git add (indexer les modifications)", "git commit -m 'message' (sauvegarder une version)", "git push (envoyer au dépôt distant)", "git status (voir l'état du working tree)"],
      correct: [0, 1, 2, 3],
      explanation: "Le flux Git quotidien : git status (voir les fichiers modifiés), git add (indexer les changements dans la staging area), git commit -m (créer un instantané versionné), git push (envoyer les commits vers le dépôt distant)."
    },
    {
      type: "single",
      text: "Dans Git Flow, quelle branche sert d'intégration pour toutes les nouvelles fonctionnalités ?",
      options: ["Master / Main", "Develop", "Release", "Hotfix"],
      correct: [1],
      explanation: "La branche Develop est la branche d'intégration principale dans Git Flow. Toutes les branches Feature sont créées depuis Develop et y sont fusionnées après développement. La branche Master/Main ne contient que le code stable prêt pour la production."
    },
    {
      type: "single",
      text: "Qu'est-ce que le rebase dans Git ?",
      options: ["Renommer la branche principale", "Réécrire l'historique d'une branche en déplaçant ses commits à la pointe d'une autre branche, créant un historique linéaire", "Annuler le dernier commit", "Fusionner deux branches en créant un commit de merge"],
      correct: [1],
      explanation: "git rebase déplace les commits d'une branche à la pointe d'une autre, créant un historique linéaire (sans commit de merge). Différence avec merge : merge crée un commit de fusion et conserve la divergence ; rebase réécrit l'historique pour le linéariser."
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
    { term: "Développement Continu (DevOps)", def: "1ère étape du cycle DevOps. Inclut la planification (tickets, sprints) et le codage. Utilise un VCS (Git) pour collaborer. Chaque commit déclenche automatiquement le pipeline CI : build → tests → analyse qualité → artefact." },
    { term: "git fetch vs git pull", def: "git fetch : télécharge les modifications du distant dans le dépôt local SANS les fusionner — permet d'inspecter avant d'intégrer. git pull = git fetch + git merge : intègre automatiquement. Bonne pratique : git fetch + inspection → git merge (contrôlé)." },
    { term: "git stash", def: "Mise en attente temporaire des modifications non committées. Utile pour changer de branche proprement. git stash (sauvegarder), git stash list (voir la liste), git stash pop (réappliquer et supprimer), git stash apply (réappliquer sans supprimer)." },
    { term: "GitHub vs GitLab", def: "GitHub (Microsoft) : plateforme leader d'hébergement Git, forte communauté open source, GitHub Actions (CI/CD). GitLab : plateforme DevOps complète avec CI/CD natif (GitLab CI), gestion de projet, registre Docker intégré, auto-hébergeable. GitLab = DevOps all-in-one." },
    { term: "git rebase vs git merge", def: "Merge : crée un commit de fusion, préserve l'historique exact (avec divergences). Rebase : déplace les commits sur la pointe de la branche cible → historique linéaire propre. Règle : ne jamais rebaser des branches publiques partagées (réécriture de l'historique)." },
    { term: "Staging Area (Index Git)", def: "Zone intermédiaire entre le working tree et le dépôt Git. git add ajoute les fichiers dans la staging area. git commit crée un commit avec UNIQUEMENT ce qui est dans la staging area. Permet de préparer un commit sélectif sans committer toutes les modifications." }
  ]
};
