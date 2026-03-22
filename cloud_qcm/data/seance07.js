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
    { term: "IA & Cloud Computing", def: "Le Cloud fournit la puissance de calcul (GPU, TPU) et les données massives nécessaires à l'entraînement des modèles d'IA/ML. Exemples : AWS SageMaker, Google Vertex AI, Azure Machine Learning, IBM Watson. IA-as-a-Service = démocratisation de l'IA." }
  ]
};
