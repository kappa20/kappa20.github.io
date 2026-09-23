/* Chapter 5 — Data Warehouse, BI & ETL/ELT (TP Talend) : quiz (QCM + questions ouvertes). */
window.DE = window.DE || {};
window.DE.quiz = window.DE.quiz || [];
window.DE.quiz.push(
  // --- QCM (8) ---
  { id:"q-ch5-mcq-01", chapter:5, type:"mcq", q:`Quelle propriété n'appartient PAS à la définition d'Inmon d'un Data Warehouse ?`, choices:[`orienté sujet`,`volatile`,`intégré`,`historisé`], answer:1, explain:`Un DW est orienté sujet, intégré, **non volatil** et historisé. Un ODS, lui, est volatil.` },
  { id:"q-ch5-mcq-02", chapter:5, type:"mcq", q:`Laquelle de ces requêtes relève d'OLAP ?`, choices:[`Retirer 1000 DH du compte Y`,`Enregistrer une commande client`,`Volume des ventes par produit et par région au 2e trimestre`,`Mettre à jour l'adresse d'un client`], answer:2, explain:`OLAP = analyse agrégée multidimensionnelle ; les 3 autres sont des transactions OLTP.` },
  { id:"q-ch5-mcq-03", chapter:5, type:"mcq", q:`Dans un système OLTP, les données sont généralement :`, choices:[`agrégées et dénormalisées`,`historisées sur plusieurs années`,`détaillées, courantes et normalisées`,`accessibles en lecture seule`], answer:2, explain:`OLTP : données détaillées, courantes, normalisées, lecture/écriture. Le reste décrit OLAP.` },
  { id:"q-ch5-mcq-04", chapter:5, type:"mcq", q:`Quelle est la différence principale entre un DW et un Data Mart ?`, choices:[`le DM est centralisé, le DW décentralisé`,`le DW est de niveau entreprise ; le DM est un sous-ensemble ciblé sur un thème métier`,`le DM est plus grand que le DW`,`le DW est orienté projet`], answer:1, explain:`DW = entrepôt d'entreprise (> 100 Go, orienté données) ; DM = sous-ensemble thématique (< 100 Go, orienté projet).` },
  { id:"q-ch5-mcq-05", chapter:5, type:"mcq", q:`Quelle approche construit d'abord un entrepôt d'entreprise puis en dérive des Data Marts ?`, choices:[`Bottom-up (Kimball)`,`Top-down (Inmon)`,`ELT`,`Push-pull`], answer:1, explain:`Inmon = top-down : EDW centralisé d'abord ; Kimball = bottom-up : data marts d'abord.` },
  { id:"q-ch5-mcq-06", chapter:5, type:"mcq", q:`Dans un processus ELT, la transformation est réalisée :`, choices:[`sur un serveur intermédiaire avant le chargement`,`dans le système source`,`dans l'entrepôt de données cible après le chargement`,`n'est jamais réalisée`], answer:2, explain:`ELT : Extract → Load (données brutes) → Transform dans le DW cible (Snowflake, BigQuery…).` },
  { id:"q-ch5-mcq-07", chapter:5, type:"mcq", q:`Un chargement incrémental (delta load) consiste à :`, choices:[`recharger tout l'entrepôt à chaque fois`,`charger uniquement les données créées ou modifiées depuis la dernière alimentation`,`supprimer les anciennes données`,`charger uniquement le premier jour`], answer:1, explain:`Full load = chargement initial complet ; delta = incréments (flux ou lots) à intervalles réguliers.` },
  { id:"q-ch5-mcq-08", chapter:5, type:"mcq", q:`Dans Talend, quel composant permet de regrouper les lignes par job_title et de calculer une somme ?`, choices:[`tRowGenerator`,`tLogRow`,`tAggregateRow`,`tFileOutputExcel`], answer:2, explain:`tAggregateRow = regroupement + agrégats (somme, moyenne…). tRowGenerator génère, tLogRow affiche, tFileOutputExcel écrit.` },

  // --- Questions ouvertes ---
  { id:"q-ch5-open-01", chapter:5, type:"open", q:`Comparer OLTP et OLAP (conception, données, requêtes, utilisateurs, taille).`, model:`- Conception : OLTP orienté application/transaction, E/R statique ; OLAP orienté sujet/analyse, étoile/flocon
- Données : OLTP détaillées, courantes, normalisées ; OLAP agrégées, historisées, dénormalisées
- Requêtes : OLTP simples, répétitives, ms ; OLAP complexes, ad hoc, s à h
- Utilisateurs : OLTP milliers d'agents concurrents ; OLAP dizaines d'analystes
- Accès/Taille : lecture-écriture, Mo-Go vs lecture, Go-To/Po` },
  { id:"q-ch5-open-02", chapter:5, type:"open", q:`Définir un Data Warehouse et expliquer ses 4 caractéristiques.`, model:`Collection de données orientées sujet, intégrées, non volatiles, historisées pour l'aide à la décision (Inmon).
- Sujet : organisé par thème (clients, ventes)
- Intégré : sources hétérogènes nettoyées/normalisées
- Non volatil : jamais modifié/supprimé, lecture seule
- Historisé : données datées, référentiel temps` },
  { id:"q-ch5-open-03", chapter:5, type:"open", q:`Différence entre ODS, Data Warehouse et Data Mart.`, model:`- ODS : données récentes, volatiles, fines, intégration en ligne, vue opérationnelle immédiate ; zone de traitement avant le DW
- DW : entrepôt centralisé d'entreprise, historisé, non volatil, > 100 Go
- DM : sous-ensemble thématique du DW (Finance, Ventes), < 100 Go, orienté projet, quelques mois` },
  { id:"q-ch5-open-04", chapter:5, type:"open", q:`Comparer les approches Inmon (top-down) et Kimball (bottom-up).`, model:`- Inmon : EDW centralisé d'abord, puis data marts ; intégration élevée ; portée large, projet long
- Kimball : data marts d'abord (étoile), agrégés ensuite ; intégration plus faible, projet plus petit/rapide, logiquement décentralisé` },
  { id:"q-ch5-open-05", chapter:5, type:"open", q:`Décrire les trois étapes du processus ETL.`, model:`- Extraction : depuis BDR, fichiers, ERP, CRM ; seulement les données nouvelles/modifiées ; sans perturber la production
- Transformation : homogénéiser formats/vocabulaire, dédoublonner, nettoyer (manquantes, aberrantes), format cible
- Chargement : dans le DW ; calculs/agrégats, granularité, procédures de restauration` },
  { id:"q-ch5-open-06", chapter:5, type:"open", q:`ETL vs ELT : différences, avantages et inconvénients, cas d'usage.`, model:`- ETL : transformation sur serveur intermédiaire avant chargement ; données propres, moins de charge sur la cible ; mais plus lent et rigide. Outils : Talend, Informatica, SSIS
- ELT : chargement du brut puis transformation dans le DW ; rapide, scalable, brut disponible (ML), moins de bande passante ; mais DW puissant requis et sécurité du brut moindre. Cloud DW, Data Lakes ; Fivetran, Airbyte, Matillion` },
  { id:"q-ch5-open-07", chapter:5, type:"open", q:`Full load, delta load et structures de DW (directe, cumul, résumé déroulant).`, model:`- Full : chargement initial complet
- Delta : incréments réguliers (flux = petits volumes ; lots = gros volumes)
- Directe : mises à jour espacées
- Cumul simple : on garde chaque mise à jour → aucune perte, forte volumétrie
- Résumé déroulant : détail récent, anciennes données synthétisées` },
  { id:"q-ch5-open-08", chapter:5, type:"open", q:`Talend : décrire le job qui calcule la somme par job_title depuis un CSV et l'écrit dans Excel.`, model:`- Déposer/configurer la source CSV
- Ajouter tAggregateRow, relier, synchroniser les colonnes
- Ajouter la colonne Total_des_sommes au schéma
- Regroupement sur job_title, fonction somme
- Relier à tFileOutputExcel, configurer le fichier, exécuter` }
);
