/* Chapter 3 — MongoDB : CRUD, requêtes & TP1-3 : flashcards. */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- CRUD & base ---
  { id:"fc-ch3-001", chapter:3, topic:"crud", kind:"definition", front:`Définir : CRUD et équivalents SQL ↔ MongoDB`, back:`Create / Read / Update / Delete.
- Créer : \`INSERT INTO\` → \`insertOne()\` / \`insertMany()\`
- Lire : \`SELECT * FROM\` → \`find()\` / \`findOne()\`
- Modifier : \`UPDATE … SET\` → \`updateOne()\` / \`updateMany()\`
- Supprimer : \`DELETE FROM\` → \`deleteOne()\` / \`deleteMany()\`
Syntaxe : \`db.collection.methode(filtre, modification)\`` },
  { id:"fc-ch3-002", chapter:3, topic:"crud", kind:"concept", front:`Commandes de base : afficher / créer une base, une collection`, back:`- \`show dbs\` : liste des bases
- \`use vente\` : bascule vers la base (créée à la volée à la 1re écriture)
- \`db.createCollection("categories")\` : crée explicitement une collection
- \`show collections\` : liste des collections
- \`db.clients.find()\` : opère sur la collection \`clients\`` },
  { id:"fc-ch3-003", chapter:3, topic:"crud", kind:"concept", front:`insertOne vs insertMany`, back:`- \`insertOne({...})\` : 1 document
- \`insertMany([{...},{...}])\` : tableau de documents, en une requête
- Schéma flexible : champs différents d'un document à l'autre acceptés sans erreur (ex. Alice {age}, Bob {email, roles}, Carol {notes:{DB:16}})
- \`_id\` (ObjectId) ajouté automatiquement s'il est absent` },
  { id:"fc-ch3-004", chapter:3, topic:"crud", kind:"concept", front:`find, findOne, pretty, countDocuments`, back:`- \`find()\` : tous les documents (renvoie un **curseur**)
- \`findOne()\` : le 1er document seulement
- \`.pretty()\` : affichage indenté
- \`countDocuments()\` : nombre de documents (ex. total des ventes)
- Avec filtre : \`db.vendeurs.find({specialite:"électronique"})\`` },
  { id:"fc-ch3-005", chapter:3, topic:"requetes", kind:"concept", front:`Opérateurs de comparaison MongoDB`, back:`- \`$eq\` égal, \`$ne\` différent
- \`$gt\` >, \`$gte\` ≥, \`$lt\` <, \`$lte\` ≤
- \`$in\` : une des valeurs d'un tableau
- \`$nin\` : aucune des valeurs du tableau
Ex. \`db.ventes.find({prix:{$gt:150, $lt:1500}})\`` },
  { id:"fc-ch3-006", chapter:3, topic:"requetes", kind:"concept", front:`Opérateurs logiques MongoDB`, back:`- \`$and\` : toutes les conditions vraies
- \`$or\` : au moins une vraie
- \`$nor\` : aucune vraie
- \`$not\` : inverse la condition qui suit
- **ET implicite** : plusieurs critères séparés par une virgule dans le même objet → \`{produit:"Smartphone", prix:{$gt:400}}\`` },
  { id:"fc-ch3-007", chapter:3, topic:"requetes", kind:"concept", front:`$or avec tableau vs $in : quand utiliser quoi ?`, back:`- \`$or:[{ville:"SAfi"},{ville:"Fes"}]\` : conditions de natures différentes possibles
- \`ville:{$in:["SAFI","Fes"]}\` : même champ, liste de valeurs → plus court
- Mélange : \`{ville:"Casablanca", $or:[{age:42},{age:30}]}\` = Casablanca **ET** (42 **OU** 30)` },
  { id:"fc-ch3-008", chapter:3, topic:"requetes", kind:"concept", front:`Notation par points (champs imbriqués)`, back:`\`db.users.find({"address.city":"Casa"})\` — guillemets obligatoires.
- Tableau de sous-documents : \`{"specifications.key":"RAM", "specifications.value":"32GB"}\`
- Aucune jointure nécessaire grâce à l'imbrication` },
  { id:"fc-ch3-009", chapter:3, topic:"requetes", kind:"concept", front:`Projection inclusive vs exclusive`, back:`- **Inclusive (1)** : liste les champs à voir, le reste est masqué → \`{nom:1, ville:1}\` (+ \`_id\` par défaut)
- **Exclusive (0)** : liste les champs à cacher, le reste s'affiche → \`{prix:0, date:0}\`
- **Exception** : \`_id:0\` peut se combiner avec des inclusions → \`find({}, {nom:1, ville:1, _id:0})\`
- 1er argument = filtre (\`{}\` = tous), 2e = projection` },
  { id:"fc-ch3-010", chapter:3, topic:"requetes", kind:"concept", front:`Opérateurs d'agrégation (TP2)`, back:`Utilisés dans les pipelines pour le traitement massif :
- \`$match\` : filtre (comme \`find\`)
- \`$group\` : regroupe selon une clé
- \`$project\` : ajoute, supprime ou renomme des champs
- \`$addFields\` : ajoute de nouveaux champs` },
  // --- UPDATE ---
  { id:"fc-ch3-011", chapter:3, topic:"update", kind:"definition", front:`Définir : $set`, back:`Remplace la valeur d'un champ **ou le crée** s'il n'existe pas, sans toucher aux autres champs.
\`db.clients.updateOne({nom:"Bentaib"}, {$set:{ville:"Casablanca"}})\`
- Toujours l'utiliser : sans \`$set\`, le document est remplacé en entier` },
  { id:"fc-ch3-012", chapter:3, topic:"update", kind:"concept", front:`updateOne vs updateMany`, back:`- \`updateOne\` : ne modifie que le **1er** document trouvé (même si plusieurs correspondent)
- \`updateMany\` : modifie **tous** les documents correspondant au filtre
- \`updateOne\` → modification précise (email d'un user via son \`_id\`) ; \`updateMany\` → mise à jour globale (remise de 10 %)
- Filtre \`{}\` = tous les documents` },
  { id:"fc-ch3-013", chapter:3, topic:"update", kind:"concept", front:`Opérateurs de mise à jour numériques : $inc, $mul, $min, $max`, back:`- \`$inc:{stock:-1}\` : incrémente / décrémente
- \`$mul:{prix:1.1}\` : multiplie (+10 % = ×1.1 ; −20 % = ×0.8)
- \`$min:{score:10}\` : met à jour seulement si la nouvelle valeur est **plus petite**
- \`$max:{score:100}\` : seulement si **plus grande**
Hausse de 10 % : \`db.ventes.updateMany({}, {$mul:{prix:1.1}})\`` },
  { id:"fc-ch3-014", chapter:3, topic:"update", kind:"concept", front:`$unset, $rename, $currentDate`, back:`- \`$unset:{age:""}\` : supprime complètement un champ
- \`$rename:{"nom":"name"}\` : renomme un champ sans changer sa donnée
- \`$currentDate:{dateMaj:true}\` : enregistre l'heure actuelle (timestamp)` },
  { id:"fc-ch3-015", chapter:3, topic:"update", kind:"concept", front:`Tableaux : $push, $each, $pop, $addToSet`, back:`- \`$push:{achats:"Smartphone"}\` : ajoute à la fin (crée le tableau si absent, **autorise les doublons**)
- \`$push:{achats:{$each:["Chargeur","Coque"]}}\` : plusieurs éléments d'un coup
- \`$pop:{tags:1}\` supprime le dernier ; \`-1\` le premier
- \`$addToSet:{tags:"gaming"}\` : ajoute **seulement si absent** (comme un set Python)` },
  { id:"fc-ch3-016", chapter:3, topic:"update", kind:"concept", front:`bulkWrite : quand et pourquoi ?`, back:`Modifier plusieurs documents avec des **valeurs différentes** en une seule opération.
\`db.clients.bulkWrite([{updateOne:{filter:{nom:"Bentaib"}, update:{$set:{ville:"Tanger"}}}}, {updateOne:{filter:{nom:"Moss"}, update:{$set:{ville:"Agadir"}}}}])\`
- Une seule requête réseau (vs 2 commandes séparées) → plus efficace
- Sinon : mêmes valeurs → \`updateMany\` + \`$in\`` },
  { id:"fc-ch3-017", chapter:3, topic:"update", kind:"case", front:`TP2 ex.1 : ajouter un champ Age à tous les clients (même valeur, puis valeurs différentes)`, back:`- Même valeur : \`db.clients.updateMany({}, {$set:{Age:30}})\` (filtre vide)
- Valeurs différentes : \`updateOne({_id:ObjectId("ID_CLIENT_1")}, {$set:{Age:25}})\` cas par cas (ou \`bulkWrite\`)
- Puis clients > 30 ans : \`db.clients.find({age:{$gt:30}})\`` },
  { id:"fc-ch3-018", chapter:3, topic:"update", kind:"case", front:`TP1 ex.3 q.10 : mettre à jour la date de vente de chaque produit`, back:`Corrigé : 3 \`updateOne\` (Smartphone, PC Portable, Casque → \`"2026-04-01"\`), puis version courte :
\`db.ventes.updateMany({produit:{$in:["Smartphone","PC Portable","Casque"]}}, {$set:{date:"2026-04-01"}})\`
- Données insérées avec des dates \`2026-10-xx\`, remplacées par \`2026-04-01\`
- Même date pour tous → \`updateMany\` + \`$in\`` },
  // --- DELETE ---
  { id:"fc-ch3-019", chapter:3, topic:"delete", kind:"concept", front:`deleteOne vs deleteMany`, back:`- \`deleteOne(filtre)\` : supprime le **1er** document correspondant (Casque → un seul supprimé)
- \`deleteMany(filtre)\` : supprime **tous** les correspondants
- Plus sûr : \`deleteOne({_id:ObjectId("...")})\` (\`_id\` unique)
- Ex. \`db.ventes.deleteMany({prix:{$lt:500}})\`` },
  { id:"fc-ch3-020", chapter:3, topic:"delete", kind:"case", front:`Piège : deleteMany({}) sans filtre`, back:`\`db.ventes.deleteMany({})\` **efface toute la collection** (filtre vide = tous les documents).
- Toujours un filtre précis, idéalement par \`_id\`
- Même avertissement en PyMongo : \`delete_many({})\`` },
  // --- sauvegarde ---
  { id:"fc-ch3-021", chapter:3, topic:"sauvegarde", kind:"concept", front:`Sauvegarder une base : mongodump, mongoexport, Compass`, back:`- \`mongodump --db vente --out c:\\test\` : sauvegarde complète en **BSON** (rapide, léger) — outil MongoDB Database Tools, à lancer dans le terminal système (pas mongosh)
- \`mongoexport --db vente --collection clients --out c:\\test\\clients.json\` : **JSON** lisible, une collection à la fois
- **Compass** : bouton *Export the full collection* → JSON ou CSV (Excel), aucune installation` },
  // --- PyMongo ---
  { id:"fc-ch3-022", chapter:3, topic:"pymongo", kind:"concept", front:`PyMongo : équivalents Python et curseur`, back:`- \`db.users.insert_one({...})\`, \`find({...})\`, \`update_one({...})\`, \`delete_one\` / \`delete_many\`
- Dictionnaires Python, booléens \`True\`, opérateurs entre guillemets (\`"$lt"\`)
- \`find()\` renvoie un **Cursor**, pas une liste → boucle ou \`list(cursor)\`` },
  { id:"fc-ch3-023", chapter:3, topic:"requetes", kind:"case", front:`Requête : produits gaming à plus de 2000 et clients de Tanger/Casa/Rabat`, back:`- \`db.products.find({$and:[{price:{$gt:2000}}, {tags:"gaming"}]})\`
- \`db.clients.find({city:{$in:["tanger","Casa","Rabat"]}})\`
- Combinaison ET sur produits ; \`$in\` pour liste de villes` },
  // --- Pièges d'examen ---
  { id:"fc-ch3-024", chapter:3, topic:"pieges", kind:"case", front:`Piège : oublier $set dans updateOne`, back:`\`db.clients.updateOne({nom:"Bentaib"}, {ville:"Paris"})\` → **FAUX** : remplace/écrase le document entier.
Correct : \`{$set:{ville:"Paris"}}\`.` },
  { id:"fc-ch3-025", chapter:3, topic:"pieges", kind:"case", front:`Piège : Age ≠ age (sensibilité à la casse)`, back:`Les noms de champs et les valeurs sont **sensibles à la casse**.
- TP2 corrigé ajoute \`Age\` (majuscule) puis filtre \`{age:{$gt:30}}\` → ne renverra rien
- TP3 filtre \`nom:"Moss"\` alors que TP1 insère \`"moss"\` → aucun match
- Incohérence du corrigé : utiliser un seul nom de champ` },
  { id:"fc-ch3-026", chapter:3, topic:"pieges", kind:"case", front:`Piège : corrigé TP2 « Taza ou Safi »`, back:`La question demande **Taza ou Safi**, mais le corrigé donne \`$or:[{ville:"SAfi"},{ville:"Fes"}]\` et \`$in:["SAFI","Fes"]\`.
- Incohérence du corrigé (Fes au lieu de Taza ; casse SAfi/SAFI différente)
- Version cohérente : \`{ville:{$in:["Taza","SAfi"]}}\`` },
  { id:"fc-ch3-027", chapter:3, topic:"pieges", kind:"case", front:`Piège : nombres à virgule après $mul (3300.0000000000005)`, back:`\`$mul:{prix:1.1}\` peut donner \`3300.0000000000005\` : stockage binaire (double) des décimaux.
- En production (prix) : type **Decimal128**
- Le résultat attendu reste 3000 → 3300` },
  { id:"fc-ch3-028", chapter:3, topic:"pieges", kind:"case", front:`Piège : updateOne({}) pour une remise globale`, back:`\`db.ventes.updateOne({}, {$mul:{prix:1.1}})\` ne modifie **qu'un seul** produit.
Correct : \`updateMany({}, {$mul:{prix:1.1}})\`.` },
  { id:"fc-ch3-029", chapter:3, topic:"pieges", kind:"case", front:`TP1 : base « vente », collections et données de départ`, back:`Base \`vente\`, 6 collections : clients, vendeurs, magasins, ventes, produits, catégories.
- clients : moss (Taza), Bentaib (Casablanca)
- vendeurs : Ali (électronique), mohamed (informatique), laila (électronique)
- magasins : Casa Anfa (Casablanca), Agdal Fes / jnan El Ouard (Fes)
- ventes : Smartphone 500, PC Portable 1200, Casque 150
- produits, catégories : insérées via l'interface **Compass**` },
  { id:"fc-ch3-030", chapter:3, topic:"requetes", kind:"concept", front:`Résumé : filtre vs modification dans une commande`, back:`\`db . Collection . methode( filtre , modification )\`
- \`filtre\` = **QUI** est concerné (\`{nom:"Bentaib"}\`)
- \`modification\` = **QUOI** changer (\`{$set:{ville:"Paris"}}\`)
- \`{}\` (filtre vide) = tous les documents` }
);
