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
    },
    {
      type: "single",
      text: "Quelle est la différence entre CI (Intégration Continue) et CD (Déploiement Continu) ?",
      options: [
        "CI et CD sont identiques, seul le nom diffère",
        "CI automatise le build et les tests jusqu'à la production d'un artefact, CD automatise le déploiement de cet artefact en environnement de staging ou production",
        "CI se fait manuellement, CD est automatisé",
        "CD s'occupe du code source, CI gère l'infrastructure"
      ],
      correct: [1],
      explanation: "CI (Intégration Continue) : automatise le build, les tests et l'analyse qualité → produit un artefact. CD (Déploiement Continu / Livraison Continue) : automatise le déploiement de l'artefact en staging ou production. CI vient avant CD dans le pipeline."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un Nexus Repository ou Artifactory dans le pipeline CI/CD ?",
      options: [
        "Un outil de monitoring des applications en production",
        "Un gestionnaire de dépôts d'artefacts qui stocke et distribue les artefacts construits par le pipeline CI",
        "Un outil de gestion du code source",
        "Un scanner de sécurité pour les images Docker"
      ],
      correct: [1],
      explanation: "Nexus Repository (Sonatype) et JFrog Artifactory sont des gestionnaires de dépôts d'artefacts. Ils stockent les artefacts produits par le pipeline CI (JAR, images Docker, packages npm...) et les rendent disponibles pour le déploiement. Ils servent aussi de proxy pour les dépendances externes."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'Pipeline as Code' dans le contexte CI/CD ?",
      options: [
        "Écrire du code directement dans le pipeline CI sans versionner",
        "Décrire le pipeline CI/CD dans un fichier versionné (Jenkinsfile, .gitlab-ci.yml) commité dans le dépôt Git avec le code de l'application",
        "Générer automatiquement du code source via le pipeline",
        "Un langage de programmation dédié à Jenkins"
      ],
      correct: [1],
      explanation: "Le 'Pipeline as Code' consiste à décrire le pipeline CI/CD dans un fichier texte versionné avec le code source (ex: Jenkinsfile pour Jenkins, .gitlab-ci.yml pour GitLab CI). Avantages : versionnement, revue de code, reproductibilité, traçabilité des modifications du pipeline."
    },
    {
      type: "single",
      text: "Qu'est-ce que le taux de couverture de code (code coverage) dans les tests CI ?",
      options: [
        "Le pourcentage de développeurs qui ont revu le code",
        "Le pourcentage des lignes ou branches de code source exécutées lors des tests automatisés",
        "La proportion du code déployé en production par rapport au code total",
        "Le nombre de tests unitaires divisé par le nombre de fonctions"
      ],
      correct: [1],
      explanation: "Le taux de couverture mesure la proportion du code exécutée lors des tests. Un taux de 80% signifie que 80% des lignes sont couvertes par au moins un test. Un Quality Gate typique exige > 80% de couverture. Mesuré par des outils comme JaCoCo (Java), Istanbul (JS), Coverage.py."
    },
    {
      type: "multi",
      text: "Quels sont les types d'analyse inclus dans la phase 'Analyse Qualité' d'un pipeline CI ? (plusieurs réponses)",
      options: [
        "SAST — analyse statique de sécurité du code source",
        "SCA — analyse de la composition logicielle (dépendances tierces)",
        "Détection de secrets (mots de passe, clés API dans le code)",
        "Tests de charge et de performance en production"
      ],
      correct: [0, 1, 2],
      explanation: "La phase d'analyse qualité CI inclut : SAST (vulnérabilités dans votre code), SCA (vulnérabilités dans les dépendances), Secret Detection (mots de passe exposés). Les tests de charge sont plutôt réalisés en staging/pré-production, pas dans la phase CI standard."
    },
    {
      type: "single",
      text: "Que se passe-t-il lorsqu'un Quality Gate échoue dans un pipeline CI ?",
      options: [
        "Le pipeline continue malgré l'échec et avertit uniquement par email",
        "Le pipeline est bloqué, aucun artefact n'est produit et le déploiement est empêché",
        "Le code est automatiquement corrigé par l'outil d'analyse",
        "Le pipeline redémarre automatiquement jusqu'à 3 fois"
      ],
      correct: [1],
      explanation: "Quand un Quality Gate échoue (ex: couverture < 80%, vulnérabilité critique détectée), le pipeline est bloqué immédiatement. Aucun artefact n'est produit et le déploiement est empêché. Le développeur doit corriger le problème et recommiter."
    },
    {
      type: "single",
      text: "À quoi sert un Webhook combiné à Ngrok dans un pipeline Jenkins local ?",
      options: [
        "Le Webhook chiffre les artefacts Jenkins, Ngrok les signe numériquement",
        "Le Webhook déclenche automatiquement le build Jenkins quand un événement GitHub se produit ; Ngrok crée un tunnel HTTPS pour rendre le serveur Jenkins local accessible depuis Internet",
        "Ngrok remplace Jenkins comme outil CI, le Webhook notifie les développeurs par email",
        "Le Webhook synchronise les branches Git, Ngrok gère les conflits de merge automatiquement"
      ],
      correct: [1],
      explanation: "Webhook = mécanisme qui déclenche une action sur un serveur quand un événement se produit ailleurs (ex: push GitHub → déclenche le build Jenkins). Problème : GitHub doit atteindre le serveur Jenkins local. Ngrok crée un tunnel HTTPS vers le serveur local pour le rendre accessible depuis Internet. Ensemble : push GitHub → Webhook → Ngrok tunnel → Jenkins build automatique."
    },
    {
      type: "single",
      text: "Quelle est la différence technique entre SAST et DAST dans l'analyse de sécurité CI/CD ?",
      options: [
        "SAST analyse les dépendances tierces, DAST analyse le code source",
        "SAST analyse le code source statiquement (sans l'exécuter), DAST teste les vulnérabilités sur l'application en cours d'exécution",
        "SAST est exécuté en production, DAST est exécuté dans le pipeline CI",
        "SAST détecte les secrets (mots de passe), DAST détecte les injections SQL"
      ],
      correct: [1],
      explanation: "SAST (Static Application Security Testing) : analyse le code SOURCE sans l'exécuter → détecte injections SQL, XSS, buffer overflow. Réalisé dans le pipeline CI (phase build/analyse). DAST (Dynamic Application Security Testing) : teste les vulnérabilités sur l'APPLICATION EN COURS D'EXÉCUTION en pré-production → simule des attaques réelles. DAST requiert l'application déployée."
    },
    {
      type: "single",
      text: "Quelle est la différence technique entre Continuous Delivery et Continuous Deployment ?",
      options: [
        "Continuous Delivery déploie en staging automatiquement + validation manuelle requise avant prod ; Continuous Deployment déploie automatiquement jusqu'en production sans intervention humaine",
        "Continuous Delivery est identique à CI, Continuous Deployment ajoute uniquement les tests de performance",
        "Continuous Delivery n'automatise que le build, Continuous Deployment automatise aussi les tests",
        "Continuous Deployment nécessite une approbation manuelle, Continuous Delivery est entièrement automatique"
      ],
      correct: [0],
      explanation: "Continuous Delivery : déploiement automatique en staging/pré-production + tests supplémentaires, MAIS l'approbation humaine (PO, Lead tech) est requise avant le déploiement en production. Continuous Deployment : pipeline entièrement automatisé jusqu'en production sans intervention humaine. Continuous Deployment = niveau supérieur d'automatisation."
    },
    {
      type: "single",
      text: "Dans la phase de Conformité (Compliance) du pipeline CI, quelle obligation légale impose la licence GPL sur votre code ?",
      options: [
        "Payer des royalties au titulaire de la licence GPL",
        "Rendre obligatoirement votre code source open source si vous utilisez une bibliothèque sous licence GPL",
        "Interdire l'utilisation de la bibliothèque en environnement commercial",
        "Chiffrer toutes les communications réseau de l'application"
      ],
      correct: [1],
      explanation: "La licence GPL (GNU General Public License) est 'copyleft' : si votre logiciel utilise une bibliothèque GPL, votre code doit également être distribué sous GPL (open source). C'est pourquoi le pipeline CI vérifie les licences via SCA : une bibliothèque GPL non détectée peut forcer une entreprise à publier son code propriétaire."
    },
    {
      type: "multi",
      text: "Quels standards de conformité sont vérifiés dans la phase Compliance du pipeline CI ? (plusieurs réponses)",
      options: [
        "ISO 27001 — norme internationale de sécurité de l'information",
        "PCI-DSS — standard de sécurité des données de paiement par carte",
        "RGPD (GDPR) — protection des données personnelles des utilisateurs",
        "IEEE 802.11 — standard de communication Wi-Fi sans fil"
      ],
      correct: [0, 1, 2],
      explanation: "Les standards de conformité vérifiés en CI : ISO 27001 (sécurité de l'information), PCI-DSS (Payment Card Industry Data Security Standard — sécurité des paiements), RGPD (protéger les données personnelles). IEEE 802.11 est un standard réseau Wi-Fi, pas un standard de conformité logicielle."
    },
    {
      type: "single",
      text: "Dans quel langage est écrit un Jenkinsfile, et quelle structure principale organise les phases du pipeline ?",
      options: [
        "Python, organisé en classes et méthodes",
        "YAML, organisé en stages et steps identiques à GitLab CI",
        "Groovy (DSL), organisé en stages représentant chaque phase (checkout, test, build, déploiement)",
        "JSON, organisé en jobs parallèles et séquentiels"
      ],
      correct: [2],
      explanation: "Le Jenkinsfile est écrit en Groovy (DSL — Domain Specific Language). Structure typique : stage('Checkout') → récupère le code depuis Git ; stage('Install') → npm install ; stage('Test') → npm test ; stage('Build') → packaging. Chaque stage représente une phase du pipeline CI/CD exécutée automatiquement."
    },
    {
      type: "single",
      text: "Pourquoi un artefact CI peut-il être signé numériquement avant d'être stocké dans le dépôt d'artefacts ?",
      options: [
        "Pour chiffrer le contenu de l'artefact et empêcher toute lecture non autorisée",
        "Pour garantir l'intégrité et l'authenticité de l'artefact : prouver qu'il n'a pas été modifié après sa création par le pipeline",
        "Pour compresser l'artefact et réduire l'espace de stockage dans Nexus/Artifactory",
        "Pour décrire les métadonnées de l'artefact (version, date, auteur) dans un format standardisé"
      ],
      correct: [1],
      explanation: "La signature numérique d'un artefact CI garantit son intégrité (l'artefact n'a pas été altéré après création) et son authenticité (il provient bien du pipeline CI officiel). Si un attaquant modifie l'artefact dans le dépôt, la signature devient invalide. Différent du chiffrement : la signature ne cache pas le contenu, elle certifie son origine."
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
    { term: "4 niveaux de tests CI", def: "1) Tests Unitaires (chaque fonction/méthode isolément) ; 2) Tests d'Intégration (interaction entre modules) ; 3) Tests Fonctionnels (respect des besoins métier) ; 4) Tests de Régression (vérifier que les nouveaux commits ne cassent pas l'existant)." },
    { term: "CI vs CD", def: "CI (Intégration Continue) : commit → build automatique → tests → analyse qualité → artefact. CD (Continuous Delivery) : déploiement automatique en staging + validation manuelle avant prod. Continuous Deployment : déploiement automatique complet jusqu'en prod sans intervention humaine." },
    { term: "Pipeline as Code (Jenkinsfile / .gitlab-ci.yml)", def: "Description du pipeline CI/CD dans un fichier versionné avec le code source. Jenkinsfile : pipeline Jenkins en syntaxe Groovy DSL. .gitlab-ci.yml : pipeline GitLab CI en YAML. Avantages : versionnable, reviewable, reproductible, auditable." },
    { term: "Nexus / Artifactory (Artifact Repository)", def: "Gestionnaire de dépôts d'artefacts. Stocke les livrables du pipeline CI (JAR, WAR, images Docker, npm packages...). Sert aussi de proxy cache pour les dépendances externes (Maven Central, npm registry). Nexus = Sonatype, Artifactory = JFrog." },
    { term: "Code Coverage (Couverture de code)", def: "% du code source exécuté lors des tests automatisés. Quality Gate typique : > 80%. Outils : JaCoCo (Java), Istanbul/NYC (JavaScript), Coverage.py (Python). Un faible taux signale des zones non testées = risque de bugs non détectés." },
    { term: "GitLab CI", def: "Système CI/CD intégré nativement à GitLab. Pipeline défini dans .gitlab-ci.yml (YAML). Concepts : stages (séquence), jobs (tâches parallèles dans un stage), runners (agents d'exécution). Avantage : tout-en-un (VCS + CI/CD + registre Docker + sécurité)." }
  ]
};
