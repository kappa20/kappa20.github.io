/* Chapter 3 — Qualité & tests de données : flashcards. */
window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  // --- Définitions à fournir par l'étudiant (TD, 9 termes) ---
  { id:"fc-ch3-001", chapter:3, topic:"qualite", kind:"definition", front:`Qualité des données`, back:`Aptitude d'une donnée à satisfaire un usage donné (**fitness for use**).
- Donnée évaluée, contrôlée, nettoyée, documentée, gouvernée
- Pas une notion absolue : dépend du cas d'usage` },
  { id:"fc-ch3-002", chapter:3, topic:"qualite", kind:"definition", front:`Complétude`, back:`Mesure le degré de **présence** des données attendues dans un jeu de données.
- Ex : customer_id manquant dans certaines commandes` },
  { id:"fc-ch3-003", chapter:3, topic:"qualite", kind:"definition", front:`Fraîcheur`, back:`Mesure si la donnée est disponible dans un **délai compatible avec l'usage attendu** (actualité par rapport au besoin métier).
- Ex : fichier quotidien reçu avec 2 jours de retard` },
  { id:"fc-ch3-004", chapter:3, topic:"qualite", kind:"definition", front:`Métadonnées`, back:`Données qui **décrivent d'autres données** : structure, sens, source, fréquence, responsabilité, contraintes de qualité, usages autorisés.
- 3 types : descriptives, structurelles, administratives` },
  { id:"fc-ch3-005", chapter:3, topic:"qualite", kind:"definition", front:`Data lineage`, back:`Traçabilité du **parcours d'une donnée**, depuis sa source jusqu'à ses transformations et usages finaux.
- Répond à : d'où vient la donnée ? quelles transformations ? quels objets en dépendent ?` },
  { id:"fc-ch3-006", chapter:3, topic:"qualite", kind:"definition", front:`Gouvernance des données`, back:`Ensemble des **règles, rôles, responsabilités et mécanismes de pilotage** qui encadrent la production, l'usage et l'évolution des données.
- Transforme la qualité en responsabilité organisationnelle` },
  { id:"fc-ch3-007", chapter:3, topic:"qualite", kind:"definition", front:`Automated testing (données)`, back:`Tests de qualité **automatisables et intégrés au pipeline**, exécutés à chaque exécution (CI), pas manuellement une seule fois.
- Versionnés comme le code` },
  { id:"fc-ch3-008", chapter:3, topic:"qualite", kind:"definition", front:`Data contract`, back:`Engagement **formalisé entre producteurs et consommateurs** de données sur le schéma, la qualité, la fréquence, les responsabilités et l'évolution.
- Volet humain (accord) + volet machine (test exécutable, YAML/JSON)` },
  { id:"fc-ch3-009", chapter:3, topic:"qualite", kind:"definition", front:`Feedback loop`, back:`Boucle qui convertit chaque incident en **opportunité d'amélioration** du pipeline (mesurer → détecter → analyser → corriger → réévaluer → capitaliser).
- Logique Kaizen : amélioration continue par itérations` },

  // --- Dimensions de qualité additionnelles (cours) ---
  { id:"fc-ch3-010", chapter:3, topic:"qualite", kind:"definition", front:`Validité`, back:`Vérifie si les valeurs respectent le **format, le type ou le domaine** autorisé.
- Ex : code pays "XX" au lieu de MA/FR/ES` },
  { id:"fc-ch3-011", chapter:3, topic:"qualite", kind:"definition", front:`Cohérence`, back:`Vérifie l'**absence de contradiction logique** entre les données.
- Ex : delivery_date antérieure à order_date` },
  { id:"fc-ch3-012", chapter:3, topic:"qualite", kind:"definition", front:`Cohérence métier`, back:`Vérifie que les données respectent les **règles du domaine fonctionnel**.
- Ex : montant de vente négatif dans une table de ventes` },
  { id:"fc-ch3-013", chapter:3, topic:"qualite", kind:"definition", front:`Unicité`, back:`Vérifie qu'un identifiant ou une clé censée être unique **ne contient pas de doublons**.
- Ex : deux lignes avec le même order_id
- Test : \`order_id.nunique() == len(df)\`` },
  { id:"fc-ch3-014", chapter:3, topic:"qualite", kind:"definition", front:`Exactitude`, back:`Mesure à quel point la donnée **reflète correctement la réalité** observée.
- Ex : montant enregistré à 10000 au lieu de 1000` },
  { id:"fc-ch3-015", chapter:3, topic:"qualite", kind:"definition", front:`Intégrité`, back:`Vérifie que les **relations entre objets/tables** sont respectées.
- Ex : commande associée à un customer_id inexistant dans la table clients` },
  { id:"fc-ch3-016", chapter:3, topic:"qualite", kind:"definition", front:`Traçabilité (dimension qualité)`, back:`Mesure la capacité à **identifier l'origine** d'une donnée et les transformations qu'elle a subies.
- Ex : impossible de savoir de quelle source provient une colonne calculée` },
  { id:"fc-ch3-017", chapter:3, topic:"qualite", kind:"definition", front:`Uniformité`, back:`Vérifie que les données sont représentées de manière **homogène** dans tout le système.
- Ex : dates tantôt en YYYY-MM-DD, tantôt en DD/MM/YYYY` },

  // --- Concepts du cours ---
  { id:"fc-ch3-018", chapter:3, topic:"qualite", kind:"concept", front:`Disponible vs exploitable vs fiable`, back:`3 étapes du DataOps pipeline :
- **Disponible** : brute, non vérifiée, stockée en vrac
- **Exploitable** : formatée, accessible, dans un format manipulable
- **Fiable** : complète, valide/exacte, opportune, cohérente — testée et maîtrisée
Disponibilité ≠ fiabilité.` },
  { id:"fc-ch3-019", chapter:3, topic:"qualite", kind:"concept", front:`Qualité ML = f(Code, Données)`, back:`**Garbage in, garbage out** : un algorithme optimisé échouera silencieusement si les données sous-jacentes sont corrompues.
- Data drift : évolution naturelle des données de prod qui dégrade la performance
- Concept drift : changement de la relation variables d'entrée ↔ cible métier` },
  { id:"fc-ch3-020", chapter:3, topic:"qualite", kind:"concept", front:`Confiance dans les données`, back:`Degré d'assurance qu'un utilisateur/système peut avoir quant à la **fiabilité, compréhension, traçabilité et stabilité** d'un actif de données.
- Éléments : qualité, métadonnées, lineage, tests/validations, gouvernance, monitoring, feedback loops` },
  { id:"fc-ch3-021", chapter:3, topic:"qualite", kind:"concept", front:`3 types de métadonnées`, back:`- **Descriptives** (le métier) : glossaire, signification (ex : amount = montant TTC)
- **Structurelles** (l'architecture) : schémas, clés étrangères, types
- **Administratives** (la gouvernance) : permissions, fraîcheur, rétention, propriétaire` },
  { id:"fc-ch3-022", chapter:3, topic:"qualite", kind:"concept", front:`Principe du Shift Left`, back:`Déplacer les contrôles qualité **le plus tôt possible** dans le pipeline.
- Approche traditionnelle : détection tardive, coût de correction élevé
- Approche DataOps : détection précoce, coût réduit
- Permet aussi : localiser la source d'un incident, empêcher la promotion de données invalides` },
  { id:"fc-ch3-023", chapter:3, topic:"qualite", kind:"concept", front:`Statistical Process Control (SPC)`, back:`Méthode de surveillance statistique pour détecter des **variations anormales** dans un flux de données au fil du temps.
- Détecte : chute/hausse anormale, rupture de tendance, dérive progressive, signaux faibles
- Complète les tests de structure et de contenu` },
  { id:"fc-ch3-024", chapter:3, topic:"qualite", kind:"concept", front:`Gouvernance Agile (DataGovOps)`, back:`Automatiser la conformité **sans freiner l'innovation**.
- Traditionnelle : processus manuels, silos, règles rigides (bottleneck)
- DataGovOps : libres-services encadrés, règles en code (*governance-as-code*), pipeline CI/CD` },
  { id:"fc-ch3-025", chapter:3, topic:"qualite", kind:"concept", front:`Validation distribuée dans le pipeline`, back:`Les contrôles ne sont pas une étape unique mais **répétés et intégrés** à chaque niveau :
Ingestion → Raw → Transformation → Curated → Features/ML → Production
- Contrôle de schéma, nullité/unicité, cohérence métier, qualité avant publication, contrôles en production` },
  { id:"fc-ch3-026", chapter:3, topic:"qualite", kind:"concept", front:`3 familles de tests de données`, back:`- **Tests de schéma** : structure, types (\`assert expected_cols in df\`)
- **Tests de contenu** : nullité, unicité, domaine (\`col.isnull().mean() < 0.01\`)
- **Tests métier** : cohérence temporelle, intégrité référentielle, fraîcheur/SLA (\`delivery_date >= order_date\`)` },
  { id:"fc-ch3-027", chapter:3, topic:"qualite", kind:"concept", front:`Qualité dans la CI des pipelines`, back:`Nouveau code/donnée → pipeline CI déclenché → exécution des tests (schéma, métier, SPC) → **Gatekeeper** → succès (merge/déploiement) ou échec (pipeline bloqué/alerte).
Principe : pas de promotion sans validation.` },
  { id:"fc-ch3-028", chapter:3, topic:"qualite", kind:"concept", front:`Boucle d'amélioration continue (Kaizen)`, back:`Définir → Mesurer → Détecter → Analyser → Corriger → Réévaluer → Capitaliser.
- Observabilité : comprendre *pourquoi*, pas juste détecter *qu'il y a* un problème
- Étapes clés : télémétrie → détection d'anomalie → analyse de cause racine (RCA) → amélioration continue` },
  { id:"fc-ch3-029", chapter:3, topic:"qualite", kind:"concept", front:`Composants d'un data contract`, back:`- Schéma attendu (colonnes, types, structure)
- SLA & fraîcheur (délais de mise à disposition)
- Règles de qualité (unicité, nullité, domaine, seuils)
- Ownership & évolution (responsable, gestion des changements)` },
  { id:"fc-ch3-030", chapter:3, topic:"qualite", kind:"concept", front:`Architecture d'un pipeline de confiance`, back:`Sources → Ingestion → Transformation → Produits data → Usages, avec 3 gates :
- Gate 1 : data contracts & shift-left
- Gate 2 : contrôles statistiques & détection d'anomalies
- Gate 3 : tests métier & validation finale
Couche transverse : observabilité, métadonnées, gouvernance.` },
  { id:"fc-ch3-031", chapter:3, topic:"qualite", kind:"concept", front:`Pourquoi la gouvernance n'est pas qu'administrative`, back:`Elle **transforme la qualité en responsabilité organisationnelle** : qui est responsable, qui valide les définitions métier, quels seuils, qui autorise l'évolution de schéma, que faire en cas de non-conformité.` },

  // --- Cas pratiques (case) ---
  { id:"fc-ch3-032", chapter:3, topic:"qualite", kind:"case", front:`Cas e-commerce : incident data lineage`, back:`Entrepôt alimenté chaque nuit par 3 sources (web, CRM, logistique). Incidents observés :
- Volumes journaliers anormaux → fraîcheur/anomalie (SPC)
- customer_id manquant → complétude
- Dates de livraison < dates de commande → cohérence/intégrité
- Dashboards contradictoires → absence de contrôles de cohérence en aval` },
  { id:"fc-ch3-033", chapter:3, topic:"qualite", kind:"case", front:`Exemple : table "fiable" en apparence`, back:`Une table de commandes peut être **chargée sans erreur technique** mais rester non fiable si elle contient des doublons, des montants négatifs ou aucune définition métier.
→ Disponibilité ≠ fiabilité` },
  { id:"fc-ch3-034", chapter:3, topic:"qualite", kind:"case", front:`Exemple data contract exécutable`, back:`\`\`\`
dataset: daily_orders
owner: équipe sales_data
fréquence: quotidienne
champs_obligatoires:
  - order_id (unique, not_null)
  - customer_id (null_threshold < 1%)
  - delivery_date (>= order_date)
\`\`\`
Tout changement de schéma doit être anticipé et négocié.` },
  { id:"fc-ch3-035", chapter:3, topic:"qualite", kind:"case", front:`Effets d'une donnée non fiable`, back:`- Sur les systèmes data : tableaux de bord trompeurs, indicateurs erronés, décisions mal orientées
- Sur les systèmes ML : entraînement sur données biaisées, features instables, baisse de performance en production` },
);
