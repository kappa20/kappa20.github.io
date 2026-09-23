/* Chapter 5 — Data Warehouse, BI & ETL/ELT (TP Talend) : flashcards. */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- Décisionnel & OLTP/OLAP ---
  { id:"fc-ch5-001", chapter:5, topic:"decisionnel", kind:"concept", front:`Les 3 niveaux de la hiérarchie de la prise de décision`, back:`- **Top / stratégique** : Direction générale ou État ; décisions uniques, occasionnelles (nouveaux marchés, fusion, abandon d'une activité)
- **Middle / tactique** : directions fonctionnelles ; peu fréquentes, peu prévisibles (choisir des fournisseurs, prévoir les ventes, campagne pub)
- **Lower / opérationnel** : chefs de services/d'atelier ; fréquentes, très prévisibles (retards de commande, planning employés)` },
  { id:"fc-ch5-002", chapter:5, topic:"oltp-olap", kind:"definition", front:`OLTP`, back:`**OnLine Transaction Processing** : traitement transactionnel en ligne, pour les opérations quotidiennes (systèmes opérationnels / ERP).
- Ex : « le 15/01/2019 à 14h30, le client X a retiré 1000 DH du compte Y »
- Lecture/écriture, requêtes simples, nombreuses, ms` },
  { id:"fc-ch5-003", chapter:5, topic:"oltp-olap", kind:"definition", front:`OLAP`, back:`**OnLine Analytical Processing** : traitement analytique en ligne, pour analyser les données et aider à la décision (Data Warehouse).
- Ex : « volume des ventes par produit et par région au 2e trimestre 2019 ? »
- Lecture seule, requêtes complexes, ad hoc, s à h` },
  { id:"fc-ch5-004", chapter:5, topic:"oltp-olap", kind:"concept", front:`OLTP vs OLAP : conception, données, vue`, back:`| | OLTP | OLAP |
|---|---|---|
| Conception | orientée application/transaction, structure statique (E/R) | orientée sujet/analyse, structure évolutive (étoile, flocon) |
| Données | détaillées, courantes, normalisées, courte période | agrégées, historisées, dénormalisées |
| Vue | relationnelle | multidimensionnelle |
| Enregistrements accédés | dizaines | millions |` },
  { id:"fc-ch5-005", chapter:5, topic:"oltp-olap", kind:"concept", front:`OLTP vs OLAP : requêtes, utilisateurs, accès, taille`, back:`| | OLTP | OLAP |
|---|---|---|
| Requêtes | simples, répétitives, sensibles à la perf (ms) | complexes, ad hoc, moins sensibles (s-min-h) |
| Fonction | opérations quotidiennes | aide à la décision |
| Utilisateurs | agents opérationnels, milliers, concurrents | managers/analystes, dizaines-centaines, non concurrents |
| Accès | lecture/écriture | lecture |
| Taille | 100 Mo à quelques Go | 100 Go à 1 To, voire Po |` },
  { id:"fc-ch5-006", chapter:5, topic:"oltp-olap", kind:"concept", front:`Données opérationnelles vs données décisionnelles`, back:`- Opérationnelles : **détaillées**, courantes/récentes, structure pour l'informaticien, réparties et non homogènes, utilisateurs nombreux et concurrents
- Décisionnelles : **agrégées/globalisées**, historiques/historisées, structure compréhensible par le décideur, centralisées et intégrées, utilisateurs peu nombreux et non concurrents` },
  { id:"fc-ch5-007", chapter:5, topic:"oltp-olap", kind:"concept", front:`Pourquoi ne pas utiliser un SGBD classique pour décider ?`, back:`Un SGBD (OLTP) sert à insérer/modifier/interroger vite et en sécurité, avec beaucoup d'utilisateurs simultanés.
Un DW sert à **regrouper** des sources diverses, **intégrer**, offrir une vue orientée métier, retrouver/analyser/**comparer** rapidement.
- BD opérationnelle : actuel, individuel, orientée processus, peu d'enregistrements/requête, normalisée, très volatile
- DW : historique, individuel + résumé, orienté sujet, milliers/requête, normalisation relâchée, rafraîchi (non volatil)` },
  // --- ODS / DW / DM / Data Mining ---
  { id:"fc-ch5-008", chapter:5, topic:"dw", kind:"definition", front:`Data Warehouse (Inmon, 1996)`, back:`Collection de données **orientées sujet, intégrées, non volatiles et historisées**, organisées pour le support d'un processus d'aide à la décision.
- « Un Data Warehouse ne s'achète pas, il se construit » (Inmon)
- Base à des fins d'analyse, alimentée après nettoyage et homogénéisation des systèmes OLTP` },
  { id:"fc-ch5-009", chapter:5, topic:"dw", kind:"concept", front:`Les 4 caractéristiques d'un DW`, back:`- **Orienté sujet** : trié par thème (clients, produits, ventes), pas par processus
- **Intégré** : données hétérogènes nettoyées, rationalisées, normalisées
- **Non volatil** : une donnée entrée n'est jamais modifiée ni supprimée (lecture seule)
- **Historisé (time-variant)** : composante temporelle, données datées, référentiel temps` },
  { id:"fc-ch5-010", chapter:5, topic:"dw", kind:"definition", front:`ODS (Operational Data Store)`, back:`Collection de données orientées sujet, **volatiles**, pour un processus de décision ponctuel en support d'une activité opérationnelle.
- Vision immédiate et intégrée de l'état des systèmes opérants ; niveau de détail fin
- C'est l'endroit où l'on **traite** les données en vue de leur intégration dans le DW (pas où on les analyse)` },
  { id:"fc-ch5-011", chapter:5, topic:"dw", kind:"concept", front:`ODS vs Data Warehouse`, back:`- ODS : intégration **en ligne**, sauvegarde des données **récentes**, vue unique modifiable en ligne (ex : dossier d'un patient dispersé dans plusieurs BD)
- DW : intégration **hors ligne**, données historisées, non volatiles, pour l'analyse` },
  { id:"fc-ch5-012", chapter:5, topic:"dw", kind:"definition", front:`Data Mart`, back:`Magasin de données orienté sujet, non volatil, **sous-ensemble du DW**, ciblé pour un usage/point de vue métier particulier (Finance, Ventes, Achats…).
- Contexte décisionnel décentralisé` },
  { id:"fc-ch5-013", chapter:5, topic:"dw", kind:"concept", front:`Data Warehouse vs Data Mart`, back:`| | DW | DM |
|---|---|---|
| Système | centralisé, niveau entreprise | décentralisé |
| Contenu | toutes mesures/dimensions | dimensions/mesures limitées, thème métier |
| Orientation | données | projet |
| Taille | > 100 Go | < 100 Go |
| Mise en œuvre | mois à années | quelques mois |
- Un seul DW par entreprise, plusieurs DM` },
  { id:"fc-ch5-014", chapter:5, topic:"dw", kind:"definition", front:`Data Mining`, back:`Ensemble d'outils, méthodes et technologies d'analyse pour **définir des tendances, segmenter** l'information ou établir des **corrélations** entre les données.
- Exploite le DW (fouille de données)` },
  { id:"fc-ch5-015", chapter:5, topic:"architecture", kind:"concept", front:`Inmon (top-down) vs Kimball (bottom-up)`, back:`| | Inmon | Kimball |
|---|---|---|
| Sens | Top-down | Bottom-up |
| Approche | Data Warehouse d'entreprise (EDW), logiquement centralisé | Data marts indépendants |
| Schématisation | Flocon (normalisé) | Étoile |
| Intégration | plus élevée, portée large | plus faible, portée plus petite |` },
  { id:"fc-ch5-016", chapter:5, topic:"architecture", kind:"concept", front:`Architecture top-down : flux des données`, back:`Sources opérationnelles + externes → **Staging area** (extraction, transformation) → **Data Warehouse** (données détaillées et résumées, EDW) → **Data marts** → départements utilisateurs.
- Un seul DW pour toute l'entreprise, les DM en sont dérivés` },
  { id:"fc-ch5-017", chapter:5, topic:"architecture", kind:"concept", front:`Architecture bottom-up : flux des données`, back:`Sources opérationnelles + externes → transformation → **Data marts** directement → départements utilisateurs.
- Pas d'EDW préalable : DM indépendants, intégration inférieure, projet plus petit et plus rapide` },
  // --- ETL / ELT ---
  { id:"fc-ch5-018", chapter:5, topic:"etl", kind:"definition", front:`ETL — Extract, Transform, Load`, back:`Les données sont extraites, **transformées sur un serveur intermédiaire**, puis chargées dans l'entrepôt.
- + données nettoyées avant stockage, moins de charge sur la cible, données très structurées
- − plus lent, rigide (transformations difficiles à modifier)
- Outils : Talend, Informatica, SSIS` },
  { id:"fc-ch5-019", chapter:5, topic:"etl", kind:"definition", front:`ELT — Extract, Load, Transform`, back:`Les données sont extraites, **chargées directement** dans l'entrepôt, puis transformées **dans le SGBD cible**.
- + chargement très rapide, scalabilité, accès aux données brutes (ML), moins de bande passante
- − exige un DW puissant (Snowflake, BigQuery), moins de sécurité par défaut sur le brut
- Usage : Cloud DW, Big Data, Data Lakes ; outils : KNIME, Fivetran, Matillion, Airbyte` },
  { id:"fc-ch5-020", chapter:5, topic:"etl", kind:"concept", front:`ETL : étape Extraction`, back:`Extraire les données de leur environnement d'origine (BDR, fichiers plats, ERP, CRM…).
- Outils spécifiques pour accéder à des BD de production hétérogènes
- N'extraire que le nécessaire : données **créées/modifiées depuis la dernière extraction**
- Attention : **ne pas perturber l'activité de production**` },
  { id:"fc-ch5-021", chapter:5, topic:"etl", kind:"concept", front:`ETL : étape Transformation`, back:`- Intégration : **homogénéiser** vocabulaire, structures, valeurs (formats de dates 22/01/2019 vs Jan.22, 2019 ; unités)
- Supprimer/fusionner les **redondances** (une même personne dans 2 BD)
- **Épuration** : incohérences, valeurs manquantes/aberrantes
- Mise au **format cible**` },
  { id:"fc-ch5-022", chapter:5, topic:"etl", kind:"concept", front:`ETL : étape Chargement`, back:`Charger les données nettoyées dans le DW.
- Calculs et agrégations ; prise en compte de la **granularité** (détail conservé + agrégats pour la synthèse)
- Procédures de chargement (nocturne ?) et de **restauration**
- Systèmes redondants si la disponibilité ne peut être interrompue` },
  { id:"fc-ch5-023", chapter:5, topic:"etl", kind:"concept", front:`Évaluation ETL vs ELT (Datawarehouse)`, back:`- ETL : **indépendance vis-à-vis du SGBD**, mais opérations complexes dans les transformations
- ELT : technologie d'**optimisation supérieure** du SGBD relationnel, **moins de bande passante réseau**
- Combinaison des deux architectures possible` },
  { id:"fc-ch5-024", chapter:5, topic:"etl", kind:"definition", front:`Métabase / catalogue de métadonnées`, back:`Métadonnées du DW = données sur les données ; idéalement **lieu unique** des informations qui pilotent les processus de l'entrepôt.
- Données entreposées : format, signification, degré d'exactitude
- Processus d'extraction depuis les sources
- Date du dernier chargement ; historique des sources et du DW` },
  { id:"fc-ch5-025", chapter:5, topic:"etl", kind:"concept", front:`Push, Pull, Push-Pull`, back:`Trois façons de rapatrier les données vers la **Staging Area** :
- **Push** : la source pousse quand elle peut (logique de chargement côté production)
- **Pull** : la Staging Area tire les données de la source
- **Push-Pull** : la source prépare et prévient ; la Staging Area récupère (si occupée, nouvelle demande plus tard)` },
  { id:"fc-ch5-026", chapter:5, topic:"etl", kind:"concept", front:`Full load vs Delta (incremental) load`, back:`- **Full load** : chargement initial/complet, déchargement total à la première alimentation
- **Delta / incremental load** : à intervalles réguliers ; **incréments de flux** (petits volumes) ou **de lots** (gros volumes)` },
  { id:"fc-ch5-027", chapter:5, topic:"etl", kind:"concept", front:`Les 3 structures de DW selon la mise à jour`, back:`- **Directe simple** : mises à jour espacées
- **Cumul simple** : on stocke chaque mise à jour (fréquente) → beaucoup d'espace, aucune perte d'information
- **Résumé déroulant** : détail récent + synthèse des anciennes données ; plus c'est vieux, moins c'est détaillé` },
  // --- Talend ---
  { id:"fc-ch5-028", chapter:5, topic:"talend", kind:"concept", front:`Installer Talend Open Studio for Data Integration`, back:`- Prérequis **Java** : JDK ≥ 11 pour 8.0+ (Java 8 pour 7.x) ; \`java -version\`
- Variable système **JAVA_HOME** (chemin du JDK) + ajouter \`%JAVA_HOME%\\bin\` au **Path**
- Télécharger « TOS Data Integration », dézipper (ex : C:\\Talend), **éviter un chemin avec espaces** (« Program Files »), lancer TOS_DI-…exe` },
  { id:"fc-ch5-029", chapter:5, topic:"talend", kind:"definition", front:`Talend : Job, tRowGenerator, tLogRow`, back:`- **Job** : espace de travail = suite de composants reliés pour une tâche (extraire, transformer, charger)
- **tRowGenerator** : composant d'entrée qui crée des données fictives (tester sans fichier/BD) ; fonctions \`TalendDataGenerator.getFirstName()\`, \`getUSCity()\`
- **tLogRow** : composant de sortie qui affiche dans la console (Mode Table pour un affichage clair)` },
  { id:"fc-ch5-030", chapter:5, topic:"talend", kind:"concept", front:`Talend : composants d'un pipeline source → cible`, back:`- Source fichier : CSV (tFileInputDelimited) ; source BD : **tDBInput** (Microsoft SQL Server)
- **tMap** : jointures/filtres/mapping (ex : garder les employés habitant au Canada)
- **tAggregateRow** : regroupement + agrégats (somme, moyenne)
- Sortie : **tFileOutputExcel**, ou stockage dans une BD` },
  { id:"fc-ch5-031", chapter:5, topic:"talend", kind:"case", front:`TP Talend : pipeline CSV → Excel avec agrégat`, back:`1. Déposer la source CSV dans le job (configurer le fichier)
2. Ajouter **tAggregateRow**, relier, synchroniser les colonnes
3. Modifier le schéma : ajouter la colonne **Total** (Total_des_sommes)
4. Champ de regroupement : **job_title** ; opération : somme
5. Ajouter **tFileOutputExcel**, relier, configurer le format, exécuter` },
  { id:"fc-ch5-032", chapter:5, topic:"talend", kind:"case", front:`TP Talend : moyenne des employés du Canada (SQL Server → Excel)`, back:`1. **tDBInput** (Microsoft SQL Server) : configurer la connexion, lire les données
2. **tMap** : filtrer les employés habitant au **Canada**
3. **tAggregateRow** : calculer la **moyenne**
4. Sortie **Excel** ; exécuter le job` },
  { id:"fc-ch5-033", chapter:5, topic:"talend", kind:"concept", front:`Sources, transformations et stockages d'un pipeline`, back:`- **Sources** : BD (SQL/NoSQL), fichiers plats, applications/cloud (SaaS), services web, réseaux sociaux
- **Transformations** : nettoyage, formatage/conversion, enrichissement (jointures), filtrage, agrégation, logique conditionnelle (mapping), tri
- **Stockage** : data lakes/objets cloud, data warehouses, BD classiques, systèmes de fichiers` }
);
