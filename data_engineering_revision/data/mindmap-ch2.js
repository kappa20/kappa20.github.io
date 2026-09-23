/* Chapter 2 — MongoDB : architecture & modélisation : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch2 = [
  { id:"ch2-root", label:"CH2 — MongoDB : architecture & modélisation", parentId:null, kind:"root" },

  // Branche 1 — Pourquoi MongoDB
  { id:"ch2-b1", label:"Pourquoi MongoDB", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b1-l1", label:"Modèle document (BSON)", parentId:"ch2-b1", kind:"leaf", note:`Structures type JSON, naturelles pour les applis modernes.` },
  { id:"ch2-b1-l2", label:"Schéma flexible", parentId:"ch2-b1", kind:"leaf", note:`Pas de table rigide : les champs s'adaptent quand les données évoluent.` },
  { id:"ch2-b1-l3", label:"Évolutif & haute dispo", parentId:"ch2-b1", kind:"leaf", note:`Partitionnement horizontal + replica sets (tolérance aux pannes).` },
  { id:"ch2-b1-l4", label:"Usages", parentId:"ch2-b1", kind:"leaf", note:`Applications Web, IoT, pipelines d'analyse.` },

  // Branche 2 — BSON & stockage
  { id:"ch2-b2", label:"JSON, BSON & stockage", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b2-l1", label:"JSON = texte", parentId:"ch2-b2", kind:"leaf", note:`Format lisible pour l'échange de données.` },
  { id:"ch2-b2-l2", label:"BSON = binaire", parentId:"ch2-b2", kind:"leaf", note:`Stockage interne, rapide, types : Date, int32/64, Decimal128, ObjectId, Binary.` },
  { id:"ch2-b2-l3", label:"WiredTiger", parentId:"ch2-b2", kind:"leaf", note:`Moteur : alloue l'espace en extensions/pages, stocke collections de documents BSON.` },

  // Branche 3 — Architecture
  { id:"ch2-b3", label:"Architecture", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b3-l1", label:"Client / drivers", parentId:"ch2-b3", kind:"leaf", note:`Envoie les requêtes, reçoit les résultats via des pilotes.` },
  { id:"ch2-b3-l2", label:"mongos (routeur)", parentId:"ch2-b3", kind:"leaf", note:`Point d'entrée en cluster fragmenté ; répartit les requêtes entre shards.` },
  { id:"ch2-b3-l3", label:"mongod", parentId:"ch2-b3", kind:"leaf", note:`Processus principal : CRUD, indexation, requêtes.` },
  { id:"ch2-b3-l4", label:"Config servers", parentId:"ch2-b3", kind:"leaf", note:`Métadonnées et configuration du cluster fragmenté.` },
  { id:"ch2-b3-l5", label:"Replica set", parentId:"ch2-b3", kind:"leaf", note:`Primaire + secondaires ; bascule automatique si le primaire tombe.` },
  { id:"ch2-b3-l6", label:"Shards", parentId:"ch2-b3", kind:"leaf", note:`Partitions (chacune = replica set) ; répartition via la clé de partition.` },

  // Branche 4 — SQL vs MongoDB
  { id:"ch2-b4", label:"SQL vs MongoDB", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b4-l1", label:"Table→collection, ligne→document", parentId:"ch2-b4", kind:"leaf", note:`Colonne → champ ; clé primaire → _id ; JOIN → imbrication/$lookup.` },
  { id:"ch2-b4-l2", label:"CRUD : INSERT/SELECT/UPDATE/DELETE", parentId:"ch2-b4", kind:"leaf", note:`insertOne / find / updateOne / deleteOne.` },
  { id:"ch2-b4-l3", label:"Scalabilité", parentId:"ch2-b4", kind:"leaf", note:`SQL : verticale ; MongoDB : horizontale avec partitionnement.` },

  // Branche 5 — Modélisation
  { id:"ch2-b5", label:"Intégrer ou référencer", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b5-l1", label:"Intégration (embedded)", parentId:"ch2-b5", kind:"leaf", note:`Même document ; lectures rapides ; petit, consulté ensemble, rarement modifié seul.` },
  { id:"ch2-b5-l2", label:"Référencement", parentId:"ch2-b5", kind:"leaf", note:`Documents distincts reliés par ids ; moins de doublons ; gros/mutables/N:M.` },
  { id:"ch2-b5-l3", label:"Critères de choix", parentId:"ch2-b5", kind:"leaf", note:`Taille des données, type de relation, modèles de lecture/écriture.` },

  // Branche 6 — TechStore
  { id:"ch2-b6", label:"Scénario TechStore", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b6-l1", label:"1:1 adresse intégrée / doc_id référencé", parentId:"ch2-b6", kind:"leaf", note:`Adresse lue avec le profil ; documents sensibles/volumineux à part.` },
  { id:"ch2-b6-l2", label:"1:N specs intégrées / commandes référencées", parentId:"ch2-b6", kind:"leaf", note:`Petite liste statique intégrée ; croissance illimitée des commandes → référence.` },
  { id:"ch2-b6-l3", label:"N:M fournisseurs bidirectionnel", parentId:"ch2-b6", kind:"leaf", note:`supplier_ids dans produit, supplied_product_ids dans fournisseur.` },
  { id:"ch2-b6-l4", label:"Snapshot des commandes", parentId:"ch2-b6", kind:"leaf", note:`Détails figés au moment de l'achat → historique exact.` },

  // Branche 7 — Validation
  { id:"ch2-b7", label:"Validation de schéma", parentId:"ch2-root", kind:"branch" },
  { id:"ch2-b7-l1", label:"$jsonSchema", parentId:"ch2-b7", kind:"leaf", note:`validator avec bsonType, required, properties (minimum, maximum, pattern).` },
  { id:"ch2-b7-l2", label:"validationLevel", parentId:"ch2-b7", kind:"leaf", note:`strict : tous les documents ; moderate : nouveaux documents.` },
  { id:"ch2-b7-l3", label:"validationAction", parentId:"ch2-b7", kind:"leaf", note:`error : bloque ; warn : accepte avec avertissement.` }
];
