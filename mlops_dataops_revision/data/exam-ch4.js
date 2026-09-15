window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch4 = {
  chapter: 4,
  title: `TD-TP 4 : Reproductibilité et Cycle de vie des modèles`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch4-qcm-01", q:`La reproductibilité d'un projet ML concerne principalement :`, choices:[`uniquement les performances du modèle`,`uniquement le code source`,`le code, les données, les dépendances, les configurations et les artefacts`,`uniquement le dataset final`], answer:2, correction:`c — reproductibilité systémique, plusieurs dimensions couplées.` },
    { id:"e-ch4-qcm-02", q:`Le suivi des expériences permet principalement :`, choices:[`de remplacer complètement les tests`,`de conserver les hyperparamètres, métriques et artefacts d'un run`,`de supprimer le besoin de versionner le code`,`d'améliorer automatiquement les performances`], answer:1, correction:`b — le tracking conserve les métadonnées d'un run.` },
    { id:"e-ch4-qcm-03", q:`Le versionnement des modèles est utile pour :`, choices:[`éviter l'évaluation`,`comparer plusieurs itérations et permettre un retour arrière`,`supprimer la nécessité d'un registry`,`remplacer le monitoring`], answer:1, correction:`b — comparaison des versions + rollback.` },
    { id:"e-ch4-qcm-04", q:`Un model registry sert à :`, choices:[`stocker des dashboards BI`,`gérer les jeux de données bruts uniquement`,`enregistrer, versionner et gouverner les modèles`,`entraîner automatiquement tous les modèles`], answer:2, correction:`c — enregistrement + versionnement + gouvernance des modèles.` },
    { id:"e-ch4-qcm-05", q:`Le packaging d'un projet ML vise notamment à :`, choices:[`rendre le projet plus difficile à modifier`,`empêcher toute réutilisation`,`encapsuler le projet ou le modèle dans une forme exécutable et réutilisable`,`remplacer les pipelines`], answer:2, correction:`c — encapsulation exécutable et réutilisable.` },
    { id:"e-ch4-qcm-06", q:`Le lien entre reproductibilité et auditabilité signifie que :`, choices:[`un modèle auditable n'a pas besoin de versionnement`,`un audit sérieux exige des traces sur la construction et l'évaluation du modèle`,`la reproductibilité remplace les exigences réglementaires`,`l'auditabilité concerne uniquement les bases de données`], answer:1, correction:`b — un audit exige des traces de construction/évaluation.` },
    { id:"e-ch4-qcm-07", q:`Dans un pipeline ML reproductible, quelle étape doit être explicitement tracée ?`, choices:[`uniquement l'entraînement`,`uniquement le déploiement`,`les entrées, transformations, paramètres, artefacts et résultats`,`uniquement la métrique finale`], answer:2, correction:`c — traçabilité de bout en bout du pipeline.` },
    { id:"e-ch4-qcm-08", q:`L'approche « build once, run many » renforce principalement :`, choices:[`l'ambiguïté des environnements`,`la portabilité et la stabilité d'exécution`,`la dépendance au poste local`,`la suppression du packaging`], answer:1, correction:`b — portabilité et stabilité d'exécution.` }
  ],
  questions: [
    { id:"e-ch4-q-01", q:`Définir la reproductibilité en contexte MLOps.`, correction:`Capacité à reconstruire/rejouer un workflow ML dans des conditions définies (éléments identifiés, versionnés, documentés) → résultats cohérents, comparables, explicables.` },
    { id:"e-ch4-q-02", q:`Pourquoi un bon score de modèle ne suffit-il pas dans un projet industriel ?`, correction:`Score sans contexte (code, données, env) = non rejouable, non comparable, non auditable. Performance seule ≠ confiance durable.` },
    { id:"e-ch4-q-03", q:`Quelles différences faites-vous entre versionnement du code, versionnement des données et versionnement des modèles ?`, correction:`Code → Git/commits. Données → source, snapshot, schéma, transformations. Modèles → artefact + contexte de fabrication = version gouvernable.` },
    { id:"e-ch4-q-04", q:`En quoi le tracking des expériences améliore-t-il la collaboration ?`, correction:`Mémoire partagée des runs → comparaison objective, moins d'erreurs répétées, choix justifiables, connaissance transférable.` },
    { id:"e-ch4-q-05", q:`Quel est le rôle d'un registry dans la gestion du cycle de vie ?`, correction:`Centralise/gouverne les versions retenues, gère statuts et promotions, source de vérité pour rollback et audit.` },
    { id:"e-ch4-q-06", q:`Pourquoi le packaging est-il une étape intermédiaire importante avant le déploiement ?`, correction:`Transforme le projet local en composant stable/portable (deps standardisées, point d'entrée clair) → prépare CI/CD.` },
    { id:"e-ch4-q-07", q:`En quoi la reproductibilité prépare-t-elle la CI/CD ML ?`, correction:`Pipeline modulaire + dépendances explicites + étapes testables isolément → automatisable en CI/CD.` },
    { id:"e-ch4-q-08", q:`Pourquoi la traçabilité est-elle importante en cas d'incident en production ?`, correction:`Retrouver rapidement version code/données/run à l'origine → diagnostic rapide, rollback ciblé.` }
  ],
  vocab: [
    { id:"e-ch4-v-01", term:`Reproductibilité`, correction:`Capacité à reconstruire/rejouer un workflow ML dans des conditions définies (éléments versionnés, documentés) → résultats cohérents, comparables, explicables.` },
    { id:"e-ch4-v-02", term:`Traçabilité des expériences`, correction:`Capacité à conserver/relier les métadonnées d'un run (code, données, paramètres, métriques, artefacts) → expérience comparable, rejouable, explicable.` },
    { id:"e-ch4-v-03", term:`Dataset version`, correction:`État identifié d'un dataset à un instant donné : source, date/snapshot, schéma, transformations, filtre, usage.` },
    { id:"e-ch4-v-04", term:`Model version`, correction:`Artefact technique (model.pkl) + contexte de fabrication (dataset, code, paramètres, métriques, statut) = version gouvernable.` },
    { id:"e-ch4-v-05", term:`Model registry`, correction:`Composant centralisé pour enregistrer, versionner, documenter et gouverner les modèles tout au long du cycle de vie.` },
    { id:"e-ch4-v-06", term:`Packaging`, correction:`Encapsuler un projet/modèle/service ML dans une forme organisée, stable, réutilisable — facilite exécution, partage, déploiement.` },
    { id:"e-ch4-v-07", term:`Pipeline ML`, correction:`Chaîne structurée d'étapes (entrées/sorties/paramètres/artefacts identifiés) → exécution répétable, traçable, contrôlée.` },
    { id:"e-ch4-v-08", term:`Auditabilité`, correction:`Capacité à répondre : quel modèle ? quelle version en prod ? quelles données ? quels paramètres ? quel run ? pourquoi retenu ?` },
    { id:"e-ch4-v-09", term:`Artefact ML`, correction:`Objet concret produit/utilisé/conservé dans un pipeline (model.pkl, metrics.json, config.yaml, image Docker).` },
    { id:"e-ch4-v-10", term:`Cycle de vie du modèle`, correction:`Suite des statuts d'un modèle : Experimental → Candidate → Staging → Production → Archived.` }
  ],
  analysis: [
    { id:"e-ch4-a-01", scenario:`Un étudiant affirme : « Si le code est sur Git, alors le projet est reproductible. »`, question:`Discutez cette affirmation.`, correction:`Faux (partiellement) : Git versionne le code mais pas les données, l'environnement, les hyperparamètres ni les artefacts → condition nécessaire, pas suffisante.` },
    { id:"e-ch4-a-02", scenario:`Un modèle est partagé sous la forme d'un unique fichier model.pkl, sans autre document.`, question:`Expliquez pourquoi un fichier modèle seul n'est pas suffisant pour garantir la reproductibilité.`, correction:`Fichier seul = artefact sans contexte de fabrication (dataset, code, paramètres, métriques, statut) → pas de version gouvernable, pas de traçabilité ni comparaison possible.` },
    { id:"e-ch4-a-03", scenario:`Une équipe hésite entre garder son travail dans un notebook exploratoire ou le restructurer en pipeline.`, question:`Comparez un notebook exploratoire et un pipeline reproductible sous l'angle de l'ingénierie.`, correction:`Notebook : exécution manuelle, dépendances implicites, difficile à tester/relire/reprendre. Pipeline : modulaire, étapes testables isolément, rejouable, traçable, prêt pour CI/CD.` },
    { id:"e-ch4-a-04", scenario:`Le dataset d'un projet a été modifié plusieurs fois sans archive claire.`, question:`Analysez le lien entre versionnement des données et qualité des résultats.`, correction:`Sans versionnement : entraînement non rejouable, comparaison de modèles faussée, confusion sur l'origine des gains, diagnostic de régression impossible, audit limité.` },
    { id:"e-ch4-a-05", scenario:`Un projet ML dispose d'un dossier structuré (data/, configs/, src/, models/, reports/, Dockerfile).`, question:`Montrez en quoi le packaging participe déjà à la préparation au déploiement.`, correction:`Dépendances standardisées (requirements.txt), point d'entrée explicite, image Docker/API → réduit la dépendance au poste local, facilite CI/CD et transfert entre environnements.` }
  ],
  case: {
    title: `Mini étude de cas — modèle de churn non reproductible`,
    context: `Une équipe de data science a développé un modèle de classification pour prédire le churn client. Après plusieurs semaines, le meilleur modèle est annoncé. Cependant : le dataset a été modifié plusieurs fois sans archive claire ; les hyperparamètres finaux ne sont pas documentés ; le modèle est sauvegardé sous le nom final_model_v2_really_final.pkl ; les dépendances sont installées manuellement sur un poste local ; aucun registre n'est utilisé ; le score annoncé ne peut pas être reproduit par un autre membre de l'équipe.`,
    tasks: [
      { id:"e-ch4-c-01", prompt:`1. Identifiez au moins cinq problèmes MLOps présents dans ce cas.`, correction:`Dataset modifié sans archive (pas de versionnement données) ; hyperparamètres non documentés ; nommage ambigu du modèle ; dépendances installées manuellement (pas d'environnement géré) ; absence de registry ; score non reproductible (pas de tracking de run).` },
      { id:"e-ch4-c-02", prompt:`2. Classez ces problèmes selon les dimensions suivantes : code, données, dépendances, modèles, résultats.`, correction:`Code : pas de pipeline/tracking. Données : dataset modifié sans archive. Dépendances : installation manuelle non versionnée. Modèles : nommage ambigu, pas de registry/statut. Résultats : score non reproductible, run non documenté.` },
      { id:"e-ch4-c-03", prompt:`3. Proposez une stratégie d'amélioration en cinq étapes.`, correction:`1) Versionner les données (snapshot daté) ; 2) versionner le code (Git) + configs externalisées ; 3) tracker chaque run (params, métriques, artefacts) ; 4) enregistrer le modèle dans un registry avec statut ; 5) packager (requirements.txt/Dockerfile) pour un déploiement reproductible.` },
      { id:"e-ch4-c-04", prompt:`4. Expliquez quel serait le rôle d'un pipeline et d'un registry dans ce contexte.`, correction:`Pipeline : structure et trace chaque étape (chargement→...→sérialisation), garantit la rejouabilité. Registry : centralise versions/statuts/métadonnées, permet comparaison, rollback et audit.` },
      { id:"e-ch4-c-05", prompt:`5. Indiquez les éléments minimaux à enregistrer pour rendre le projet auditable.`, correction:`Version du code (commit), version/snapshot du dataset, hyperparamètres, métriques d'évaluation, artefact modèle versionné, run_id + auteur + date, statut du modèle dans le registry.` }
    ],
    deliverables: [
      `Fiche de run documentée (code, données, paramètres, métriques, artefact)`,
      `Dataset versionné avec snapshot daté`,
      `Modèle enregistré dans un registry avec statut explicite`,
      `Structure de projet packagée (requirements.txt / Dockerfile)`,
      `Stratégie d'amélioration en cinq étapes`
    ]
  }
};
