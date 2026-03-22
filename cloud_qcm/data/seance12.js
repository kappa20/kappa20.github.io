// Séance 12 — Infrastructure as Code (IaC) — Ansible
const SEANCE_12 = {
  id: 12,
  title: "Infrastructure as Code (IaC)",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce que l'Infrastructure en tant que Code (IaC) ?",
      options: [
        "L'écriture d'applications directement sur des serveurs physiques",
        "La gestion et le provisionnement de l'infrastructure via des fichiers de configuration versionnés",
        "L'installation manuelle de logiciels sur chaque serveur",
        "Un protocole de communication entre centres de données"
      ],
      correct: [1],
      explanation: "L'IaC (Infrastructure as Code) consiste à gérer et provisionner l'infrastructure informatique via des fichiers de configuration versionnés (code), plutôt que par des processus manuels."
    },
    {
      type: "single",
      text: "Ansible est principalement :",
      options: [
        "Un langage de programmation orienté objet",
        "Un outil de gestion de configuration et d'Infrastructure as Code (IaC)",
        "Une base de données NoSQL",
        "Un système d'exploitation pour serveurs"
      ],
      correct: [1],
      explanation: "Ansible est principalement un outil de gestion de configuration. Il gère aussi l'Infrastructure as Code (IaC) et permet d'automatiser le provisioning, la configuration et l'orchestration."
    },
    {
      type: "multi",
      text: "Quelles tâches Ansible permet-il d'automatiser ? (plusieurs réponses)",
      options: [
        "Le Provisioning (IaC) — création de ressources Cloud",
        "La Gestion de Configuration — installer des services, gérer les fichiers de config",
        "L'Orchestration — coordonner des tâches sur plusieurs serveurs",
        "La compilation du code source en binaire"
      ],
      correct: [0, 1, 2],
      explanation: "Ansible automatise : le Provisioning (IaC), la Gestion de Configuration (installer services, gérer configs), et l'Orchestration (coordonner des tâches multi-serveurs). La compilation n'est pas son domaine."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Playbook Ansible ?",
      options: [
        "Un manuel d'utilisation de l'application",
        "Un fichier YAML décrivant l'état souhaité de l'infrastructure qu'Ansible exécutera automatiquement",
        "Un script Python de surveillance des serveurs",
        "Un tableau de bord de visualisation des métriques"
      ],
      correct: [1],
      explanation: "Un Playbook Ansible est un fichier YAML utilisé pour décrire l'état souhaité de l'infrastructure. Ansible lit ce fichier et l'exécute automatiquement sur les machines cibles."
    },
    {
      type: "single",
      text: "Ansible est dit 'agentless', ce qui signifie :",
      options: [
        "Il n'a pas besoin de connexion réseau",
        "Il n'installe aucun logiciel agent sur les nœuds qu'il gère",
        "Il fonctionne sans interface utilisateur",
        "Il ne nécessite pas de fichiers de configuration"
      ],
      correct: [1],
      explanation: "Ansible est agentless (sans agent), ce qui signifie qu'il n'installe aucun logiciel sur les nœuds qu'il gère. Il utilise SSH pour se connecter et effectuer les tâches."
    },
    {
      type: "multi",
      text: "Quelles sont les responsabilités du Node Manager (Control Node) dans Ansible ? (plusieurs réponses)",
      options: [
        "Interpréter les fichiers YAML (Playbooks) et les transformer en instructions",
        "Décider de l'ordre d'exécution des tâches sur les serveurs",
        "Centraliser les logs et afficher un résumé global",
        "Stocker toutes les données des applications déployées"
      ],
      correct: [0, 1, 2],
      explanation: "Le Node Manager (Control Node) : interprète les Playbooks YAML, décide de l'ordre d'exécution, génère les modules Python nécessaires, et centralise les logs. Il ne stocke pas les données des applications."
    },
    {
      type: "single",
      text: "Quel est l'inconvénient principal du déploiement classique d'infrastructure sans IaC ?",
      options: [
        "Trop grande rapidité de déploiement",
        "Installation individuelle, erreurs humaines et difficulté de reproduction",
        "Coût des licences Ansible trop élevé",
        "Incompatibilité avec les environnements Cloud"
      ],
      correct: [1],
      explanation: "Le déploiement classique (connexion SSH manuelle à chaque serveur) entraîne : installation individuelle longue, risque élevé d'erreurs humaines, et difficulté de reproduction de la configuration."
    },
    {
      type: "multi",
      text: "Quels sont les composants clés de l'architecture Ansible ? (plusieurs réponses)",
      options: ["Inventory", "Playbook", "Gather Facts", "Module", "Pipeline"],
      correct: [0, 1, 2, 3],
      explanation: "Les composants clés d'Ansible : Inventory (liste des machines), Playbook (fichier principal), Gather Facts (collecte d'infos), Module (outil pour une tâche précise). Pipeline est un concept CI/CD, pas un composant Ansible."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'Inventory dans Ansible ?",
      options: [
        "Un fichier listant les tâches à exécuter dans l'ordre",
        "Un fichier contenant la liste des hôtes à gérer, avec leurs adresses IP, noms d'hôte et groupes",
        "Un registre d'images Docker pour les déploiements",
        "Un tableau de bord des performances des serveurs"
      ],
      correct: [1],
      explanation: "Le fichier inventaire (inventory.yml) contient la liste des hôtes à gérer avec leurs adresses IP, noms d'hôte, groupes, etc. Il existe deux types : l'inventaire statique (fichiers plats) et l'inventaire dynamique."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Module Ansible ?",
      options: [
        "Un fichier de configuration des variables globales",
        "L'unité de base de l'automatisation pour exécuter une tâche précise (installer paquets, configurer services, gérer fichiers)",
        "Un rapport de synthèse généré après l'exécution du playbook",
        "Un plugin de monitoring des machines cibles"
      ],
      correct: [1],
      explanation: "Un Module est l'unité de base de l'automatisation pour exécuter une tâche précise. Il existe plus de 1000 modules classés par catégorie : Système (apt, yum, service, user), Réseau, Fichiers, Conteneurs, Cloud."
    },
    {
      type: "multi",
      text: "Quelles catégories de modules Ansible sont mentionnées dans le cours ? (plusieurs réponses)",
      options: [
        "Système (apt, yum, service, user)",
        "Réseau (ping, setup)",
        "Fichiers (copy, file, template)",
        "Cloud (ec2, azure_rm, gcp)",
        "Machine Learning (sklearn, tensorflow)"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les catégories de modules Ansible sont : Système, Réseau, Fichiers, Conteneurs (Docker, Kubernetes), et Cloud (ec2, azure_rm, gcp). Le Machine Learning n'est pas une catégorie de modules Ansible."
    },
    {
      type: "single",
      text: "Que fait l'option 'gather_facts' dans un Playbook Ansible ?",
      options: [
        "Elle collecte automatiquement des informations sur les machines cibles avant d'exécuter les tâches (OS, IP, CPU/RAM, etc.)",
        "Elle archive les logs d'exécution du playbook",
        "Elle télécharge les modules nécessaires depuis internet",
        "Elle vérifie la syntaxe YAML du playbook avant exécution"
      ],
      correct: [0],
      explanation: "gather_facts permet à Ansible de collecter automatiquement des informations sur les machines cibles avant d'exécuter les tâches : système d'exploitation, adresse IP, nom de machine, CPU/RAM, disques, interfaces réseau."
    },
    {
      type: "multi",
      text: "Quelles informations sont collectées par gather_facts dans Ansible ? (plusieurs réponses)",
      options: [
        "Système d'exploitation (Ubuntu, CentOS...)",
        "Adresse IP et interfaces réseau",
        "CPU / RAM et disques",
        "Historique des commits Git",
        "Nom de la machine"
      ],
      correct: [0, 1, 2, 4],
      explanation: "gather_facts collecte : le système d'exploitation, l'adresse IP, le nom de la machine, CPU/RAM, les disques, et les interfaces réseau. L'historique Git n'est pas une information collectée par Ansible."
    },
    {
      type: "single",
      text: "Dans Ansible, quelle est la différence entre les Variables système (facts) et les Variables utilisateurs ?",
      options: [
        "Les variables système sont définies par l'utilisateur, les variables utilisateurs sont automatiques",
        "Les variables système (facts) sont récupérées automatiquement via gather_facts, les variables utilisateurs sont définies manuellement dans le playbook ou un fichier externe",
        "Les deux types sont identiques, seul le nom diffère",
        "Les variables système stockent les logs, les variables utilisateurs stockent les métriques"
      ],
      correct: [1],
      explanation: "Les Variables système (facts) sont récupérées automatiquement avec gather_facts (ex: ansible_hostname, ansible_os_family). Les Variables utilisateurs sont définies manuellement avec 'vars:' ou dans un fichier externe (vars/main.yaml)."
    },
    {
      type: "single",
      text: "Qu'est-ce que Jinja2 dans le contexte d'Ansible ?",
      options: [
        "Un langage de programmation pour écrire des modules Ansible",
        "Un moteur de templates utilisé pour créer des fichiers de configuration dynamiques et réutilisables",
        "Un outil de monitoring des performances des playbooks",
        "Un format de base de données pour stocker l'inventaire"
      ],
      correct: [1],
      explanation: "Jinja2 est un moteur de templates utilisé dans Ansible pour créer des fichiers de configuration dynamiques et réutilisables. Les variables sont injectées avec {{ variable }}. Les fichiers template portent l'extension .j2."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Handler dans Ansible ?",
      options: [
        "Un composant qui gère la connexion SSH vers les machines cibles",
        "Une action déclenchée automatiquement après une modification (ex: redémarrer Apache après une modification de sa configuration)",
        "Un module pour gérer les fichiers de log",
        "Un outil de gestion des versions du playbook"
      ],
      correct: [1],
      explanation: "Un Handler dans Ansible est une action déclenchée automatiquement après une modification. Par exemple, si la configuration d'Apache est modifiée, un handler peut redémarrer le service Apache automatiquement."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Role dans Ansible ?",
      options: [
        "Le niveau de privilège (sudo) accordé à Ansible sur les machines cibles",
        "Une structure organisée et réutilisable regroupant playbooks, variables, templates et handlers pour une fonction spécifique",
        "Un type d'inventaire dynamique pour AWS",
        "Un rapport de conformité généré après déploiement"
      ],
      correct: [1],
      explanation: "Un Role dans Ansible est une structure organisée et réutilisable. Il regroupe l'ensemble des éléments nécessaires (playbooks, variables, templates, handlers) pour accomplir une fonction spécifique, facilitant la réutilisation."
    }
  ],
  flashcards: [
    { term: "IaC (Infrastructure as Code)", def: "Pratique qui consiste à gérer et provisionner l'infrastructure (serveurs, réseaux, BDD) via des fichiers de configuration versionnés (code YAML/JSON/HCL), plutôt que par des processus manuels. Rend l'infra reproductible, auditée, et versionnée comme du code." },
    { term: "Ansible (agentless)", def: "Outil de gestion de configuration et d'IaC open source (Red Hat). AGENTLESS : aucun logiciel à installer sur les machines cibles, utilise SSH (Linux) ou WinRM (Windows). Langage : YAML. Fichier central : le Playbook. Contrairement à Chef/Puppet qui nécessitent un agent." },
    { term: "Playbook Ansible", def: "Fichier YAML décrivant l'état souhaité de l'infrastructure. Contient des Plays (groupe de tâches + hôtes ciblés), des Tasks (actions à effectuer), des Variables, des Handlers. Propriété clé : idempotence (même résultat si exécuté plusieurs fois)." },
    { term: "Idempotence (Ansible)", def: "Propriété fondamentale d'un Playbook : l'exécuter plusieurs fois produit toujours le même résultat sans effets secondaires. Si l'état désiré est déjà atteint, Ansible ne refait pas l'action. Permet d'appliquer un playbook en toute sécurité sur un environnement existant." },
    { term: "Inventory Ansible", def: "Fichier (INI ou YAML) listant toutes les machines cibles (hosts) gérées par Ansible, organisées en groupes. Statique : fichier texte local. Dynamique : script interrogeant AWS, GCP, Azure pour obtenir les hôtes en temps réel." },
    { term: "Node Manager (Control Node)", def: "Machine sur laquelle Ansible est installé. Interprète les Playbooks YAML → génère des modules Python → les envoie via SSH aux Managed Nodes → collecte les résultats → affiche un résumé (recap). Aucun agent requis sur les cibles." },
    { term: "Module Ansible", def: "Unité d'automatisation exécutant une tâche précise. +1000 modules disponibles. Catégories : Système (apt, yum, service, user), Fichiers (copy, file, template), Réseau (ping, setup), Conteneurs (docker_container), Cloud (ec2, azure_rm, gcp_compute_instance)." },
    { term: "gather_facts (Ansible)", def: "Collecte automatique d'informations sur les machines cibles AVANT d'exécuter les tâches. Données collectées : OS (ansible_os_family), IP (ansible_default_ipv4.address), hostname (ansible_hostname), CPU/RAM, disques, interfaces réseau. Stockées dans des variables 'facts'." },
    { term: "Variables système (facts) vs Variables utilisateurs", def: "Facts (système) : collectées automatiquement par gather_facts, ex: ansible_hostname, ansible_os_family. Variables utilisateurs : définies manuellement dans le playbook (vars:) ou un fichier externe (vars/main.yaml) pour personnaliser l'exécution." },
    { term: "Jinja2 (Ansible)", def: "Moteur de templates Python utilisé pour créer des fichiers de configuration dynamiques. Les variables sont injectées avec {{ variable }}. Exemple : template Nginx avec le port configuré dynamiquement. Fichiers templates : extension .j2." },
    { term: "Handler (Ansible)", def: "Tâche spéciale déclenchée UNIQUEMENT quand une autre tâche signale un changement via notify. Exemple classique : redémarrer Apache (notify: Restart Apache) seulement si le fichier de config a été modifié. Évite les redémarrages inutiles = optimisation." },
    { term: "Role Ansible", def: "Structure organisée et réutilisable regroupant playbooks, tasks, variables, templates, handlers et fichiers pour une fonction spécifique (ex: déployer Nginx, configurer MySQL, installer Docker). Facilite la réutilisation entre projets et le partage via Ansible Galaxy." }
  ]
};
