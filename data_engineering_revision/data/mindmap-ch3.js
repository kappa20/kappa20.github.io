/* Chapter 3 — MongoDB : CRUD, requêtes & TP1-3 : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch3 = [
  { id:"ch3-root", label:"CH3 — MongoDB : CRUD, requêtes & TP1-3", parentId:null, kind:"root" },

  // Branche 1 — Bases
  { id:"ch3-b1", label:"Commandes de base", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b1-l1", label:"show dbs / use / show collections", parentId:"ch3-b1", kind:"leaf", note:`\`use vente\` bascule (et crée à la 1re écriture) ; \`show dbs\`, \`show collections\` listent.` },
  { id:"ch3-b1-l2", label:"createCollection", parentId:"ch3-b1", kind:"leaf", note:`\`db.createCollection("categories")\` : création explicite (avec \`$jsonSchema\` optionnel).` },
  { id:"ch3-b1-l3", label:"Syntaxe db.coll.methode(filtre, modif)", parentId:"ch3-b1", kind:"leaf", note:`Filtre = QUI ; modification = QUOI ; \`{}\` = tous les documents.` },

  // Branche 2 — Create / Read
  { id:"ch3-b2", label:"Create & Read", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b2-l1", label:"insertOne / insertMany", parentId:"ch3-b2", kind:"leaf", note:`Schéma flexible : champs différents acceptés ; \`_id\` auto.` },
  { id:"ch3-b2-l2", label:"find / findOne / countDocuments", parentId:"ch3-b2", kind:"leaf", note:`find → curseur ; findOne → 1er document ; countDocuments → total.` },
  { id:"ch3-b2-l3", label:"Notation par points", parentId:"ch3-b2", kind:"leaf", note:`\`{"address.city":"Casa"}\` pour les champs imbriqués.` },

  // Branche 3 — Filtres
  { id:"ch3-b3", label:"Opérateurs de filtre", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b3-l1", label:"Comparaison", parentId:"ch3-b3", kind:"leaf", note:`$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin.` },
  { id:"ch3-b3-l2", label:"Logiques", parentId:"ch3-b3", kind:"leaf", note:`$and, $or, $nor, $not ; ET implicite par virgule.` },
  { id:"ch3-b3-l3", label:"Combinaisons", parentId:"ch3-b3", kind:"leaf", note:`Casablanca ET (age 42 OU 30) : \`{ville:"Casablanca", $or:[{age:42},{age:30}]}\`.` },

  // Branche 4 — Projection
  { id:"ch3-b4", label:"Projection", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b4-l1", label:"Inclusive (1)", parentId:"ch3-b4", kind:"leaf", note:`\`{nom:1, ville:1}\` : uniquement ces champs (+ _id).` },
  { id:"ch3-b4-l2", label:"Exclusive (0)", parentId:"ch3-b4", kind:"leaf", note:`\`{prix:0, date:0}\` : tout sauf ces champs.` },
  { id:"ch3-b4-l3", label:"Exception _id:0", parentId:"ch3-b4", kind:"leaf", note:`Seul cas où on mélange inclusion et exclusion : \`{nom:1, _id:0}\`.` },

  // Branche 5 — Update
  { id:"ch3-b5", label:"Update", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b5-l1", label:"updateOne vs updateMany", parentId:"ch3-b5", kind:"leaf", note:`One : 1er document. Many : tous les correspondants.` },
  { id:"ch3-b5-l2", label:"$set / $unset / $rename", parentId:"ch3-b5", kind:"leaf", note:`Remplacer/créer, supprimer, renommer un champ. Oublier $set = écrasement.` },
  { id:"ch3-b5-l3", label:"$inc / $mul / $min / $max", parentId:"ch3-b5", kind:"leaf", note:`Incrémenter, multiplier (×1.1 = +10 %), mise à jour conditionnelle min/max.` },
  { id:"ch3-b5-l4", label:"$currentDate", parentId:"ch3-b5", kind:"leaf", note:`Enregistre l'heure actuelle dans un champ.` },
  { id:"ch3-b5-l5", label:"Tableaux : $push $each $pop $addToSet", parentId:"ch3-b5", kind:"leaf", note:`$push (doublons ok), $each (liste), $pop (1 dernier / -1 premier), $addToSet (sans doublon).` },
  { id:"ch3-b5-l6", label:"bulkWrite", parentId:"ch3-b5", kind:"leaf", note:`Valeurs différentes en une seule requête réseau.` },

  // Branche 6 — Delete
  { id:"ch3-b6", label:"Delete", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b6-l1", label:"deleteOne / deleteMany", parentId:"ch3-b6", kind:"leaf", note:`Un seul (le 1er) ou tous les correspondants.` },
  { id:"ch3-b6-l2", label:"Suppression par _id", parentId:"ch3-b6", kind:"leaf", note:`Méthode la plus sûre : \`deleteOne({_id:ObjectId("…")})\`.` },
  { id:"ch3-b6-l3", label:"Danger deleteMany({})", parentId:"ch3-b6", kind:"leaf", note:`Filtre vide = efface toute la collection.` },

  // Branche 7 — Agrégation
  { id:"ch3-b7", label:"Agrégation (pipeline)", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b7-l1", label:"$match / $group", parentId:"ch3-b7", kind:"leaf", note:`$match filtre ; $group regroupe selon une clé.` },
  { id:"ch3-b7-l2", label:"$project / $addFields", parentId:"ch3-b7", kind:"leaf", note:`Ajouter, supprimer, renommer des champs.` },

  // Branche 8 — Sauvegarde & Python
  { id:"ch3-b8", label:"Sauvegarde & PyMongo", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b8-l1", label:"mongodump (BSON)", parentId:"ch3-b8", kind:"leaf", note:`\`mongodump --db vente --out c:\\test\` : sauvegarde complète, rapide et légère.` },
  { id:"ch3-b8-l2", label:"mongoexport (JSON/CSV)", parentId:"ch3-b8", kind:"leaf", note:`Par collection : \`--collection clients --out clients.json\` ; Compass : Export.` },
  { id:"ch3-b8-l3", label:"PyMongo : Cursor", parentId:"ch3-b8", kind:"leaf", note:`find() renvoie un Cursor : boucle ou \`list(cursor)\` ; insert_one, update_one, delete_many.` },

  // Branche 9 — Pièges
  { id:"ch3-b9", label:"Pièges d'examen", parentId:"ch3-root", kind:"branch" },
  { id:"ch3-b9-l1", label:"Casse : Age ≠ age", parentId:"ch3-b9", kind:"leaf", note:`Champs et valeurs sensibles à la casse (\"moss\" ≠ \"Moss\"). Le corrigé TP2 mélange Age/age.` },
  { id:"ch3-b9-l2", label:"Corrigé TP2 : Taza/Safi vs Fes", parentId:"ch3-b9", kind:"leaf", note:`Le corrigé donne SAfi/Fes pour une question Taza/Safi : incohérence à signaler.` },
  { id:"ch3-b9-l3", label:"Flottants → Decimal128", parentId:"ch3-b9", kind:"leaf", note:`3300.0000000000005 après \`$mul\` : utiliser Decimal128 en production.` }
];
