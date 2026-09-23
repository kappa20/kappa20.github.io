/* Chapter 1 — Big Data & panorama NoSQL : examen blanc.
   Items construits à partir du cours (Pr. Esswidi) — ce ne sont PAS des exercices de TD/TP réels. */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch1 = {
  chapter: 1,
  title: `Big Data, limites du relationnel et panorama NoSQL`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch1-qcm-01", q:`La Vélocité du Big Data implique surtout :`, choices:[`la scalabilité`,`la disponibilité`,`la visualisation`,`la véracité`], answer:1, correction:`b — vélocité → disponibilité (temps réel)` },
    { id:"e-ch1-qcm-02", q:`Quelle liste correspond aux 5V ?`, choices:[`Volume, Vélocité, Variété, Véracité, Valeur`,`Volume, Vitesse, Vue, Validité, Valeur`,`Variété, Vélocité, Visualisation, Vulnérabilité, Volatilité`,`Volume, Variabilité, Vue, Vérité, Version`], answer:0, correction:`a — Volume, Vélocité, Variété, Véracité, Valeur` },
    { id:"e-ch1-qcm-03", q:`Le théorème CAP dit qu'un système distribué :`, choices:[`garantit toujours C, A et P`,`ne peut garantir que 2 propriétés sur 3`,`ne peut garantir que la disponibilité`,`n'est valable que pour SQL`], answer:1, correction:`b — 2 propriétés parmi 3` },
    { id:"e-ch1-qcm-04", q:`Redis appartient à la famille :`, choices:[`documents`,`graphe`,`colonnes`,`clé-valeur`], answer:3, correction:`d — clé-valeur` },
    { id:"e-ch1-qcm-05", q:`Une base orientée graphe manipule :`, choices:[`des tables et des lignes`,`des nœuds, des relations et des propriétés`,`des familles de colonnes`,`des clés et des blobs uniquement`], answer:1, correction:`b — nœuds + relations + propriétés` },
    { id:"e-ch1-qcm-06", q:`Quel élément n'est PAS une limite classique des SGBDR face au Big Data ?`, choices:[`schéma rigide`,`jointures coûteuses`,`scalabilité horizontale difficile`,`schéma flexible`], answer:3, correction:`d — la flexibilité est un atout NoSQL, pas du relationnel` },
    { id:"e-ch1-qcm-07", q:`Le rôle de Spark dans l'écosystème Hadoop / Spark / MongoDB est :`, choices:[`le stockage distribué`,`le traitement (in-memory)`,`la base flexible sans schéma`,`la visualisation`], answer:1, correction:`b — Spark = traitement ; Hadoop = stockage ; MongoDB = base flexible` },
    { id:"e-ch1-qcm-08", q:`Quel format est cité pour répondre à la variété des données ?`, choices:[`JSON, Avro, Parquet`,`DOC, XLS, PPT`,`BMP, GIF, PNG`,`Uniquement CSV`], answer:0, correction:`a — JSON, Avro, Parquet` }
  ],
  questions: [
    { id:"e-ch1-q-01", q:`Définir le Volume et la Vélocité, et indiquer la propriété d'architecture associée à chacun.`, correction:`Volume : quantité massive (To→Yo) → scalabilité, BD distribuées. Vélocité : vitesse d'arrivée/traitement → disponibilité ; in-memory (Spark).` },
    { id:"e-ch1-q-02", q:`Expliquer la Véracité et citer des moyens de l'assurer.`, correction:`Fiabilité/qualité des données. Nettoyage/prétraitement, validation + gouvernance, détection d'anomalies (ML), traçabilité.` },
    { id:"e-ch1-q-03", q:`Pourquoi le schéma rigide et les jointures posent-ils problème à grande échelle ?`, correction:`Schéma rigide : données variées/évolutives mal gérées. Jointures coûteuses entre gros volumes. Scale-out difficile → NoSQL.` },
    { id:"e-ch1-q-04", q:`Énoncer le théorème CAP.`, correction:`Système distribué : impossible d'avoir Consistance + Disponibilité + résistance au Partitionnement ; on choisit 2 sur 3.` },
    { id:"e-ch1-q-05", q:`Citer les 4 familles NoSQL et un SGBD représentatif de chacune.`, correction:`Clé-valeur : Redis. Documents : MongoDB. Colonnes : HBase. Graphe : Neo4j.` },
    { id:"e-ch1-q-06", q:`Donner 3 cas d'usage d'une base clé-valeur.`, correction:`Caching (produits e-commerce, Redis) ; sessions utilisateur (session_12345, paniers) ; configuration (theme=dark, language=fr).` },
    { id:"e-ch1-q-07", q:`Écrire les commandes Redis pour créer, lire, modifier puis supprimer user:1001.`, correction:`SET user:1001 "Mohamed" ; GET user:1001 ; SET user:1001 "Ali" ; DEL user:1001.` },
    { id:"e-ch1-q-08", q:`Comment MongoDB complète-t-il Hadoop et Spark ?`, correction:`Hadoop = stockage, Spark = traitement, MongoDB = couche BD flexible sans schéma ; Spark lit/écrit dans MongoDB → pipelines d'analyse.` }
  ],
  vocab: [
    { id:"e-ch1-v-01", term:`Big Data`, correction:`Données caractérisées par les V : volume, vélocité, variété, véracité, valeur (+ validité, vulnérabilité, variabilité, volatilité, visualisation).` },
    { id:"e-ch1-v-02", term:`NoSQL`, correction:`Bases non relationnelles : schéma flexible, distribuées, adaptées aux données non/semi-structurées.` },
    { id:"e-ch1-v-03", term:`théorème CAP`, correction:`Impossible d'avoir cohérence, disponibilité et tolérance au partitionnement à la fois : 2 sur 3.` },
    { id:"e-ch1-v-04", term:`base clé-valeur`, correction:`Couples clé → valeur (chaîne, JSON, binaire) ; opérations create/read/update/delete par clé ; ex. Redis.` },
    { id:"e-ch1-v-05", term:`base orientée colonnes`, correction:`Stockage par colonnes, organisé en familles de colonnes ; scalable ; ex. HBase.` },
    { id:"e-ch1-v-06", term:`base orientée graphe`, correction:`Nœuds + relations + propriétés ; données fortement connectées ; ex. Neo4j.` },
    { id:"e-ch1-v-07", term:`base orientée documents`, correction:`Documents semi-structurés JSON/XML, sans schéma imposé, structure arborescente ; ex. MongoDB.` },
    { id:"e-ch1-v-08", term:`Data Lake`, correction:`Stockage de données brutes de tout type, alimenté par ETL/ELT (Talend, NiFi).` },
    { id:"e-ch1-v-09", term:`In-memory computing`, correction:`Traitement en mémoire vive pour la vélocité ; ex. Apache Spark.` }
  ],
  analysis: [
    { id:"e-ch1-a-01", scenario:`Un site e-commerce doit afficher très vite le catalogue produits, très consulté et peu modifié.`, question:`Quelle famille NoSQL et quel usage proposer ?`, correction:`Clé-valeur (Redis) en cache : résultats de requêtes coûteuses stockés pour accès rapides.` },
    { id:"e-ch1-a-02", scenario:`Un réseau social doit trouver les amis d'amis d'un utilisateur.`, question:`Quel modèle NoSQL choisir et pourquoi ?`, correction:`Graphe (Neo4j) : nœuds = personnes, relations = amitiés ; données très connectées, parcours de relations naturel.` },
    { id:"e-ch1-a-03", scenario:`Les sources de données d'une entreprise ajoutent chaque mois de nouveaux champs (logs, JSON, images).`, question:`Quel V est en jeu et quelle réponse technique apporter ?`, correction:`Variété → flexibilité : NoSQL documents (schéma souple), data lake pour le brut, formats JSON/Avro/Parquet.` },
    { id:"e-ch1-a-04", scenario:`Un système distribué subit une coupure réseau entre deux datacenters.`, question:`Que dit CAP sur le compromis à faire ?`, correction:`P est imposé par la coupure → choisir entre cohérence (C, refuse des requêtes) et disponibilité (A, données possiblement divergentes).` }
  ],
  case: {
    title: `Cas : choisir les bases NoSQL d'une plateforme e-commerce (TechStore)`,
    context: `TechStore vend de l'électronique en ligne : des milliers de commandes par minute, des fiches produits aux spécifications variées, des sessions/paniers utilisateurs, des recommandations « qui achète quoi », et des capteurs/logs à fort débit. L'équipe utilise aujourd'hui un unique SGBDR et rencontre lenteurs et rigidité du schéma.`,
    tasks: [
      { id:"e-ch1-c-01", prompt:`1. Identifier les limites du SGBDR unique et les V du Big Data concernés.`, correction:`- Schéma rigide (specs variables) → Variété
- Jointures coûteuses, scale-out difficile → Volume
- Milliers de commandes/min → Vélocité` },
      { id:"e-ch1-c-02", prompt:`2. Associer à chaque besoin une famille NoSQL et un SGBD.`, correction:`- Sessions/paniers/cache : clé-valeur, Redis
- Fiches produits/commandes : documents, MongoDB
- Logs/capteurs haut débit : colonnes (HBase/Cassandra)
- Recommandations : graphe, Neo4j` },
      { id:"e-ch1-c-03", prompt:`3. Écrire les commandes Redis pour stocker et supprimer la session « session_12345 ».`, correction:`SET session_12345 "..." ; GET session_12345 ; DEL session_12345` },
      { id:"e-ch1-c-04", prompt:`4. Expliquer le compromis CAP à retenir pour le catalogue en cache vs les commandes.`, correction:`- Catalogue en cache : disponibilité privilégiée (AP), cohérence éventuelle tolérable
- Commandes : cohérence plus importante (CP)` },
      { id:"e-ch1-c-05", prompt:`5. Situer MongoDB dans une architecture avec Hadoop et Spark.`, correction:`Hadoop = stockage, Spark = traitement, MongoDB = couche flexible temps réel ; Spark lit/écrit dans MongoDB → analytique (Valeur : BI, ML).` }
    ],
    deliverables: [
      `Tableau besoin → famille NoSQL → SGBD`,
      `Commandes Redis pour la gestion de session`,
      `Justification CAP par composant`,
      `Schéma d'architecture Hadoop / Spark / MongoDB`
    ]
  }
};
