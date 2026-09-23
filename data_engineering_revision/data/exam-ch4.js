/* Chapter 4 — Cassandra : examen blanc.
   Pas de TP officiel sur Cassandra : items construits à partir du cours (Pr. Esswidi), y compris la
   démonstration du mini-cluster Docker. */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch4 = {
  chapter: 4,
  title: `Cassandra : architecture, réplication, consistance et mini-cluster Docker`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch4-qcm-01", q:`Cassandra est une combinaison de :`, choices:[`MySQL et Oracle`,`BigTable (Google) et DynamoDB (Amazon)`,`HDFS et Hive`,`Redis et Neo4j`], answer:1, correction:`b — BigTable + DynamoDB, incubée chez Facebook, Apache` },
    { id:"e-ch4-qcm-02", q:`Dans Cassandra, un « keyspace » est l'équivalent :`, choices:[`d'une table`,`d'une base de données`,`d'une colonne`,`d'un index`], answer:1, correction:`b — keyspace ≈ database ; column family ≈ table` },
    { id:"e-ch4-qcm-03", q:`Le partitionnement aléatoire utilise :`, choices:[`un tri alphabétique`,`un hachage MD5 (ou Murmur3) de la clé`,`la taille des données`,`l'adresse IP du client`], answer:1, correction:`b — MD5/Murmur3, répartition équitable, défaut recommandé` },
    { id:"e-ch4-qcm-04", q:`Avec RF=5, le QUORUM correspond à :`, choices:[`2 répliques`,`3 répliques`,`4 répliques`,`5 répliques`], answer:1, correction:`b — (5/2)+1 = 2+1 = 3` },
    { id:"e-ch4-qcm-05", q:`Le niveau de consistance ONE en lecture :`, choices:[`interroge toutes les répliques`,`obtient la réponse de la réplique la plus proche selon le snitch`,`impose un quorum`,`est impossible en CQL`], answer:1, correction:`b — ONE (défaut CQL), la plus proche via snitch : consistance faible, dispo max` },
    { id:"e-ch4-qcm-06", q:`Le snitch recommandé en production est :`, choices:[`Simple SNITCH`,`Rack-Inferring SNITCH`,`Property File SNITCH`,`Gossiping Property File SNITCH`], answer:3, correction:`d — met à jour automatiquement les nœuds via Gossip` },
    { id:"e-ch4-qcm-07", q:`Après \`docker stop cassandra2\`, \`nodetool status\` affiche pour cassandra2 :`, choices:[`UN`,`DN`,`UL`,`absent`], answer:1, correction:`b — DN = Down/Normal ; cassandra1 et cassandra3 restent UN` },
    { id:"e-ch4-qcm-08", q:`Quelle affirmation sur CQL est vraie ?`, choices:[`GROUP BY est totalement supporté`,`ORDER BY est libre sur toute colonne`,`Il ressemble à SQL mais ne supporte pas GROUP BY`,`Il ne permet pas de choisir la consistance`], answer:2, correction:`c — proche de SQL ; pas de GROUP BY, ORDER BY limité aux clés composées` }
  ],
  questions: [
    { id:"e-ch4-q-01", q:`Décrire l'architecture de Cassandra et citer trois caractéristiques majeures.`, correction:`Pair-à-pair, nœuds identiques, pas de maître ; orientée colonnes ; données partitionnées + répliquées ; lecture/écriture partout ; Gossip chaque seconde ; RF choisi par l'utilisateur.` },
    { id:"e-ch4-q-02", q:`Expliquer les stratégies de partitionnement (aléatoire, ordonné) et leurs risques.`, correction:`Aléatoire : défaut, MD5/Murmur3, équitable. Ordonné : clés triées entre nœuds, risque de déséquilibre de charge. Configuré dans cassandra.yaml.` },
    { id:"e-ch4-q-03", q:`Différence entre SimpleStrategy et stratégie par topologie du réseau ?`, correction:`Simple : nœud suivant de l'anneau, un seul datacenter. Topologie : baie différente, plusieurs datacenters, contrôle fin des répliques.` },
    { id:"e-ch4-q-04", q:`Qu'est-ce qu'un snitch ? Citer ses types.`, correction:`Définit le groupement des nœuds en baies/datacenters. Simple, Rack-Inferring (2e octet IP = DC, 3e = baie), Property File, Gossiping Property File (prod).` },
    { id:"e-ch4-q-05", q:`Donner les niveaux de consistance en écriture et en lecture avec leur compromis.`, correction:`ANY (écriture), ONE (défaut), QUORUM ((RF/2)+1), LOCAL_QUORUM, EACH_QUORUM, ALL. ANY/ONE = dispo max / consistance min ; ALL = consistance max / dispo min ; QUORUM = meilleur compromis.` },
    { id:"e-ch4-q-06", q:`Expliquer le fonctionnement de l'écriture : commit log, MemTable, SSTable, hinted handoff.`, correction:`Commit log (durabilité) → MemTable → flush SSTable. Hinted handoff : hint sur un nœud actif pour rattraper la réplique en panne. Écritures atomiques par colonne.` },
    { id:"e-ch4-q-07", q:`Qu'est-ce que le Read Repair ?`, correction:`Coordinateur compare les répliques en arrière-plan, met à jour les incohérentes, renvoie la donnée la plus récente ; configurable par famille de colonnes.` },
    { id:"e-ch4-q-08", q:`Quelles sont les limites de CQL par rapport à SQL ? Donner les commandes CRUD.`, correction:`Pas de GROUP BY ; ORDER BY seulement sur clés composées (clustering) ; pas de jointures. CRUD : INSERT, SELECT, UPDATE, DELETE ; objets : CREATE, ALTER, DROP.` }
  ],
  vocab: [
    { id:"e-ch4-v-01", term:`keyspace`, correction:`Équivalent d'une base de données ; porte le facteur de réplication.` },
    { id:"e-ch4-v-02", term:`column family`, correction:`Équivalent d'une table (Table en CQL), schéma flexible.` },
    { id:"e-ch4-v-03", term:`Gossip`, correction:`Protocole d'échange d'état entre nœuds chaque seconde.` },
    { id:"e-ch4-v-04", term:`facteur de réplication`, correction:`Nombre de copies de chaque donnée dans le cluster.` },
    { id:"e-ch4-v-05", term:`snitch`, correction:`Définit la topologie (baies, datacenters) pour le placement des répliques.` },
    { id:"e-ch4-v-06", term:`quorum`, correction:`(RF/2)+1 répliques (division entière) devant répondre.` },
    { id:"e-ch4-v-07", term:`hinted handoff`, correction:`Indice stocké pour mettre à jour une réplique en panne à son retour.` },
    { id:"e-ch4-v-08", term:`read repair`, correction:`Réparation en arrière-plan des répliques incohérentes lors d'une lecture.` },
    { id:"e-ch4-v-09", term:`MemTable / SSTable`, correction:`Table en mémoire, puis Sorted Strings Table sur disque (après commit log).` },
    { id:"e-ch4-v-10", term:`SPOF`, correction:`Single Point of Failure : absent de Cassandra (pair-à-pair).` }
  ],
  analysis: [
    { id:"e-ch4-a-01", scenario:`Un cluster de 3 nœuds, RF=3. Le nœud cassandra2 est arrêté.`, question:`Les données restent-elles accessibles en QUORUM ? En ALL ?`, correction:`QUORUM = 2 répliques vivantes → OK. ALL exige 3 → échoue. Le cours montre que SELECT reste disponible.` },
    { id:"e-ch4-a-02", scenario:`Application de messagerie, écritures massives, tolérance à une cohérence temporaire.`, question:`Quel niveau d'écriture choisir ?`, correction:`ONE (défaut) ou ANY : latence min, dispo max ; hinted handoff/read repair rattrapent. QUORUM si besoin de cohérence.` },
    { id:"e-ch4-a-03", scenario:`Partitionneur ordonné utilisé pour une clé « date » ; un nœud est surchargé.`, question:`Cause et remède ?`, correction:`Clés voisines dans le même nœud → déséquilibre. Utiliser le partitionneur aléatoire (MD5/Murmur3).` },
    { id:"e-ch4-a-04", scenario:`Un utilisateur écrit \`SELECT dept, count(*) FROM emp GROUP BY dept\`.`, question:`Pourquoi cela échoue-t-il ?`, correction:`CQL ne supporte pas GROUP BY ; Cassandra est conçue autour de requêtes par clé de partition. Modéliser la table selon la requête.` }
  ],
  case: {
    title: `Cas : mini-cluster de 3 nœuds pour l'université`,
    context: `On veut déployer un cluster Cassandra de 3 nœuds avec Docker pour stocker des étudiants, tolérer la panne d'un nœud, et enregistrer aussi des mesures de capteurs de température.`,
    tasks: [
      { id:"e-ch4-c-01", prompt:`1. Donner les commandes Docker pour créer le réseau et les 3 nœuds.`, correction:`\`docker network create cassandra-net\` ; cassandra1 : \`docker run -d --name cassandra1 --network cassandra-net cassandra\` ; cassandra2/3 idem avec \`-e CASSANDRA_SEEDS=cassandra1\` ; \`docker exec -it cassandra1 nodetool status\`.` },
      { id:"e-ch4-c-02", prompt:`2. Créer le keyspace « university » distribué et la table « students ».`, correction:`\`CREATE KEYSPACE university WITH replication={'class':'SimpleStrategy','replication_factor':3};\` ; \`USE university; CREATE TABLE students (id UUID PRIMARY KEY, name TEXT, age INT);\`` },
      { id:"e-ch4-c-03", prompt:`3. Insérer deux étudiants (Ayoub 25, Mohamed 22) et les lire.`, correction:`\`INSERT INTO students (id,name,age) VALUES (uuid(),'Ayoub',25);\` idem Mohamed ; \`SELECT * FROM university.students;\`` },
      { id:"e-ch4-c-04", prompt:`4. Simuler une panne et vérifier la tolérance.`, correction:`\`docker stop cassandra2\` ; \`nodetool status\` → UN / DN / UN ; \`SELECT * FROM students\` fonctionne encore (RF=3).` },
      { id:"e-ch4-c-05", prompt:`5. Modéliser les mesures de température des capteurs.`, correction:`\`CREATE TABLE mesures (capteur TEXT, temps TIMESTAMP, temperature DOUBLE, PRIMARY KEY(capteur, temps));\` partition = capteur, clustering = temps.` },
      { id:"e-ch4-c-06", prompt:`6. Choisir les niveaux de consistance pour lecture et écriture ; justifier.`, correction:`QUORUM écriture + QUORUM lecture (2+2 > RF=3) : cohérent et tolère 1 nœud down ; ONE pour mesures capteurs (débit, tolérance à l'éventuel). ALL déconseillé (bloqué si 1 nœud down).` }
    ],
    deliverables: [
      `Script de déploiement Docker (réseau + 3 nœuds + seeds)`,
      `Scripts CQL (keyspace, tables students et mesures)`,
      `Tableau comparatif des niveaux de consistance retenus et leur justification`
    ]
  }
};
