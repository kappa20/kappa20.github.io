// Séance 6 — Concepts de base du Cloud Computing (Modèles de déploiement)
const SEANCE_6 = {
  id: 6,
  title: "Concepts de base du CC",
  questions: [
    {
      type: "single",
      text: "Combien de types de déploiement Cloud Computing sont présentés dans le cours ?",
      options: ["3", "4", "5", "6"],
      correct: [2],
      explanation: "Le cours présente 5 types de déploiement : Public Cloud, Private Cloud, Hybrid Cloud, Multi-Cloud, et Community Cloud."
    },
    {
      type: "single",
      text: "Le Cloud Public est caractérisé par :",
      options: ["Des ressources détenues et gérées par l'entreprise elle-même", "Des ressources détenues par un fournisseur tiers et partagées entre plusieurs organisations via Internet", "Un accès réservé à une seule organisation", "Des ressources hébergées exclusivement sur site"],
      correct: [1],
      explanation: "Le Cloud Public est un modèle où les ressources informatiques sont détenues et gérées par un fournisseur tiers et partagées entre plusieurs organisations via Internet."
    },
    {
      type: "multi",
      text: "Quels sont les avantages du Cloud Public ? (plusieurs réponses)",
      options: ["Accès de n'importe où", "Tarification à la demande (pay-as-you-go)", "Contrôle total de l'infrastructure par le client", "Haute disponibilité et redondance", "Évolutivité à la demande"],
      correct: [0, 1, 3, 4],
      explanation: "Le Cloud Public offre : accès universel, pay-as-you-go, haute disponibilité, et évolutivité. En revanche, le contrôle total de l'infrastructure reste chez le fournisseur."
    },
    {
      type: "multi",
      text: "Quels sont les inconvénients du Cloud Public ? (plusieurs réponses)",
      options: ["Les clients ne savent pas précisément où sont hébergées leurs données", "Coût initial très élevé", "Les données peuvent migrer d'un datacenter à l'autre", "Moins adapté pour les grandes entreprises avec des applications spécifiques"],
      correct: [0, 2, 3],
      explanation: "Inconvénients : manque de visibilité sur l'emplacement des données, migration possible entre datacenters, moins adapté aux grandes entreprises. Le coût initial est faible (pas élevé)."
    },
    {
      type: "multi",
      text: "Parmi les exemples suivants, lesquels sont des services AWS ? (plusieurs réponses)",
      options: ["EC2 (Elastic Compute Cloud)", "S3 (Simple Storage Service)", "Azure Kubernetes Service", "Lambda (fonction sans serveur)"],
      correct: [0, 1, 3],
      explanation: "EC2, S3 et Lambda sont des services AWS. Azure Kubernetes Service (AKS) est un service Microsoft Azure."
    },
    {
      type: "single",
      text: "Google Cloud Platform (GCP) est particulièrement reconnu pour :",
      options: ["Ses outils de gestion de projets et de collaboration bureautique", "Ses outils d'intelligence artificielle, de machine learning et de données massives (big data)", "Sa domination dans les bases de données relationnelles", "Son intégration exclusive avec les systèmes Windows"],
      correct: [1],
      explanation: "GCP est particulièrement reconnu pour ses outils d'IA, de machine learning et de big data. Exemples : BigQuery, Google Kubernetes Engine (GKE), Google Compute Engine."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Cloud Privé (Private Cloud) ?",
      options: ["Un cloud partagé entre plusieurs organisations via Internet", "Un modèle où les ressources informatiques sont dédiées exclusivement à une seule organisation", "Un cloud qui mixe ressources publiques et privées", "Un cloud géré par plusieurs fournisseurs simultanément"],
      correct: [1],
      explanation: "Le Cloud Privé est un modèle de cloud computing où les ressources informatiques sont dédiées exclusivement à une seule organisation."
    },
    {
      type: "single",
      text: "Combien de types de mise en œuvre d'un Cloud Privé existent ?",
      options: ["2", "3", "4", "5"],
      correct: [1],
      explanation: "Il y a 3 types de mise en œuvre du Cloud Privé : le cloud privé sur site (on-premise), le cloud privé hébergé (hosted), et le cloud privé virtuel."
    },
    {
      type: "multi",
      text: "Quelles sont les caractéristiques du Cloud Privé sur site (on-premise) ? (plusieurs réponses)",
      options: ["L'infrastructure matérielle et logicielle est installée et gérée dans les locaux de l'entreprise", "L'entreprise a un contrôle total sur l'infrastructure, les données et la sécurité", "L'infrastructure est hébergée chez un fournisseur tiers", "Son service informatique gère l'infrastructure"],
      correct: [0, 1, 3],
      explanation: "Cloud privé on-premise : infrastructure entièrement dans les locaux de l'entreprise, contrôle total, service IT interne gère l'infrastructure. Différent du cloud hébergé chez un tiers."
    },
    {
      type: "single",
      text: "Dans le cloud privé virtuel, comment l'isolation des ressources est-elle assurée ?",
      options: ["Par un hyperviseur de type 1 dédié à l'entreprise", "Par des technologies logicielles avancées et un accès via VPN, tout en partageant l'infrastructure physique", "Par une connexion fibre optique dédiée entre l'entreprise et le datacenter", "Par l'installation d'un réseau VLAN exclusif"],
      correct: [1],
      explanation: "Dans le cloud privé virtuel, un environnement isolé est créé au sein d'un cloud public. L'entreprise conserve un contrôle important mais partage l'infrastructure physique. L'isolation est assurée par des technologies logicielles + accès via VPN."
    },
    {
      type: "multi",
      text: "Parmi ces solutions, lesquelles permettent de déployer un Cloud Privé ? (plusieurs réponses)",
      options: ["OpenStack", "VMware vCloud Suite", "Microsoft Azure Stack", "AWS Outposts", "IBM Cloud Private"],
      correct: [0, 1, 2, 3, 4],
      explanation: "Solutions cloud privé : OpenStack (open source), VMware vCloud Suite, Microsoft Azure Stack (extension Azure sur site), AWS Outposts (extension AWS sur site), IBM Cloud Private (conteneurisé)."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Cloud Hybride ?",
      options: ["Un cloud géré par plusieurs fournisseurs publics simultanément", "Une structure mixte de Cloud privé et Cloud public reliés par des fonctions d'intégration ou d'orchestration", "Un cloud réservé aux communautés d'organisations", "Un cloud qui n'utilise que des ressources sur site"],
      correct: [1],
      explanation: "Le cloud hybride est une offre reposant sur une structure mixte Cloud privé et Cloud public, reliés par des fonctions d'intégration ou d'orchestration."
    },
    {
      type: "multi",
      text: "Quels sont les deux principaux avantages du Cloud Hybride ? (plusieurs réponses)",
      options: ["Scalabilité : recours au cloud public lors des pics d'activité", "Sécurité : protection des données sensibles dans le cloud privé", "Coût nul : aucun frais d'infrastructure", "Contrôle total du cloud public"],
      correct: [0, 1],
      explanation: "Avantages clés du cloud hybride : Scalabilité (utiliser le cloud public lors des pics) et Sécurité (protéger les données sensibles dans le cloud privé, hors des risques du cloud public)."
    },
    {
      type: "multi",
      text: "Quels sont les 4 challenges du Cloud Hybride ? (plusieurs réponses)",
      options: ["Complexité de gestion (deux environnements distincts)", "Sécurité (assurer une sécurité uniforme entre les 2 environnements)", "Interopérabilité (différents API, architectures de services)", "Performances (latence due au cloud public, charges dynamiques)"],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 challenges du cloud hybride : (1) Complexité de gestion de 2 environnements, (2) Sécurité uniforme, (3) Interopérabilité (API/outils différents), (4) Performances (latence, charges dynamiques)."
    },
    {
      type: "single",
      text: "Quel est le principal avantage du Cloud Privé par rapport au Cloud Public ?",
      options: ["Coût plus faible et aucune maintenance", "Plus de sécurité et des performances plus élevées avec contrôle de l'infrastructure", "Accès universel depuis n'importe quel appareil", "Aucun besoin de compétences techniques internes"],
      correct: [1],
      explanation: "L'avantage principal du Cloud Privé est le contrôle de l'infrastructure, la sécurité accrue et des performances plus élevées. En contrepartie, le coût est plus élevé et la maintenance est à la charge de l'entreprise."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Multicloud ?",
      options: ["Un seul fournisseur cloud proposant plusieurs types de services", "L'utilisation des services de plusieurs fournisseurs de cloud public pour répondre à différents besoins au sein d'une même organisation", "Un cloud privé avec plusieurs datacenters géographiques", "Un cloud hybride avec plus de deux sites physiques"],
      correct: [1],
      explanation: "Le multicloud désigne l'utilisation des services de plusieurs fournisseurs de cloud public (AWS, GCP, Azure…) pour répondre à différents besoins au sein d'une même organisation."
    },
    {
      type: "single",
      text: "Quel type de Cloud Computing correspond à un environnement partagé entre plusieurs organisations ayant des besoins communs ?",
      options: ["Cloud Public", "Cloud Privé", "Cloud Hybride", "Community Cloud"],
      correct: [3],
      explanation: "Le Community Cloud est partagé entre plusieurs organisations ayant des besoins ou contraintes communs (ex: secteur santé, gouvernement). Les 5 types : Public, Privé, Hybride, Multi-Cloud, Community."
    },
    {
      type: "single",
      text: "Quelle est la différence entre Cloud Hybride et Multicloud ?",
      options: ["Il n'y a aucune différence", "Le Cloud Hybride mélange cloud public ET privé (on-premise), le Multicloud utilise plusieurs fournisseurs de cloud public", "Le Multicloud combine public et privé, le Hybride utilise plusieurs fournisseurs", "Le Cloud Hybride est réservé aux grandes entreprises, le Multicloud aux startups"],
      correct: [1],
      explanation: "Cloud Hybride = combinaison de cloud privé (on-premise ou hébergé) + cloud public, reliés par de l'orchestration. Multicloud = utilisation de plusieurs fournisseurs de cloud public (AWS + GCP + Azure…). Distinction importante à l'examen."
    }
  ],
  flashcards: [
    { term: "IaaS (Infrastructure as a Service)", def: "Le fournisseur offre une infrastructure virtualisée (serveurs, stockage, réseau). Le client gère lui-même l'OS, middleware et applications. Exemples : AWS EC2, Azure VMs, Google Compute Engine. Le plus bas niveau de service Cloud." },
    { term: "PaaS (Platform as a Service)", def: "Le fournisseur offre une plateforme de développement (OS + runtime + middleware). Le client déploie ses applications sans gérer l'infrastructure. Exemples : Heroku, Google App Engine, Azure App Service, Force.com." },
    { term: "SaaS (Software as a Service)", def: "Le fournisseur offre des applications complètes accessibles via navigateur. Le client utilise sans gérer quoi que ce soit. Exemples : Gmail, Office 365, Salesforce, Dropbox, YouTube. Le niveau le plus haut de service Cloud." },
    { term: "Cloud Public", def: "Infrastructure appartenant à un fournisseur tiers (AWS, Azure, GCP), partagée entre clients (multi-tenant), accessible via Internet. Avantages : coût faible, scalabilité illimitée, pay-as-you-go. Inconvénient : contrôle limité, visibilité réduite sur les données." },
    { term: "Cloud Privé (3 types)", def: "Infrastructure dédiée à une seule organisation. 3 types : On-premise (dans les locaux de l'entreprise, contrôle total) ; Hébergé (chez un prestataire, dédié) ; Virtuel (environnement isolé dans un cloud public via VPN). Plus sécurisé mais plus coûteux." },
    { term: "Cloud Hybride", def: "Structure mixte : Cloud privé + Cloud public reliés par de l'intégration/orchestration. Avantages : scalabilité lors des pics (utiliser le public), sécurité des données sensibles (garder dans le privé). Challenges : complexité, sécurité uniforme, interopérabilité, performances." },
    { term: "Multicloud", def: "Utilisation de services de plusieurs fournisseurs de cloud public au sein d'une même organisation pour éviter le Vendor Lock-in, optimiser les coûts et utiliser les forces de chaque fournisseur. Ex : AWS pour stockage, Azure pour analyse, GCP pour IA." },
    { term: "Community Cloud", def: "Infrastructure cloud partagée entre plusieurs organisations ayant des besoins, contraintes ou réglementations communs (ex: secteur santé HIPAA, gouvernement, finance). Mutualisation des coûts avec un niveau de contrôle plus élevé que le cloud public." },
    { term: "OpenStack", def: "Solution open source pour déployer un Cloud Privé. Fournit un ensemble de services pour gérer serveurs, stockage, réseau en mode IaaS. Utilisé par les entreprises, universités et opérateurs télécoms. Gratuit mais nécessite expertise technique." },
    { term: "Vendor Lock-in", def: "Dépendance vis-à-vis des technologies propriétaires d'un fournisseur cloud, rendant difficile la migration vers un autre fournisseur. Motivent le recours au Multicloud et à l'utilisation d'outils open source (Kubernetes, Terraform, OpenStack)." }
  ]
};
