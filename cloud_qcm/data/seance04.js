// Séance 4 — Virtualisation des Applications
const SEANCE_4 = {
  id: 4,
  title: "Virtualisation des Applications",
  questions: [
    {
      type: "single",
      text: "Quel est l'objectif principal de la virtualisation d'applications ?",
      options: ["Augmenter la consommation mémoire des applications", "Réduire la complexité liée à la gestion et au déploiement des applications", "Remplacer le système d'exploitation par une application virtuelle", "Supprimer la nécessité d'un réseau local"],
      correct: [1],
      explanation: "La virtualisation d'applications vise à réduire la complexité liée à la gestion et au déploiement des applications au sein d'un système d'information (SI)."
    },
    {
      type: "multi",
      text: "Quels sont les problèmes liés à une installation classique d'applications ? (plusieurs réponses)",
      options: ["Non-compatibilité entre différentes applications", "Conflits de DLL (Dynamic Link Library)", "Impossibilité de migrer une application d'un host à un autre", "Vitesse d'exécution toujours trop rapide"],
      correct: [0, 1, 2],
      explanation: "Les problèmes d'une installation classique : non-compatibilité entre applications, conflits de DLL, impossibilité de migration entre hosts. La vitesse excessive n'est pas un problème classique."
    },
    {
      type: "single",
      text: "La virtualisation d'applications dans un espace utilisateur consiste à :",
      options: ["Exécuter l'application directement dans le noyau du système", "Encapsuler l'application dans un package autonome contenant tout ce dont elle a besoin", "Installer l'application sur chaque machine physique individuellement", "Créer une copie physique de l'application sur chaque serveur"],
      correct: [1],
      explanation: "La virtualisation dans un espace utilisateur encapsule l'application dans un package autonome contenant toutes ses dépendances, permettant son exécution sans installation traditionnelle."
    },
    {
      type: "multi",
      text: "Parmi ces outils, lesquels permettent la virtualisation d'applications dans un espace utilisateur ? (plusieurs réponses)",
      options: ["VMware ThinApp", "Microsoft App-V", "Turbo Studio", "Kubernetes", "Cameyo"],
      correct: [0, 1, 2, 4],
      explanation: "ThinApp, App-V, Turbo Studio et Cameyo sont des outils de virtualisation d'applications dans un espace utilisateur. Kubernetes est une plateforme d'orchestration de conteneurs."
    },
    {
      type: "single",
      text: "Combien de méthodes principales de virtualisation d'applications existe-t-il selon le cours ?",
      options: ["2", "3", "4", "6"],
      correct: [2],
      explanation: "Il existe 4 méthodes de virtualisation d'applications : utilisation d'une VM, virtualisation dans un espace utilisateur, isolation de processus (conteneurs), et virtualisation basée sur le cloud."
    },
    {
      type: "multi",
      text: "Quelles sont les 4 méthodes de virtualisation d'applications ? (plusieurs réponses)",
      options: ["Virtualisation via une machine virtuelle (VM)", "Virtualisation dans un espace utilisateur", "Virtualisation basée sur les conteneurs (isolation de processus)", "Virtualisation basée sur le cloud", "Virtualisation par hyperviseur de type 1"],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 méthodes : (1) via une VM (portabilité par couche d'abstraction), (2) dans un espace utilisateur (package autonome sur OS hôte), (3) isolation de processus (conteneurs), (4) basée sur le Cloud. L'hyperviseur de type 1 n'est pas une méthode de virt. d'applications."
    },
    {
      type: "single",
      text: "Dans la virtualisation d'applications via une VM, qui fournit l'environnement d'exécution isolé ?",
      options: ["Le système d'exploitation hôte", "La VM elle-même", "Le réseau local", "L'hyperviseur de type 2 uniquement"],
      correct: [1],
      explanation: "C'est la VM qui fournit un environnement d'exécution isolé pour l'application, séparé du système d'exploitation hôte et des autres applications."
    },
    {
      type: "single",
      text: "Le stockage peut se faire selon trois modes. Lesquels ?",
      options: ["Mode fichier, mode bloc, mode objet", "Mode local, mode réseau, mode cloud", "Mode SSD, mode HDD, mode USB", "Mode RAID, mode LVM, mode NFS"],
      correct: [0],
      explanation: "Selon le cours, le stockage peut se faire en mode objet, en mode fichier, ou en mode bloc. L'accès peut être direct ou en réseau."
    },
    {
      type: "multi",
      text: "Par quels critères les interfaces de stockage se distinguent-elles ? (plusieurs réponses)",
      options: ["Le débit (quantité de données transférées par seconde)", "La latence (temps de réponse pour accéder à une donnée)", "Le protocole utilisé (ATA / SATA / SCSI / SAS)", "Le type de connexion", "La fiabilité et la tolérance aux pannes"],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les interfaces de stockage se distinguent par : le débit, la latence, le protocole (ATA/SATA/SCSI/SAS), le type de connexion, et la fiabilité/tolérance aux pannes."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un package autonome dans la virtualisation d'applications en espace utilisateur ?",
      options: ["Un fichier ISO contenant un système d'exploitation complet", "Un package contenant l'application ET tout ce dont elle a besoin pour fonctionner, exécuté directement sur l'OS hôte", "Une archive chiffrée d'une VM complète", "Un conteneur Docker avec son propre noyau Linux"],
      correct: [1],
      explanation: "La virtualisation en espace utilisateur encapsule les applications dans un package autonome qui contient tout ce dont l'application a besoin pour fonctionner. Elle est exécutée directement sur le système d'exploitation hôte sans installation."
    }
  ],
  flashcards: [
    { term: "Virtualisation des applications", def: "Solution qui sépare l'utilisation d'une application de son environnement matériel et logiciel d'exécution, pour réduire la complexité de gestion et de déploiement des applications dans un SI. Résout les problèmes de DLL conflicts, incompatibilités, migration difficile." },
    { term: "4 méthodes de virtualisation d'applications", def: "1) Via une VM (couche d'abstraction → portabilité entre OS) ; 2) Dans un espace utilisateur (package autonome sur OS hôte) ; 3) Isolation de processus (conteneurs, partage du noyau hôte) ; 4) Basée sur le Cloud (hébergement distant, accès via navigateur)." },
    { term: "Virtualisation en espace utilisateur", def: "Encapsule l'application et TOUTES ses dépendances dans un package autonome qui s'exécute directement sur l'OS hôte sans installation. Créé par capture d'instantanés du système (avant/après installation). Aucun conflit avec d'autres applications. Outils : ThinApp, App-V, Turbo Studio, Cameyo." },
    { term: "Package autonome", def: "Archive créée par capture d'instantanés du système (snapshot avant/après installation). Contient l'application + toutes ses dépendances (registre, DLL, fichiers de config). S'exécute sans installation, sans modifier le système hôte, sans conflit." },
    { term: "Conflits de DLL (DLL Hell)", def: "Problème classique d'installation : deux applications nécessitant des versions incompatibles de la même DLL (Dynamic Link Library). La virtualisation en espace utilisateur résout ce problème en encapsulant les dépendances dans un package isolé." },
    { term: "Modes de stockage : fichier, bloc, objet", def: "Mode fichier : accès hiérarchique (répertoires/fichiers) via NFS ou SMB. Mode bloc : accès bas niveau en blocs bruts via iSCSI ou Fibre Channel (comme un disque local). Mode objet : accès via API HTTP (clé-valeur), pour le stockage cloud à grande échelle (ex: S3)." },
    { term: "Virtualisation d'applications Cloud", def: "Applications hébergées sur le Cloud et accessibles via un navigateur ou un client léger. Aucune installation locale requise. Le fournisseur gère l'infrastructure et les mises à jour. Exemples : Google Workspace, Office 365 en mode web, Salesforce." }
  ]
};
