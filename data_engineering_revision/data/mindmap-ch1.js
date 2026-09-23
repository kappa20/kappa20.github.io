/* Chapter 1 — Big Data & panorama NoSQL : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch1 = [
  { id:"ch1-root", label:"CH1 — Big Data & panorama NoSQL", parentId:null, kind:"root" },

  // Branche 1 — Les V
  { id:"ch1-b1", label:"Big Data : les V", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b1-l1", label:"Volume → scalabilité", parentId:"ch1-b1", kind:"leaf", note:`To, Po, Zo, Yo → bases de données distribuées.` },
  { id:"ch1-b1-l2", label:"Vélocité → disponibilité", parentId:"ch1-b1", kind:"leaf", note:`Flux continus, temps réel. « Stocker d'abord, réfléchir ensuite ». In-memory : Spark.` },
  { id:"ch1-b1-l3", label:"Variété → flexibilité", parentId:"ch1-b1", kind:"leaf", note:`Structurées / semi / non structurées. NoSQL, data lakes, ETL/ELT (Talend, NiFi), JSON/Avro/Parquet.` },
  { id:"ch1-b1-l4", label:"Véracité", parentId:"ch1-b1", kind:"leaf", note:`Fiabilité : nettoyage, gouvernance, détection d'anomalies ML, traçabilité.` },
  { id:"ch1-b1-l5", label:"Valeur", parentId:"ch1-b1", kind:"leaf", note:`Données → décisions : ML/DL/Data Mining, BI (Power BI, Tableau).` },
  { id:"ch1-b1-l6", label:"Autres V (jusqu'à 10)", parentId:"ch1-b1", kind:"leaf", note:`Validité, Vulnérabilité, Variabilité, Volatilité, Visualisation.` },

  // Branche 2 — Limites SGBDR
  { id:"ch1-b2", label:"Limites des SGBDR", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b2-l1", label:"Schéma rigide", parentId:"ch1-b2", kind:"leaf", note:`Difficile d'accueillir données semi/non structurées évolutives.` },
  { id:"ch1-b2-l2", label:"Jointures coûteuses", parentId:"ch1-b2", kind:"leaf", note:`Coût élevé à grande échelle.` },
  { id:"ch1-b2-l3", label:"Scale-out difficile", parentId:"ch1-b2", kind:"leaf", note:`Mise à l'échelle horizontale difficile → besoin de NoSQL.` },

  // Branche 3 — CAP
  { id:"ch1-b3", label:"Théorème CAP", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b3-l1", label:"Énoncé : 2 sur 3", parentId:"ch1-b3", kind:"leaf", note:`Système distribué : impossible d'avoir C, A et P en même temps.` },
  { id:"ch1-b3-l2", label:"C — Consistance", parentId:"ch1-b3", kind:"leaf", note:`Cohérence : mêmes données pour tous.` },
  { id:"ch1-b3-l3", label:"A — Disponibilité", parentId:"ch1-b3", kind:"leaf", note:`Toute requête reçoit une réponse.` },
  { id:"ch1-b3-l4", label:"P — Partitionnement", parentId:"ch1-b3", kind:"leaf", note:`Résistance aux coupures réseau (distribution).` },

  // Branche 4 — Familles NoSQL
  { id:"ch1-b4", label:"4 familles NoSQL", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b4-l1", label:"Clé-valeur (Redis)", parentId:"ch1-b4", kind:"leaf", note:`Cache, sessions, configuration. SET / GET / DEL.` },
  { id:"ch1-b4-l2", label:"Documents (MongoDB)", parentId:"ch1-b4", kind:"leaf", note:`JSON/XML semi-structuré, sans schéma, structure arborescente.` },
  { id:"ch1-b4-l3", label:"Colonnes (HBase)", parentId:"ch1-b4", kind:"leaf", note:`Row key + familles de colonnes ; put / get ; haut débit distribué.` },
  { id:"ch1-b4-l4", label:"Graphe (Neo4j)", parentId:"ch1-b4", kind:"leaf", note:`Nœuds, relations, propriétés ; réseaux sociaux, cartographie.` },

  // Branche 5 — Écosystème
  { id:"ch1-b5", label:"Écosystème Big Data", parentId:"ch1-root", kind:"branch" },
  { id:"ch1-b5-l1", label:"Hadoop = stockage", parentId:"ch1-b5", kind:"leaf", note:`Couche de stockage distribué.` },
  { id:"ch1-b5-l2", label:"Spark = traitement", parentId:"ch1-b5", kind:"leaf", note:`Traitement in-memory ; lit/écrit dans MongoDB.` },
  { id:"ch1-b5-l3", label:"MongoDB = base flexible", parentId:"ch1-b5", kind:"leaf", note:`Couche BD sans schéma, temps réel / semi-structuré ; complète Hadoop et Spark.` },
  { id:"ch1-b5-l4", label:"Data Lake", parentId:"ch1-b5", kind:"leaf", note:`Stockage de données brutes de tout type.` },
  { id:"ch1-b5-l5", label:"Formats JSON / Avro / Parquet", parentId:"ch1-b5", kind:"leaf", note:`Formats flexibles adaptés à la variété.` }
];
