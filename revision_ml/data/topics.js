/* data/topics.js — themes + fiche list metadata. Edit here to rename a theme or reorder. */
window.ML = window.ML || {};

window.ML.topics = [
  {
    "id": "t01",
    "title": "Régression linéaire",
    "prio": "hi"
  },
  {
    "id": "t02",
    "title": "Descente de gradient",
    "prio": "hi"
  },
  {
    "id": "t03",
    "title": "Régression logistique",
    "prio": "hi"
  },
  {
    "id": "t04",
    "title": "Arbres de décision",
    "prio": "hi"
  },
  {
    "id": "t05",
    "title": "KNN",
    "prio": "hi"
  },
  {
    "id": "t06",
    "title": "SVM",
    "prio": "hi"
  },
  {
    "id": "t07",
    "title": "Naive Bayes",
    "prio": "mid"
  },
  {
    "id": "t08",
    "title": "Méthodes d'ensemble",
    "prio": "mid"
  },
  {
    "id": "t09",
    "title": "Préparation des données",
    "prio": "hi"
  },
  {
    "id": "t10",
    "title": "Feature engineering",
    "prio": "hi"
  },
  {
    "id": "t11",
    "title": "Évaluation & métriques",
    "prio": "hi"
  },
  {
    "id": "t12",
    "title": "Données déséquilibrées",
    "prio": "hi"
  },
  {
    "id": "t13",
    "title": "Fiabilité (reliability)",
    "prio": "mid"
  }
];

window.ML.fiches = [
  {
    "f": "00_analyse_examen.md",
    "d": "Comment le prof conçoit ses examens + planning 5 jours"
  },
  {
    "f": "01_regression_lineaire.md",
    "d": "Modèle Xθ, MSE/MAE/RMSE/R², équation normale, hypothèses, coefficients"
  },
  {
    "f": "02_descente_gradient.md",
    "d": "Algo, batch/SGD/mini-batch, α, convergence, signe du gradient, formule de b"
  },
  {
    "f": "03_regression_logistique.md",
    "d": "Sigmoïde, log-loss, « pourquoi le log ? », ∂E/∂x_in, odds ratio, L1/L2"
  },
  {
    "f": "04_arbres_decision.md",
    "d": "Entropie, Gini, gain d'information, raisonnement sur tableau de contingence"
  },
  {
    "f": "05_knn.md",
    "d": "Lazy learner, distances, choix de K, normalisation, malédiction de la dimension"
  },
  {
    "f": "06_svm.md",
    "d": "Marge maximale, vecteurs support, C, kernel trick, RBF, γ"
  },
  {
    "f": "07_naive_bayes.md",
    "d": "Bayes, indépendance conditionnelle, variantes, lissage de Laplace"
  },
  {
    "f": "08_methodes_ensemble.md",
    "d": "Bagging vs boosting, Random Forest, OOB, XGBoost, importance des features"
  },
  {
    "f": "09_preparation_donnees.md",
    "d": "Catalogue des problèmes de données + les 2 études de cas de l'examen"
  },
  {
    "f": "10_feature_engineering.md",
    "d": "Normalisation vs standardisation, encodage, feature map, dataset santé"
  },
  {
    "f": "11_evaluation_metriques.md",
    "d": "Matrice de confusion, précision vs accuracy, F1, AUC, biais/variance"
  },
  {
    "f": "12_donnees_desequilibrees.md",
    "d": "SMOTE, class_weight, seuil, métriques ; le cas 95/5"
  },
  {
    "f": "13_fiabilite_ml.md",
    "d": "Définition, dimensions, menaces, drift, pourquoi ça compte"
  },
  {
    "f": "14_exo_naive_bayes.md",
    "d": "Exercice corrigé pas à pas : Naive Bayes sur le dataset météo + cas où le lissage de Laplace est obligatoire"
  },
  {
    "f": "99_annales_corrigees.md",
    "d": "Les 2 examens transcrits + réponses modèles rédigées"
  }
];
