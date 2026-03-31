// Séance 1 — Sécurité des données : Introduction & Terminologie
const SEANCE_1 = {
  id: 1,
  title: "Intro à la sécurité des données",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce que la sécurité informatique ?",
      options: [
        "L'ensemble des techniques pour protéger les systèmes, réseaux et données contre les intrusions et accès non autorisés",
        "Un logiciel antivirus installé sur un ordinateur",
        "La sauvegarde régulière des fichiers sur un disque externe",
        "Le chiffrement exclusif des emails professionnels"
      ],
      correct: [0],
      explanation: "La sécurité informatique est l'ensemble des techniques et pratiques conçues pour protéger les systèmes informatiques, les réseaux et les données contre les intrusions, les accès non autorisés, les dommages ou les attaques."
    },
    {
      type: "multi",
      text: "Quels sont les domaines couverts par la sécurité informatique ? (plusieurs réponses)",
      options: [
        "Sécurité physique",
        "Sécurité des applications",
        "Sécurité des données",
        "Sécurité des réseaux",
        "Comptabilité financière"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La sécurité informatique englobe : sécurité physique, sécurité des applications, sécurité des données, sécurité des réseaux, sécurité des IoT, etc. La comptabilité n'en fait pas partie."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une vulnérabilité en sécurité informatique ?",
      options: [
        "Une action volontaire d'un attaquant pour compromettre un système",
        "Une faiblesse ou faille dans un système pouvant être exploitée par une menace",
        "Un logiciel malveillant installé sur un serveur",
        "Une panne matérielle aléatoire"
      ],
      correct: [1],
      explanation: "Une vulnérabilité est une faiblesse ou une faille dans un système informatique (logiciel, matériel, réseau ou procédure) qui peut être exploitée par une menace pour compromettre la sécurité."
    },
    {
      type: "single",
      text: "Comment se calcule le Risque en sécurité informatique ?",
      options: [
        "Risque = Attaque + Vulnérabilité",
        "Risque = Menace × Vulnérabilité × Actif",
        "Risque = Contre-mesure / Incident",
        "Risque = Incident + Menace"
      ],
      correct: [1],
      explanation: "La formule du risque est : Risque = Menace × Vulnérabilité × Actif. C'est la combinaison de la probabilité d'une menace, de l'existence d'une vulnérabilité et de la valeur de l'actif concerné."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un actif (asset) en sécurité informatique ?",
      options: [
        "Un fichier chiffré uniquement",
        "Toute chose ayant une valeur pour l'entreprise (matériels, logiciels, données, personnes, etc.)",
        "Un serveur physique uniquement",
        "Un algorithme de chiffrement"
      ],
      correct: [1],
      explanation: "Un actif (asset) est toute chose ayant une valeur pour l'entreprise : matériels, logiciels, services, personnes, informations stockées, infrastructures, etc."
    },
    {
      type: "multi",
      text: "Quels sont les principaux objectifs de la sécurité des données (triade CIA) ?",
      options: [
        "Confidentialité",
        "Intégrité",
        "Disponibilité",
        "Rentabilité",
        "Scalabilité"
      ],
      correct: [0, 1, 2],
      explanation: "La triade CIA (Confidentiality, Integrity, Availability) représente les trois principaux objectifs : Confidentialité (données secrètes), Intégrité (données exactes et authentiques), Disponibilité (accès garanti)."
    },
    {
      type: "single",
      text: "Quel mécanisme garantit la Confidentialité des données ?",
      options: [
        "Les fonctions de hachage (MD5, SHA256)",
        "Le chiffrement (encryption)",
        "La duplication RAID",
        "Les signatures numériques"
      ],
      correct: [1],
      explanation: "La Confidentialité est assurée par le CHIFFREMENT. Elle consiste à rendre les données stockées ou transmises inintelligibles aux personnes non autorisées."
    },
    {
      type: "single",
      text: "Quel mécanisme garantit l'Intégrité des données ?",
      options: [
        "Le chiffrement RSA",
        "La réplication des serveurs",
        "Les fonctions de hachage (MD5, SHA1, SHA256)",
        "Les certificats SSL"
      ],
      correct: [2],
      explanation: "L'Intégrité est assurée par les FONCTIONS DE HACHAGE (MD5, SHA1, SHA256). Elles permettent de vérifier que les données n'ont pas été modifiées ou altérées."
    },
    {
      type: "single",
      text: "Quel est le modèle de sécurité étendu appelé CIDAVR ?",
      options: [
        "Confidentialité, Intégrité, Disponibilité, Authenticité, Vérifiabilité, Résilience",
        "Confidentialité, Intégrité, Disponibilité, Authenticité, Traçabilité, Non-répudiation",
        "Contrôle, Identification, Déchiffrement, Audit, Validation, Réplication",
        "Chiffrement, Intégrité, Duplication, Accès, Vérification, Réseau"
      ],
      correct: [1],
      explanation: "CIDAVR = Confidentialité + Intégrité + Disponibilité + Authenticité + Traçabilité/Vérifiabilité + Non-répudiation. C'est une extension du modèle CID (ISO 27001)."
    },
    {
      type: "single",
      text: "Qu'est-ce que la Non-répudiation en sécurité ?",
      options: [
        "Empêcher les utilisateurs de modifier leurs mots de passe",
        "Fournir la preuve indéniable qu'une action a bien été effectuée, basée sur les signatures numériques",
        "Refuser l'accès aux utilisateurs non autorisés",
        "Chiffrer les communications réseau"
      ],
      correct: [1],
      explanation: "La Non-répudiation fournit la preuve indéniable qu'une action a bien été effectuée. Elle se base sur les signatures digitales et garantit que l'émetteur ne peut pas nier avoir envoyé un message."
    },
    {
      type: "single",
      text: "Le protocole Triple A (AAA) comprend :",
      options: [
        "Authentification, Autorisation, Accounting/Audit",
        "Accès, Authentification, Alerte",
        "Autorisation, Audit, Archivage",
        "Analyse, Authentification, Accès"
      ],
      correct: [0],
      explanation: "Le protocole Triple A (AAA) : Authentification (qui veut accéder ?), Autorisation (a-t-il le droit ?), Accounting/Audit (quelles opérations ont été effectuées ?)."
    },
    {
      type: "single",
      text: "D'après les statistiques, quel pourcentage des attaques provient de l'intérieur d'une organisation ?",
      options: [
        "20%",
        "40%",
        "60%",
        "80%"
      ],
      correct: [2],
      explanation: "60% des attaques proviennent de l'intérieur des entreprises (employés malveillants ou négligents). Seulement 40% viennent de l'extérieur. Le point faible des entreprises est le manque de traçabilité."
    }
  ],
  flashcards: [
    { term: "Vulnérabilité", def: "Faiblesse ou faille dans un système (logiciel, matériel, réseau) pouvant être exploitée par une menace pour compromettre la sécurité." },
    { term: "Risque", def: "Risque = Menace × Vulnérabilité × Actif. Possibilité qu'une menace exploite une vulnérabilité et cause un dommage." },
    { term: "Triade CIA", def: "Confidentiality (Confidentialité) + Integrity (Intégrité) + Availability (Disponibilité) — les 3 piliers fondamentaux de la sécurité des données." },
    { term: "Non-répudiation", def: "Preuve indéniable qu'une action a bien été effectuée. Basée sur les signatures numériques. L'émetteur ne peut pas nier avoir signé." },
    { term: "Contre-mesure", def: "Action ou dispositif mis en place pour prévenir, limiter ou neutraliser les effets d'une menace. Peut être préventive ou corrective." },
    { term: "Actif (Asset)", def: "Toute chose ayant une valeur pour l'entreprise : matériels, logiciels, services, personnes, informations stockées, infrastructures." },
    { term: "Authentification", def: "Vérification de la prétendue identité d'un utilisateur, d'un programme ou d'une machine. Étape qui précède le contrôle d'accès." },
    { term: "Auditabilité", def: "Capacité à détecter, retracer et enregistrer tous les événements qui surviennent dans un système pour analyse ultérieure." }
  ]
};
