/* Chapter 3 — Qualité & tests de données : mindmap. */
window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch3 = [
  { id:"ch3-root", label:"CH3 — Qualité & tests de données", parentId:null, kind:"root" },

  // Branch 1 — Disponible / exploitable / fiable
  { id:"ch3-b1", label:"Disponible → exploitable → fiable", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b1-l1", label:"Donnée disponible", parentId:"ch3-b1", kind:"leaf", note:`Brute, non vérifiée, stockée en vrac ; accessible techniquement.` },
  { id:"ch3-b1-l2", label:"Donnée exploitable", parentId:"ch3-b1", kind:"leaf", note:`Formatée, accessible, manipulable pour analyse/transformation.` },
  { id:"ch3-b1-l3", label:"Donnée fiable", parentId:"ch3-b1", kind:"leaf", note:`Complète, valide/exacte, opportune, cohérente. Disponibilité ≠ fiabilité.` },

  // Branch 2 — Confiance & qualité ML
  { id:"ch3-b2", label:"Confiance & qualité ML", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b2-l1", label:"Définition de la confiance", parentId:"ch3-b2", kind:"leaf", note:`Degré d'assurance quant à fiabilité, compréhension, traçabilité, stabilité d'un actif de données.` },
  { id:"ch3-b2-l2", label:"Éléments de confiance", parentId:"ch3-b2", kind:"leaf", note:`Qualité, métadonnées, lineage, tests, gouvernance, monitoring, feedback loops.` },
  { id:"ch3-b2-l3", label:"Qualité ML = f(Code, Données)", parentId:"ch3-b2", kind:"leaf", note:`Garbage in, garbage out ; data drift et concept drift dégradent la performance.` },

  // Branch 3 — Dimensions de qualité (I)
  { id:"ch3-b3", label:"Dimensions de qualité (I)", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b3-l1", label:"Complétude", parentId:"ch3-b3", kind:"leaf", note:`Présence des données attendues (ex : customer_id manquant).` },
  { id:"ch3-b3-l2", label:"Validité", parentId:"ch3-b3", kind:"leaf", note:`Respect du format/type/domaine autorisé.` },
  { id:"ch3-b3-l3", label:"Cohérence / cohérence métier", parentId:"ch3-b3", kind:"leaf", note:`Absence de contradiction logique ou de violation des règles métier.` },
  { id:"ch3-b3-l4", label:"Unicité", parentId:"ch3-b3", kind:"leaf", note:`Absence de doublons sur une clé (ex : order_id).` },

  // Branch 4 — Dimensions de qualité (II)
  { id:"ch3-b4", label:"Dimensions de qualité (II)", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b4-l1", label:"Exactitude", parentId:"ch3-b4", kind:"leaf", note:`Proximité de la donnée avec la réalité observée.` },
  { id:"ch3-b4-l2", label:"Fraîcheur", parentId:"ch3-b4", kind:"leaf", note:`Disponibilité dans le délai attendu par le métier.` },
  { id:"ch3-b4-l3", label:"Intégrité", parentId:"ch3-b4", kind:"leaf", note:`Relations entre objets/tables respectées (clés étrangères).` },
  { id:"ch3-b4-l4", label:"Traçabilité / uniformité", parentId:"ch3-b4", kind:"leaf", note:`Origine connue des transformations ; représentation homogène dans le système.` },

  // Branch 5 — Qualité dès l'ingestion
  { id:"ch3-b5", label:"Qualité dès l'ingestion", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b5-l1", label:"Principe du Shift Left", parentId:"ch3-b5", kind:"leaf", note:`Déplacer les contrôles au plus tôt pour réduire le coût de correction.` },
  { id:"ch3-b5-l2", label:"Contrôles possibles à l'entrée", parentId:"ch3-b5", kind:"leaf", note:`Présence du flux, conformité du schéma, colonnes obligatoires, volume, fraîcheur.` },
  { id:"ch3-b5-l3", label:"Statistical Process Control (SPC)", parentId:"ch3-b5", kind:"leaf", note:`Détecte variations anormales, ruptures de tendance, dérives progressives.` },

  // Branch 6 — Métadonnées & lineage
  { id:"ch3-b6", label:"Métadonnées & lineage", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b6-l1", label:"3 types de métadonnées", parentId:"ch3-b6", kind:"leaf", note:`Descriptives (métier), structurelles (architecture), administratives (gouvernance).` },
  { id:"ch3-b6-l2", label:"Data lineage : définition", parentId:"ch3-b6", kind:"leaf", note:`Traçabilité du parcours : source → ingestion → transformation → produit data → usage.` },
  { id:"ch3-b6-l3", label:"Data lineage : apports", parentId:"ch3-b6", kind:"leaf", note:`Analyse d'impact, diagnostic d'erreur, audit/conformité, confiance dans les pipelines.` },

  // Branch 7 — Gouvernance & data contract
  { id:"ch3-b7", label:"Gouvernance & data contract", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b7-l1", label:"Ce que la gouvernance définit", parentId:"ch3-b7", kind:"leaf", note:`Rôles, règles d'usage/qualité, validation, gestion des changements, incidents.` },
  { id:"ch3-b7-l2", label:"Gouvernance Agile (DataGovOps)", parentId:"ch3-b7", kind:"leaf", note:`Governance-as-code intégrée au pipeline CI/CD, au lieu de processus manuels rigides.` },
  { id:"ch3-b7-l3", label:"Data contract", parentId:"ch3-b7", kind:"leaf", note:`Engagement formalisé producteur/consommateur : schéma, SLA, règles, évolution.` },

  // Branch 8 — Tests, CI & feedback loops
  { id:"ch3-b8", label:"Tests, CI & feedback loops", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b8-l1", label:"Tests de schéma", parentId:"ch3-b8", kind:"leaf", note:`Structure, types (assert expected_cols in df).` },
  { id:"ch3-b8-l2", label:"Tests de contenu", parentId:"ch3-b8", kind:"leaf", note:`Nullité, unicité, domaine de valeurs.` },
  { id:"ch3-b8-l3", label:"Tests métier", parentId:"ch3-b8", kind:"leaf", note:`Cohérence temporelle, intégrité référentielle, fraîcheur/SLA.` },
  { id:"ch3-b8-l4", label:"Intégration CI (gatekeeper)", parentId:"ch3-b8", kind:"leaf", note:`Pas de promotion sans validation ; tests versionnés comme le code.` },
  { id:"ch3-b8-l5", label:"Feedback loop (Kaizen)", parentId:"ch3-b8", kind:"leaf", note:`Mesurer → détecter → analyser → corriger → réévaluer → capitaliser.` }
];
