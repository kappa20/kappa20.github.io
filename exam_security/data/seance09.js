// Séance 9 — TD1 : Introduction à la sécurité (questions d'examen)
const SEANCE_9 = {
  id: 9,
  title: "TD1 — Sécurité & Cryptographie appliquée",
  questions: [
    {
      type: "single",
      text: "Un employé reçoit un email lui demandant de réinitialiser son mot de passe via un lien. Il entre ses identifiants et son compte est ensuite utilisé pour envoyer des emails suspects. Quel type d'attaque a eu lieu ?",
      options: [
        "Une attaque DDoS",
        "Une attaque de phishing (hameçonnage)",
        "Une injection SQL",
        "Une attaque par force brute"
      ],
      correct: [1],
      explanation: "Il s'agit d'une attaque de phishing classique. L'attaquant se fait passer pour un service légitime (ex: IT admin) pour récupérer les identifiants. Signes d'alerte : email non sollicité, lien suspect, urgence créée artificiellement."
    },
    {
      type: "multi",
      text: "Quels signes auraient pu alerter l'employé face à un email de phishing ? (plusieurs réponses)",
      options: [
        "L'URL du lien diffère légèrement du domaine officiel",
        "L'email crée une urgence artificielle ('votre compte sera bloqué dans 24h')",
        "Des fautes d'orthographe ou de mise en forme inhabituelles",
        "L'email vient d'un domaine reconnu et officiel",
        "Demande de credentials via email (les vrais services ne le font jamais)"
      ],
      correct: [0, 1, 2, 4],
      explanation: "Signes d'alerte phishing : URL falsifiée légèrement différente, urgence artificielle, fautes d'orthographe, adresse email d'expéditeur suspecte, demande de credentials par email (les vrais services ne demandent JAMAIS les mots de passe par email)."
    },
    {
      type: "single",
      text: "Le message 'ZHOFRPH WR WKH ZRUOG RI FUBSWRJUDSKB' est chiffré avec César. Avec une clé k=3, le texte déchiffré est :",
      options: [
        "HELLO WORLD OF CRYPTOGRAPHY",
        "WELCOME TO THE WORLD OF CRYPTOGRAPHY",
        "BONJOUR AU MONDE DU CRYPTAGE",
        "INTRODUCTION TO CYBERSECURITY"
      ],
      correct: [1],
      explanation: "Avec le chiffrement de César et k=3, on soustrait 3 à chaque lettre. Z-3=W, H-3=E, O-3=L, F-3=C, R-3=O, P-3=M, H-3=E → WELCOME. W-3=T, R-3=O → TO. W-3=T, K-3=H, H-3=E → THE. Le message est 'WELCOME TO THE WORLD OF CRYPTOGRAPHY'."
    },
    {
      type: "single",
      text: "Dans un chiffrement de substitution monoalphabétique avec la clé A→Q, B→W, C→E..., pour chiffrer 'INFORMATION SECURITY' :",
      options: [
        "Le texte chiffré préserve exactement la fréquence des lettres du texte original",
        "Chaque lettre du texte clair est remplacée par sa correspondance dans la table de substitution, conservant la structure statistique",
        "Le texte est complètement aléatoire sans aucune structure",
        "Seules les consonnes sont chiffrées"
      ],
      correct: [1],
      explanation: "Dans la substitution monoalphabétique, chaque lettre est remplacée par une autre lettre fixe selon la table. La structure statistique (fréquences relatives) est conservée, ce qui la rend vulnérable à l'analyse fréquentielle. Avec K=QWERTYUIOPASDFGHJKLZXCVBNM : I→O, N→D, F→T, etc."
    },
    {
      type: "single",
      text: "Pour chiffrer 'SECURITY SYSTEM' avec Vigenère et la clé 'CRYPTO', la première lettre S est chiffrée avec C. Le résultat est :",
      options: [
        "K (S=18, C=2 → (18+2) mod 26 = 20 = U)",
        "U (S=18, C=2 → (18+2) mod 26 = 20 = U)",
        "P (S=18, C=2 → (18×2) mod 26 = 10 = K)",
        "A (S=18, C=2 → (18-2) mod 26 = 16 = Q)"
      ],
      correct: [1],
      explanation: "Vigenère : Ci = (Pi + Ki) mod 26. S = position 18, C = position 2. Ci = (18 + 2) mod 26 = 20 = 'U'. Pour déchiffrer 'RIJVS UYVJN' avec la clé 'KEY' : R(17)-K(10)=7=H, I(8)-E(4)=4=E, J(9)-Y(24)=(-15 mod 26)=11=L, V(21)-K(10)=11=L, S(18)-E(4)=14=O → 'HELLO'."
    },
    {
      type: "single",
      text: "Quels sont les 'objectifs fondamentaux' (services) en sécurité informatique selon le cours ?",
      options: [
        "Uniquement Confidentialité et Disponibilité",
        "Confidentialité, Intégrité, Disponibilité, Authentification, Autorisation, Non-répudiation, Auditabilité",
        "Seulement Chiffrement et Hachage",
        "Performance, Scalabilité, Disponibilité"
      ],
      correct: [1],
      explanation: "Les objectifs fondamentaux en sécurité informatique : Confidentialité (chiffrement), Intégrité (hachage), Disponibilité (RAID, réplication), Authentification (prouver l'identité), Autorisation (contrôle d'accès), Non-répudiation (signatures numériques), Auditabilité (enregistrement des événements)."
    },
    {
      type: "single",
      text: "Pourquoi le chiffrement de César a-t-il une sécurité faible ?",
      options: [
        "Parce qu'il est trop lent à calculer",
        "Parce qu'il n'y a que 26 clés possibles (k=0 à 25), facilement testables par force brute",
        "Parce qu'il ne peut chiffrer que les lettres majuscules",
        "Parce que la clé doit être transmise en clair"
      ],
      correct: [1],
      explanation: "Le chiffrement de César a une sécurité faible car il n'y a que 26 fonctions de chiffrement possibles (k=0 à 25). Un attaquant peut essayer toutes les clés en quelques secondes (attaque par force brute ou 'brute force attack'). De plus, les fonctions C29 et C3 sont identiques (modulo 26)."
    },
    {
      type: "single",
      text: "Dans un chiffrement par transposition avec la clé [3,5,2,6,1,4], les colonnes du message 'LATECHNOLOGIEBLOCKCHAIN' sont réordonnées selon :",
      options: [
        "L'ordre alphabétique des lettres de la clé",
        "L'ordre numérique de la clé : la colonne 1 va en 3ème position, la colonne 2 en 5ème, etc.",
        "Le message est découpé en blocs puis les blocs sont réordonnés selon la clé",
        "Les lettres sont redistribuées en spirale"
      ],
      correct: [1],
      explanation: "Dans le chiffrement par transposition avec une clé numérique [3,5,2,6,1,4], le message est écrit en colonnes et les colonnes sont réordonnées selon l'ordre des chiffres de la clé. La structure des lettres est préservée (même fréquence), mais leur position change."
    },
    {
      type: "single",
      text: "Quelle propriété du texte clair reste inchangée dans un chiffrement par transposition ?",
      options: [
        "L'ordre des lettres",
        "La position de chaque lettre",
        "La fréquence des lettres (les mêmes lettres apparaissent avec la même fréquence)",
        "La longueur des mots"
      ],
      correct: [2],
      explanation: "Dans un chiffrement par transposition, les lettres sont réarrangées mais pas remplacées. Donc la fréquence des lettres est identique dans le texte clair et dans le texte chiffré. C'est une propriété fondamentale qui le distingue de la substitution (où la fréquence peut aussi être préservée mais les lettres sont remplacées)."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Vishing' ?",
      options: [
        "Une variante du phishing par SMS",
        "L'hameçonnage vocal via appels téléphoniques (téléphone traditionnel ou VoIP)",
        "Un malware qui intercepte les appels vidéo",
        "Une attaque par deepfake sur les réseaux sociaux"
      ],
      correct: [1],
      explanation: "Le Vishing (hameçonnage vocal) utilise des appels vocaux (via téléphone traditionnel ou services VoIP) pour tromper les victimes. Avec l'IA, les deepfakes permettent de cloner des voix, rendant ces attaques encore plus difficiles à détecter."
    }
  ],
  flashcards: [
    { term: "Chiffrement de César — attaque", def: "Seules 26 clés possibles (k=0 à 25). Attaque par force brute : tester toutes les clés en quelques secondes. Sécurité très faible." },
    { term: "Substitution monoalphabétique — attaque", def: "26! clés possibles mais vulnérable à l'analyse fréquentielle. Les lettres les plus fréquentes en français (E, S, A...) révèlent les substitutions." },
    { term: "Transposition — propriété", def: "Les lettres sont réarrangées mais pas remplacées → fréquence des lettres IDENTIQUE dans le clair et le chiffré. Vulnérable à l'analyse fréquentielle." },
    { term: "Vigenère — propriété", def: "Chiffrement polyalphabétique : une même lettre claire peut être chiffrée différemment selon sa position. La fréquence des lettres est MODIFIÉE dans le texte chiffré." },
    { term: "Phishing — indicateurs", def: "URL falsifiée, urgence artificielle, fautes d'orthographe, expéditeur suspect, demande de credentials. Les vrais services ne demandent JAMAIS les mots de passe par email." },
    { term: "Objectifs de sécurité CIA+", def: "Confidentialité + Intégrité + Disponibilité + Authentification + Autorisation + Non-répudiation + Auditabilité. (Modèle CIDAVR étendu)." },
    { term: "Analyse fréquentielle", def: "Attaque sur les chiffrements par substitution. En français : les lettres E, S, A, I, N, T, R sont les plus fréquentes. Identifier la lettre la plus fréquente dans le chiffré → probablement E." },
    { term: "Credential Stuffing", def: "Utilisation de listes d'identifiants/mots de passe volés pour tenter de se connecter à d'autres services (exploitation de la réutilisation des mots de passe)." }
  ]
};
