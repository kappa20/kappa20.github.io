/* Chapter 3 — Qualité & tests de données : examen blanc (TD 3, transcrit). */
window.MDO = window.MDO || {};
window.MDO.exams = window.MDO.exams || {};
window.MDO.exams.ch3 = {
  chapter: 3,
  title: `TD 3 : Qualité des données, tests et data contracts`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch3-qcm-01", q:`La qualité des données doit être considérée :`, choices:[`comme une phase finale de nettoyage`,`comme une exigence intégrée au pipeline`,`comme une responsabilité exclusive des analystes`,`comme une tâche facultative`], answer:1, correction:`b — qualité intégrée au pipeline, pas une étape finale` },
    { id:"e-ch3-qcm-02", q:`Le data lineage permet principalement :`, choices:[`de compresser les données`,`de chiffrer les bases`,`de retracer l'origine et les transformations des données`,`d'entraîner un modèle`], answer:2, correction:`c — traçabilité origine + transformations` },
    { id:"e-ch3-qcm-03", q:`Lequel des éléments suivants est un test de qualité ?`, choices:[`test d'unicité`,`test de compilation Java`,`test de latence GPU`,`test de rendu HTML`], answer:0, correction:`a — test d'unicité (détection de doublons)` },
    { id:"e-ch3-qcm-04", q:`Un data contract permet surtout :`, choices:[`d'automatiser un modèle de deep learning`,`de formaliser les engagements entre producteurs et consommateurs de données`,`de supprimer les métadonnées`,`de remplacer la gouvernance`], answer:1, correction:`b — engagement formalisé producteur/consommateur` },
    { id:"e-ch3-qcm-05", q:`La fraîcheur d'une donnée renvoie à :`, choices:[`son niveau de compression`,`son format de stockage`,`son actualité par rapport au besoin métier`,`sa taille disque`], answer:2, correction:`c — actualité vs besoin métier` },
    { id:"e-ch3-qcm-06", q:`Les métadonnées servent notamment à :`, choices:[`documenter les données`,`comprendre leur contexte`,`faciliter leur gouvernance`,`toutes les réponses précédentes`], answer:3, correction:`d — toutes les réponses précédentes` },
    { id:"e-ch3-qcm-07", q:`Dans une logique DataOps, les tests doivent être :`, choices:[`uniquement manuels`,`uniquement réalisés par le métier`,`automatisables et intégrés au pipeline`,`exécutés une seule fois`], answer:2, correction:`c — automatisables + intégrés au pipeline (CI)` },
    { id:"e-ch3-qcm-08", q:`Le principal intérêt des feedback loops est :`, choices:[`ralentir la production`,`masquer les incidents`,`améliorer continuellement le pipeline à partir des mesures et anomalies`,`supprimer les journaux d'exécution`], answer:2, correction:`c — amélioration continue à partir des mesures/anomalies` }
  ],
  questions: [
    { id:"e-ch3-q-01", q:`Distinguer donnée disponible, donnée exploitable et donnée fiable.`, correction:`Disponible = brute, accessible techniquement. Exploitable = formatée, manipulable. Fiable = complète, valide, opportune, cohérente, testée.` },
    { id:"e-ch3-q-02", q:`Pourquoi la qualité des données doit-elle être traitée dès l'ingestion ?`, correction:`Shift left : détection précoce, coût de correction réduit, évite la propagation des erreurs en aval.` },
    { id:"e-ch3-q-03", q:`Expliquer le rôle des métadonnées dans la confiance des données.`, correction:`Contexte, sens, source, règles → sans elles, pas de confiance même si complétude élevée.` },
    { id:"e-ch3-q-04", q:`Donner trois exemples de tests de qualité automatisables.`, correction:`Unicité, nullité, cohérence temporelle (delivery_date >= order_date).` },
    { id:"e-ch3-q-05", q:`Pourquoi le lineage est-il utile pour l'analyse d'impact ?`, correction:`Identifie les dépendances en aval → évalue les conséquences d'un changement, accélère le diagnostic.` },
    { id:"e-ch3-q-06", q:`En quoi les data contracts renforcent-ils la stabilité des pipelines ?`, correction:`Changements de schéma anticipés/négociés → évite de casser les pipelines consommateurs.` },
    { id:"e-ch3-q-07", q:`Quel lien peut-on établir entre qualité des données et performance d'un système ML ?`, correction:`Bon code + mauvaises données = mauvais résultats (garbage in, garbage out) ; qualité conditionne performance et fiabilité du modèle.` },
    { id:"e-ch3-q-08", q:`Pourquoi la gouvernance n'est-elle pas seulement une question administrative ?`, correction:`Elle engage rôles, responsabilités, seuils, validation des changements → responsabilité organisationnelle, pas juste un formulaire.` }
  ],
  vocab: [
    { id:"e-ch3-v-01", term:`qualité des données`, correction:`Aptitude d'une donnée à satisfaire un usage (fitness for use) ; évaluée, contrôlée, documentée.` },
    { id:"e-ch3-v-02", term:`complétude`, correction:`Degré de présence des données attendues dans un jeu de données.` },
    { id:"e-ch3-v-03", term:`fraîcheur`, correction:`Disponibilité de la donnée dans un délai compatible avec l'usage attendu.` },
    { id:"e-ch3-v-04", term:`métadonnées`, correction:`Données qui décrivent d'autres données (structure, sens, source, règles).` },
    { id:"e-ch3-v-05", term:`data lineage`, correction:`Traçabilité du parcours d'une donnée, de sa source à ses usages finaux.` },
    { id:"e-ch3-v-06", term:`gouvernance des données`, correction:`Règles, rôles, responsabilités et pilotage encadrant production/usage/évolution des données.` },
    { id:"e-ch3-v-07", term:`automated testing`, correction:`Tests de qualité automatisés, intégrés au pipeline, exécutés à chaque run (CI).` },
    { id:"e-ch3-v-08", term:`data contract`, correction:`Engagement formalisé producteur/consommateur sur schéma, qualité, fréquence, évolution.` },
    { id:"e-ch3-v-09", term:`feedback loop`, correction:`Boucle qui transforme incidents/mesures en amélioration continue du pipeline (Kaizen).` }
  ],
  analysis: [
    { id:"e-ch3-a-01", scenario:`Une table est complète à 99 %, mais aucune documentation n'existe sur ses colonnes.`, question:`Peut-on parler de donnée de confiance ? Justifier.`, correction:`Non — la complétude seule ne suffit pas ; sans métadonnées, contexte et règles d'usage inconnus, donc pas de confiance.` },
    { id:"e-ch3-a-02", scenario:`Un pipeline ne produit pas d'erreur technique, mais les tableaux de bord affichent des résultats incohérents.`, question:`Quel type de contrôles aurait dû être prévu ?`, correction:`Tests de cohérence métier / cohérence inter-tables (pas seulement tests de schéma) + contrôles avant publication.` },
    { id:"e-ch3-a-03", scenario:`Une équipe modifie le nom d'une colonne sans prévenir les consommateurs.`, question:`Quel mécanisme du chapitre permet de réduire ce type d'incident ?`, correction:`Le data contract (préavis d'évolution de schéma négocié avec les consommateurs).` },
    { id:"e-ch3-a-04", scenario:`—`, question:`Pourquoi les tests de qualité doivent-ils être versionnés au même titre que le code ?`, correction:`La définition de la qualité métier évolue avec l'application et les données ; versionner = traçabilité + reproductibilité des règles.` },
    { id:"e-ch3-a-05", scenario:`—`, question:`Comment articuler qualité, monitoring et amélioration continue dans un pipeline moderne ?`, correction:`Qualité = contrôles à l'ingestion et dans le pipeline → monitoring = observabilité continue en production → feedback loop = corrige et capitalise (boucle Kaizen).` }
  ],
  case: {
    title: `Cas e-commerce : incidents de qualité de données`,
    context: `Une entreprise de e-commerce alimente chaque nuit un entrepôt de données à partir de trois sources : commandes web, CRM clients, système logistique. Depuis deux semaines : le nombre de commandes journalières fluctue anormalement ; certaines commandes n'ont plus d'identifiant client ; la table de livraison contient des dates antérieures aux dates de commande ; le tableau de bord commercial présente des résultats contradictoires avec le reporting logistique.`,
    tasks: [
      { id:"e-ch3-c-01", prompt:`1. Identifier les problèmes de qualité observables.`, correction:`- Fluctuation anormale des volumes de commandes
- Identifiants client manquants
- Dates de livraison antérieures aux dates de commande
- Incohérence entre dashboards commercial et logistique` },
      { id:"e-ch3-c-02", prompt:`2. Classer ces problèmes selon les dimensions de qualité concernées.`, correction:`- Fluctuation anormale des volumes → fraîcheur / anomalie statistique (SPC)
- customer_id manquant → complétude
- delivery_date < order_date → cohérence / intégrité (temporelle et référentielle)
- Dashboards contradictoires → cohérence métier / absence de contrôles en aval` },
      { id:"e-ch3-c-03", prompt:`3. Proposer au moins cinq règles de validation.`, correction:`- \`order_id.nunique() == len(df)\` (unicité)
- \`customer_id.isnull().mean() < 0.01\` (complétude)
- \`delivery_date >= order_date\` (cohérence temporelle)
- \`customer_id in customers.id\` (intégrité référentielle)
- \`abs(row_count_today - avg_7d) < threshold\` (anomalie de volume, SPC)
- \`amount >= 0\` (cohérence métier)` },
      { id:"e-ch3-c-04", prompt:`4. Indiquer à quelles étapes du pipeline ces contrôles devraient être placés.`, correction:`- Ingestion : présence du flux, conformité du schéma, volume attendu
- Raw → Transformation : nullité, unicité, cohérence temporelle
- Curated (avant publication) : intégrité référentielle, cohérence métier
- Production : contrôles/monitoring continu (SPC), alertes` },
      { id:"e-ch3-c-05", prompt:`5. Expliquer quels éléments de métadonnées, de lineage ou de gouvernance pourraient aider à résoudre durablement la situation.`, correction:`- Métadonnées : documenter les colonnes, propriétaire, règles de qualité (customer_id obligatoire)
- Lineage : tracer les 3 sources → dashboards pour localiser l'origine des incohérences
- Gouvernance : responsable désigné par source, data contract entre CRM/logistique/web et l'entrepôt, procédure de gestion des changements de schéma` }
    ],
    deliverables: [
      `Liste des problèmes de qualité identifiés, classés par dimension`,
      `Jeu de règles de validation (≥5) prêtes à exécuter`,
      `Schéma des points de contrôle placés le long du pipeline`,
      `Note synthétique sur les actions de métadonnées/lineage/gouvernance à mettre en place`
    ]
  }
};
