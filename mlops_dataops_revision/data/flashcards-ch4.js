window.MDO = window.MDO || {};
window.MDO.flashcards = window.MDO.flashcards || [];
window.MDO.flashcards.push(
  { id:"fc-ch4-001", chapter:4, topic:"reproductibilite", kind:"definition", front:`Définir : Reproductibilité (en contexte MLOps)`, back:`Capacité à reconstruire et rejouer un workflow ML dans des conditions définies, à partir d'éléments identifiés, versionnés et documentés, afin d'obtenir des résultats cohérents, comparables et explicables.
**Reproduire un modèle, c'est reproduire le processus qui l'a produit.**` },
  { id:"fc-ch4-002", chapter:4, topic:"tracabilite", kind:"definition", front:`Définir : Traçabilité des expériences`, back:`Capacité à conserver et relier les métadonnées d'un run ML — code, données, paramètres, métriques et artefacts — afin de rendre l'expérience comparable, rejouable et explicable.
**Tracer une expérience, c'est conserver les preuves de sa construction.**` },
  { id:"fc-ch4-003", chapter:4, topic:"versionnement-donnees", kind:"definition", front:`Définir : Dataset version`, back:`État identifié d'un dataset à un instant donné : source d'origine, date/snapshot, schéma (colonnes), transformations appliquées, règles de filtrage, périmètre et usage dans le pipeline.
Exemple : \`customers_snapshot_2026_04\`.` },
  { id:"fc-ch4-004", chapter:4, topic:"versionnement-modeles", kind:"definition", front:`Définir : Model version`, back:`Artefact technique (\`model_v12.pkl\`) **+** contexte de fabrication (dataset, code, paramètres, métriques, statut) **=** version de modèle gouvernable.
Un modèle versionné n'est pas qu'un fichier.` },
  { id:"fc-ch4-005", chapter:4, topic:"registry", kind:"definition", front:`Définir : Model registry`, back:`Composant centralisé permettant d'enregistrer, versionner, documenter et gouverner les modèles tout au long de leur cycle de vie.
Gouverne les statuts, promotions et archivages.` },
  { id:"fc-ch4-006", chapter:4, topic:"packaging", kind:"definition", front:`Définir : Packaging`, back:`Encapsuler un projet, un modèle ou un service ML dans une forme organisée, stable et réutilisable, afin de faciliter son exécution, son partage, son intégration et sa préparation au déploiement.` },
  { id:"fc-ch4-007", chapter:4, topic:"pipeline", kind:"definition", front:`Définir : Pipeline ML`, back:`Chaîne structurée d'étapes d'un workflow ML dont les entrées, sorties, paramètres et artefacts sont identifiés, de manière à permettre une exécution répétable, traçable et contrôlée.` },
  { id:"fc-ch4-008", chapter:4, topic:"auditabilite", kind:"definition", front:`Définir : Auditabilité`, back:`Capacité à répondre à : quel modèle a été utilisé ? quelle version est en production ? quelles données ont servi à l'entraînement ? quels paramètres ont été choisis ? quel run a produit cette version ? pourquoi ce modèle a-t-il été retenu ?` },
  { id:"fc-ch4-009", chapter:4, topic:"artefact", kind:"definition", front:`Définir : Artefact ML`, back:`Objet concret produit, utilisé ou conservé dans un pipeline — matérialise une étape du workflow.
Exemples : \`model.pkl\`, \`metrics.json\`, \`config.yaml\`, image Docker.` },
  { id:"fc-ch4-010", chapter:4, topic:"cycle-de-vie", kind:"definition", front:`Définir : Cycle de vie du modèle`, back:`Suite des statuts qu'un modèle traverse depuis sa conception jusqu'à son retrait d'usage.
**Experimental → Candidate → Staging → Production → Archived**
Le modèle n'est pas un objet ponctuel ; c'est un actif qui évolue dans le temps.` },
  { id:"fc-ch4-011", chapter:4, topic:"reproductibilite", kind:"concept", front:`Pourquoi un modèle performant ne suffit-il pas ?`, back:`Il faut pouvoir répondre à :
- Quel code exact a produit ce modèle ?
- Quel dataset, sous quelle version ?
- Quels hyperparamètres et quel environnement d'exécution ?
- Peut-on rejouer l'expérience à l'identique ?
- Peut-on comparer à une version antérieure ?
- Peut-on justifier sa mise en production devant un audit ?
**La performance seule ne suffit pas ; il faut maîtriser le processus de fabrication.**` },
  { id:"fc-ch4-012", chapter:4, topic:"reproductibilite", kind:"concept", front:`Les 6 dimensions à versionner dans un projet ML`, back:`| Dimension | Contenu |
|---|---|
| Code | versionné, structuré, exécutable |
| Données | identifiées, datées, tracées |
| Dépendances | Python, libs, environnement |
| Configurations | hyperparamètres, métriques |
| Modèles | version, dataset, statut |
| Résultats | métriques, logs, rapports |

Reproductibilité **systémique** : le maillon le plus faible détermine la fiabilité globale.` },
  { id:"fc-ch4-013", chapter:4, topic:"reproductibilite", kind:"concept", front:`Expérimentation artisanale vs workflow reproductible`, back:`| Expérimentation artisanale | Workflow reproductible |
|---|---|
| Notebook unique | Pipeline structuré |
| Données locales | Données identifiées |
| Paramètres modifiés à la main | Paramètres tracés |
| Dépendances implicites | Environnement maîtrisé + suivi des expériences |
| Résultats peu documentés | Modèle versionné et gouverné |` },
  { id:"fc-ch4-014", chapter:4, topic:"tracabilite", kind:"concept", front:`Anatomie d'une fiche de suivi de run`, back:`- Identifiant de run + date + auteur (\`run_2026_04_15_001\`)
- Code version (commit)
- Dataset (snapshot utilisé)
- Modèle (type entraîné) + hyperparamètres
- Métriques (accuracy, F1-score...)
- Artefact généré (\`model_v12.pkl\`)

**Le score n'a de sens que s'il est relié à un run clairement documenté.**` },
  { id:"fc-ch4-015", chapter:4, topic:"tracabilite", kind:"concept", front:`Ce que la traçabilité apporte au projet`, back:`- Garder la mémoire du projet
- Comparer les essais objectivement
- Expliquer les performances obtenues
- Justifier les choix techniques
- Préparer le registry
- Renforcer l'auditabilité

**Tracer permet de comparer ; comparer permet de décider.**` },
  { id:"fc-ch4-016", chapter:4, topic:"cycle-de-vie", kind:"concept", front:`De la traçabilité au cycle de vie du modèle : la chaîne`, back:`Expérimentation → Sélection du candidat → Enregistrement → Promotion staging/prod.

4 piliers du chapitre : le registry, le versionnement des modèles, la promotion contrôlée, le monitoring futur.` },
  { id:"fc-ch4-017", chapter:4, topic:"versionnement-donnees", kind:"concept", front:`Que signifie versionner un dataset ? (7 éléments)`, back:`- Source d'origine
- Date ou snapshot
- Transformations appliquées
- Usage dans le pipeline
- Périmètre des données
- Schéma (colonnes)
- Règles de filtrage

Exemple : \`customers_snapshot_2026_04\`, source CRM export, date 2026-04-01, 58 colonnes, cible \`churn_flag\`, filtre clients actifs depuis 12 mois.` },
  { id:"fc-ch4-018", chapter:4, topic:"versionnement-donnees", kind:"concept", front:`Impact du split train/val/test et risques sans versionnement des données`, back:`Le découpage influence : l'entraînement, l'évaluation, la comparaison des modèles, la stabilité des résultats.

Sans versionnement des données :
- Impossibilité de rejouer un entraînement
- Comparaison faussée entre deux modèles
- Confusion sur la source des gains de performance
- Diagnostic difficile en cas de régression
- Audit très limité, réentraînement non maîtrisé` },
  { id:"fc-ch4-019", chapter:4, topic:"versionnement-modeles", kind:"concept", front:`Les 5 statuts du cycle de vie d'un modèle`, back:`| Statut | Sens |
|---|---|
| Experimental | encore en phase d'essai |
| Candidate | jugé intéressant pour comparaison/validation |
| Staging | prêt à être testé en environnement contrôlé |
| Production | approuvé, utilisé opérationnellement |
| Archived | conservé mais retiré de l'usage actif |

Exemple : v8 → experimental ; v9 → candidate → archived ; v10 → staging → production.` },
  { id:"fc-ch4-020", chapter:4, topic:"registry", kind:"concept", front:`Fonctions du Model Registry`, back:`- Enregistrer les versions
- Centraliser les artefacts
- Stocker les métriques
- Gérer les statuts
- Suivre promotions et archivages
- Associer des métadonnées
- Relier le modèle à son historique d'expérimentation` },
  { id:"fc-ch4-021", chapter:4, topic:"registry", kind:"concept", front:`Avant / après registry`, back:`| Avant registry | Après registry |
|---|---|
| Résultat d'entraînement | Artefact enregistré |
| Fichier local | Version identifiée |
| Statut implicite | Métadonnées associées |
| Contexte parfois incomplet | Statut explicite |
| Gouvernance limitée | Gouvernance possible |

**Le tracking documente les essais ; le registry gouverne les versions retenues.**` },
  { id:"fc-ch4-022", chapter:4, topic:"registry", kind:"concept", front:`Critères de promotion & apport du rollback`, back:`Critères de promotion :
- Métriques suffisantes
- Comparaison favorable à une baseline
- Données identifiées, run traçable
- Artefacts complets
- Tests techniques validés

Apport du rollback : identifier la version active, retrouver la précédente, comparer leurs métriques, comprendre leurs différences, restaurer une version stable.` },
  { id:"fc-ch4-023", chapter:4, topic:"cycle-de-vie", kind:"concept", front:`Le cercle global du cycle de vie du modèle`, back:`Conception → Expérimentation → Validation → Enregistrement → Packaging → Déploiement → Monitoring → Réentraînement → Archivage.

4 axes transverses : **Reproductibilité, Traçabilité, Gouvernance, Industrialisation.**` },
  { id:"fc-ch4-024", chapter:4, topic:"packaging", kind:"concept", front:`À quoi sert le packaging d'un projet ML ?`, back:`- Rendre l'exécution plus stable
- Favoriser la réutilisation
- Clarifier les dépendances
- Standardiser le lancement
- Préparer l'intégration CI/CD
- Faciliter le transfert entre environnements
- Préparer le déploiement

**Build once, run many.**` },
  { id:"fc-ch4-025", chapter:4, topic:"packaging", kind:"concept", front:`Continuum de structuration d'un projet ML`, back:`Script structuré → Package Python → CLI dédiée → Archive d'artefacts → Image Docker → Service ML exposé par API.

Le packaging transforme un projet local en composant d'ingénierie (réduit la dépendance au contexte local).` },
  { id:"fc-ch4-026", chapter:4, topic:"packaging", kind:"case", front:`Structure type d'un projet ML packagé (\`ml-project/\`)`, back:`\`\`\`
ml-project/
├── data/ (raw/, processed/)
├── configs/ (train_config.yaml)
├── src/ (prepare_data.py, train.py, evaluate.py, predict.py)
├── models/
├── reports/
├── requirements.txt
├── README.md
└── Dockerfile
\`\`\`
Point d'entrée explicite : \`python train.py --config configs/train.yaml\`.` },
  { id:"fc-ch4-027", chapter:4, topic:"packaging", kind:"case", front:`Exemple industrialisé : \`churn-mlops-project/\``, back:`- Package \`churn_model/\` (\`data.py\`, \`features.py\`, \`training.py\`, \`evaluation.py\`, \`inference.py\`)
- \`cli/main.py\`, \`api/app.py\`, \`tests/\`
- \`models/model_v12.pkl\`, \`reports/metrics.json\`
- \`artifacts/release_v12/\` : model_v12.pkl, metrics.json, config.yaml, requirements.txt, README.md
- \`pyproject.toml\`, \`Dockerfile\`, \`.gitignore\`` },
  { id:"fc-ch4-028", chapter:4, topic:"pipeline", kind:"concept", front:`Propriétés attendues d'un pipeline ML reproductible`, back:`- Modularité
- Traçabilité
- Rejouabilité
- Clarté des dépendances
- Stabilité
- Intégration
- Tracking et registry

**Le pipeline est le lieu d'intégration des pratiques MLOps.**` },
  { id:"fc-ch4-029", chapter:4, topic:"pipeline", kind:"concept", front:`Étapes typiques d'un pipeline ML reproductible`, back:`Chargement → Validation → Préparation → Split → Entraînement → Évaluation → Logging → Sérialisation → Registry → Packaging.

**Le packaging rend exécutable ; le pipeline rend le processus gouvernable.**` },
  { id:"fc-ch4-030", chapter:4, topic:"pipeline", kind:"concept", front:`Notions clés : Artefact, Version, Release, Registry`, back:`| Notion | Définition | Exemple |
|---|---|---|
| Artefact | objet concret produit dans un pipeline | model.pkl, metrics.json |
| Version | état identifié d'un artefact à un instant donné | model_v12.pkl |
| Release | regroupement cohérent d'artefacts versionnés, prêt à déployer | release_v12/ |
| Registry | système gérant le cycle de vie des versions de modèles | churn_classifier v12, statut staging |` },
  { id:"fc-ch4-031", chapter:4, topic:"pipeline", kind:"concept", front:`Script unique vs pipeline structuré`, back:`| Critère | Script unique | Pipeline structuré |
|---|---|---|
| Lisibilité | difficile à relire | modulaire et lisible |
| Tests | difficile à tester | étapes testables isolément |
| Reprise | difficile à reprendre | facile à rejouer |
| Réutilisation | difficile à réutiliser | adapté à l'industrialisation |` },
  { id:"fc-ch4-032", chapter:4, topic:"auditabilite", kind:"concept", front:`Prototype ML vs actif industrialisable`, back:`| Prototype ML | Actif industrialisable |
|---|---|
| Dépend du poste local | Exécutable en environnement maîtrisé |
| Logique implicite | Pipeline explicite |
| Données peu tracées | Datasets identifiés |
| Mémoire faible du projet | Tracking structuré |
| Modèle isolé | Modèle versionné et gouverné |
| Difficile à déployer | Prêt pour CI/CD et déploiement |

**Build once, run many.**` },
  { id:"fc-ch4-033", chapter:4, topic:"auditabilite", kind:"concept", front:`Auditabilité vs industrialisation`, back:`Auditabilité : retrouver la version du code, du dataset, du split/paramètres, des métriques/artefact, du run d'origine et du statut.

Industrialisation : rejouer le modèle, le comparer, le transférer, l'intégrer dans un pipeline, le déployer proprement, le surveiller dans le temps.` },
  { id:"fc-ch4-034", chapter:4, topic:"auditabilite", kind:"concept", front:`Synthèse du chapitre 4`, back:`- La performance seule ne suffit pas
- Le tracking donne une mémoire exploitable
- Le versionnement relie le modèle à son contexte
- Le registry gouverne les versions retenues
- Packaging et pipeline préparent le déploiement
- **Reproductibilité = Auditabilité + Industrialisation**` },
  { id:"fc-ch4-035", chapter:4, topic:"tracabilite", kind:"case", front:`Cas pratique : notebook \`final_model.ipynb\` (F1=0.91, « ça marchait hier »)`, back:`Dimensions absentes : code (pas de version stable), données (dataset exact inconnu), dépendances (versions libs inconnues), configurations (hyperparamètres non tracés), traçabilité (pas de run_id ni historique).

Pratiques manquantes : Git, versionnement des données, tracking des runs, \`requirements.txt\`, fichier de config externalisé, nomenclature claire des artefacts.` },
  { id:"fc-ch4-036", chapter:4, topic:"registry", kind:"case", front:`Modèle en production qui échoue brutalement : que doit fournir le registry en moins de 5 min ?`, back:`- Quel modèle/quelle version est en production
- Contexte de fabrication (données, code)
- Performances attendues (comparaison)
- Version antérieure restaurable rapidement (rollback)

Le registry = source centrale de vérité sur la version active.` }
);
