// Séance 3 — Cryptographie : Bases & Chiffrements classiques
const SEANCE_3 = {
  id: 3,
  title: "Cryptographie & Chiffrements classiques",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce que la cryptographie ?",
      options: [
        "La science qui étudie le chiffrement et le déchiffrement de messages",
        "Un protocole réseau sécurisé",
        "La technique de stockage sécurisé des données",
        "Un algorithme de compression de fichiers"
      ],
      correct: [0],
      explanation: "La cryptographie (KRYPTOS = caché, GRAPHOS = écriture) est la science qui étudie le chiffrement et le déchiffrement de messages. Son but est d'échanger des informations de façon sécurisée."
    },
    {
      type: "multi",
      text: "Quels sont les deux grands types de cryptographie ?",
      options: [
        "Cryptographie symétrique (à clé secrète)",
        "Cryptographie asymétrique (à clé publique)",
        "Cryptographie quantique",
        "Cryptographie linéaire"
      ],
      correct: [0, 1],
      explanation: "Il existe essentiellement deux types : (1) Cryptographie symétrique (à clé secrète) — la plus ancienne ; (2) Cryptographie asymétrique (à clé publique) — née en 1976 avec l'article de Diffie et Hellman."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre chiffrement symétrique et asymétrique ?",
      options: [
        "Le symétrique est plus sécurisé, l'asymétrique est plus rapide",
        "Le symétrique utilise la même clé pour chiffrer/déchiffrer (plus rapide), l'asymétrique utilise une paire de clés publique/privée mais nécessite un échange préalable de clé secrète",
        "Le symétrique est plus rapide mais nécessite le partage préalable de la clé secrète, l'asymétrique utilise une paire de clés publique/privée",
        "Il n'y a aucune différence pratique entre les deux"
      ],
      correct: [2],
      explanation: "Le chiffrement symétrique est beaucoup plus rapide mais nécessite le partage préalable de la clé secrète. L'asymétrique utilise une paire clé publique/privée. En pratique, on utilise d'abord l'asymétrique pour échanger la clé secrète, puis le symétrique pour les données."
    },
    {
      type: "single",
      text: "Qu'est-ce que la stéganographie ?",
      options: [
        "Un algorithme de chiffrement par substitution",
        "L'art de dissimuler un message dans un autre message (encre invisible, micro-point...)",
        "Une méthode d'authentification à deux facteurs",
        "Un protocole de signature numérique"
      ],
      correct: [1],
      explanation: "La stéganographie est l'art de la dissimulation : cacher un message dans un autre message. Exemples : encre invisible, crâne rasé (tatouage de message), micro-point (message dissimulé dans un point de ponctuation)."
    },
    {
      type: "single",
      text: "Le chiffrement de César consiste à :",
      options: [
        "Associer à chaque lettre une autre lettre de façon aléatoire",
        "Décaler chaque lettre de l'alphabet d'un nombre précis de positions (la clé = nombre de décalages)",
        "Utiliser une clé sous forme de mot répété tout au long du texte",
        "Chiffrer en blocs de lettres avec plusieurs clés"
      ],
      correct: [1],
      explanation: "Le chiffrement de César consiste à décaler chaque lettre de l'alphabet d'un nombre précis de fois. La clé de cryptage est le nombre de décalage. Ex : avec k=3, 'BONJOUR' → 'ERQMRXU'. Il y a 26 fonctions Ck différentes (k=0 à 25), ce qui en fait un chiffrement à sécurité faible."
    },
    {
      type: "single",
      text: "Quelle est la faiblesse principale du chiffrement par substitution monoalphabétique ?",
      options: [
        "La clé est trop courte",
        "Il est trop lent à calculer",
        "Une même lettre est toujours chiffrée de la même façon, permettant une attaque statistique (analyse de fréquence)",
        "Il ne peut chiffrer que des nombres"
      ],
      correct: [2],
      explanation: "La faiblesse du chiffrement par substitution est que la même lettre est toujours cryptée de la même façon. Cela permet une attaque statistique : les lettres n'apparaissent pas avec la même fréquence, on peut donc identifier les substitutions en cherchant les lettres les plus fréquentes."
    },
    {
      type: "single",
      text: "La méthode de Vigenère est :",
      options: [
        "Un chiffrement monoalphabétique par substitution simple",
        "Un chiffrement polyalphabétique qui utilise une clé sous forme de mot répété, améliorant la sécurité du César",
        "Un algorithme de chiffrement asymétrique moderne",
        "Une méthode de hachage cryptographique"
      ],
      correct: [1],
      explanation: "Vigenère est une technique de chiffrement polyalphabétique qui améliore César en utilisant une clé sous forme de mot répété. Chaque lettre Ci du texte chiffré est : Ci = (Pi + Ki) mod 26. Cela rend l'analyse fréquentielle plus difficile."
    },
    {
      type: "single",
      text: "La méthode de Kasiski est utilisée pour :",
      options: [
        "Générer des clés RSA",
        "Estimer la longueur de la clé dans le chiffrement de Vigenère en cherchant des séquences répétées dans le texte chiffré",
        "Vérifier l'intégrité des données par hachage",
        "Chiffrer des blocs de données"
      ],
      correct: [1],
      explanation: "La méthode de Kasiski est la cryptanalyse du chiffrement de Vigenère. Elle consiste à chercher des séquences répétées dans le texte chiffré. La distance entre ces répétitions est un multiple de la longueur de la clé, ce qui permet d'estimer la longueur de la clé."
    },
    {
      type: "single",
      text: "L'Indice de Coïncidence (IC) est :",
      options: [
        "La probabilité qu'un message soit intercepté",
        "La probabilité que deux lettres choisies aléatoirement dans un texte soient identiques. IC du français = 0.0746",
        "Le nombre de clés possibles dans un chiffrement",
        "Le taux de compression d'un message chiffré"
      ],
      correct: [1],
      explanation: "L'indice de Coïncidence (IC) est la probabilité que deux lettres choisies aléatoirement dans un texte soient identiques. Inventé par William Friedman (1920). IC du français = 0.0746. IC(M) = IC(C) : l'indice est préservé par le chiffrement de César."
    },
    {
      type: "single",
      text: "Combien de clés possibles existe-t-il dans un chiffrement par substitution monoalphabétique sur l'alphabet de 26 lettres ?",
      options: [
        "26 clés",
        "26² = 676 clés",
        "26! ≈ 4×10²⁶ clés",
        "2²⁶ clés"
      ],
      correct: [2],
      explanation: "Le nombre de clés possibles = 26! (26 factorielle) ≈ 4×10²⁶ clés. En choisissant une bijection de {A...Z} → {A...Z}, pour A il y a 26 choix, pour B 25 choix, etc. Bien que grand, ce chiffrement reste vulnérable à l'analyse statistique."
    },
    {
      type: "single",
      text: "Qu'est-ce que la cryptanalyse ?",
      options: [
        "L'étude des algorithmes de chiffrement",
        "La technique qui permet de retrouver le message clair à partir d'un texte chiffré sans connaître la clé",
        "La génération de clés cryptographiques",
        "Le chiffrement de données sensibles"
      ],
      correct: [1],
      explanation: "La cryptanalyse est la technique qui permet de retrouver le message clair à partir d'un texte chiffré, sans disposer des paramètres nécessaires (clé). C'est l'inverse de la cryptographie."
    },
    {
      type: "single",
      text: "Dans le chiffrement de Vigenère avec la clé CRYPTO, pour chiffrer la lettre 'S' (position 18) avec la lettre de clé 'C' (position 2), on obtient :",
      options: [
        "La lettre à la position (18 + 2) mod 26 = 20, soit 'U'",
        "La lettre à la position (18 - 2) mod 26 = 16, soit 'Q'",
        "La lettre à la position 18 × 2 mod 26 = 10, soit 'K'",
        "La lettre 'S' elle-même (pas de changement)"
      ],
      correct: [0],
      explanation: "Dans Vigenère : Ci = (Pi + Ki) mod 26. Avec Pi = 18 (S) et Ki = 2 (C) : Ci = (18+2) mod 26 = 20 = 'U'. La lettre S chiffrée avec la clé C donne U."
    }
  ],
  flashcards: [
    { term: "Chiffrement de César", def: "Décalage circulaire de chaque lettre d'un nombre k fixe. La clé = nombre de décalages (k). Sécurité faible : seulement 26 clés possibles." },
    { term: "Chiffrement de Vigenère", def: "Chiffrement polyalphabétique utilisant une clé répétée. Ci = (Pi + Ki) mod 26. Plus résistant que César mais vulnérable à Kasiski + analyse de fréquence." },
    { term: "Méthode de Kasiski", def: "Cryptanalyse de Vigenère : chercher les séquences répétées dans le texte chiffré. La distance entre répétitions = multiple de la longueur de la clé." },
    { term: "Indice de Coïncidence (IC)", def: "Probabilité que deux lettres aléatoires d'un texte soient identiques. IC français = 0.0746. IC(texte clair) = IC(texte chiffré avec César)." },
    { term: "Substitution monoalphabétique", def: "Associe à chaque lettre une autre lettre fixe. 26! ≈ 4×10²⁶ clés possibles. Vulnérable à l'analyse statistique (fréquence des lettres)." },
    { term: "Stéganographie", def: "Art de cacher un message dans un autre message (encre invisible, micro-point). Différent de la cryptographie : le message est caché, pas chiffré." },
    { term: "Cryptogramme", def: "Le texte chiffré, le résultat du chiffrement d'un texte clair." },
    { term: "Crypto-système", def: "Triplet : (algorithmes de chiffrement, algorithmes de déchiffrement, ensemble de clefs utilisées)." }
  ]
};
