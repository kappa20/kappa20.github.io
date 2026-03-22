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
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Deployment dans Kubernetes ?",
      options: [
        "Un script shell pour déployer des applications",
        "Un objet Kubernetes qui gère les ReplicaSets et permet les mises à jour sans interruption (rolling update)",
        "Un type de stockage persistant pour les pods",
        "Un outil de surveillance des performances du cluster"
      ],
      correct: [1],
      explanation: "Un Deployment est un objet Kubernetes qui gère les ReplicaSets et garantit l'état désiré de l'application. Il permet les rolling updates (mises à jour progressives sans interruption) et les rollbacks automatiques en cas d'échec."
    },
    {
      type: "single",
      text: "Quelle est la différence entre un ReplicaSet et un Deployment dans Kubernetes ?",
      options: [
        "Il n'y a aucune différence, ce sont des synonymes",
        "Le ReplicaSet maintient un nombre fixe de répliques, le Deployment gère les ReplicaSets et ajoute les rolling updates",
        "Le Deployment maintient les répliques, le ReplicaSet gère les mises à jour",
        "Le ReplicaSet est pour les applications stateful, le Deployment pour les stateless"
      ],
      correct: [1],
      explanation: "Le ReplicaSet maintient un nombre fixe de répliques de Pods en bonne santé. Le Deployment est un niveau au-dessus : il gère les ReplicaSets et ajoute les capacités de mise à jour progressive (rolling update) et de rollback. En pratique, on utilise toujours le Deployment."
    },
    {
      type: "single",
      text: "Qu'est-ce que le HPA (Horizontal Pod Autoscaler) dans Kubernetes ?",
      options: [
        "Un outil pour sauvegarder automatiquement les données des pods",
        "Un composant qui augmente automatiquement le nombre de répliques de pods selon des métriques (CPU, mémoire)",
        "Un système de mise à jour automatique de Kubernetes",
        "Un registre central pour stocker les images Docker"
      ],
      correct: [1],
      explanation: "Le HPA (Horizontal Pod Autoscaler) ajuste automatiquement le nombre de répliques d'un Deployment selon des métriques observées (CPU, mémoire, requêtes/seconde). C'est le scaling automatique horizontal dans Kubernetes."
    },
    {
      type: "single",
      text: "Quelle commande kubectl permet d'appliquer un fichier de configuration YAML à un cluster Kubernetes ?",
      options: [
        "kubectl run -f fichier.yaml",
        "kubectl start fichier.yaml",
        "kubectl apply -f fichier.yaml",
        "kubectl deploy fichier.yaml"
      ],
      correct: [2],
      explanation: "La commande 'kubectl apply -f fichier.yaml' est la commande standard pour créer ou mettre à jour des ressources Kubernetes depuis un fichier YAML. Elle est idempotente : si la ressource existe déjà, elle est mise à jour ; sinon, elle est créée."
    },
    {
      type: "multi",
      text: "Quels composants se trouvent sur un Worker Node Kubernetes ? (plusieurs réponses)",
      options: ["Kubelet", "Kube-proxy", "cAdvisor", "API Server", "Etcd"],
      correct: [0, 1, 2],
      explanation: "Le Worker Node contient : Kubelet (agent qui gère les Pods), Kube-proxy (routage réseau et load balancing), cAdvisor (monitoring des ressources des conteneurs). L'API Server et Etcd appartiennent au Control Plane (Master Node)."
    },
    {
      type: "single",
      text: "Dans un Deployment Kubernetes, que se passe-t-il si l'on diminue le nombre de 'replicas' à 0 ?",
      options: [
        "Le Deployment est supprimé du cluster",
        "Tous les Pods de ce Deployment sont arrêtés, mais le Deployment existe toujours",
        "Une erreur est retournée car le minimum est 1 réplique",
        "Les Pods sont suspendus (paused) et peuvent être repris"
      ],
      correct: [1],
      explanation: "Mettre replicas à 0 arrête tous les Pods du Deployment (scale to zero) mais conserve le Deployment, ses labels et sa configuration. C'est utile pour économiser des ressources. On peut remettre les Pods en service en augmentant replicas à nouveau."
    },
    {
      type: "single",
      text: "En quoi consiste la stratégie de déploiement Bleu-Vert (Blue-Green) ?",
      options: [
        "Déployer progressivement la nouvelle version sur tous les serveurs un par un",
        "Tester la nouvelle version sur un petit pourcentage d'utilisateurs avant de l'étendre",
        "Maintenir deux environnements identiques (Bleu : version stable active, Vert : nouvelle version privée), puis basculer instantanément le trafic",
        "Déployer simultanément deux versions et laisser les utilisateurs choisir"
      ],
      correct: [2],
      explanation: "Blue-Green : on maintient 2 environnements identiques. Bleu = version stable actuelle (publique). Vert = nouvelle version (privée/testée). Une fois validée, le trafic bascule instantanément de Bleu vers Vert. Si problème : rollback immédiat vers Bleu. Avantage : zéro downtime et rollback très rapide."
    },
    {
      type: "single",
      text: "En quoi consiste la stratégie de déploiement Canari (Canary) ?",
      options: [
        "Basculer 100% du trafic vers la nouvelle version instantanément",
        "Tester la nouvelle version sur un petit groupe d'utilisateurs (ex: 5%), surveiller, puis augmenter progressivement si aucun problème",
        "Remplacer les serveurs un par un en répartissant le trafic proportionnellement",
        "Déployer uniquement sur un environnement de staging avant la production"
      ],
      correct: [1],
      explanation: "Canary : la nouvelle version est déployée pour un petit groupe d'utilisateurs ('canaris', ex: 5%), comportement étroitement surveillé. Si aucun problème, déploiement étendu progressivement (5% → 25% → 100%). Détecte rapidement les problèmes en production réelle avec impact limité."
    },
    {
      type: "single",
      text: "En quoi consiste le déploiement progressif (Rolling Deployment) ?",
      options: [
        "Déployer la nouvelle version uniquement sur un environnement de test isolé",
        "Basculer tout le trafic instantanément vers la nouvelle version",
        "Remplacer progressivement les anciennes instances par les nouvelles, une par une ou par petits groupes, derrière un load balancer",
        "Tester la nouvelle version sur 5% des utilisateurs avant déploiement total"
      ],
      correct: [2],
      explanation: "Rolling Deployment : on remplace progressivement les instances (serveurs/containers/pods) de l'ancienne version par la nouvelle, une par une ou par groupes. Le load balancer répartit le trafic proportionnellement. Ex: 1 serveur sur 4 mis à jour → 25% des utilisateurs ont la nouvelle version automatiquement."
    },
    {
      type: "multi",
      text: "Comparez les 3 stratégies de déploiement : quelle(s) affirmation(s) est/sont correcte(s) ? (plusieurs réponses)",
      options: [
        "Blue-Green nécessite le double d'infrastructure (2 environnements complets)",
        "Canary a une complexité élevée car nécessite monitoring avancé et routage du trafic",
        "Rolling Deployment n'a pas besoin d'infrastructure dupliquée",
        "Blue-Green a le rollback le plus lent des 3 stratégies"
      ],
      correct: [0, 1, 2],
      explanation: "Blue-Green : double infrastructure (2 environnements), rollback le PLUS RAPIDE (bascule instantanée). Canary : complexité élevée (monitoring avancé, routage), infrastructure standard + gestion du trafic. Rolling : infrastructure non dupliquée, rollback plus lent (serveur par serveur). Blue-Green a le rollback le plus RAPIDE, pas le plus lent."
    },
    {
      type: "single",
      text: "Qu'est-ce que Helm dans le contexte de Kubernetes ?",
      options: [
        "Un outil de monitoring des performances des clusters Kubernetes",
        "Un gestionnaire de packages (chart manager) pour Kubernetes qui regroupe les fichiers YAML dans des packages appelés Charts, avec des templates paramétrés",
        "Un système de contrôle de version spécifique aux fichiers YAML Kubernetes",
        "Un outil de scaling automatique des pods dans Kubernetes"
      ],
      correct: [1],
      explanation: "Helm est le gestionnaire de packages de Kubernetes. Il regroupe dans des packages appelés Charts tous les fichiers YAML (Deployment, Service, Ingress...) paramétrés et prêts à déployer. Avantages : réutilisation du code, réduction des erreurs, déploiement sur plusieurs environnements (dev/staging/prod)."
    },
    {
      type: "single",
      text: "À quoi sert le fichier values.yaml dans un Helm Chart ?",
      options: [
        "Définir la version de Kubernetes utilisée par le chart",
        "Stocker les secrets et mots de passe chiffrés du chart",
        "Contenir toutes les valeurs de configuration qui personnalisent le chart, séparant la logique (template) de la configuration (valeurs)",
        "Lister les dépendances des bibliothèques tierces du chart"
      ],
      correct: [2],
      explanation: "Le fichier values.yaml contient toutes les valeurs de configuration qui personnalisent un Chart Helm. Permet de séparer la logique (template YAML avec variables) de la configuration (valeurs). Facilite l'adaptation à plusieurs environnements (dev/test/prod) sans modifier les templates."
    },
    {
      type: "single",
      text: "Quel est le rôle de l'objet Ingress dans Kubernetes ?",
      options: [
        "Gérer le réseau interne entre les pods du cluster",
        "Stocker les données persistantes des applications",
        "Exposer les applications au monde réel via routage HTTP/HTTPS par nom de domaine ou par chemin, et gérer les certificats SSL/TLS",
        "Autoscaler automatiquement les pods en fonction de la charge"
      ],
      correct: [2],
      explanation: "L'objet Ingress expose les applications au monde extérieur (production). Il gère : le routage par nom de domaine (URL → bon Service), le routage par chemin (/app, /images → différents services), et la sécurité SSL/TLS (certificat installé une seule fois sur l'Ingress plutôt que sur chaque Pod)."
    },
    {
      type: "multi",
      text: "Parmi tous les objets Kubernetes, lesquels sont mentionnés dans le cours ? (plusieurs réponses)",
      options: [
        "Namespace, Pod, Deployment, Service, ConfigMap, Secret, Ingress",
        "PersistentVolumeClaim (PVC), PersistentVolume (PV), StatefulSet",
        "Job, CronJob, Role / ClusterRole et RoleBinding",
        "DockerFile, DockerCompose, DockerSwarm"
      ],
      correct: [0, 1, 2],
      explanation: "Le cours liste l'ensemble des objets Kubernetes : Namespace (isolation logique), Pod, Deployment, Service, ConfigMap, Secret, Ingress, PersistentVolumeClaim (PVC), PersistentVolume (PV), Job, CronJob, StatefulSet, Role/ClusterRole et RoleBinding. Dockerfile, Docker Compose et Docker Swarm sont des objets Docker, pas Kubernetes."
    },
    {
      type: "single",
      text: "Quel objet Kubernetes sert à organiser et isoler les ressources au sein d'un même cluster ?",
      options: [
        "ConfigMap — stocke les configurations sous forme de clés-valeurs",
        "Namespace — partitionne le cluster en espaces isolés (ex: un namespace par équipe ou environnement)",
        "Service — expose les Pods à l'intérieur ou l'extérieur du cluster",
        "ReplicaSet — maintient un nombre fixe de répliques de Pods"
      ],
      correct: [1],
      explanation: "L'objet Namespace organise et isole les ressources dans un cluster Kubernetes. Un cluster peut contenir plusieurs Namespaces (ex: prod, staging, dev, ou un par équipe). Les ressources dans un Namespace sont isolées logiquement. Chaque objet Kubernetes appartient à un Namespace (sauf les Nodes et PersistentVolumes qui sont globaux)."
    },
    {
      type: "single",
      text: "Quelle est la différence entre un PersistentVolume (PV) et un PersistentVolumeClaim (PVC) dans Kubernetes ?",
      options: [
        "PV est une demande de stockage par un Pod, PVC est le stockage physique provisionné par l'admin",
        "PV est le stockage physique provisionné par l'administrateur du cluster, PVC est la demande de stockage faite par un utilisateur/Pod",
        "PV et PVC sont identiques, seule la syntaxe YAML diffère",
        "PV gère le stockage dans le cloud, PVC gère le stockage local sur les Nodes"
      ],
      correct: [1],
      explanation: "PersistentVolume (PV) : ressource de stockage provisionnée par l'administrateur du cluster (ex: disque NFS, volume cloud). PersistentVolumeClaim (PVC) : demande de stockage par un utilisateur ou un Pod (ex: 'je veux 10 Gi de stockage'). Kubernetes associe automatiquement un PVC à un PV disponible satisfaisant les critères. Indispensable pour les applications avec état (bases de données)."
    },
    {
      type: "single",
      text: "Pour quel type d'application utilise-t-on un StatefulSet plutôt qu'un Deployment dans Kubernetes ?",
      options: [
        "Pour les applications sans état (stateless) comme les serveurs web qui peuvent être remplacés librement",
        "Pour les applications avec état (stateful) comme les bases de données qui nécessitent une identité stable et un stockage persistant",
        "Pour les applications qui nécessitent plus de CPU que de mémoire",
        "Pour les applications déployées en Blue-Green qui nécessitent 2 environnements identiques"
      ],
      correct: [1],
      explanation: "StatefulSet est utilisé pour les applications AVEC ÉTAT (stateful) : bases de données (MySQL, PostgreSQL, MongoDB), systèmes de messagerie (Kafka), etc. Garantit : une identité stable et unique pour chaque Pod (pod-0, pod-1...), un ordre de déploiement/arrêt garanti, un stockage persistant dédié à chaque Pod via PVC. Deployment est pour les applications stateless (remplaçables librement)."
    },
    {
      type: "single",
      text: "Quelle est la différence entre un Job et un CronJob dans Kubernetes ?",
      options: [
        "Job exécute une tâche une seule fois jusqu'à complétion, CronJob planifie des exécutions répétitives à intervalles définis (comme cron Linux)",
        "Job gère les pods en continu, CronJob les arrête après un délai configurable",
        "CronJob remplace le Deployment pour les applications batch, Job remplace le ReplicaSet",
        "Les deux sont identiques, CronJob est simplement un Job avec plusieurs répliques"
      ],
      correct: [0],
      explanation: "Job : exécute une tâche ponctuelle jusqu'à sa complétion (ex: migration de base de données, traitement d'un fichier). Kubernetes garantit que la tâche s'exécute au moins une fois. CronJob : planifie des Jobs répétitifs selon une expression cron (ex: '0 2 * * *' = chaque jour à 2h). Exemples : sauvegardes nocturnes, rapports quotidiens, nettoyage périodique de données."
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
    { term: "Labels (Kubernetes)", def: "Paires clé-valeur attachées aux objets K8s (Pods, Nodes, Services...) pour les identifier et les sélectionner. Les Services utilisent des Selectors pour trouver les Pods correspondants. Permettent aussi de cibler des sous-ensembles de ressources (ex: kubectl delete pods -l app=frontend)." },
    { term: "Deployment (Kubernetes)", def: "Objet K8s de référence pour déployer des applications stateless. Gère les ReplicaSets et ajoute : rolling updates (mises à jour sans interruption), rollback automatique, scaling. kubectl apply -f deploy.yaml. Préféré au ReplicaSet direct en pratique." },
    { term: "ReplicaSet (Kubernetes)", def: "Objet K8s garantissant qu'un nombre défini de répliques de Pods tournent à tout moment (self-healing). Si un Pod tombe, le ReplicaSet en recrée un. Géré automatiquement par un Deployment — ne pas créer manuellement." },
    { term: "HPA (Horizontal Pod Autoscaler)", def: "Composant K8s qui ajuste automatiquement le nombre de répliques d'un Deployment selon des métriques (CPU > 80% → scale out, < 20% → scale in). Permet l'élasticité automatique. Nécessite le Metrics Server installé dans le cluster." },
    { term: "kubectl (commandes clés)", def: "CLI pour interagir avec K8s. Commandes essentielles : kubectl apply -f (créer/modifier), kubectl get pods/services/deployments (lister), kubectl describe pod <nom> (détails), kubectl logs <pod> (logs), kubectl delete -f (supprimer), kubectl scale --replicas=N (scaler)." },
    { term: "Rolling Update (Kubernetes)", def: "Stratégie de mise à jour d'un Deployment : K8s remplace progressivement les anciens Pods par les nouveaux, sans interruption de service. Contrôlé par maxSurge (pods en plus) et maxUnavailable (pods indisponibles). Rollback possible avec kubectl rollout undo." },
    { term: "Blue-Green Deployment", def: "2 environnements identiques : Bleu (stable, public) + Vert (nouvelle version, privé). Une fois Vert validé, le trafic bascule instantanément. Rollback = rebascule vers Bleu. Avantages : zéro downtime, rollback très rapide. Inconvénient : double infrastructure (coût élevé)." },
    { term: "Canary Deployment", def: "Déploiement progressif : la nouvelle version est exposée à un petit groupe d'utilisateurs (ex: 5%), comportement surveillé, puis extension progressive (25% → 100%). Rollback : couper le trafic vers la nouvelle version. Complexité élevée (monitoring + routage avancé). Détecte les bugs en production réelle avec impact limité." },
    { term: "Rolling Deployment", def: "Remplacement progressif des instances (pods/serveurs) de l'ancienne vers la nouvelle version, une par une ou par groupes. Le load balancer répartit le trafic proportionnellement au nombre de pods mis à jour. Infrastructure non dupliquée. Rollback : serveur par serveur (plus lent)." },
    { term: "Helm Chart", def: "Package Kubernetes regroupant tous les fichiers YAML (Deployment, Service, Ingress, ConfigMap...) paramétrés via des templates et un fichier values.yaml. Avantages : réutilisabilité, déploiement sur plusieurs environnements (dev/staging/prod) sans modifier le code, partage via Helm Hub." },
    { term: "Ingress (Kubernetes)", def: "Objet K8s exposant les applications au monde extérieur via HTTP/HTTPS. Fonctions : routage par nom de domaine (host: monapp.com → Service A), routage par chemin (/api → Service B, /app → Service C), gestion SSL/TLS centralisée. Contrôleur Ingress populaire : Nginx Ingress Controller." }
  ]
};
