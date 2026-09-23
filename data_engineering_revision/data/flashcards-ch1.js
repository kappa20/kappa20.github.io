/* Chapter 1 — Big Data & panorama NoSQL : flashcards (source : cours NoSQL, Pr. Esswidi, p.1-24). */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- Big Data : les V ---
  { id:"fc-ch1-001", chapter:1, topic:"bigdata", kind:"definition", front:`Les 3 V de départ du Big Data`, back:`**Volume, Variété, Vélocité** (vitesse).
- Puis étendus aux 5V : + **Véracité**, **Valeur**
- Liste élargie du cours (10V) : + Validité, Vulnérabilité, Variabilité, Volatilité, Visualisation` },
  { id:"fc-ch1-002", chapter:1, topic:"bigdata", kind:"definition", front:`Les 5V (et au-delà) du Big Data`, back:`1. Volume  2. Vélocité (vitesse)  3. Variété  4. Véracité  5. Valeur
- Extension à 10V : 6. Validité  7. Vulnérabilité  8. Variabilité  9. Volatilité  10. Visualisation` },
  { id:"fc-ch1-003", chapter:1, topic:"bigdata", kind:"definition", front:`Volume : définition et conséquence technique`, back:`Quantité massive de données générées (téraoctets, pétaoctets, zettaoctets, yottaoctets).
- Volume → **Scalabilité**
- Volume → **bases de données distribuées**` },
  { id:"fc-ch1-004", chapter:1, topic:"bigdata", kind:"definition", front:`Vélocité (Velocity) : définition et conséquence technique`, back:`Arrivée continue et vitesse de génération/traitement des données (ex. temps réel).
- Vélocité → **Disponibilité** (Availability)
- « Stocker d'abord, réfléchir ensuite »
- In-memory computing : **Apache Spark**` },
  { id:"fc-ch1-005", chapter:1, topic:"bigdata", kind:"definition", front:`Variété (Variety) : définition et conséquence technique`, back:`Diversité des types de données : structurées, semi-structurées, non structurées.
- Variété → **Flexibilité** (le type de données change avec le temps)
- Bases NoSQL adaptées : documents (MongoDB), colonnes (HBase), clé-valeur (Redis), graphe (Neo4j)
- Data Lakes, ETL/ELT (Talend, NiFi), formats JSON/Avro/Parquet` },
  { id:"fc-ch1-006", chapter:1, topic:"bigdata", kind:"definition", front:`Véracité (Veracity)`, back:`Fiabilité et qualité des données.
- Nettoyage et prétraitement
- Validation et règles de gouvernance
- Détection d'anomalies (techniques de ML)
- Traçabilité` },
  { id:"fc-ch1-007", chapter:1, topic:"bigdata", kind:"definition", front:`Valeur (Value)`, back:`Transformer des données massives en informations **utiles et exploitables** pour la décision.
- Analytique avancée : ML, DL, Data Mining
- BI : tableaux de bord (Power BI, Tableau)
- Cas d'usage métier clairement définis` },
  { id:"fc-ch1-008", chapter:1, topic:"bigdata", kind:"concept", front:`Associer chaque V à la propriété d'architecture qu'il impose`, back:`| V | Implication |
|---|---|
| Volume | Scalabilité / BD distribuées |
| Vélocité | Disponibilité (temps réel) |
| Variété | Flexibilité (schéma souple) |
| Véracité | Qualité, gouvernance, traçabilité |
| Valeur | Analytique / BI |` },

  // --- Limites du relationnel ---
  { id:"fc-ch1-009", chapter:1, topic:"limites-sgbdr", kind:"concept", front:`Explosion des données et limites des SGBDR traditionnels`, back:`Explosion : volume, variété, vélocité. Limites du relationnel :
- **Schéma rigide**
- **Jointures coûteuses**
- **Mise à l'échelle horizontale difficile**
=> besoin de modèles flexibles, gestion des données non/semi-structurées => **NoSQL**` },
  { id:"fc-ch1-010", chapter:1, topic:"limites-sgbdr", kind:"concept", front:`Pourquoi NoSQL ? (charges de travail modernes)`, back:`Adapté aux charges modernes : Volume + Variété + Vitesse.
- Modèles de données flexibles
- Données non structurées et semi-structurées
- Scalabilité horizontale (distribution)` },

  // --- CAP ---
  { id:"fc-ch1-011", chapter:1, topic:"cap", kind:"definition", front:`Théorème CAP`, back:`Dans un système distribué, il est **impossible d'obtenir les 3 propriétés en même temps** : il faut en choisir 2 sur 3.
- **C**onsistance (cohérence)
- **A**vailability (disponibilité)
- **P**artition tolerance (résistance au partitionnement / distribution)` },
  { id:"fc-ch1-012", chapter:1, topic:"cap", kind:"definition", front:`CAP : Consistance`, back:`Tous les nœuds voient les **mêmes données au même moment** (cohérence).` },
  { id:"fc-ch1-013", chapter:1, topic:"cap", kind:"definition", front:`CAP : Disponibilité`, back:`Chaque requête reçoit une réponse : le système reste accessible même si des nœuds tombent.` },
  { id:"fc-ch1-014", chapter:1, topic:"cap", kind:"definition", front:`CAP : Résistance au partitionnement (Distribution)`, back:`Le système continue de fonctionner malgré une **coupure réseau** entre nœuds (partition).
- Indispensable dès qu'on distribue les données` },
  { id:"fc-ch1-015", chapter:1, topic:"cap", kind:"case", front:`CAP : quelles combinaisons possibles ?`, back:`Choix de 2 parmi 3 :
- **CA** : cohérence + disponibilité (sans tolérance aux partitions — SGBDR classique mono-site)
- **CP** : cohérence + partitions (sacrifie la disponibilité)
- **AP** : disponibilité + partitions (cohérence éventuelle)` },

  // --- Familles NoSQL ---
  { id:"fc-ch1-016", chapter:1, topic:"familles", kind:"concept", front:`Les 4 familles de bases NoSQL et leur usage`, back:`| Famille | Usage |
|---|---|
| Clé-valeur | Cache / recherche ultra-rapides et simples |
| Documents | Structures flexibles (JSON), grands volumes |
| Colonnes (wide-column) | Stockage distribué à haut débit |
| Graphe | Données très connectées (réseaux sociaux) |` },
  { id:"fc-ch1-017", chapter:1, topic:"familles", kind:"concept", front:`Exemples de SGBD par famille NoSQL`, back:`- Clé-valeur : **Redis**
- Documents : **MongoDB**
- Colonnes : **HBase** (aussi Cassandra)
- Graphe : **Neo4j**` },
  { id:"fc-ch1-018", chapter:1, topic:"cle-valeur", kind:"definition", front:`Base clé-valeur : modèle`, back:`Données = simples **couples clé-valeur**.
- Valeur : chaîne, nombre, booléen, objet JSON, binaire (image, vidéo, audio, PDF)…
- 4 opérations CRUD : \`create(key,value)\`, \`read(key)\`, \`update(key,value)\`, \`delete(key)\`` },
  { id:"fc-ch1-019", chapter:1, topic:"cle-valeur", kind:"concept", front:`Cas d'usage d'une base clé-valeur`, back:`- **Caching** : résultats de requêtes coûteuses (ex. Redis pour les produits d'un site e-commerce)
- **Sessions utilisateur** : paniers, préférences (clé « session_12345 »)
- **Configuration / paramètres** : \`"theme":"dark"\`, \`"language":"fr"\`` },
  { id:"fc-ch1-020", chapter:1, topic:"cle-valeur", kind:"case", front:`Redis : ajouter, lire, modifier, supprimer l'utilisateur 1001`, back:`\`\`\`
SET user:1001 "Mohamed"
GET user:1001
SET user:1001 "Ali"
DEL user:1001
\`\`\`
- Accès : \`docker exec -it redis redis-cli\`
- SET sert à la fois à créer et à modifier` },
  { id:"fc-ch1-021", chapter:1, topic:"colonnes", kind:"definition", front:`Base orientée colonnes : principe`, back:`Stocke les données **par colonnes** et non par lignes.
- Colonne 1 : valeurs de tous les noms ; colonne 2 : tous les âges ; colonne 3 : toutes les villes
- Organisé en **familles de colonnes** (groupes de colonnes aux attributs communs)
- Hautement scalable et flexible` },
  { id:"fc-ch1-022", chapter:1, topic:"colonnes", kind:"case", front:`Modèle colonnes (HBase) : écrire puis lire la ligne user1`, back:`\`\`\`
put 'users','user1','info:name','Ali'
put 'users','user1','info:age','25'
put 'users','user1','address:city','Casablanca'
get 'users','user1'
\`\`\`
- Row Key : user1 ; Column Family **info** (name, age) ; Column Family **address** (city)
- Résultat : info:name = Ali, info:age = 25, address:city = Casablanca` },
  { id:"fc-ch1-023", chapter:1, topic:"graphe", kind:"definition", front:`Base orientée graphe : éléments du modèle`, back:`Conçue pour stocker et gérer des **relations complexes** en réseau (cartographie, réseaux sociaux).
- **Nœuds** : entités
- **Relations** : liens entre entités
- **Propriétés** : infos supplémentaires sur nœuds et relations` },
  { id:"fc-ch1-024", chapter:1, topic:"document", kind:"definition", front:`Base orientée documents : principe`, back:`Collection de « documents » : modèle clé-valeur où la **valeur est un document semi-structuré hiérarchique** (JSON ou XML).
- Pas de schéma imposé, structure **arborescente** (champs dont la valeur peut être une liste de champs…)
- Possible de stocker tout objet via sérialisation` },

  // --- Écosystème Big Data ---
  { id:"fc-ch1-025", chapter:1, topic:"ecosysteme", kind:"concept", front:`MongoDB dans l'écosystème Big Data : Hadoop + Spark + MongoDB`, back:`MongoDB **complète** Hadoop et Spark :
- Hadoop → **stockage**
- Spark → **traitement**
- MongoDB → couche de base de données **flexible, sans schéma** (temps réel / semi-structuré)
- Spark lit/écrit dans MongoDB => pipelines d'analyse` },
  { id:"fc-ch1-026", chapter:1, topic:"ecosysteme", kind:"definition", front:`Data Lake`, back:`Stockage des **données brutes** (structurées, semi-structurées, non structurées) pour répondre à la variété.
- Alimenté par outils d'intégration ETL/ELT : Talend, Apache NiFi` },
  { id:"fc-ch1-027", chapter:1, topic:"ecosysteme", kind:"concept", front:`Formats flexibles pour la variété des données`, back:`**JSON**, **Avro**, **Parquet**.
- JSON : texte lisible (échange, MongoDB)
- Avro / Parquet : formats adaptés au Big Data (stockage/échange de gros volumes)` },
  { id:"fc-ch1-028", chapter:1, topic:"ecosysteme", kind:"concept", front:`Pourquoi MongoDB pour le Big Data ? (4 points)`, back:`- Modèle de **document (BSON)** : structures type JSON
- **Schéma flexible** : les champs s'adaptent au fil des données
- **Évolutif et haute dispo** : partitionnement horizontal + replica sets
- Conçu pour charges modernes : Web, IoT, pipelines d'analyse` }
);
