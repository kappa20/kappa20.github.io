// Séance 10 — Intégration Continue (CI)
const SEANCE_10 = {
  id: 10,
  title: "Intégration Continue CI",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce que l'Intégration Continue (CI) ?",
      options: [
        "Une méthode de déploiement manuel en production",
        "Une pratique permettant de produire une nouvelle version du logiciel de façon automatisée à chaque commit",
        "Un système de surveillance des performances en production",
        "Un protocole de communication entre microservices"
      ],
      correct: [1],
      explanation: "L'intégration continue est une pratique qui permet de produire automatiquement une nouvelle version du logiciel. Elle commence lorsque le développeur fait un commit/push et se termine quand un artefact prêt est généré."
    },
    {
      type: "multi",
      text: "Quels sont les 4 rôles fondamentaux de la phase d'analyse de la qualité dans le pipeline CI ? (plusieurs réponses)",
      options: ["Qualité", "Sécurité", "Conformité (Compliance)", "Gouvernance (Quality Gates)", "Performance réseau"],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 rôles fondamentaux de la phase d'analyse sont : Qualité (code smells, duplication), Sécurité (SAST, SCA), Conformité (licences, standards), et Gouvernance (Quality Gates)."
    },
    {
      type: "single",
      text: "Qu'est-ce que le SAST dans le contexte du CI ?",
      options: [
        "Simple Automated System Testing",
        "Static Application Security Testing — analyse statique du code source pour détecter des vulnérabilités",
        "Server Availability Standard Testing",
        "Software Architecture Scalability Test"
      ],
      correct: [1],
      explanation: "SAST (Static Application Security Testing) est une méthode d'analyse statique du code source permettant de détecter des failles de sécurité comme les injections SQL ou XSS."
    },
    {
      type: "multi",
      text: "Parmi ces outils, lesquels sont utilisés pour l'analyse de sécurité (SAST) dans le CI ? (plusieurs réponses)",
      options: ["SonarQube", "Fortify", "Checkmarx", "Jenkins", "Veracode"],
      correct: [0, 1, 2, 4],
      explanation: "SonarQube, Fortify, Checkmarx et Veracode sont des outils SAST. Jenkins est un outil d'automatisation CI/CD, pas un outil d'analyse de sécurité spécifique."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un 'Quality Gate' dans le pipeline CI ?",
      options: [
        "Une porte physique d'accès au datacenter",
        "Un ensemble de critères pour décider si le code sera bloqué ou autorisé à être déployé",
        "Un outil de gestion des versions du code",
        "Un protocole de communication sécurisée entre serveurs"
      ],
      correct: [1],
      explanation: "Un Quality Gate est un ensemble de critères ou seuils définis pour évaluer et décider si le code sera bloqué ou autorisé à être déployé (ex: 'pipeline échoue si complexité > 20')."
    },
    {
      type: "single",
      text: "Le SCA (Software Composition Analysis) permet de :",
      options: [
        "Analyser la performance des serveurs",
        "Identifier les vulnérabilités dans les bibliothèques tierces utilisées",
        "Gérer les licences commerciales des logiciels",
        "Compresser le code source pour réduire sa taille"
      ],
      correct: [1],
      explanation: "Le SCA (Software Composition Analysis) identifie les vulnérabilités dans les bibliothèques tierces utilisées par l'application."
    },
    {
      type: "single",
      text: "Qu'est-ce que la 'complexité cyclomatique' dans l'analyse de la qualité CI ?",
      options: [
        "Le nombre de lignes de code dans un fichier",
        "Le nombre de chemins linéaires indépendants à travers le code source",
        "Le nombre de dépendances externes d'un projet",
        "Le taux de couverture des tests unitaires"
      ],
      correct: [1],
      explanation: "La complexité cyclomatique mesure le nombre de chemins linéaires indépendants à travers le code source. C'est un indicateur de la complexité structurelle du code."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Secret Detection' dans la phase de sécurité CI ?",
      options: [
        "Chiffrer les données sensibles en base de données",
        "Traquer les mots de passe et clés API exposés pour empêcher leur passage dans les commits",
        "Scanner les logs de production pour détecter des intrusions",
        "Analyser les certificats SSL des serveurs"
      ],
      correct: [1],
      explanation: "Le Secret Detection traque les mots de passe et clés API exposés, pour empêcher leur passage dans les commits. Outils : GitGuardian, TruffleHog."
    },
    {
      type: "single",
      text: "Dans la phase de build du pipeline CI, que fait la 'Gestion des dépendances' ?",
      options: [
        "Supprime toutes les bibliothèques non utilisées du système",
        "Télécharge les bibliothèques externes et scanne les dépendances (SCA) pour vérifier l'absence de vulnérabilités",
        "Compile le code source en langage machine",
        "Configure les variables d'environnement de production"
      ],
      correct: [1],
      explanation: "La gestion des dépendances dans le build télécharge les bibliothèques externes (ex: npm install) et effectue une vérification SCA pour s'assurer qu'elles ne contiennent pas de vulnérabilités connues."
    },
    {
      type: "multi",
      text: "Quels types de tests sont exécutés dans l'étape 'Tests' du pipeline CI ? (plusieurs réponses)",
      options: [
        "Tests Unitaires (vérifient chaque fonction individuellement)",
        "Tests d'Intégration (vérifient l'interaction entre modules)",
        "Tests Fonctionnels (vérifient que les fonctionnalités répondent aux besoins métier)",
        "Tests de régression (s'assurent que les nouvelles modifications ne régressent pas)",
        "Tests de charge réseau"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le pipeline CI exécute 4 niveaux de tests automatiques : Tests Unitaires (fonctions/classes), Tests d'Intégration (modules), Tests Fonctionnels (besoins métier), et Tests de régression (non-régression)."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un artefact dans le pipeline CI ?",
      options: [
        "Un rapport d'erreur généré après un test échoué",
        "Un livrable concret regroupant le code compilé, les ressources et les dépendances dans un fichier unique",
        "Un fichier de configuration du pipeline",
        "Un log de surveillance de production"
      ],
      correct: [1],
      explanation: "Un artefact est un livrable concret créé quand tous les tests réussissent et que la qualité est satisfaisante. Il regroupe le code compilé, les ressources et les dépendances. Formes possibles : JAR/WAR/EXE, image Docker, RPM/DEB, bundle zip."
    },
    {
      type: "multi",
      text: "Quelles sont les formes possibles d'un artefact CI ? (plusieurs réponses)",
      options: [
        "Fichier exécutable (JAR, WAR, EXE)",
        "Image Docker",
        "Package d'installation (RPM, DEB)",
        "Bundle de fichiers compressés (zip, tar.gz)",
        "Fichier de log de production"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Un artefact peut prendre 4 formes : 1) fichier exécutable (JAR, WAR, EXE), 2) image Docker, 3) package d'installation (RPM, DEB), 4) bundle compressé (zip, tar.gz). Les logs de production ne sont pas des artefacts CI."
    },
    {
      type: "multi",
      text: "Quels sont les outils CI/CD mentionnés dans le cours ? (plusieurs réponses)",
      options: ["Jenkins", "GitLab CI", "CircleCI", "Azure DevOps", "Ansible"],
      correct: [0, 1, 2, 3],
      explanation: "Les outils CI mentionnés sont : Jenkins (open-source, Java, CI/CD), GitLab CI (intégré à GitLab), CircleCI (plateforme CI/CD DevOps), et Azure DevOps (service complet CI/CD). Ansible est un outil IaC, pas CI/CD."
    },
    {
      type: "single",
      text: "Qu'est-ce que Jenkins ?",
      options: [
        "Un système de gestion de versions distribué",
        "Une plateforme open-source écrite en Java d'automatisation de l'intégration continue et du déploiement continu",
        "Un outil de monitoring des applications en production",
        "Un service cloud de stockage d'artefacts"
      ],
      correct: [1],
      explanation: "Jenkins est une plateforme open-source écrite en Java d'automatisation de l'intégration continue (CI) et du déploiement continu (CD). Elle permet de construire, tester et déployer automatiquement le code."
    },
    {
      type: "single",
      text: "Quels sont les deux composants principaux de l'architecture Jenkins ?",
      options: [
        "Jenkins Builder et Jenkins Tester",
        "Jenkins Master (Controller) et Jenkins Agents (Nodes)",
        "Jenkins Server et Jenkins Client",
        "Jenkins Pipeline et Jenkins Repository"
      ],
      correct: [1],
      explanation: "L'architecture Jenkins comprend deux composants : le Jenkins Master (ou Controller) qui orchestre les tâches et gère l'interface web, et les Jenkins Agents (Nodes) qui exécutent les tâches (jobs) assignées par le master."
    }
  ],
  flashcards: [
    { term: "CI (Intégration Continue)", def: "Pratique DevOps : les développeurs intègrent leur code fréquemment dans un dépôt partagé. Chaque commit/push déclenche automatiquement un pipeline : Build → Tests → Analyse Qualité → Artefact. Objectif : détecter les erreurs le plus tôt possible." },
    { term: "Pipeline CI/CD", def: "Chaîne automatisée d'étapes déclenchée à chaque commit : Source (repo Git) → Build (compilation + dépendances) → Test (unitaires, intégration, régression) → Analyse Qualité (SAST, SCA, Quality Gates) → Artefact → (Déploiement CD)." },
    { term: "SAST (Static Application Security Testing)", def: "Analyse du code SOURCE (sans l'exécuter) pour détecter des vulnérabilités (injections SQL, XSS, buffer overflow...). Intégré dans le pipeline CI dès l'étape build. Outils : SonarQube, Checkmarx, Fortify, Veracode." },
    { term: "SCA (Software Composition Analysis)", def: "Analyse des dépendances et bibliothèques tierces pour détecter les vulnérabilités connues (CVE) et problèmes de licence. Distinct du SAST : SAST analyse VOTRE code, SCA analyse les LIBRAIRIES que vous utilisez." },
    { term: "Quality Gates (Portes de Qualité)", def: "Seuils de qualité qui bloquent le pipeline si non respectés. Exemples : complexité cyclomatique < 20, couverture de tests > 80%, 0 vulnérabilité critique. Si un Quality Gate échoue, l'artefact n'est pas produit et le déploiement est bloqué." },
    { term: "Complexité cyclomatique", def: "Nombre de chemins d'exécution indépendants dans un morceau de code. Plus la valeur est haute, plus le code est complexe et difficile à tester. Quality Gate typique : complexité < 20 par fonction." },
    { term: "Secret Detection", def: "Détection de secrets (mots de passe, clés API, tokens) accidentellement inclus dans le code source ou les commits. Empêche leur exposition dans les dépôts Git publics. Outils : GitGuardian, TruffleHog." },
    { term: "Artefact CI", def: "Livrable final du pipeline CI : code compilé + ressources + dépendances packagés. Formes : JAR/WAR (Java), EXE (Windows), image Docker, RPM/DEB (Linux packages), bundle zip. Stocké dans un Artifact Repository (Nexus, Artifactory)." },
    { term: "Jenkins (Master + Agents)", def: "Outil CI/CD open source écrit en Java. Architecture : Jenkins Master (Controller) — orchestre, interface web, planifie les jobs ; Jenkins Agents (Nodes) — exécutent les tâches (build, test, déploiement) assignées par le Master." },
    { term: "SonarQube", def: "Plateforme d'analyse continue de la qualité du code. Détecte : bugs, code smells (odeurs de code), vulnérabilités, duplications, couverture de tests insuffisante. Définit des Quality Gates pour bloquer le pipeline CI si les seuils ne sont pas atteints." },
    { term: "4 niveaux de tests CI", def: "1) Tests Unitaires (chaque fonction/méthode isolément) ; 2) Tests d'Intégration (interaction entre modules) ; 3) Tests Fonctionnels (respect des besoins métier) ; 4) Tests de Régression (vérifier que les nouveaux commits ne cassent pas l'existant)." }
  ]
};
