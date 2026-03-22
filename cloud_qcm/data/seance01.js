// Séance 1 — Introduction au Cloud Computing
const SEANCE_1 = {
  id: 1,
  title: "Introduction Cloud Computing",
  questions: [
    {
      type: "single",
      text: "Quelle entreprise est considérée comme le véritable pionnier du Cloud Computing ?",
      options: ["Amazon Web Services", "Microsoft Azure", "Salesforce.com", "Google Cloud"],
      correct: [2],
      explanation: "Salesforce.com est considéré comme un pionnier du Cloud Computing en lançant en 1999 la livraison d'applications CRM d'entreprise via un simple site web, sans aucune installation locale."
    },
    {
      type: "multi",
      text: "Lesquels de ces services sont des exemples de solutions Cloud utilisées au quotidien ? (plusieurs réponses)",
      options: ["Dropbox", "Microsoft Word (version bureau)", "Gmail", "YouTube"],
      correct: [0, 2, 3],
      explanation: "Dropbox, Gmail et YouTube sont des services Cloud accessibles via Internet. Microsoft Word en version bureau est installé localement, ce n'est pas un service Cloud."
    },
    {
      type: "single",
      text: "Le Cloud Computing permet à des entreprises de :",
      options: ["Acheter obligatoirement leur propre matériel", "Externaliser leur infrastructure informatique via Internet", "Supprimer complètement la notion de serveur", "Fonctionner sans connexion Internet"],
      correct: [1],
      explanation: "Le Cloud Computing permet d'externaliser l'infrastructure informatique et d'accéder à des ressources via Internet, sans avoir à acheter son propre matériel."
    },
    {
      type: "multi",
      text: "Parmi les propositions suivantes, lesquelles sont des fournisseurs majeurs du Cloud Public ? (plusieurs réponses)",
      options: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud", "Mozilla Firefox"],
      correct: [0, 1, 2],
      explanation: "AWS, Microsoft Azure et Google Cloud sont les trois grands fournisseurs de Cloud Public. Mozilla Firefox est un navigateur web, pas un fournisseur Cloud."
    },
    {
      type: "single",
      text: "Selon la définition du NIST, le Cloud Computing permet l'accès à un ensemble partagé de ressources informatiques via quel moyen ?",
      options: ["Un réseau local privé uniquement", "Un réseau de télécommunications (Internet)", "Une connexion directe entre machines", "Un support physique (clé USB, CD)"],
      correct: [1],
      explanation: "Selon le NIST, le Cloud Computing est un modèle permettant l'accès aisé, à la demande et au travers d'un réseau de télécommunications, à un ensemble partagé de ressources informatiques pouvant être rapidement mises en service."
    },
    {
      type: "multi",
      text: "Parmi ces affirmations, lesquelles sont correctes concernant l'originalité du Cloud Computing ? (plusieurs réponses)",
      options: ["Le concept de ressources distantes existait déjà dans les années 1960", "Le Cloud représente un nouveau modèle de consommation des services", "Les technologies de virtualisation modernes ont permis l'essor du Cloud", "Le Cloud Computing est entièrement nouveau et n'a aucune origine antérieure"],
      correct: [0, 1, 2],
      explanation: "Le Cloud s'appuie sur des concepts anciens (calcul distribué, ressources distantes) mais représente bien une innovation : nouveau modèle de consommation, basé sur la virtualisation moderne et l'élasticité."
    },
    {
      type: "multi",
      text: "Quels sont les quatre domaines technologiques dont la convergence a produit le Cloud Computing ? (plusieurs réponses)",
      options: ["L'informatique utilitaire", "Le Grid Computing", "La virtualisation", "L'architecture Orientée Service (SOA)"],
      correct: [0, 1, 2, 3],
      explanation: "Le Cloud Computing est le produit de la convergence de quatre domaines : l'informatique utilitaire, le Grid Computing, la virtualisation et l'architecture Orientée Service (SOA)."
    },
    {
      type: "single",
      text: "Dans l'informatique utilitaire, quel modèle de facturation caractérise les services Cloud ?",
      options: ["Abonnement annuel fixe", "Paiement à la consommation (pay-per-use)", "Achat définitif de licence", "Gratuité totale"],
      correct: [1],
      explanation: "L'informatique utilitaire introduit le concept de services vendus avec un modèle de paiement à la consommation (pay-per-use), où l'on paie uniquement ce que l'on utilise, comme pour l'électricité."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'Architecture Orientée Service (SOA) ?",
      options: ["Un système d'exploitation pour serveurs Cloud", "Une méthode de développement logiciel qui conçoit une application comme un ensemble de services réutilisables et faiblement couplés", "Un protocole réseau pour la communication Cloud", "Un type d'hyperviseur pour la virtualisation"],
      correct: [1],
      explanation: "L'Architecture Orientée Services (SOA) est une méthode de développement logiciel qui conçoit une application comme un ensemble de services réutilisables, faiblement couplés et interconnectés, permettant flexibilité et réduction des coûts d'intégration."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre le Grid Computing et le Cloud Computing ?",
      options: ["Le Grid est axé sur le calcul haute performance (HPC) et la recherche, le Cloud sur des services à la demande accessibles à tous", "Le Grid est plus récent que le Cloud", "Le Cloud ne peut pas faire de calcul distribué", "Le Grid utilise Internet alors que le Cloud utilise un réseau local"],
      correct: [0],
      explanation: "Le Grid Computing était principalement axé sur le calcul haute performance (HPC) pour la recherche. Le Cloud Computing se base sur l'abstraction des ressources, l'élasticité et l'accessibilité à la demande pour tous."
    },
    {
      type: "single",
      text: "Quel est le rôle de la virtualisation dans le Cloud Computing ?",
      options: ["Elle remplace complètement le matériel physique", "Elle crée des versions virtuelles de ressources physiques et fournit l'abstraction des ressources", "Elle supprime le besoin de système d'exploitation", "Elle assure uniquement la sécurité des données"],
      correct: [1],
      explanation: "La virtualisation consiste à créer une version virtuelle d'une ressource physique. Elle fournit l'abstraction des ressources et permet à plusieurs programmes de cohabiter sur le même matériel sans se gêner mutuellement."
    },
    {
      type: "multi",
      text: "Quelles sont les 5 caractéristiques essentielles du Cloud Computing selon le NIST ? (plusieurs réponses)",
      options: ["Libre-service à la demande", "Accès par réseau", "Mutualisation des ressources (pooling)", "Élasticité rapide", "Service mesurable (pay-per-use)"],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les 5 caractéristiques essentielles du Cloud Computing selon le NIST : (1) Libre-service à la demande, (2) Accès par réseau, (3) Mutualisation des ressources (resource pooling), (4) Élasticité rapide, (5) Service mesurable (paiement à l'usage)."
    },
    {
      type: "single",
      text: "Que signifie le concept de 'Libre-service à la demande' dans le Cloud Computing ?",
      options: ["Le client doit contacter le fournisseur pour toute nouvelle ressource", "La ressource informatique est fournie automatiquement sans intervention humaine côté fournisseur", "Les services Cloud sont toujours gratuits", "Le client doit acheter du matériel avant d'accéder au service"],
      correct: [1],
      explanation: "Le libre-service à la demande signifie que la capacité de stockage et la puissance de calcul sont fournies automatiquement selon les besoins du consommateur, sans nécessité d'une intervention humaine côté fournisseur."
    },
    {
      type: "single",
      text: "Qu'est-ce que le concept 'multi-tenant' dans le Cloud ?",
      options: ["Un immeuble hébergeant des serveurs physiques", "Une architecture où une seule instance d'un logiciel ou d'une infrastructure est partagée entre plusieurs utilisateurs (locataires)", "Un type de réseau réservé aux grandes entreprises", "Un protocole de sécurité Cloud"],
      correct: [1],
      explanation: "Le multi-tenant (multi-locataire) désigne une architecture dans laquelle une seule instance d'un logiciel ou d'une infrastructure est partagée entre plusieurs clients. Chaque locataire utilise la même ressource, mais ses données et configurations sont isolées et sécurisées."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'élasticité dans le contexte du Cloud Computing ?",
      options: ["La capacité à stocker des fichiers de grande taille", "La capacité d'un système à s'adapter automatiquement aux changements de charge en augmentant ou diminuant dynamiquement les ressources allouées", "La flexibilité des contrats commerciaux avec le fournisseur", "La possibilité de changer de fournisseur Cloud facilement"],
      correct: [1],
      explanation: "L'élasticité est la capacité d'un système Cloud à s'adapter automatiquement et rapidement aux changements de charge de travail en augmentant ou diminuant dynamiquement les ressources. La capacité est virtuellement infinie et l'ajustement est automatique."
    },
    {
      type: "single",
      text: "Comment les services Cloud sont-ils accessibles selon la caractéristique 'Accès réseau' ?",
      options: ["Uniquement depuis un ordinateur de bureau", "Via Internet avec des techniques standardisées permettant l'accès depuis ordinateur, téléphone ou tablette", "Exclusivement via un réseau privé d'entreprise", "Seulement depuis les locaux du fournisseur Cloud"],
      correct: [1],
      explanation: "Les services Cloud sont mis à disposition sur Internet et utilisent des techniques standardisées qui permettent de s'en servir aussi bien avec un ordinateur qu'un téléphone ou une tablette."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Service Mesuré' (Measured Service) dans le Cloud Computing ?",
      options: ["La limitation volontaire de la bande passante par le fournisseur", "Le paiement à l'usage : le client ne paie que les ressources réellement consommées, avec une facturation transparente", "Un audit mensuel de l'utilisation des ressources", "Un abonnement forfaitaire indépendant de la consommation"],
      correct: [1],
      explanation: "Le Service Mesuré signifie que l'utilisation des ressources est surveillée, contrôlée et rapportée de manière transparente, permettant une facturation à l'usage (pay-per-use). Le client paie uniquement ce qu'il consomme, comme pour l'eau ou l'électricité."
    },
    {
      type: "single",
      text: "Quel modèle de service Cloud correspond à la mise à disposition d'une infrastructure virtualisée (serveurs, stockage, réseau) ?",
      options: ["SaaS (Software as a Service)", "PaaS (Platform as a Service)", "IaaS (Infrastructure as a Service)", "FaaS (Function as a Service)"],
      correct: [2],
      explanation: "IaaS (Infrastructure as a Service) est le modèle où le fournisseur met à disposition une infrastructure virtualisée. Le client gère lui-même l'OS, le middleware et les applications. Exemples : AWS EC2, Azure VMs, Google Compute Engine."
    },
    {
      type: "single",
      text: "Dans le modèle SaaS, qu'est-ce que le client gère directement ?",
      options: ["Le système d'exploitation et les serveurs", "Les bases de données et le middleware", "Rien : il utilise simplement l'application via un navigateur", "Le réseau et le stockage physique"],
      correct: [2],
      explanation: "Dans le modèle SaaS (Software as a Service), le client n'a rien à gérer : il accède à l'application complète via un navigateur. Le fournisseur gère tout (infrastructure, OS, middleware, application). Exemples : Gmail, Salesforce, Dropbox."
    },
    {
      type: "multi",
      text: "Quels sont les 3 modèles de service Cloud définis par le NIST ? (plusieurs réponses)",
      options: ["IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "SaaS (Software as a Service)", "NaaS (Network as a Service)"],
      correct: [0, 1, 2],
      explanation: "Le NIST définit 3 modèles de service Cloud : IaaS (infrastructure), PaaS (plateforme de développement) et SaaS (logiciel). NaaS (Network as a Service) n'est pas dans la définition NIST standard."
    },
    {
      type: "single",
      text: "Quelle analogie illustre le mieux le modèle économique du Cloud Computing ?",
      options: ["Acheter une voiture et la posséder définitivement", "Louer une voiture uniquement quand on en a besoin et payer selon l'usage", "Fabriquer sa propre voiture pour réduire les coûts", "Partager une voiture avec ses voisins en faisant un planning annuel"],
      correct: [1],
      explanation: "Le Cloud Computing suit le modèle OPEX (dépenses opérationnelles) : on paie à l'usage, comme la location d'une voiture. Contrairement au CAPEX (dépenses d'investissement) où l'on achète son propre matériel. Cela réduit les coûts initiaux et offre de la flexibilité."
    },
    {
      type: "multi",
      text: "Quels sont les avantages économiques du Cloud Computing pour une entreprise ? (plusieurs réponses)",
      options: ["Réduction des coûts d'infrastructure initiale (CAPEX)", "Passage d'un modèle CAPEX à un modèle OPEX", "Élimination complète des coûts informatiques", "Meilleure prédictibilité des dépenses IT"],
      correct: [0, 1, 3],
      explanation: "Le Cloud réduit les coûts CAPEX (plus besoin d'acheter du matériel), passe à un modèle OPEX (paiement à l'usage), et améliore la prédictibilité des dépenses. Il n'élimine pas les coûts : il les transforme et les optimise."
    }
  ],
  flashcards: [
    { term: "Cloud Computing (définition NIST)", def: "Modèle permettant l'accès aisé, à la demande, via un réseau, à un ensemble partagé de ressources informatiques configurables (serveurs, stockage, réseaux, applications) pouvant être rapidement mises en service avec un effort minimal. 5 caractéristiques : libre-service, accès réseau, pooling, élasticité, service mesuré." },
    { term: "Salesforce.com — Pionnier du Cloud", def: "Première entreprise considérée comme pionnière du Cloud Computing : lance en 1999 la livraison d'applications CRM d'entreprise via un site web, sans installation locale. Modèle SaaS avant l'heure." },
    { term: "Amazon EC2", def: "Elastic Compute Cloud : service d'Amazon permettant de louer des serveurs virtuels à la demande via Internet. Premier service IaaS grand public, popularise le modèle pay-as-you-go." },
    { term: "5 caractéristiques NIST du Cloud", def: "1) Self-service à la demande (automatique, sans intervention humaine) ; 2) Accès réseau large bande (tout appareil) ; 3) Resource pooling (partage multi-tenant) ; 4) Élasticité rapide (scalabilité à la volée) ; 5) Service mesuré (pay-per-use)." },
    { term: "Multi-tenant (multi-locataire)", def: "Architecture où une seule instance d'un logiciel ou d'une infrastructure est partagée entre plusieurs clients (locataires). Chaque locataire utilise la même ressource, mais ses données et configurations sont isolées. Fondamental au Cloud Public." },
    { term: "Élasticité (Cloud Computing)", def: "Capacité d'un système Cloud à augmenter ou diminuer dynamiquement les ressources allouées (CPU, RAM, stockage) en fonction de la charge de travail, de manière automatique et quasi-instantanée." },
    { term: "Pay-as-you-go (Service Mesuré)", def: "Modèle de facturation Cloud : le client paie uniquement les ressources réellement consommées (heures de calcul, Go de stockage, requêtes…), sans coût fixe ni engagement minimum. Analogue à la facturation de l'électricité." },
    { term: "Grid Computing vs Cloud Computing", def: "Grid : calcul haute performance (HPC) pour la recherche scientifique, protocoles spécifiques, intégration lourde, pas pour le grand public. Cloud : abstraction des ressources, élasticité, self-service, accessible à tous via Internet." },
    { term: "SOA (Architecture Orientée Service)", def: "Méthode de développement logiciel qui décompose une application en services réutilisables, faiblement couplés et interconnectés. Base conceptuelle du Cloud (microservices, API). Favorise flexibilité et réduction des coûts d'intégration." },
    { term: "NIST", def: "National Institute of Standards and Technology (USA). Organisme qui a établi la définition de référence du Cloud Computing avec ses 5 caractéristiques, 3 modèles de service (IaaS/PaaS/SaaS) et 4 modèles de déploiement (public/privé/hybride/communautaire)." },
    { term: "IaaS (Infrastructure as a Service)", def: "Modèle Cloud le plus bas niveau : le fournisseur offre l'infrastructure virtualisée (serveurs, stockage, réseau). Le client gère OS, middleware, applications. Avantage : contrôle maximal. Exemples : AWS EC2, Azure VMs, Google Compute Engine, OVH." },
    { term: "PaaS (Platform as a Service)", def: "Niveau intermédiaire : le fournisseur offre une plateforme de développement (OS + runtime + middleware). Le client déploie ses applications sans gérer l'infrastructure. Idéal pour les développeurs. Exemples : Heroku, Google App Engine, Azure App Service." },
    { term: "SaaS (Software as a Service)", def: "Niveau le plus haut : le fournisseur offre une application complète via navigateur. Le client ne gère rien. Idéal pour les utilisateurs finaux. Exemples : Gmail, Office 365, Salesforce, Dropbox, Zoom, YouTube." },
    { term: "CAPEX vs OPEX (Cloud)", def: "CAPEX (Capital Expenditure) : achat de matériel physique, coût initial élevé, investissement long terme. OPEX (Operational Expenditure) : paiement à l'usage Cloud, coût variable, pas d'investissement initial. Le Cloud transforme le CAPEX en OPEX." },
    { term: "Resource Pooling (mutualisation)", def: "5e caractéristique NIST : les ressources du fournisseur sont mutualisées pour servir plusieurs clients simultanément (multi-tenant). Le client n'a pas de contrôle sur l'emplacement exact des ressources. Modèle indispensable pour la rentabilité du Cloud Public." }
  ]
};
