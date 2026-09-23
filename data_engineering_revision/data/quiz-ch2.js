/* Chapter 2 — MongoDB : architecture & modélisation : quiz (QCM + questions ouvertes). Construit à partir du cours (pas de TD réel). */
window.DE = window.DE || {};
window.DE.quiz = window.DE.quiz || [];
window.DE.quiz.push(
  { id:"q-ch2-mcq-01", chapter:2, type:"mcq", q:`BSON désigne :`, choices:[`un format texte lisible pour l'échange`,`le format binaire de stockage interne de MongoDB`,`un langage de requête`,`un moteur de réplication`], answer:1, explain:`BSON = JSON binaire : plus rapide à analyser, plus de types (Date, Decimal128, ObjectId…).` },
  { id:"q-ch2-mcq-02", chapter:2, type:"mcq", q:`Dans un cluster fragmenté, le point d'entrée des applications est :`, choices:[`le serveur de configuration`,`un shard secondaire`,`le routeur mongos`,`WiredTiger`], answer:2, explain:`mongos route les requêtes vers les shards, en s'appuyant sur les serveurs de configuration.` },
  { id:"q-ch2-mcq-03", chapter:2, type:"mcq", q:`Que stockent les serveurs de configuration ?`, choices:[`les données utilisateur`,`les métadonnées et la configuration du cluster`,`les index uniquement`,`les sauvegardes`], answer:1, explain:`Métadonnées/config du cluster fragmenté : savoir où se trouvent les données.` },
  { id:"q-ch2-mcq-04", chapter:2, type:"mcq", q:`Si le serveur primaire d'un replica set tombe en panne :`, choices:[`le service s'arrête`,`un secondaire prend automatiquement le relais`,`mongos supprime le shard`,`les données sont perdues`], answer:1, explain:`Replica set = haute disponibilité : un secondaire devient primaire automatiquement.` },
  { id:"q-ch2-mcq-05", chapter:2, type:"mcq", q:`L'équivalent MongoDB d'une « ligne » SQL est :`, choices:[`une collection`,`un champ`,`un document`,`un shard`], answer:2, explain:`Table → collection ; ligne → document ; colonne → champ ; clé primaire → _id.` },
  { id:"q-ch2-mcq-06", chapter:2, type:"mcq", q:`L'intégration (embedded) est adaptée quand les données liées sont :`, choices:[`volumineuses et souvent modifiées`,`petites, consultées ensemble et rarement modifiées seules`,`en relation Many-to-Many`,`des milliers d'éléments`], answer:1, explain:`Embedded : petit, lu ensemble, rarement modifié indépendamment. Le reste → référence.` },
  { id:"q-ch2-mcq-07", chapter:2, type:"mcq", q:`Pourquoi stocker un snapshot du produit (nom, prix) dans une commande ?`, choices:[`gagner de la place disque`,`préserver l'historique exact même si le prix change ensuite`,`éviter d'utiliser _id`,`interdire les mises à jour`], answer:1, explain:`Dénormalisation « snapshot » : prix figé au moment de l'achat → historique de commande exact.` },
  { id:"q-ch2-mcq-08", chapter:2, type:"mcq", q:`Avec validationAction: "warn" :`, choices:[`le document invalide est refusé`,`le document invalide est accepté avec un avertissement`,`la collection est supprimée`,`seuls les nouveaux documents sont contrôlés`], answer:1, explain:`error bloque l'opération ; warn accepte mais avertit.` },

  { id:"q-ch2-open-01", chapter:2, type:"open", q:`Comparer JSON et BSON.`, model:`JSON : texte lisible, échange de données. BSON : binaire, stockage interne MongoDB, analyse plus rapide, types supplémentaires (Date, int32/64, Decimal128, ObjectId, Binary), optimisé vitesse/indexation/stockage.` },
  { id:"q-ch2-open-02", chapter:2, type:"open", q:`Décrire les composants de l'architecture MongoDB et le cheminement d'une requête en cluster fragmenté.`, model:`Composants : client (driver), mongos, mongod, serveurs de config, replica set, shards.
Flux : client → mongos → config servers (localisation) → shard (clé de partition) ; chaque shard = replica set ; panne primaire → secondaire prend le relais.` },
  { id:"q-ch2-open-03", chapter:2, type:"open", q:`Donner la correspondance entre concepts SGBDR et MongoDB (6 lignes).`, model:`Base ↔ base ; table ↔ collection ; ligne ↔ document ; colonne ↔ champ ; clé primaire ↔ _id (ObjectId) ; JOIN ↔ documents imbriqués / $lookup ; schéma fixe ↔ schéma flexible.` },
  { id:"q-ch2-open-04", chapter:2, type:"open", q:`Quand intégrer et quand référencer des données liées ?`, model:`Intégrer : petites, consultées ensemble, rarement mises à jour seules (lectures rapides, moins de requêtes).
Référencer : gros/fréquemment modifiés, Many-to-Many, grands ensembles ; réduit les doublons.` },
  { id:"q-ch2-open-05", chapter:2, type:"open", q:`Modélisation TechStore : justifier les choix pour l'adresse, les specs produit, les fournisseurs et les commandes.`, model:`- Adresse : intégrée (1:1, lue avec le profil)
- doc_id sensible : référencé (volumineux, rare, sécurité)
- Specs : intégrées (1:N petite liste statique)
- Fournisseurs : référencés N:M, bidirectionnel
- Commandes : snapshot (prix figé)` },
  { id:"q-ch2-open-06", chapter:2, type:"open", q:`Expliquer le modèle « snapshot » des commandes.`, model:`Dénormalisation : client_snapshot + produits_snapshot (nom, prix) copiés dans la commande. Prix produit modifié plus tard → commande historique reste exacte. Intégrité dans le temps.` },
  { id:"q-ch2-open-07", chapter:2, type:"open", q:`Comment imposer un schéma à une collection MongoDB ? Expliquer validationLevel et validationAction.`, model:`db.createCollection("etudiants",{validator:{$jsonSchema:{bsonType:"object",required:[...],properties:{...}}},validationLevel,validationAction}).
validationLevel : strict (tous les docs) / moderate (nouveaux docs). validationAction : error (bloque) / warn (accepte + avertit).` }
);
