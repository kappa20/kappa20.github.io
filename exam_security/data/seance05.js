// Séance 5 — Introduction à la Blockchain & Terminologie
const SEANCE_5 = {
  id: 5,
  title: "Blockchain : Introduction & Terminologie",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce qu'une blockchain ?",
      options: [
        "Une base de données centralisée sur un serveur principal",
        "Un registre distribué sur plusieurs ordinateurs (nœuds), chacun en contenant une copie, où les mises à jour nécessitent un consensus",
        "Un algorithme de chiffrement symétrique",
        "Un protocole de communication réseau sécurisé"
      ],
      correct: [1],
      explanation: "La blockchain est un registre distribué sur plusieurs ordinateurs appelés nœuds. Chaque ordinateur en contient une copie. Lors des mises à jour, toutes les versions doivent être changées en même temps (consensus). Elle est aussi nommée DLT — Distributed Ledger Technology."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Genesis Block' dans une blockchain ?",
      options: [
        "Le dernier bloc ajouté à la chaîne",
        "Le premier bloc de la blockchain, à partir duquel tous les autres blocs sont chaînés",
        "Un bloc spécial contenant uniquement les transactions de récompense",
        "Le bloc qui contient la clé de chiffrement principale"
      ],
      correct: [1],
      explanation: "Le Genesis Block (bloc de genèse) représente le PREMIER bloc de la blockchain. Dans Bitcoin moderne, c'est le bloc 0. C'est à partir de lui que toute la chaîne de blocs est construite. Le ledger est implémenté comme une chaîne de blocs reliés entre eux jusqu'au genesis block."
    },
    {
      type: "single",
      text: "Qu'est-ce que le minage dans une blockchain ?",
      options: [
        "La création de nouvelles adresses de portefeuilles",
        "Le processus de vérification et d'ajout de transactions à la blockchain, impliquant la résolution de problèmes cryptographiques complexes",
        "La sauvegarde des données sur des serveurs distants",
        "L'échange de cryptomonnaies sur une plateforme"
      ],
      correct: [1],
      explanation: "Le minage est la validation des transactions par les mineurs, correspondant à la résolution de problèmes cryptographiques. Ce processus vérifie et ajoute les transactions à la blockchain, et déclenche également la création de nouvelles cryptomonnaies."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Nonce dans la blockchain ?",
      options: [
        "L'adresse du portefeuille d'un mineur",
        "Un petit morceau de données dans le bloc que les mineurs modifient aléatoirement pour trouver un hash répondant aux conditions requises",
        "Le montant de la transaction",
        "La signature numérique du bloc"
      ],
      correct: [1],
      explanation: "Le nonce (number only used once) est un petit morceau de données dans le bloc que les mineurs modifient de manière aléatoire et répétée pour trouver le hash qui répond aux conditions (ex: commencer par '0000'). Les mineurs continuent de deviner des nonces jusqu'à trouver le bon."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un consensus dans la blockchain ?",
      options: [
        "Le chiffrement des transactions entre nœuds",
        "Un procédé par lequel les nœuds d'un réseau pair-à-pair se mettent d'accord sur un ensemble d'informations (l'état du registre)",
        "La récompense attribuée aux mineurs",
        "La limite de transactions par bloc"
      ],
      correct: [1],
      explanation: "Le consensus est un procédé par lequel les nœuds d'un réseau P2P se mettent d'accord sur un ensemble d'informations. Dans le contexte des cryptomonnaies, il permet aux nœuds d'être en accord sur le registre des transactions. Ex: Nakamoto consensus (Proof of Work)."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un 'Fork' dans la blockchain ?",
      options: [
        "Une transaction invalide rejetée par le réseau",
        "Une division de la chaîne de blocs en deux chaînes distinctes, causée par une divergence des règles de consensus",
        "Un type de portefeuille cryptographique",
        "Une erreur de synchronisation entre nœuds"
      ],
      correct: [1],
      explanation: "Un fork désigne une division de la chaîne de blocs en deux chaînes distinctes. Un hard fork est un changement radical du protocole (non rétrocompatible). Causes : deux blocs trouvés simultanément, incompatibilité de logiciels, désaccord sur les règles du protocole."
    },
    {
      type: "single",
      text: "La difficulté dans Bitcoin est ajustée tous les :",
      options: [
        "1000 blocs (environ 1 semaine)",
        "2016 blocs (environ 2 semaines) pour maintenir un temps moyen de 10 minutes par bloc",
        "10000 blocs (environ 10 semaines)",
        "100 blocs (environ 16 heures)"
      ],
      correct: [1],
      explanation: "La difficulté est ajustée tous les 2016 blocs (toutes les 2 semaines environ) afin que le temps moyen entre chaque bloc reste de 10 minutes. Une difficulté élevée signifie qu'il faut plus de puissance de calcul pour miner le même nombre de blocs."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Reward' (récompense de bloc) ?",
      options: [
        "Les frais de transaction payés par les utilisateurs",
        "Une récompense attribuée aux mineurs qui ont ajouté un bloc sur la blockchain, sous forme de tokens de la cryptomonnaie",
        "Les intérêts générés par le staking",
        "Les frais payés pour déployer un smart contract"
      ],
      correct: [1],
      explanation: "Un block reward (récompense de bloc) est une récompense attribuée aux mineurs qui ont ajouté un bloc sur la blockchain. Ils reçoivent des tokens de la crypto pour laquelle ils minent. Actuellement pour Bitcoin : 3.125 BTC (depuis Mai 2024, après le halving)."
    },
    {
      type: "multi",
      text: "Quels sont les 5 éléments constitutifs de la blockchain ?",
      options: [
        "Cryptographie",
        "Réseau poste à poste (P2P)",
        "Mécanisme de consensus",
        "Registre (liste des transactions)",
        "Règles de validité",
        "Serveur central"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les 5 composants de la blockchain : (1) Cryptographie, (2) Réseau P2P, (3) Mécanisme de consensus, (4) Registre (liste des transactions), (5) Règles de validité. Il n'y a PAS de serveur central — c'est le principe de décentralisation."
    },
    {
      type: "single",
      text: "Dans une transaction Ethereum, le 'Wei' est :",
      options: [
        "Une autre cryptomonnaie concurrente",
        "La plus petite unité d'Ether : 1 Ether = 10^18 Wei",
        "Un algorithme de consensus d'Ethereum",
        "Un type de smart contract"
      ],
      correct: [1],
      explanation: "Dans les transactions Ethereum, les valeurs sont exprimées en Wei. 1 Ether = 10^18 Wei. Les données d'une transaction incluent : From (compte), To (compte), Valeur en Wei, Gas, gasPrice, Data, Nonce."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre un nœud complet et un nœud léger dans une blockchain ?",
      options: [
        "Un nœud complet est plus rapide qu'un nœud léger",
        "Un nœud complet contient une copie complète de la blockchain, un nœud léger héberge une version minimale lui permettant de participer aux échanges",
        "Un nœud léger peut miner, un nœud complet ne peut pas",
        "Il n'y a aucune différence technique"
      ],
      correct: [1],
      explanation: "Deux types de nœuds : (1) Nœuds complets — contiennent une copie complète de la blockchain, (2) Nœuds légers — hébergent une version minimale leur permettant de participer aux échanges sur le réseau sans stocker toute la chaîne."
    }
  ],
  flashcards: [
    { term: "Blockchain", def: "Registre distribué (DLT) sur plusieurs nœuds. Chaque nœud a une copie complète. Les mises à jour nécessitent un consensus. Données insérables et consultables, non modifiables ni supprimables." },
    { term: "Genesis Block", def: "Premier bloc de la blockchain (bloc 0 dans Bitcoin). Point de départ de toute la chaîne. Le ledger est une chaîne de blocs reliés jusqu'au genesis block." },
    { term: "Nonce", def: "Number Only Used Once. Valeur modifiée aléatoirement par les mineurs jusqu'à trouver un hash valide (ex: commençant par '0000')." },
    { term: "Minage", def: "Processus de validation des transactions par résolution de problèmes cryptographiques (Proof of Work). Le mineur gagnant ajoute un nouveau bloc et reçoit une récompense." },
    { term: "Fork", def: "Division de la chaîne de blocs. Hard fork = changement non rétrocompatible du protocole. Causes : deux blocs simultanés, incompatibilité logicielle, désaccord sur les règles." },
    { term: "Consensus", def: "Mécanisme par lequel les nœuds P2P s'accordent sur l'état du registre. Exemples : PoW (Bitcoin), PoS (Ethereum depuis 2022), PBFT, DPoS." },
    { term: "Ledger distribué", def: "Base de données distribuée et partagée. Historique complet des transactions depuis le jour 0. Personne n'a le contrôle exclusif (contrairement aux BD centralisées)." },
    { term: "Reward (récompense)", def: "Tokens attribués aux mineurs pour avoir ajouté un bloc. Bitcoin : 3.125 BTC (mai 2024). La récompense est divisée par 2 environ tous les 4 ans (halving)." }
  ]
};
