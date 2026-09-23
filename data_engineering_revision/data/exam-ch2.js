/* Chapter 2 — MongoDB : architecture & modélisation : examen blanc.
   Items construits à partir du cours (Pr. Esswidi) — ce ne sont PAS des exercices de TD/TP réels. */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch2 = {
  chapter: 2,
  title: `MongoDB : architecture, BSON et modélisation (TechStore)`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch2-qcm-01", q:`Le moteur de stockage de MongoDB cité dans le cours est :`, choices:[`InnoDB`,`WiredTiger`,`RocksDB`,`MyISAM`], answer:1, correction:`b — WiredTiger` },
    { id:"e-ch2-qcm-02", q:`Un shard est :`, choices:[`un serveur de configuration`,`un replica set stockant une partie des données`,`un driver`,`un index`], answer:1, correction:`b — shard = replica set (partition des données)` },
    { id:"e-ch2-qcm-03", q:`Le routeur qui répartit les requêtes entre shards s'appelle :`, choices:[`mongod`,`mongos`,`mongoexport`,`mongodump`], answer:1, correction:`b — mongos` },
    { id:"e-ch2-qcm-04", q:`La clé primaire relationnelle correspond dans MongoDB à :`, choices:[`_id`,`$lookup`,`validator`,`shard key`], answer:0, correction:`a — _id (ObjectId)` },
    { id:"e-ch2-qcm-05", q:`Une relation Many-to-Many (produits ↔ fournisseurs) se modélise plutôt par :`, choices:[`intégration`,`référence`,`suppression de la relation`,`un seul gros document`], answer:1, correction:`b — référence (supplier_ids, éventuellement bidirectionnelle)` },
    { id:"e-ch2-qcm-06", q:`Le pattern « snapshot » sert à :`, choices:[`sauvegarder la base`,`figer les détails au moment de l'achat`,`crypter les commandes`,`compresser les documents`], answer:1, correction:`b — figer client/produits/prix au moment de l'achat` },
    { id:"e-ch2-qcm-07", q:`validationLevel: "strict" signifie :`, choices:[`seuls les nouveaux documents sont vérifiés`,`tous les documents sont vérifiés`,`aucune vérification`,`avertissement seulement`], answer:1, correction:`b — strict : tous les documents` },
    { id:"e-ch2-qcm-08", q:`Pour MongoDB, la philosophie de mise à l'échelle est :`, choices:[`verticale uniquement`,`horizontale avec partitionnement`,`aucune`,`uniquement par réplication passive`], answer:1, correction:`b — horizontale (sharding) ; SQL = traditionnellement verticale` }
  ],
  questions: [
    { id:"e-ch2-q-01", q:`Pourquoi MongoDB convient-il aux charges modernes ? (4 arguments)`, correction:`Document BSON ; schéma flexible ; évolutif + haute dispo (sharding + replica sets) ; Web, IoT, pipelines d'analyse.` },
    { id:"e-ch2-q-02", q:`Différence entre JSON et BSON.`, correction:`JSON texte/échange ; BSON binaire/stockage interne, plus rapide, plus de types (Date, Decimal128, ObjectId, Binary).` },
    { id:"e-ch2-q-03", q:`Décrire le rôle de mongos, des serveurs de configuration et des replica sets.`, correction:`mongos : routage, point d'entrée. Config servers : métadonnées du cluster. Replica set : haute dispo (primaire + secondaires, bascule auto).` },
    { id:"e-ch2-q-04", q:`Décrire le cheminement d'une requête dans un cluster fragmenté.`, correction:`Client/driver → mongos → config servers → shard désigné par la clé de partition (replica set) ; panne primaire → secondaire relais.` },
    { id:"e-ch2-q-05", q:`Donner la correspondance table/ligne/colonne/clé primaire/JOIN entre SQL et MongoDB.`, correction:`Collection / document / champ / _id / documents imbriqués ou $lookup.` },
    { id:"e-ch2-q-06", q:`Comparer intégration et référencement.`, correction:`Intégration : même document, lecture rapide, petit/lu ensemble/rarement modifié. Référence : docs distincts + ids, moins de doublons, gros/modifié/N:M.` },
    { id:"e-ch2-q-07", q:`Pourquoi l'adresse est-elle intégrée et le doc_id référencé dans Users ?`, correction:`Adresse : toujours chargée avec le profil → pas de jointure. doc_id : sensible, volumineux, rarement lu → à part (sécurité, perf).` },
    { id:"e-ch2-q-08", q:`Expliquer les paramètres de validation d'une collection.`, correction:`validator/$jsonSchema (required, properties, bsonType, minimum/maximum, pattern) ; validationLevel strict|moderate ; validationAction error|warn.` }
  ],
  vocab: [
    { id:"e-ch2-v-01", term:`BSON`, correction:`JSON binaire : format de stockage interne de MongoDB, types étendus, rapide.` },
    { id:"e-ch2-v-02", term:`collection`, correction:`Groupe de documents BSON ; équivalent d'une table, sans schéma imposé.` },
    { id:"e-ch2-v-03", term:`document`, correction:`Enregistrement JSON/BSON ; équivalent d'une ligne, aux champs libres.` },
    { id:"e-ch2-v-04", term:`ObjectId`, correction:`Type BSON de l'identifiant unique \`_id\`.` },
    { id:"e-ch2-v-05", term:`replica set`, correction:`Groupe de mongod (primaire + secondaires) assurant haute disponibilité et bascule automatique.` },
    { id:"e-ch2-v-06", term:`sharding (fragmentation)`, correction:`Partitionnement horizontal des données entre shards selon la clé de partition.` },
    { id:"e-ch2-v-07", term:`mongos`, correction:`Routeur de requêtes entre shards ; point d'entrée du cluster fragmenté.` },
    { id:"e-ch2-v-08", term:`données intégrées (embedded)`, correction:`Données associées stockées dans le même document.` },
    { id:"e-ch2-v-09", term:`données référencées`, correction:`Données liées stockées dans des documents distincts, reliées par des ids.` },
    { id:"e-ch2-v-10", term:`snapshot`, correction:`Copie figée (dénormalisation) des détails client/produit dans une commande.` }
  ],
  analysis: [
    { id:"e-ch2-a-01", scenario:`Un produit comporte 15 spécifications techniques toujours affichées avec lui.`, question:`Intégrer ou référencer ? Justifier.`, correction:`Intégrer : petite liste statique (~10-20), lue avec le produit → plus rapide qu'une table Attributs.` },
    { id:"e-ch2-a-02", scenario:`Le prix d'un ordinateur change la semaine suivant une vente.`, question:`Comment garder des commandes historiques exactes ?`, correction:`Snapshot : produits_snapshot avec prix figé dans la commande (dénormalisation).` },
    { id:"e-ch2-a-03", scenario:`Un utilisateur possède des milliers de commandes qui continuent de croître.`, question:`Comment modéliser la relation utilisateur → commandes ?`, correction:`Référence (croissance illimitée → évolutivité) ; pas d'intégration dans le document user.` },
    { id:"e-ch2-a-04", scenario:`On veut refuser l'insertion d'étudiants sans nom ni âge, ou d'âge hors [18, 30].`, question:`Quelle configuration proposer ?`, correction:`$jsonSchema : required ["nom","age"], age int min 18 max 30 ; validationLevel strict ; validationAction error.` }
  ],
  case: {
    title: `Cas TechStore : modéliser le backend d'un site d'électronique`,
    context: `TechStore veut migrer vers MongoDB : profils clients (avec adresse et pièces justificatives sensibles et volumineuses), catalogue de produits aux spécifications variées, plusieurs fournisseurs par produit (et inversement), commandes avec historique de prix exact. La charge : milliers de commandes par minute, croissance horizontale attendue.`,
    tasks: [
      { id:"e-ch2-c-01", prompt:`1. Proposer les collections et justifier le choix MongoDB (vs SGBDR).`, correction:`Users, Produits, Commandes (+ Fournisseurs). Schéma flexible (specs variées), lecture rapide sans jointures, scalabilité horizontale (sharding), haute dispo (replica sets).` },
      { id:"e-ch2-c-02", prompt:`2. Modéliser la collection Users (relations 1:1).`, correction:`address intégrée {city, zip} ; doc_id référencé (document sensible et volumineux stocké à part).` },
      { id:"e-ch2-c-03", prompt:`3. Modéliser Produits et Fournisseurs (1:N et N:M).`, correction:`specs intégrées [{k,v}] ; supplier_ids référencés dans le produit ; supplied_product_ids dans le fournisseur (bidirectionnel).` },
      { id:"e-ch2-c-04", prompt:`4. Modéliser Commandes avec historique de prix exact.`, correction:`client_snapshot {id, nom, adresse} + produits_snapshot [{nom, prix}] + date + status. Prix figé.` },
      { id:"e-ch2-c-05", prompt:`5. Décrire l'architecture de déploiement pour la haute dispo et la charge.`, correction:`Clients → mongos → shards (chacun replica set : 1 primaire + secondaires) ; config servers pour les métadonnées ; clé de partition ; bascule auto si panne primaire.` },
      { id:"e-ch2-c-06", prompt:`6. Écrire un validateur $jsonSchema pour une collection d'étudiants (nom, age 18-30 obligatoires, email valide).`, correction:`required ["nom","age"] ; age bsonType int, min 18, max 30 ; email string, pattern "^.+@.+$" ; strict + error.` }
    ],
    deliverables: [
      `Schéma des collections avec exemples de documents JSON`,
      `Tableau des relations : embedded vs referenced + justification`,
      `Schéma d'architecture (mongos, config servers, shards/replica sets)`,
      `Exemple de validator $jsonSchema`
    ]
  }
};
