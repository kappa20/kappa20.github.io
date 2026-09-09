/* =============================================================================
 * data/flashcards.js  —  LES FLASHCARDS.  C'est CE fichier qu'on modifie pour
 * ajouter / corriger des cartes. Rien d'autre à toucher.
 *
 * Format d'une carte :  ["<themeId>", "<question>", "<réponse>"]
 *   themeId : t01..t13  (voir data/topics.js pour la liste)
 *   la réponse peut contenir \n pour des retours à la ligne.
 *
 * Pour AJOUTER une carte : ajoute une ligne dans le tableau ci-dessous.
 * ============================================================================= */
window.ML = window.ML || {};

window.ML.flashcards = [
  // ---- t01 Régression linéaire ----
  ["t01","Écris le modèle de la régression linéaire (multiple).","ŷ = θ₀ + θ₁x₁ + θ₂x₂ + … + θₙxₙ = Xθ\nθ₀ = intercept (biais), θⱼ = pente de la feature xⱼ."],
  ["t01","Formule de la MSE et son unité ?","MSE = (1/m) Σ (ŷᵢ − yᵢ)²\nUnité = unité de y AU CARRÉ. Pénalise fortement les grosses erreurs ; dérivable et convexe → sert de fonction de coût."],
  ["t01","Formule de la MAE et sa propriété clé ?","MAE = (1/m) Σ |ŷᵢ − yᵢ|\nUnité de y. ROBUSTE aux valeurs aberrantes. Point non dérivable en 0."],
  ["t01","Qu'est-ce que la RMSE ?","RMSE = √MSE. Ramène la MSE à l'unité de y ⇒ interprétable. Toujours ≥ MAE. Sensible aux outliers."],
  ["t01","Pourquoi la MSE comme fonction de coût plutôt que la MAE ?","La MSE est dérivable partout et convexe lisse ⇒ gradient bien défini, un seul minimum global. La MAE a un point anguleux (non dérivable) en 0."],
  ["t01","Équation normale + quand échoue-t-elle ?","θ = (XᵀX)⁻¹ Xᵀ y. Échoue si XᵀX n'est pas inversible : features colinéaires / redondantes, ou n_features > m."],
  ["t01","Définition de R² ?","R² = 1 − SS_res / SS_tot = proportion de variance de y expliquée par le modèle. 1 = parfait, 0 = comme prédire la moyenne, peut être NÉGATIF."],
  ["t01","Comment interpréter θⱼ en régression multiple ?","Variation de ŷ quand xⱼ augmente de 1 unité, LES AUTRES FEATURES FIXÉES (effet partiel). Toujours lire avec les unités de xⱼ et de y."],
  ["t01","Quand θ₀ n'a-t-il aucun sens métier ?","Quand x = 0 n'est pas une situation réaliste (ex. MedInc = 0). θ₀ n'est alors qu'un paramètre de calage de la droite."],
  ["t01","Cite les 5 hypothèses de la régression linéaire.","1) linéarité 2) indépendance des résidus 3) homoscédasticité (variance constante) 4) normalité des résidus 5) pas de multicolinéarité forte."],
  ["t01","À quoi servent les coefficients standardisés ?","Features centrées-réduites d'abord ⇒ coefficients sans unité, exprimés par écart-type ⇒ permettent de COMPARER l'importance des features entre elles."],
  ["t01","Gradient de la MSE par rapport à θⱼ ?","∂J/∂θⱼ = (1/m) Σ (ŷᵢ − yᵢ) xⱼ⁽ⁱ⁾  (l'erreur × la feature)."],

  // ---- t02 Descente de gradient ----
  ["t02","Écris l'algorithme de la descente de gradient.","répéter jusqu'à convergence {\n  w := w − α · ∂J(w,b)/∂w\n  b := b − α · ∂J(w,b)/∂b\n}\nMises à jour SIMULTANÉES."],
  ["t02","Si ∂J/∂w est NÉGATIF, qu'arrive-t-il à w après une mise à jour ?","w AUGMENTE. Car w := w − α·(négatif) = w + (positif), avec α > 0."],
  ["t02","Formule de mise à jour de b en régression linéaire ?","b := b − α (1/m) Σ (f_{w,b}(x⁽ⁱ⁾) − y⁽ⁱ⁾)   ← SANS le x⁽ⁱ⁾."],
  ["t02","Formule de mise à jour de w en régression linéaire ?","w := w − α (1/m) Σ (f_{w,b}(x⁽ⁱ⁾) − y⁽ⁱ⁾) · x⁽ⁱ⁾   ← AVEC le x⁽ⁱ⁾."],
  ["t02","Pourquoi le x⁽ⁱ⁾ apparaît dans la MAJ de w mais pas dans celle de b ?","Dérivée de (w·x + b) par rapport à w = x ; par rapport à b = 1. Donc le facteur x vient uniquement du terme en w."],
  ["t02","Batch GD : données utilisées, avantage, inconvénient ?","Tout le dataset par itération. + convergence stable, direction exacte. − lent et coûteux en mémoire sur gros m."],
  ["t02","SGD (stochastique) : principe et défaut ?","1 exemple à la fois. Très rapide, fonctionne en ligne. Trajectoire bruitée, oscille autour du minimum."],
  ["t02","Mini-batch GD ?","32–256 exemples par itération. Compromis optimal vitesse/stabilité, exploite le calcul vectoriel/GPU."],
  ["t02","Effet d'un α trop grand ? Trop petit ?","Trop grand ⇒ divergence / oscillations (le coût augmente). Trop petit ⇒ convergence très lente."],
  ["t02","Comment choisir le taux d'apprentissage α ?","Tester α ∈ {0.001, 0.01, 0.1} et TRACER la courbe de coût J en fonction des itérations ; garder celui qui descend vite sans osciller."],
  ["t02","Features à échelles très différentes : effet sur le GD et solution ?","Courbes de niveau elliptiques ⇒ le GD zigzague et converge lentement. Solution : NORMALISER / STANDARDISER les features."],
  ["t02","Cite 3 critères de convergence.","1) |J_t − J_{t−1}| < ε  2) ‖∇J‖ < ε  3) nombre max d'itérations atteint (+ early stopping sur validation)."],

  // ---- t03 Régression logistique ----
  ["t03","Écris le modèle de la régression logistique.","P(y=1 | x) = σ(wᵀx + b) = 1 / (1 + e^(−z)), avec z = wᵀx + b. σ(z) ∈ ]0,1[."],
  ["t03","Valeur de σ(0) et forme de la courbe ?","σ(0) = 0,5. Courbe en S : σ(−∞)→0, σ(+∞)→1."],
  ["t03","Dérivée de la sigmoïde ?","σ'(z) = σ(z) · (1 − σ(z))."],
  ["t03","Frontière de décision de la régression logistique ?","wᵀx + b = 0 : un HYPERPLAN LINÉAIRE. La logistique est un classifieur linéaire."],
  ["t03","Exprime ∂E/∂x_in en fonction de ∂E/∂x_out (x_out = σ(x_in)).","∂E/∂x_in = ∂E/∂x_out · σ'(x_in) = ∂E/∂x_out · x_out (1 − x_out)   (règle de la chaîne)."],
  ["t03","Formule de la log-loss (entropie croisée) ?","LogLoss = − Σ [ y·log(y') + (1−y)·log(1−y') ],  y' = σ(z)."],
  ["t03","Valeur de la perte quand y = 1 ?","−log(y') : → 0 si y' → 1, → +∞ si y' → 0."],
  ["t03","« Pourquoi le log ? » — raison 1 (vraisemblance).","La vraisemblance du dataset est un PRODUIT de probabilités de Bernoulli ; le log le transforme en SOMME (dérivable terme à terme, évite l'underflow). Minimiser la log-loss ⇔ maximiser la log-vraisemblance."],
  ["t03","« Pourquoi le log ? » — raison 2 (convexité).","Log-loss ∘ sigmoïde est CONVEXE ⇒ un seul minimum global, le GD converge. Avec la MSE + sigmoïde : surface non convexe et gradient qui s'annule dans les zones saturées."],
  ["t03","« Pourquoi le log ? » — raison 3 (pénalité).","−log punit ÉNORMÉMENT une prédiction confiante et fausse (y'=0,01 alors que y=1 ⇒ perte ≈ 4,6). Bon signal pour calibrer des probabilités."],
  ["t03","Gradient de la log-loss ?","∂J/∂wⱼ = (1/m) Σ (y'⁽ⁱ⁾ − y⁽ⁱ⁾) xⱼ⁽ⁱ⁾ — MÊME forme que la régression linéaire."],
  ["t03","Qu'est-ce que l'odds ratio en régression logistique ?","Odds = P(y=1)/P(y=0) = e^z. Odds ratio = e^(θⱼ) : facteur multiplicatif des cotes pour +1 unité de xⱼ (autres fixées)."],
  ["t03","L1 vs L2 en régularisation ?","L2 (Ridge) : λΣθⱼ² rétrécit les coefficients, jamais exactement 0. L1 (Lasso) : λΣ|θⱼ| met des coefficients EXACTEMENT à 0 ⇒ sélection de features."],
  ["t03","La régression logistique est-elle une régression ?","Non : c'est un CLASSIFIEUR qui estime une PROBABILITÉ, entraîné par maximum de vraisemblance."],

  // ---- t04 Arbres ----
  ["t04","Formule de l'entropie de Shannon ?","H(S) = − Σᵢ pᵢ log₂(pᵢ). Nœud pur ⇒ H = 0 ; 50/50 binaire ⇒ H = 1."],
  ["t04","Formule de l'impureté de Gini ?","G(S) = 1 − Σᵢ pᵢ². Nœud pur ⇒ G = 0 ; 50/50 binaire ⇒ G = 0,5."],
  ["t04","Formule du gain d'information ?","IG(S,A) = H(S) − Σᵥ (|Sᵥ|/|S|) · H(Sᵥ) = entropie du parent − moyenne pondérée des entropies des enfants."],
  ["t04","Règle de choix de l'attribut de split ?","Choisir l'attribut qui MAXIMISE le gain d'information (⇔ minimise l'impureté moyenne pondérée des enfants)."],
  ["t04","Différence ID3 / C4.5 / CART ?","ID3 : entropie, catégoriel, pas d'élagage. C4.5 : gain ratio, gère continu + manquants. CART : Gini, arbres BINAIRES, utilisé par sklearn."],
  ["t04","Avantages des arbres de décision ?","Interprétables (règles SI/ALORS), pas besoin de normalisation, gèrent les valeurs manquantes et les types mélangés, capturent des interactions non linéaires."],
  ["t04","Inconvénients des arbres ?","Haute variance / instables (un point change ⇒ arbre différent), sur-apprennent facilement sans élagage, frontières en escalier, biais vers les attributs à nombreuses modalités."],
  ["t04","Comment raisonner sur un tableau de contingence SANS calculs ?","Regarder la PURETÉ des sous-groupes créés par chaque attribut : un bon attribut produit des enfants à MAJORITÉ ÉCRASANTE d'une classe (cellules quasi pures). Un attribut inutile laisse le même mélange que le parent."],
  ["t04","Un arbre de décision a-t-il besoin de normalisation ?","Non : il teste des seuils (xᵢ ≤ s ?), insensible aux échelles."],
  ["t04","3 hyperparamètres pour limiter le sur-apprentissage d'un arbre ?","max_depth, min_samples_leaf / min_samples_split, ccp_alpha (post-élagage cost-complexity)."],

  // ---- t05 KNN ----
  ["t05","Principe de KNN ?","Classer un nouveau point par VOTE MAJORITAIRE de ses K plus proches voisins (moyenne des y en régression)."],
  ["t05","KNN s'entraîne-t-il ?","Non : algorithme LAZY. Aucun entraînement, tout le calcul se fait à la prédiction."],
  ["t05","Distance euclidienne (L2) ?","d(x,y) = √ Σ (xᵢ − yᵢ)²."],
  ["t05","Distance de Manhattan (L1) ?","d(x,y) = Σ |xᵢ − yᵢ|."],
  ["t05","Distance de Minkowski (Lp) ?","d(x,y) = ( Σ |xᵢ − yᵢ|^p )^(1/p). p=1 → Manhattan, p=2 → euclidienne, p→∞ → Chebyshev."],
  ["t05","Distance de Hamming — usage ?","Nombre de coordonnées où xᵢ ≠ yᵢ. Pour variables CATÉGORIELLES / binaires (texte, ADN)."],
  ["t05","Effet d'un K petit ?","Frontière très découpée, sensible au bruit ⇒ SUR-APPRENTISSAGE (faible biais, forte variance)."],
  ["t05","Effet d'un K grand ?","Frontière lisse, on moyenne sur trop de voisins ⇒ SOUS-APPRENTISSAGE (fort biais)."],
  ["t05","Comment choisir K ?","Validation croisée (courbe Elbow : F1/erreur vs K). Prendre K impair en binaire pour éviter les égalités."],
  ["t05","Pourquoi la normalisation est-elle obligatoire pour KNN ?","Les distances sont dominées par les features à grande échelle (ex. salaire en milliers écrase l'âge). Standardiser/normaliser AVANT de calculer les distances."],
  ["t05","Malédiction de la dimensionnalité ?","En haute dimension, toutes les paires de points deviennent presque équidistantes ⇒ « plus proche voisin » perd son sens ⇒ KNN se dégrade fortement."],
  ["t05","Coût de prédiction de KNN ?","O(n·d) par requête (comparer à tous les points) ⇒ lent sur gros datasets."],

  // ---- t06 SVM ----
  ["t06","Concept du SVM en une phrase ?","Trouver l'hyperplan séparateur qui sépare les classes avec la MARGE LA PLUS LARGE possible ⇒ bonne généralisation."],
  ["t06","Expression de la marge ?","Marge = 2 / ‖w‖ (distance entre les deux hyperplans marginaux w·x+b = ±1)."],
  ["t06","Que sont les vecteurs support ?","Les exemples situés exactement sur les hyperplans marginaux (yᵢ(w·xᵢ+b) = 1). La frontière ne dépend QUE d'eux."],
  ["t06","Problème d'optimisation du SVM (hard margin) ?","min (½)‖w‖²  sous contraintes  yᵢ(w·xᵢ + b) ≥ 1  pour tout i."],
  ["t06","Hard margin vs soft margin ?","Soft margin tolère des violations via des variables d'écart ξᵢ ≥ 0 : min (½)‖w‖² + C Σ ξᵢ. Nécessaire pour des données bruitées / chevauchantes."],
  ["t06","Rôle du paramètre C ?","C petit ⇒ marge large, beaucoup de violations ⇒ sous-apprentissage. C grand ⇒ marge étroite, peu de violations ⇒ sur-apprentissage. C ≈ 1/λ."],
  ["t06","Kernel trick ?","Projeter les données dans une dimension supérieure où elles sont séparables, en n'utilisant que K(xᵢ,xⱼ) = φ(xᵢ)·φ(xⱼ), sans jamais calculer φ explicitement."],
  ["t06","Noyau RBF (gaussien) ?","K(x,y) = exp(−γ‖x−y‖²). Le plus populaire, dimension implicite infinie."],
  ["t06","Rôle de γ dans le noyau RBF ?","γ grand ⇒ chaque exemple n'influence que son voisinage proche ⇒ frontière sinueuse ⇒ sur-apprentissage. γ petit ⇒ frontière lisse."],
  ["t06","Le SVM a-t-il besoin de normalisation ?","Oui : il repose sur des distances / produits scalaires."],
  ["t06","SVM multi-classe ?","One-vs-One (OvO, C(k,2) classifieurs) ou One-vs-Rest (OvR, k classifieurs)."],

  // ---- t07 Naive Bayes ----
  ["t07","Théorème de Bayes ?","P(C | X) = P(X | C) · P(C) / P(X), avec P(X) = Σ_c P(X|c)·P(c)."],
  ["t07","Hypothèse « naïve » ?","Indépendance conditionnelle des features sachant la classe : P(X | C) = Πᵢ P(xᵢ | C)."],
  ["t07","Règle de décision de Naive Bayes ?","ŷ = argmax_c  P(C=c) · Πᵢ P(xᵢ | C=c). En pratique on somme les log-probabilités."],
  ["t07","Pourquoi utiliser les log-probabilités en NB ?","Éviter l'underflow numérique quand on multiplie de nombreuses probabilités < 1."],
  ["t07","Formule du lissage de Laplace ?","P(xᵢ | C) = (N(xᵢ,C) + α) / (N(C) + α·|V|). α = 1 : Laplace ; |V| = nombre de valeurs possibles."],
  ["t07","Quel problème le lissage résout-il ?","Sans lissage, si une modalité n'apparaît jamais dans une classe, P(xᵢ|C) = 0 ⇒ tout le produit devient 0, quelles que soient les autres features."],
  ["t07","GaussianNB / BernoulliNB / MultinomialNB : quand ?","Gaussian : features continues. Bernoulli : features binaires (0/1). Multinomial : comptages entiers ≥ 0 (fréquences de mots)."],
  ["t07","Génératif vs discriminatif (NB vs logistique) ?","NB (génératif) modélise P(X|C) et P(C) puis applique Bayes. Logistique (discriminatif) modélise directement P(C|X). NB meilleur avec peu de données, logistique souvent meilleure avec beaucoup."],

  // ---- t08 Ensembles ----
  ["t08","Principe du bagging ?","Entraîner N modèles INDÉPENDANTS sur N échantillons bootstrap (tirage avec remise), puis agréger par vote majoritaire / moyenne."],
  ["t08","Le bagging réduit surtout… ?","La VARIANCE : σ²_ensemble ≈ σ²_base / N (si modèles décorrélés)."],
  ["t08","Principe du boosting ?","Entraîner N modèles SÉQUENTIELLEMENT : chaque modèle corrige les erreurs du précédent."],
  ["t08","Le boosting réduit surtout… ?","Le BIAIS."],
  ["t08","Qu'est-ce qu'une Random Forest ?","Bagging d'arbres + à chaque split, tirage aléatoire de √(n_features) features candidates ⇒ arbres décorrélés."],
  ["t08","Qu'est-ce que le score OOB ?","~36,8 % (≈ 1/e) des exemples ne sont pas tirés dans un bootstrap donné ⇒ ils servent de validation GRATUITE, proche d'une CV 3-fold."],
  ["t08","AdaBoost vs Gradient Boosting ?","AdaBoost : augmente le poids des exemples mal classés. Gradient Boosting : chaque arbre prédit les RÉSIDUS (pseudo-gradients) du modèle courant."],
  ["t08","Rôle du learning rate η en boosting ?","F_M(x) = F₀(x) + η Σ hₘ(x). Petit η ⇒ meilleure généralisation mais besoin de plus d'arbres (compromis η ↔ n_estimators)."],
  ["t08","Qu'apporte XGBoost par rapport au Gradient Boosting ?","Régularisation L1/L2, calcul parallélisé, gestion native des NaN, early stopping."],
  ["t08","Importance Gini (MDI) vs permutation ?","Gini : somme des réductions d'impureté, calculée sur le TRAIN, biaisée vers les features continues / à forte cardinalité. Permutation : chute de perf. quand on mélange une colonne, sur la VALIDATION, plus fiable mais coûteuse."],
  ["t08","Bagging et boosting : parallélisables ?","Bagging : oui (modèles indépendants). Boosting : non, séquentiel."],

  // ---- t09 Préparation des données ----
  ["t09","Deux lignes avec le même Id mais des valeurs différentes : nom du problème + traitement ?","Identifiant non unique / doublon de clé. Traitement : vérifier si même entité, sinon réattribuer un Id unique ; règle de fusion en cas de conflit."],
  ["t09","Valeurs manquantes : options de traitement ?","Suppression si peu de lignes concernées ; imputation (moyenne/médiane numérique, mode catégoriel, KNN-imputer, régression) ; ajouter un indicateur « valeur manquante »."],
  ["t09","« Italy » / « Ytali » / « italie » dans la même colonne : problème + traitement ?","Libellé catégoriel incohérent (casse, espaces, fautes). Traitement : normaliser (trim, lower), mapper vers un référentiel de valeurs autorisées, correction orthographique."],
  ["t09","Gender = 'A' : problème + traitement ?","Valeur hors domaine / catégorielle invalide. Traitement : règle de validation, remplacer par NaN puis imputer, ou rejeter la ligne."],
  ["t09","Country = 'Rome' (une ville dans la colonne pays) : problème ?","Donnée mal placée. Traitement : référentiel géographique, remettre la valeur dans la bonne colonne / reconstruire la valeur manquante."],
  ["t09","Dates « 31/12/1990 » et « 1983-12-01 » mélangées : problème + traitement ?","Format hétérogène. Traitement : parser toutes les dates vers un format unique (ISO 8601)."],
  ["t09","Comment détecter une valeur aberrante (outlier) ?","Règle IQR : hors [Q1 − 1,5·IQR, Q3 + 1,5·IQR] ; z-score > 3 ; visualisation boxplot. Traiter : corriger, capper (winsoriser), supprimer, ou transformer (log)."],
  ["t09","IsTeacher = 0 mais #Students = 15 : problème + traitement ?","Contradiction logique. Traitement : règle de cohérence métier (si #Students > 0 alors enseignant), corriger l'un des deux champs."],
  ["t09","Colinéarité entre features : conséquence et traitements ?","Coefficients instables, XᵀX mal conditionnée. Traitements : supprimer une des features, créer des ratios, régularisation (Ridge/Lasso), PCA."],
  ["t09","Qu'est-ce que la fuite de données (data leakage) ?","Une feature contient de l'information du futur ou de la cible, ou le prétraitement est appris avant le split. Parade : split d'abord, fit des transformations sur le train seulement, auditer les features."],
  ["t09","Ordre canonique du pipeline de préparation ?","1) split train/test 2) nettoyage 3) imputation 4) feature engineering 5) encodage 6) scaling 7) (rééquilibrage sur le train) 8) entraînement + CV. Tous les fit sur le train."],
  ["t09","California Housing : principal problème pour un modèle LINÉAIRE ?","Colinéarité forte entre total_rooms, total_bedrooms, population, households (toutes proportionnelles à la taille du quartier)."],
  ["t09","California Housing : quelles features dérivées créer ?","rooms_per_household, bedrooms_per_room, population_per_household (ramener les totaux de quartier au ménage)."],
  ["t09","median_house_value répétée à l'identique sur plusieurs lignes : que soupçonner ?","Cible PLAFONNÉE / censurée à un seuil ⇒ le modèle linéaire ne pourra pas prédire au-delà, biais sur le haut de la distribution."],

  // ---- t10 Feature engineering ----
  ["t10","Formule de la normalisation min-max ?","x' = (x − x_min) / (x_max − x_min). Résultat dans [0, 1]. Sensible aux outliers."],
  ["t10","Formule de la standardisation (z-score) ?","x' = (x − μ) / σ. Moyenne 0, écart-type 1. Défaut pour GD, KNN, SVM, PCA."],
  ["t10","Robust scaling ?","x' = (x − médiane) / IQR. Insensible aux valeurs aberrantes."],
  ["t10","One-hot vs encodage ordinal : quand ?","Nominal (Country, Gender) → one-hot. Ordinal (Cholestérol 1<2<3, Education) → label/ordinal en conservant l'ordre."],
  ["t10","Pourquoi drop_first=True en one-hot ?","Éviter la colinéarité parfaite entre les colonnes indicatrices (piège de la variable indicatrice / dummy trap)."],
  ["t10","Convertir un âge exprimé en jours en années ?","x' = x / 365,25 (ex. 10000 jours ≈ 27,4 ans)."],
  ["t10","Formule de l'IMC ?","IMC = poids(kg) / taille(m)². Feature métier plus informative que poids et taille séparés."],
  ["t10","À quoi servent les features polynomiales ?","x1, x2 → x1², x2², x1·x2, … : rendent un modèle LINÉAIRE capable de courbes / interactions non linéaires."],
  ["t10","Qu'est-ce que le binning (discrétisation) ?","Transformer une variable continue en tranches (Age → jeune / adulte / senior) : capture des effets non linéaires, réduit le bruit."],
  ["t10","Pourquoi appliquer une transformation log à une feature ?","Symétriser une distribution asymétrique et réduire l'influence des très grandes valeurs (revenus, prix)."],
  ["t10","Qu'est-ce qu'une feature map φ ?","Une fonction φ: ℝ^d → ℝ^d' qui envoie les données dans un espace où une relation devient linéaire. Ex. φ(x1,x2) = (x1², x2², √2·x1·x2) rend un cercle séparable par un hyperplan. Lien avec le kernel trick."],
  ["t10","Sur quel jeu estime-t-on μ, σ, min, max ?","Sur le TRAIN uniquement, puis on applique au test. Sinon : fuite de données."],

  // ---- t11 Métriques ----
  ["t11","Que contient une matrice de confusion binaire ?","VP (vrais positifs), FP (faux positifs), FN (faux négatifs), VN (vrais négatifs)."],
  ["t11","Formule de l'accuracy ?","Accuracy = (VP + VN) / (VP + VN + FP + FN) = proportion de toutes les prédictions correctes."],
  ["t11","Formule de la précision (precision) ?","Précision = VP / (VP + FP) : parmi les exemples prédits positifs, proportion de vrais positifs."],
  ["t11","Formule du rappel (recall) ?","Rappel = VP / (VP + FN) : parmi les vrais positifs, proportion retrouvée."],
  ["t11","Formule du F1-score ?","F1 = 2 · (précision · rappel) / (précision + rappel) : moyenne HARMONIQUE."],
  ["t11","Différence entre précision et accuracy (sens ML) ?","Accuracy = proportion de bonnes réponses sur TOUTES les classes (trompeuse si déséquilibre). Précision = fiabilité des prédictions POSITIVES seulement (VP/(VP+FP)), ignore les VN."],
  ["t11","Différence précision / accuracy (sens « mesure ») ?","Accuracy = justesse (proche de la vraie valeur, peu de BIAIS). Précision = reproductibilité (mesures répétées serrées, peu de VARIANCE). On peut être précis sans être exact."],
  ["t11","Qu'est-ce que l'AUC-ROC ?","Aire sous la courbe TPR vs FPR. Probabilité qu'un positif tiré au hasard soit mieux classé qu'un négatif. INDÉPENDANTE du seuil de décision."],
  ["t11","Quelle métrique sur données déséquilibrées ?","F1, rappel, précision, AUC-PR, balanced accuracy — PAS l'accuracy."],
  ["t11","Validation croisée k-fold ?","Découper en k blocs, entraîner sur k−1, tester sur 1, répéter k fois, moyenner. STRATIFIÉE en classification (garde les proportions de classes)."],
  ["t11","Signature d'un biais élevé (sous-apprentissage) ?","Erreur élevée sur le train ET sur le test. Remède : modèle plus riche, plus de features, moins de régularisation."],
  ["t11","Signature d'une variance élevée (sur-apprentissage) ?","Erreur faible sur le train, élevée sur le test (grand écart). Remède : plus de données, régularisation, moins de features, ensembles (bagging)."],
  ["t11","Coût élevé d'un faux négatif : quelle métrique privilégier ?","Le RAPPEL (ex. dépistage médical, détection de fraude)."],

  // ---- t12 Déséquilibre ----
  ["t12","Pourquoi l'accuracy trompe sur un jeu 95 % / 5 % ?","Prédire toujours la classe majoritaire donne 95 % d'accuracy avec 0 % de rappel sur la classe rare : le modèle n'a rien appris d'utile."],
  ["t12","Qu'est-ce que SMOTE ?","Synthetic Minority Over-sampling : créer des exemples SYNTHÉTIQUES de la classe rare par interpolation entre un point minoritaire et ses k plus proches voisins minoritaires."],
  ["t12","Sur quel jeu applique-t-on le rééchantillonnage ?","Sur le TRAIN uniquement, à l'intérieur de la validation croisée. Sur le test / avant le split ⇒ fuite de données."],
  ["t12","Que fait class_weight='balanced' ?","Donne un poids plus grand à la classe rare dans la fonction de coût ⇒ une erreur sur la minorité coûte plus cher. Marche pour logistique, SVM, arbres, RF."],
  ["t12","Ajustement du seuil de décision ?","Au lieu de 0,5, choisir le seuil qui maximise le F1 (ou atteint le rappel cible) sur la courbe précision-rappel de validation."],
  ["t12","Techniques de sous-échantillonnage informé ?","Tomek links, NearMiss, Edited Nearest Neighbours : retirent des exemples majoritaires près de la frontière pour la nettoyer."],
  ["t12","Meilleure solution au déséquilibre, si possible ?","Collecter davantage de données réelles de la classe rare."],
  ["t12","Pourquoi la validation croisée doit-elle être STRATIFIÉE sur données déséquilibrées ?","Pour garantir que chaque pli contient la même proportion de classe rare que le jeu complet. Sinon, un pli peut ne contenir aucun exemple minoritaire ⇒ estimation de performance non fiable / instable."],

  // ---- t13 Fiabilité ----
  ["t13","Définition de la fiabilité d'un modèle ML ?","Capacité à fournir des prédictions correctes, cohérentes et STABLES dans le temps et face à des conditions variées (bruit, données légèrement différentes, changement de distribution), et à signaler son incertitude."],
  ["t13","Cite 5 dimensions de la fiabilité.","1) généralisation (pas de sur-apprentissage) 2) robustesse au bruit / perturbations 3) stabilité & reproductibilité 4) résistance au data/concept drift 5) calibration des probabilités."],
  ["t13","Data drift vs concept drift ?","Data drift : la distribution des entrées X change. Concept drift : la relation X → y change."],
  ["t13","Pourquoi se soucier de la fiabilité d'un modèle ?","Décisions à fort enjeu (santé, crédit, sécurité) ; le test set peut mentir (fuite, distribution différente) ; les données évoluent (le modèle se dégrade sans surveillance) ; confiance des utilisateurs et conformité réglementaire."],
  ["t13","Qu'est-ce qu'un modèle bien calibré ?","Quand il annonce « 90 % de confiance », il a raison environ 90 % du temps. Correctifs : Platt scaling, régression isotonique."],
  ["t13","Comment améliorer / surveiller la fiabilité ?","Validation croisée, jeu de test isolé + test out-of-time, tests de robustesse (bruit, features masquées), estimation d'incertitude (ensembles, conformal prediction), explicabilité (SHAP), monitoring de la dérive en production + ré-entraînement."]
];
