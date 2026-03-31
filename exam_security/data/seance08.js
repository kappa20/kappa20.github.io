// Séance 8 — Web3, Ethereum & Applications Blockchain
const SEANCE_8 = {
  id: 8,
  title: "Web3, Ethereum & Applications Blockchain",
  questions: [
    {
      type: "single",
      text: "Quelle est la principale limite du Web 2.0 qui a conduit au Web 3.0 ?",
      options: [
        "Le Web 2.0 est trop lent pour les applications modernes",
        "Le Web 2.0 est centralisé et dominé par des géants (Google, Amazon, Apple) qui contrôlent les données des utilisateurs sans les rémunérer",
        "Le Web 2.0 ne supporte pas les applications mobiles",
        "Le Web 2.0 ne peut pas traiter les transactions financières"
      ],
      correct: [1],
      explanation: "Le Web 2.0 est centralisé et dominé par les GAFA. Les entreprises collectent des données massives sur les utilisateurs et les monétisent. Les utilisateurs ne sont pas récompensés. Le contrôle est unilatéral : fuites de données, hacks, vol d'identité, vente de données sans consentement."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Web 3.0 ?",
      options: [
        "La 3ème version du navigateur web Chrome",
        "L'Internet décentralisé basé sur des technologies peer-to-peer comme la blockchain, permettant à chaque utilisateur de contrôler ses données et de participer à la gouvernance",
        "Un protocole réseau plus rapide que l'IPv6",
        "Une plateforme de développement d'applications mobiles"
      ],
      correct: [1],
      explanation: "Le Web 3.0 est l'Internet décentralisé basé sur des technologies P2P comme la blockchain. Il permet à chaque internaute de contrôler ses données personnelles et de participer à la gouvernance. Défini par Tim Berners-Lee comme un modèle permettant le partage de données entre applications."
    },
    {
      type: "multi",
      text: "Sur quelles technologies repose le Web 3.0 ? (plusieurs réponses)",
      options: [
        "Intelligence Artificielle",
        "Web Sémantique",
        "Blockchain",
        "Serveurs centralisés",
        "Protocole HTTP classique"
      ],
      correct: [0, 1, 2],
      explanation: "Le Web 3.0 repose sur : (1) Intelligence Artificielle — données plus pertinentes et assistants virtuels, (2) Web Sémantique — catégorisation et interprétation des données, (3) Blockchain — création et authentification de contenus uniques et certifiés."
    },
    {
      type: "single",
      text: "Ethereum a été proposé en :",
      options: [
        "2008 par Satoshi Nakamoto",
        "2013 par Vitalik Buterin",
        "2010 par Gavin Wood",
        "2015 par la fondation Ethereum"
      ],
      correct: [1],
      explanation: "Ethereum a été proposé en 2013 par Vitalik Buterin. C'est une plateforme blockchain publique et décentralisée permettant d'exécuter des smart contracts et de développer des DApps. Financement participatif en 2014 via vente d'Ether contre des Bitcoin."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre Bitcoin et Ethereum ?",
      options: [
        "Bitcoin est plus récent qu'Ethereum",
        "Bitcoin sert principalement de monnaie numérique, Ethereum permet de programmer des applications (smart contracts, DApps) fonctionnant automatiquement sans intermédiaire",
        "Ethereum utilise le Proof of Work, Bitcoin utilise le Proof of Stake",
        "Bitcoin a une supply infinie, Ethereum est limité à 21 millions"
      ],
      correct: [1],
      explanation: "Bitcoin sert principalement de monnaie numérique décentralisée. Ethereum, contrairement à Bitcoin, permet de programmer des applications fonctionnant automatiquement sans intermédiaire, via les smart contracts et les DApps. Bitcoin est la 1ère crypto basée sur blockchain."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une DApp (application décentralisée) ?",
      options: [
        "Une application mobile développée avec React Native",
        "Une application = front-end + smart contract, fonctionnant sur une blockchain sans serveur central",
        "Un portefeuille numérique pour les cryptomonnaies",
        "Un protocole de communication décentralisé"
      ],
      correct: [1],
      explanation: "Une DApp (Decentralized Application) = application front-end + smart contract. Elle fonctionne sur une blockchain (ex: Ethereum) sans serveur central. C'est la définition de la Blockchain 3.0 : la combinaison des smart contracts avec des interfaces utilisateur."
    },
    {
      type: "single",
      text: "Dans la technologie P2P (peer-to-peer), chaque participant :",
      options: [
        "Est uniquement client et se connecte à un serveur central",
        "Peut agir à la fois comme client et serveur, sans passer par une autorité centrale",
        "Doit payer une subscription pour participer au réseau",
        "Ne peut accéder qu'en lecture seule au réseau"
      ],
      correct: [1],
      explanation: "La technologie P2P est un modèle de communication réseau où chaque participant (pair) peut agir à la fois comme client ET serveur, sans passer par une autorité centrale. Cela améliore la décentralisation, la tolérance aux pannes et la résilience du système."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de la blockchain pour les applications ? (plusieurs réponses)",
      options: [
        "Réduction des erreurs car la vérification est faite par des algorithmes",
        "Altération difficile des données car la majorité des nœuds doit confirmer",
        "Suppression des intermédiaires dans les transactions",
        "Transactions plus rapides que les bases de données classiques",
        "Contrôle centralisé par une seule entité"
      ],
      correct: [0, 1, 2],
      explanation: "Avantages de la blockchain : réduction des erreurs (vérification algorithmique), altération difficile (consensus de la majorité), suppression des intermédiaires (transactions directes), transmission de valeur sécurisée via smart contracts. Les blockchains sont plus LENTES que les bases de données classiques."
    },
    {
      type: "single",
      text: "Dans Ethereum, comment est représentée l'adresse d'un compte ?",
      options: [
        "Un nombre entier séquentiel attribué à l'inscription",
        "Un hash de la clé publique du compte",
        "Le nom d'utilisateur choisi lors de la création",
        "L'adresse IP du nœud qui a créé le compte"
      ],
      correct: [1],
      explanation: "Dans Ethereum : chaque compte possède une clé privée et une clé publique. L'adresse Ethereum est simplement un hash de la clé publique. Les comptes utilisent leur clé privée pour signer les transactions. Tout le monde peut vérifier la signature avec la clé publique."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une DAO (Decentralized Autonomous Organization) ?",
      options: [
        "Une entreprise traditionnelle avec siège social",
        "Une organisation autonome décentralisée gérée par un réseau distribué d'utilisateurs sans autorité centrale, utilisant des smart contracts pour prendre des décisions collectives",
        "Un algorithme de consensus pour les blockchains privées",
        "Un protocole de sécurité pour les échanges décentralisés"
      ],
      correct: [1],
      explanation: "Une DAO (Decentralized Autonomous Organization) est une organisation gérée par un réseau distribué d'utilisateurs. Les participants approuvent collectivement les mises à jour, transactions, et opérations. C'est un exemple de décentralisation du Web 3.0 : aucune entité centrale ne peut décider unilatéralement."
    }
  ],
  flashcards: [
    { term: "Web 2.0 vs Web 3.0", def: "Web 2.0 = centralisé, données contrôlées par les entreprises (GAFA), censure possible. Web 3.0 = décentralisé (P2P + blockchain), utilisateur contrôle ses données, résistant à la censure." },
    { term: "Ethereum", def: "Plateforme blockchain publique créée en 2013 par Vitalik Buterin. Permet smart contracts et DApps. Basée sur EVM. Utilise Proof of Stake depuis 2022." },
    { term: "DApp", def: "Application Décentralisée = front-end + smart contract. Fonctionne sur blockchain sans serveur central. Exemple de Blockchain 3.0." },
    { term: "DAO", def: "Decentralized Autonomous Organization. Gouvernance collective par un réseau distribué. Les décisions sont prises collectivement via des votes pondérés par les tokens." },
    { term: "NFT", def: "Non-Fungible Token (Token Non Fongible). Contrairement aux cryptomonnaies (fongibles), chaque NFT est unique et non interchangeable à valeur égale (comme un tableau vs un billet de banque)." },
    { term: "Technologie P2P", def: "Peer-to-Peer : chaque participant peut être client ET serveur, sans autorité centrale. Base de la décentralisation blockchain. Améliore tolérance aux pannes et résilience." },
    { term: "Satoshi Nakamoto", def: "Créateur (pseudonyme) de Bitcoin et de la première blockchain. Publie le whitepaper Bitcoin le 31 Oct. 2008 : système de paiement électronique basé sur des preuves cryptographiques." },
    { term: "Blockchain 1.0 → 4.0", def: "1.0: Cryptomonnaies (Bitcoin). 2.0: + Smart contracts (Ethereum). 3.0: + DApps. 4.0: + Applications industrielles (ERP, supply chain)." }
  ]
};
