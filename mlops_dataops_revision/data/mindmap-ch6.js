/* Chapter 6 — Monitoring, observabilité, gouvernance & LLMOps : mindmap. */
window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch6 = [
  { id:"ch6-root", label:"CH6 — Monitoring, gouvernance & LLMOps", parentId:null, kind:"root" },

  // Branche 1 : Pourquoi monitorer après déploiement
  { id:"ch6-b1", label:"Pourquoi surveiller après le déploiement ?", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b1-l1", label:"6 dimensions à surveiller", parentId:"ch6-b1", kind:"leaf", note:`Données sources, comportements, performance ML, exploitation, risques, coûts.` },
  { id:"ch6-b1-l2", label:"4 objectifs de la surveillance", parentId:"ch6-b1", kind:"leaf", note:`Détecter anomalies, préserver qualité, maintenir performance ML, assurer confiance/gouvernance.` },
  { id:"ch6-b1-l3", label:"Pipeline fiable", parentId:"ch6-b1", kind:"leaf", note:`Un pipeline data/ML fiable est surveillé, compréhensible, traçable et améliorable.` },

  // Branche 2 : Monitoring
  { id:"ch6-b2", label:"Monitoring", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b2-l1", label:"Définition du monitoring", parentId:"ch6-b2", kind:"leaf", note:`Surveillance continue via métriques, logs, traces pour détecter rapidement les anomalies (Ait Daoud, 2025).` },
  { id:"ch6-b2-l2", label:"Indicateurs surveillés", parentId:"ch6-b2", kind:"leaf", note:`Taux erreur API, latence, pipelines échoués, volume ingéré, taux de nulls, score de drift, coût/prédiction.` },
  { id:"ch6-b2-l3", label:"Alerte", parentId:"ch6-b2", kind:"leaf", note:`Notification déclenchée si seuil dépassé ; doit être actionnable, priorisée, contextualisée.` },
  { id:"ch6-b2-l4", label:"Question centrale", parentId:"ch6-b2", kind:"leaf", note:`Le système est-il dans un état normal ou anormal ?` },

  // Branche 3 : Observabilité
  { id:"ch6-b3", label:"Observabilité", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b3-l1", label:"Définition de l'observabilité", parentId:"ch6-b3", kind:"leaf", note:`Capacité à comprendre l'état interne d'un système à partir des signaux qu'il produit (Ait Daoud, 2025).` },
  { id:"ch6-b3-l2", label:"5 signaux fondamentaux", parentId:"ch6-b3", kind:"leaf", note:`Logs, métriques, traces, alertes, lineage → diagnostic → action.` },
  { id:"ch6-b3-l3", label:"Monitoring vs observabilité", parentId:"ch6-b3", kind:"leaf", note:`Monitoring détecte (quoi) ; observabilité explique (pourquoi). Tableau comparatif : question, approche, données, exemple, objectif.` },
  { id:"ch6-b3-l4", label:"Logging", parentId:"ch6-b3", kind:"leaf", note:`Enregistrement des événements importants (app, pipeline, modèle) — ex : log JSON structuré.` },

  // Branche 4 : Monitoring pipelines & modèles ML
  { id:"ch6-b4", label:"Monitoring pipelines & modèles ML", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b4-l1", label:"Monitoring des pipelines de données", parentId:"ch6-b4", kind:"leaf", note:`7 dimensions : disponibilité, fraîcheur, volume, schéma, qualité, performance, coût.` },
  { id:"ch6-b4-l2", label:"Chaîne de model monitoring", parentId:"ch6-b4", kind:"leaf", note:`Données → Features → Modèle → Prédictions → Feedback.` },
  { id:"ch6-b4-l3", label:"Éléments surveillés du modèle", parentId:"ch6-b4", kind:"leaf", note:`Entrées, prédictions, performance, segments, latence, robustesse, version.` },
  { id:"ch6-b4-l4", label:"Délai des labels", parentId:"ch6-b4", kind:"leaf", note:`Churn (semaines), crédit (mois), maintenance (incident futur), recommandation (comportement).` },

  // Branche 5 : Drift & feedback loops
  { id:"ch6-b5", label:"Drift & feedback loops", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b5-l1", label:"Data drift", parentId:"ch6-b5", kind:"leaf", note:`Changement de distribution des données d'entrée (X). Ex : nouveaux profils clients.` },
  { id:"ch6-b5-l2", label:"Prediction drift", parentId:"ch6-b5", kind:"leaf", note:`Changement de distribution des prédictions du modèle (ŷ). Ex : hausse des "risque élevé".` },
  { id:"ch6-b5-l3", label:"Concept drift", parentId:"ch6-b5", kind:"leaf", note:`La relation entre X et y change (même donnée, autre sens). Ex : nouvelles stratégies de fraude.` },
  { id:"ch6-b5-l4", label:"Feedback loop Kaizen", parentId:"ch6-b5", kind:"leaf", note:`Définir → Mesurer → Détecter → Analyser → Corriger → Redéployer → Capitaliser.` },

  // Branche 6 : KPIs de santé & confiance
  { id:"ch6-b6", label:"KPIs de santé & confiance", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b6-l1", label:"5 dimensions de KPI", parentId:"ch6-b6", kind:"leaf", note:`Santé technique, data, modèle, produit, économique.` },
  { id:"ch6-b6-l2", label:"La confiance (Atwal)", parentId:"ch6-b6", kind:"leaf", note:`Repose sur qualité, métadonnées, lineage, sécurité, privacy, gouvernance, monitoring, feedback.` },
  { id:"ch6-b6-l3", label:"Produit vivant", parentId:"ch6-b6", kind:"leaf", note:`Un système data/ML doit être suivi comme un produit opérationnel.` },

  // Branche 7 : Métadonnées, lineage & gouvernance
  { id:"ch6-b7", label:"Métadonnées, lineage & gouvernance", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b7-l1", label:"Métadonnées", parentId:"ch6-b7", kind:"leaf", note:`Données qui décrivent d'autres données. 3 types : descriptives, structurelles, administratives.` },
  { id:"ch6-b7-l2", label:"Data lineage", parentId:"ch6-b7", kind:"leaf", note:`Traçabilité du parcours d'une donnée, de la source aux usages finaux.` },
  { id:"ch6-b7-l3", label:"Gouvernance des données", parentId:"ch6-b7", kind:"leaf", note:`Règles, rôles, responsabilités, pilotage de la production/usage des données et modèles.` },
  { id:"ch6-b7-l4", label:"DataGovOps", parentId:"ch6-b7", kind:"leaf", note:`Gouvernance agile, governance-as-code, vs Command & Control (règles rigides).` },

  // Branche 8 : Sécurité, outils & ouverture LLMOps
  { id:"ch6-b8", label:"Sécurité, outils & ouverture LLMOps", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b8-l1", label:"Sécurité, privacy, traçabilité", parentId:"ch6-b8", kind:"leaf", note:`Confidentialité, intégrité, disponibilité, données personnelles, auditabilité.` },
  { id:"ch6-b8-l2", label:"Outils", parentId:"ch6-b8", kind:"leaf", note:`Prometheus, Grafana, Evidently, OpenLineage, Azure ML, DataKitchen.` },
  { id:"ch6-b8-l3", label:"LLMOps", parentId:"ch6-b8", kind:"leaf", note:`Applique les principes MLOps aux systèmes fondés sur des LLM.` },
  { id:"ch6-b8-l4", label:"Objets & risques LLM", parentId:"ch6-b8", kind:"leaf", note:`Prompts, hallucinations, coût tokens ; risques : prompt injection, fuite d'info.` },
  { id:"ch6-b8-l5", label:"Monitoring RAG", parentId:"ch6-b8", kind:"leaf", note:`Question → Retriever → Documents → Prompt enrichi → LLM → Réponse → Feedback.` },
];
