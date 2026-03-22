// Séance 5 — Conteneurs & Virtualisation Espace Utilisateur
const SEANCE_5 = {
  id: 5,
  title: "Conteneurs & App Virtuelles",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce qu'un conteneur ?",
      options: ["Un type d'hyperviseur de type 2", "Une méthode de virtualisation basée sur l'isolation de processus, partageant le noyau de l'OS hôte", "Un logiciel de sauvegarde des VMs", "Un hyperviseur de type 1"],
      correct: [1],
      explanation: "Un conteneur est une méthode de virtualisation basée sur l'isolation de processus. Contrairement à une VM, il partage le noyau du système d'exploitation hôte mais isole les processus."
    },
    {
      type: "multi",
      text: "Quelles sont les limites de la virtualisation dans un espace utilisateur (ex: ThinApp) ? (plusieurs réponses)",
      options: ["Limitée à un système d'exploitation spécifique", "Certaines applications ne peuvent pas être virtualisées (antivirus, pilotes)", "Nécessite une machine physique pour le séquençage ou la capture", "Incompatible avec tous les systèmes Windows"],
      correct: [0, 1, 2],
      explanation: "Les limites incluent : limitation à un OS spécifique, impossibilité de virtualiser certaines apps (antivirus, pilotes), nécessité d'une machine cible pour le séquençage. Ce n'est pas incompatible avec tous les Windows."
    },
    {
      type: "single",
      text: "La virtualisation basée sur les conteneurs est aussi appelée :",
      options: ["Virtualisation de stockage", "Virtualisation basée sur l'isolation des processus", "Virtualisation totale", "Paravirtualisation"],
      correct: [1],
      explanation: "La virtualisation basée sur les conteneurs est aussi appelée virtualisation basée sur l'isolation des processus. Elle isole les environnements d'exécution, le tout étant géré par un unique noyau, celui du host."
    },
    {
      type: "multi",
      text: "Quelles fonctionnalités du noyau Linux permettent l'isolation de processus dans les conteneurs ? (plusieurs réponses)",
      options: ["Les espaces de noms (namespace)", "Les contrôles de groupe de processus (cgroups)", "Changer le répertoire racine (chroot)", "Le système RAID", "LVM (Logical Volume Manager)"],
      correct: [0, 1, 2],
      explanation: "L'isolation de processus est réalisée grâce aux fonctionnalités du noyau Linux : namespaces, cgroups, et chroot. RAID et LVM concernent le stockage."
    },
    {
      type: "single",
      text: "Que font les namespaces dans le contexte des conteneurs ?",
      options: ["Ils compressent les fichiers de l'application", "Ils créent un contexte système isolé pour le processus ciblé afin qu'il ne puisse pas accéder aux ressources des autres processus", "Ils gèrent la quantité de CPU allouée à chaque processus", "Ils configurent le réseau virtuel entre conteneurs"],
      correct: [1],
      explanation: "Les namespaces créent un contexte système isolé pour le processus ciblé afin qu'il ne puisse pas voir ou accéder aux ressources des autres processus."
    },
    {
      type: "multi",
      text: "Quels types de namespaces existent dans le noyau Linux ? (plusieurs réponses)",
      options: ["user namespace (IDs utilisateurs et groupes)", "PID namespace (Process ID indépendant)", "Network namespace (table de routage, adresses IP isolées)", "Mount namespace (points de montage indépendants)", "UTS namespace (hostname et nom de domaine isolés)", "IPC namespace (communication interprocessus)"],
      correct: [0, 1, 2, 3, 4, 5],
      explanation: "Le noyau Linux offre 6 types de namespaces : user (UIDs/GIDs), PID, Network, Mount, UTS (hostname/domaine via UNIX Time-Sharing), IPC (communication interprocessus)."
    },
    {
      type: "single",
      text: "Quel namespace permet à chaque conteneur d'avoir son propre hostname indépendant ?",
      options: ["PID namespace", "Mount namespace", "UTS namespace (UNIX Time-Sharing)", "IPC namespace"],
      correct: [2],
      explanation: "UTS namespace (UNIX Time-Sharing) permet à chaque processus d'avoir son propre nom d'hôte (hostname) et son propre nom de domaine, indépendants du système hôte."
    },
    {
      type: "single",
      text: "Que sont les cgroups (contrôles de groupe de processus) ?",
      options: ["Un système de fichiers distribué pour les conteneurs", "Une fonctionnalité du noyau Linux qui permet de gérer, limiter, surveiller et isoler l'utilisation des ressources d'un ensemble de processus", "Un protocole réseau pour la communication entre conteneurs", "Un type de namespace pour isoler les processus"],
      correct: [1],
      explanation: "Les cgroups sont une fonctionnalité du noyau Linux permettant de gérer, limiter, surveiller et isoler l'utilisation des ressources (CPU, mémoire, E/S disque, réseau) d'un ensemble de processus."
    },
    {
      type: "multi",
      text: "Quelles sont les 4 fonctionnalités offertes par les cgroups ? (plusieurs réponses)",
      options: ["Limitation : limiter la quantité d'une ressource (mémoire, CPU)", "Priorité : contrôler la quantité de ressource en cas de conflit", "Surveillance : surveiller et signaler les limites de ressources", "Contrôle : modifier l'état (gelé, arrêté, redémarré) de tous les processus d'un cgroup"],
      correct: [0, 1, 2, 3],
      explanation: "Les cgroups offrent 4 fonctionnalités : Limitation (quota de ressources), Priorité (contrôle en cas de conflit), Surveillance (monitoring des limites), et Contrôle (geler/arrêter/redémarrer)."
    },
    {
      type: "single",
      text: "Que fait la commande chroot ?",
      options: ["Elle crée un nouveau namespace réseau", "Elle change le répertoire racine vers un nouvel emplacement, emprisonnant l'exécution des processus dans ce contexte", "Elle compresse les fichiers d'un conteneur", "Elle migre un conteneur vers un autre hôte"],
      correct: [1],
      explanation: "La commande chroot permet de changer le répertoire racine vers un nouvel emplacement. Après modification, le processus ne peut plus accéder aux fichiers plus haut dans la hiérarchie — on emprisonne l'exécution dans son contexte."
    },
    {
      type: "single",
      text: "Quelles sont les deux approches principales des conteneurs ?",
      options: ["Approche Réseau et Approche Stockage", "Approche Système (OpenVZ, LXC) et Approche Processus (Docker)", "Approche Hyperviseur et Approche Émulation", "Approche Type 1 et Approche Type 2"],
      correct: [1],
      explanation: "Il existe deux approches de conteneurs : l'Approche Système (exemples : OpenVZ, LinuX Containers LXC) et l'Approche Processus (exemple : Docker)."
    },
    {
      type: "single",
      text: "Comment OpenVZ appelle-t-il ses conteneurs ?",
      options: ["Machines virtuelles (VM)", "Virtual Private Servers (VPS)", "Docker containers", "Pods Kubernetes"],
      correct: [1],
      explanation: "OpenVZ est une solution de virtualisation Open Source développée par Parallels Virtuozzo. Ses conteneurs sont appelés Virtual Private Servers (VPS). Il n'y a aucune charge supplémentaire due à une émulation."
    },
    {
      type: "multi",
      text: "Quelles technologies OpenVZ intègre-t-il pour isoler les conteneurs ? (plusieurs réponses)",
      options: ["Les espaces de noms (namespaces)", "Les cgroups", "Les chroots", "L'hyperviseur de type 1", "Le Fibre Channel"],
      correct: [0, 1, 2],
      explanation: "OpenVZ a intégré les namespaces, les cgroups et les chroots pour isoler les conteneurs les uns des autres et du système hôte. Il utilise le noyau Linux de l'hôte (modifié)."
    },
    {
      type: "single",
      text: "Quelle est la différence fondamentale entre un conteneur et une machine virtuelle (VM) ?",
      options: ["Un conteneur nécessite un hyperviseur, une VM non", "Un conteneur partage le noyau de l'OS hôte et isole les processus, une VM émule un ordinateur complet avec son propre OS invité", "Un conteneur est plus lent qu'une VM", "Une VM est plus légère qu'un conteneur"],
      correct: [1],
      explanation: "Un conteneur partage le noyau de l'OS hôte et ne virtualise que l'espace utilisateur (processus, système de fichiers, réseau). Une VM émule un ordinateur complet avec son propre OS invité via un hyperviseur. Les conteneurs sont plus légers, plus rapides au démarrage, mais moins isolés."
    },
    {
      type: "single",
      text: "Quelle est la différence entre une image Docker et un conteneur Docker ?",
      options: ["Une image est un conteneur en cours d'exécution, un conteneur est une image arrêtée", "Une image est un modèle immuable (template) définissant l'environnement, un conteneur est une instance en cours d'exécution créée depuis une image", "Une image contient les données de l'application, un conteneur contient le code source", "Il n'y a aucune différence conceptuelle"],
      correct: [1],
      explanation: "Une image Docker est un modèle statique et immuable (layers empilés) qui définit l'environnement de l'application. Un conteneur est une instance en cours d'exécution créée depuis une image. On peut créer plusieurs conteneurs à partir d'une même image."
    },
    {
      type: "single",
      text: "Qu'est-ce que Docker Hub ?",
      options: ["Un outil de monitoring des conteneurs Docker", "Un registre public de distribution d'images Docker permettant de partager et télécharger des images", "Le système de réseau interne de Docker", "Un hyperviseur spécialisé pour Docker"],
      correct: [1],
      explanation: "Docker Hub est le registre public officiel pour les images Docker. Il permet de pousser (push) et télécharger (pull) des images. On y trouve les images officielles (Ubuntu, Nginx, MySQL...) ainsi que des images de la communauté."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Dockerfile ?",
      options: ["Un fichier de configuration réseau pour les conteneurs", "Un fichier texte contenant les instructions pour construire automatiquement une image Docker (FROM, RUN, COPY, CMD...)", "Un journal des événements d'un conteneur en cours d'exécution", "Un fichier de composition de plusieurs conteneurs"],
      correct: [1],
      explanation: "Un Dockerfile est un fichier texte contenant une série d'instructions pour construire automatiquement une image Docker : FROM (image de base), RUN (commandes à exécuter), COPY (copier des fichiers), EXPOSE (ports), CMD (commande par défaut)."
    },
    {
      type: "single",
      text: "Qu'est-ce que Docker Compose ?",
      options: ["Un outil pour composer des musiques avec Docker", "Un outil permettant de définir et d'exécuter des applications multi-conteneurs via un fichier YAML (docker-compose.yml)", "Un registre d'images Docker privé", "Un hyperviseur de type 2 basé sur Docker"],
      correct: [1],
      explanation: "Docker Compose permet de définir et gérer des applications composées de plusieurs conteneurs dans un fichier docker-compose.yml. Un seul fichier décrit tous les services, réseaux et volumes. Une commande (docker-compose up) lance toute l'application."
    },
    {
      type: "multi",
      text: "Quels sont les avantages des conteneurs par rapport aux machines virtuelles ? (plusieurs réponses)",
      options: ["Démarrage plus rapide (secondes vs minutes)", "Empreinte mémoire plus légère (pas d'OS invité complet)", "Portabilité identique sur n'importe quel OS hôte", "Isolation plus forte (noyau séparé)"],
      correct: [0, 1],
      explanation: "Les conteneurs démarrent en secondes (vs minutes pour les VMs) et sont plus légers (pas d'OS invité). En revanche, leur portabilité dépend du noyau hôte (Linux requis), et leur isolation est plus faible (partage du noyau). Les VMs offrent une meilleure isolation et compatibilité OS."
    },
    {
      type: "single",
      text: "Dans Docker, qu'est-ce qu'un volume ?",
      options: ["La quantité de RAM allouée à un conteneur", "Un mécanisme de stockage persistant permettant de conserver les données même après la suppression d'un conteneur", "Un réseau virtuel entre conteneurs", "Le fichier de configuration de lancement d'un conteneur"],
      correct: [1],
      explanation: "Un volume Docker est un mécanisme de stockage persistant géré par Docker. Les données d'un volume survivent à la suppression du conteneur. Utile pour les bases de données, les fichiers de log et toute donnée devant persister entre les redémarrages."
    }
  ],
  flashcards: [
    { term: "Conteneur", def: "Méthode de virtualisation basée sur l'isolation de processus (OS-level virtualization). Partage le noyau de l'OS hôte mais isole fichiers, réseau, processus. Plus léger et plus rapide au démarrage qu'une VM. Nécessite Linux (ou WSL sur Windows)." },
    { term: "VM vs Conteneur — différences clés", def: "VM : hyperviseur + OS invité complet (lourd, démarrage ~minutes, isolation totale). Conteneur : partage le noyau hôte, isole les processus (léger, démarrage ~secondes, isolation partielle). Conteneur = plus de densité, moins de surcharge." },
    { term: "Namespaces Linux (6 types)", def: "Mécanisme d'isolation des ressources entre processus. 6 types : user (UIDs/GIDs), PID (numéros de processus), network (interfaces réseau, table de routage), mount (système de fichiers), UTS (hostname/domaine), IPC (communication inter-processus)." },
    { term: "UTS Namespace", def: "Unix Time-Sharing : permet à chaque conteneur d'avoir son propre nom d'hôte (hostname) et nom de domaine, indépendants du système physique hôte. Essentiel pour identifier chaque conteneur individuellement." },
    { term: "cgroups (control groups)", def: "Fonctionnalité du noyau Linux pour gérer l'utilisation des ressources (CPU, mémoire, E/S, réseau) d'un groupe de processus. 4 fonctions : Limitation (quota), Priorité (en cas de conflit), Surveillance (monitoring), Contrôle (geler/arrêter/redémarrer)." },
    { term: "chroot", def: "Commande Linux qui change le répertoire racine apparent d'un processus, l'isolant dans un sous-arbre du système de fichiers. Le processus ne peut plus accéder aux fichiers au-dessus de ce nouveau '/'. Mécanisme de base de l'isolation des conteneurs." },
    { term: "Docker", def: "Plateforme de conteneurisation la plus populaire (Approche Processus). Utilise namespaces + cgroups + chroot. Un conteneur Docker = une application + ses dépendances dans une image portable. Images stockées dans Docker Hub ou un registre privé." },
    { term: "OpenVZ / VPS", def: "Solution de virtualisation open source (Approche Système). Appelle ses conteneurs 'Virtual Private Servers' (VPS). Utilise namespaces + cgroups + chroots. Fonctionne avec un noyau Linux modifié 'OpenVZ'. Aucune surcharge d'émulation." },
    { term: "LXC (Linux Containers)", def: "Technologie de conteneurisation système (Approche Système) qui s'appuie nativement sur ce qui existe dans Linux (namespaces + cgroups), contrairement à OpenVZ qui utilise un noyau modifié. Plus proche d'une VM légère que Docker." },
    { term: "Conteneur Système vs Conteneur Processus", def: "Système (OpenVZ, LXC) : simule un OS complet (init, services, multi-processus), comme une VM très légère. Processus (Docker) : isole un seul processus principal (une application), plus léger, conçu pour les microservices." },
    { term: "Image Docker vs Conteneur Docker", def: "Image : modèle immuable et partageable construit par couches (layers). Conteneur : instance en cours d'exécution créée depuis une image. Analogie : Image = classe, Conteneur = instance d'objet. Une même image peut générer N conteneurs." },
    { term: "Dockerfile", def: "Fichier texte de construction automatique d'image Docker. Instructions principales : FROM (image de base), RUN (exécuter commandes au build), COPY (copier fichiers), EXPOSE (déclarer port), ENV (variable d'env), CMD (commande au démarrage du conteneur)." },
    { term: "Docker Compose", def: "Outil de gestion d'applications multi-conteneurs. Fichier docker-compose.yml décrit : services (conteneurs), réseaux et volumes. Commandes clés : docker-compose up (lancer tout), docker-compose down (arrêter), docker-compose ps (état des services)." },
    { term: "Volume Docker", def: "Stockage persistant géré par Docker, survivant à la suppression du conteneur. Types : Volume nommé (géré par Docker, recommandé), Bind Mount (répertoire hôte monté dans le conteneur). Essentiel pour les bases de données et fichiers persistants." },
    { term: "Docker Hub / Registre d'images", def: "Registre public officiel Docker. Contient des images officielles (ubuntu, nginx, mysql, python...) et de la communauté. Commandes : docker pull (télécharger), docker push (pousser), docker search (chercher). Alternative privée : Harbor, Nexus, ECR (AWS)." }
  ]
};
