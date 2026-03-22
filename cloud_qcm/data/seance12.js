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
    },
    {
      type: "single",
      text: "Quelle est la différence principale entre Ansible et Terraform ?",
      options: [
        "Terraform est pour les applications web, Ansible pour les bases de données",
        "Ansible est principalement un outil de gestion de configuration (CM), Terraform est un outil de provisionnement d'infrastructure déclaratif (IaC)",
        "Terraform nécessite des agents sur les machines, Ansible non",
        "Il n'y a aucune différence fonctionnelle"
      ],
      correct: [1],
      explanation: "Ansible est orienté gestion de configuration et orchestration : installe des logiciels, configure des services, déploie du code. Terraform est orienté provisionnement d'infrastructure (IaC déclaratif) : crée/modifie/détruit des ressources Cloud (VMs, réseaux, BDD). Ils sont souvent utilisés ensemble."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'Ansible Galaxy ?",
      options: [
        "Une interface graphique pour créer des playbooks Ansible",
        "Un dépôt public de roles et collections Ansible partagés par la communauté, téléchargeables via 'ansible-galaxy install'",
        "Un outil de monitoring des nœuds gérés par Ansible",
        "Une version d'Ansible dédiée aux environnements cloud"
      ],
      correct: [1],
      explanation: "Ansible Galaxy est le hub officiel de la communauté pour partager et découvrir des Roles et Collections Ansible. On peut télécharger un Role existant (ex: installer Nginx, configurer MySQL) avec la commande 'ansible-galaxy install nomRole' plutôt que de tout réécrire."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'Ansible Vault ?",
      options: [
        "Un coffre-fort physique pour les serveurs Ansible",
        "Un mécanisme de chiffrement des données sensibles (mots de passe, clés API) dans les fichiers Ansible",
        "Un système de sauvegarde des playbooks",
        "Une fonctionnalité de rollback automatique des déploiements"
      ],
      correct: [1],
      explanation: "Ansible Vault permet de chiffrer des fichiers ou des variables sensibles (mots de passe, clés API, certificats) dans les playbooks et inventaires. Le chiffrement est AES256. On peut exécuter un playbook avec un fichier chiffré via --vault-password-file ou --ask-vault-pass."
    },
    {
      type: "single",
      text: "Que permet l'option '--check' (dry-run) dans Ansible ?",
      options: [
        "Vérifier la syntaxe YAML du playbook uniquement",
        "Simuler l'exécution du playbook sans effectuer aucune modification réelle sur les machines cibles",
        "Vérifier la connectivité SSH vers tous les hôtes de l'inventaire",
        "Générer un rapport d'audit de l'infrastructure"
      ],
      correct: [1],
      explanation: "Le mode --check (dry-run) exécute le playbook en mode simulation : Ansible prédit les changements qu'il effectuerait sans réellement les appliquer. Utile pour vérifier l'impact d'un playbook avant de l'exécuter sur un environnement de production."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de l'IaC (Infrastructure as Code) par rapport à la gestion manuelle ? (plusieurs réponses)",
      options: [
        "Reproductibilité : même configuration déployable en dev, staging et prod",
        "Versionnement : historique des changements d'infrastructure dans Git",
        "Automatisation : déploiement rapide sans erreurs humaines",
        "Coût nul : l'infrastructure devient gratuite avec l'IaC"
      ],
      correct: [0, 1, 2],
      explanation: "L'IaC offre : reproductibilité (même playbook → même résultat sur tous les environnements), versionnement (l'infrastructure est dans Git avec son historique), et automatisation (élimine les erreurs manuelles, accélère les déploiements). L'IaC ne rend pas l'infrastructure gratuite."
    },
    {
      type: "single",
      text: "Dans un Playbook Ansible, qu'est-ce qu'un 'Play' ?",
      options: [
        "Une tâche unitaire exécutée sur un seul hôte",
        "Un bloc associant un groupe d'hôtes cibles à une liste de tâches à exécuter sur eux",
        "Un fichier de variables importé dans le playbook",
        "Un module d'automatisation d'une action spécifique"
      ],
      correct: [1],
      explanation: "Un Play est la structure fondamentale d'un Playbook Ansible : il associe une liste d'hôtes cibles (from inventory) à une séquence de tâches à exécuter. Un Playbook peut contenir plusieurs Plays, chacun ciblant des hôtes différents avec des tâches différentes."
    },
    {
      type: "single",
      text: "Quelle commande Ansible crée automatiquement la structure standardisée d'un Role ?",
      options: [
        "ansible-playbook --init-role apache",
        "ansible-galaxy init apache",
        "ansible role create apache",
        "ansible-vault create --role apache"
      ],
      correct: [1],
      explanation: "ansible-galaxy init apache crée automatiquement la structure de dossiers standardisée d'un Role : defaults/main.yml (variables par défaut), vars/main.yml (variables), tasks/main.yml (tâches), handlers/main.yml (handlers), templates/ (templates Jinja2), files/, meta/main.yml. Ansible Galaxy est aussi le hub communautaire pour partager des Roles."
    },
    {
      type: "single",
      text: "Dans Ansible, quand un Handler est-il déclenché après une Task ?",
      options: [
        "À chaque exécution du playbook, indépendamment des changements effectués",
        "Uniquement quand la Task signale un changement effectif via le mot-clé 'notify'",
        "Après l'exécution de chaque Task, en séquence automatique",
        "Uniquement si la Task échoue avec une erreur"
      ],
      correct: [1],
      explanation: "Un Handler est déclenché UNIQUEMENT quand une Task signale un changement réel via notify. Si l'état est déjà atteint (idempotence), Ansible ne modifie rien → la Task ne signale pas de changement → le Handler ne s'exécute pas. Exemple : notify: redémarrer apache → Apache redémarre SEULEMENT si le fichier de config a réellement été modifié. Évite les redémarrages inutiles."
    },
    {
      type: "single",
      text: "Que signifie techniquement 'become: yes' dans un Playbook Ansible ?",
      options: [
        "Active le mode simulation (dry-run) pour prévisualiser les changements",
        "Permet à Ansible de se connecter en SSH sans mot de passe via clé publique",
        "Exécute les tâches avec les privilèges sudo (élévation de privilèges) sur les machines cibles",
        "Active la collecte des facts (gather_facts) automatiquement avant les tâches"
      ],
      correct: [2],
      explanation: "become: yes indique à Ansible d'exécuter les tâches avec élévation de privilèges (sudo) sur les machines cibles. Nécessaire pour les opérations système : installer des paquets (apt, yum), démarrer des services (service), configurer des fichiers système. Sans become: yes, les tâches s'exécutent avec les droits de l'utilisateur SSH de connexion."
    },
    {
      type: "single",
      text: "Dans un module Ansible, quelle est la différence entre 'state: present' et 'state: started' ?",
      options: [
        "state: present vérifie que le service tourne, state: started installe le paquet",
        "state: present garantit que le paquet est installé (apt/yum), state: started garantit que le service est en cours d'exécution (module service)",
        "Les deux sont identiques, seul le contexte du module diffère",
        "state: present est pour les fichiers, state: started est pour les variables"
      ],
      correct: [1],
      explanation: "state: present (module apt/yum) : le paquet doit être installé — si déjà installé, rien ne se passe (idempotence). state: started (module service) : le service doit être en cours d'exécution — le démarre s'il est arrêté. Exemple playbook : 1) apt name: apache2 state: present → installe Apache. 2) service name: apache2 state: started → démarre Apache."
    },
    {
      type: "single",
      text: "Quelle est la syntaxe Jinja2 correcte pour une variable conditionnelle dans Ansible, choisissant le paquet Apache selon l'OS ?",
      options: [
        "{{ if ansible_os_family == 'Debian' then 'apache2' else 'httpd' }}",
        "{% select 'apache2' when Debian, 'httpd' when RedHat %}",
        "{{ 'apache2' if ansible_os_family == 'Debian' else 'httpd' }}",
        "{{ ansible_os_family | match('Debian') | ternary('apache2', 'httpd') }}"
      ],
      correct: [2],
      explanation: "La syntaxe Jinja2 pour une expression conditionnelle inline est : {{ 'valeur_si_vrai' if condition else 'valeur_si_faux' }}. Exemple : {{ 'apache2' if ansible_os_family == 'Debian' else 'httpd' }} → retourne 'apache2' sur Debian/Ubuntu, 'httpd' sur RedHat/CentOS. Les variables Jinja2 sont toujours entre {{ }}, les blocs de contrôle entre {% %}."
    },
    {
      type: "multi",
      text: "Quelles sont les différences entre un inventaire statique et un inventaire dynamique dans Ansible ? (plusieurs réponses)",
      options: [
        "Inventaire statique : fichier texte plat (INI ou YAML) maintenu manuellement",
        "Inventaire dynamique : script qui interroge AWS, GCP, Azure en temps réel pour obtenir la liste des hôtes",
        "L'inventaire dynamique est obligatoire pour les environnements Cloud",
        "L'inventaire statique ne supporte pas les groupes d'hôtes"
      ],
      correct: [0, 1],
      explanation: "Inventaire statique : fichier(s) plats (YAML ou INI) avec liste fixe d'hôtes — simple mais pas adapté aux environnements Cloud où les IPs changent. Inventaire dynamique : script ou plugin qui interroge une API (AWS EC2, GCP, Azure) en temps réel pour récupérer les hôtes actuels — essentiel pour l'IaC Cloud. Les deux supportent les groupes d'hôtes."
    },
    {
      type: "single",
      text: "Quelle est la syntaxe correcte pour exécuter un playbook Ansible avec un inventaire personnalisé ?",
      options: [
        "ansible run --inventory inventory.yaml deploy_apache.yaml",
        "ansible-playbook -i inventory.yaml deploy_apache.yaml",
        "ansible-run deploy_apache.yaml --hosts inventory.yaml",
        "ansible deploy_apache.yaml --inventory-file=inventory.yaml"
      ],
      correct: [1],
      explanation: "La commande est : ansible-playbook -i inventory.yaml deploy_apache.yaml. -i (ou --inventory) spécifie le fichier d'inventaire ; le fichier playbook vient ensuite. Options courantes : --check (dry-run), --diff (affiche les différences), --ask-vault-pass (pour les fichiers Vault chiffrés), -v/-vvv (verbosité). Exemple complet : ansible-playbook -i inventory.yaml site.yml --check --diff"
    },
    {
      type: "single",
      text: "Qu'est-ce que Terraform et quel langage utilise-t-il pour décrire l'infrastructure ?",
      options: [
        "Un outil de gestion de configuration procédural, utilisant YAML comme Ansible",
        "Un outil IaC déclaratif open source développé par HashiCorp en 2014, utilisant HCL (HashiCorp Configuration Language)",
        "Un orchestrateur de conteneurs développé par Google en 2015, utilisant JSON",
        "Un outil CI/CD développé par JetBrains, utilisant Groovy DSL comme Jenkins"
      ],
      correct: [1],
      explanation: "Terraform est un outil Infrastructure as Code (IaC) open source développé par HashiCorp en 2014. Il utilise HCL (HashiCorp Configuration Language), un langage DÉCLARATIF à syntaxe clés-valeurs. Contrairement à Ansible (procédural, gestion de configuration), Terraform se concentre sur le provisionnement déclaratif : on décrit l'état final désiré, Terraform calcule comment l'atteindre."
    },
    {
      type: "multi",
      text: "Quels sont les 4 composants principaux de l'architecture Terraform ? (plusieurs réponses)",
      options: [
        "Terraform Core — orchestre l'ensemble des opérations entre configuration, providers et état",
        "Provider plugins — plugins connectant Terraform aux APIs des plateformes cloud (AWS, GCP, Azure...)",
        "State file — fichier JSON enregistrant l'état actuel de l'infrastructure gérée",
        "Configuration files — fichiers HCL décrivant l'infrastructure souhaitée (main.tf, variables.tf...)",
        "Ansible Galaxy — dépôt de modules réutilisables pour Terraform"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'architecture Terraform repose sur 4 composants : (1) Terraform Core — orchestre les interactions entre configuration, providers et état ; (2) Provider plugins — connectent aux APIs cloud ; (3) State file (terraform.tfstate) — enregistre l'état actuel ; (4) Configuration files (HCL) — main.tf, providers.tf, variables.tf, outputs.tf. Ansible Galaxy est un dépôt Ansible, pas Terraform."
    },
    {
      type: "single",
      text: "Quel est l'ordre correct du workflow Terraform ?",
      options: [
        "Init → Write → Plan → Apply → Destroy",
        "Write → Init → Plan → Apply → Destroy",
        "Plan → Init → Write → Apply → Destroy",
        "Write → Plan → Init → Apply → Destroy"
      ],
      correct: [1],
      explanation: "Workflow Terraform : (1) Write — écrire les fichiers de configuration HCL ; (2) Init — initialise le projet et installe les dépendances/providers nécessaires ; (3) Plan — scanne l'infrastructure existante et compare avec l'état désiré, affiche les changements sans les appliquer ; (4) Apply — applique les changements réels à l'infrastructure ; (5) Destroy — libère/supprime toute l'infrastructure."
    },
    {
      type: "single",
      text: "Que fait précisément la commande 'terraform plan' ?",
      options: [
        "Installe les providers nécessaires et initialise le répertoire de travail",
        "Applique immédiatement les changements à l'infrastructure réelle",
        "Scanne l'infrastructure existante, la compare avec l'état désiré et affiche les changements prévus sans les appliquer",
        "Génère le fichier terraform.tfstate en JSON à partir des ressources existantes"
      ],
      correct: [2],
      explanation: "terraform plan : compare l'état actuel (terraform.tfstate) avec la configuration HCL souhaitée → affiche un résumé des changements prévus (create/update/destroy) SANS les appliquer réellement. C'est l'équivalent du mode --check (dry-run) d'Ansible. Permet de valider les changements avant de les exécuter avec terraform apply."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Provider Terraform et quel est son rôle ?",
      options: [
        "Un fichier de configuration qui décrit les ressources à provisionner dans main.tf",
        "Un plugin qui connecte Terraform aux APIs des plateformes (AWS, GCP, Azure...) pour créer, lire, modifier et supprimer des ressources",
        "L'outil en ligne de commande Terraform CLI qui orchestre les opérations",
        "Le fichier d'état (JSON) qui enregistre les IDs des ressources créées"
      ],
      correct: [1],
      explanation: "Un Provider Terraform est un plugin qui connecte Terraform aux APIs d'une plateforme externe (cloud, SaaS ou infrastructure locale). Son rôle : connecter aux APIs, permettre de créer/lire/modifier/supprimer des ressources, fournir les types de ressources spécifiques. Exemples : AWS (ec2, S3...), Google Cloud (Compute Engine...), AzureRM, OpenStack, DigitalOcean."
    },
    {
      type: "single",
      text: "Qu'est-ce que le State file (terraform.tfstate) et que contient-il ?",
      options: [
        "Un script shell généré automatiquement pour rejouer les commandes Terraform",
        "Un fichier JSON enregistrant l'état actuel de l'infrastructure : IDs des ressources, dépendances et configuration au moment du dernier apply",
        "Le fichier de configuration principal décrivant les ressources à créer en HCL",
        "Un fichier YAML listant les variables d'entrée du projet Terraform"
      ],
      correct: [1],
      explanation: "terraform.tfstate est un fichier JSON généré automatiquement lors de terraform apply. Il contient : les IDs uniques de chaque ressource créée, les dépendances entre ressources (pour gérer les mises à jour dans l'ordre correct), et la configuration appliquée. Terraform l'utilise pour comparer l'état actuel avec l'état désiré lors de terraform plan. Critique : ne pas le supprimer ni le commiter en clair dans Git."
    },
    {
      type: "single",
      text: "Quel est l'avantage principal de Terraform par rapport aux outils IaC spécifiques à un cloud (ex: AWS CloudFormation) ?",
      options: [
        "Terraform est plus rapide car il utilise un langage compilé (Go) plutôt qu'un langage interprété",
        "Terraform est agnostique au fournisseur : le même code HCL peut être utilisé pour AWS, Azure et GCP via des providers différents",
        "Terraform gère automatiquement les configurations logicielles des serveurs, contrairement à CloudFormation",
        "Terraform est le seul outil IaC supportant le provisionnement déclaratif"
      ],
      correct: [1],
      explanation: "Terraform est agnostique au fournisseur (cloud-agnostic) grâce à son système de providers : le même outil et la même syntaxe HCL pour gérer AWS, Azure, GCP, OpenStack, DigitalOcean... AWS CloudFormation est limité à AWS. Avantages : portabilité, évite le Vendor Lock-in, équipes DevOps utilisent un seul outil pour toute l'infrastructure multi-cloud."
    },
    {
      type: "single",
      text: "Quelle est la différence technique entre un Data Source et une Resource dans Terraform ?",
      options: [
        "Data Source crée de nouvelles ressources, Resource lit les ressources existantes",
        "Resource définit et crée/modifie une infrastructure, Data Source récupère des informations sur des ressources existantes sans les modifier",
        "Data Source est spécifique à AWS, Resource est universelle pour tous les providers",
        "Les deux sont identiques, seul le mot-clé dans le fichier HCL diffère"
      ],
      correct: [1],
      explanation: "Resource ('resource') : crée/modifie/supprime une ressource dans l'infrastructure (ex: une instance EC2). Data Source ('data') : lit et récupère des informations sur des ressources EXISTANTES sans les modifier — similaire à gather_facts d'Ansible mais pour le Cloud. Exemple : récupérer l'ID d'un sous-réseau existant avant de créer une nouvelle instance EC2 dans ce sous-réseau."
    },
    {
      type: "single",
      text: "Qu'est-ce que la Terraform Registry et en quoi est-elle similaire à Ansible Galaxy ?",
      options: [
        "Un registre d'images Docker spécialisé pour les déploiements Terraform",
        "Une plateforme en ligne centralisant des modules Terraform réutilisables créés par la communauté — comme Ansible Galaxy pour les Roles Ansible",
        "Le serveur distant qui stocke le fichier terraform.tfstate pour les équipes distribuées",
        "L'interface web officielle HashiCorp pour visualiser et gérer les ressources créées"
      ],
      correct: [1],
      explanation: "La Terraform Registry est la plateforme officielle de modules Terraform réutilisables, analogie exacte avec Ansible Galaxy. Exemple : au lieu d'écrire manuellement le code pour déployer un cluster Kubernetes sur AWS, on trouve un module dans la Registry et on l'utilise directement. Les modules regroupent un ensemble de configurations pré-écrites pour une ressource spécifique."
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
    { term: "Role Ansible", def: "Structure organisée et réutilisable regroupant playbooks, tasks, variables, templates, handlers et fichiers pour une fonction spécifique (ex: déployer Nginx, configurer MySQL, installer Docker). Facilite la réutilisation entre projets et le partage via Ansible Galaxy." },
    { term: "Ansible vs Terraform", def: "Ansible : gestion de configuration (CM) — installe logiciels, configure services, déploie code. Procédural (comment faire). Terraform : provisionnement IaC déclaratif (HashiCorp) — crée/modifie/détruit ressources Cloud (VMs, réseaux, BDD). Déclaratif (quoi créer). Utilisés ensemble : Terraform crée l'infra, Ansible la configure." },
    { term: "Terraform (IaC déclaratif)", def: "Outil IaC open source, HashiCorp 2014. Langage : HCL (HashiCorp Configuration Language), syntaxe clés-valeurs. Architecture : Terraform Core + Provider plugins + State file (terraform.tfstate) + Configuration files (main.tf). Cloud-agnostic : même outil pour AWS, Azure, GCP via des providers." },
    { term: "Workflow Terraform (5 étapes)", def: "Write → Init → Plan → Apply → Destroy. Write : écrire les fichiers HCL. Init : installe les providers/dépendances. Plan : compare état actuel vs désiré, affiche changements SANS les appliquer (dry-run). Apply : applique les changements réels. Destroy : supprime toute l'infrastructure." },
    { term: "Provider Terraform", def: "Plugin qui connecte Terraform aux APIs d'une plateforme externe. Rôle : créer/lire/modifier/supprimer des ressources. Exemples : AWS (ec2, S3, RDS...), Google Cloud (Compute Engine, GKE...), AzureRM, OpenStack, DigitalOcean. Avantage : cloud-agnostic — même syntaxe HCL pour tous les providers." },
    { term: "State file (terraform.tfstate)", def: "Fichier JSON généré automatiquement par terraform apply. Contient : IDs uniques de chaque ressource créée, dépendances entre ressources, configuration au moment du dernier apply. Utilisé par terraform plan pour comparer état actuel vs désiré. Ne pas supprimer ni commiter en clair dans Git (contient des données sensibles)." },
    { term: "terraform plan vs terraform apply", def: "terraform plan : scanne l'infrastructure existante, compare avec la config HCL, affiche les changements prévus (+ create, ~ update, - destroy) SANS les appliquer. = dry-run de Terraform. terraform apply : exécute réellement les changements sur l'infrastructure. Bonne pratique : toujours plan avant apply en production." },
    { term: "Terraform Registry", def: "Plateforme officielle centralisant des modules Terraform réutilisables créés par la communauté. Analogie exacte avec Ansible Galaxy pour les Roles. Exemple : module pour déployer un cluster Kubernetes sur AWS en quelques lignes. registry.terraform.io. Évite de réécrire des configurations complexes." },
    { term: "Ansible Vault", def: "Mécanisme de chiffrement AES256 des données sensibles dans Ansible. Permet de commiter des mots de passe, clés API, certificats chiffrés dans Git sans les exposer. Commandes : ansible-vault encrypt/decrypt/edit. Exécution : --ask-vault-pass ou --vault-password-file." },
    { term: "Ansible Galaxy", def: "Hub communautaire officiel de Roles et Collections Ansible réutilisables. ansible-galaxy install geerlingguy.nginx installe le role Nginx de Jeff Geerling. Évite de réinventer la roue. galaxy.ansible.com = dépôt public. Collections = regroupement de roles + modules + plugins." },
    { term: "Ansible --check (Dry-run)", def: "Mode de simulation : Ansible prédit les changements sans les appliquer réellement. Essentiel avant d'exécuter un playbook en production. Combiné avec --diff : affiche les modifications ligne par ligne dans les fichiers de config. ansible-playbook site.yml --check --diff." },
    { term: "Play vs Task vs Module (Ansible)", def: "Playbook : fichier YAML principal. Play : bloc hôtes + tâches. Task : action unitaire (ex: 'Installer Nginx'). Module : outil exécutant la Task (apt, service, copy...). Hiérarchie : Playbook > Plays > Tasks > Modules. Handlers : tâches spéciales déclenchées par notify." }
  ]
};
