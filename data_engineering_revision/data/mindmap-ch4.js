/* Chapter 4 — Cassandra : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch4 = [
  { id:"ch4-root", label:"CH4 — Cassandra", parentId:null, kind:"root" },

  // Branche 1 — Présentation
  { id:"ch4-b1", label:"Présentation", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b1-l1", label:"Distribuée, évolutive, tolérante aux fautes", parentId:"ch4-b1", kind:"leaf", note:`Base NoSQL non relationnelle, haute performance ; temps réel ou lecture intensive.` },
  { id:"ch4-b1-l2", label:"BigTable + DynamoDB", parentId:"ch4-b1", kind:"leaf", note:`Incubée chez Facebook, open source Apache.` },

  // Branche 2 — Architecture
  { id:"ch4-b2", label:"Architecture", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b2-l1", label:"Pair-à-pair, sans maître", parentId:"ch4-b2", kind:"leaf", note:`Nœuds identiques, pas de NameNode → pas de SPOF.` },
  { id:"ch4-b2-l2", label:"Gossip", parentId:"ch4-b2", kind:"leaf", note:`Échange d'état entre nœuds chaque seconde.` },
  { id:"ch4-b2-l3", label:"Keyspace / column family / colonne", parentId:"ch4-b2", kind:"leaf", note:`Keyspace ≈ database ; column family ≈ table ; colonne indexée par clé.` },
  { id:"ch4-b2-l4", label:"Read/Write anywhere", parentId:"ch4-b2", kind:"leaf", note:`Connexion possible à n'importe quel nœud de n'importe quel datacenter.` },

  // Branche 3 — Partitionnement
  { id:"ch4-b3", label:"Partitionnement", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b3-l1", label:"Aléatoire (défaut)", parentId:"ch4-b3", kind:"leaf", note:`Hachage MD5/Murmur3 de la clé → répartition équitable.` },
  { id:"ch4-b3-l2", label:"Ordonné", parentId:"ch4-b3", kind:"leaf", note:`Clés triées entre nœuds ; risque de déséquilibre de charge.` },
  { id:"ch4-b3-l3", label:"cassandra.yaml", parentId:"ch4-b3", kind:"leaf", note:`Fichier de configuration où la stratégie est spécifiée.` },

  // Branche 4 — Réplication
  { id:"ch4-b4", label:"Réplication", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b4-l1", label:"Facteur de réplication", parentId:"ch4-b4", kind:"leaf", note:`Fixé à la création du keyspace ; choisi par l'utilisateur.` },
  { id:"ch4-b4-l2", label:"SimpleStrategy", parentId:"ch4-b4", kind:"leaf", note:`Nœud suivant de l'anneau ; un seul datacenter.` },
  { id:"ch4-b4-l3", label:"Topologie du réseau", parentId:"ch4-b4", kind:"leaf", note:`Baies différentes, plusieurs datacenters, plus de contrôle.` },
  { id:"ch4-b4-l4", label:"Snitch", parentId:"ch4-b4", kind:"leaf", note:`Simple, Rack-Inferring (IP), Property File, Gossiping Property File (prod).` },

  // Branche 5 — Consistance
  { id:"ch4-b5", label:"Consistance ajustable", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b5-l1", label:"Choix par opération", parentId:"ch4-b5", kind:"leaf", note:`Forte ou éventuelle ; \`USING CONSISTENCY QUORUM\`.` },
  { id:"ch4-b5-l2", label:"Niveaux d'écriture", parentId:"ch4-b5", kind:"leaf", note:`ANY, ONE, QUORUM, LOCAL_QUORUM, EACH_QUORUM, ALL.` },
  { id:"ch4-b5-l3", label:"Niveaux de lecture", parentId:"ch4-b5", kind:"leaf", note:`ONE, QUORUM, LOCAL_QUORUM, EACH_QUORUM, ALL ; résultat le plus récent.` },
  { id:"ch4-b5-l4", label:"Quorum = (RF/2)+1", parentId:"ch4-b5", kind:"leaf", note:`Division entière : RF=3 → 2 ; RF=5 → 3.` },
  { id:"ch4-b5-l5", label:"Hinted handoff", parentId:"ch4-b5", kind:"leaf", note:`Hint gardé pour rattraper une réplique en panne.` },
  { id:"ch4-b5-l6", label:"Read repair", parentId:"ch4-b5", kind:"leaf", note:`Comparaison en arrière-plan des répliques à la lecture.` },

  // Branche 6 — Écriture
  { id:"ch4-b6", label:"Chemin d'écriture", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b6-l1", label:"Commit log → MemTable → SSTable", parentId:"ch4-b6", kind:"leaf", note:`Durabilité, écriture en RAM, flush sur disque (Sorted Strings Table).` },
  { id:"ch4-b6-l2", label:"Atomicité par colonne", parentId:"ch4-b6", kind:"leaf", note:`Pas de commit/rollback relationnels ; toutes les colonnes ou aucune.` },
  { id:"ch4-b6-l3", label:"Rapidité en écriture", parentId:"ch4-b6", kind:"leaf", note:`La base NoSQL la plus rapide en écriture.` },

  // Branche 7 — CQL
  { id:"ch4-b7", label:"CQL & modèle", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b7-l1", label:"CRUD CQL", parentId:"ch4-b7", kind:"leaf", note:`INSERT / SELECT / UPDATE / DELETE ; CREATE / ALTER / DROP.` },
  { id:"ch4-b7-l2", label:"Limites", parentId:"ch4-b7", kind:"leaf", note:`Pas de GROUP BY ; ORDER BY limité aux clés composées.` },
  { id:"ch4-b7-l3", label:"PRIMARY KEY(capteur, temps)", parentId:"ch4-b7", kind:"leaf", note:`Partition = capteur ; clustering = temps.` },

  // Branche 8 — Mini-cluster & récapitulatif
  { id:"ch4-b8", label:"Mini-cluster Docker & atouts", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b8-l1", label:"Commandes Docker", parentId:"ch4-b8", kind:"leaf", note:`network create, run ×3 avec CASSANDRA_SEEDS, nodetool status, cqlsh.` },
  { id:"ch4-b8-l2", label:"Test de panne", parentId:"ch4-b8", kind:"leaf", note:`docker stop cassandra2 → DN ; les données restent accessibles.` },
  { id:"ch4-b8-l3", label:"Atouts", parentId:"ch4-b8", kind:"leaf", note:`Scalabilité linéaire, pas de SPOF, compression Snappy, pas de cache séparé, schéma flexible.` }
];
