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
    },
    {
      type: "single",
      text: "Qu'est-ce que la virtualisation de bureau (VDI — Virtual Desktop Infrastructure) ?",
      options: ["L'installation de plusieurs applications sur un même poste de travail", "La virtualisation des postes de travail sur des serveurs distants, accessibles par les utilisateurs via un terminal léger ou un client", "La sauvegarde automatique des profils utilisateurs", "Un système de partage d'écran entre collègues"],
      correct: [1],
      explanation: "La VDI (Virtual Desktop Infrastructure) virtualise les postes de travail sur des serveurs centraux. Les utilisateurs accèdent à leur bureau virtuel depuis n'importe quel terminal léger. Avantages : gestion centralisée, sécurité renforcée, accès à distance."
    },
    {
      type: "single",
      text: "Comment est créé un package de virtualisation d'application en espace utilisateur ?",
      options: ["En compilant le code source de l'application dans un format portable", "Par capture d'instantanés (snapshots) du système avant et après l'installation, puis comparaison des différences", "En copiant manuellement les fichiers de l'application", "En utilisant un hyperviseur de type 2 pour encapsuler l'application"],
      correct: [1],
      explanation: "Le package est créé par capture d'instantanés : on prend un snapshot du système avant l'installation, on installe l'application normalement, puis on prend un snapshot après. La différence entre les deux snapshots constitue le package autonome."
    },
    {
      type: "multi",
      text: "Quels avantages offre la virtualisation d'applications en espace utilisateur ? (plusieurs réponses)",
      options: ["Aucun conflit avec d'autres applications (DLL isolées)", "Exécution sans droits d'administrateur sur la machine hôte", "Portabilité : l'application peut s'exécuter depuis une clé USB", "Mise à jour automatique des systèmes d'exploitation hôtes"],
      correct: [0, 1, 2],
      explanation: "La virtualisation en espace utilisateur offre : isolation des conflits DLL, possibilité d'exécuter sans droits admin, et portabilité (exécution depuis clé USB, partage réseau). Elle ne met pas à jour les OS hôtes."
    },
    {
      type: "single",
      text: "Quelle est la principale limite de la virtualisation d'applications via une VM ?",
      options: ["Elle ne peut pas exécuter des applications Windows", "La VM est lourde en ressources : un OS complet est nécessaire pour chaque application virtualisée", "Elle ne supporte pas les applications web", "Elle nécessite une connexion Internet permanente"],
      correct: [1],
      explanation: "La virtualisation via VM est la méthode la plus isolante mais aussi la plus lourde : chaque application nécessite une VM complète avec son propre OS, ce qui consomme beaucoup de RAM, de CPU et d'espace disque."
    },
    {
      type: "single",
      text: "Dans le contexte de la virtualisation d'applications, qu'est-ce que le streaming d'applications ?",
      options: ["Diffuser du contenu vidéo via une application virtualisée", "Transmettre les composants d'une application à la demande depuis un serveur vers le client, sans installation locale complète", "Synchroniser les données d'une application entre plusieurs VMs", "Exécuter une application directement depuis le cloud sans aucun client"],
      correct: [1],
      explanation: "Le streaming d'applications transmet les composants nécessaires à la demande depuis un serveur de distribution vers le poste client. Seule la partie de l'application réellement utilisée est transférée — Microsoft App-V utilise cette approche."
    },
    {
      type: "multi",
      text: "Quels problèmes résout la virtualisation d'applications par rapport à l'installation classique ? (plusieurs réponses)",
      options: ["Conflits de DLL entre applications", "Impossibilité de migrer une application d'un poste à un autre", "Incompatibilités entre différentes versions d'une même application", "Lenteur du réseau local"],
      correct: [0, 1, 2],
      explanation: "La virtualisation d'applications résout : les conflits de DLL (chaque package est isolé), les difficultés de migration (package portable), et les incompatibilités de versions. La lenteur du réseau n'est pas un problème d'installation classique."
    },
    {
      type: "single",
      text: "Quelle est la différence entre VDI persistant et VDI non-persistant ?",
      options: ["Le VDI persistant utilise une connexion filaire, le VDI non-persistant une connexion Wi-Fi", "Le VDI persistant conserve les modifications de l'utilisateur entre les sessions (données personnalisées sauvegardées), le VDI non-persistant remet la VM à son état d'origine après chaque session", "Le VDI persistant nécessite un client lourd, le VDI non-persistant un client léger", "Le VDI persistant est géré par Azure, le VDI non-persistant par AWS"],
      correct: [1],
      explanation: "VDI Persistant : l'utilisateur retrouve sa VM avec ses données personnalisées à chaque connexion. VDI Non-persistant : une fois la session terminée, la VM revient à son état d'origine (modifications supprimées). Le non-persistant est plus facile à administrer (mises à jour sur une seule image maître) mais moins personnalisable."
    },
    {
      type: "single",
      text: "Qu'est-ce que le RDS (Remote Desktop Services) développé par Microsoft ?",
      options: ["Un protocole de sauvegarde des données à distance", "Une technologie permettant aux utilisateurs de se connecter à un serveur Windows distant via RDP et d'accéder à leur bureau partagé, avec mutualisation des ressources entre plusieurs utilisateurs", "Un type de cloud privé dédié aux bureaux virtuels", "Un format d'image pour les machines virtuelles Windows Server"],
      correct: [1],
      explanation: "RDS (Remote Desktop Services) permet aux utilisateurs de se connecter à un serveur Windows distant via RDP (Remote Desktop Protocol). Le logiciel RDSH (Remote Desktop Session Host) installé sur le serveur permet à plusieurs utilisateurs de travailler simultanément dans un environnement bureautique personnel avec mutualisation des ressources."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre DaaS et VDI ?",
      options: ["DaaS offre plus de sécurité que VDI car les données sont chiffrées", "VDI nécessite un matériel important dans le datacenter de l'entreprise avec contrôle total, DaaS est hébergé chez un fournisseur Cloud avec frais d'abonnement mensuels mais déploiement rapide", "VDI est toujours moins coûteux que DaaS à long terme", "Il n'y a aucune différence fonctionnelle entre DaaS et VDI"],
      correct: [1],
      explanation: "VDI est principalement géré en interne dans le datacenter de l'entreprise : contrôle total, données sensibles sécurisées, scalabilité limitée au matériel disponible. DaaS est hébergé chez un fournisseur Cloud : déploiement rapide, scalabilité facile, mais frais de service mensuels. VDI pour les données sensibles, DaaS pour la flexibilité."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'OS Streaming dans la virtualisation des postes de travail ?",
      options: ["La diffusion de films via un système d'exploitation virtuel", "Une technologie où le BIOS du poste est configuré pour démarrer sur le réseau, téléchargeant l'OS et les fichiers nécessaires depuis un serveur de streaming au fur et à mesure des besoins", "La mise à jour automatique du système d'exploitation via Internet", "Un protocole de sauvegarde du système d'exploitation sur le réseau"],
      correct: [1],
      explanation: "L'OS Streaming (technologie Citrix et VMware) : le BIOS du poste est configuré pour démarrer sur le réseau. Le poste télécharge les fichiers nécessaires pour démarrer depuis un serveur de streaming et les garde en mémoire vive. La configuration est réinitialisée à chaque démarrage, et le serveur envoie des éléments supplémentaires au fur et à mesure."
    },
    {
      type: "multi",
      text: "Quelles sont les deux approches de la virtualisation des postes de travail ? (plusieurs réponses)",
      options: ["Poste de travail virtuel local (Local Desktop Virtualization) : s'exécute sur le poste client", "Virtualisation de bureau à distance : s'exécute sur un serveur distant (client léger)", "Virtualisation de stockage du poste : uniquement les données sont virtualisées", "Virtualisation applicative pure : uniquement les applications sont virtualisées, pas le bureau"],
      correct: [0, 1],
      explanation: "Il existe deux approches : (1) Poste de travail virtuel local — le bureau virtuel s'exécute sur le poste client physique (Local Desktop Virtualization, avec OS Streaming ou poste indépendant de l'OS local) ; (2) Virtualisation de bureau à distance — le bureau s'exécute sur un serveur distant, l'utilisateur utilise un client léger (VDI, RDS)."
    },
    {
      type: "multi",
      text: "Quels avantages offre le DaaS (Desktop as a Service) par rapport au VDI traditionnel ? (plusieurs réponses)",
      options: ["Déploiement rapide et simple des logiciels et des OS", "Augmentation de la mobilité des utilisateurs (connexion à distance depuis partout)", "Contrôle total de l'infrastructure par l'entreprise", "Flexibilité face aux demandes des utilisateurs et scalabilité facile"],
      correct: [0, 1, 3],
      explanation: "Le DaaS offre : déploiement rapide, mobilité accrue (accès depuis n'importe où), et scalabilité flexible. En revanche, l'entreprise n'a pas de contrôle total sur l'infrastructure — c'est le fournisseur DaaS qui gère tous les problèmes de connectivité et d'infrastructure."
    }
  ],
  flashcards: [
    { term: "Virtualisation des applications", def: "Solution qui sépare l'utilisation d'une application de son environnement matériel et logiciel d'exécution, pour réduire la complexité de gestion et de déploiement des applications dans un SI. Résout les problèmes de DLL conflicts, incompatibilités, migration difficile." },
    { term: "4 méthodes de virtualisation d'applications", def: "1) Via une VM (couche d'abstraction → portabilité entre OS) ; 2) Dans un espace utilisateur (package autonome sur OS hôte) ; 3) Isolation de processus (conteneurs, partage du noyau hôte) ; 4) Basée sur le Cloud (hébergement distant, accès via navigateur)." },
    { term: "Virtualisation en espace utilisateur", def: "Encapsule l'application et TOUTES ses dépendances dans un package autonome qui s'exécute directement sur l'OS hôte sans installation. Créé par capture d'instantanés du système (avant/après installation). Aucun conflit avec d'autres applications. Outils : ThinApp, App-V, Turbo Studio, Cameyo." },
    { term: "Package autonome", def: "Archive créée par capture d'instantanés du système (snapshot avant/après installation). Contient l'application + toutes ses dépendances (registre, DLL, fichiers de config). S'exécute sans installation, sans modifier le système hôte, sans conflit." },
    { term: "Conflits de DLL (DLL Hell)", def: "Problème classique d'installation : deux applications nécessitant des versions incompatibles de la même DLL (Dynamic Link Library). La virtualisation en espace utilisateur résout ce problème en encapsulant les dépendances dans un package isolé." },
    { term: "Modes de stockage : fichier, bloc, objet", def: "Mode fichier : accès hiérarchique (répertoires/fichiers) via NFS ou SMB. Mode bloc : accès bas niveau en blocs bruts via iSCSI ou Fibre Channel (comme un disque local). Mode objet : accès via API HTTP (clé-valeur), pour le stockage cloud à grande échelle (ex: S3)." },
    { term: "Virtualisation d'applications Cloud", def: "Applications hébergées sur le Cloud et accessibles via un navigateur ou un client léger. Aucune installation locale requise. Le fournisseur gère l'infrastructure et les mises à jour. Exemples : Google Workspace, Office 365 en mode web, Salesforce." },
    { term: "VDI (Virtual Desktop Infrastructure)", def: "Virtualisation des postes de travail sur des serveurs centraux. L'utilisateur se connecte à son bureau virtuel depuis n'importe quel terminal léger. Gestion centralisée, sécurité renforcée, BYOD facilité. Exemples : Citrix Virtual Apps & Desktops, VMware Horizon." },
    { term: "Streaming d'applications (App-V)", def: "Transmission à la demande des composants d'une application depuis un serveur vers le client, sans installation locale complète. Seule la partie utilisée est téléchargée. Exemple : Microsoft App-V. Optimise l'utilisation du réseau et simplifie la gestion." },
    { term: "Snapshot de séquençage", def: "Mécanisme de création d'un package de virtualisation : snapshot avant installation → installation normale de l'application → snapshot après → la différence = le package autonome. Utilisé par ThinApp, App-V, Turbo Studio." },
    { term: "Outils de virtualisation d'apps (espace utilisateur)", def: "VMware ThinApp : crée un exécutable autonome portable. Microsoft App-V : streaming + virtualisation. Turbo Studio : packages multi-platefomes. Cameyo : virtualisation cloud d'apps Windows. Tous évitent les conflits DLL et les installations." },
    { term: "VDI Persistant vs Non-persistant", def: "Persistant : chaque utilisateur a sa VM dédiée, les modifications sont sauvegardées entre sessions (données personnalisées conservées). Non-persistant : la VM revient à son état d'origine après chaque session (modifications supprimées). Non-persistant = administration simplifiée (une image maître), persistant = meilleure expérience utilisateur." },
    { term: "RDS (Remote Desktop Services) / RDSH", def: "Technologie Microsoft : utilisateurs se connectent via RDP (Remote Desktop Protocol) à un serveur Windows distant (Terminal Server). Le RDSH (Remote Desktop Session Host) permet plusieurs utilisateurs simultanément avec mutualisation des ressources. Moins coûteux que VDI mais bureau partagé, pas individuel." },
    { term: "DaaS (Desktop as a Service)", def: "Bureau virtuel fourni comme service Cloud, accessible via Internet, avec abonnement par utilisateur. Le fournisseur gère toute l'infrastructure. Exemples : Amazon Workspaces (Linux/Windows), Azure Virtual Desktop (Windows), Citrix Managed Desktops. Vs VDI : hébergement externe, déploiement rapide, frais mensuels." },
    { term: "OS Streaming", def: "Technologie de virtualisation des postes (Citrix, VMware) : l'OS est streamé depuis un serveur réseau. Le BIOS démarre sur le réseau, télécharge les fichiers nécessaires en mémoire vive. Configuration réinitialisée à chaque démarrage. Avantage : administration centralisée (une seule image maître pour tous les postes)." },
    { term: "VDI (Virtual Desktop Infrastructure) — types d'attribution", def: "Deux modes d'attribution VM : (1) Image dédiée — un seul bureau par serveur (pour applications gourmandes en ressources) ; (2) Bassin d'images (pool) — un serveur contient plusieurs VMs, affectation statique (toujours la même VM) ou dynamique (VM assignée à la connexion). Chaque utilisateur a accès à son bureau sécurisé." }
  ]
};
