// Séance 6 — Types de Blockchain & Mécanismes de consensus
const SEANCE_6 = {
  id: 6,
  title: "Types de Blockchain & Consensus",
  questions: [
    {
      type: "single",
      text: "Une blockchain publique se caractérise par :",
      options: [
        "Un accès restreint à une seule organisation",
        "Un registre numérique ouvert à tous, fonctionnant sans autorité centrale, souvent utilisé dans les cryptomonnaies et Web3",
        "Un contrôle collectif par un groupe d'entreprises",
        "Un accès limité aux membres approuvés uniquement"
      ],
      correct: [1],
      explanation: "La blockchain publique est ouverte à tous, fonctionne sans autorité centrale. Utilisée dans les cryptomonnaies, Web3, DAOs, identité décentralisée. Exemples : Bitcoin, Ethereum, Litecoin, Cardano, Polkadot."
    },
    {
      type: "single",
      text: "Une blockchain privée se caractérise par :",
      options: [
        "Un accès ouvert à tous mais contrôlé par une majorité",
        "Un accès restreint à une seule organisation, avec droits de lecture, écriture et validation entièrement contrôlés",
        "Un contrôle partagé entre plusieurs entreprises du même secteur",
        "Une blockchain sans mécanisme de consensus"
      ],
      correct: [1],
      explanation: "La blockchain privée a un accès restreint à une seule organisation ou un nombre limité de participants autorisés. Les droits de lecture, d'écriture et de validation sont entièrement contrôlés. Exemples : Hyperledger Fabric, Multichain."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une blockchain consortium (ou fédérée) ?",
      options: [
        "Une blockchain publique avec des tokens non fongibles",
        "Un modèle hybride entre blockchain publique et privée, contrôlé collectivement par un groupe d'acteurs (entreprises, institutions...)",
        "Une blockchain uniquement pour les transactions financières",
        "Une blockchain gérée par un gouvernement unique"
      ],
      correct: [1],
      explanation: "La blockchain consortium (fédérée) est un modèle hybride entre publique et privée. Elle est contrôlée collectivement par un groupe d'acteurs (entreprises, institutions, organisations gouvernementales) qui définissent ensemble les règles de gouvernance. Exemples : R3 Corda, Quorum, Dragonchain."
    },
    {
      type: "single",
      text: "Dans le Proof of Work (PoW), comment est choisi le mineur qui ajoute le prochain bloc ?",
      options: [
        "Par tirage au sort aléatoire",
        "Celui qui détient le plus de tokens",
        "Le premier à résoudre le problème cryptographique complexe (trouver le hash hexadécimal à 64 chiffres)",
        "Selon un système de vote des autres nœuds"
      ],
      correct: [2],
      explanation: "Dans PoW, les mineurs s'affrontent pour résoudre des énigmes informatiques complexes. Le premier à trouver le hash hexadécimal à 64 chiffres ('nonce') gagne le droit de former le nouveau bloc et reçoit la récompense (block reward)."
    },
    {
      type: "single",
      text: "Quelle est la principale critique du Proof of Work (PoW) ?",
      options: [
        "Il est trop rapide et manque de sécurité",
        "Il nécessite de grandes quantités de ressources de calcul et d'énergie, rendant les coûts d'exploitation très élevés",
        "Il favorise les petits mineurs au détriment des grandes fermes de minage",
        "Il ne permet pas de créer de nouvelles cryptomonnaies"
      ],
      correct: [1],
      explanation: "Le PoW est critiqué pour sa consommation énergétique massive : il nécessite de grandes quantités de ressources de calcul et d'énergie pour générer de nouveaux blocs, rendant les coûts d'exploitation notoirement élevés."
    },
    {
      type: "single",
      text: "Dans le Proof of Stake (PoS), les validateurs sont choisis en fonction de :",
      options: [
        "Leur puissance de calcul (CPU/GPU)",
        "La quantité de cryptomonnaie qu'ils détiennent et immobilisent (stake)",
        "Le nombre de transactions qu'ils ont validées",
        "Leur ancienneté dans le réseau"
      ],
      correct: [1],
      explanation: "Dans PoS, les validateurs sont choisis en fonction de la quantité de cryptomonnaie qu'ils détiennent et immobilisent (stake). Le PoS sécurise la blockchain via l'engagement financier plutôt que la puissance de calcul. Ethereum utilise PoS depuis 2022."
    },
    {
      type: "single",
      text: "Comment fonctionne le Delegated Proof of Stake (DPoS) ?",
      options: [
        "Les mineurs votent pour choisir les algorithmes de consensus",
        "Les détenteurs de jetons (stakeholders) votent pour élire un nombre limité de délégués responsables de valider les transactions",
        "Les validateurs sont sélectionnés aléatoirement parmi tous les nœuds",
        "Les transactions sont validées par un seul nœud de confiance"
      ],
      correct: [1],
      explanation: "Dans DPoS, les détenteurs de jetons (stakeholders) votent pour élire un nombre limité de délégués (validateurs/block producers). Ces délégués sont responsables de la validation des transactions et de la création des blocs. Le pouvoir de vote dépend de la quantité de jetons possédés."
    },
    {
      type: "single",
      text: "Le PBFT (Practical Byzantine Fault Tolerance) tolère jusqu'à :",
      options: [
        "f nœuds malveillants sur 2f + 1 nœuds au total",
        "f nœuds malveillants sur 3f + 1 nœuds au total",
        "f nœuds malveillants sur 4f + 1 nœuds au total",
        "Aucun nœud malveillant"
      ],
      correct: [1],
      explanation: "PBFT tolère jusqu'à f nœuds malveillants sur 3f + 1 nœuds au total. Il est conçu pour les réseaux permissionnés (nœuds validateurs connus) et prend ses décisions par échange de messages entre les nœuds."
    },
    {
      type: "multi",
      text: "Quelles sont les évolutions de Blockchain 1.0 à 4.0 ?",
      options: [
        "Blockchain 1.0 : DLT pour cryptomonnaies (ex: Bitcoin)",
        "Blockchain 2.0 : + Smart contracts (ex: Ethereum)",
        "Blockchain 3.0 : + DApps (application front-end + smart contract)",
        "Blockchain 4.0 : + Applications industrielles (ERP, chaîne logistique)",
        "Blockchain 5.0 : Intelligence Artificielle uniquement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Évolution : 1.0 = DLT/cryptomonnaies (Bitcoin), 2.0 = + Smart contracts (Ethereum), 3.0 = + DApps, 4.0 = + Applications industrielles. Il n'existe pas de Blockchain 5.0 officielle dans le cours."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre une base de données classique et une blockchain ?",
      options: [
        "Les bases de données sont plus lentes que les blockchains",
        "Les bases de données ont des administrateurs et un contrôle centralisé, les blockchains sont décentralisées, personne n'en a le contrôle, et possèdent un historique complet immuable",
        "Les blockchains permettent la modification des données passées",
        "Les bases de données sont plus sécurisées que les blockchains"
      ],
      correct: [1],
      explanation: "Différences clés : BD = contrôle centralisé, accès restreint aux autorisés, rapide, pas d'historique complet. Blockchain = décentralisée, personne n'a le contrôle, tout le monde peut lire (publique), lente, historique complet immuable des transactions depuis le jour 0."
    },
    {
      type: "single",
      text: "La Byzantine Fault Tolerance (BFT) est :",
      options: [
        "Un algorithme de chiffrement asymétrique",
        "La fiabilité d'un système distribué capable de fonctionner correctement même en présence de nœuds défaillants ou malveillants",
        "Un protocole de communication entre nœuds blockchain",
        "Une méthode de compression des blocs"
      ],
      correct: [1],
      explanation: "La BFT est la fiabilité d'un système tolérant aux pannes, notamment les systèmes distribués où des composants peuvent faire défaut. Bitcoin utilise la BFT via le Proof of Work pour surmonter les pannes byzantines et maintenir une vue cohérente de l'état du système."
    }
  ],
  flashcards: [
    { term: "Blockchain Publique", def: "Ouverte à tous, sans autorité centrale. Exemples : Bitcoin, Ethereum, Litecoin. Utilisée pour les cryptomonnaies, Web3, DAOs." },
    { term: "Blockchain Privée", def: "Accès restreint à une organisation. Droits de lecture/écriture/validation contrôlés. Exemples : Hyperledger Fabric, Multichain." },
    { term: "Blockchain Consortium", def: "Modèle hybride public/privé. Contrôlée collectivement par un groupe d'acteurs. Exemples : R3 Corda, Quorum, Dragonchain." },
    { term: "Proof of Work (PoW)", def: "Les mineurs résolvent des énigmes complexes (hash). Premier à trouver la solution → ajoute le bloc + récompense. Consomme beaucoup d'énergie. Utilisé par Bitcoin." },
    { term: "Proof of Stake (PoS)", def: "Les validateurs sont choisis selon leur stake (tokens immobilisés). Plus économe en énergie que PoW. Ethereum utilise PoS depuis 2022." },
    { term: "DPoS", def: "Delegated Proof of Stake. Les détenteurs de tokens votent pour élire des délégués validateurs. Le pouvoir de vote est proportionnel aux tokens détenus." },
    { term: "PBFT", def: "Practical Byzantine Fault Tolerance. Réseau permissionné avec nœuds validateurs connus. Tolère f nœuds malveillants sur 3f+1. Décisions par échange de messages." },
    { term: "Hard Fork", def: "Changement radical et non rétrocompatible du protocole blockchain. Nécessite que TOUS les nœuds mettent à niveau leur logiciel." }
  ]
};
