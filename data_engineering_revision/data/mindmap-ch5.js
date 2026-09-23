/* Chapter 5 — Data Warehouse, BI & ETL/ELT (TP Talend) : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch5 = [
  { id:"ch5-root", label:"CH5 — Data Warehouse, BI & ETL/ELT", parentId:null, kind:"root" },

  // Branche 1 — Décisionnel & OLTP/OLAP
  { id:"ch5-b1", label:"Décisionnel & OLTP vs OLAP", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b1-l1", label:"Hiérarchie de décision", parentId:"ch5-b1", kind:"leaf", note:`Stratégique (Direction, décisions uniques), tactique (directions fonctionnelles, peu fréquentes), opérationnel (chefs de service, fréquentes et prévisibles).` },
  { id:"ch5-b1-l2", label:"OLTP", parentId:"ch5-b1", kind:"leaf", note:`Transactionnel : détaillé, courant, normalisé, lecture/écriture, requêtes simples en ms, milliers d'utilisateurs concurrents, Mo-Go.` },
  { id:"ch5-b1-l3", label:"OLAP", parentId:"ch5-b1", kind:"leaf", note:`Analytique : agrégé, historisé, dénormalisé, vue multidimensionnelle, requêtes complexes ad hoc, lecture seule, Go-To/Po.` },
  { id:"ch5-b1-l4", label:"Données opérationnelles vs décisionnelles", parentId:"ch5-b1", kind:"leaf", note:`Détaillées/courantes/réparties vs agrégées/historisées/centralisées et intégrées.` },

  // Branche 2 — Structures de stockage BI
  { id:"ch5-b2", label:"Structures de stockage BI", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b2-l1", label:"ODS", parentId:"ch5-b2", kind:"leaf", note:`Données orientées sujet, volatiles, récentes ; zone de traitement avant intégration au DW ; intégration en ligne.` },
  { id:"ch5-b2-l2", label:"Data Warehouse (Inmon)", parentId:"ch5-b2", kind:"leaf", note:`Orienté sujet, intégré, non volatil, historisé ; centralisé, > 100 Go, se construit (ne s'achète pas).` },
  { id:"ch5-b2-l3", label:"Data Mart", parentId:"ch5-b2", kind:"leaf", note:`Sous-ensemble thématique du DW, décentralisé, orienté projet, < 100 Go, quelques mois.` },
  { id:"ch5-b2-l4", label:"Data Mining", parentId:"ch5-b2", kind:"leaf", note:`Outils de fouille : tendances, segmentation, corrélations.` },
  { id:"ch5-b2-l5", label:"4 caractéristiques d'un DW", parentId:"ch5-b2", kind:"leaf", note:`Sujet, intégré, non volatil, historisé.` },

  // Branche 3 — Architectures
  { id:"ch5-b3", label:"Architectures Inmon vs Kimball", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b3-l1", label:"Top-down (Inmon)", parentId:"ch5-b3", kind:"leaf", note:`EDW centralisé d'abord, puis data marts ; intégration élevée, portée large ; flocon.` },
  { id:"ch5-b3-l2", label:"Bottom-up (Kimball)", parentId:"ch5-b3", kind:"leaf", note:`Data marts indépendants d'abord ; intégration inférieure, projet plus petit ; étoile.` },
  { id:"ch5-b3-l3", label:"Staging area", parentId:"ch5-b3", kind:"leaf", note:`Zone intermédiaire d'extraction/transformation entre sources et DW.` },

  // Branche 4 — ETL / ELT
  { id:"ch5-b4", label:"ETL / ELT", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b4-l1", label:"Extraction", parentId:"ch5-b4", kind:"leaf", note:`Depuis BDR, fichiers, ERP, CRM ; seulement le delta ; sans perturber la production.` },
  { id:"ch5-b4-l2", label:"Transformation", parentId:"ch5-b4", kind:"leaf", note:`Homogénéiser, dédoublonner, nettoyer (manquantes, aberrantes), format cible.` },
  { id:"ch5-b4-l3", label:"Chargement", parentId:"ch5-b4", kind:"leaf", note:`Dans le DW ; agrégats, granularité, restauration, redondance si haute disponibilité.` },
  { id:"ch5-b4-l4", label:"ETL vs ELT", parentId:"ch5-b4", kind:"leaf", note:`ETL : transformation avant chargement (propre, rigide, lent). ELT : brut d'abord puis transformation dans le DW (rapide, scalable, DW puissant).` },
  { id:"ch5-b4-l5", label:"Push / Pull / Push-Pull", parentId:"ch5-b4", kind:"leaf", note:`Modes de rapatriement vers la staging area : la source pousse, la staging tire, ou la source prévient puis la staging récupère.` },
  { id:"ch5-b4-l6", label:"Full load vs Delta load", parentId:"ch5-b4", kind:"leaf", note:`Complet au démarrage ; incrémental ensuite, par flux (petits volumes) ou par lots (gros volumes).` },
  { id:"ch5-b4-l7", label:"Structures : directe, cumul, résumé", parentId:"ch5-b4", kind:"leaf", note:`Directe (mises à jour espacées), cumul simple (tout conservé), résumé déroulant (anciennes données synthétisées).` },
  { id:"ch5-b4-l8", label:"Métabase & outils", parentId:"ch5-b4", kind:"leaf", note:`Catalogue de métadonnées du DW ; outils : Talend, Pentaho, Informatica, SSIS, Fivetran, Airbyte, KNIME, Matillion.` },

  // Branche 5 — TP Talend
  { id:"ch5-b5", label:"TP Talend", parentId:"ch5-root", kind:"branch" },
  { id:"ch5-b5-l1", label:"Installation", parentId:"ch5-b5", kind:"leaf", note:`JDK ≥ 11 (8.0+), JAVA_HOME + Path, dézipper sans espaces dans le chemin, lancer TOS_DI.` },
  { id:"ch5-b5-l2", label:"Job : tRowGenerator → tLogRow", parentId:"ch5-b5", kind:"leaf", note:`Génère 100 lignes fictives (Nom, Prénom, Ville) avec TalendDataGenerator ; affichage console en Mode Table.` },
  { id:"ch5-b5-l3", label:"CSV → tAggregateRow → Excel", parentId:"ch5-b5", kind:"leaf", note:`Regroupement par job_title, somme → Total_des_sommes, sortie tFileOutputExcel.` },
  { id:"ch5-b5-l4", label:"SQL Server → tMap → tAggregateRow", parentId:"ch5-b5", kind:"leaf", note:`tDBInput (SQL Server), filtre Canada dans tMap, moyenne, sortie Excel.` },
  { id:"ch5-b5-l5", label:"2 sources + stockage BD", parentId:"ch5-b5", kind:"leaf", note:`SQL Server + CSV combinés dans tMap, écriture dans une base de données.` }
];
