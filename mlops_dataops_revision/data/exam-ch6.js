/* Chapter 6 — Monitoring, observabilité, gouvernance & LLMOps : exam pack (TD6). */
window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch6 = {
  chapter: 6,
  title: `TD6 : Monitoring, observabilité, gouvernance et ouverture LLMOps`,
  timeMinutes: 90,

  qcm: [
    { id:"e-ch6-qcm-01", q:`Le monitoring sert principalement à :`, choices:[`entraîner un modèle plus rapidement`,`détecter si un système sort d'un comportement attendu`,`remplacer la gouvernance des données`,`supprimer les logs`], answer:1, correction:`b — détecter un comportement anormal (hors attendu)` },
    { id:"e-ch6-qcm-02", q:`L'observabilité permet surtout de :`, choices:[`comprendre pourquoi un problème se produit`,`uniquement visualiser des dashboards`,`supprimer les tests de qualité`,`augmenter automatiquement l'accuracy`], answer:0, correction:`a — comprendre pourquoi (diagnostic)` },
    { id:"e-ch6-qcm-03", q:`Parmi les éléments suivants, lequel est une métrique ?`, choices:[`"Erreur de connexion à la base"`,`CPU utilisé à 82 %`,`message texte d'un log`,`description d'un dataset`], answer:1, correction:`b — CPU à 82 % = mesure quantitative` },
    { id:"e-ch6-qcm-04", q:`Le data drift correspond à :`, choices:[`une baisse du nombre de serveurs`,`un changement de distribution des données d'entrée`,`une erreur de syntaxe Python`,`une suppression volontaire du modèle`], answer:1, correction:`b — changement de distribution des entrées (X)` },
    { id:"e-ch6-qcm-05", q:`Le concept drift signifie que :`, choices:[`les logs sont trop nombreux`,`la relation entre les variables d'entrée et la cible change`,`le schéma de la base est identique`,`Grafana ne reçoit plus de métriques`], answer:1, correction:`b — relation X↔y qui change` },
    { id:"e-ch6-qcm-06", q:`OpenLineage est principalement utilisé pour :`, choices:[`entraîner des réseaux de neurones`,`tracer le parcours des données et des jobs`,`créer des conteneurs Docker`,`optimiser les hyperparamètres`], answer:1, correction:`b — traçabilité des données/jobs (lineage)` },
    { id:"e-ch6-qcm-07", q:`Dans une logique FinOps, on cherche à suivre :`, choices:[`uniquement l'accuracy`,`uniquement les logs applicatifs`,`les coûts liés aux ressources et à la valeur produite`,`uniquement les notebooks`], answer:2, correction:`c — coûts ressources vs valeur produite` },
    { id:"e-ch6-qcm-08", q:`Dans un système RAG, un indicateur important est :`, choices:[`le nombre de ports ouverts`,`le nombre de documents récupérés et leur pertinence`,`la couleur du dashboard`,`le nom du fichier Dockerfile`], answer:1, correction:`b — nb documents récupérés + pertinence` },
  ],

  questions: [
    { id:"e-ch6-q-01", q:`Expliquez la différence entre monitoring et observabilité.`, correction:`Monitoring = détecter (indicateurs prédéfinis) — "ça va ?". Observabilité = comprendre (logs/traces/lineage) — "pourquoi ça ne va pas ?".` },
    { id:"e-ch6-q-02", q:`Donnez trois exemples de logs utiles dans une API de prédiction.`, correction:`Requête reçue (timestamp/request_id) ; version du modèle ; erreur de connexion à un service/base.` },
    { id:"e-ch6-q-03", q:`Donnez quatre métriques utiles pour surveiller un pipeline de données.`, correction:`Taux de succès ; âge dernière donnée (fraîcheur) ; nombre de lignes (volume) ; taux de nulls (qualité).` },
    { id:"e-ch6-q-04", q:`Expliquez pourquoi un modèle peut devenir obsolète même si son code n'a pas changé.`, correction:`Data drift + concept drift : le monde change, pas le code → performance dégradée sans erreur technique.` },
    { id:"e-ch6-q-05", q:`Pourquoi les labels réels ne sont-ils pas toujours disponibles immédiatement ?`, correction:`Vérité terrain dépend d'un délai métier (churn = semaines, crédit = mois, maintenance = incident futur) → signaux indirects en attendant.` },
    { id:"e-ch6-q-06", q:`Pourquoi la gouvernance est-elle importante dans un système ML ?`, correction:`Transforme la fiabilité en responsabilité organisationnelle : ownership, accès, conformité, audit, validation avant prod.` },
    { id:"e-ch6-q-07", q:`Donnez deux exemples de coûts à surveiller dans un système ML en production.`, correction:`Coût d'inférence/par prédiction ; coût des ressources cloud (calcul, stockage, pipeline).` },
    { id:"e-ch6-q-08", q:`Donnez trois risques propres aux systèmes LLM.`, correction:`Prompt injection ; hallucinations ; fuite d'informations sensibles.` },
  ],

  vocab: [
    { id:"e-ch6-v-01", term:`monitoring`, correction:`Surveillance continue via métriques/logs/traces pour détecter les anomalies.` },
    { id:"e-ch6-v-02", term:`observabilité`, correction:`Capacité à comprendre l'état interne d'un système à partir de ses signaux (pourquoi).` },
    { id:"e-ch6-v-03", term:`logging`, correction:`Enregistrement des événements importants (app, pipeline, modèle).` },
    { id:"e-ch6-v-04", term:`métrique`, correction:`Mesure quantitative collectée régulièrement (CPU, latence, volume...).` },
    { id:"e-ch6-v-05", term:`alerte`, correction:`Notification déclenchée quand un seuil est dépassé / comportement anormal ; doit être actionnable.` },
    { id:"e-ch6-v-06", term:`data drift`, correction:`Changement de distribution des données d'entrée (X).` },
    { id:"e-ch6-v-07", term:`prediction drift`, correction:`Changement de distribution des prédictions du modèle (ŷ).` },
    { id:"e-ch6-v-08", term:`concept drift`, correction:`Changement de la relation entre variables d'entrée et cible (X↔y).` },
    { id:"e-ch6-v-09", term:`metadata`, correction:`Données qui décrivent d'autres données (structure, sens, source, responsable).` },
    { id:"e-ch6-v-10", term:`data lineage`, correction:`Traçabilité du parcours d'une donnée, de la source aux usages finaux.` },
    { id:"e-ch6-v-11", term:`gouvernance des données`, correction:`Règles, rôles, responsabilités et pilotage de l'usage des données/modèles.` },
    { id:"e-ch6-v-12", term:`LLMOps`, correction:`Application des principes MLOps aux systèmes fondés sur des LLM (prompts, RAG, hallucinations...).` },
  ],

  analysis: [
    { id:"e-ch6-a-01",
      scenario:`Classer les éléments suivants dans les catégories : log, métrique, alerte, trace, métadonnée.
- "Pipeline sales_daily terminé avec succès"
- Latence moyenne API = 240 ms
- Taux d'erreur supérieur à 5 % pendant 10 minutes
- Chemin complet d'une requête API entre gateway, service ML et base
- Propriétaire du dataset : équipe Finance
- Nombre de lignes ingérées aujourd'hui : 98 450
- "Échec de connexion à PostgreSQL"
- Dataset marqué comme contenant des données personnelles
- Notification envoyée à l'équipe DataOps après échec de pipeline`,
      question:`Classez ces éléments par type de signal (log, métrique, alerte, trace, métadonnée).`,
      correction:`- "Pipeline sales_daily terminé avec succès" → Log
- Latence moyenne API = 240 ms → Métrique
- Taux d'erreur > 5 % pendant 10 min → Alerte
- Chemin complet requête gateway→ML→base → Trace
- Propriétaire du dataset : équipe Finance → Métadonnée
- 98 450 lignes ingérées → Métrique
- "Échec de connexion à PostgreSQL" → Log
- Dataset avec données personnelles → Métadonnée
- Notification à DataOps après échec → Alerte` },
    { id:"e-ch6-a-02",
      scenario:`Un chatbot RAG interne (support technique) commence à donner des réponses de plus en plus longues, parfois incohérentes avec la documentation, et plusieurs utilisateurs signalent des réponses inventées. Le coût en tokens a augmenté de 30 % ce mois-ci.`,
      question:`1. Quel(s) risque(s) LLM sont potentiellement en jeu ?
2. Quelles dimensions du monitoring RAG faut-il vérifier en priorité ?
3. Quels indicateurs concrets ajouter au dashboard ?`,
      correction:`- Risques : hallucinations, instabilité des réponses, coût variable, mauvaise utilisation des documents récupérés
- Dimensions à vérifier : Génération (longueur, hallucination suspectée), Retrieval (pertinence des documents), Coût (tokens)
- Indicateurs : score de similarité du retrieval, taux de réponses sans source, tokens input/output, taux d'escalade humaine` },
    { id:"e-ch6-a-03",
      scenario:`Une équipe data science découvre qu'un dataset RH contenant des données personnelles (salaires, évaluations) est utilisé pour un modèle sans propriétaire documenté, sans mention de sensibilité dans les métadonnées, et accessible à toute l'entreprise.`,
      question:`1. Quels enjeux de sécurité/privacy sont violés ?
2. Quelles métadonnées manquent ?
3. Quels contrôles de gouvernance faut-il mettre en place ?`,
      correction:`- Enjeux violés : confidentialité, protection des données personnelles, traçabilité des accès
- Métadonnées manquantes : propriétaire (owner), sensibilité/confidentialité, règles de qualité
- Contrôles : gestion des rôles, droits d'accès restreints, masquage/pseudonymisation, logs d'accès, classification du dataset` },
  ],

  case: {
    title: `Étude de cas : dérive silencieuse d'un modèle de churn`,
    context: `Une entreprise déploie un modèle de prédiction du churn client. Le modèle avait une AUC de 0,87 lors de l'entraînement. Trois mois après le déploiement, les équipes métiers constatent que les campagnes de rétention deviennent moins efficaces.

Observations disponibles :
- le service API fonctionne normalement
- la latence moyenne est stable
- le taux d'erreur est faible
- la proportion de clients prédits "à risque" a fortement augmenté
- plusieurs variables comportementales ont changé de distribution
- les labels réels de churn arrivent avec un délai de 45 jours
- le coût d'inférence a doublé car le nombre de requêtes a augmenté`,
    tasks: [
      { id:"e-ch6-c-01", prompt:`1. Pourquoi le monitoring technique seul ne suffit-il pas ?`, correction:`API/latence/erreurs OK ≠ modèle fiable : rien ne surveille la performance métier, le drift ou les labels différés.` },
      { id:"e-ch6-c-02", prompt:`2. Quels types de drift peut-on suspecter ?`, correction:`Data drift (variables comportementales) ; prediction drift confirmé (hausse des prédictions "à risque") ; concept drift possible si le comportement client a changé de sens.` },
      { id:"e-ch6-c-03", prompt:`3. Quelles métriques faudrait-il ajouter ?`, correction:`Score de drift sur variables comportementales, distribution des prédictions, métriques business retardées (churn réel à 45j), performance par segment.` },
      { id:"e-ch6-c-04", prompt:`4. Quelle boucle de feedback proposer ?`, correction:`Kaizen : Définir → Mesurer (drift, distribution prédictions) → Détecter (alerte drift) → Analyser (causes) → Corriger (réentraînement) → Redéployer → Capitaliser.` },
      { id:"e-ch6-c-05", prompt:`5. Quels éléments FinOps faut-il surveiller ?`, correction:`Coût d'inférence par prédiction, coût total vs volume de requêtes, valeur produite (efficacité des campagnes) vs coût.` },
      { id:"e-ch6-c-06", prompt:`6. Quels éléments de gouvernance faut-il documenter ?`, correction:`Version du modèle en production, dataset et date du dernier entraînement, propriétaire du modèle, procédure de réentraînement/validation, décision de redéploiement.` },
    ],
    deliverables: [
      `Diagnostic argumenté du/des type(s) de drift suspecté(s)`,
      `Liste des métriques additionnelles à ajouter au dashboard de monitoring`,
      `Schéma de la boucle de feedback (Kaizen) adaptée au cas churn`,
      `Liste des indicateurs FinOps à suivre`,
      `Fiche de gouvernance (propriétaire, version modèle, procédure de réentraînement)`,
    ],
  },
};
