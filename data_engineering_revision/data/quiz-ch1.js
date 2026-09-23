/* Chapter 1 — Big Data & panorama NoSQL : quiz (QCM + questions ouvertes). Construit à partir du cours (pas de TD réel). */
window.DE = window.DE || {};
window.DE.quiz = window.DE.quiz || [];
window.DE.quiz.push(
  { id:"q-ch1-mcq-01", chapter:1, type:"mcq", q:`Le « V » du Big Data associé à la scalabilité et aux bases distribuées est :`, choices:[`Vélocité`,`Volume`,`Véracité`,`Visualisation`], answer:1, explain:`Volume → scalabilité → bases de données distribuées.` },
  { id:"q-ch1-mcq-02", chapter:1, type:"mcq", q:`La Variété des données impose surtout :`, choices:[`de la flexibilité (schéma qui évolue)`,`un schéma relationnel strict`,`uniquement du stockage sur bande`,`de supprimer les données non structurées`], answer:0, explain:`Variété → flexibilité : le type des données change avec le temps (NoSQL, data lakes, JSON/Avro/Parquet).` },
  { id:"q-ch1-mcq-03", chapter:1, type:"mcq", q:`Le théorème CAP affirme que, dans un système distribué :`, choices:[`on peut garantir C, A et P simultanément`,`il faut choisir 2 propriétés parmi les 3`,`seule la disponibilité compte`,`la cohérence est toujours sacrifiée`], answer:1, explain:`Impossible d'avoir Consistance, Disponibilité et résistance au Partitionnement en même temps : on en choisit 2.` },
  { id:"q-ch1-mcq-04", chapter:1, type:"mcq", q:`Quelle famille NoSQL convient le mieux au caching et aux sessions utilisateur ?`, choices:[`Graphe`,`Colonnes`,`Clé-valeur`,`Documents`], answer:2, explain:`Clé-valeur (ex. Redis) : cache/recherche ultra-rapides, sessions, configurations.` },
  { id:"q-ch1-mcq-05", chapter:1, type:"mcq", q:`Neo4j est un représentant de la famille :`, choices:[`clé-valeur`,`orientée graphe`,`orientée colonnes`,`orientée documents`], answer:1, explain:`Neo4j = graphe (nœuds, relations, propriétés). Redis = clé-valeur, HBase = colonnes, MongoDB = documents.` },
  { id:"q-ch1-mcq-06", chapter:1, type:"mcq", q:`Dans Redis, quelle commande lit la valeur associée à la clé user:1001 ?`, choices:[`SET user:1001`,`DEL user:1001`,`GET user:1001`,`READ user:1001`], answer:2, explain:`GET lit ; SET crée/modifie ; DEL supprime.` },
  { id:"q-ch1-mcq-07", chapter:1, type:"mcq", q:`Parmi ces limites, laquelle est reprochée aux SGBDR traditionnels ?`, choices:[`schéma flexible`,`scalabilité horizontale native`,`schéma rigide et jointures coûteuses`,`incapacité à faire des requêtes`], answer:2, explain:`Limites du relationnel : schéma rigide, jointures coûteuses, mise à l'échelle horizontale difficile.` },
  { id:"q-ch1-mcq-08", chapter:1, type:"mcq", q:`Dans l'écosystème Big Data du cours, quels rôles jouent Hadoop, Spark et MongoDB ?`, choices:[`Hadoop = traitement, Spark = stockage, MongoDB = BI`,`Hadoop = stockage, Spark = traitement, MongoDB = base flexible sans schéma`,`Les trois font du stockage relationnel`,`MongoDB remplace Hadoop et Spark`], answer:1, explain:`MongoDB complète Hadoop (stockage) et Spark (traitement) ; Spark peut lire/écrire dans MongoDB.` },

  { id:"q-ch1-open-01", chapter:1, type:"open", q:`Citer les 5V du Big Data et donner, pour chacun, la conséquence sur l'architecture.`, model:`- Volume → scalabilité, BD distribuées
- Vélocité → disponibilité, temps réel (Spark in-memory)
- Variété → flexibilité (NoSQL, data lakes, JSON/Avro/Parquet)
- Véracité → nettoyage, gouvernance, détection d'anomalies, traçabilité
- Valeur → analytique (ML, BI), cas d'usage métier` },
  { id:"q-ch1-open-02", chapter:1, type:"open", q:`Pourquoi les SGBDR atteignent-ils leurs limites face au Big Data ?`, model:`Schéma rigide (données semi/non structurées difficiles), jointures coûteuses à grande échelle, mise à l'échelle horizontale difficile (scale-up vertical). D'où le NoSQL : modèles flexibles, distribution.` },
  { id:"q-ch1-open-03", chapter:1, type:"open", q:`Énoncer le théorème CAP et expliquer chaque lettre.`, model:`Système distribué : impossible d'avoir simultanément les 3, il faut en choisir 2.
- C : cohérence (mêmes données partout)
- A : disponibilité (toute requête obtient une réponse)
- P : résistance au partitionnement (fonctionne malgré coupure réseau)` },
  { id:"q-ch1-open-04", chapter:1, type:"open", q:`Présenter les 4 familles de bases NoSQL avec un exemple de SGBD et un cas d'usage pour chacune.`, model:`- Clé-valeur : Redis — cache, sessions, configuration
- Documents : MongoDB — structures JSON flexibles, grands volumes
- Colonnes : HBase (Cassandra) — stockage distribué haut débit
- Graphe : Neo4j — données très connectées (réseaux sociaux)` },
  { id:"q-ch1-open-05", chapter:1, type:"open", q:`Décrire le modèle de données orienté colonnes avec l'exemple de la table users.`, model:`Row Key (user1) + familles de colonnes (info : name, age ; address : city).
put 'users','user1','info:name','Ali' … ; get 'users','user1' → info:name=Ali, info:age=25, address:city=Casablanca.
Données stockées par colonne, familles = groupes de colonnes aux attributs communs.` },
  { id:"q-ch1-open-06", chapter:1, type:"open", q:`Comment MongoDB s'intègre-t-il à Hadoop et Spark dans une architecture Big Data ?`, model:`Écosystème unifié : Hadoop = stockage, Spark = traitement, MongoDB = couche BD flexible sans schéma (temps réel/semi-structuré). Spark lit/écrit dans MongoDB → pipelines d'analyse.` },
  { id:"q-ch1-open-07", chapter:1, type:"open", q:`Quels outils/formats répondent à la Variété des données ?`, model:`NoSQL (MongoDB, HBase, Redis, Neo4j), data lakes (données brutes), outils ETL/ELT (Talend, Apache NiFi), formats flexibles JSON, Avro, Parquet.` }
);
