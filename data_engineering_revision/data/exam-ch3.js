/* Chapter 3 — MongoDB : CRUD, requêtes & TP1-3 : examen blanc.
   Exercices transcrits des TP1, TP2 et TP3 (Pr. Bentaib, base « vente ») avec leurs corrigés ;
   les QCM sont construits à partir de ces TP et du cours (Pr. Esswidi). */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch3 = {
  chapter: 3,
  title: `TP 1-3 : MongoDB — base « vente », filtres, projections, mises à jour, suppressions`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch3-qcm-01", q:`Quelle commande bascule vers la base « vente » (et la crée si elle n'existe pas) ?`, choices:[`show vente`,`use vente`,`db.createDatabase("vente")`,`create vente`], answer:1, correction:`b — \`use vente\` (création à la 1re écriture)` },
    { id:"e-ch3-qcm-02", q:`Pour lister les vendeurs de spécialité « électronique » :`, choices:[`db.vendeurs.find({specialite:"électronique"})`,`db.vendeurs.findOne()`,`db.vendeurs.countDocuments()`,`db.vendeurs.insertOne({specialite:"électronique"})`], answer:0, correction:`a — \`find\` avec filtre d'égalité (\`.pretty()\` optionnel)` },
    { id:"e-ch3-qcm-03", q:`Quelle commande donne le nombre total de ventes ?`, choices:[`db.ventes.find().size`,`db.ventes.countDocuments()`,`db.ventes.total()`,`show ventes`], answer:1, correction:`b — \`countDocuments()\`` },
    { id:"e-ch3-qcm-04", q:`Dans \`{nom:1, ville:1}\`, que signifie « 1 » ?`, choices:[`exclure le champ`,`trier par ordre croissant`,`inclure le champ dans le résultat`,`créer un index`], answer:2, correction:`c — 1 = inclure (projection inclusive) ; 0 = exclure` },
    { id:"e-ch3-qcm-05", q:`Quel opérateur multiplie la valeur d'un champ (ex. +10 % sur les prix) ?`, choices:[`$inc`,`$mul`,`$set`,`$max`], answer:1, correction:`b — \`$mul:{prix:1.1}\`` },
    { id:"e-ch3-qcm-06", q:`\`$push\` sur un tableau :`, choices:[`supprime le dernier élément`,`ajoute un élément à la fin et autorise les doublons`,`ajoute seulement si absent`,`remplace le tableau`], answer:1, correction:`b — fin du tableau, doublons autorisés (\`$addToSet\` les évite)` },
    { id:"e-ch3-qcm-07", q:`Quelle commande supprime **toutes** les ventes dont le prix est inférieur à 500 € ?`, choices:[`db.ventes.deleteOne({prix:{$lt:500}})`,`db.ventes.deleteMany({prix:{$lt:500}})`,`db.ventes.deleteMany({prix:500})`,`db.ventes.remove()`], answer:1, correction:`b — \`deleteMany\` + \`$lt\`` },
    { id:"e-ch3-qcm-08", q:`Quel outil crée une sauvegarde JSON lisible d'une collection ?`, choices:[`mongodump`,`mongoexport`,`mongod`,`mongos`], answer:1, correction:`b — \`mongoexport --db vente --collection clients --out …\` (mongodump = BSON)` }
  ],
  questions: [
    { id:"e-ch3-q-01", q:`TP1 ex.1-2 — Créer la base « vente » et afficher les bases et collections ; quelles commandes ?`, correction:`\`use vente\` ; \`show dbs\` ; \`db.createCollection("categories")\` ; \`show collections\`.` },
    { id:"e-ch3-q-02", q:`TP1 ex.3 — Afficher tous les clients, le 1er client, les vendeurs de spécialité « électronique », les magasins situés à Fès, le nombre total de ventes.`, correction:`\`db.clients.find()\` ; \`db.clients.findOne()\` ; \`db.vendeurs.find({specialite:"électronique"}).pretty()\` ; \`db.magasins.find({ville:"Fes"})\` ; \`db.ventes.countDocuments()\`.` },
    { id:"e-ch3-q-03", q:`TP1 ex.3 q.10 — Mettre à jour la date de vente de chaque produit.`, correction:`3 \`updateOne\` (\`$set:{date:"2026-04-01"}\`) ou \`updateMany({produit:{$in:["Smartphone","PC Portable","Casque"]}}, {$set:{date:"2026-04-01"}})\`. updateOne = 1er document ; updateMany = tous.` },
    { id:"e-ch3-q-04", q:`TP1 ex.3 q.11 — Enregistrer (sauvegarder) la base de données.`, correction:`\`mongodump --db vente --out c:\\test\` → BSON (terminal système, MongoDB Database Tools). JSON : \`mongoexport --db vente --collection clients --out c:\\test\\clients.json\`. Compass : *Export the full collection* → JSON/CSV.` },
    { id:"e-ch3-q-05", q:`TP2 ex.1 — Ajouter un champ Âge à tous les clients (valeurs différentes), afficher les plus de 30 ans, afficher seulement nom et ville.`, correction:`Même valeur : \`updateMany({}, {$set:{Age:30}})\` ; valeurs différentes : \`updateOne({_id:ObjectId("…")}, {$set:{Age:25}})\`. \`find({age:{$gt:30}})\`. \`find({}, {nom:1, ville:1, _id:0})\`.` },
    { id:"e-ch3-q-06", q:`TP2 ex.1 — Ventes dont le montant est compris entre 150 et 1500 ; ventes de Smartphone à plus de 400 € ; magasins situés à Taza ou Safi.`, correction:`\`find({prix:{$gt:150,$lt:1500}})\` (ou \`$gte/$lte\`). \`find({produit:"Smartphone", prix:{$gt:400}})\` (ET implicite). \`find({$or:[{ville:"Taza"},{ville:"Safi"}]})\` ou \`{ville:{$in:[…]}}\` (le corrigé utilise SAfi/Fes : incohérent).` },
    { id:"e-ch3-q-07", q:`TP2 ex.1 q.6 — Expliquer la différence entre projection inclusive et exclusive.`, correction:`Inclusive (1) : seuls les champs listés (+ _id). Exclusive (0) : tout sauf les champs listés. Seule exception : \`_id:0\` avec des inclusions.` },
    { id:"e-ch3-q-08", q:`TP3 — (1) Modifier la ville de Bentaib ; (2) augmenter tous les prix de 10 % ; (3) ajouter un champ achats à un client ; (4) supprimer une vente ; (5) différence entre updateOne et updateMany.`, correction:`(1) \`updateOne({nom:"Bentaib"}, {$set:{ville:"Casablanca"}})\` ; plusieurs : \`updateMany\` + \`$in\` ; valeurs différentes : \`bulkWrite\`. (2) \`updateMany({}, {$mul:{prix:1.1}})\`. (3) \`updateOne({nom:"Bentaib"}, {$push:{achats:"Smartphone"}})\` ; liste : \`$push\` + \`$each\`. (4) \`deleteOne({produit:"Casque"})\` ; par \`_id\` (plus sûr) ; \`deleteMany({prix:{$lt:500}})\`. (5) One = 1er document ; Many = tous.` }
  ],
  vocab: [
    { id:"e-ch3-v-01", term:`collection`, correction:`Groupe de documents BSON ; équivalent d'une table SQL, sans schéma imposé.` },
    { id:"e-ch3-v-02", term:`document`, correction:`Enregistrement JSON/BSON (équivalent d'une ligne), avec un \`_id\` unique.` },
    { id:"e-ch3-v-03", term:`_id (ObjectId)`, correction:`Identifiant unique d'un document, créé automatiquement (équivalent de la clé primaire).` },
    { id:"e-ch3-v-04", term:`projection`, correction:`2e argument de \`find\` : choisit les champs renvoyés (inclusive 1 / exclusive 0).` },
    { id:"e-ch3-v-05", term:`$set`, correction:`Remplace ou crée la valeur d'un champ sans toucher aux autres.` },
    { id:"e-ch3-v-06", term:`$in`, correction:`Correspond à l'une des valeurs d'un tableau (\`$nin\` : aucune).` },
    { id:"e-ch3-v-07", term:`$mul`, correction:`Multiplie la valeur d'un champ numérique (×1.1 = +10 %).` },
    { id:"e-ch3-v-08", term:`$push / $each`, correction:`Ajoute à un tableau (doublons permis) ; \`$each\` : plusieurs éléments à la fois.` },
    { id:"e-ch3-v-09", term:`bulkWrite`, correction:`Plusieurs opérations (valeurs différentes) envoyées en une seule requête.` },
    { id:"e-ch3-v-10", term:`mongodump`, correction:`Outil de sauvegarde en BSON d'une base (\`--db\`, \`--out\`).` }
  ],
  analysis: [
    { id:"e-ch3-a-01", scenario:`\`db.clients.updateOne({nom:"Bentaib"}, {ville:"Paris"})\` est exécutée.`, question:`Quel est le problème ?`, correction:`\`$set\` manquant : le document est remplacé en entier (les autres champs disparaissent) — ou erreur selon la version. Correct : \`{$set:{ville:"Paris"}}\`.` },
    { id:"e-ch3-a-02", scenario:`Le TP2 ajoute le champ \`Age\` mais la requête \`find({age:{$gt:30}})\` renvoie 0 résultat.`, question:`Pourquoi ?`, correction:`Noms de champs sensibles à la casse : \`Age\` ≠ \`age\`. Utiliser le même nom partout (idem valeurs : "moss" ≠ "Moss").` },
    { id:"e-ch3-a-03", scenario:`Après \`updateMany({}, {$mul:{prix:1.1}})\`, un prix affiche 3300.0000000000005.`, question:`Explication et remède ?`, correction:`Décimaux stockés en binaire (double). Production : type Decimal128 pour les montants.` },
    { id:"e-ch3-a-04", scenario:`Plusieurs ventes « Casque » existent ; on veut n'en supprimer qu'une précise.`, question:`Que recommander ?`, correction:`\`deleteOne({_id:ObjectId("…")})\` : \`_id\` unique. \`deleteOne({produit:"Casque"})\` supprime le 1er trouvé (non maîtrisé).` }
  ],
  case: {
    title: `Cas TP « vente » : de la création à la sauvegarde`,
    context: `Base \`vente\` avec les collections clients (moss/Taza, Bentaib/Casablanca), vendeurs (Ali et laila : électronique ; mohamed : informatique), magasins (Casa Anfa/Casablanca ; Agdal Fes et jnan El Ouard/Fes) et ventes (Smartphone 500, PC Portable 1200, Casque 150 ; dates 2026-10-xx). Produits et catégories (electronique/electro, PC Portable/PCP, PC Bureau/PCB, Telephone/teleph) sont insérés via Compass.`,
    tasks: [
      { id:"e-ch3-c-01", prompt:`1. Créer la base, insérer les clients et les vendeurs, puis vérifier.`, correction:`\`use vente\` ; \`db.clients.insertMany([{nom:"moss",ville:"Taza",email:"mosst@mail.com"},{nom:"Bentaib",ville:"Casablanca",email:"bentaib@mail.com"}])\` ; idem vendeurs ; \`show dbs\`, \`show collections\`.` },
      { id:"e-ch3-c-02", prompt:`2. Lister les vendeurs « électronique », les magasins de Fès, et compter les ventes.`, correction:`\`db.vendeurs.find({specialite:"électronique"})\` (Ali, laila) ; \`db.magasins.find({ville:"Fes"})\` (2) ; \`db.ventes.countDocuments()\` → 3.` },
      { id:"e-ch3-c-03", prompt:`3. Mettre à jour toutes les dates de vente à 2026-04-01.`, correction:`\`updateMany({produit:{$in:["Smartphone","PC Portable","Casque"]}}, {$set:{date:"2026-04-01"}})\` (ou \`updateMany({}, …)\`).` },
      { id:"e-ch3-c-04", prompt:`4. Augmenter les prix de 10 %, puis afficher les ventes entre 150 et 1500 (nom et prix seulement).`, correction:`\`updateMany({}, {$mul:{prix:1.1}})\` puis \`find({prix:{$gte:150,$lte:1500}}, {produit:1, prix:1, _id:0})\`. Attention : après +10 %, Casque=165, Smartphone=550, PC=1320.` },
      { id:"e-ch3-c-05", prompt:`5. Ajouter à Bentaib les achats Smartphone, Chargeur, Coque, puis supprimer la vente « Casque » de façon sûre.`, correction:`\`updateOne({nom:"Bentaib"}, {$push:{achats:"Smartphone"}})\` puis \`$push:{achats:{$each:["Chargeur","Coque"]}}\` ; \`findOne({produit:"Casque"})\` pour lire l'\`_id\` puis \`deleteOne({_id:ObjectId("…")})\`.` },
      { id:"e-ch3-c-06", prompt:`6. Sauvegarder la base en BSON et la collection clients en JSON.`, correction:`\`mongodump --db vente --out c:\\test\` ; \`mongoexport --db vente --collection clients --out c:\\test\\clients.json\` (ou Compass → Export → JSON/CSV).` }
    ],
    deliverables: [
      `Script mongosh complet (création → sauvegarde) commenté`,
      `Tableau des opérateurs utilisés (filtre, projection, update, delete) avec leur rôle`,
      `Liste des pièges rencontrés (\`$set\`, casse, \`deleteMany({})\`, \`updateOne\` vs \`updateMany\`)`
    ]
  }
};
