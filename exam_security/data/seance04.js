// Séance 4 — Cryptographie RSA & Signatures numériques
const SEANCE_4 = {
  id: 4,
  title: "RSA, Padding & Signatures numériques",
  questions: [
    {
      type: "single",
      text: "Dans RSA, la clé publique est composée de :",
      options: [
        "(p, q) — les deux nombres premiers",
        "(e, n) — l'exposant public et le module",
        "(d, n) — l'exposant privé et le module",
        "(φ(n), e) — l'indicatrice d'Euler et l'exposant"
      ],
      correct: [1],
      explanation: "Dans RSA : Clé publique = (e, n) où e est l'exposant public et n = p×q le module. Clé privée = (d, n) où d est l'exposant privé calculé comme l'inverse de e modulo φ(n)."
    },
    {
      type: "single",
      text: "La sécurité de RSA repose sur :",
      options: [
        "La difficulté de résoudre le logarithme discret",
        "La difficulté de factoriser le module n = p × q en ses facteurs premiers p et q",
        "La difficulté de deviner un nombre aléatoire",
        "La complexité du calcul d'une fonction de hachage"
      ],
      correct: [1],
      explanation: "RSA repose sur la difficulté de factoriser n = p × q. Si un attaquant retrouve p et q, il peut calculer φ(n) = (p-1)(q-1) et ensuite la clé privée d. C'est pourquoi on utilise des clés RSA ≥ 2048 bits."
    },
    {
      type: "single",
      text: "Dans RSA, le chiffrement d'un message M se fait par :",
      options: [
        "C = M^d mod n",
        "C = M^e mod n",
        "C = M + e mod n",
        "C = M × n mod e"
      ],
      correct: [1],
      explanation: "Chiffrement RSA : C = M^e mod n (avec la clé publique e). Déchiffrement : M = C^d mod n (avec la clé privée d). Le destinataire utilise sa clé privée pour déchiffrer ce que l'expéditeur a chiffré avec la clé publique."
    },
    {
      type: "single",
      text: "Quel est le rôle du padding (OAEP) dans RSA ?",
      options: [
        "Accélérer le calcul de chiffrement",
        "Réduire la taille de la clé RSA",
        "Rendre le chiffrement probabiliste (même message → chiffrés différents) et résister aux attaques",
        "Compresser le message avant chiffrement"
      ],
      correct: [2],
      explanation: "Sans padding, RSA est déterministe (même message = même chiffré) et vulnérable aux attaques. Avec padding (OAEP), le chiffrement devient probabiliste (même message → chiffrés différents) et résistant aux attaques de type chosen ciphertext."
    },
    {
      type: "single",
      text: "Quelle est la contre-mesure recommandée contre l'attaque par factorisation de n dans RSA ?",
      options: [
        "Utiliser un petit exposant e = 3",
        "Utiliser des clés RSA ≥ 2048 bits avec p et q bien choisis",
        "Réutiliser le même module n pour plusieurs clés",
        "Utiliser PKCS#1 v1.5 sans padding"
      ],
      correct: [1],
      explanation: "Pour se protéger contre la factorisation de n : utiliser des clés RSA ≥ 2048 bits avec p et q bien choisis (grands, aléatoires, indépendants). De nos jours, 3072 ou 4096 bits est recommandé pour une sécurité long terme."
    },
    {
      type: "single",
      text: "Dans le format PKCS#1 v1.5, le bloc EM de chiffrement est structuré comme :",
      options: [
        "M || 00 || PS || BT || 00",
        "00 || BT || PS || 00 || M",
        "BT || 00 || M || PS || 00",
        "PS || BT || 00 || M || 00"
      ],
      correct: [1],
      explanation: "PKCS#1 v1.5 : EM = 00 || BT || PS || 00 || M. Où 00 = octet de tête, BT = type de bloc (02 pour chiffrement, 01 pour signature), PS = padding string (octets aléatoires non nuls), M = message clair."
    },
    {
      type: "single",
      text: "Quelle est la différence entre DSA et RSA pour la signature numérique ?",
      options: [
        "DSA est plus lent que RSA",
        "DSA est conçu uniquement pour la signature numérique (pas pour le chiffrement) et repose sur le logarithme discret, RSA peut faire les deux",
        "DSA utilise des clés plus longues que RSA",
        "DSA ne nécessite pas de fonction de hachage"
      ],
      correct: [1],
      explanation: "DSA (Digital Signature Algorithm) est conçu uniquement pour la signature numérique (PAS pour le chiffrement). Il repose sur le logarithme discret dans un groupe fini. RSA peut être utilisé pour le chiffrement ET la signature."
    },
    {
      type: "single",
      text: "ECDSA (Elliptic Curve DSA) se caractérise par :",
      options: [
        "Des clés plus longues que RSA pour la même sécurité",
        "Une sécurité équivalente à RSA mais avec des clés bien plus petites, basée sur les courbes elliptiques",
        "Un algorithme exclusivement utilisé pour le chiffrement symétrique",
        "Une méthode sans besoin de clé privée"
      ],
      correct: [1],
      explanation: "ECDSA repose sur la difficulté du logarithme discret sur courbes elliptiques (ECDLP). Il offre la même sécurité que RSA avec des clés bien plus petites. Applications : Bitcoin, blockchain, TLS, cartes à puce, mobiles. Plus léger et plus rapide que RSA."
    },
    {
      type: "multi",
      text: "Qu'est-ce qu'une signature numérique garantit ? (plusieurs réponses)",
      options: [
        "L'authenticité (identité de l'émetteur)",
        "L'intégrité (le message n'a pas été modifié)",
        "La non-répudiation (l'émetteur ne peut pas nier avoir signé)",
        "La confidentialité du message",
        "La disponibilité du service"
      ],
      correct: [0, 1, 2],
      explanation: "Une signature numérique garantit : (1) Authenticité — identité de l'émetteur, (2) Intégrité — le message n'a pas été modifié, (3) Non-répudiation — l'émetteur ne peut pas nier avoir signé. Elle ne garantit PAS la confidentialité (pour cela, on chiffre le message)."
    },
    {
      type: "single",
      text: "Le processus de vérification d'une signature numérique RSA consiste à :",
      options: [
        "Chiffrer le message avec la clé publique et comparer",
        "Déchiffrer la signature avec la clé publique du signataire, recalculer le hash du message et comparer les deux valeurs",
        "Envoyer la signature au signataire pour validation",
        "Comparer la signature avec une base de données de signatures connues"
      ],
      correct: [1],
      explanation: "Vérification de signature RSA : (1) Déchiffrer la signature avec la clé PUBLIQUE du signataire → obtenir h'', (2) Recalculer le hash du message → h', (3) Si h' = h'' → signature valide. L'émetteur avait signé en chiffrant le hash avec sa clé PRIVÉE."
    },
    {
      type: "single",
      text: "Pourquoi l'attaque de Bleichenbacher cible-t-elle PKCS#1 v1.5 ?",
      options: [
        "Parce que les clés sont trop courtes",
        "Parce que l'algorithme est trop lent",
        "Parce que PKCS#1 v1.5 présente des vulnérabilités connues qui permettent des attaques de type Chosen Ciphertext",
        "Parce que PKCS#1 v1.5 n'utilise pas de fonction de hachage"
      ],
      correct: [2],
      explanation: "PKCS#1 v1.5 est aujourd'hui considéré comme moins sûr qu'OAEP pour le chiffrement, en raison de vulnérabilités connues comme l'attaque de Bleichenbacher (attaque CCA — Chosen Ciphertext Attack). OAEP est recommandé pour le chiffrement."
    }
  ],
  flashcards: [
    { term: "RSA — Clé publique", def: "(e, n) où e = exposant public, n = p×q. Utilisée pour chiffrer et vérifier les signatures." },
    { term: "RSA — Clé privée", def: "(d, n) où d = exposant privé = inverse de e mod φ(n). Utilisée pour déchiffrer et signer." },
    { term: "Chiffrement RSA", def: "C = M^e mod n (avec clé publique). Déchiffrement : M = C^d mod n (avec clé privée)." },
    { term: "OAEP", def: "Optimal Asymmetric Encryption Padding. Utilise hachage (SHA-256), MGF1 et une valeur aléatoire (seed). Rend RSA probabiliste et résistant aux attaques CCA." },
    { term: "DSA", def: "Digital Signature Algorithm. Conçu UNIQUEMENT pour la signature (pas le chiffrement). Repose sur le logarithme discret. Nécessite un nombre aléatoire k unique par signature." },
    { term: "ECDSA", def: "Version moderne de DSA sur courbes elliptiques. Même sécurité que RSA avec des clés plus petites. Utilisé dans Bitcoin, TLS, blockchain." },
    { term: "Signature numérique", def: "Garantit : Authenticité + Intégrité + Non-répudiation. Processus : hash(message) → chiffrement avec clé privée → signature." },
    { term: "PKCS#1 v1.5", def: "Norme de padding RSA. Format : 00 || BT || PS || 00 || M. BT=02 pour chiffrement, BT=01 pour signature. Vulnérable à l'attaque de Bleichenbacher." }
  ]
};
