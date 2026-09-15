/* Chapter 6 — Monitoring, observabilité, gouvernance & LLMOps : flashcards. */
window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  // --- Définitions à produire (TD Exercice 3, 12 termes) ---
  { id:"fc-ch6-001", chapter:6, topic:"monitoring", kind:"definition", front:`Monitoring`, back:`Surveillance continue d'un système à partir d'indicateurs prédéfinis, à l'aide de métriques, logs et traces, afin de détecter rapidement les anomalies et maintenir son bon fonctionnement.
- Question : le système est-il normal ou anormal ?
*(Ait Daoud, 2025)*` },
  { id:"fc-ch6-002", chapter:6, topic:"observabilite", kind:"definition", front:`Observabilité`, back:`Capacité à comprendre l'état interne d'un système à partir des signaux qu'il produit (logs, métriques, traces, événements, métadonnées, lineage).
- Question : pourquoi ce problème se produit-il ?
*(Ait Daoud, 2025)*` },
  { id:"fc-ch6-003", chapter:6, topic:"observabilite", kind:"definition", front:`Logging`, back:`Enregistrement des événements importants produits par une application, un pipeline ou un modèle en production.
- Permet de diagnostiquer : entrées/prédictions, performance/drift/latence, segments, version du modèle, coût
- Ex : log JSON structuré (timestamp, service, model_version, latency_ms, status)` },
  { id:"fc-ch6-004", chapter:6, topic:"monitoring", kind:"definition", front:`Métrique`, back:`Mesure quantitative collectée régulièrement.
- Familles : système (CPU, mémoire), application (requêtes, erreurs, latence), pipeline data (volume, fraîcheur), qualité données (nulls, doublons), modèle ML (perf, drift), business (adoption), coût (coût/prédiction)` },
  { id:"fc-ch6-005", chapter:6, topic:"monitoring", kind:"definition", front:`Alerte`, back:`Notification déclenchée lorsqu'un indicateur dépasse un seuil ou révèle un comportement anormal nécessitant une action.
- Critères : actionnable, priorisée, contextualisée, reliée à une procédure, limitée (pas de bruit)` },
  { id:"fc-ch6-006", chapter:6, topic:"drift", kind:"definition", front:`Data drift`, back:`Changement dans la distribution statistique des **données d'entrée** (X).
- Ex : nouveaux profils clients
- Ce qui change : la distribution des variables d'entrée` },
  { id:"fc-ch6-007", chapter:6, topic:"drift", kind:"definition", front:`Prediction drift`, back:`Changement dans la distribution des **prédictions du modèle** (ŷ).
- Ex : hausse des prédictions "risque élevé"
- Peut survenir même sans changement visible des données d'entrée` },
  { id:"fc-ch6-008", chapter:6, topic:"drift", kind:"definition", front:`Concept drift`, back:`La **relation entre les variables d'entrée et la variable cible** change : la même donnée n'a plus la même signification.
- Ex : nouvelles stratégies de fraude
- Ce qui change : la relation X ↔ y` },
  { id:"fc-ch6-009", chapter:6, topic:"gouvernance", kind:"definition", front:`Metadata (métadonnées)`, back:`Données qui décrivent d'autres données : structure, sens, source, fréquence, responsabilité, contraintes de qualité, usages autorisés.
- 3 types : descriptives (métier), structurelles (architecture), administratives (gouvernance)
*(Atwal, 2019)*` },
  { id:"fc-ch6-010", chapter:6, topic:"gouvernance", kind:"definition", front:`Data lineage`, back:`Traçabilité du parcours d'une donnée, depuis sa source jusqu'à ses transformations et ses usages finaux.
- Chaîne : Source → Ingestion → Transformation → Produit data → Usage
- Sans lineage, les erreurs circulent plus vite que leur explication.` },
  { id:"fc-ch6-011", chapter:6, topic:"gouvernance", kind:"definition", front:`Gouvernance des données`, back:`Ensemble des règles, rôles, responsabilités et mécanismes de pilotage qui encadrent la production, l'usage et l'évolution des données (et des modèles).
- Doit être intégrée aux pipelines : tests automatisés, contrôles d'accès, logs d'audit, documentation, lineage` },
  { id:"fc-ch6-012", chapter:6, topic:"llmops", kind:"definition", front:`LLMOps`, back:`Application des principes MLOps aux systèmes fondés sur des modèles de langage (LLM).
- Objets à surveiller : prompts, réponses générées, contexte RAG, documents récupérés, hallucinations, sécurité, coût en tokens, latence, feedback, qualité` },

  // --- Concepts du cours ---
  { id:"fc-ch6-013", chapter:6, topic:"monitoring", kind:"concept", front:`Pourquoi surveiller après le déploiement ?`, back:`Un modèle disponible n'est pas nécessairement fiable dans le temps. 6 dimensions à surveiller :
- Données sources (schéma, volume, fraîcheur)
- Comportements (clients, utilisateurs, marché)
- Performance ML (drift, segments, labels différés)
- Exploitation (latence, erreurs, incidents)
- Risques (sécurité, privacy, conformité)
- Coûts (ressources cloud, inférence, tokens)` },
  { id:"fc-ch6-014", chapter:6, topic:"monitoring", kind:"concept", front:`4 objectifs de la surveillance post-déploiement`, back:`- Détecter les anomalies
- Préserver la qualité
- Maintenir la performance ML
- Assurer la confiance et la gouvernance
"Un pipeline data/ML fiable est surveillé, compréhensible, traçable et améliorable."` },
  { id:"fc-ch6-015", chapter:6, topic:"observabilite", kind:"concept", front:`Monitoring vs observabilité (tableau comparatif)`, back:`| Critère | Monitoring | Observabilité |
|---|---|---|
| Question | Est-ce que qqch ne va pas ? | Pourquoi cela ne va pas ? |
| Approche | Indicateurs prédéfinis | Exploration et diagnostic |
| Données | Métriques, seuils, alertes | Logs, métriques, traces, lineage, événements |
| Exemple | Alerte : taux d'erreur > 5% | Analyse : quelle version, quelle source, quelle requête ? |
| Objectif | Détection | Compréhension et résolution |
Le monitoring signale un problème ; l'observabilité aide à le comprendre.` },
  { id:"fc-ch6-016", chapter:6, topic:"observabilite", kind:"concept", front:`Les 5 signaux fondamentaux d'observabilité`, back:`- **Logs** : événements structurés
- **Métriques** : mesures dans le temps
- **Traces** : parcours de requête
- **Alertes** : signaux actionnables
- **Lineage** : origine & transformations
"Les logs expliquent, les métriques indiquent, les traces localisent, le lineage contextualise."` },
  { id:"fc-ch6-017", chapter:6, topic:"monitoring", kind:"concept", front:`Familles de métriques (7)`, back:`| Famille | Exemples |
|---|---|
| Système | CPU, mémoire, disque, réseau |
| Application | requêtes, erreurs, latence |
| Pipeline data | volume, fraîcheur, durée, échecs |
| Qualité données | nulls, doublons, schéma, validité |
| Modèle ML | performance, drift, prédictions |
| Business | adoption, gain, valeur produite |
| Coût | coût pipeline, coût prédiction, coût inférence |
Un produit data/ML doit être surveillé techniquement, statistiquement, économiquement et métier.` },
  { id:"fc-ch6-018", chapter:6, topic:"monitoring", kind:"concept", front:`Critères d'une alerte utile`, back:`- Actionnable
- Priorisée
- Contextualisée
- Reliée à une procédure
- Limitée (évite le bruit d'alertes)
Ex : taux d'erreur API > 5% pendant 10 min ; pipeline non exécuté depuis 24h ; drift détecté sur plusieurs variables.` },
  { id:"fc-ch6-019", chapter:6, topic:"pipeline", kind:"concept", front:`Monitoring des pipelines de données (7 dimensions)`, back:`| Dimension | Question | Métrique |
|---|---|---|
| Disponibilité | Le pipeline tourne-t-il ? | taux de succès |
| Fraîcheur | Données à jour ? | âge dernière donnée |
| Volume | Volume normal ? | nombre de lignes |
| Schéma | Structure stable ? | colonnes modifiées |
| Qualité | Règles respectées ? | taux de nulls |
| Performance | Job rapide ? | durée d'exécution |
| Coût | Consommation maîtrisée ? | coût par run |` },
  { id:"fc-ch6-020", chapter:6, topic:"model-monitoring", kind:"concept", front:`Chaîne de model monitoring`, back:`Données → Features → Modèle → Prédictions → Feedback
Vise à vérifier qu'un modèle conserve sa performance et sa pertinence en production.` },
  { id:"fc-ch6-021", chapter:6, topic:"model-monitoring", kind:"concept", front:`Ce que surveille le model monitoring`, back:`| Élément | Question |
|---|---|
| Données d'entrée | Ressemblent-elles aux données d'entraînement ? |
| Prédictions | La distribution a-t-elle changé ? |
| Performance | Le modèle reste-t-il précis quand les labels arrivent ? |
| Segments | Fonctionne-t-il pour tous les groupes ? |
| Latence | Répond-il assez vite ? |
| Robustesse | Réagit-il bien aux valeurs extrêmes ? |
| Version | Quelle version a produit quelle prédiction ? |` },
  { id:"fc-ch6-022", chapter:6, topic:"model-monitoring", kind:"concept", front:`Le problème du délai des labels`, back:`La vérité terrain n'est pas toujours disponible immédiatement :
| Cas | Label disponible | Signaux indirects |
|---|---|---|
| Churn | après plusieurs semaines | features, prédictions, feedback |
| Crédit | après plusieurs mois | scores, défauts retardés |
| Maintenance | au futur incident | capteurs, anomalies |
| Recommandation | après comportement utilisateur | clics, achats, satisfaction |
Quand les labels tardent : surveiller distributions, confiance, drift, métriques business retardées.` },
  { id:"fc-ch6-023", chapter:6, topic:"drift", kind:"concept", front:`Diagramme data/prediction/concept drift`, back:`Entrées X → Modèle → Prédictions ŷ → Réalité y
- Data drift : porte sur X (entrées)
- Prediction drift : porte sur ŷ (sorties du modèle)
- Concept drift : porte sur la relation X ↔ y (réalité)` },
  { id:"fc-ch6-024", chapter:6, topic:"feedback", kind:"concept", front:`Feedback loop — cycle Kaizen`, back:`Kaizen : démarche d'amélioration continue par petites améliorations progressives et régulières *(Kaizen, 1986)*.
Cycle : Définir → Mesurer → Détecter → Analyser → Corriger → Redéployer → Capitaliser
Ex : baisse taux de clic → analyse segments → détection drift → enrichissement données → réentraînement → suivi post-redéploiement` },
  { id:"fc-ch6-025", chapter:6, topic:"kpi", kind:"concept", front:`KPIs de santé d'un produit data/ML (5 dimensions)`, back:`| Dimension | Exemples de KPI |
|---|---|
| Santé technique | disponibilité, erreurs, latence, incidents |
| Santé data | fraîcheur, complétude, validité, tests réussis |
| Santé modèle | performance, drift, stabilité, perf par segment |
| Santé produit | adoption, satisfaction, usage, décisions assistées |
| Santé économique | coût par run, coût par prédiction, coût par utilisateur |
Un système data/ML doit être suivi comme un produit vivant.` },
  { id:"fc-ch6-026", chapter:6, topic:"gouvernance", kind:"concept", front:`La confiance comme objectif central (Atwal)`, back:`La confiance ne se décrète pas : elle se construit par des mécanismes techniques, organisationnels et de gouvernance.
Repose sur : qualité, métadonnées, lineage, sécurité, privacy, gouvernance, monitoring, feedback.
Un utilisateur fait confiance s'il comprend : d'où viennent les données, comment elles ont été transformées, qui est responsable, qui y a accès, quelle version du modèle est utilisée, comment les anomalies sont corrigées.` },
  { id:"fc-ch6-027", chapter:6, topic:"gouvernance", kind:"concept", front:`3 types de métadonnées`, back:`- **Descriptives** (le métier) : glossaire, signification (ex : amount = montant TTC)
- **Structurelles** (l'architecture) : schémas, clés étrangères, types (ex : order_id = INT64)
- **Administratives** (la gouvernance) : permissions, fraîcheur, rétention, propriétaire` },
  { id:"fc-ch6-028", chapter:6, topic:"gouvernance", kind:"concept", front:`Workflow to deliver trust in data (Atwal)`, back:`Data source acquisition → validation/qualité/intégrité/watermarking → complétude/exactitude/cohérence/uniformité → classification, nettoyage, cataloguing → versioning
Couches transverses : metadata layer, data security & privacy layer, access & provisioning layer
+ data lineage tracking sur l'ensemble du flux.` },
  { id:"fc-ch6-029", chapter:6, topic:"gouvernance", kind:"concept", front:`Gouvernance Agile / DataGovOps`, back:`- **Command & Control** (traditionnelle) : processus manuels, silos, règles rigides → bottleneck, gouvernance vue comme tâche administrative
- **Agile / DataGovOps** : libres-services encadrés, règles implémentées en code (*governance-as-code*), gestion par les métadonnées
La gouvernance moderne = règles automatisées (contrôle d'accès, masquage PII) intégrées au pipeline CI/CD.` },
  { id:"fc-ch6-030", chapter:6, topic:"gouvernance", kind:"concept", front:`Gouvernance des données vs gouvernance des modèles`, back:`| Données | Modèles ML |
|---|---|
| ownership | versions de modèles |
| droits d'accès | datasets d'entraînement |
| classification | métriques d'évaluation |
| qualité | validation avant production |
| documentation | risques de biais |
| conformité, audit | retrait ou remplacement |` },
  { id:"fc-ch6-031", chapter:6, topic:"securite", kind:"concept", front:`Sécurité, privacy et traçabilité`, back:`Enjeux : confidentialité, intégrité, disponibilité, protection des données personnelles, auditabilité, traçabilité des accès.
Contrôles : gestion des rôles, authentification forte, chiffrement, masquage/pseudonymisation, logs d'accès, séparation des environnements, revue des permissions, politiques de rétention.
Un modèle performant mais non sécurisé peut devenir un risque pour l'organisation.` },
  { id:"fc-ch6-032", chapter:6, topic:"outils", kind:"concept", front:`Outils de monitoring, observabilité et gouvernance`, back:`| Outil | Rôle |
|---|---|
| Prometheus | collecte de métriques, séries temporelles, alerting |
| Grafana | dashboards, exploration, visualisation |
| Evidently | data drift, qualité, model monitoring, rapports |
| OpenLineage | traçabilité des datasets, jobs, runs, dépendances |
| Azure ML | illustration managée : endpoints, logs, métriques, drift |
| DataKitchen | logique DataOps : qualité continue et observabilité |` },
  { id:"fc-ch6-033", chapter:6, topic:"llmops", kind:"concept", front:`Ouverture vers LLMOps : objets à surveiller`, back:`LLMOps applique les principes MLOps aux systèmes fondés sur des LLM.
Objets spécifiques : prompts, réponses générées, contexte RAG, documents récupérés, hallucinations, sécurité, coût en tokens, latence, feedback utilisateur, qualité des réponses.` },
  { id:"fc-ch6-034", chapter:6, topic:"llmops", kind:"concept", front:`Risques spécifiques aux systèmes LLM`, back:`- Prompt injection
- Réponses non vérifiables
- Fuite d'informations sensibles
- Instabilité des réponses
- Hallucinations
- Difficulté d'évaluation automatique
- Coût variable
- Dépendance à des modèles externes
- Biais dans les réponses
- Mauvaise utilisation des documents récupérés` },
  { id:"fc-ch6-035", chapter:6, topic:"llmops", kind:"concept", front:`Monitoring d'un système RAG`, back:`Chaîne : Question → Retriever → Documents → Prompt enrichi → LLM → Réponse → Feedback
| Dimension | Indicateurs |
|---|---|
| Retrieval | nb documents, score de similarité, requêtes sans source |
| Génération | longueur, refus, hallucination suspectée |
| Coût | tokens input/output, coût par conversation |
| Sécurité | prompt injection, requêtes sensibles, fuite d'info |
| Qualité | feedback, exactitude, taux d'escalade humaine |
| Performance | latence totale, retrieval, LLM |` },

  // --- Cas pratiques (case) ---
  { id:"fc-ch6-036", chapter:6, topic:"monitoring", kind:"case", front:`Mini-exercice : pipeline en succès, données incomplètes`, back:`Pipeline quotidien (100 000 lignes/jour habituel) n'ingère que 12 000 lignes un matin, mais statut = success.
- Le job est techniquement réussi
- Les données sont fonctionnellement fausses
- Le dashboard devient trompeur
→ Il faut une alerte sur le volume ET la fraîcheur (ex : volume < 80% de la moyenne des 7 derniers jours).` },
  { id:"fc-ch6-037", chapter:6, topic:"model-monitoring", kind:"case", front:`Cas : churn — dérive silencieuse (TD)`, back:`Modèle churn, AUC = 0,87 à l'entraînement. 3 mois après déploiement : campagnes de rétention moins efficaces, mais API normale, latence stable, taux d'erreur faible.
Signaux cachés : proportion "à risque" en forte hausse, variables comportementales qui dérivent, labels réels à 45 jours de délai, coût d'inférence doublé.
→ Le monitoring technique seul ne suffit pas : il faut surveiller le drift, les métriques business retardées et les coûts (FinOps).` },
);
