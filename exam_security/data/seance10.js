// Séance 10 — TD3 Série 3 : Blockchain appliquée
const SEANCE_10 = {
  id: 10,
  title: "TD3 — Blockchain : Notions & Applications",
  questions: [
    {
      type: "single",
      text: "Pourquoi dit-on que la blockchain est immuable ?",
      options: [
        "Parce qu'elle est stockée sur un seul serveur sécurisé",
        "Parce que les blocs sont liés par des hashes cryptographiques : modifier un bloc invalide tous les blocs suivants, et le réseau distribué détecte la manipulation",
        "Parce que les données sont chiffrées avec AES-256",
        "Parce que seul l'administrateur peut modifier les données"
      ],
      correct: [1],
      explanation: "La blockchain est immuable car chaque bloc contient le hash du bloc précédent. Modifier un bloc change son hash, ce qui invalide le hash dans le bloc suivant, créant une réaction en chaîne. Dans un réseau distribué, les autres nœuds détectent immédiatement la manipulation (consensus)."
    },
    {
      type: "single",
      text: "Quel est le rôle du hash du bloc précédent dans une blockchain ?",
      options: [
        "Il sert à identifier l'auteur de chaque transaction",
        "Il chaîne les blocs entre eux, rendant toute modification détectable car elle invaliderait tous les blocs suivants",
        "Il sert à chiffrer le contenu des transactions",
        "Il détermine la récompense accordée au mineur"
      ],
      correct: [1],
      explanation: "Le hash du bloc précédent est l'élément clé qui 'chaîne' les blocs. Il crée la dépendance entre blocs : si on modifie un bloc, son hash change, et le hash stocké dans le bloc suivant ne correspond plus → la chaîne est cassée. C'est ce qui rend la blockchain immuable."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'minage' illustre dans la démo andersbrownworth.com/blockchain ?",
      options: [
        "La compression des transactions",
        "La recherche du nonce qui fait commencer le hash du bloc par '0000', prouvant une preuve de travail",
        "La signature numérique des transactions",
        "La synchronisation des nœuds"
      ],
      correct: [1],
      explanation: "Dans la démo, miner = trouver un nonce qui fait commencer le hash du bloc par '0000' (ou un nombre de zéros défini par la difficulté). Cela démontre le Proof of Work : trouver ce nonce nécessite de nombreux essais (puissance de calcul), mais la vérification est instantanée."
    },
    {
      type: "single",
      text: "Pourquoi les blocs sauvegardés sur un seul nœud n'ont-ils 'aucune valeur réelle' ?",
      options: [
        "Parce qu'un seul nœud peut facilement modifier les données sans que personne ne le détecte",
        "Parce que sans le consensus du réseau distribué, les modifications ne sont pas validées",
        "Parce que les transactions ne sont pas signées",
        "Parce que la clé privée n'est pas stockée sur le nœud"
      ],
      correct: [0],
      explanation: "Un bloc sauvegardé sur un seul nœud peut être modifié librement (on peut recalculer les hashs). Sa valeur vient de la distribution : dans un réseau distribué, les autres nœuds détiennent des copies légitimes. Une modification sur un nœud sera rejetée par le consensus du réseau."
    },
    {
      type: "single",
      text: "Dans une blockchain distribuée, que se passe-t-il si on modifie une transaction dans le bloc 3 du nœud A ?",
      options: [
        "La modification est propagée automatiquement à tous les autres nœuds",
        "Le hash du bloc 3 change, invalide les blocs 4 et 5 du nœud A, et les autres nœuds (B, C...) rejettent la chaîne modifiée car leurs copies sont différentes",
        "La transaction est supprimée de tous les nœuds",
        "Le nœud A est automatiquement déconnecté du réseau"
      ],
      correct: [1],
      explanation: "Modifier le bloc 3 du nœud A : le hash du bloc 3 change → invalide les blocs 4 et 5 du nœud A. Même après avoir re-miné les blocs 3, 4, 5 du nœud A, les autres nœuds (B, C...) ont une chaîne différente et le consensus rejette la chaîne modifiée. Conclusion : la blockchain distribuée protège l'intégrité."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une transaction dans une blockchain ?",
      options: [
        "Un fichier chiffré stocké sur la blockchain",
        "L'échange d'actifs numériques d'un nœud à l'autre (ou vers un smart contract), constitué de champs From, To, Valeur, Gas, Data, Nonce",
        "Un bloc contenant uniquement les récompenses de minage",
        "La création d'un nouveau compte Ethereum"
      ],
      correct: [1],
      explanation: "Une transaction est l'échange d'actifs numériques entre nœuds (ou vers un smart contract). Données d'une transaction Ethereum : From (compte source), To (compte destinataire), Valeur en Wei, Gas (limite), gasPrice, Data (ABI string), Nonce (anti-replay)."
    },
    {
      type: "single",
      text: "Quel est le rôle du Nonce dans une transaction Ethereum (différent du nonce de minage) ?",
      options: [
        "Déterminer le prix en Wei de la transaction",
        "Un entier incrémenté à chaque transaction pour empêcher les attaques par rejeu (replay attacks)",
        "Identifier l'adresse du destinataire",
        "Spécifier le type de smart contract"
      ],
      correct: [1],
      explanation: "Dans une transaction Ethereum, le nonce est un entier incrémenté à chaque transaction (nonce de type replay). Il empêche les attaques par rejeu : une transaction déjà envoyée ne peut pas être soumise à nouveau car son nonce serait déjà utilisé dans l'historique."
    },
    {
      type: "single",
      text: "Pourquoi un mécanisme de consensus est-il nécessaire dans une blockchain ?",
      options: [
        "Pour chiffrer les communications entre les nœuds",
        "Pour permettre à tous les nœuds distribués de s'accorder sur l'état du registre sans avoir besoin d'une autorité centrale de confiance",
        "Pour accélérer le traitement des transactions",
        "Pour stocker les clés privées des utilisateurs"
      ],
      correct: [1],
      explanation: "Le consensus est nécessaire car dans un réseau distribué sans autorité centrale, tous les nœuds doivent s'accorder sur la version valide du registre. Sans consensus, n'importe quel nœud pourrait proposer des transactions frauduleuses et le réseau ne saurait pas quelle version accepter."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une attaque des 51% sur une blockchain publique ?",
      options: [
        "Une attaque DDoS ciblant 51% des nœuds",
        "Lorsqu'un acteur ou groupe contrôle plus de 51% de la puissance de calcul (PoW) ou des tokens stakés (PoS), lui permettant de manipuler le consensus",
        "Quand 51% des transactions d'un bloc sont frauduleuses",
        "Une attaque qui chiffre 51% des données de la blockchain"
      ],
      correct: [1],
      explanation: "L'attaque des 51% : si un acteur contrôle plus de 50% de la puissance de calcul (PoW) ou des tokens stakés (PoS), il peut potentiellement imposer sa version de la chaîne au réseau, effectuer des doubles dépenses, ou censurer des transactions. C'est pourquoi une blockchain très distribuée est plus sécurisée."
    },
    {
      type: "single",
      text: "Pourquoi une attaque sur une blockchain publique très distribuée est-elle difficile ?",
      options: [
        "Parce que les données sont chiffrées avec un algorithme inviolable",
        "Parce qu'il faudrait contrôler plus de 50% de toute la puissance de calcul ou des tokens du réseau mondial, ce qui est économiquement et techniquement très coûteux",
        "Parce que les transactions sont anonymes et impossibles à cibler",
        "Parce que le code source est secret"
      ],
      correct: [1],
      explanation: "Attaquer une grande blockchain publique (comme Bitcoin) nécessiterait de contrôler plus de 50% de la puissance de calcul mondiale (PoW), ce qui représente des milliards de dollars en matériel et en énergie. Le coût de l'attaque dépasse largement les bénéfices potentiels."
    },
    {
      type: "single",
      text: "Quel est le rôle de la cryptographie dans la blockchain ?",
      options: [
        "Uniquement chiffrer les communications entre nœuds",
        "Assurer l'intégrité des blocs (hachage), authentifier les transactions (signatures numériques), et sécuriser les identités des participants (clés publique/privée)",
        "Compresser les données de la blockchain pour réduire sa taille",
        "Générer des adresses IP pour chaque nœud"
      ],
      correct: [1],
      explanation: "La cryptographie joue plusieurs rôles dans la blockchain : (1) Fonctions de hachage → intégrité des blocs et liaison de la chaîne, (2) Signatures numériques → authenticité et non-répudiation des transactions, (3) Paires clé publique/privée → identité et sécurité des comptes."
    }
  ],
  flashcards: [
    { term: "Immuabilité de la blockchain", def: "Modifier un bloc change son hash → invalide tous les blocs suivants. Dans le réseau distribué, les autres nœuds détectent et rejettent la modification par consensus." },
    { term: "Attaque des 51%", def: "Contrôler >50% de la puissance de calcul (PoW) ou des tokens (PoS) pour imposer une version alternative de la chaîne. Pratiquement impossible sur les grandes blockchains publiques." },
    { term: "Rôle de la cryptographie (blockchain)", def: "Hachage → intégrité des blocs. Signatures numériques → authenticité des transactions. Clés publique/privée → identité sécurisée des participants." },
    { term: "Nonce de transaction (Ethereum)", def: "Entier incrémenté à chaque transaction d'un compte. Anti-replay : empêche qu'une transaction déjà soumise soit réutilisée frauduleusement." },
    { term: "Registre distribué vs Centralisé", def: "BD centralisée : admin, accès contrôlé, rapide, modifiable. Blockchain : décentralisée, tout le monde peut lire (publique), lente, historique immuable, personne n'a le contrôle." },
    { term: "Proof of Work — sécurité", def: "Trouver le nonce valide nécessite beaucoup de calcul, mais la vérification est instantanée. Plus le réseau est grand, plus il faut de puissance pour l'attaquer (résistance aux 51%)." },
    { term: "Smart contract — utilité", def: "Remplace la confiance humaine par la technologie. Exécution automatique et déterministe. Exemple : assurance vol retardé → remboursement automatique si vol retardé >6h." },
    { term: "Hash du bloc précédent", def: "Élément qui 'chaîne' les blocs. Toute modification d'un bloc change son hash, cassant le lien avec le bloc suivant et signalant la fraude au réseau." }
  ]
};
