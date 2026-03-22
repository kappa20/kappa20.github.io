// Séance 7 — Technologies Émergentes du Cloud
const SEANCE_7 = {
  id: 7,
  title: "Technologies Émergentes",
  questions: [
    {
      type: "single",
      text: "Quel est l'objectif principal du Green Cloud Computing ?",
      options: ["Peindre les centres de données en vert", "Réduire la consommation d'énergie et l'empreinte carbone des centres de données", "Utiliser uniquement des serveurs de couleur verte", "Éliminer tous les serveurs physiques"],
      correct: [1],
      explanation: "Le Green Cloud vise à rendre le cloud computing plus respectueux de l'environnement en réduisant la consommation d'énergie et l'empreinte carbone des centres de données."
    },
    {
      type: "multi",
      text: "Lesquelles de ces technologies sont considérées comme émergentes dans le Cloud Computing ? (plusieurs réponses)",
      options: ["Edge Computing", "Fog Computing", "Mobile Cloud", "IA & Cloud Computing", "Mainframe Computing"],
      correct: [0, 1, 2, 3],
      explanation: "Les technologies émergentes du CC incluent : Green Cloud, Edge Computing, Fog Computing, Mobile Cloud et IA & Cloud. Le Mainframe Computing est une technologie ancienne."
    },
    {
      type: "multi",
      text: "Quels sont les challenges du Cloud Computing ? (plusieurs réponses)",
      options: ["Sécurité des données", "Vendor Lock-in", "Performances (latence et bande passante)", "Excès de ressources disponibles", "Normes et Conformité"],
      correct: [0, 1, 2, 4],
      explanation: "Les challenges incluent : sécurité des données, vendor lock-in, performances, normes & conformité, intégration et optimisation des ressources. L'excès de ressources n'est pas un challenge typique."
    },
    {
      type: "single",
      text: "Le Vendor Lock-in dans le Cloud Computing désigne :",
      options: ["Un contrat à durée déterminée avec un fournisseur Cloud", "La dépendance vis-à-vis des outils et technologies d'un fournisseur, avec difficulté de migration", "Un système de verrouillage physique des serveurs", "Un problème de sécurité lié aux accès non autorisés"],
      correct: [1],
      explanation: "Le Vendor Lock-in désigne la dépendance vis-à-vis des outils et technologies d'un fournisseur spécifique, rendant difficile la migration vers un autre fournisseur."
    },
    {
      type: "multi",
      text: "Le Green Cloud englobe quelles pratiques ? (plusieurs réponses)",
      options: ["L'efficacité énergétique des centres de données", "La conception de logiciels économes en énergie", "La gestion intelligente des ressources via des algorithmes", "L'augmentation du nombre de serveurs physiques"],
      correct: [0, 1, 2],
      explanation: "Le Cloud vert englobe : l'efficacité énergétique des datacenters (refroidissement, énergies renouvelables), la conception de logiciels économes, et la gestion intelligente des ressources."
    },
    {
      type: "multi",
      text: "Quelles réglementations sont citées comme contraintes de conformité pour le Cloud Computing ? (plusieurs réponses)",
      options: ["RGPD (Règlement Général sur la Protection des Données)", "HIPAA (Health Insurance Portability and Accountability Act)", "ISO 9001 (management de la qualité)", "PCI-DSS (sécurité des paiements)"],
      correct: [0, 1],
      explanation: "Le cours cite le RGPD et HIPAA comme exemples de réglementations que les entreprises utilisant le Cloud doivent respecter."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'IoT (Internet of Things) ?",
      options: ["Un protocole de communication entre serveurs cloud", "Un réseau d'appareils physiques équipés de capteurs et de logiciels pour se connecter et échanger des données entre eux et avec Internet", "Un système de virtualisation des réseaux", "Un type de stockage cloud distribué"],
      correct: [1],
      explanation: "L'IoT fait référence à un réseau d'appareils physiques ('objets') équipés de capteurs, de logiciels et d'autres technologies pour se connecter et échanger des données entre eux et avec d'autres dispositifs sur Internet."
    },
    {
      type: "multi",
      text: "Quelles problématiques sont soulevées par certaines applications IoT sensibles ? (plusieurs réponses)",
      options: ["La confidentialité des données privées", "Le problème de latence", "Le problème de bande passante", "Le coût des licences logicielles"],
      correct: [0, 1, 2],
      explanation: "Certaines applications IoT sont sensibles à : la confidentialité des données, la latence, et la bande passante. Ces problèmes motivent l'utilisation de l'Edge Computing."
    },
    {
      type: "single",
      text: "Quel est le principe fondamental de l'Edge Computing ?",
      options: ["Centraliser tout le traitement des données dans un datacenter cloud distant", "Traiter les données directement sur les périphériques ou à proximité de la source, plutôt que de les envoyer au cloud", "Remplacer le cloud par des serveurs mainframe locaux", "Compresser les données IoT avant de les envoyer au cloud"],
      correct: [1],
      explanation: "L'Edge Computing consiste à traiter les données directement sur les périphériques ou à proximité de la source (capteurs, IoT, smartphones), plutôt que de les envoyer à un centre de données centralisé. Réduit la latence et la bande passante."
    },
    {
      type: "multi",
      text: "Quelles sont les 4 couches de l'architecture Edge Computing ? (plusieurs réponses)",
      options: ["Cloud Layer (Cloud Server)", "Edge Layer (Edge Node/Server)", "Device Layer", "Sensors Layer", "Hypervisor Layer"],
      correct: [0, 1, 2, 3],
      explanation: "L'architecture Edge Computing est composée de 4 couches : Sensors Layer (capteurs IoT), Device Layer (appareils), Edge Layer (Edge Node/Server), et Cloud Layer (Cloud Server sur Internet)."
    },
    {
      type: "single",
      text: "Quel est le rôle des Edge Servers dans l'architecture Edge Computing ?",
      options: ["Stocker toutes les données à long terme", "Effectuer le traitement local avancé, l'analyse des données et l'exécution d'algorithmes complexes", "Remplacer les capteurs IoT sur le terrain", "Gérer les abonnements cloud des utilisateurs"],
      correct: [1],
      explanation: "Les Edge Servers effectuent le traitement local avancé, l'analyse des données et l'exécution d'algorithmes complexes, réduisant la nécessité de se connecter au cloud."
    },
    {
      type: "multi",
      text: "Quelles sont les 4 caractéristiques clés de l'Edge Computing ? (plusieurs réponses)",
      options: ["Emplacement : traitement local sur les dispositifs ou à proximité", "Performance : faible latence et optimisation de la bande passante", "Sécurité : données sensibles analysées localement sans quitter le site", "Traitement distribué : charge répartie sur un ensemble de nœuds périphériques"],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 caractéristiques de l'Edge Computing : (1) Emplacement (traitement local), (2) Performance (faible latence, optimisation BP), (3) Sécurité (données analysées localement), (4) Traitement distribué (charge répartie)."
    },
    {
      type: "multi",
      text: "Dans quels domaines l'Edge Computing est-il utilisé ? (plusieurs réponses)",
      options: ["IoT (surveillance intelligente, gestion de l'énergie)", "Automobiles et Transport (véhicules autonomes, gestion du trafic)", "E-Santé (surveillance médicale, assistance chirurgicale)", "Agriculture (capteurs de champ)", "Traitement de texte bureautique"],
      correct: [0, 1, 2, 3],
      explanation: "L'Edge Computing est utilisé dans : IoT, Automobiles (véhicules autonomes), E-Santé, et Agriculture. Le traitement de texte ne nécessite pas l'Edge Computing."
    },
    {
      type: "single",
      text: "Pourquoi les véhicules autonomes utilisent-ils l'Edge Computing ?",
      options: ["Pour réduire la consommation de carburant", "Pour traiter localement les données des capteurs et caméras afin de prendre des décisions rapides nécessaires à la sécurité", "Pour transmettre en temps réel toutes les données au cloud central", "Pour se connecter aux réseaux Wi-Fi publics"],
      correct: [1],
      explanation: "Les voitures autonomes utilisent l'Edge Computing pour traiter localement les données des capteurs et caméras, permettant une prise de décision rapide et sécurisée sans dépendre d'une connexion cloud avec latence."
    },
    {
      type: "single",
      text: "Quelle est la différence entre Fog Computing et Edge Computing ?",
      options: ["Le Fog Computing traite les données au niveau des capteurs, l'Edge Computing dans le cloud central", "Le Fog Computing est une couche intermédiaire entre les appareils et le cloud (via routeurs/gateways), l'Edge Computing traite directement sur ou près des appareils", "Le Fog Computing est une technologie obsolète remplacée par l'Edge Computing", "Il n'y a aucune différence conceptuelle"],
      correct: [1],
      explanation: "L'Edge Computing traite les données sur les appareils eux-mêmes ou à très proximité. Le Fog Computing est une couche intermédiaire : des nœuds (routeurs, gateways) pré-traitent et filtrent les données entre les appareils Edge et le cloud central."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Mobile Cloud Computing ?",
      options: ["L'utilisation de smartphones pour héberger des serveurs cloud", "Un paradigme qui délègue les traitements intensifs du terminal mobile vers des ressources cloud, pour pallier les limitations de batterie, CPU et mémoire", "Un réseau mobile 5G dédié aux datacenters", "Une application mobile pour gérer des ressources cloud"],
      correct: [1],
      explanation: "Le Mobile Cloud Computing étend le cloud aux appareils mobiles en déléguant les traitements intensifs vers des ressources distantes. Résout les contraintes des mobiles : autonomie limitée, puissance CPU/RAM insuffisante pour certains traitements (ex: IA, rendu 3D)."
    },
    {
      type: "single",
      text: "Qu'est-ce que le PUE (Power Usage Effectiveness) dans le contexte du Green Cloud ?",
      options: ["Un protocole de communication réseau économe en énergie", "Un indicateur mesurant l'efficacité énergétique d'un datacenter : rapport entre la consommation totale et la consommation des serveurs seuls (PUE idéal = 1,0)", "Un standard ISO pour les serveurs Cloud", "Un algorithme d'optimisation des ressources Cloud"],
      correct: [1],
      explanation: "Le PUE (Power Usage Effectiveness) = énergie totale du datacenter / énergie consommée par l'IT. Un PUE de 1,0 est idéal (100% de l'énergie va aux serveurs). Un datacenter classique a un PUE de 1,5-2,0. Les hyperscalers (Google, Microsoft) visent < 1,2."
    },
    {
      type: "multi",
      text: "Quels sont les exemples d'IA-as-a-Service proposés par les grands fournisseurs Cloud ? (plusieurs réponses)",
      options: ["AWS SageMaker (entraînement et déploiement de modèles ML)", "Google Vertex AI (anciennement AI Platform)", "Azure Machine Learning", "IBM Watson"],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 grands fournisseurs proposent des services IA managés : AWS SageMaker, Google Vertex AI, Azure Machine Learning, et IBM Watson. Ces services démocratisent l'IA en fournissant GPU, données et pipelines d'entraînement clés en main."
    },
    {
      type: "multi",
      text: "Quelles sont les solutions pour réduire le Vendor Lock-in dans le Cloud ? (plusieurs réponses)",
      options: ["Utiliser des outils open source (Kubernetes, Terraform)", "Adopter une stratégie Multicloud", "Utiliser des formats et APIs standardisés", "Signer un contrat uniquement avec un seul fournisseur pour bénéficier de remises"],
      correct: [0, 1, 2],
      explanation: "Pour réduire le Vendor Lock-in : utiliser des outils open source portables (Kubernetes, Terraform), adopter une stratégie multicloud, et préférer les APIs standardisées. S'engager exclusivement avec un fournisseur aggrave le lock-in."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Cloudlet dans le contexte du Cloud Computing ?",
      options: [
        "Un serveur cloud de très grande capacité installé dans un datacenter centralisé",
        "Une petite infrastructure Cloud déployée localement, à proximité de l'utilisateur, agissant comme un mini-Cloud entre le Cloud et les périphériques",
        "Un protocole de communication entre nœuds Edge et le Cloud central",
        "Un conteneur Docker léger pour applications mobiles"
      ],
      correct: [1],
      explanation: "Un Cloudlet est une petite infrastructure Cloud déployée localement, souvent à proximité de l'utilisateur. Il agit comme un mini-Cloud local, point d'accès entre le Cloud distant et les périphériques. Exemples : stations de base de télécommunication, centres de données locaux."
    },
    {
      type: "single",
      text: "Qu'est-ce que le concept d'offloading dans le contexte des Cloudlets ?",
      options: [
        "Transférer toutes les données de l'appareil mobile vers le cloud central",
        "Déplacer les tâches lourdes d'un appareil local vers une ressource plus puissante (le Cloudlet) pour compenser les limites de l'appareil",
        "Compresser les données avant de les envoyer au cloud",
        "Déconnecter un nœud Edge du réseau pour maintenance"
      ],
      correct: [1],
      explanation: "L'offloading consiste à déplacer les tâches lourdes de l'appareil local vers une ressource plus puissante (le Cloudlet). Les appareils mobiles et IoT ont des ressources limitées (puissance, mémoire, batterie) — le Cloudlet prend en charge les calculs intensifs."
    },
    {
      type: "multi",
      text: "Quelles sont les caractéristiques de performance d'un Cloudlet ? (plusieurs réponses)",
      options: [
        "Bande passante importante",
        "Latence faible",
        "Connexion à des réseaux à haut débit (4G, 5G, fibre optique)",
        "Nécessite obligatoirement une connexion Internet publique",
        "Mise à l'échelle rapide"
      ],
      correct: [0, 1, 2, 4],
      explanation: "Les Cloudlets offrent : grande bande passante, faible latence, connexion haut débit (4G/5G/fibre) et mise à l'échelle rapide. Ils ne nécessitent pas obligatoirement une connexion Internet publique — ils fonctionnent localement."
    },
    {
      type: "single",
      text: "Par quel organisme le Mobile Edge Computing (MEC) a-t-il été standardisé ?",
      options: [
        "IEEE (Institute of Electrical and Electronics Engineers)",
        "IETF (Internet Engineering Task Force)",
        "ETSI (Institut Européen des Normes de Télécommunication)",
        "W3C (World Wide Web Consortium)"
      ],
      correct: [2],
      explanation: "Le concept de Mobile Edge Computing (MEC) a été standardisé par l'ETSI (Institut Européen des Normes de Télécommunication). Il se concentre sur les environnements mobiles, déplaçant le traitement vers les stations de base des opérateurs (antennes 5G)."
    },
    {
      type: "single",
      text: "Où sont situés les nœuds MEC (Mobile Edge Computing) pour traiter les données ?",
      options: [
        "Dans des datacenters centralisés distants",
        "Sur les appareils mobiles des utilisateurs eux-mêmes",
        "À la périphérie du réseau mobile, souvent sur des stations de base des opérateurs de télécommunications (antennes 5G)",
        "Dans des nœuds Fog intermédiaires entre l'IoT et le cloud"
      ],
      correct: [2],
      explanation: "Les nœuds MEC sont situés à la périphérie du réseau mobile, souvent sur les stations de base des opérateurs télécoms (antennes 5G, points d'accès mobiles). Objectif : rapprocher les capacités cloud des abonnés mobiles pour réduire la latence."
    },
    {
      type: "single",
      text: "Pour quels types d'applications le MEC est-il particulièrement optimisé ?",
      options: [
        "Applications de traitement par lots (batch processing) nocturnes",
        "Applications nécessitant une interaction en temps réel sur appareils mobiles, avec forte bande passante et faible latence",
        "Applications de stockage longue durée de grandes quantités de données",
        "Applications de simulation numérique haute performance (HPC)"
      ],
      correct: [1],
      explanation: "Le MEC est optimisé pour les applications nécessitant une interaction en temps réel sur appareils mobiles, avec faible latence et haute bande passante. Il profite des caractéristiques de la 5G : vitesses élevées, faible latence, gestion d'un grand nombre d'appareils simultanés."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Federated Learning (Apprentissage Fédéré) ?",
      options: [
        "Une approche d'entraînement ML centralisée où toutes les données sont envoyées au cloud",
        "Une approche ML permettant de créer des modèles sans transférer les données brutes vers le cloud, en entraînant le modèle localement sur chaque appareil",
        "Une technique de compression des modèles ML pour les appareils mobiles",
        "Un protocole de communication entre serveurs de machine learning"
      ],
      correct: [1],
      explanation: "Le Federated Learning est une approche d'apprentissage automatique permettant de créer des modèles sans transférer les données brutes vers le cloud. Le modèle est entraîné de manière distribuée sur plusieurs appareils/serveurs — les données restent localement, renforçant la confidentialité."
    },
    {
      type: "multi",
      text: "Quelles sont les 3 étapes du processus Federated Learning ? (plusieurs réponses)",
      options: [
        "Étape 1 : Le serveur central envoie le modèle initial aux clients",
        "Étape 2 : Chaque client entraîne le modèle localement sur ses données sans les transmettre",
        "Étape 3 : Agrégation des paramètres (poids des modèles) par le serveur central via FedAvg",
        "Étape 2 : Chaque client envoie ses données brutes au serveur central pour entraînement"
      ],
      correct: [0, 1, 2],
      explanation: "Les 3 étapes du FL : (1) Le serveur envoie le modèle initial aux clients ; (2) Chaque client entraîne localement sur ses données (données NON transmises) ; (3) Les clients envoient uniquement les paramètres (poids) au serveur qui les agrège via FedAvg (moyenne pondérée)."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'algorithme FedAvg dans le Federated Learning ?",
      options: [
        "Un algorithme de chiffrement des données entre clients et serveur",
        "Un algorithme de tri des nœuds par performance",
        "Un algorithme effectuant la moyenne pondérée des paramètres des modèles locaux (pondération par le nombre d'exemples utilisés par chaque client)",
        "Un protocole de synchronisation des données entre clients"
      ],
      correct: [2],
      explanation: "FedAvg (Federated Averaging) est l'algorithme d'agrégation standard du FL. Il calcule la moyenne pondérée des paramètres (poids des neurones) des modèles locaux, en tenant compte du nombre d'exemples utilisés par chaque client. C'est la méthode la plus courante."
    },
    {
      type: "single",
      text: "Quelle est la différence entre le Horizontal Federated Learning et le Vertical Federated Learning ?",
      options: [
        "Horizontal FL traite les données verticalement (colonnes), Vertical FL traite horizontalement (lignes)",
        "Horizontal FL : clients avec les mêmes types de caractéristiques sur des individus différents. Vertical FL : clients avec des caractéristiques différentes sur les mêmes individus",
        "Horizontal FL utilise FedAvg, Vertical FL utilise FedSGD exclusivement",
        "Il n'y a aucune différence conceptuelle entre les deux types"
      ],
      correct: [1],
      explanation: "Horizontal FL : clients possèdent des données avec mêmes caractéristiques (features) mais sur individus différents. Ex: plusieurs hôpitaux avec les mêmes champs (âge, diagnostic) sur des patients différents. Vertical FL : mêmes individus mais caractéristiques différentes. Ex: une banque (données financières) + une assurance (données santé) sur les mêmes clients."
    },
    {
      type: "single",
      text: "Dans le tableau comparatif Edge/Fog/Cloudlet/MEC/Cloud, quelle technologie a la latence la plus élevée ?",
      options: ["Edge Computing", "Fog Computing", "Cloud Centralisé", "MEC"],
      correct: [2],
      explanation: "Le Cloud Centralisé a la latence la plus élevée (Élevée) car les données doivent parcourir de longues distances jusqu'aux datacenters distants. Edge Computing, Fog, Cloudlets et MEC ont tous une latence faible à très faible car ils traitent les données localement."
    },
    {
      type: "multi",
      text: "Quels sont les 3 types de Federated Learning mentionnés dans le cours ? (plusieurs réponses)",
      options: [
        "Horizontal Federated Learning",
        "Vertical Federated Learning",
        "Transfer Federated Learning",
        "Distributed Federated Learning",
        "Centralized Federated Learning"
      ],
      correct: [0, 1, 2],
      explanation: "Les 3 types de FL : (1) Horizontal FL (mêmes features, individus différents), (2) Vertical FL (features différentes, mêmes individus), (3) Transfer FL (utilise le transfer learning pour les données hétérogènes entre clients). Les 2 autres options sont inexistantes dans le cours."
    }
  ],
  flashcards: [
    { term: "Edge Computing", def: "Paradigme où le traitement des données se fait au plus près de la source (capteurs IoT, appareils), à la 'périphérie' du réseau. 4 couches : Sensors → Device → Edge (traitement local) → Cloud (stockage longue durée). Réduit latence et bande passante." },
    { term: "Fog Computing", def: "Couche intermédiaire entre l'Edge (appareils) et le Cloud central. Les nœuds Fog (routeurs, gateways, passerelles) pré-traitent et filtrent les données localement avant de les envoyer au Cloud. Extension de l'Edge sur un réseau LAN/WAN." },
    { term: "Green Cloud", def: "Ensemble de pratiques visant à réduire l'impact environnemental du Cloud : efficacité énergétique des datacenters (refroidissement, énergies renouvelables), conception de logiciels économes, gestion intelligente des ressources via algorithmes. Objectif : réduire la consommation des ~3% actuels." },
    { term: "IoT (Internet of Things)", def: "Réseau d'objets physiques (capteurs, appareils connectés) capables de collecter et d'échanger des données via Internet. Problèmes : confidentialité des données, latence, bande passante → motivent Edge/Fog Computing. Domaines : maisons connectées, villes intelligentes, industrie 4.0." },
    { term: "4 couches Edge Computing", def: "Sensors Layer (capteurs et actionneurs IoT) → Device Layer (appareils intelligents, smartphones) → Edge Layer (Edge Nodes/Servers sur LAN/WAN : traitement local avancé, algorithmes) → Cloud Layer (stockage longue durée, ML, analytics globaux)." },
    { term: "Vendor Lock-in", def: "Dépendance envers les outils, API et technologies propriétaires d'un fournisseur Cloud spécifique. Migration difficile et coûteuse vers un autre fournisseur. Solution : adopter des standards ouverts (Kubernetes, Terraform), stratégie multicloud." },
    { term: "RGPD (Cloud Compliance)", def: "Règlement Général sur la Protection des Données (UE). Impose que les données personnelles des citoyens européens soient traitées et stockées en conformité (droit à l'oubli, consentement, localisation des données). Constraint majeur pour le Cloud Public." },
    { term: "HIPAA (Cloud Compliance)", def: "Health Insurance Portability and Accountability Act (USA). Réglementation imposant des exigences strictes sur la protection des données médicales (PHI). Les fournisseurs Cloud qui traitent des données de santé doivent être HIPAA-compliant." },
    { term: "IA & Cloud Computing", def: "Le Cloud fournit la puissance de calcul (GPU, TPU) et les données massives nécessaires à l'entraînement des modèles d'IA/ML. Exemples : AWS SageMaker, Google Vertex AI, Azure Machine Learning, IBM Watson. IA-as-a-Service = démocratisation de l'IA." },
    { term: "Fog Computing", def: "Couche de traitement intermédiaire entre les appareils IoT (Edge) et le Cloud. Les nœuds Fog (routeurs intelligents, gateways) pré-traitent et filtrent les données localement avant envoi au Cloud. Réduit la bande passante et la latence par rapport à un traitement cloud pur." },
    { term: "Mobile Cloud Computing", def: "Paradigme déléguant les calculs intensifs d'un appareil mobile vers des ressources cloud distantes. Résout les contraintes : autonomie batterie, puissance CPU/RAM limitée. Applications : reconnaissance vocale (Siri, Google Assistant), rendu 3D à distance, IA mobile." },
    { term: "PUE (Power Usage Effectiveness)", def: "Indicateur clé du Green Cloud : PUE = Énergie totale datacenter / Énergie consommée par les serveurs. PUE idéal = 1,0. Datacenters classiques : 1,5-2,0. Hyperscalers (Google, Facebook) : ~1,1. Amélioration via refroidissement naturel, énergies renouvelables." },
    { term: "Challenges du Cloud Computing", def: "5 défis principaux : 1) Sécurité des données (confidentialité, intégrité), 2) Vendor Lock-in (dépendance propriétaire), 3) Performances (latence, bande passante), 4) Conformité réglementaire (RGPD, HIPAA, PCI-DSS), 5) Intégration avec les systèmes existants (legacy)." },
    { term: "Cloudlet", def: "Petite infrastructure Cloud déployée localement, à proximité de l'utilisateur. Agit comme un mini-Cloud entre le Cloud distant et les périphériques mobiles/IoT. Principe d'offloading : les tâches lourdes sont déplacées vers le Cloudlet. Connecté en haut débit (4G/5G/fibre). Latence très faible." },
    { term: "MEC (Mobile Edge Computing)", def: "Standardisé par l'ETSI. Solution Cloud pour environnements mobiles : traitement déplacé vers les stations de base des opérateurs (antennes 5G). Apporte capacités Cloud au sein du réseau mobile, à proximité des abonnés. Optimisé pour applications temps réel avec faible latence." },
    { term: "Federated Learning (FL)", def: "Approche ML distribuée : le modèle est entraîné localement sur chaque appareil/serveur WITHOUT transférer les données brutes au serveur central. 3 étapes : (1) envoi du modèle initial, (2) entraînement local, (3) agrégation des paramètres via FedAvg. Renforce la confidentialité." },
    { term: "FedAvg (Federated Averaging)", def: "Algorithme d'agrégation standard du Federated Learning. Calcule la moyenne pondérée des paramètres (poids des neurones) des modèles locaux, en tenant compte du nombre d'exemples de chaque client. Crée un modèle global amélioré sans accéder aux données brutes." },
    { term: "Types de Federated Learning", def: "3 types : Horizontal FL (mêmes caractéristiques, individus différents — ex: plusieurs hôpitaux avec les mêmes champs sur des patients différents) ; Vertical FL (caractéristiques différentes, mêmes individus — ex: banque + assurance sur mêmes clients) ; Transfer FL (pour données hétérogènes)." }
  ]
};
