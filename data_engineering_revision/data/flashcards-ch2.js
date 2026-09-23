/* Chapter 2 — MongoDB : architecture & modélisation : flashcards (source : cours NoSQL, Pr. Esswidi, p.25-44 + validation p.49). */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- Principes ---
  { id:"fc-ch2-001", chapter:2, topic:"principes", kind:"concept", front:`Pourquoi MongoDB ? (4 arguments du cours)`, back:`- **Modèle de document (BSON)** : structures type JSON, naturel pour les applis modernes — \`{"name":"Alice","age":23}\`
- **Schéma flexible** : pas de table rigide, les champs s'adaptent
- **Évolutif et haute dispo** : partitionnement horizontal + replica sets
- **Charges modernes** : applis Web, IoT, pipelines d'analyse` },
  { id:"fc-ch2-002", chapter:2, topic:"bson", kind:"definition", front:`JSON`, back:`Format **texte** lisible, utilisé pour l'échange de données.
- Ex : \`{ "nom":"Sara", "âge":25, "compétences":["Python","IA"] }\`` },
  { id:"fc-ch2-003", chapter:2, topic:"bson", kind:"definition", front:`BSON (JSON binaire)`, back:`Format de stockage **interne** de MongoDB.
- Plus rapide à analyser (binaire)
- Plus de types : Date, entiers 32/64 bits, **Decimal128**, **ObjectId**, Binary…
- Optimisé pour vitesse, indexation, efficacité de stockage` },
  { id:"fc-ch2-004", chapter:2, topic:"bson", kind:"concept", front:`JSON vs BSON : différences`, back:`| | JSON | BSON |
|---|---|---|
| Nature | Texte lisible | Binaire |
| Rôle | Échange de données | Stockage interne MongoDB |
| Types | Limités | + Date, int32/64, Decimal128, ObjectId, Binary |
| Vitesse | Analyse plus lente | Analyse rapide, optimisé indexation |` },
  { id:"fc-ch2-005", chapter:2, topic:"bson", kind:"concept", front:`Comment MongoDB stocke les données en interne ?`, back:`- Chaque document stocké en **BSON**
- **Collections** = groupes de documents BSON
- Espace alloué en « extensions/pages » et géré via le moteur **WiredTiger**` },
  { id:"fc-ch2-006", chapter:2, topic:"bson", kind:"definition", front:`WiredTiger`, back:`Moteur de stockage de MongoDB : gère l'allocation de l'espace (extensions/pages) pour les documents BSON.` },
  { id:"fc-ch2-007", chapter:2, topic:"bson", kind:"definition", front:`_id (ObjectId)`, back:`Identifiant unique de chaque document ; équivalent de la **clé primaire** relationnelle. Type BSON **ObjectId** par défaut.` },

  // --- Architecture ---
  { id:"fc-ch2-008", chapter:2, topic:"architecture", kind:"concept", front:`Composants de l'architecture MongoDB (6)`, back:`- **Client/Application** : requêtes via pilotes (drivers)
- **Routeur mongos** : répartit les requêtes entre shards ; point d'entrée en cluster fragmenté
- **mongod** : processus principal (CRUD, indexation, requêtes)
- **Serveurs de configuration** : métadonnées/config du cluster fragmenté
- **Replica Set** : groupe de mongod, haute dispo (primaire + secondaires)
- **Shards** : chaque partition = un replica set stockant une partie des données` },
  { id:"fc-ch2-009", chapter:2, topic:"architecture", kind:"definition", front:`mongos (Mongos Router)`, back:`Routeur : répartit les requêtes entre les shards ; **point d'entrée des applications** dans un cluster fragmenté. Consulte les serveurs de configuration pour savoir où sont les données.` },
  { id:"fc-ch2-010", chapter:2, topic:"architecture", kind:"definition", front:`mongod`, back:`Processus principal du serveur MongoDB : gère les opérations **CRUD**, l'**indexation** et les requêtes.` },
  { id:"fc-ch2-011", chapter:2, topic:"architecture", kind:"definition", front:`Serveurs de configuration (config servers)`, back:`Stockent les **métadonnées et la configuration** du cluster fragmenté (où se trouvent les données).` },
  { id:"fc-ch2-012", chapter:2, topic:"architecture", kind:"definition", front:`Replica Set`, back:`Groupe de processus mongod assurant la **haute disponibilité** : 1 primaire + des secondaires. Si le primaire tombe, un secondaire prend automatiquement le relais.` },
  { id:"fc-ch2-013", chapter:2, topic:"architecture", kind:"definition", front:`Shard`, back:`Partition des données ; **chaque shard est un replica set** qui stocke une partie du jeu de données (réparti via la clé de partition).` },
  { id:"fc-ch2-014", chapter:2, topic:"architecture", kind:"concept", front:`Cheminement d'une requête dans un cluster fragmenté (5 étapes)`, back:`1. Le client envoie la requête via un driver
2. Elle arrive à **mongos** (couche de routage)
3. mongos interroge les **serveurs de configuration** pour localiser les données
4. Données réparties entre **shards** par la **clé de partition** ; chaque shard = replica set
5. Panne du primaire → un **secondaire** prend le relais automatiquement` },
  { id:"fc-ch2-015", chapter:2, topic:"architecture", kind:"case", front:`Le serveur primaire d'un shard tombe en panne : que se passe-t-il ?`, back:`Le replica set du shard **élit/promeut un secondaire** qui devient primaire automatiquement → continuité de service (haute disponibilité), sans intervention.` },

  // --- SQL vs MongoDB ---
  { id:"fc-ch2-016", chapter:2, topic:"sql-vs-mongo", kind:"concept", front:`Correspondance SGBDR ↔ MongoDB`, back:`| SGBDR | MongoDB |
|---|---|
| Base de données | Base de données |
| Table | Collection |
| Ligne / enregistrement | Document (BSON/JSON) |
| Colonne | Champ (field) |
| Clé primaire | \`_id\` (ObjectId) |
| JOIN | Documents imbriqués / \`$lookup\` |
| Schéma fixe | Schéma flexible (schema-less) |` },
  { id:"fc-ch2-017", chapter:2, topic:"sql-vs-mongo", kind:"concept", front:`SQL vs MongoDB : opérations CRUD équivalentes`, back:`| Tâche | SQL | MongoDB |
|---|---|---|
| Créer | INSERT INTO … | insertOne() |
| Lire | SELECT * FROM … | find() |
| Modifier | UPDATE … SET | updateOne() |
| Supprimer | DELETE FROM | deleteOne() |` },
  { id:"fc-ch2-018", chapter:2, topic:"sql-vs-mongo", kind:"concept", front:`SQL vs MongoDB : 4 différences de philosophie`, back:`- **Schéma** : SQL = tables prédéfinies ; MongoDB = documents qui évoluent
- **Modèle** : SQL = relations + jointures ; MongoDB = intégration ou référence dans des documents JSON
- **Requêtes** : SQL déclaratif (SELECT…) ; MongoDB = appels de fonction JS/Python (find, insertOne…)
- **Scalabilité** : SQL vertical ; MongoDB horizontale (partitionnement)` },
  { id:"fc-ch2-019", chapter:2, topic:"schema", kind:"concept", front:`Schéma dynamique : que montre l'exemple students ?`, back:`\`insertMany\` de 3 étudiants aux champs différents (Alice : age ; Bob : email + roles ; Carol : age + notes imbriquées) — **tous acceptés sans erreur**.
- Chaque document peut avoir des champs différents ; pas de définition de table requise` },

  // --- Modélisation ---
  { id:"fc-ch2-020", chapter:2, topic:"modelisation", kind:"definition", front:`Intégration (Embedded data)`, back:`Stocker les données associées **dans le même document**.
- Lectures rapides, moins de requêtes
- Idéal si les données liées sont : **petites**, **consultées ensemble**, **rarement mises à jour indépendamment**` },
  { id:"fc-ch2-021", chapter:2, topic:"modelisation", kind:"definition", front:`Référencement (Referenced data)`, back:`Données associées dans des **documents distincts**, reliés par des identifiants.
- Réduit les doublons
- Adapté aux sous-documents **volumineux ou fréquemment modifiés**
- Convient aux relations **Many-to-Many** et aux grands ensembles (milliers d'éléments)` },
  { id:"fc-ch2-022", chapter:2, topic:"modelisation", kind:"concept", front:`Intégration ou référence : comment choisir ?`, back:`Le choix dépend de la **taille des données**, du **type de relation** et des **modèles de lecture/écriture**.
- Petit + lu ensemble + peu modifié → intégrer
- Gros / très modifié / N:M / illimité → référencer` },
  { id:"fc-ch2-023", chapter:2, topic:"techstore", kind:"concept", front:`Scénario TechStore : objectifs de modélisation`, back:`Backend d'un site de vente d'électronique.
- Réponse rapide (milliers de commandes/min), données variées (specs produit complexes), évolutivité horizontale
- Objectif : groupe de données liées, optimisé pour la lecture, **éviter les jointures** (\`group_related_data\`, \`optimize_for_read\`, \`avoid_joins\`)
- 3 collections : Users, Produits, Commandes` },
  { id:"fc-ch2-024", chapter:2, topic:"techstore", kind:"case", front:`TechStore, relations 1:1 : adresse intégrée vs doc_id référencé`, back:`- **Adresse intégrée** (\`address:{city,zip}\`) : presque toujours nécessaire au chargement du profil → pas de jointure, lecture rapide
- **doc_id référencé** (\`"doc_id":"doc_555"\`) : documents sensibles, volumineux, rarement consultés → stockés à part (sécurité + performance)` },
  { id:"fc-ch2-025", chapter:2, topic:"techstore", kind:"case", front:`TechStore, relation 1:N : spécifications produit intégrées`, back:`Un produit a un ensemble **fini** de specs (~10-20) : \`"specs":[{"k":"RAM","v":"32 Go"},{"k":"CPU","v":"i9"}]\`.
- Beaucoup plus rapide de les lire dans le document que dans une table « Attributs » séparée` },
  { id:"fc-ch2-026", chapter:2, topic:"techstore", kind:"case", front:`TechStore, relation N:M : les fournisseurs`, back:`Fournisseurs = entités distinctes → **référencés** (\`"supplier_ids":["supp_01","supp_02"]\` dans le produit).
- **Référencement bidirectionnel** : la collection fournisseurs stocke aussi \`supplied_product_ids\`
- Permet « tous les produits vendus par TechDistro » sans parcourir toute la collection Produits` },
  { id:"fc-ch2-027", chapter:2, topic:"techstore", kind:"definition", front:`Modèle « Snapshot » des commandes`, back:`Dénormalisation : on **intègre** dans la commande les détails client/produits **tels qu'au moment de l'achat** (\`client_snapshot\`, \`produits_snapshot\` avec prix figé).
- Si le prix change ensuite, l'historique de la commande reste **exact**
- Préserve l'intégrité des données dans le temps` },
  { id:"fc-ch2-028", chapter:2, topic:"techstore", kind:"concept", front:`Résumé des relations TechStore`, back:`| Relation | Mise en œuvre | Pourquoi |
|---|---|---|
| 1:1 | Adresse (intégrée) | Vitesse (lecture conjointe) |
| 1:1 | doc_id (référence) | Sécurité et performance |
| 1:N | Specs produit (intégration) | Efficacité (petite liste statique) |
| 1:N | Commandes utilisateur (référence) | Évolutivité (croissance illimitée) |
| N:M | Articles de commande (référence) | Intégrité des données (instantané) |` },

  // --- Validation ---
  { id:"fc-ch2-029", chapter:2, topic:"validation", kind:"concept", front:`Créer une collection à schéma fixe avec \`$jsonSchema\``, back:`\`\`\`
db.createCollection("etudiants", {
  validator: { $jsonSchema: {
    bsonType: "object",
    required: ["nom","age"],
    properties: {
      nom: { bsonType:"string" },
      age: { bsonType:"int", minimum:18, maximum:30 },
      email: { bsonType:"string", pattern:"^.+@.+$" }
  }}},
  validationLevel: "strict",
  validationAction: "error"
})
\`\`\`` },
  { id:"fc-ch2-030", chapter:2, topic:"validation", kind:"definition", front:`validationLevel : strict vs moderate`, back:`- **strict** → vérifie **tous** les documents
- **moderate** → vérifie seulement les **nouveaux** documents (d'après le cours)` },
  { id:"fc-ch2-031", chapter:2, topic:"validation", kind:"definition", front:`validationAction : error vs warn`, back:`- **error** → **bloque** l'opération (document invalide refusé)
- **warn** → **accepte** mais affiche un avertissement` }
);
