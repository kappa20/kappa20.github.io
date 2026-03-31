// Séance 2 — Menaces & Attaques
const SEANCE_2 = {
  id: 2,
  title: "Menaces & Attaques informatiques",
  questions: [
    {
      type: "single",
      text: "Un ransomware est un type de malware qui :",
      options: [
        "S'infiltre silencieusement et collecte des données personnelles",
        "Vole vos informations et propose de vous les rendre en échange d'une rançon",
        "S'auto-reproduit en infectant d'autres programmes",
        "Permet à un tiers de contrôler à distance votre ordinateur"
      ],
      correct: [1],
      explanation: "Le ransomware (ou rançongiciel) est un malware qui vole ou chiffre vos informations et propose de vous les rendre contre une somme d'argent (rançon)."
    },
    {
      type: "single",
      text: "Quelle est la différence principale entre un virus et un ver informatique ?",
      options: [
        "Un virus est plus dangereux qu'un ver",
        "Un virus s'insère dans une application hôte et s'exécute quand elle est ouverte, un ver exploite les vulnérabilités réseau pour se propager seul",
        "Un ver nécessite une action humaine pour se propager, un virus non",
        "Il n'y a aucune différence, ce sont des synonymes"
      ],
      correct: [1],
      explanation: "Un virus s'insère dans une application et s'exécute quand elle est ouverte. Il s'auto-reproduit en infectant d'autres programmes. Un ver cible les vulnérabilités des systèmes d'exploitation et se propage seul via internet (emails, FTP, etc.) sans nécessiter une application hôte."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Cheval de Troie (Trojan) ?",
      options: [
        "Un virus qui se propage par les réseaux sociaux",
        "Un logiciel malveillant déguisé en logiciel légitime, souvent téléchargé par mégarde, qui donne accès aux ressources de l'ordinateur à un tiers",
        "Un programme qui chiffre les fichiers du disque dur",
        "Une attaque qui intercepte les communications réseau"
      ],
      correct: [1],
      explanation: "Le cheval de Troie est un logiciel malveillant, souvent téléchargé par mégarde (ex: pièce jointe piégée), qui a pour but de faire profiter à un tiers les ressources de votre ordinateur. Il se dissimule dans un logiciel en apparence légitime."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une attaque DDoS (Distributed Denial of Service) ?",
      options: [
        "Une attaque qui vole des mots de passe par force brute",
        "Une attaque qui paralyse un service en le rendant indisponible, en utilisant un réseau d'ordinateurs distribués pour multiplier les sources",
        "Une attaque qui intercepte les communications entre deux parties",
        "Une injection de code malveillant dans une base de données"
      ],
      correct: [1],
      explanation: "Une attaque DDoS utilise un réseau d'ordinateurs (botnet) sous contrôle de l'attaquant pour multiplier les sources et la force de l'attaque, visant à rendre un service indisponible (Déni de Service Distribué)."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Phishing (hameçonnage) ?",
      options: [
        "Un malware qui s'installe automatiquement via le navigateur",
        "Une attaque d'ingénierie sociale où l'attaquant se fait passer pour un contact de confiance pour obtenir des informations confidentielles",
        "Une attaque par force brute sur un mot de passe",
        "Un logiciel espion qui collecte les frappes clavier"
      ],
      correct: [1],
      explanation: "Le phishing est une attaque d'ingénierie sociale où l'attaquant se fait passer pour un contact de confiance (banque, admin, etc.) via des emails frauduleux pour obtenir des identifiants ou installer des malwares."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une attaque Man-in-the-Middle (MiTM) ?",
      options: [
        "Une attaque où l'attaquant intercepte et surveille une communication réseau existante en se positionnant entre les deux parties",
        "Une attaque par déni de service utilisant plusieurs sources",
        "Un logiciel malveillant qui chiffre les fichiers",
        "Une tentative d'accès par essai de toutes les combinaisons de mots de passe"
      ],
      correct: [0],
      explanation: "Une attaque Man-in-the-Middle (MiTM) est un type de cyberattaque où l'attaquant intercepte une communication réseau existante, en écoutant aux portes ou en se faisant passer pour un participant légitime."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une injection SQL (SQLi) ?",
      options: [
        "Un virus qui infecte les bases de données",
        "Une vulnérabilité web qui permet à un attaquant d'interférer avec les requêtes d'une application vers sa base de données",
        "Un chiffrement des données dans une base de données",
        "Une méthode de sauvegarde des bases de données"
      ],
      correct: [1],
      explanation: "L'injection SQL est une vulnérabilité de sécurité web qui permet à un attaquant d'interférer avec les requêtes d'une application vers sa base de données, permettant d'accéder ou de manipuler des données normalement non accessibles."
    },
    {
      type: "multi",
      text: "Quelles sont les trois catégories principales des menaces externes en cybersécurité ?",
      options: [
        "Logiciels malveillants (malwares, ransomware)",
        "Piratage (DDoS, intrusion)",
        "Ingénierie sociale (phishing)",
        "Pannes matérielles accidentelles",
        "Erreurs de configuration réseau"
      ],
      correct: [0, 1, 2],
      explanation: "Les menaces externes se répartissent en 3 catégories : (1) Logiciels malveillants comme les ransomwares, (2) Piratage comme les attaques DDoS, (3) Ingénierie sociale comme le phishing."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Rootkit ?",
      options: [
        "Un programme qui génère des mots de passe aléatoires",
        "Un logiciel qui permet au cybercriminel de contrôler à distance l'ordinateur d'une victime avec des privilèges administratifs complets",
        "Un outil de sauvegarde des fichiers système",
        "Un protocole de chiffrement réseau"
      ],
      correct: [1],
      explanation: "Les Rootkits sont des logiciels qui permettent au cybercriminel de contrôler à distance l'ordinateur d'une victime avec des privilèges administratifs complets, restant ainsi invisibles."
    },
    {
      type: "single",
      text: "Qu'est-ce que le DNS Spoofing / Hijack DNS ?",
      options: [
        "Une attaque qui surcharge le serveur DNS de requêtes",
        "Le pirate modifie les serveurs DNS pour rediriger le trafic vers un faux site web usurpé afin de voler des informations sensibles",
        "Un chiffrement des requêtes DNS",
        "Une méthode de sauvegarde des entrées DNS"
      ],
      correct: [1],
      explanation: "Le DNS Spoofing consiste à modifier les serveurs DNS pour envoyer le trafic vers un faux site web. La victime croit visiter un site légitime mais se retrouve sur un site frauduleux où ses données peuvent être volées."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Smishing' (apparu avec l'IA) ?",
      options: [
        "Une attaque par email sophistiquée utilisant l'IA",
        "Une attaque de phishing ciblant les individus par SMS ou messages texte",
        "Un malware qui infecte les téléphones via Bluetooth",
        "Une technique de déchiffrement par apprentissage automatique"
      ],
      correct: [1],
      explanation: "Le Smishing est une attaque de phishing ciblant les individus par SMS (Short Message Service) ou messages texte. Le terme combine 'SMS' et 'phishing'. C'est une nouvelle arnaque émergente avec l'IA."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Botnet ?",
      options: [
        "Un antivirus automatisé",
        "Un réseau de robots (bots) malveillants sous contrôle d'un attaquant, utilisé pour lancer des attaques à grande échelle comme les DDoS",
        "Un système de détection d'intrusions",
        "Un protocole de communication chiffré"
      ],
      correct: [1],
      explanation: "Un bot est un logiciel qui exécute des tâches automatisées. Utilisés à des fins malveillantes, les bots forment un botnet (réseau de bots) pour lancer des attaques à grande échelle comme les attaques DDoS."
    }
  ],
  flashcards: [
    { term: "Malware", def: "Tout type de logiciel malveillant conçu pour causer des dommages à un ordinateur, un serveur ou un réseau. Catégories : virus, ver, trojan, ransomware, spyware, rootkit, botnet." },
    { term: "Phishing", def: "Attaque d'ingénierie sociale où l'attaquant se fait passer pour un contact de confiance via email frauduleux pour obtenir des identifiants ou installer des malwares." },
    { term: "DDoS", def: "Distributed Denial of Service — utilise un réseau d'ordinateurs (botnet) pour rendre un service indisponible en le surchargeant de requêtes." },
    { term: "Ransomware", def: "Malware qui chiffre ou vole vos données et demande une rançon pour les restituer. Exemple : WannaCry." },
    { term: "Man-in-the-Middle (MiTM)", def: "Attaque où l'attaquant s'intercale entre deux parties communicantes pour espionner ou modifier les échanges." },
    { term: "Injection SQL", def: "Vulnérabilité web permettant d'injecter des requêtes SQL malveillantes dans l'application pour accéder ou manipuler la base de données." },
    { term: "Cheval de Troie", def: "Logiciel malveillant déguisé en programme légitime. Ouvre une backdoor donnant le contrôle de la machine à l'attaquant." },
    { term: "Smishing / Vishing", def: "Smishing = phishing par SMS. Vishing = phishing vocal (appels téléphoniques). Nouvelles attaques d'ingénierie sociale amplifiées par l'IA." }
  ]
};
