/* Chapter 5 — CI/CD, conteneurisation et déploiement des services ML : examen blanc (TD5, transcrit). */
window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch5 = {
  chapter: 5,
  title: `TD-TP 5 : CI/CD, conteneurisation et déploiement des services ML`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch5-qcm-01", q:`La continuous integration a pour objectif principal de :`, choices:[`remplacer tous les développeurs`,`vérifier automatiquement les changements intégrés`,`supprimer les tests manuels`,`entraîner automatiquement tous les modèles en production`], answer:1, correction:`b — vérifie automatiquement les changements intégrés` },
    { id:"e-ch5-qcm-02", q:`Dans un projet ML, un pipeline CI peut inclure :`, choices:[`uniquement des métriques de précision`,`uniquement des tests unitaires`,`des tests de code, de dépendances et de service`,`uniquement l'entraînement complet du modèle`], answer:2, correction:`c — tests de code, dépendances et service` },
    { id:"e-ch5-qcm-03", q:`Le packaging permet principalement de :`, choices:[`visualiser les données`,`transformer le composant en artefact installable et versionné`,`supprimer les dépendances`,`remplacer Docker`], answer:1, correction:`b — artefact installable et versionné` },
    { id:"e-ch5-qcm-04", q:`Un conteneur permet surtout de :`, choices:[`stocker des données non structurées`,`normaliser l'exécution d'une application et de ses dépendances`,`remplacer le versionnement Git`,`optimiser automatiquement le modèle`], answer:1, correction:`b — normalise exécution + dépendances` },
    { id:"e-ch5-qcm-05", q:`Le principe "build once, run many" signifie que :`, choices:[`on entraîne un modèle une seule fois`,`on utilise le même artefact construit pour plusieurs environnements`,`on interdit la mise à jour des versions`,`on exécute plusieurs modèles dans un seul conteneur`], answer:1, correction:`b — même artefact pour plusieurs environnements` },
    { id:"e-ch5-qcm-06", q:`Le canary deployment consiste à :`, choices:[`supprimer l'ancienne version avant la nouvelle`,`déployer la nouvelle version sur 100 % du trafic immédiatement`,`exposer progressivement une petite partie du trafic à la nouvelle version`,`exécuter le modèle uniquement en local`], answer:2, correction:`c — expose progressivement une petite part du trafic` },
    { id:"e-ch5-qcm-07", q:`Un service ML batch est surtout adapté lorsque :`, choices:[`une réponse temps réel est indispensable`,`le traitement peut être planifié à intervalles réguliers`,`aucune donnée n'est disponible`,`le modèle doit répondre à chaque clic utilisateur`], answer:1, correction:`b — traitement planifiable à intervalles réguliers` },
    { id:"e-ch5-qcm-08", q:`Parmi les tests suivants, lequel vérifie surtout que le service démarre ?`, choices:[`test de charge`,`smoke test`,`test de fairness`,`test A/B`], answer:1, correction:`b — smoke test = vérifie le démarrage minimal` }
  ],
  questions: [
    { id:"e-ch5-q-01", q:`Définir la continuous integration dans le contexte d'un projet ML.`, correction:`Intégration auto des changements (code/données/modèle) + suite de contrôles (tests, lint, validation) à chaque commit/PR.` },
    { id:"e-ch5-q-02", q:`Expliquer la différence entre CI et CD.`, correction:`CI = valider les changements ; CD = livrer un artefact déployable jusqu'au seuil du déploiement (voire prod).` },
    { id:"e-ch5-q-03", q:`Pourquoi la conteneurisation est-elle particulièrement importante en machine learning ?`, correction:`Fige tout l'environnement (deps, runtime, système) → reproductibilité et portabilité dev/staging/prod.` },
    { id:"e-ch5-q-04", q:`Donner trois différences entre un déploiement batch et un déploiement par API.`, correction:`- Latence : différée vs immédiate
- Déclenchement : planifié vs à la demande
- Disponibilité continue : non requise vs requise` },
    { id:"e-ch5-q-05", q:`Citer quatre étapes d'un pipeline de déploiement.`, correction:`4 parmi : Commit, CI, Package, Image, Registry, Staging, Tests, Prod.` },
    { id:"e-ch5-q-06", q:`Pourquoi les tests de déploiement sont-ils nécessaires même si le modèle fonctionne en notebook ?`, correction:`Notebook ≠ environnement de prod ; tests valident le service réel (démarrage, contrat, charge, sécurité).` },
    { id:"e-ch5-q-07", q:`Expliquer en quoi le packaging contribue à la discipline d'ingénierie.`, correction:`Impose versionnement + dépendances déclarées + structure reproductible → rigueur type génie logiciel.` },
    { id:"e-ch5-q-08", q:`Donner un cas où un déploiement canary serait préférable à un déploiement recreate.`, correction:`MàJ d'un modèle de scoring à fort trafic : détecter une régression tôt sans couper le service pour tous.` }
  ],
  vocab: [
    { id:"e-ch5-v-01", term:`continuous integration`, correction:`Intégration auto des changements dans un dépôt partagé + contrôles (tests, lint, validation) à chaque commit/PR.` },
    { id:"e-ch5-v-02", term:`continuous delivery`, correction:`Chaîne automatisée rendant le système déployable à tout moment (artefact prêt pour la prod).` },
    { id:"e-ch5-v-03", term:`packaging`, correction:`Encapsulation d'un projet/modèle/service en artefact organisé, stable, versionné et installable.` },
    { id:"e-ch5-v-04", term:`conteneurisation`, correction:`Encapsulation d'une appli + dépendances + config d'exécution dans un conteneur, à partir d'une image.` },
    { id:"e-ch5-v-05", term:`service ML`, correction:`Unité applicative exposant une fonctionnalité fondée sur un modèle/pipeline (batch, API, microservice, serverless).` },
    { id:"e-ch5-v-06", term:`microservice`, correction:`Fonctionnalité métier exposée en service autonome, modulaire, déployable indépendamment.` },
    { id:"e-ch5-v-07", term:`pipeline de déploiement`, correction:`Enchaînement automatisé d'un changement validé jusqu'à sa mise à disposition en environnement cible.` },
    { id:"e-ch5-v-08", term:`smoke test`, correction:`Vérifie que le service démarre et répond a minima.` },
    { id:"e-ch5-v-09", term:`canary deployment`, correction:`Expose progressivement une petite part du trafic à la nouvelle version.` },
    { id:"e-ch5-v-10", term:`cloud-native`, correction:`Application conçue nativement pour le cloud : conteneurisée, en microservices, scalable, résiliente.` },
    { id:"e-ch5-v-11", term:`runtime`, correction:`Moteur qui exécute les conteneurs à partir des images (ex : Docker Engine).` },
    { id:"e-ch5-v-12", term:`rollout`, correction:`Stratégie de mise en prod d'une nouvelle version (recreate, rolling update, blue-green, canary, shadow).` }
  ],
  analysis: [
    { id:"e-ch5-a-01", scenario:`Un modèle affiche d'excellentes métriques offline avant sa mise en production.`, question:`Pourquoi un excellent modèle peut-il échouer en production malgré de bonnes performances offline ?`, correction:`Écart train/prod (dérive données, latence, charge, dépendances, intégration service) — bon modèle ≠ bon système en prod.` },
    { id:"e-ch5-a-02", scenario:`Une équipe compare un déploiement manuel à un déploiement automatisé.`, question:`En quoi l'automatisation du déploiement réduit-elle le risque organisationnel ?`, correction:`Supprime la dépendance à une personne, standardise les étapes, trace et rend le rollback fiable.` },
    { id:"e-ch5-a-03", scenario:`Une équipe met en place une CI/CD pour son service de scoring.`, question:`Peut-on mettre en place une CI/CD utile sans réentraîner le modèle à chaque modification ? Justifier.`, correction:`Oui — la CI valide surtout le système (code, contrat, service), pas forcément l'entraînement ; réentraînement = décision séparée.` },
    { id:"e-ch5-a-04", scenario:`Un ingénieur veut "juste copier" un modèle sur le serveur de prod.`, question:`Pourquoi le déploiement d'un modèle doit-il être pensé comme le déploiement d'un service et non comme la simple copie d'un fichier ?`, correction:`Un service a un runtime, des dépendances, une interface, une disponibilité et des tests — copier un fichier ignore tout ça.` },
    { id:"e-ch5-a-05", scenario:`Une organisation industrialise son pipeline de mise en production.`, question:`Quel est le lien entre déploiement industrialisé et observabilité future ?`, correction:`Un déploiement tracé/versionné produit les métadonnées (version, artefact, historique) nécessaires au monitoring/gouvernance (chapitre 6).` }
  ],
  case: {
    title: `Mini étude de cas — Industrialisation d'un modèle de churn`,
    context: `Une entreprise a développé un modèle de prédiction de churn. Actuellement :
- le code est exécuté depuis un notebook ;
- un ingénieur exporte manuellement le modèle ;
- le fichier est copié sur un serveur ;
- les dépendances sont installées manuellement ;
- l'équipe métier consomme les résultats via un script lancé à la demande ;
- aucune stratégie de versioning de déploiement n'est formalisée.`,
    tasks: [
      { id:"e-ch5-c-01", prompt:`1. Identifier au moins six risques techniques ou organisationnels.`, correction:`Erreurs humaines, faible traçabilité, rollback difficile, faible reproductibilité, lenteur, dépendance à une personne (bus factor), pas de tests, pas de versioning.` },
      { id:"e-ch5-c-02", prompt:`2. Proposer une cible d'industrialisation en s'appuyant sur les notions du chapitre.`, correction:`Pipeline CI/CD : Git → CI (tests code/données/modèle) → package/image versionnée → registre → staging → tests → prod, avec supervision continue.` },
      { id:"e-ch5-c-03", prompt:`3. Dire si le service doit être batch, API ou microservice, et justifier.`, correction:`Batch — score hebdomadaire planifié, pas de besoin temps réel ; simple et efficace pour de gros volumes clients.` },
      { id:"e-ch5-c-04", prompt:`4. Proposer une stratégie de rollout adaptée.`, correction:`Rolling update ou blue-green — pas de trafic utilisateur direct en temps réel, mais on veut éviter une interruption du batch et pouvoir revenir en arrière facilement.` },
      { id:"e-ch5-c-05", prompt:`5. Proposer trois tests de déploiement indispensables.`, correction:`Smoke test (démarrage du job), test de contrat (schéma des sorties du score), test fonctionnel d'inférence (score correct sur cas connus).` }
    ],
    deliverables: [
      `Liste d'au moins six risques identifiés`,
      `Schéma de la cible d'industrialisation (pipeline CI/CD)`,
      `Choix justifié de la forme de service (batch/API/microservice)`,
      `Stratégie de rollout retenue et justification`,
      `Liste de trois tests de déploiement indispensables`
    ]
  }
};
