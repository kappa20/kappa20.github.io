/* data/exams.js — sujets d'annales pour le mode « Examen blanc ».
 * Format : { "<clé>": { title:"...", items:[ ["question","réponse modèle"], ... ] } }
 * (la clé doit aussi apparaître comme <option value="..."> dans index.html, section Examen blanc) */
window.ML = window.ML || {};

window.ML.exams = {
  "2022":{title:"Contrôle final 2022 / 2023 — Master DSBD — Pr. Benlahmar",
  items:[
   ["Partie 1 — Q1. Expliquez les termes suivants : Cost Function MSE, MAE et RMSE.",
    "MSE = (1/m)Σ(ŷ−y)² : erreur quadratique moyenne, unité de y au carré, pénalise les grosses erreurs, dérivable/convexe ⇒ fonction de coût.\nMAE = (1/m)Σ|ŷ−y| : erreur absolue moyenne, unité de y, robuste aux outliers, non dérivable en 0.\nRMSE = √MSE : unité de y, interprétable, ≥ MAE, sensible aux outliers."],
   ["Q2. Discutez des défis liés à la descente de gradient et des solutions possibles (choix du taux d'apprentissage, critères de convergence).",
    "α trop grand ⇒ divergence ; α trop petit ⇒ lenteur ; choisir α en testant {0.001,0.01,0.1} et en traçant J vs itérations ; normaliser les features (zigzag sinon) ; minima locaux ⇒ momentum/Adam ; critères de convergence : |J_t−J_{t−1}|<ε, ‖∇J‖<ε, nb max d'itérations, early stopping."],
   ["Q3.1. Expliquez brièvement le concept du SVM.",
    "Classifieur linéaire à marge maximale : hyperplan w·x+b=0 maximisant 2/‖w‖ aux points les plus proches (vecteurs support). min (½)‖w‖² s.c. yᵢ(w·xᵢ+b)≥1. Soft margin (C) pour le bruit ; kernel trick (RBF, polynomial) pour le non-linéaire."],
   ["Q3.2. Donnez 3 types de distances pour l'algorithme KNN.",
    "Euclidienne √Σ(xᵢ−yᵢ)² ; Manhattan Σ|xᵢ−yᵢ| ; Minkowski (Σ|xᵢ−yᵢ|^p)^(1/p) (généralise les deux). + Hamming (catégoriel), cosinus (texte)."],
   ["Q4 (QCM, justifier). Quand ∂J(w,b)/∂w est négatif, qu'advient-il de w après une mise à jour ? [w reste / indéterminé / w diminue / w augmente]",
    "w AUGMENTE. w := w − α·(∂J/∂w) = w − α·(négatif) = w + (positif), car α > 0."],
   ["Q4.1 (QCM). Pour une régression linéaire, quel est le pas de mise à jour de b ? [avec x⁽ⁱ⁾ / sans x⁽ⁱ⁾]",
    "b := b − α (1/m) Σ (f_{w,b}(x⁽ⁱ⁾) − y⁽ⁱ⁾)  — SANS x⁽ⁱ⁾ (∂/∂b de b vaut 1). Le x⁽ⁱ⁾ n'est que dans la MAJ de w."],
   ["Q5. Régression logistique : P(y=1|x_in) = x_out = σ(x_in) = 1/(1+e^(−x_in)). Si l'erreur renvoyée à x_out est ∂E/∂x_out, écrivez ∂E/∂x_in en fonction de ∂E/∂x_out.",
    "∂E/∂x_in = ∂E/∂x_out · σ'(x_in) = ∂E/∂x_out · x_out·(1 − x_out) (règle de la chaîne ; σ' = σ(1−σ))."],
   ["Q6. La perte logistique s'écrit LogLoss = Σ −y·log(y') − (1−y)·log(1−y'). Expliquez pourquoi on utilise la fonction Log.",
    "Vraisemblance : produit de Bernoulli → somme via le log (dérivable, évite l'underflow) ; minimiser la log-loss ⇔ maximiser la log-vraisemblance. Convexité : log-loss ∘ sigmoïde convexe (MSE + sigmoïde ne l'est pas). Pénalité : −log punit fort les prédictions confiantes et fausses. Gradient simple (1/m)Σ(y'−y)x_j."],
   ["Exercice 2. On donne un tableau d'étudiants sale (Id 555 pour Alex ET Peter ; Gender='A' ; Birthday '1983-12-01' vs '31/12/1990' ; ville manquante ; Country='Italy'/City='Italy' ; Country='Ytali' ; IsTeacher=0 avec #Students=5). Donnez les noms des problèmes et comment les traiter.",
    "• Id non unique (doublon de clé) → réattribuer un Id.\n• Gender='A' → valeur hors domaine → NaN + imputation.\n• Formats de date hétérogènes → parser vers ISO 8601.\n• Ville manquante → imputation (capitale) ou NaN + indicateur.\n• Ville dans la colonne pays / ville = pays → donnée mal placée → référentiel géo.\n• 'Ytali' → libellé incohérent → mapping → 'Italy'.\n• IsTeacher=0 & #Students>0 → contradiction logique → règle de cohérence.\n• Birthday non exploitable → transformer en âge ; encoder Country/City/Gender.\nPipeline : dédupliquer → uniformiser → valider domaines → réconcilier géo → règles métier → imputer/supprimer → transformer + encoder."]
  ]},
  "2023":{title:"Contrôle final 2023 / 2024 — Master DSBD — Pr. Benlahmar",
  items:[
   ["Question 1.1 (QCM, justifier). La descente de gradient minimise J(w,b). Quand ∂J/∂w est négatif, qu'advient-il de w ?",
    "w augmente : w := w − α·(négatif) = w + (positif)."],
   ["Question 1.2 (QCM). Pour une régression linéaire, quel est le pas de mise à jour de b ?",
    "b := b − α (1/m) Σ (f_{w,b}(x⁽ⁱ⁾) − y⁽ⁱ⁾), sans x⁽ⁱ⁾."],
   ["Question 1.3. a) Expliquez brièvement le concept du SVM. b) Donnez 3 types de distances pour KNN.",
    "a) Hyperplan à marge maximale, vecteurs support, min (½)‖w‖² s.c. yᵢ(w·xᵢ+b)≥1, soft margin (C), kernel trick (RBF/poly).\nb) Euclidienne, Manhattan, Minkowski (+ Hamming / cosinus)."],
   ["Question 2. 200 patients, classes M (malade) / B (bonne santé). Attributs : gorge irritée, température. Tableau : (T<37,5 : 6B,37M | 91B,1M) (T≥37,5 : 2B,21M | 1B,41M). Quel(s) arbre(s) de décision peut-on construire avec le critère du gain d'information ? Justifiez le choix des attributs SANS calculs.",
    "Marges de 'gorge irritée' : irritée → 8B/58M (majorité M) ; non irritée → 92B/42M (majorité B) ⇒ informatif.\nMarges de 'température' : <37,5 → 97B/38M (majorité B) ; ≥37,5 → 3B/62M (majorité écrasante M) ⇒ informatif.\nCellules quasi pures : (T<37,5 ∧ gorge non irritée)=91B,1M ; (T≥37,5 ∧ gorge non irritée)=1B,41M ; (T≥37,5 ∧ gorge irritée)=2B,21M.\nConclusion : les DEUX attributs réduisent fortement l'impureté ⇒ plusieurs arbres valides (racine gorge irritée OU racine température). Le gain d'information choisit comme racine l'attribut dont les deux enfants sont globalement les plus purs ; l'autre attribut sépare ensuite presque parfaitement les feuilles restantes (surtout côté T<37,5). Justification 'sans calcul' = majorités écrasantes / pureté des sous-groupes."],
   ["Question 3. Comment résoudre les problèmes des jeux de données non équilibrés ?",
    "Données (train only) : sur-échantillonnage / SMOTE ; sous-échantillonnage (aléatoire, Tomek, NearMiss) ; combiné.\nAlgorithme : class_weight='balanced' ; cost-sensitive ; ajustement du seuil ; algos d'anomalie si extrême ; ensembles équilibrés.\nÉvaluation : pas d'accuracy ⇒ F1, rappel, précision, AUC-PR, balanced accuracy, CV stratifiée.\nIdéal : collecter plus de données de la classe rare."],
   ["Question 4a. What is Reliability of Machine Learning? Why bother about ML models reliability?",
    "Fiabilité = prédictions correctes, cohérentes et stables dans le temps et face à des conditions variées : généralisation, robustesse (bruit/manquants), stabilité/reproductibilité, résistance au data/concept drift, calibration, équité, monitoring en production.\nPourquoi : enjeux forts (santé, crédit, sécurité) ; le test set peut mentir ; les données évoluent (dégradation sans surveillance) ; confiance des utilisateurs et conformité ; coût de maintenance."],
   ["Question 4b. Dataset santé (Age en jours, Taille, Poids, Sexe, Tension systolique/diastolique, Cholestérol {1,2,3}, Glucose {1,2,3}, Fumeur, Alcool, Activité). Quelles techniques de transformation pour construire la features map ? Donnez les étapes et formalismes.",
    "1) Unités : Age_années = Age_jours/365,25 ; Taille_m = Taille_cm/100.\n2) Dérivées : IMC = Poids/Taille_m² ; Pression_pulsée = systolique − diastolique.\n3) Encodage : Sexe → binaire ; Cholestérol/Glucose (1<2<3) → ordinal ; Fumeur/Alcool/Activité déjà 0/1.\n4) Aberrations : IQR / z-score>3 ; systolique<diastolique impossible → NaN + imputation médiane.\n5) Standardisation : x' = (x−μ)/σ (ou min-max (x−min)/(max−min)).\n6) Option : PolynomialFeatures(degree=2), binning de l'âge, log si asymétrie.\n7) Split train/test AVANT 4–6.\n8) φ(x) = concat des continues standardisées, binaires, one-hot, features dérivées ; lien avec le kernel trick."],
   ["Question 6.1. Dataset (longitude, latitude, housing_age, total_rooms, total_bedrooms, population, households, median_house_value). Analysez et recensez les points qui posent problème pour la construction d'un modèle linéaire.",
    "(1) Outliers / erreurs (housing_age=1933) ; (2) cible plafonnée (median_house_value répétée) ; (3) COLINÉARITÉ forte rooms/bedrooms/population/households ; (4) totaux de quartier peu informatifs seuls ; (5) échelles très hétérogènes ; (6) effet géographique non linéaire ; (7) distributions asymétriques ; (8) valeurs manquantes (total_bedrooms) ; (9) doublon apparent."],
   ["Question 6.2. Expliquez les différentes techniques à utiliser lors de la préparation de ces données.",
    "Correction/suppression des outliers ; imputation (médiane) ; création de rooms_per_household, bedrooms_per_room, population_per_household ; suppression des features redondantes ou régularisation Ridge/Lasso ; standardisation ; log-transformation des variables asymétriques ; encodage des catégorielles ; split train/test AVANT le scaling (éviter la fuite)."],
   ["Question 6.4. Expliquez la différence entre précision et Accuracy.",
    "Accuracy = (VP+VN)/total : proportion de bonnes prédictions toutes classes (trompeuse si déséquilibre). Précision = VP/(VP+FP) : fiabilité des prédictions positives seulement, ignore les VN.\nLecture 'mesure' : accuracy = justesse (peu de biais) ; précision = reproductibilité (peu de variance)."]
  ]}
};
