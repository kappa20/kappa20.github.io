// Séance 11 — Déploiement Continu CD — Kubernetes
const SEANCE_11 = {
  id: 11,
  title: "Déploiement Continu CD",
  questions: [
    {
      type: "single",
      text: "Kubernetes est :",
      options: [
        "Un système de gestion de bases de données relationnelles",
        "Une plateforme d'orchestration de conteneurs open-source créée par Google",
        "Un langage de programmation pour le Cloud",
        "Un outil de monitoring des performances réseau"
      ],
      correct: [1],
      explanation: "Kubernetes (k8s) est une plateforme d'orchestration de conteneurs open-source créée par Google. Son rôle est d'automatiser le déploiement, la mise à l'échelle et l'orchestration des conteneurs."
    },
    {
      type: "multi",
      text: "Quels sont les rôles de Kubernetes ? (plusieurs réponses)",
      options: [
        "Automatisation du déploiement",
        "Mise à l'échelle automatique (Scaling)",
        "Gestion des conteneurs (Self-Healing)",
        "Remplacement du système d'exploitation",
        "Redémarrage automatique des conteneurs en panne"
      ],
      correct: [0, 1, 2, 4],
      explanation: "Kubernetes assure : l'automatisation du déploiement, le scaling automatique, le self-healing (redémarrage auto), et la gestion des conteneurs. Il ne remplace pas le système d'exploitation."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Pod dans Kubernetes ?",
      options: [
        "Un nœud maître dans le cluster",
        "La plus petite unité d'exécution dans Kubernetes, représentant un groupe de conteneurs",
        "Un outil de monitoring des performances",
        "Un type de stockage persistant"
      ],
      correct: [1],
      explanation: "Un Pod est la plus petite unité d'exécution dans Kubernetes. Il représente un groupe de un ou plusieurs conteneurs étroitement liés qui partagent le même réseau et espace de stockage."
    },
    {
      type: "multi",
      text: "Quelles sont les méthodes de déploiement des artefacts en DevOps ? (plusieurs réponses)",
      options: [
        "Déploiement direct sur un serveur (Ansible)",
        "Conteneurisation (Docker) et Orchestration (Kubernetes)",
        "Plateformes Cloud/PaaS (Heroku, AWS Elastic Beanstalk)",
        "Installation manuelle poste par poste"
      ],
      correct: [0, 1, 2],
      explanation: "Les méthodes de déploiement DevOps incluent : déploiement direct (Ansible), conteneurisation et orchestration (Docker/Kubernetes), et plateformes Cloud/PaaS. L'installation manuelle est contraire à la philosophie DevOps."
    },
    {
      type: "single",
      text: "Que signifie le 'Self-Healing' dans Kubernetes ?",
      options: [
        "Kubernetes répare automatiquement le code source défectueux",
        "Kubernetes redémarre automatiquement les conteneurs en panne et remplace les instances défaillantes",
        "Kubernetes corrige automatiquement les bugs dans les applications",
        "Kubernetes sauvegarde automatiquement les données en cas de panne"
      ],
      correct: [1],
      explanation: "Le Self-Healing dans Kubernetes désigne la capacité à redémarrer automatiquement les conteneurs en panne, à assurer la découverte de services et à remplacer les conteneurs défaillants."
    },
    {
      type: "single",
      text: "Dans l'architecture Kubernetes, qu'est-ce qu'un Node ?",
      options: [
        "La plus petite unité d'exécution",
        "Une machine au sein du cluster Kubernetes sur laquelle s'exécutent les conteneurs",
        "Un fichier de configuration YAML",
        "Un registre d'images Docker"
      ],
      correct: [1],
      explanation: "Un Node est une machine (physique ou virtuelle) au sein du cluster Kubernetes. C'est là que les conteneurs sont exécutés. Il existe des nodes maîtres et des nodes de travail (workers)."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Cluster Kubernetes ?",
      options: [
        "Un seul serveur dédié à l'exécution d'une application",
        "Un ensemble de machines (physiques ou virtuelles) travaillant ensemble comme une seule entité pour exécuter les applications conteneurisées",
        "Un registre d'images Docker",
        "Un fichier de configuration YAML"
      ],
      correct: [1],
      explanation: "Un Cluster est un ensemble de machines (physiques ou virtuelles) travaillant ensemble comme une seule entité pour exécuter les applications conteneurisées. Il contient des nodes maîtres et des nodes de travail."
    },
    {
      type: "multi",
      text: "Quels sont les composants du Master Node (Control Plane) dans Kubernetes ? (plusieurs réponses)",
      options: ["API Server", "Scheduler", "Controller Manager", "Etcd", "Kubelet"],
      correct: [0, 1, 2, 3],
      explanation: "Le Master Node contient : l'API Server (point d'entrée), le Scheduler (décide sur quel nœud lancer les pods), le Controller Manager (maintient l'état désiré), et Etcd (base de données clé-valeur). Kubelet appartient au Worker Node."
    },
    {
      type: "single",
      text: "Quel composant du Master Node est une base de données clé-valeur stockant toute la configuration du cluster en temps réel ?",
      options: ["API Server", "Scheduler", "Controller Manager", "Etcd"],
      correct: [3],
      explanation: "Etcd est la base de données clé-valeur qui stocke toute la configuration actuelle du cluster en temps réel. C'est la source de vérité de l'état du cluster Kubernetes."
    },
    {
      type: "single",
      text: "Quel est le rôle du Kubelet dans un Worker Node Kubernetes ?",
      options: [
        "Gérer le routage réseau et exposer les services à l'extérieur",
        "Surveiller les performances des conteneurs (CPU, RAM)",
        "Agent s'exécutant sur chaque worker node, responsable de la gestion des pods et de l'interaction avec le master et Docker",
        "Stocker la configuration du cluster en base de données"
      ],
      correct: [2],
      explanation: "Le Kubelet est un agent qui s'exécute sur chaque worker node. Il est responsable de la gestion des pods et de leurs conteneurs, et interagit avec le master et le docker engine."
    },
    {
      type: "single",
      text: "Quel composant du Worker Node gère le routage réseau, expose les services à l'extérieur et répartit la charge entre les nodes ?",
      options: ["Kubelet", "cAdvisor", "Kube proxy", "Controller Manager"],
      correct: [2],
      explanation: "Le Kube proxy gère le routage réseau au sein du cluster, expose les services à l'extérieur, assure la communication entre les services et les pods, et répartit la charge de service entre les différents nodes."
    },
    {
      type: "single",
      text: "Qu'est-ce que Minikube ?",
      options: [
        "Une version allégée de Docker pour les conteneurs",
        "Un outil qui permet de créer et gérer un cluster Kubernetes local sur une seule machine",
        "Un registre d'images Docker privé",
        "Un plugin Jenkins pour déployer sur Kubernetes"
      ],
      correct: [1],
      explanation: "Minikube est un outil qui permet de créer et de gérer un cluster Kubernetes local sur une seule machine, idéal pour le développement et l'apprentissage."
    },
    {
      type: "single",
      text: "Dans un fichier YAML Kubernetes (manifeste), quels sont les 4 champs obligatoires de premier niveau ?",
      options: [
        "name, image, port, replicas",
        "apiVersion, Kind, Metadata, spec",
        "cluster, node, pod, service",
        "type, selector, label, namespace"
      ],
      correct: [1],
      explanation: "Chaque objet Kubernetes est défini par un fichier YAML comportant 4 champs de premier niveau : apiVersion (version de l'API), Kind (type d'objet : Pod, Service...), Metadata (name, namespace, labels...), et spec (configurations techniques)."
    },
    {
      type: "single",
      text: "À quoi sert l'objet Secret dans Kubernetes ?",
      options: [
        "Configurer les variables d'environnement non sensibles de l'application",
        "Stocker les informations sensibles comme les mots de passe et clés, encodées en base64",
        "Définir les règles de routage réseau entre les services",
        "Organiser et isoler les ressources dans des espaces de noms"
      ],
      correct: [1],
      explanation: "Le Secret Kubernetes permet de stocker les informations sensibles comme les mots de passe et clés. Le contenu est encodé en base64 (type Opaque). À distinguer du ConfigMap qui stocke des données de configuration non sensibles."
    },
    {
      type: "single",
      text: "Quelle est la différence entre un Service de type ClusterIP et NodePort dans Kubernetes ?",
      options: [
        "ClusterIP expose sur Internet, NodePort uniquement en interne",
        "ClusterIP expose le service uniquement à l'intérieur du cluster, NodePort l'expose à l'extérieur via un port sur chaque node",
        "ClusterIP est pour les bases de données, NodePort pour les applications web",
        "Il n'y a pas de différence, ce sont des synonymes"
      ],
      correct: [1],
      explanation: "ClusterIP expose le service uniquement depuis l'intérieur du cluster. NodePort expose le service à l'extérieur via un port sur chaque node. LoadBalancer expose sur Internet avec une IP publique unique."
    },
    {
      type: "single",
      text: "À quoi servent les labels dans Kubernetes ?",
      options: [
        "À chiffrer les données sensibles des pods",
        "À définir les ressources CPU et RAM allouées à un pod",
        "À associer des paires clé-valeur aux objets pour les identifier et les sélectionner facilement",
        "À configurer les règles de pare-feu du cluster"
      ],
      correct: [2],
      explanation: "Les labels sont des paires clé-valeur qu'on associe à un objet Kubernetes pour l'identifier facilement et faciliter sa sélection. Le Service utilise des labels pour trouver les Pods à desservir."
    }
  ],
  flashcards: [
    { term: "Kubernetes (K8s)", def: "Plateforme d'orchestration de conteneurs open source créée par Google. Automatise le déploiement, la mise à l'échelle et la gestion des conteneurs. K8s = abréviation (8 lettres entre K et s). Fichiers de config : YAML (manifestes)." },
    { term: "Cluster Kubernetes", def: "Ensemble de machines (nodes) travaillant ensemble : 1 Control Plane (Master) + N Worker Nodes. Le Control Plane orchestre (décide), les Workers exécutent les Pods. Minikube = cluster local pour dev/apprentissage." },
    { term: "Pod (Kubernetes)", def: "Plus petite unité déployable dans K8s. Encapsule 1 ou plusieurs conteneurs partageant le même réseau (IP) et stockage. Éphémère : peut être tué et recréé automatiquement (self-healing). Les Pods sont gérés par des ReplicaSets/Deployments." },
    { term: "Node (Worker Node)", def: "Machine physique ou virtuelle d'un cluster Kubernetes qui exécute les Pods. Composants : Kubelet (agent, gère les Pods), Kube-proxy (réseau, routage, load balancing), Container Runtime (Docker/containerd)." },
    { term: "Control Plane (Master Node)", def: "Cerveau du cluster K8s. Composants : API Server (point d'entrée des commandes kubectl/YAML), Scheduler (place les Pods sur les Nodes), Controller Manager (maintient l'état désiré), Etcd (BDD clé-valeur, source de vérité du cluster)." },
    { term: "Etcd", def: "Base de données clé-valeur distribuée constituant la mémoire du cluster Kubernetes. Stocke toute la configuration et l'état actuel du cluster en temps réel. Si Etcd est perdu, le cluster perd toute sa configuration." },
    { term: "Self-Healing (Kubernetes)", def: "Capacité de K8s à détecter et corriger automatiquement les pannes : redémarrage des conteneurs défaillants, remplacement des Pods morts, replanification sur un autre Node si un Node tombe. Le ReplicaSet maintient le nombre de répliques désiré." },
    { term: "Scaling horizontal (K8s)", def: "Augmenter le nombre de répliques (copies) d'un Pod pour absorber une charge croissante (scale out). Géré manuellement (kubectl scale) ou automatiquement par HPA (Horizontal Pod Autoscaler) selon des métriques CPU/mémoire." },
    { term: "Service Kubernetes (ClusterIP / NodePort / LoadBalancer)", def: "Objet qui expose des Pods via une IP/DNS stable. ClusterIP : interne au cluster uniquement. NodePort : accessible depuis l'extérieur via IP_du_Node:Port. LoadBalancer : crée une IP publique via le Cloud (AWS ELB, GCP LB). Les Services sélectionnent les Pods via leurs Labels." },
    { term: "Manifeste YAML Kubernetes", def: "Fichier déclaratif décrivant un objet K8s. 4 champs obligatoires : apiVersion (ex: apps/v1), Kind (Pod, Service, Deployment...), metadata (name, namespace, labels), spec (configuration technique). Appliqué avec : kubectl apply -f fichier.yaml." },
    { term: "Secret vs ConfigMap (K8s)", def: "ConfigMap : données de configuration non sensibles (URLs, paramètres app). Secret : données sensibles (mots de passe, clés API, certificats) encodées en base64 (type Opaque). Les deux sont injectés dans les Pods comme variables d'environnement ou volumes." },
    { term: "Labels (Kubernetes)", def: "Paires clé-valeur attachées aux objets K8s (Pods, Nodes, Services...) pour les identifier et les sélectionner. Les Services utilisent des Selectors pour trouver les Pods correspondants. Permettent aussi de cibler des sous-ensembles de ressources (ex: kubectl delete pods -l app=frontend)." }
  ]
};
