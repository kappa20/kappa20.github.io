/* =========================================================================
   QCM Entrepreneuriat — données & logique
   Basé sur le support "Découverte de l'entrepreneuriat"
   ========================================================================= */

const CATEGORIES = {
  culture:   { name: "Culture entrepreneuriale",       color: "#d97b2b" },
  strategie: { name: "Positionnement stratégique",     color: "#1c2742" },
  marketing: { name: "Communication & Marketing digital", color: "#1f8a5f" },
  pitch:     { name: "Pitch, storytelling & outils numériques", color: "#7c3aed" },
};

const QUESTIONS = [
  // ================= CULTURE ENTREPRENEURIALE =================
  {
    category: "culture",
    question: "Selon le cours, l'entrepreneuriat est le processus qui consiste à...",
    options: [
      "identifier une opportunité, créer une idée innovante et organiser des ressources pour créer une activité capable de produire de la valeur",
      "uniquement lever des fonds auprès des banques",
      "copier un modèle d'affaires existant sans le modifier",
      "gérer uniquement les ressources humaines d'une entreprise",
    ],
    correct: 0,
    explanation: "L'entrepreneuriat identifie une opportunité, crée une idée innovante et organise des ressources humaines, financières et matérielles pour produire de la valeur.",
  },
  {
    category: "culture",
    question: "Comment le cours définit-il l'entreprise ?",
    options: [
      "Une organisation économique et sociale qui combine des ressources humaines, matérielles et financières pour produire des biens/services et réaliser un profit",
      "Un simple lieu de travail sans objectif économique",
      "Une association à but non lucratif uniquement",
      "Un ensemble de machines de production",
    ],
    correct: 0,
    explanation: "L'entreprise combine ressources humaines, matérielles et financières afin de produire des biens ou services et de réaliser un profit.",
  },
  {
    category: "culture",
    question: "Selon le support, l'entrepreneur est une personne qui...",
    options: [
      "suit uniquement les décisions de sa hiérarchie",
      "identifie une idée ou un problème que personne d'autre n'a encore identifié et qui y donne suite",
      "évite de prendre des risques",
      "travaille uniquement dans de grandes entreprises",
    ],
    correct: 1,
    explanation: "L'entrepreneur identifie une idée ou un problème non encore identifié par d'autres, et agit pour y donner suite.",
  },
  {
    category: "culture",
    question: "Laquelle de ces propositions NE fait PAS partie des capacités de l'entrepreneur innovateur selon le cours ?",
    options: [
      "identifier un problème ou un besoin",
      "imaginer une solution nouvelle ou améliorée",
      "éviter tout changement dans l'organisation",
      "transformer cette solution en projet économique",
    ],
    correct: 2,
    explanation: "L'entrepreneur innovateur identifie un besoin, imagine une solution, la transforme en projet et crée de la valeur — il ne cherche jamais à éviter le changement.",
  },
  {
    category: "culture",
    question: "Dans le processus de résolution de problèmes par l'entrepreneur, quel est l'enchaînement correct ?",
    options: [
      "observer l'environnement → identifier les besoins non satisfaits → proposer une solution innovante → transformer en projet/entreprise",
      "créer l'entreprise → observer le marché → chercher un problème",
      "lever des fonds → observer l'environnement → embaucher",
      "copier un concurrent → adapter le prix → vendre",
    ],
    correct: 0,
    explanation: "L'entrepreneur observe son environnement, identifie les besoins non satisfaits, propose une solution innovante, puis la transforme en projet ou en entreprise.",
  },
  {
    category: "culture",
    question: "Parmi les qualités de l'entrepreneur, laquelle correspond à « continuer malgré les difficultés et les échecs » ?",
    options: ["Créativité", "Persévérance", "Esprit d'initiative", "Leadership"],
    correct: 1,
    explanation: "La persévérance est la capacité à continuer malgré les difficultés et les échecs.",
  },
  {
    category: "culture",
    question: "La « prise de risque » chez l'entrepreneur est définie dans le cours comme :",
    options: [
      "l'évitement total de l'incertitude",
      "l'acceptation de l'incertitude liée à la création d'un projet",
      "la délégation du risque à des associés",
      "une qualité réservée aux grandes entreprises",
    ],
    correct: 1,
    explanation: "La prise de risque consiste à accepter l'incertitude liée à la création d'un projet.",
  },
  {
    category: "culture",
    question: "Laquelle de ces compétences N'est PAS citée comme compétence importante de l'entrepreneur ?",
    options: [
      "La gestion du temps et des ressources",
      "L'adaptabilité face aux changements",
      "La maîtrise de la comptabilité internationale",
      "La communication et le travail en réseau",
    ],
    correct: 2,
    explanation: "Le cours cite l'analyse/décision, la gestion du temps et des ressources, l'adaptabilité et la communication/travail en réseau — pas la comptabilité internationale.",
  },
  {
    category: "culture",
    question: "Selon le cours, l'innovation est définie comme :",
    options: [
      "le résultat de la mise en application d'idées nouvelles et de recherches",
      "uniquement la création d'un nouveau produit technologique",
      "une dépense inutile pour l'entreprise",
      "un phénomène réservé aux start-ups",
    ],
    correct: 0,
    explanation: "L'innovation est le résultat de la mise en application d'idées nouvelles et de recherches, créatrice de valeur pour l'entreprise.",
  },
  {
    category: "culture",
    question: "D'après la citation du cours, la plus grande source de l'avantage concurrentiel réside surtout dans :",
    options: ["les coûts", "la qualité uniquement", "la créativité", "la taille de l'entreprise"],
    correct: 2,
    explanation: "« La plus grande source de l'avantage concurrentiel ne réside pas véritablement dans les coûts ou la qualité, mais dans la créativité. »",
  },
  {
    category: "culture",
    question: "Parmi les types d'innovation cités, quel exemple correspond à l'innovation de business model ?",
    options: [
      "Dyson – aspirateur sans sac",
      "Netflix – abonnement mensuel pour accéder à des contenus en streaming",
      "Toyota – système de production Lean",
      "Airbnb – plateforme de location entre particuliers",
    ],
    correct: 1,
    explanation: "Netflix illustre l'innovation de business model : modifier la manière dont l'entreprise crée et capture de la valeur (abonnement).",
  },
  {
    category: "culture",
    question: "Quel exemple illustre une innovation de processus selon le cours ?",
    options: [
      "Toyota – système de production Lean",
      "Dyson – aspirateur sans sac",
      "Netflix – abonnement streaming",
      "OCP – nouvelles structures de gestion",
    ],
    correct: 0,
    explanation: "Toyota et son système de production Lean illustrent l'innovation de processus (amélioration des méthodes de production).",
  },
  {
    category: "culture",
    question: "Le réseau d'innovation décrit dans le cours comporte quatre types d'acteurs clés. Lequel N'EN fait PAS partie ?",
    options: [
      "Le comité d'innovation",
      "Le responsable innovation",
      "Les catalyseurs d'innovation (relais)",
      "Les actionnaires majoritaires",
    ],
    correct: 3,
    explanation: "Les quatre acteurs cités sont : le comité d'innovation, le responsable innovation, les catalyseurs d'innovation (relais) et les collaborateurs.",
  },
  {
    category: "culture",
    question: "Lequel de ces chercheurs N'est PAS cité parmi les approches théoriques de l'entrepreneuriat dans le cours ?",
    options: ["Joseph Schumpeter", "Peter Drucker", "Adam Smith", "Saras Sarasvathy"],
    correct: 2,
    explanation: "Le cours cite Cantillon, Say, Schumpeter, Drucker, Christensen et Sarasvathy — pas Adam Smith.",
  },
  {
    category: "culture",
    question: "Selon Richard Cantillon, l'entrepreneur est une personne qui :",
    options: [
      "prend des risques en achetant à un prix certain pour vendre à un prix incertain",
      "investit uniquement dans l'immobilier",
      "évite toute activité commerciale risquée",
      "travaille exclusivement pour l'État",
    ],
    correct: 0,
    explanation: "Cantillon décrit l'entrepreneur comme agissant dans un contexte d'incertitude économique : il achète à prix certain pour vendre à prix incertain.",
  },
  {
    category: "culture",
    question: "Jean-Baptiste Say considère l'entrepreneur comme :",
    options: [
      "un simple investisseur passif",
      "un organisateur de la production qui combine travail, capital et matières premières",
      "un employé de l'État",
      "un innovateur uniquement technologique",
    ],
    correct: 1,
    explanation: "Pour Say, l'entrepreneur organise la production en combinant travail, capital et matières premières.",
  },
  {
    category: "culture",
    question: "Selon Joseph Schumpeter, le remplacement des anciennes pratiques par de nouvelles plus efficaces grâce à l'innovation s'appelle :",
    options: ["la destruction créatrice", "l'effectuation", "le positionnement stratégique", "la disruption sociale"],
    correct: 0,
    explanation: "Schumpeter nomme « destruction créatrice » le remplacement des anciennes pratiques par de nouvelles combinaisons plus efficaces.",
  },
  {
    category: "culture",
    question: "Pour Peter Drucker, l'entrepreneuriat consiste avant tout à :",
    options: [
      "éviter tout changement",
      "identifier et exploiter les opportunités créées par le changement",
      "minimiser l'innovation",
      "copier les concurrents",
    ],
    correct: 1,
    explanation: "Drucker définit l'entrepreneuriat comme l'identification et l'exploitation des opportunités créées par le changement.",
  },
  {
    category: "culture",
    question: "Clayton Christensen est connu pour sa théorie de :",
    options: ["l'effectuation", "la destruction créatrice", "l'innovation disruptive", "la proposition de valeur"],
    correct: 2,
    explanation: "Christensen a théorisé l'innovation disruptive : des innovations qui transforment profondément un marché.",
  },
  {
    category: "culture",
    question: "Selon Saras Sarasvathy, la théorie de l'effectuation avance que les entrepreneurs :",
    options: [
      "commencent toujours avec un plan précis et un objectif clairement défini",
      "commencent souvent avec les ressources dont ils disposent (compétences, connaissances, réseau, moyens)",
      "attendent un financement bancaire avant d'agir",
      "suivent un business plan rigide sans jamais l'adapter",
    ],
    correct: 1,
    explanation: "L'effectuation part des ressources disponibles (compétences, connaissances, réseau, moyens) pour construire progressivement le projet.",
  },
  {
    category: "culture",
    question: "Laquelle de ces caractéristiques NE définit PAS une opportunité entrepreneuriale selon le cours ?",
    options: [
      "l'existence d'un besoin sur le marché",
      "la possibilité de proposer une solution innovante",
      "la capacité de créer de la valeur économique ou sociale",
      "l'absence totale de concurrence sur le marché",
    ],
    correct: 3,
    explanation: "Une opportunité se caractérise par un besoin réel, une solution innovante possible et une création de valeur — pas par l'absence de concurrence.",
  },
  {
    category: "culture",
    question: "Quelle est la différence entre une « idée » et une « opportunité » entrepreneuriale selon le cours ?",
    options: [
      "Il n'y a aucune différence, ce sont des synonymes",
      "Une idée est une simple inspiration ; une opportunité répond à un besoin réel du marché et peut être transformée en projet économique",
      "Une opportunité est uniquement une idée brevetée",
      "Une idée nécessite toujours un financement, pas une opportunité",
    ],
    correct: 1,
    explanation: "L'idée est une simple inspiration (ex : « ouvrir un café »), l'opportunité répond à un besoin réel (ex : « café pour étudiants avec wifi près d'une université »).",
  },
  {
    category: "culture",
    question: "Dans l'exemple du cours, « ouvrir un café » est qualifié d' :",
    options: ["opportunité entrepreneuriale", "idée", "innovation disruptive", "stratégie de différenciation"],
    correct: 1,
    explanation: "« Ouvrir un café » est l'exemple donné pour illustrer une simple idée, non encore transformée en opportunité.",
  },
  {
    category: "culture",
    question: "Comment les entrepreneurs identifient-ils souvent des opportunités selon le cours ?",
    options: [
      "en évitant tout contact avec les consommateurs",
      "en observant les problèmes du quotidien, en analysant les besoins et en étudiant les tendances du marché",
      "en copiant strictement un concurrent",
      "en ignorant les changements technologiques",
    ],
    correct: 1,
    explanation: "Les opportunités s'identifient en observant les problèmes quotidiens, en analysant les besoins des consommateurs et en étudiant les tendances du marché.",
  },

  // ================= POSITIONNEMENT STRATÉGIQUE =================
  {
    category: "strategie",
    question: "Parmi les outils de l'entrepreneur cités dans le cours, lequel sert à l'analyse de l'environnement externe ?",
    options: ["PESTEL", "SWOT", "Business Model Canvas", "Mix marketing"],
    correct: 0,
    explanation: "Le PESTEL est présenté comme l'outil d'analyse de l'environnement externe de l'entreprise.",
  },
  {
    category: "strategie",
    question: "Le SWOT est décrit dans le cours comme un outil :",
    options: [
      "de gestion financière uniquement",
      "d'analyse stratégique interne et externe",
      "de calcul du taux de conversion",
      "de référencement naturel",
    ],
    correct: 1,
    explanation: "Le SWOT est l'outil d'analyse stratégique interne (forces/faiblesses) et externe (opportunités/menaces).",
  },
  {
    category: "strategie",
    question: "Le Business Model Canvas (BMC) est présenté comme :",
    options: [
      "un outil d'analyse PESTEL",
      "un modèle de création de valeur d'une entreprise",
      "un indicateur de performance SEA",
      "un plan de communication digitale",
    ],
    correct: 1,
    explanation: "Le BMC est décrit comme le modèle de création de valeur d'une entreprise.",
  },
  {
    category: "strategie",
    question: "Selon le cours, l'entreprise représente :",
    options: [
      "l'aboutissement du processus entrepreneurial",
      "une étape facultative de l'entrepreneuriat",
      "uniquement une structure juridique",
      "un obstacle à l'innovation",
    ],
    correct: 0,
    explanation: "L'entreprise est présentée comme la concrétisation / l'aboutissement du processus entrepreneurial.",
  },
  {
    category: "strategie",
    question: "Lequel de ces éléments N'est PAS cité comme objectif principal de l'entreprise ?",
    options: [
      "créer de la valeur",
      "répondre aux besoins des consommateurs",
      "maximiser uniquement les dividendes des actionnaires",
      "assurer sa croissance et sa pérennité",
    ],
    correct: 2,
    explanation: "Les objectifs cités sont : créer de la valeur, répondre aux besoins des consommateurs, assurer croissance et pérennité.",
  },
  {
    category: "strategie",
    question: "Les ressources humaines d'une entreprise comprennent notamment, selon le cours :",
    options: [
      "les machines et équipements",
      "les dirigeants, employés, compétences et savoir-faire",
      "le capital et les investissements",
      "les matières premières",
    ],
    correct: 1,
    explanation: "Les ressources humaines regroupent dirigeants, employés, compétences et savoir-faire.",
  },
  {
    category: "strategie",
    question: "Les ressources financières d'une entreprise incluent, selon le cours :",
    options: [
      "les bâtiments et machines",
      "le capital, les investissements et les financements",
      "les compétences des employés",
      "les matières premières",
    ],
    correct: 1,
    explanation: "Les ressources financières regroupent le capital, les investissements et les financements.",
  },
  {
    category: "strategie",
    question: "Parmi les contributions de l'entreprise citées dans le cours, laquelle N'est PAS mentionnée ?",
    options: [
      "satisfaire les besoins des consommateurs",
      "générer des emplois",
      "éliminer systématiquement la concurrence",
      "participer au développement économique et social",
    ],
    correct: 2,
    explanation: "Le cours cite la satisfaction des besoins, la création de valeur, la génération d'emplois et le développement économique/social — pas l'élimination de la concurrence.",
  },
  {
    category: "strategie",
    question: "Que représente l'acronyme PESTEL dans le contexte des outils stratégiques de l'entrepreneur ?",
    options: [
      "un outil d'analyse de l'environnement externe de l'entreprise",
      "un indicateur financier de rentabilité",
      "une méthode de calcul du taux de clic",
      "un logiciel de gestion de projet",
    ],
    correct: 0,
    explanation: "Le PESTEL analyse l'environnement externe (politique, économique, socioculturel, technologique, écologique, légal).",
  },
  {
    category: "strategie",
    question: "Dans le positionnement stratégique du projet, le cours associe la « proposition de valeur » à :",
    options: [
      "la vision stratégique et l'analyse SWOT",
      "uniquement au prix de vente",
      "au choix des réseaux sociaux",
      "à la gestion du stress lors du pitch",
    ],
    correct: 0,
    explanation: "Le programme du cours regroupe proposition de valeur, vision stratégique et analyse SWOT dans le positionnement stratégique du projet.",
  },

  // ================= COMMUNICATION & MARKETING DIGITAL =================
  {
    category: "marketing",
    question: "Selon la première approximation donnée dans le cours, le marketing est :",
    options: [
      "l'ensemble des moyens dont dispose une entreprise pour vendre ses produits à ses clients d'une manière rentable",
      "uniquement la publicité télévisée",
      "la gestion des ressources humaines",
      "un synonyme de comptabilité",
    ],
    correct: 0,
    explanation: "Le marketing est défini comme l'ensemble des moyens permettant de vendre les produits d'une entreprise à ses clients de manière rentable.",
  },
  {
    category: "marketing",
    question: "Le marketing de masse (indifférencié) correspond, selon la chronologie du cours, à la période :",
    options: ["avant les années 70", "les années 70 et 80", "les années 90 à 2000", "après 2010"],
    correct: 0,
    explanation: "Le marketing de masse (indifférencié) précède les années 70.",
  },
  {
    category: "marketing",
    question: "Le marketing individualisé (one to one) s'est développé, selon le cours, durant :",
    options: ["avant les années 70", "les années 70 et 80", "les années 90 à 2000", "les années 2000 à 2010"],
    correct: 2,
    explanation: "Le marketing individualisé (one to one) / digital se développe entre les années 90 et 2000.",
  },
  {
    category: "marketing",
    question: "Dans la démarche marketing (SCP), que désignent ces trois lettres ?",
    options: [
      "Segmentation, Ciblage, Positionnement",
      "Stratégie, Communication, Publicité",
      "Système, Contrôle, Performance",
      "Sponsoring, Contenu, Publication",
    ],
    correct: 0,
    explanation: "SCP = Segmentation, Ciblage, Positionnement, étape centrale de la démarche marketing.",
  },
  {
    category: "marketing",
    question: "Le Mix Marketing (4P) comprend Produit, Prix, Place et :",
    options: ["Publipromotion", "Personnel", "Performance", "Permission"],
    correct: 0,
    explanation: "Le 4ᵉ P classique est la Publipromotion (publicité, relations publiques, marketing direct, promotion des ventes).",
  },
  {
    category: "marketing",
    question: "À l'ère digitale, les 4P du marketing deviennent au moins 5P. Lequel de ces éléments N'est PAS cité comme « P » supplémentaire ?",
    options: ["Personnel/People", "Personnalisation", "Physical Evidence", "Production"],
    correct: 3,
    explanation: "Les P supplémentaires cités sont Personnel/People, Personnalisation, Physical Evidence et Permission marketing — pas Production.",
  },
  {
    category: "marketing",
    question: "Le « Physical Evidence » dans le marketing digital désigne :",
    options: [
      "les preuves matérielles / signaux de réassurance sur un site (téléphone, adresse, photos…)",
      "le prix physique d'un produit",
      "le lieu de production",
      "le nombre d'employés physiquement présents",
    ],
    correct: 0,
    explanation: "Le Physical Evidence matérialise les signaux de réassurance en ligne : numéro de téléphone, labels, adresse, photos de l'entreprise…",
  },
  {
    category: "marketing",
    question: "Le « Permission Marketing » repose principalement sur :",
    options: [
      "la transparence et l'honnêteté envers le consommateur pour une relation durable",
      "l'achat massif de publicité",
      "l'espionnage des concurrents",
      "la vente forcée",
    ],
    correct: 0,
    explanation: "Le Permission Marketing mise sur la transparence et l'honnêteté pour entretenir une relation durable avec la marque.",
  },
  {
    category: "marketing",
    question: "Les médias « earned » (gagnés) correspondent à :",
    options: [
      "les relations presse et le bouche-à-oreille généré via les médias sociaux",
      "les sites web et blogs de l'entreprise",
      "les bannières publicitaires payantes",
      "les campagnes SEA",
    ],
    correct: 0,
    explanation: "Les médias gagnés recouvrent les relations presse et le bouche-à-oreille généré, notamment via les médias sociaux.",
  },
  {
    category: "marketing",
    question: "Les médias « paid » (achetés) incluent notamment :",
    options: [
      "les newsletters de l'entreprise",
      "le SEA, les bannières publicitaires (display) et la présence sur sites affiliés",
      "les comptes de réseaux sociaux de la marque",
      "les relations presse gratuites",
    ],
    correct: 1,
    explanation: "Les médias achetés regroupent le SEA, le display et la présence sur sites affiliés — l'organisation paie pour être visible.",
  },
  {
    category: "marketing",
    question: "Les médias « owned » (possédés) désignent :",
    options: [
      "les publicités achetées sur Google",
      "les sites web, blogs, newsletters et applications mobiles de l'entreprise",
      "les articles de presse obtenus gratuitement",
      "le bouche-à-oreille",
    ],
    correct: 1,
    explanation: "Les médias possédés sont ceux dont l'entreprise est propriétaire : site web, blogs, newsletters, applications, pages sociales.",
  },
  {
    category: "marketing",
    question: "Parmi les 5 formes de différenciation, laquelle consiste à offrir des produits à valeur perçue supérieure, justifiant un prix plus élevé ?",
    options: [
      "La différenciation par sophistication",
      "La différenciation par épuration",
      "La différenciation par spécialisation",
      "La différenciation par le temps",
    ],
    correct: 0,
    explanation: "La sophistication offre une valeur perçue supérieure grâce à un effort de qualité, justifiant un prix plus élevé.",
  },
  {
    category: "marketing",
    question: "La différenciation « par épuration » consiste à :",
    options: [
      "rechercher le produit le plus simple, avec un coût plus bas",
      "cibler un segment de marché très précis",
      "miser sur un budget de communication important",
      "offrir une qualité toujours supérieure",
    ],
    correct: 0,
    explanation: "L'épuration recherche le produit le plus simple possible, avec un coût réduit grâce à cette simplification (ex : produits jetables).",
  },
  {
    category: "marketing",
    question: "La différenciation « par spécialisation » consiste à :",
    options: [
      "simplifier au maximum le produit",
      "rechercher un segment de marché spécifique, délimité géographiquement ou par comportement d'achat",
      "jouer uniquement sur les délais de livraison",
      "construire une image de marque forte",
    ],
    correct: 1,
    explanation: "La spécialisation cible un segment de marché précis, délimité en termes de comportement d'achat et/ou de géographie.",
  },
  {
    category: "marketing",
    question: "La différenciation « par la marque » nécessite notamment, selon le cours :",
    options: [
      "un budget de communication significatif et des actions de R&D pour garantir la qualité",
      "l'absence totale de publicité",
      "la suppression du service client",
      "la simplification extrême du produit",
    ],
    correct: 0,
    explanation: "La différenciation par la marque exige des actions de R&D pour garantir la qualité et un budget de communication conséquent.",
  },
  {
    category: "marketing",
    question: "L'objectif du référencement naturel (SEO) est de :",
    options: [
      "positionner efficacement et durablement une page Web sur les bons mots-clés dans les résultats naturels des moteurs de recherche",
      "payer pour apparaître en tête des résultats",
      "créer des comptes sur les réseaux sociaux",
      "envoyer des emails promotionnels",
    ],
    correct: 0,
    explanation: "Le SEO vise un positionnement efficace et durable sur les bons mots-clés dans les résultats naturels (non payants).",
  },
  {
    category: "marketing",
    question: "Que signifie l'acronyme SERP ?",
    options: [
      "Search Engine Result Pages",
      "Social Engagement Rate Percentage",
      "Site Efficiency Ranking Process",
      "Search Engine Referral Program",
    ],
    correct: 0,
    explanation: "SERP = Search Engine Result Pages, les pages de résultats affichées par un moteur de recherche.",
  },
  {
    category: "marketing",
    question: "Selon les données citées dans le cours (décembre 2018), quelle est la part de marché de Google parmi les moteurs de recherche dans le monde ?",
    options: ["environ 50 %", "environ 70 %", "environ 92 %", "environ 99 %"],
    correct: 2,
    explanation: "Google détenait environ 92,25 % de parts de marché des moteurs de recherche en décembre 2018.",
  },
  {
    category: "marketing",
    question: "Parmi les trois facteurs qui transforment la recherche sur le Web selon Google (cités dans le cours), lequel N'EN fait PAS partie ?",
    options: [
      "le mobile comme interface de référence (Index Mobile First)",
      "le Web sémantique",
      "le Web vocal",
      "le Web décentralisé (blockchain)",
    ],
    correct: 3,
    explanation: "Les trois facteurs cités sont le mobile (Index Mobile First), le Web sémantique et le Web vocal — pas la blockchain.",
  },
  {
    category: "marketing",
    question: "Le référencement naturel s'appuie, selon le cours, sur trois piliers. Lequel N'EN fait PAS partie ?",
    options: [
      "les critères techniques liés à la structure du site",
      "les critères in page / critères de contenu",
      "les critères off page / critères de popularité",
      "les critères de prix des produits",
    ],
    correct: 3,
    explanation: "Les trois piliers du SEO sont : critères techniques, critères in page (contenu) et critères off page (popularité).",
  },
  {
    category: "marketing",
    question: "Que signifie l'acronyme SEM dans le marketing digital ?",
    options: ["SEM = SEO + SEA", "SEM = Site Engagement Metric", "SEM = Social Engagement Marketing", "SEM = Search Email Marketing"],
    correct: 0,
    explanation: "Le SEM (Search Engine Marketing) combine le SEO (référencement naturel) et le SEA (référencement payant).",
  },
  {
    category: "marketing",
    question: "Le SEA (Search Engine Advertising) désigne :",
    options: [
      "le référencement naturel gratuit",
      "les liens sponsorisés / référencement payant",
      "l'analyse d'audience des sites concurrents",
      "la mesure du taux de rebond",
    ],
    correct: 1,
    explanation: "Le SEA correspond aux liens sponsorisés, c'est-à-dire au référencement payant sur les moteurs de recherche.",
  },
  {
    category: "marketing",
    question: "Le CTR (Click Through Rate) mesure :",
    options: [
      "le nombre de clics sur une annonce par rapport au nombre d'impressions",
      "le coût total d'une campagne",
      "la durée moyenne d'une session",
      "le nombre total de pages vues",
    ],
    correct: 0,
    explanation: "Le CTR mesure le nombre de clics par rapport au nombre d'affichages (impressions) d'une annonce.",
  },
  {
    category: "marketing",
    question: "Parmi les indicateurs de performance d'une campagne SEA cités dans le cours, lequel N'EN fait PAS partie ?",
    options: [
      "le taux de clics (CTR)",
      "le coût par clic moyen (CPC moyen)",
      "la position moyenne",
      "le taux de fidélisation client sur 5 ans",
    ],
    correct: 3,
    explanation: "Les indicateurs SEA cités sont : CTR, CPC moyen, position moyenne et impressions.",
  },
  {
    category: "marketing",
    question: "L'inbound marketing consiste, selon le cours, à délivrer :",
    options: [
      "le bon contenu, à la bonne personne, au bon moment",
      "un maximum de publicités à tous les internautes",
      "uniquement des emails commerciaux",
      "des produits gratuits sans ciblage",
    ],
    correct: 0,
    explanation: "L'inbound marketing délivre le bon contenu, à la bonne personne, au bon moment.",
  },
  {
    category: "marketing",
    question: "Dans le processus de conversion de l'inbound marketing, quel est l'ordre correct des étapes ?",
    options: [
      "thank you page → landing page → call to action",
      "call to action → landing page → thank you page",
      "landing page → call to action → thank you page",
      "thank you page → call to action → landing page",
    ],
    correct: 1,
    explanation: "Le visiteur clique sur un call to action, arrive sur une landing page avec formulaire, puis sur une thank you page.",
  },
  {
    category: "marketing",
    question: "Le web analytics est défini dans le cours comme :",
    options: [
      "l'activité de mesure, de collecte, d'analyse et de reporting des données Internet à des fins de compréhension et d'optimisation des usages Web",
      "uniquement la création de sites web",
      "la vente en ligne de produits",
      "la gestion des réseaux sociaux",
    ],
    correct: 0,
    explanation: "Le web analytics mesure, collecte, analyse et reporte les données Internet pour comprendre et optimiser les usages Web.",
  },
  {
    category: "marketing",
    question: "Le taux de conversion se calcule comme :",
    options: [
      "nombre de visiteurs / nombre de conversions",
      "nombre de conversions / nombre de visiteurs",
      "nombre de clics / nombre d'impressions",
      "nombre de sessions / nombre d'utilisateurs",
    ],
    correct: 1,
    explanation: "Taux de conversion = nombre de conversions / nombre de visiteurs.",
  },
  {
    category: "marketing",
    question: "Google Analytics fournit, selon le cours, quatre catégories d'indicateurs. Laquelle N'EN fait PAS partie ?",
    options: [
      "indicateurs d'audience",
      "indicateurs d'acquisition",
      "indicateurs de comportement",
      "indicateurs de solvabilité bancaire",
    ],
    correct: 3,
    explanation: "Les 4 catégories citées sont : audience, acquisition, comportement et conversion.",
  },
  {
    category: "marketing",
    question: "Selon le cours, une « session » sur Google Analytics prend fin après combien de temps d'inactivité ?",
    options: ["5 minutes", "15 minutes", "30 minutes", "60 minutes"],
    correct: 2,
    explanation: "Une session prend fin après 30 minutes d'inactivité de l'utilisateur.",
  },
  {
    category: "marketing",
    question: "Le « taux de rebond » désigne :",
    options: [
      "la part de sessions où une seule page a été vue",
      "le nombre total de visiteurs uniques",
      "le pourcentage de clics sur une publicité",
      "le temps moyen passé sur le site",
    ],
    correct: 0,
    explanation: "Le taux de rebond correspond à la part de sessions où une seule page a été consultée.",
  },
  {
    category: "marketing",
    question: "Le « trafic direct » mesuré par Google Analytics correspond à :",
    options: [
      "aux visiteurs venant des réseaux sociaux",
      "aux utilisateurs qui saisissent directement l'URL du site, viennent d'un email ou de favoris",
      "aux visiteurs issus d'une campagne Adwords",
      "aux visiteurs issus du référencement naturel",
    ],
    correct: 1,
    explanation: "Le trafic direct regroupe les utilisateurs saisissant directement l'URL, venant d'un email ou de leurs favoris.",
  },

  // ---- Compléments : étude de marché & outils marketing digital ----
  {
    category: "marketing",
    question: "Selon le cours, quelle est la première étape pour réaliser une étude de marché ?",
    options: ["Analyser l'offre", "Définir son marché", "Analyser la demande", "Analyser l'environnement du projet"],
    correct: 1,
    explanation: "Les 4 étapes citées sont, dans l'ordre : définir son marché, analyser la demande, analyser l'offre, analyser l'environnement du projet.",
  },
  {
    category: "marketing",
    question: "Dans les étapes de l'étude de marché citées dans le cours, quel est l'ordre correct ?",
    options: [
      "Définir le marché → analyser la demande → analyser l'offre → analyser l'environnement",
      "Analyser l'offre → définir le marché → analyser la demande → analyser l'environnement",
      "Analyser l'environnement → analyser la demande → analyser l'offre → définir le marché",
      "Analyser la demande → analyser l'offre → définir le marché → analyser l'environnement",
    ],
    correct: 0,
    explanation: "L'étude de marché suit l'ordre : définir le marché, analyser la demande, analyser l'offre, puis analyser l'environnement du projet.",
  },
  {
    category: "marketing",
    question: "Quel outil gratuit de Google permet d'accéder aux données issues des requêtes saisies dans son moteur de recherche (tendances) ?",
    options: ["Google Analytics", "Google Trends", "Google Alert", "Google AdPlanner"],
    correct: 1,
    explanation: "Google Trends (trends.google.fr) donne accès aux données issues des requêtes des internautes.",
  },
  {
    category: "marketing",
    question: "Quel outil Google, en complément de la suggestion de mots-clés, donne des informations sur les usages d'Internet et le comportement des internautes ?",
    options: ["Consumer Barometer", "Feedly", "Radian6", "SimilarWeb"],
    correct: 0,
    explanation: "Consumer Barometer fournit de nombreuses informations sur les usages d'Internet et le comportement des internautes.",
  },
  {
    category: "marketing",
    question: "Parmi les outils de veille cités dans le cours, lequel est un agrégateur de flux RSS ?",
    options: ["Google Alert", "Feedly", "Twitter", "Radian6"],
    correct: 1,
    explanation: "Feedly agrège les flux RSS pour afficher sur une page personnalisable les nouveautés des sites suivis.",
  },
  {
    category: "marketing",
    question: "Google Alert permet de :",
    options: [
      "recevoir des alertes lorsque du contenu susceptible d'intéresser est publié sur le Web",
      "mesurer le taux de conversion d'un site",
      "analyser l'audience d'un site concurrent",
      "créer des campagnes SEA",
    ],
    correct: 0,
    explanation: "Google Alert envoie des alertes lorsque du contenu correspondant à un sujet suivi est publié sur le Web.",
  },
  {
    category: "marketing",
    question: "Radian6 est cité dans le cours comme un outil utilisé pour :",
    options: [
      "le référencement naturel",
      "l'analyse de sentiment (positif, négatif, neutre) des conversations en ligne",
      "la gestion de campagnes Adwords",
      "la création de landing pages",
    ],
    correct: 1,
    explanation: "Radian6 est un outil de « social media monitoring » permettant l'analyse de sentiment des conversations en ligne.",
  },
  {
    category: "marketing",
    question: "L'outil Page Speed Insight, cité dans le cours, sert à :",
    options: [
      "auditer la vitesse et l'optimisation d'un site Web",
      "suivre les tendances de recherche",
      "gérer les réseaux sociaux",
      "calculer le taux de rebond",
    ],
    correct: 0,
    explanation: "Page Speed Insight fournit un diagnostic de l'efficacité (vitesse, optimisation) d'un site Web fixe ou mobile.",
  },
  {
    category: "marketing",
    question: "Une campagne Google Adwords (SEA) peut répondre à plusieurs objectifs. Lequel N'est PAS cité dans le cours ?",
    options: [
      "obtention rapide de trafic lors d'un lancement de site",
      "réponse à une saisonnalité forte ou à un délai court",
      "visibilité gratuite dans les moteurs de recherche",
      "remplacement total du référencement naturel",
    ],
    correct: 3,
    explanation: "Les objectifs cités sont : trafic rapide au lancement, réponse à la saisonnalité, et visibilité gratuite — le SEA complète le SEO, il ne le remplace pas.",
  },
  {
    category: "marketing",
    question: "Selon le cours, dans quel pourcentage des cas une annonce Adwords apparaît-elle sans être cliquée, assurant ainsi une visibilité gratuite ?",
    options: ["environ 50 %", "environ 75 %", "environ 95 %", "environ 20 %"],
    correct: 2,
    explanation: "Le taux de clic se situe entre 1 et 5 % : dans 95 % des cas, l'annonce apparaît donc sans être cliquée.",
  },
  {
    category: "marketing",
    question: "Parmi les trois méthodes complémentaires pour identifier les groupes de mots-clés, laquelle consiste à écouter directement les utilisateurs concernés ?",
    options: ["Exploiter les informations terrain", "Utiliser les outils Google", "Utiliser Answerthepublic", "Utiliser Ubersuggest"],
    correct: 0,
    explanation: "La première méthode citée consiste à exploiter les informations terrain, c'est-à-dire l'écoute des utilisateurs concernés.",
  },
  {
    category: "marketing",
    question: "Parmi les outils Google cités pour identifier des mots-clés, lequel suggère des mots complémentaires correspondant aux expressions les plus recherchées ?",
    options: ["Google Adwords", "l'autocomplétion Google", "Google Analytics", "Google Alert"],
    correct: 1,
    explanation: "L'autocomplétion Google suggère des mots complémentaires correspondant aux expressions les plus recherchées.",
  },
  {
    category: "marketing",
    question: "Answerthepublic et Ubersuggest sont cités dans le cours comme :",
    options: [
      "des outils d'identification de mots-clés",
      "des outils de gestion de projet",
      "des outils de création de landing pages",
      "des réseaux sociaux professionnels",
    ],
    correct: 0,
    explanation: "Ce sont des « autres outils » complémentaires pour trouver des mots-clés pertinents.",
  },
  {
    category: "marketing",
    question: "Parmi les indicateurs d'audience de Google Analytics, lequel mesure le nombre total de pages consultées, visites répétées incluses ?",
    options: ["les pages vues", "le taux de rebond", "la durée moyenne des sessions", "le trafic direct"],
    correct: 0,
    explanation: "Les pages vues correspondent au nombre total de pages consultées, y compris les visites répétées sur une même page.",
  },
  {
    category: "marketing",
    question: "Selon le cours, la durée moyenne des sessions correspond à :",
    options: [
      "la durée totale de toutes les sessions divisée par le nombre de sessions",
      "le temps maximal passé sur une page",
      "le nombre de pages vues par utilisateur",
      "le taux de conversion moyen",
    ],
    correct: 0,
    explanation: "La durée moyenne des sessions = durée totale de toutes les sessions / nombre de sessions.",
  },
  {
    category: "marketing",
    question: "Un visiteur consulte une seule page pendant 15 minutes puis quitte le site. Quelle durée Google Analytics comptabilise-t-il pour cette session ?",
    options: ["15 minutes", "30 minutes", "0 seconde", "1 minute"],
    correct: 2,
    explanation: "Google considère qu'une session n'ayant affiché qu'une seule page dure 0 seconde, même si l'utilisateur est resté longtemps sur cette page.",
  },
  {
    category: "marketing",
    question: "Le trafic social mesuré par Google Analytics correspond à :",
    options: [
      "au trafic issu des réseaux sociaux (Twitter, Facebook, etc.)",
      "aux visiteurs saisissant directement l'URL",
      "au trafic issu des campagnes Adwords",
      "au trafic issu du bouche-à-oreille hors ligne",
    ],
    correct: 0,
    explanation: "Le trafic social regroupe les visiteurs issus des plateformes sociales comme Twitter ou Facebook.",
  },
  {
    category: "marketing",
    question: "Le trafic payant (paid search) mesuré par Google Analytics indique :",
    options: [
      "le trafic issu des campagnes Adwords",
      "le trafic issu des réseaux sociaux",
      "le trafic issu des favoris et emails",
      "le trafic issu du bouche-à-oreille",
    ],
    correct: 0,
    explanation: "Le trafic payant indique le trafic généré par les campagnes Adwords (et le display).",
  },
  {
    category: "marketing",
    question: "Pourquoi le cours conseille-t-il d'associer le compte Google Adwords au compte Google Analytics ?",
    options: [
      "pour mieux analyser les performances des campagnes Adwords",
      "pour créer automatiquement des landing pages",
      "pour supprimer les cookies du site",
      "pour améliorer gratuitement le référencement naturel",
    ],
    correct: 0,
    explanation: "L'association des deux comptes permet de mieux analyser les performances des campagnes Adwords.",
  },
  {
    category: "marketing",
    question: "Sur Google Analytics, les tableaux de bord personnalisables construits par l'utilisateur sont appelés :",
    options: ["rapports personnalisés", "SERP", "landing pages", "call to action"],
    correct: 0,
    explanation: "Google Analytics permet de créer des « rapports personnalisés » en choisissant statistiques, dimensions et mode de présentation.",
  },
  {
    category: "marketing",
    question: "Parmi les catégories d'indicateurs de Google Analytics, laquelle regroupe le nombre de sessions, le nombre d'utilisateurs et le taux de rebond ?",
    options: ["indicateurs d'adhésion", "indicateurs d'engagement", "indicateurs de conversion", "indicateurs d'acquisition"],
    correct: 0,
    explanation: "Les indicateurs d'adhésion regroupent nombre de sessions, nombre d'utilisateurs, taux de rebond, etc.",
  },
  {
    category: "marketing",
    question: "Parmi les catégories d'indicateurs de Google Analytics, laquelle regroupe le temps passé sur le site et le taux de conversion ?",
    options: ["indicateurs d'engagement", "indicateurs d'adhésion", "indicateurs d'acquisition", "indicateurs d'audience"],
    correct: 0,
    explanation: "Les indicateurs d'engagement regroupent le temps passé sur le site et le taux de conversion (achat, inscription…).",
  },
  {
    category: "marketing",
    question: "Selon la conclusion du cours sur le marketing digital, l'innovation marketing consiste à créer une différenciation basée sur :",
    options: [
      "l'un ou plusieurs piliers du mix marketing (produit, communication, prix, distribution)",
      "uniquement le prix",
      "uniquement la technologie",
      "la structure juridique de l'entreprise",
    ],
    correct: 0,
    explanation: "L'innovation marketing crée une différenciation sur un ou plusieurs piliers du mix marketing.",
  },
  {
    category: "marketing",
    question: "Toujours selon cette conclusion, l'innovation organisationnelle consiste en :",
    options: [
      "la création de processus inédits",
      "la création d'une réponse technologique innovante",
      "la baisse systématique des prix",
      "la fusion avec un concurrent",
    ],
    correct: 0,
    explanation: "L'innovation organisationnelle est définie comme la création de processus inédits au sein de l'entreprise.",
  },

  // ---- Compléments : positionnement stratégique (PESTEL / SWOT / BMC) ----
  {
    category: "strategie",
    question: "Que représentent les 6 lettres de l'analyse PESTEL ?",
    options: [
      "Politique, Économique, Socioculturel, Technologique, Écologique, Légal",
      "Produit, Étude, Stratégie, Tarif, Écologie, Livraison",
      "Positionnement, Étude, Segmentation, Tarif, Environnement, Leadership",
      "Politique, Économique, Sectoriel, Technique, Écologique, Local",
    ],
    correct: 0,
    explanation: "PESTEL analyse les facteurs Politique, Économique, Socioculturel, Technologique, Écologique et Légal de l'environnement externe.",
  },
  {
    category: "strategie",
    question: "Dans l'analyse SWOT, à quoi correspondent les lettres S et W ?",
    options: [
      "Strengths (Forces) et Weaknesses (Faiblesses)",
      "Strategy et Workflow",
      "Sales et Web",
      "Segmentation et Wants",
    ],
    correct: 0,
    explanation: "S = Strengths (Forces), W = Weaknesses (Faiblesses) : les deux dimensions internes de l'analyse SWOT.",
  },
  {
    category: "strategie",
    question: "Dans l'analyse SWOT, à quoi correspondent les lettres O et T ?",
    options: [
      "Opportunities (Opportunités) et Threats (Menaces)",
      "Organisation et Tactique",
      "Objectifs et Tendances",
      "Offre et Trafic",
    ],
    correct: 0,
    explanation: "O = Opportunities (Opportunités), T = Threats (Menaces) : les deux dimensions externes de l'analyse SWOT.",
  },
  {
    category: "strategie",
    question: "Dans le SWOT, les forces et faiblesses relèvent de l'analyse interne ; les opportunités et menaces relèvent, elles, de :",
    options: ["l'analyse externe", "l'analyse interne également", "l'analyse uniquement financière", "l'analyse des seuls concurrents directs"],
    correct: 0,
    explanation: "Le SWOT combine analyse interne (forces/faiblesses) et analyse externe (opportunités/menaces).",
  },
  {
    category: "strategie",
    question: "Le Business Model Canvas (BMC) permet notamment de formaliser :",
    options: [
      "la proposition de valeur, les segments de clientèle et les sources de revenus d'un projet",
      "uniquement le bilan comptable de l'entreprise",
      "uniquement l'organigramme hiérarchique",
      "le taux de conversion d'un site web",
    ],
    correct: 0,
    explanation: "Le BMC structure un projet autour de blocs clés : proposition de valeur, segments de clientèle, canaux, sources de revenus, ressources clés, etc.",
  },

  // ---- Compléments : culture entrepreneuriale (programme partie 1) ----
  {
    category: "culture",
    question: "Quelle est la principale différence entre un entrepreneur et un intrapreneur ?",
    options: [
      "L'entrepreneur crée et dirige sa propre entreprise, tandis que l'intrapreneur innove et prend des initiatives entrepreneuriales au sein d'une entreprise existante",
      "Il n'existe aucune différence entre les deux",
      "L'intrapreneur ne prend jamais de risques",
      "L'entrepreneur travaille uniquement pour le compte d'un employeur",
    ],
    correct: 0,
    explanation: "L'entrepreneur crée sa propre structure, l'intrapreneur porte une démarche entrepreneuriale à l'intérieur d'une entreprise existante.",
  },
  {
    category: "culture",
    question: "Parmi les types d'entrepreneuriat évoqués dans le programme du cours, lequel vise en priorité à résoudre des problématiques sociétales plutôt qu'à maximiser le profit ?",
    options: ["l'entrepreneuriat technologique", "l'entrepreneuriat social", "l'entrepreneuriat culturel", "l'entrepreneuriat durable"],
    correct: 1,
    explanation: "L'entrepreneuriat social place la résolution de problématiques sociétales au cœur de son projet, avant la maximisation du profit.",
  },
  {
    category: "culture",
    question: "L'entrepreneuriat durable, cité dans le programme du cours, se caractérise principalement par :",
    options: [
      "la recherche d'un équilibre entre rentabilité économique, impact social et respect de l'environnement",
      "l'absence totale de préoccupation environnementale",
      "la vente exclusive de produits de luxe",
      "le rejet de toute innovation technologique",
    ],
    correct: 0,
    explanation: "L'entrepreneuriat durable cherche à concilier performance économique, impact social et respect de l'environnement.",
  },

  // ================= PITCH, STORYTELLING & OUTILS NUMÉRIQUES =================
  {
    category: "pitch",
    question: "Parmi les techniques de prise de parole en public pour le pitch, laquelle concerne le fait de regarder son auditoire dans les yeux ?",
    options: ["la voix", "la posture", "le regard", "la gestion du stress"],
    correct: 2,
    explanation: "Le regard (contact visuel avec l'auditoire) fait partie des techniques de prise de parole citées dans le programme, aux côtés de la voix, la posture et la gestion du stress.",
  },
  {
    category: "pitch",
    question: "Selon le programme du cours, un pitch entrepreneurial se construit typiquement pour une durée d'environ :",
    options: ["30 secondes", "3 minutes", "30 minutes", "1 heure"],
    correct: 1,
    explanation: "Le programme évoque explicitement la « construction du pitch en 3 minutes ».",
  },
  {
    category: "pitch",
    question: "Dans la construction d'un pitch, l'élément destiné à capter immédiatement l'attention de l'auditoire s'appelle :",
    options: ["la conclusion", "l'accroche", "le plan financier détaillé", "l'annexe technique"],
    correct: 1,
    explanation: "L'accroche est le point d'entrée du pitch, pensé pour capter l'attention dès les premières secondes.",
  },
  {
    category: "pitch",
    question: "Le storytelling, cité dans le programme comme composante du pitch, a pour objectif principal de :",
    options: [
      "créer une connexion émotionnelle avec l'auditoire à travers une histoire",
      "présenter uniquement des chiffres et statistiques",
      "remplacer entièrement la présentation du produit",
      "éviter de parler du client",
    ],
    correct: 0,
    explanation: "Le storytelling s'appuie sur la communication émotionnelle pour créer du lien avec l'auditoire.",
  },
  {
    category: "pitch",
    question: "Le programme du cours associe le storytelling à :",
    options: [
      "la communication émotionnelle",
      "l'analyse financière du projet",
      "le calcul du taux de conversion",
      "l'analyse PESTEL",
    ],
    correct: 0,
    explanation: "Le programme lie explicitement « storytelling et communication émotionnelle » comme un même bloc thématique.",
  },
  {
    category: "pitch",
    question: "Parmi les outils cités dans le programme pour créer des présentations impactantes, lequel N'est PAS mentionné ?",
    options: ["PowerPoint", "Canva", "Genially", "Excel"],
    correct: 3,
    explanation: "Le programme cite PowerPoint, Canva et Genially comme outils de création de présentations — pas Excel, qui est un tableur.",
  },
  {
    category: "pitch",
    question: "Selon le programme du cours, une vidéo pitch pensée pour les réseaux sociaux est généralement :",
    options: [
      "longue et au format horizontal",
      "courte, au format vertical, pensée pour devenir virale",
      "sans son ni sous-titres",
      "réservée à un usage strictement interne à l'entreprise",
    ],
    correct: 1,
    explanation: "Le programme évoque un « format court, vertical, viral » pour la vidéo pitch, adapté aux usages mobiles et réseaux sociaux.",
  },
  {
    category: "pitch",
    question: "Les outils collaboratifs de gestion de projet évoqués dans le programme du cours servent principalement à :",
    options: [
      "organiser et suivre les tâches d'une équipe projet",
      "remplacer entièrement le pitch oral",
      "analyser le référencement naturel d'un site",
      "calculer le taux de conversion d'une campagne",
    ],
    correct: 0,
    explanation: "Ces outils numériques collaboratifs permettent d'organiser, répartir et suivre les tâches au sein d'une équipe projet.",
  },
  {
    category: "pitch",
    question: "La gestion du stress lors d'une prise de parole fait partie, selon le programme du cours, du bloc consacré à :",
    options: [
      "la prise de parole en public",
      "l'analyse SWOT",
      "le web analytics",
      "le référencement payant (SEA)",
    ],
    correct: 0,
    explanation: "Le programme regroupe voix, posture, regard et gestion du stress sous « techniques de prise de parole ».",
  },
  {
    category: "pitch",
    question: "Parmi les éléments de structure d'un pitch réussi cités dans le programme, lesquels sont explicitement mentionnés ?",
    options: [
      "le contenu, la structure et l'accroche",
      "le bilan comptable, l'organigramme et le SWOT",
      "le PESTEL, le BMC et le mix marketing",
      "le CTR, le CPC et les impressions",
    ],
    correct: 0,
    explanation: "Le programme précise que la construction du pitch en 3 minutes porte sur le contenu, la structure et l'accroche.",
  },
];

/* =========================================================================
   État de l'application
   ========================================================================= */

const state = {
  selectedCategories: new Set(Object.keys(CATEGORIES)),
  mode: "feedback",
  session: [],       // questions de la session (avec options mélangées)
  currentIndex: 0,
  answers: [],        // { question, selectedIndex, correctIndex, isCorrect }
  score: 0,
};

/* =========================================================================
   Utilitaires
   ========================================================================= */

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function letterFor(i) {
  return String.fromCharCode(65 + i);
}

/* =========================================================================
   Écran d'accueil
   ========================================================================= */

const categoryGrid = document.getElementById("categoryGrid");
const poolHint = document.getElementById("poolHint");
const questionCountSelect = document.getElementById("questionCount");
const modeSelect = document.getElementById("modeSelect");

function renderCategoryGrid() {
  categoryGrid.innerHTML = "";
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const count = QUESTIONS.filter((q) => q.category === key).length;
    const pill = document.createElement("div");
    pill.className = "category-pill" + (state.selectedCategories.has(key) ? " selected" : "");
    pill.innerHTML = `
      <span class="cat-name"><span class="cat-dot" style="background:${cat.color}"></span>${cat.name}</span>
      <span class="cat-count">${count} questions</span>
    `;
    pill.addEventListener("click", () => {
      if (state.selectedCategories.has(key)) {
        if (state.selectedCategories.size > 1) state.selectedCategories.delete(key);
      } else {
        state.selectedCategories.add(key);
      }
      renderCategoryGrid();
      updatePoolHint();
    });
    categoryGrid.appendChild(pill);
  });
}

function poolSize() {
  return QUESTIONS.filter((q) => state.selectedCategories.has(q.category)).length;
}

function updatePoolHint() {
  poolHint.textContent = `${poolSize()} question(s) disponible(s) avec cette sélection.`;
}

renderCategoryGrid();
updatePoolHint();

document.getElementById("startBtn").addEventListener("click", () => {
  state.mode = modeSelect.value;
  const pool = shuffle(QUESTIONS.filter((q) => state.selectedCategories.has(q.category)));
  const countVal = questionCountSelect.value;
  const n = countVal === "all" ? pool.length : Math.min(parseInt(countVal, 10), pool.length);

  state.session = pool.slice(0, n).map((q) => {
    const optionOrder = shuffle(q.options.map((text, idx) => ({ text, idx })));
    return {
      ...q,
      displayOptions: optionOrder.map((o) => o.text),
      correctDisplayIndex: optionOrder.findIndex((o) => o.idx === q.correct),
    };
  });
  state.currentIndex = 0;
  state.answers = [];
  state.score = 0;

  document.getElementById("topbarScore").hidden = false;
  updateLiveScore();
  renderQuestion();
  showScreen("screen-quiz");
});

function updateLiveScore() {
  document.getElementById("liveScore").textContent = state.score;
  document.getElementById("liveTotal").textContent = state.session.length;
}

/* =========================================================================
   Écran quiz
   ========================================================================= */

const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const explanationBox = document.getElementById("explanationBox");
const explanationLabel = document.getElementById("explanationLabel");
const explanationText = document.getElementById("explanationText");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");

function renderQuestion() {
  const q = state.session[state.currentIndex];
  const cat = CATEGORIES[q.category];

  document.getElementById("qIndex").textContent = state.currentIndex + 1;
  document.getElementById("qTotal").textContent = state.session.length;
  const badge = document.getElementById("qCategoryBadge");
  badge.textContent = cat.name;
  badge.style.background = cat.color;

  progressFill.style.width = `${(state.currentIndex / state.session.length) * 100}%`;

  questionText.textContent = q.question;
  explanationBox.hidden = true;
  nextBtn.disabled = true;
  nextBtn.textContent = state.currentIndex === state.session.length - 1 ? "Voir les résultats" : "Question suivante";

  optionsList.innerHTML = "";
  q.displayOptions.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${letterFor(i)}</span><span>${optText}</span>`;
    btn.addEventListener("click", () => selectOption(i));
    optionsList.appendChild(btn);
  });
}

function selectOption(selectedIndex) {
  const q = state.session[state.currentIndex];
  const optionEls = Array.from(optionsList.children);

  if (state.mode === "feedback") {
    // correction immédiate : verrouille et affiche la réponse
    const isCorrect = selectedIndex === q.correctDisplayIndex;
    optionEls.forEach((el, i) => {
      el.disabled = true;
      if (i === q.correctDisplayIndex) el.classList.add("correct");
      else if (i === selectedIndex) el.classList.add("incorrect");
    });

    explanationBox.hidden = false;
    explanationLabel.textContent = isCorrect ? "✓ Bonne réponse" : "✗ Mauvaise réponse";
    explanationLabel.className = "explanation-label " + (isCorrect ? "is-good" : "is-bad");
    explanationText.textContent = q.explanation;

    recordAnswer(q, selectedIndex, isCorrect);
  } else {
    // mode examen : simple sélection, pas de correction affichée
    optionEls.forEach((el, i) => el.classList.toggle("selected", i === selectedIndex));
    if (state.answers[state.currentIndex]) {
      const isCorrect = selectedIndex === q.correctDisplayIndex;
      state.score += (isCorrect ? 1 : 0) - (state.answers[state.currentIndex].isCorrect ? 1 : 0);
      state.answers[state.currentIndex] = { question: q, selectedIndex, correctIndex: q.correctDisplayIndex, isCorrect };
    } else {
      const isCorrect = selectedIndex === q.correctDisplayIndex;
      recordAnswer(q, selectedIndex, isCorrect);
    }
    updateLiveScore();
  }

  nextBtn.disabled = false;
}

function recordAnswer(q, selectedIndex, isCorrect) {
  state.answers[state.currentIndex] = { question: q, selectedIndex, correctIndex: q.correctDisplayIndex, isCorrect };
  if (isCorrect) state.score++;
  updateLiveScore();
}

nextBtn.addEventListener("click", () => {
  if (state.currentIndex < state.session.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    progressFill.style.width = "100%";
    finishQuiz();
  }
});

document.getElementById("quitBtn").addEventListener("click", () => {
  if (confirm("Quitter le QCM en cours ? Votre progression sera perdue.")) {
    document.getElementById("topbarScore").hidden = true;
    showScreen("screen-start");
  }
});

/* =========================================================================
   Écran résultats
   ========================================================================= */

function finishQuiz() {
  const total = state.session.length;
  const pct = total ? Math.round((state.score / total) * 100) : 0;

  document.getElementById("scorePercent").textContent = `${pct}%`;
  document.getElementById("scoreCircle").style.setProperty("--pct", pct);
  document.getElementById("resultFraction").textContent = `${state.score}/${total}`;

  const title = document.getElementById("resultTitle");
  const sub = document.getElementById("resultEyebrow");
  if (pct >= 80) { title.textContent = "Excellent !"; sub.textContent = "Résultat"; }
  else if (pct >= 60) { title.textContent = "Bien joué !"; sub.textContent = "Résultat"; }
  else { title.textContent = "À retravailler"; sub.textContent = "Résultat"; }

  renderCategoryBreakdown();
  renderReviewList();
  document.getElementById("reviewList").hidden = true;
  document.getElementById("reviewBtn").textContent = "Revoir mes réponses";

  showScreen("screen-results");
}

function renderCategoryBreakdown() {
  const container = document.getElementById("categoryBreakdown");
  container.innerHTML = "";

  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const answersInCat = state.answers.filter((a) => a && a.question.category === key);
    if (answersInCat.length === 0) return;
    const correctCount = answersInCat.filter((a) => a.isCorrect).length;
    const pct = Math.round((correctCount / answersInCat.length) * 100);

    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `
      <span class="b-name">${cat.name}</span>
      <span class="b-track"><span class="b-fill" style="width:${pct}%;background:${cat.color}"></span></span>
      <span class="b-score">${correctCount}/${answersInCat.length}</span>
    `;
    container.appendChild(row);
  });
}

function renderReviewList() {
  const container = document.getElementById("reviewList");
  container.innerHTML = "";

  state.answers.forEach((a, i) => {
    if (!a) return;
    const item = document.createElement("div");
    item.className = "review-item " + (a.isCorrect ? "r-good" : "r-bad");
    const yourAnswerText = a.question.displayOptions[a.selectedIndex];
    const correctAnswerText = a.question.displayOptions[a.correctIndex];

    item.innerHTML = `
      <p class="r-status">${a.isCorrect ? "✓ Correct" : "✗ Incorrect"} — Question ${i + 1}</p>
      <p class="r-question">${a.question.question}</p>
      <p class="r-answer">Votre réponse : <strong>${yourAnswerText}</strong></p>
      ${!a.isCorrect ? `<p class="r-answer">Bonne réponse : <strong>${correctAnswerText}</strong></p>` : ""}
      <p class="r-explain">${a.question.explanation}</p>
    `;
    container.appendChild(item);
  });
}

document.getElementById("reviewBtn").addEventListener("click", () => {
  const list = document.getElementById("reviewList");
  list.hidden = !list.hidden;
  document.getElementById("reviewBtn").textContent = list.hidden ? "Revoir mes réponses" : "Masquer la correction";
});

document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("topbarScore").hidden = true;
  showScreen("screen-start");
});
