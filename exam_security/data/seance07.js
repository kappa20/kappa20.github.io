// Séance 7 — Smart Contracts & Solidity
const SEANCE_7 = {
  id: 7,
  title: "Smart Contracts & Solidity",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce qu'un smart contract (contrat intelligent) ?",
      options: [
        "Un contrat juridique numérisé stocké dans un email",
        "Un programme informatique auto-exécutable déployé sur une blockchain qui exécute automatiquement des règles prédéfinies lorsque certaines conditions sont remplies, sans intermédiaire",
        "Un algorithme d'intelligence artificielle de prise de décision",
        "Un protocole de sécurité pour les transactions bancaires"
      ],
      correct: [1],
      explanation: "Un smart contract est un programme informatique auto-exécutable déployé sur une blockchain qui exécute automatiquement des règles prédéfinies lorsque certaines conditions sont remplies, sans intermédiaire. Il garantit la transparence, l'immutabilité et la sécurité des transactions."
    },
    {
      type: "single",
      text: "Qu'est-ce que Solidity ?",
      options: [
        "Un protocole de consensus pour Ethereum",
        "Un langage de programmation orienté objet pour créer des smart contracts, compilé en bytecode exécuté par l'EVM",
        "Un framework JavaScript pour les applications web décentralisées",
        "Un algorithme de hachage utilisé dans Bitcoin"
      ],
      correct: [1],
      explanation: "Solidity est un langage de programmation orienté objet (similaire à JavaScript/C++) pour créer des smart contracts, principalement sur Ethereum. Il est compilé en bytecode puis interprété par l'EVM (Ethereum Virtual Machine)."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'EVM (Ethereum Virtual Machine) ?",
      options: [
        "Un serveur central gérant les transactions Ethereum",
        "Un environnement d'exécution isolé qui interprète le bytecode Solidity compilé sur tous les nœuds validateurs du réseau",
        "Un portefeuille numérique pour stocker des ETH",
        "Un compilateur de code Solidity en JavaScript"
      ],
      correct: [1],
      explanation: "L'EVM (Ethereum Virtual Machine) est l'environnement d'exécution isolé des smart contracts. Il interprète le bytecode Solidity compilé pour garantir la mise à jour de l'état des contrats via tous les nœuds validateurs. Ce sont les mineurs qui exécutent ces instructions."
    },
    {
      type: "multi",
      text: "Quelles sont les caractéristiques d'un smart contract ? (plusieurs réponses)",
      options: [
        "Distribué — tout le monde a une copie des conditions",
        "Déterministe — ne s'exécute que si les conditions requises sont remplies",
        "Immuable — ne peut pas être modifié après déploiement",
        "Autonome — aucun tiers n'est impliqué",
        "Modifiable par l'auteur à tout moment"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les caractéristiques des smart contracts : Distribué (copie pour tous), Déterministe (s'exécute uniquement si conditions remplies), Immuable (ne peut pas être modifié après déploiement), Autonome (sans tiers), Transparent, Auto-vérification, Auto-exécutoire. Ils NE peuvent PAS être modifiés après déploiement."
    },
    {
      type: "single",
      text: "Quelle est la différence entre 'storage' et 'memory' en Solidity ?",
      options: [
        "Storage est temporaire, memory est permanent",
        "Storage est persistant entre les appels de fonctions (stockage permanent du contrat), memory est temporaire et effacé à chaque appel de fonction",
        "Il n'y a aucune différence en Solidity",
        "Storage est utilisé pour les variables locales, memory pour les variables globales"
      ],
      correct: [1],
      explanation: "En Solidity via l'EVM : Storage (zone de stockage) = associée à un compte Ethereum, PERSISTANTE entre les appels de fonctions. Memory (zone de mémoire) = associée à chaque contrat, TEMPORAIRE, mise à jour lors de chaque appel (message call), sa taille varie selon les données."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une fonction 'pure' en Solidity ?",
      options: [
        "Une fonction qui ne peut être appelée que par le propriétaire du contrat",
        "Une fonction qui ne lit ni ne modifie l'état du contrat (ni storage, ni variables d'état) — elle ne dépend que de ses paramètres d'entrée",
        "Une fonction qui génère automatiquement une signature numérique",
        "Une fonction qui peut envoyer des ETH à une adresse"
      ],
      correct: [1],
      explanation: "Une fonction 'pure' en Solidity ne lit NI ne modifie l'état du contrat. Elle n'accède pas aux variables d'état (storage). Elle ne dépend que de ses paramètres d'entrée. Exemple : function getResult() public pure returns(uint) — elle calcule uniquement avec ses variables locales."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'héritage (inheritance) en Solidity ?",
      options: [
        "La transmission de tokens d'une adresse à une autre",
        "Un mécanisme orienté objet permettant à un contrat d'hériter des propriétés (variables, fonctions, modificateurs) d'un ou plusieurs contrats parents",
        "La copie d'un smart contract sur plusieurs blockchains",
        "La récupération automatique des fonds d'un contrat expiré"
      ],
      correct: [1],
      explanation: "L'héritage en Solidity est un mécanisme orienté objet (comme en Java/C++) permettant à un contrat enfant d'hériter des variables d'état, fonctions, modificateurs et événements d'un ou plusieurs contrats parents. Solidity supporte l'héritage multiple."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une fonction abstraite en Solidity ?",
      options: [
        "Une fonction chiffrée accessible uniquement aux administrateurs",
        "Une fonction déclarée sans implémentation dans un contrat abstrait, que les contrats dérivés doivent implémenter",
        "Une fonction qui ne retourne aucune valeur",
        "Une fonction qui s'exécute automatiquement lors du déploiement"
      ],
      correct: [1],
      explanation: "Une fonction abstraite (abstract) en Solidity est déclarée sans implémentation (sans corps de fonction). Elle est définie dans un contrat abstrait (abstract contract) et doit obligatoirement être implémentée par les contrats qui en héritent. C'est un concept de programmation orientée objet."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Gas' dans Ethereum/Solidity ?",
      options: [
        "Une cryptomonnaie alternative à l'Ether",
        "Le coût d'exécution de chaque instruction d'un contrat Solidity, limitant les boucles infinies et garantissant que chaque calcul est payé",
        "Un protocole de compression des transactions",
        "Un indicateur de la vitesse du réseau"
      ],
      correct: [1],
      explanation: "Chaque instruction d'un contrat Solidity a un coût d'exécution en Gas. Pour éviter les boucles infinies, il y a toujours une limite de Gas qui peut être consommée (gas limit). Le gasPrice détermine le montant de Wei par unité de Gas payé aux mineurs."
    },
    {
      type: "single",
      text: "Quel IDE est le plus utilisé pour développer des smart contracts Solidity ?",
      options: [
        "Visual Studio Code uniquement",
        "Remix IDE — disponible en ligne sur remix.ethereum.org",
        "PyCharm pour Python",
        "IntelliJ IDEA avec plugin Java"
      ],
      correct: [1],
      explanation: "Remix est l'IDE la plus utilisée pour développer des smart contracts Solidity. Disponible en ligne sur remix.ethereum.org ou localement. Autres environnements : Hardhat, Truffle + Ganache, VS Code avec extensions Solidity."
    },
    {
      type: "multi",
      text: "Quels types de variables existent en Solidity ? (plusieurs réponses)",
      options: [
        "Variables d'état — stockées en permanence dans le storage du contrat",
        "Variables locales — dans une fonction, non accessibles à l'extérieur, temporaires",
        "Variables globales — donnent des informations sur les transactions (ex: msg.sender)",
        "Variables atomiques — pour le multithreading",
        "Variables constantes — uniquement pour les chaînes de caractères"
      ],
      correct: [0, 1, 2],
      explanation: "En Solidity, il y a 3 types de variables : (1) Variables d'état = permanentes dans le storage, (2) Variables locales = temporaires dans une fonction, (3) Variables globales = informations sur les transactions et la blockchain (ex: msg.sender, block.timestamp)."
    }
  ],
  flashcards: [
    { term: "Smart Contract", def: "Programme auto-exécutable sur blockchain. Caractéristiques : Distribué, Déterministe, Immuable, Autonome, Transparent, Auto-vérification, Auto-exécutoire." },
    { term: "Solidity", def: "Langage POO pour smart contracts (similaire JS/C++). Compilé en bytecode → exécuté par l'EVM. Défini par : variables d'état, fonctions, modificateurs, événements, types." },
    { term: "EVM", def: "Ethereum Virtual Machine. Environnement d'exécution isolé du bytecode Solidity sur tous les nœuds validateurs. Garantit la mise à jour cohérente de l'état des contrats." },
    { term: "Storage vs Memory", def: "Storage = persistant entre appels (lié au compte Ethereum). Memory = temporaire, effacé à chaque appel de fonction. Stack = instructions du contrat." },
    { term: "Fonction pure", def: "Ne lit ni ne modifie l'état du contrat. Dépend uniquement de ses paramètres. Pas d'accès aux variables d'état (storage)." },
    { term: "Héritage en Solidity", def: "Mécanisme POO permettant à un contrat héritier de réutiliser variables, fonctions et modificateurs d'un contrat parent. Solidity supporte l'héritage multiple." },
    { term: "Gas (Ethereum)", def: "Coût d'exécution de chaque instruction Solidity. Évite les boucles infinies. Gas limit = quantité max consommable. gasPrice = Wei par unité de Gas." },
    { term: "msg.sender", def: "Variable globale Solidity contenant l'adresse de la personne/contrat qui appelle la fonction courante. Souvent utilisée pour définir le propriétaire du contrat." }
  ]
};
