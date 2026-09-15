/* Chapter 6 — Monitoring, observabilité, gouvernance & LLMOps : quiz (TD6 QCM + questions directes). */
window.MDO = window.MDO || {};
window.MDO.quiz = window.MDO.quiz || [];
window.MDO.quiz.push(
  // --- QCM (TD6, Exercice 1 — transcrit verbatim, 8 questions) ---
  { id:"q-ch6-mcq-01", chapter:6, type:"mcq", q:`Le monitoring sert principalement à :`, choices:[`entraîner un modèle plus rapidement`,`détecter si un système sort d'un comportement attendu`,`remplacer la gouvernance des données`,`supprimer les logs`], answer:1, explain:`Le monitoring détecte les écarts par rapport au comportement attendu, à l'aide de métriques, logs et traces.` },
  { id:"q-ch6-mcq-02", chapter:6, type:"mcq", q:`L'observabilité permet surtout de :`, choices:[`comprendre pourquoi un problème se produit`,`uniquement visualiser des dashboards`,`supprimer les tests de qualité`,`augmenter automatiquement l'accuracy`], answer:0, explain:`L'observabilité vise la compréhension et le diagnostic (pourquoi), pas seulement l'affichage de dashboards.` },
  { id:"q-ch6-mcq-03", chapter:6, type:"mcq", q:`Parmi les éléments suivants, lequel est une métrique ?`, choices:[`"Erreur de connexion à la base"`,`CPU utilisé à 82 %`,`message texte d'un log`,`description d'un dataset`], answer:1, explain:`Une métrique est une mesure quantitative collectée régulièrement ; un texte de log ou une description ne sont pas des métriques.` },
  { id:"q-ch6-mcq-04", chapter:6, type:"mcq", q:`Le data drift correspond à :`, choices:[`une baisse du nombre de serveurs`,`un changement de distribution des données d'entrée`,`une erreur de syntaxe Python`,`une suppression volontaire du modèle`], answer:1, explain:`Le data drift porte sur la distribution statistique des variables d'entrée (X).` },
  { id:"q-ch6-mcq-05", chapter:6, type:"mcq", q:`Le concept drift signifie que :`, choices:[`les logs sont trop nombreux`,`la relation entre les variables d'entrée et la cible change`,`le schéma de la base est identique`,`Grafana ne reçoit plus de métriques`], answer:1, explain:`Le concept drift touche la relation X ↔ y : la même donnée n'a plus la même signification.` },
  { id:"q-ch6-mcq-06", chapter:6, type:"mcq", q:`OpenLineage est principalement utilisé pour :`, choices:[`entraîner des réseaux de neurones`,`tracer le parcours des données et des jobs`,`créer des conteneurs Docker`,`optimiser les hyperparamètres`], answer:1, explain:`OpenLineage est un outil de traçabilité (lineage) des datasets, jobs, runs et dépendances.` },
  { id:"q-ch6-mcq-07", chapter:6, type:"mcq", q:`Dans une logique FinOps, on cherche à suivre :`, choices:[`uniquement l'accuracy`,`uniquement les logs applicatifs`,`les coûts liés aux ressources et à la valeur produite`,`uniquement les notebooks`], answer:2, explain:`FinOps = suivre les coûts de ressources (cloud, inférence, tokens) au regard de la valeur produite.` },
  { id:"q-ch6-mcq-08", chapter:6, type:"mcq", q:`Dans un système RAG, un indicateur important est :`, choices:[`le nombre de ports ouverts`,`le nombre de documents récupérés et leur pertinence`,`la couleur du dashboard`,`le nom du fichier Dockerfile`], answer:1, explain:`Dans un RAG, la qualité du retrieval (nombre de documents récupérés, pertinence/score de similarité) est un indicateur clé.` },

  // --- Questions directes (TD6, Exercice 2 — transcrit verbatim, 8 questions) ---
  { id:"q-ch6-open-01", chapter:6, type:"open", q:`Expliquez la différence entre monitoring et observabilité.`, model:`Monitoring = détecter (indicateurs prédéfinis, seuils, alertes) → "est-ce que ça va ?". Observabilité = comprendre (logs, traces, lineage, exploration) → "pourquoi ça ne va pas ?".` },
  { id:"q-ch6-open-02", chapter:6, type:"open", q:`Donnez trois exemples de logs utiles dans une API de prédiction.`, model:`- Requête reçue (timestamp, request_id)
- Version du modèle utilisée
- Erreur/échec de connexion à une base ou un service
(latence et statut de la réponse également utiles)` },
  { id:"q-ch6-open-03", chapter:6, type:"open", q:`Donnez quatre métriques utiles pour surveiller un pipeline de données.`, model:`- Taux de succès (disponibilité)
- Âge de la dernière donnée (fraîcheur)
- Nombre de lignes ingérées (volume)
- Taux de valeurs nulles (qualité)` },
  { id:"q-ch6-open-04", chapter:6, type:"open", q:`Expliquez pourquoi un modèle peut devenir obsolète même si son code n'a pas changé.`, model:`Le monde change même si le code est figé : data drift (distribution des entrées) et concept drift (relation X↔y) font baisser la performance silencieusement, sans erreur technique.` },
  { id:"q-ch6-open-05", chapter:6, type:"open", q:`Pourquoi les labels réels ne sont-ils pas toujours disponibles immédiatement ?`, model:`La vérité terrain dépend d'un événement futur ou d'un délai métier : churn (semaines), crédit (mois), maintenance (incident futur), recommandation (comportement utilisateur) → on utilise des signaux indirects en attendant.` },
  { id:"q-ch6-open-06", chapter:6, type:"open", q:`Pourquoi la gouvernance est-elle importante dans un système ML ?`, model:`Elle transforme la fiabilité en responsabilité organisationnelle : ownership, droits d'accès, conformité, audit, validation des modèles avant production → assure confiance, sécurité et traçabilité.` },
  { id:"q-ch6-open-07", chapter:6, type:"open", q:`Donnez deux exemples de coûts à surveiller dans un système ML en production.`, model:`- Coût d'inférence / coût par prédiction
- Coût des ressources cloud (stockage, calcul, pipeline)
(coût en tokens pour les systèmes LLM)` },
  { id:"q-ch6-open-08", chapter:6, type:"open", q:`Donnez trois risques propres aux systèmes LLM.`, model:`- Prompt injection
- Hallucinations (réponses non vérifiables)
- Fuite d'informations sensibles
(+ coût variable, biais, instabilité des réponses)` },
);
