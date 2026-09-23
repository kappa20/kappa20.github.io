/* Chapter 5 — Data Warehouse, BI & ETL/ELT : examen blanc.
   Cas d'étude = TP Talend réel (DE_TP_Talend, Pr. Bentaib) ; QCM/questions construits à partir du cours
   (Datawarehouse.pdf) et des diapos ETL/ELT du TP Talend. */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch5 = {
  chapter: 5,
  title: `Data Warehouse, BI & ETL/ELT — TP Talend`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch5-qcm-01", q:`Un Data Warehouse est, selon Inmon, une collection de données :`, choices:[`volatiles, orientées processus, normalisées`,`orientées sujet, intégrées, non volatiles et historisées`,`brutes, non structurées et temps réel`,`orientées application, courantes et détaillées`], answer:1, correction:`b — sujet, intégré, non volatil, historisé` },
    { id:"e-ch5-qcm-02", q:`OLAP se caractérise par :`, choices:[`des requêtes simples, répétitives, en millisecondes`,`des requêtes complexes, ad hoc, sur des données agrégées historisées`,`des écritures concurrentes de milliers d'agents`,`un schéma normalisé en 3FN`], answer:1, correction:`b — requêtes complexes/ad hoc, données agrégées et historisées, lecture seule` },
    { id:"e-ch5-qcm-03", q:`Un Data Mart est :`, choices:[`un entrepôt d'entreprise centralisé de plus de 100 Go`,`un sous-ensemble thématique du DW, orienté projet`,`un outil de fouille de données`,`une zone de transit volatile`], answer:1, correction:`b — sous-ensemble thématique du DW, < 100 Go, orienté projet` },
    { id:"e-ch5-qcm-04", q:`L'approche Kimball est :`, choices:[`top-down, fondée sur un EDW`,`bottom-up, fondée sur des data marts en étoile`,`sans data marts`,`uniquement ELT`], answer:1, correction:`b — bottom-up, data marts, étoile (Inmon = top-down, EDW)` },
    { id:"e-ch5-qcm-05", q:`Dans un processus ETL, la transformation :`, choices:[`consiste à extraire les données des sources`,`homogénéise, nettoie et met au format cible avant chargement`,`copie les données brutes dans le DW`,`supprime l'historique`], answer:1, correction:`b — homogénéisation, nettoyage, dédoublonnage, format cible` },
    { id:"e-ch5-qcm-06", q:`ELT est particulièrement adapté :`, choices:[`aux petits fichiers plats sans DW`,`aux Cloud DW puissants (Snowflake, BigQuery) et Data Lakes`,`aux systèmes sans réseau`,`aux transformations très rigides`], answer:1, correction:`b — Cloud DW, Big Data, Data Lakes ; transformation dans la cible` },
    { id:"e-ch5-qcm-07", q:`Dans Talend, le composant qui affiche les données dans la console est :`, choices:[`tRowGenerator`,`tMap`,`tLogRow`,`tAggregateRow`], answer:2, correction:`c — tLogRow (Mode Table pour un affichage clair)` },
    { id:"e-ch5-qcm-08", q:`Pour installer Talend Open Studio, il faut :`, choices:[`installer dans « Program Files » et ignorer Java`,`un JDK ≥ 11 (versions 8.0+), JAVA_HOME défini, chemin sans espaces`,`uniquement un navigateur web`,`Python 3.8 minimum`], answer:1, correction:`b — Java ≥ 11, JAVA_HOME + Path, éviter les espaces dans le chemin` }
  ],
  questions: [
    { id:"e-ch5-q-01", q:`Comparer OLTP et OLAP selon la conception, les données, la vue et le nombre d'enregistrements accédés.`, correction:`OLTP : orienté application, E/R statique, détaillées/normalisées/courantes, vue relationnelle, dizaines. OLAP : orienté sujet, étoile/flocon évolutif, agrégées/dénormalisées/historisées, vue multidimensionnelle, millions.` },
    { id:"e-ch5-q-02", q:`Pourquoi ne pas utiliser directement le SGBD opérationnel pour l'aide à la décision ?`, correction:`SGBD = OLTP (transactions rapides, nombreux utilisateurs). Décision = regrouper des sources diverses, historiser, vue métier, requêtes lourdes ad hoc → DW séparé, sans perturber la production.` },
    { id:"e-ch5-q-03", q:`Expliquer les quatre caractéristiques d'un Data Warehouse.`, correction:`Sujet (par thème), intégré (nettoyé/normalisé), non volatil (jamais modifié, lecture seule), historisé (daté, référentiel temps).` },
    { id:"e-ch5-q-04", q:`Distinguer ODS, Data Warehouse et Data Mart.`, correction:`ODS : récent, volatil, intégration en ligne, zone de traitement. DW : centralisé, historisé, > 100 Go. DM : sous-ensemble thématique, < 100 Go, orienté projet.` },
    { id:"e-ch5-q-05", q:`Décrire les architectures top-down (Inmon) et bottom-up (Kimball) et leurs différences.`, correction:`Top-down : sources → staging → EDW → data marts ; intégration élevée, portée large. Bottom-up : sources → transformation → data marts directement ; intégration faible, projet plus petit.` },
    { id:"e-ch5-q-06", q:`Détailler les trois étapes d'un ETL.`, correction:`Extraction (sans perturber la production, seulement le delta) ; Transformation (homogénéiser, dédoublonner, nettoyer, format cible) ; Chargement (calculs, granularité, restauration).` },
    { id:"e-ch5-q-07", q:`Comparer ETL et ELT (avantages, inconvénients, outils).`, correction:`ETL : données propres avant stockage, moins de charge cible, mais lent/rigide (Talend, Informatica, SSIS). ELT : chargement rapide, scalable, brut accessible, mais DW puissant requis, sécurité moindre (Fivetran, Airbyte, Matillion, KNIME).` },
    { id:"e-ch5-q-08", q:`Expliquer full load, delta load, et les modes push / pull / push-pull.`, correction:`Full : chargement initial complet. Delta : incréments réguliers (flux ou lots). Push : source pousse. Pull : staging tire. Push-pull : source prévient, staging récupère.` }
  ],
  vocab: [
    { id:"e-ch5-v-01", term:`OLTP`, correction:`Traitement transactionnel en ligne : opérations quotidiennes, données détaillées, lecture/écriture.` },
    { id:"e-ch5-v-02", term:`OLAP`, correction:`Traitement analytique en ligne : analyse multidimensionnelle de données agrégées pour la décision.` },
    { id:"e-ch5-v-03", term:`Data Warehouse`, correction:`Données orientées sujet, intégrées, non volatiles, historisées pour l'aide à la décision (Inmon).` },
    { id:"e-ch5-v-04", term:`Data Mart`, correction:`Sous-ensemble thématique du DW, orienté projet, usage métier ciblé.` },
    { id:"e-ch5-v-05", term:`ODS`, correction:`Operational Data Store : données récentes, volatiles, zone de traitement avant intégration au DW.` },
    { id:"e-ch5-v-06", term:`Staging Area`, correction:`Zone intermédiaire où arrivent et sont préparées les données avant chargement dans le DW.` },
    { id:"e-ch5-v-07", term:`ETL`, correction:`Extract-Transform-Load : transformation sur serveur intermédiaire avant chargement.` },
    { id:"e-ch5-v-08", term:`ELT`, correction:`Extract-Load-Transform : chargement du brut puis transformation dans le DW cible.` },
    { id:"e-ch5-v-09", term:`Delta load`, correction:`Chargement incrémental des seules données créées/modifiées depuis la dernière alimentation.` },
    { id:"e-ch5-v-10", term:`Métabase`, correction:`Catalogue de métadonnées du DW : formats, processus d'extraction, date du dernier chargement, historique.` },
    { id:"e-ch5-v-11", term:`Data Mining`, correction:`Outils/méthodes de fouille : tendances, segmentation, corrélations.` }
  ],
  analysis: [
    { id:"e-ch5-a-01", scenario:`Une banque exécute chaque jour des milliers de retraits et de virements, et son directeur veut le volume des dépôts par région et par trimestre.`, question:`Quels systèmes (OLTP / OLAP) répondent à chacun de ces besoins ? Justifier.`, correction:`Retraits/virements : OLTP (transactionnel, ms, lecture/écriture). Volume par région/trimestre : OLAP sur DW (agrégé, historisé, ad hoc).` },
    { id:"e-ch5-a-02", scenario:`Une même personne apparaît dans la BD Facturation et la BD Personnel avec des orthographes différentes, et les dates sont en formats 22/01/2019, 01/22/2019 et Jan.22, 2019.`, question:`Quelle étape ETL est concernée et que faut-il faire ?`, correction:`Transformation : homogénéiser formats de dates, fusionner les redondances (intégrer la personne), nettoyer, format cible.` },
    { id:"e-ch5-a-03", scenario:`Une entreprise migre vers un cloud DW (BigQuery) et veut conserver les données brutes pour du machine learning.`, question:`ETL ou ELT ? Justifier.`, correction:`ELT : chargement rapide du brut, transformation dans la cible puissante, brut accessible pour le ML, scalable.` },
    { id:"e-ch5-a-04", scenario:`Le DW est alimenté tous les jours ; le stockage explose mais le service veut garder tout l'historique fin.`, question:`Quelle structure de DW choisir et quelle alternative pour limiter le volume ?`, correction:`Cumul simple = aucune perte mais volumétrie forte ; alternative : résumé déroulant (détail récent, anciennes données synthétisées).` }
  ],
  case: {
    title: `TP Talend : pipelines CSV / SQL Server → Excel / base de données`,
    context: `Vous installez Talend Open Studio for Data Integration puis construisez plusieurs Jobs. Premier job : générer 100 lignes fictives (Nom, Prénom, Ville) et les afficher. Deuxième : un fichier CSV d'employés (colonnes dont job_title et un montant) à agréger par poste. Troisième : une base Microsoft SQL Server contenant des employés avec leur pays. Enfin : un job combinant les deux sources (SQL Server + CSV) avec stockage dans une base de données.`,
    tasks: [
      { id:"e-ch5-c-01", prompt:`1. Quels prérequis et quelles précautions pour installer Talend Open Studio ?`, correction:`- JDK ≥ 11 (8.0+), Java 8 pour 7.x ; \`java -version\`
- JAVA_HOME = chemin du JDK ; ajouter \`%JAVA_HOME%\\bin\` au Path
- Télécharger « TOS Data Integration », dézipper (ex : C:\\Talend), éviter « Program Files » (espaces)
- Lancer TOS_DI-…exe` },
      { id:"e-ch5-c-02", prompt:`2. Premier job : générer 100 lignes (Nom, Prénom, Ville) et les afficher en console. Composants et configuration ?`, correction:`- tRowGenerator → tLogRow, relier par un lien (Row)
- tRowGenerator : 100 lignes, colonnes Nom, Prenom, Ville, fonctions \`TalendDataGenerator.getFirstName()\`, \`getUSCity()\`
- tLogRow en Mode Table ; exécuter (onglet Exécution)` },
      { id:"e-ch5-c-03", prompt:`3. Job CSV : calculer le total des sommes par job_title et l'écrire dans Excel.`, correction:`- Source CSV configurée (schéma, séparateur)
- tAggregateRow : ajouter colonne Total (Total_des_sommes), regroupement job_title, fonction somme
- Relier, synchroniser les colonnes
- tFileOutputExcel : format du fichier de sortie ; exécuter
- Résultat : une ligne par poste (Cloud Engineer, Data Scientist, …) avec son total` },
      { id:"e-ch5-c-04", prompt:`4. Job SQL Server : calculer la moyenne des employés habitant au Canada et écrire dans Excel.`, correction:`- tDBInput (Microsoft SQL Server) : connexion + requête/schéma
- tMap : relier, filtrer le pays = Canada
- tAggregateRow : moyenne
- Sortie fichier Excel ; exécuter le job` },
      { id:"e-ch5-c-05", prompt:`5. Combiner SQL Server et CSV, puis stocker le résultat dans une BD. Décrire la démarche et classer le pipeline en ETL ou ELT.`, correction:`- Deux entrées : tDBInput (SQL Server) + tFileInputDelimited (CSV)
- tMap : jointure sur clé commune, mapping des colonnes
- Sortie : composant BD (tDBOutput) vers la base cible
- ETL : la transformation (tMap) a lieu dans Talend (serveur intermédiaire), avant le chargement` }
    ],
    deliverables: [
      `Schéma de chaque job (composants et liens)`,
      `Configuration de tRowGenerator, tAggregateRow et tMap`,
      `Fichiers Excel produits (total par job_title, moyenne Canada)`,
      `Justification ETL vs ELT pour le job final`
    ]
  }
};
