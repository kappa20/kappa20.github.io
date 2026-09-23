/* Chapter 4 — Cassandra : flashcards. */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- Présentation & architecture ---
  { id:"fc-ch4-001", chapter:4, topic:"presentation", kind:"definition", front:`Définir : Apache Cassandra`, back:`Base NoSQL **distribuée**, haute performance, extrêmement évolutive, tolérante aux fautes, non relationnelle.
- Usage : base temps réel **ou** lecture intensive pour systèmes décisionnels
- Origine : BigTable (Google) + DynamoDB (Amazon), incubée chez Facebook, open source Apache` },
  { id:"fc-ch4-002", chapter:4, topic:"architecture", kind:"concept", front:`Architecture de Cassandra : pair-à-pair (peer-to-peer)`, back:`- Système distribué composé de **nœuds identiques**
- **Pas de NameNode / nœud maître** → pas de SPOF
- Structure orientée colonnes, à l'image de BigTable
- Lecture/écriture sur **n'importe quel nœud**, indépendamment de l'emplacement des données` },
  { id:"fc-ch4-003", chapter:4, topic:"architecture", kind:"concept", front:`Protocole Gossip`, back:`Communication entre les nœuds du cluster : échange d'informations d'état **chaque seconde**.
- Détecte les nœuds en panne, diffuse la topologie
- Base de la décentralisation (pas de coordinateur central)` },
  { id:"fc-ch4-004", chapter:4, topic:"architecture", kind:"definition", front:`Vocabulaire : keyspace, column family, colonne`, back:`- **Keyspace** ≈ database
- **Column family** ≈ table (en CQL : simplement *Table*) ; schéma plus flexible et dynamique qu'une table
- **Colonne** : (dans les slides) équivalente à un enregistrement, indexée par une clé ; d'autres champs indexables **à la demande**` },
  { id:"fc-ch4-005", chapter:4, topic:"architecture", kind:"concept", front:`Données partitionnées et répliquées par défaut`, back:`- Partitionnées entre les nœuds du cluster
- Répliquées → tolérance aux fautes maximale
- L'utilisateur contrôle le **nombre de répliques** voulu` },
  // --- Partitionnement ---
  { id:"fc-ch4-006", chapter:4, topic:"partitionnement", kind:"concept", front:`Partitionnement : principe`, back:`Chaque nœud est responsable d'une partie de la base. Les données insérées dans une famille de colonnes sont placées sur un nœud **selon la clé de colonne** (clé de partition).
Stratégie définie dans \`cassandra.yaml\`.` },
  { id:"fc-ch4-007", chapter:4, topic:"partitionnement", kind:"concept", front:`Partitionnement aléatoire (random)`, back:`- **Par défaut, recommandé**
- Répartit les données le plus équitablement possible
- Hachage de chaque clé : **MD5** (ou **Murmur3**)` },
  { id:"fc-ch4-008", chapter:4, topic:"partitionnement", kind:"concept", front:`Partitionnement ordonné (ordered)`, back:`- Sauvegarde les clés **dans l'ordre** à travers les nœuds
- Permet des requêtes par intervalle
- **Risque** : mauvaise répartition de charge (nœuds avec plus de données que d'autres)` },
  // --- Réplication ---
  { id:"fc-ch4-009", chapter:4, topic:"replication", kind:"definition", front:`Définir : facteur de réplication (RF)`, back:`Nombre de copies de chaque donnée à travers les nœuds, fixé à la **création du keyspace**.
- Évite le SPOF
- Ex. \`replication_factor: 3\` → chaque donnée sur 3 nœuds` },
  { id:"fc-ch4-010", chapter:4, topic:"replication", kind:"concept", front:`SimpleStrategy`, back:`- Réplique originale sur le nœud désigné par le partitionneur
- Réplique suivante sur le nœud suivant de l'anneau (sens horaire)
- **Aucune** considération de data-center ni de baie → adaptée à un **seul datacenter**` },
  { id:"fc-ch4-011", chapter:4, topic:"replication", kind:"concept", front:`Stratégie par topologie du réseau (NetworkTopologyStrategy)`, back:`- Plus sophistiquée, contrôle de l'emplacement des répliques
- Parcourt l'anneau en cherchant un nœud dans une **autre baie** ; sinon même baie
- Groupe de réplication spécifié pour distinguer plusieurs **datacenters**` },
  { id:"fc-ch4-012", chapter:4, topic:"replication", kind:"definition", front:`Définir : Snitch et ses types`, back:`Définit comment les nœuds sont groupés dans le réseau (baies, datacenters).
- **Simple** : stratégie simple
- **RackInferring** : déduit de l'IP → 2e octet = datacenter, 3e octet = baie
- **PropertyFile** : décrit dans \`cassandra-topology.properties\`
- **Gossiping PropertyFile** : met à jour via Gossip — **recommandé en production**` },
  // --- Consistance ---
  { id:"fc-ch4-013", chapter:4, topic:"consistance", kind:"concept", front:`Consistance ajustable (tunable consistency)`, back:`Extension de la consistance éventuelle : choix **par opération** entre consistance forte ou éventuelle (pas une stratégie globale).
- Ex. lecture QUORUM : \`SELECT * FROM users USING CONSISTENCY QUORUM WHERE state='TX'\`
- Gérée aussi entre plusieurs datacenters` },
  { id:"fc-ch4-014", chapter:4, topic:"consistance", kind:"concept", front:`Niveaux de consistance en écriture`, back:`Nombre de répliques devant réussir avant le commit au client :
- **ANY** : au moins un nœud (hint accepté) — dispo max, consistance min
- **ONE** (défaut CQL) : commit log + memTable d'≥1 réplique
- **QUORUM** : \`(RF/2)+1\` répliques
- **LOCAL_QUORUM** : quorum du datacenter du coordinateur
- **EACH_QUORUM** : quorum dans **chaque** datacenter
- **ALL** : toutes les répliques — consistance max, dispo min` },
  { id:"fc-ch4-015", chapter:4, topic:"consistance", kind:"concept", front:`Calcul du quorum (RF = 3, 5…)`, back:`Quorum = ⌊RF/2⌋ + 1 (division entière ; la slide parle de « pourcentage » mais c'est un **nombre** de répliques).
- RF=3 → 2
- RF=5 → 3
- RF=2 → 2 ; RF=4 → 3
Avec RF=3 on tolère la perte d'1 réplique en QUORUM.` },
  { id:"fc-ch4-016", chapter:4, topic:"consistance", kind:"concept", front:`Niveaux de consistance en lecture`, back:`Combien de répliques répondent avant de retourner le résultat :
- **ONE** (défaut) : réplique la plus proche (selon snitch) — consistance faible, dispo max
- **QUORUM** : résultat le plus récent parmi \`(RF/2)+1\`
- **LOCAL_QUORUM** : évite la latence inter-datacenters
- **EACH_QUORUM** / **ALL** : ALL = consistance max, dispo min
La donnée la plus récente est choisie **selon le temps** (timestamp).` },
  { id:"fc-ch4-017", chapter:4, topic:"consistance", kind:"concept", front:`Read Repair`, back:`À la lecture, le nœud coordinateur compare **en arrière-plan** toutes les répliques.
- Si incohérence : envoie aux répliques une demande de mise à jour et renvoie la donnée la plus récente
- Assure que les données **fréquemment lues** soient cohérentes
- Configurable par famille de colonnes` },
  { id:"fc-ch4-018", chapter:4, topic:"consistance", kind:"definition", front:`Définir : Hinted Handoff`, back:`Mécanisme d'écriture quand des répliques sont indisponibles : un **indice (hint)** est sauvegardé sur un nœud réplique actif pour mettre à jour les nœuds en panne à leur retour.
- Si **aucune** réplique n'est disponible, ANY permet au coordinateur de stocker le hint, mais la donnée n'est lisible qu'au retour d'une réplique` },
  // --- Écriture ---
  { id:"fc-ch4-019", chapter:4, topic:"ecriture", kind:"concept", front:`Chemin d'écriture : commit log → MemTable → SSTable`, back:`1. Écriture dans le **commit log** (durabilité)
2. Écriture en mémoire dans la **MemTable**
3. MemTable pleine → sauvegarde sur disque en **SSTable** (Sorted Strings Table)
- Cassandra = la base NoSQL **la plus rapide en écriture**` },
  { id:"fc-ch4-020", chapter:4, topic:"ecriture", kind:"concept", front:`Atomicité dans Cassandra`, back:`- Pas de transactions relationnelles (commit / rollback)
- Écritures **atomiques au niveau des colonnes** : soit toutes les colonnes sont modifiées, soit aucune` },
  // --- CQL ---
  { id:"fc-ch4-021", chapter:4, topic:"cql", kind:"concept", front:`CQL vs SQL : CRUD et limites`, back:`CQL proche de SQL : CREATE/ALTER/DROP (keyspaces, tables, index) ; INSERT/UPDATE/DELETE ; SELECT.
**Limites** : pas de \`GROUP BY\` ; \`ORDER BY\` seulement sur clés composées (2e clé de la clé primaire) ; pas de jointures.` },
  { id:"fc-ch4-022", chapter:4, topic:"cql", kind:"concept", front:`Deux interfaces : Cassandra CLI et CQL`, back:`- **CLI** : interface de commande pour créer objets/entrées et manipuler les données
- **CQL** (cqlsh) : langage proche de SQL, \`USING CONSISTENCY\` pour choisir le niveau par opération` },
  { id:"fc-ch4-023", chapter:4, topic:"cql", kind:"concept", front:`Exemples CQL : INSERT / SELECT / UPDATE / DELETE`, back:`- \`INSERT INTO etudiants (id, nom, prenom, age) VALUES (uuid(), 'mohamed', 'essaghir', 35);\`
- \`SELECT * FROM etudiants;\`
- \`UPDATE etudiants SET age = 36 WHERE id = …;\`
- \`DELETE FROM etudiants WHERE id = …;\`
- Clé \`uuid()\` comme identifiant` },
  { id:"fc-ch4-024", chapter:4, topic:"cql", kind:"case", front:`Modèle IoT : PRIMARY KEY (capteur, temps)`, back:`\`CREATE TABLE mesures (capteur TEXT, temps TIMESTAMP, temperature DOUBLE, PRIMARY KEY(capteur, temps));\`
- \`capteur\` = **clé de partition** : tout C1 dans la même partition
- \`temps\` = colonne de **clustering** : mesures triées 10:00, 10:01…` },
  { id:"fc-ch4-025", chapter:4, topic:"cql", kind:"concept", front:`Analogie dictionnaire Python`, back:`\`notes = {1:{"Java":18,"BD":16}, 2:{"Java":14}}\`
- 1 et 2 = **clés de partition**
- Java, BD, Python = colonnes
- Valeurs = notes : lignes de largeur variable` },
  // --- Docker ---
  { id:"fc-ch4-026", chapter:4, topic:"docker", kind:"case", front:`Mini-cluster Cassandra avec Docker : commandes`, back:`- \`docker pull cassandra\` ; \`docker network create cassandra-net\`
- Nœud 1 : \`docker run -d --name cassandra1 --network cassandra-net cassandra\`
- Nœuds 2, 3 : idem + \`-e CASSANDRA_SEEDS=cassandra1\`
- Vérifier : \`docker exec -it cassandra1 nodetool status\`
- Nœud unique : \`docker run --name cassandra-node -d -p 9042:9042 cassandra\`` },
  { id:"fc-ch4-027", chapter:4, topic:"docker", kind:"case", front:`Keyspace distribué et table de test`, back:`\`CREATE KEYSPACE university WITH replication = {'class':'SimpleStrategy','replication_factor':3};\`
\`USE university; CREATE TABLE students (id UUID PRIMARY KEY, name TEXT, age INT);\`
- Connexion : \`docker exec -it cassandra1 cqlsh\`
- Insertion : \`INSERT … VALUES (uuid(), 'Ayoub', 25)\`` },
  { id:"fc-ch4-028", chapter:4, topic:"docker", kind:"case", front:`Test de tolérance aux pannes : docker stop cassandra2`, back:`\`docker stop cassandra2\` puis \`nodetool status\` :
- \`UN cassandra1\` (Up/Normal), \`DN cassandra2\` (**Down**), \`UN cassandra3\`
- \`SELECT * FROM students\` fonctionne toujours : RF=3, données disponibles sur les autres nœuds` },
  // --- Récapitulatif ---
  { id:"fc-ch4-029", chapter:4, topic:"recap", kind:"concept", front:`Points forts de Cassandra (récapitulatif)`, back:`- Très grande scalabilité (Go → Po), gain linéaire par ajout de nœuds
- **Pas de SPOF**, réplication facile entre datacenters
- Pas de couche de cache séparée (RAM des nœuds)
- CQL proche de SQL, schéma flexible
- Consistance ajustable par opération
- Compression **Snappy** (Google) par famille de colonnes, sans pénalité de performance` },
  { id:"fc-ch4-030", chapter:4, topic:"recap", kind:"case", front:`Choisir : cluster RF=3, quel niveau de consistance pour lecture ET écriture forte ?`, back:`Consistance forte si **R + W > RF**.
- QUORUM en écriture (2) + QUORUM en lecture (2) → 4 > 3 ✔ : bon compromis consistance/disponibilité
- ALL en écriture + ONE en lecture → aussi cohérent mais écriture bloquée si un nœud est down` }
);
