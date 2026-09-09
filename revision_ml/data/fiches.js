/* =============================================================================
 * data/fiches.js  —  GENERE depuis ../study_guide/*.md
 * NE PAS editer a la main : modifie le .md puis relance build/build_fiches.py
 * ============================================================================= */
window.ML = window.ML || {};
window.ML.ficheText = {};
window.ML.ficheText["00"] = `# 00 — Comment le Pr. Benlahmar conçoit ses examens

> Analyse des **2 contrôles finaux** fournis (2022/2023 et 2023/2024), Master DSBD/IA,
> FSBM – Université Hassan II de Casablanca. Documents et Internet **non autorisés**.
> Durée observée : **1 h 30**.

---

## 1. Format global

- Épreuve **manuscrite**, en **français**, mélange de **Partie 1 (questions de cours)** et de
  **Partie 2 / Exercices (mini études de cas sur un tableau de données)**.
- **3 à 6 grandes questions**, chacune découpée en sous-questions numérotées.
- **Aucun code à écrire** : on demande des **explications**, des **justifications**, des
  **formules**, des **schémas**, un **raisonnement**. Le barème récompense la clarté et la
  précision du vocabulaire, pas la longueur.
- Beaucoup de questions se **répètent d'une année sur l'autre** (voir §4).

## 2. Les 4 types de questions récurrents

| Type | Exemple réel | Ce qui est attendu |
|---|---|---|
| **Définition / explication** | « Expliquez les termes : MSE, MAE, RMSE » · « Expliquez brièvement le concept du SVM » | Définition juste + **formule** + 1 phrase d'intuition + quand l'utiliser |
| **Discussion / défis** | « Discutez des défis liés à la descente de gradient et des solutions possibles » | Lister **problèmes → causes → solutions** sous forme de tableau ou de liste |
| **QCM à justifier** | « Quand ∂J/∂w est négatif, qu'advient-il de w ? » · « Quel est le pas de mise à jour de b ? » | Cocher **et** écrire 2–3 lignes de justification (le prof précise « justifier votre réponse ») |
| **Étude de cas sur tableau** | Tableau d'étudiants sale · tableau de contingence gorge/température · dataset santé · dataset type California Housing | **Nommer les problèmes**, dire **comment les traiter**, **justifier sans calculer** |

## 3. Thèmes et poids (d'après les 2 annales + les TD)

| Thème | Déjà tombé | Priorité révision |
|---|---|---|
| Fonctions de coût MSE / MAE / RMSE | ✅ 2 fois | 🔴 Haute |
| Descente de gradient (α, convergence, signe du gradient, formule de b) | ✅ 2 fois | 🔴 Haute |
| Régression logistique : sigmoïde, log-loss, « pourquoi le log ? », dérivée ∂E/∂x_in | ✅ | 🔴 Haute |
| SVM : concept, marge maximale | ✅ 2 fois | 🔴 Haute |
| KNN : 3 types de distances | ✅ 2 fois | 🔴 Haute |
| Arbres de décision : gain d'information sur tableau de contingence | ✅ | 🔴 Haute |
| Données déséquilibrées (95/5, 200 patients) | ✅ 2 fois | 🔴 Haute |
| Préparation / nettoyage de données (tableau sale, California Housing) | ✅ 2 fois | 🔴 Haute |
| Feature engineering / transformations / features map | ✅ | 🔴 Haute |
| Précision vs Accuracy | ✅ | 🔴 Haute |
| Fiabilité (reliability) d'un modèle ML | ✅ | 🟠 Moyenne |
| Naive Bayes / Bayes / lissage de Laplace | ❌ (mais TD7) | 🟠 Moyenne |
| Méthodes d'ensemble : bagging, RF, boosting, XGBoost | ❌ (mais TD8) | 🟠 Moyenne |
| Biais / variance, sur-apprentissage, validation croisée | Transverse | 🟠 Moyenne |

## 4. Questions quasi certaines (copiées-collées entre 2022/23 et 2023/24)

1. **Descente de gradient** — « trouver w et b qui minimisent J ». Quand \`∂J/∂w < 0\`, qu'arrive-t-il
   à \`w\` après une mise à jour ? → **w augmente** (car \`w = w − α·(négatif) = w + quelque chose\`).
2. **Formule de mise à jour de b** en régression linéaire → la bonne est
   \`b := b − α (1/m) Σ (f_{w,b}(x⁽ⁱ⁾) − y⁽ⁱ⁾)\` **sans le facteur \`x⁽ⁱ⁾\`** (le \`x⁽ⁱ⁾\` n'apparaît
   que dans la mise à jour de \`w\`).
3. **SVM** : expliquer brièvement le concept (hyperplan séparateur à **marge maximale**).
4. **KNN** : donner **3 types de distances** (Euclidienne, Manhattan, Minkowski — voir fiche 05).
5. **Données déséquilibrées** : comment traiter un jeu 95 vs 5 (ou 200 patients très déséquilibrés).

## 5. Stratégie de rédaction le jour J

- **Formule d'abord, phrase ensuite.** Le prof veut voir que tu connais l'expression exacte.
- Pour un QCM « justifier » : coche, puis **démontre en 2 lignes** (souvent avec la formule de
  mise à jour).
- Pour une étude de cas : structure **Problème → Conséquence sur le modèle → Traitement**.
- Pour « expliquez le concept » : **1 phrase de définition + 1 formule + 1 schéma + 1 limite**.
- Utilise le **vocabulaire du cours** : « marge maximale », « vecteurs support », « gain
  d'information », « lissage de Laplace », « entropie croisée », « sur-apprentissage »,
  « colinéarité », « fuite de données » (data leakage), « stratification ».
- Fais des **petits schémas** (droite de régression, hyperplan + marge, sigmoïde, arbre) :
  ils rapportent des points et vont vite.

## 6. Planning de révision sur 5 jours

| Jour | Focus | Livrable perso |
|---|---|---|
| **J-5** | Fiches 01, 02, 03 (régression, gradient, logistique) + refaire les QCM | Savoir réécrire les 2 formules de mise à jour de mémoire |
| **J-4** | Fiches 04, 05, 06 (arbres, KNN, SVM) | Savoir tracer hyperplan+marge et un arbre sur tableau de contingence |
| **J-3** | Fiches 09, 10, 11, 12 (prépa données, features, métriques, déséquilibre) | Lister 8 problèmes de données + leur traitement sans hésiter |
| **J-2** | Fiches 07, 08, 13 (Naive Bayes, ensembles, fiabilité) + \`99_annales_corrigees.md\` | Refaire les 2 annales entières, chrono 1 h 30 |
| **J-1** | Site : mode « Simulation d'examen » + relire les « Pièges du prof » de chaque fiche | Score ≥ 80 % sur le quiz global |

## 7. Erreurs qui coûtent des points (vues dans les corrigés types)

- Confondre **précision** (metric par classe : TP/(TP+FP)) et **accuracy** (taux global de bonnes
  réponses) — c'est **une question directe**.
- Donner la formule de \`w\` quand on demande celle de \`b\` (piège volontaire).
- Dire « on supprime les lignes avec valeurs manquantes » sans nuance : il faut discuter
  **imputation vs suppression** selon le taux de manquants.
- Pour l'arbre : se lancer dans le calcul alors que la consigne dit **« sans effectuer les
  calculs »** → il faut raisonner sur la **pureté** des sous-groupes.
- Oublier que **KNN et SVM (RBF) exigent la normalisation**, pas les arbres.
- Répondre « accuracy » comme métrique sur données déséquilibrées (piège classique).
`;
window.ML.ficheText["01"] = `# 01 — Régression linéaire · 🔴 Priorité haute

> TD4. Prédire une **valeur continue**. Base commune avec la régression logistique (même modèle
> linéaire, même optimisation par descente de gradient).

---

## Résumé express

Le modèle apprend une **combinaison linéaire des features** qui minimise l'erreur quadratique
moyenne. On l'entraîne soit par **équation normale** (solution exacte), soit par **descente de
gradient** (itératif). On l'évalue avec **MAE / RMSE / R²**.

## À maîtriser absolument

### Le modèle

$$\\hat{y} = \\theta_0 + \\theta_1 x_1 + \\theta_2 x_2 + \\dots + \\theta_n x_n = X\\theta$$

- $\\hat{y}$ : valeur prédite · $\\theta_0$ : **intercept / biais** · $\\theta_j$ : **pente** de la
  feature $x_j$.
- $\\theta_0$ = valeur de $\\hat y$ quand toutes les features valent 0 (interprétable seulement si
  $x=0$ est réaliste).
- $\\theta_j$ = variation de $\\hat y$ pour **+1 unité de $x_j$, les autres features fixées**
  (effet partiel, « toutes choses égales par ailleurs »).

### Fonction de coût — MSE

$$J(\\theta) = \\text{MSE} = \\frac{1}{m}\\sum_{i=1}^{m}\\big(\\hat{y}^{(i)} - y^{(i)}\\big)^2$$

(souvent un facteur $\\tfrac{1}{2m}$ pour simplifier la dérivée). Convexe ⇒ un seul minimum global.

### Les 3 métriques que le prof demande d'expliquer

| Métrique | Formule | Unité | Comportement |
|---|---|---|---|
| **MAE** (Mean Absolute Error) | $\\frac{1}{m}\\sum \\lvert \\hat y_i - y_i \\rvert$ | celle de $y$ | **Robuste aux valeurs aberrantes** ; erreur « moyenne » lisible |
| **MSE** (Mean Squared Error) | $\\frac{1}{m}\\sum (\\hat y_i - y_i)^2$ | celle de $y$ **au carré** | **Pénalise fortement les grosses erreurs** (terme au carré) ; sert de fonction de coût car dérivable partout |
| **RMSE** (Root MSE) | $\\sqrt{\\text{MSE}}$ | celle de $y$ | MSE ramenée à l'unité de $y$ ⇒ **interprétable** ; toujours ≥ MAE ; sensible aux outliers |

**Phrase type d'examen :** « MAE = erreur absolue moyenne, robuste aux outliers. MSE = erreur
quadratique moyenne, dérivable et pénalisant les grands écarts, d'où son usage comme fonction de
coût. RMSE = racine de la MSE, exprimée dans l'unité de la cible, donc directement
interprétable. »

### R² (coefficient de détermination)

$$R^2 = 1 - \\frac{\\sum (\\hat y_i - y_i)^2}{\\sum (\\bar y - y_i)^2} = 1 - \\frac{SS_{res}}{SS_{tot}}$$

Proportion de la variance de $y$ expliquée par le modèle. $R^2 = 1$ : parfait ; $R^2 = 0$ : aussi
bon que prédire la moyenne ; **peut être négatif** si le modèle est pire que la moyenne.

### Deux façons d'estimer $\\theta$

| Méthode | Formule | Coût | Quand |
|---|---|---|---|
| **Équation normale** | $\\theta = (X^\\top X)^{-1} X^\\top y$ | $O(n^3)$ pour inverser une matrice $n\\times n$ | Peu de features ($n < 10^4$), pas d'inversion problématique |
| **Descente de gradient** | $\\theta := \\theta - \\alpha \\nabla J(\\theta)$ | $O(n \\cdot m)$ par itération | Beaucoup de features, gros $m$, streaming (voir fiche 02) |

### Hypothèses de la régression linéaire (à citer)

1. **Linéarité** de la relation features → cible.
2. **Indépendance** des résidus (pas d'autocorrélation).
3. **Homoscédasticité** : variance des résidus constante.
4. **Normalité** des résidus (pour l'inférence / intervalles de confiance).
5. **Pas de multicolinéarité** forte entre features (sinon coefficients instables — voir fiche 09).

## Formules clés à connaître par cœur

- Modèle : $\\hat y = X\\theta$
- Coût : $J = \\frac{1}{2m}\\sum(\\hat y_i - y_i)^2$
- Gradient : $\\frac{\\partial J}{\\partial \\theta_j} = \\frac{1}{m}\\sum (\\hat y_i - y_i)\\,x_j^{(i)}$
- Équation normale : $\\theta = (X^\\top X)^{-1}X^\\top y$
- RMSE $= \\sqrt{\\text{MSE}}$ ; $R^2 = 1 - SS_{res}/SS_{tot}$

## Interprétation des coefficients (voir aussi \`Interpretation_theta0_theta1.md\`)

- Un coefficient est une **pente / un taux de variation**, jamais un niveau.
- Toujours le lire **avec les unités** de $x$ et de $y$.
- $\\theta_0$ ne s'interprète que si $x=0$ est une situation réelle ; sinon c'est un simple
  paramètre de calage de la droite.
- Le modèle n'est fiable que **dans la plage des données** (pas d'extrapolation).
- **Association ≠ causalité.**
- En régression multiple, un coefficient peut **changer de signe** vs la régression simple
  (effet partiel).
- Pour **comparer l'importance** des features : utiliser les **coefficients standardisés**
  (features centrées-réduites).

## Pièges du prof

- Demander l'**unité** de MSE (c'est l'unité de $y$ **au carré**, pas celle de $y$).
- « Pourquoi la MSE comme fonction de coût et pas la MAE ? » → MSE **dérivable partout** et
  **convexe lisse** ⇒ gradient bien défini ; MAE a un point non dérivable en 0.
- Confondre $R^2$ et l'accuracy.
- Oublier que l'équation normale **échoue si $X^\\top X$ n'est pas inversible** (features
  redondantes / colinéaires, ou $n > m$).

## Questions types déjà tombées

**Q. Expliquez les termes : Cost Function MSE, MAE et RMSE.**
→ Voir le tableau ci-dessus : définition + formule + unité + robustesse aux outliers + usage.

**Q. Interprétez $\\theta_0$ et $\\theta_1$ (California Housing, $\\theta_1 \\approx 0{,}42$).**
→ $\\theta_1$ : +1 unité de \`MedInc\` (= +10 000 \\$) ⇒ +0,42 unité de \`MedHouseVal\`
(= +42 000 \\$). $\\theta_0 \\approx 0{,}44$ : prix pour un revenu médian nul — **aucun quartier
n'a \`MedInc = 0\`**, donc pas d'interprétation métier, juste un calage.

## Checklist

- [ ] Réécrire le modèle $\\hat y = X\\theta$ et la MSE de mémoire
- [ ] Donner formule + unité + robustesse de MAE, MSE, RMSE
- [ ] Écrire l'équation normale et dire quand elle échoue
- [ ] Citer les 5 hypothèses
- [ ] Interpréter un coefficient avec ses unités, et expliquer pourquoi $\\theta_0$ peut n'avoir
      aucun sens
`;
window.ML.ficheText["02"] = `# 02 — Descente de gradient · 🔴 Priorité haute

> TD4. **Tombé aux 2 examens**, avec les mêmes 2 sous-questions. À maîtriser parfaitement.

---

## Résumé express

Algorithme itératif pour trouver les paramètres $w, b$ qui **minimisent la fonction de coût
$J(w,b)$**. À chaque étape, on se déplace dans la direction **opposée au gradient** (la pente la
plus raide vers le bas), d'un pas contrôlé par le **taux d'apprentissage $\\alpha$**.

## L'algorithme (à réécrire de mémoire)

\`\`\`
répéter jusqu'à convergence {
    w := w − α · ∂J(w,b)/∂w
    b := b − α · ∂J(w,b)/∂b
}
\`\`\`

> ⚠️ Les mises à jour de $w$ et $b$ sont **simultanées** : on calcule les deux gradients avec les
> anciennes valeurs, **puis** on met à jour.

## ⭐ Les 2 questions du prof (quasi certaines)

### Question 1 — Signe du gradient

> « Quand $\\dfrac{\\partial J(w,b)}{\\partial w}$ est un nombre **négatif**, qu'advient-il de $w$
> après une étape de mise à jour ? »
>
> Réponses proposées : ○ $w$ reste le même — ○ impossible à savoir — ○ $w$ diminue —
> ○ **$w$ augmente** ✅

**Justification :**
$$w := w - \\alpha \\cdot \\underbrace{\\frac{\\partial J}{\\partial w}}_{<0}
= w - \\alpha \\times (\\text{négatif}) = w + \\alpha \\lvert \\tfrac{\\partial J}{\\partial w}\\rvert$$
Comme $\\alpha > 0$, on **ajoute** une quantité positive à $w$ ⇒ **$w$ augmente**.
Intuition : un gradient négatif signifie que $J$ **décroît** quand $w$ **croît** ; on va donc
vers les $w$ plus grands pour diminuer le coût.

### Question 2 — Formule de mise à jour de $b$ (régression linéaire)

Deux formules proposées, il faut choisir :

| Choix | Formule | Verdict |
|---|---|---|
| A | $b := b - \\alpha \\dfrac{1}{m}\\displaystyle\\sum_{i=1}^{m}\\big(f_{w,b}(x^{(i)}) - y^{(i)}\\big)\\,x^{(i)}$ | ❌ FAUX — le $x^{(i)}$ ne doit pas y être |
| B | $b := b - \\alpha \\dfrac{1}{m}\\displaystyle\\sum_{i=1}^{m}\\big(f_{w,b}(x^{(i)}) - y^{(i)}\\big)$ | ✅ **CORRECT** |

**Justification :** on dérive $J = \\frac{1}{2m}\\sum (wx^{(i)} + b - y^{(i)})^2$.
- Par rapport à $w$ : $\\frac{\\partial J}{\\partial w} = \\frac{1}{m}\\sum (f(x^{(i)}) - y^{(i)})\\,x^{(i)}$ → **le $x^{(i)}$ vient de la dérivée de $wx^{(i)}$**.
- Par rapport à $b$ : $\\frac{\\partial J}{\\partial b} = \\frac{1}{m}\\sum (f(x^{(i)}) - y^{(i)})$ → la dérivée de $b$ vaut 1, **pas de $x^{(i)}$**.

**Mémo :** *« Le $x$ est dans la mise à jour de $w$, pas dans celle de $b$. »*

## Les 3 variantes

| Variante | Données par itération | Vitesse | Avantage | Inconvénient |
|---|---|---|---|---|
| **Batch GD** | tout le dataset ($m$) | lent | convergence stable, direction exacte | coûteux en mémoire, lent sur gros $m$ |
| **Stochastic GD (SGD)** | 1 exemple | très rapide | fonctionne en ligne / streaming | trajectoire bruitée, oscille autour du min |
| **Mini-batch GD** | 32–256 exemples | équilibré ✅ | compromis vitesse/stabilité, exploite le vectoriel/GPU | 1 hyperparamètre de plus (taille du batch) |

## Défis de la descente de gradient et solutions (question « Discutez… »)

| Défi | Cause | Solution |
|---|---|---|
| **$\\alpha$ trop grand** | pas trop grand ⇒ on saute par-dessus le minimum | **divergence** : le coût augmente / oscille. Réduire $\\alpha$ (÷3, ÷10), tracer la courbe de loss |
| **$\\alpha$ trop petit** | pas minuscule | convergence **très lente**. Augmenter $\\alpha$, ou **learning rate scheduling** (décroissance) |
| **Choix de $\\alpha$** | inconnu a priori | tester $\\alpha \\in \\{0{,}001; 0{,}01; 0{,}1\\}$ et **tracer $J$ en fonction des itérations** |
| **Features à échelles différentes** | courbes de niveau très elliptiques ⇒ zigzag | **normaliser / standardiser** les features (fiche 10) ⇒ convergence bien plus rapide |
| **Minima locaux / points selle** | surface de coût non convexe (réseaux de neurones) | **momentum**, Adam, RMSProp ; plusieurs initialisations aléatoires. *(Pour la régression linéaire/logistique, $J$ est convexe ⇒ pas de minimum local.)* |
| **Critère d'arrêt** | quand s'arrêter ? | (a) nombre max d'itérations ; (b) $\\lVert \\nabla J \\rVert < \\varepsilon$ ; (c) $\\lvert J_{t} - J_{t-1}\\rvert < \\varepsilon$ ; (d) *early stopping* sur un set de validation |
| **Gradient qui explose / disparaît** | deep learning, mauvaise init | clipping du gradient, normalisation par batch, bonnes initialisations |

### Critères de convergence — à savoir lister

1. Variation du coût négligeable entre deux itérations : $\\lvert J^{(t)} - J^{(t-1)} \\rvert < \\varepsilon$.
2. Norme du gradient proche de 0 : $\\lVert \\nabla J \\rVert < \\varepsilon$.
3. Nombre maximal d'itérations atteint.
4. La courbe de loss (loss vs itérations) devient **plate** ⇒ diagnostic visuel principal.

## Formules clés

- Mise à jour générique : $\\theta_j := \\theta_j - \\alpha \\dfrac{\\partial J}{\\partial \\theta_j}$
- Régression linéaire :
  - $\\dfrac{\\partial J}{\\partial w} = \\dfrac{1}{m}\\sum (f_{w,b}(x^{(i)}) - y^{(i)})\\,x^{(i)}$
  - $\\dfrac{\\partial J}{\\partial b} = \\dfrac{1}{m}\\sum (f_{w,b}(x^{(i)}) - y^{(i)})$

## Pièges du prof

- Choisir la formule de $b$ **avec** $x^{(i)}$ (piège n°1).
- Dire « $w$ diminue » quand le gradient est négatif (piège n°2).
- Oublier que la mise à jour est **simultanée**.
- Ne pas mentionner **la normalisation des features** comme solution aux défis (c'est LA réponse
  attendue avec le choix de $\\alpha$).

## Checklist

- [ ] Réécrire l'algorithme \`repeat until convergence { ... }\` de mémoire
- [ ] Justifier « gradient négatif ⇒ $w$ augmente » avec la formule
- [ ] Justifier la bonne formule de $b$ par la dérivation
- [ ] Citer batch / SGD / mini-batch avec un avantage chacun
- [ ] Lister 4 défis + solutions, dont **$\\alpha$** et **normalisation**
- [ ] Citer 3 critères de convergence
`;
window.ML.ficheText["03"] = `# 03 — Régression logistique · 🔴 Priorité haute

> TD4. **Tombé** : sigmoïde, dérivée type rétropropagation ($\\partial E/\\partial x_{in}$),
> log-loss et « pourquoi utilise-t-on la fonction log ? ».

---

## Résumé express

Classifieur binaire. On prend le **même modèle linéaire** que la régression linéaire, puis on
passe le score dans la **fonction sigmoïde** pour obtenir une **probabilité** $\\in\\ ]0,1[$. On
entraîne en minimisant la **log-loss (entropie croisée)** par descente de gradient.

## À maîtriser absolument

### Le modèle

Score linéaire : $z = x_{in} = w^\\top x + b$

$$P(y=1 \\mid x_{in}) = x_{out} = \\sigma(x_{in}) = \\frac{1}{1 + e^{-x_{in}}}$$

- $\\sigma(z) \\in\\ ]0,1[$ : transforme un score réel en probabilité.
- $\\sigma(0) = 0{,}5$ ; $\\sigma(+\\infty) \\to 1$ ; $\\sigma(-\\infty) \\to 0$ ; courbe en **S**.
- **Décision** : $P(y=1\\mid x) \\ge 0{,}5 \\iff z \\ge 0 \\Rightarrow$ classe 1, sinon classe 0.
- **Frontière de décision** : $w^\\top x + b = 0$ → **hyperplan linéaire** dans l'espace des
  features (la logistique est un **classifieur linéaire**).

### Propriété clé de la sigmoïde — sa dérivée

$$\\sigma'(z) = \\sigma(z)\\,\\big(1 - \\sigma(z)\\big)$$

C'est **la** formule à connaître. Démonstration rapide : $\\sigma(z) = (1+e^{-z})^{-1}$,
$\\sigma'(z) = \\dfrac{e^{-z}}{(1+e^{-z})^2} = \\dfrac{1}{1+e^{-z}}\\cdot\\dfrac{e^{-z}}{1+e^{-z}}
= \\sigma(z)(1-\\sigma(z))$.

### ⭐ Question tombée : $\\partial E/\\partial x_{in}$ en fonction de $\\partial E/\\partial x_{out}$

On donne l'erreur qui « revient » sur la sortie $x_{out}$, soit $\\dfrac{\\partial E}{\\partial x_{out}}$.
Par la **règle de la chaîne** (rétropropagation à travers la sigmoïde) :

$$\\boxed{\\;\\frac{\\partial E}{\\partial x_{in}}
= \\frac{\\partial E}{\\partial x_{out}} \\cdot \\frac{\\partial x_{out}}{\\partial x_{in}}
= \\frac{\\partial E}{\\partial x_{out}} \\cdot \\sigma'(x_{in})
= \\frac{\\partial E}{\\partial x_{out}} \\cdot x_{out}\\,(1 - x_{out})\\;}$$

(car $x_{out} = \\sigma(x_{in})$ donc $\\sigma'(x_{in}) = x_{out}(1-x_{out})$).

#### Démonstration détaillée — 5 étapes (Contrôle final 2022/2023, Q5)

On part **uniquement de la sigmoïde** $x_{out}=\\dfrac{1}{1+e^{-x_{in}}}$ et on veut
$\\dfrac{\\partial x_{out}}{\\partial x_{in}}$.

**Étape 1 — forme puissance.** On écrit $x_{out}=(1+e^{-x_{in}})^{-1}$.

**Étape 2 — dérivée de $u^{-1}$.** On sait que $\\dfrac{d}{dx}(u^{-1})=-u^{-2}\\,\\dfrac{du}{dx}$.
Ici $u=1+e^{-x_{in}}$, donc

$$\\frac{\\partial x_{out}}{\\partial x_{in}}
= -(1+e^{-x_{in}})^{-2}\\,\\frac{\\partial}{\\partial x_{in}}(1+e^{-x_{in}})$$

**Étape 3 — dériver l'intérieur.** La dérivée de $1$ est $0$ et $\\dfrac{d}{dx}e^{-x}=-e^{-x}$,
donc $\\dfrac{\\partial}{\\partial x_{in}}(1+e^{-x_{in}}) = -e^{-x_{in}}$. Les deux signes moins se
compensent :

$$\\boxed{\\;\\frac{\\partial x_{out}}{\\partial x_{in}}
= \\frac{e^{-x_{in}}}{(1+e^{-x_{in}})^2}\\;}$$

**Étape 4 — réexprimer avec $x_{out}$.** Comme
$1-x_{out}=1-\\dfrac{1}{1+e^{-x_{in}}}=\\dfrac{1+e^{-x_{in}}-1}{1+e^{-x_{in}}}
=\\dfrac{e^{-x_{in}}}{1+e^{-x_{in}}}$, on a

$$x_{out}(1-x_{out})
= \\frac{1}{1+e^{-x_{in}}}\\times\\frac{e^{-x_{in}}}{1+e^{-x_{in}}}
= \\frac{e^{-x_{in}}}{(1+e^{-x_{in}})^2}
= \\frac{\\partial x_{out}}{\\partial x_{in}}$$

d'où $\\dfrac{\\partial x_{out}}{\\partial x_{in}} = x_{out}(1-x_{out})$.

**Étape 5 — règle de la chaîne $E \\to x_{out} \\to x_{in}$.**

$$\\frac{\\partial E}{\\partial x_{in}}
= \\frac{\\partial E}{\\partial x_{out}}\\,\\frac{\\partial x_{out}}{\\partial x_{in}}
= \\frac{\\partial E}{\\partial x_{out}}\\,x_{out}(1-x_{out})$$

C'est **cette dernière étape qui est la rétropropagation**. La forme $x_{out}(1-x_{out})$ est
préférée à $\\dfrac{e^{-x_{in}}}{(1+e^{-x_{in}})^2}$ car $x_{out}$ est **déjà calculé** lors de la
passe avant. *(Détail complet : \`Demonstration_Q5_backprop_sigmoide_2022-2023.md\`.)*

### Log-loss / entropie croisée / perte logistique

$$\\text{Log Loss} = \\sum_{(x,y)\\in D} \\Big[ -y\\log(y') - (1-y)\\log(1 - y') \\Big]
\\quad\\text{avec } y' = P(y=1\\mid x) = \\sigma(z)$$

Par exemple (perte sur un point) :
- si $y = 1$ : perte $= -\\log(y')$ → 0 si $y' \\to 1$, $\\to +\\infty$ si $y' \\to 0$.
- si $y = 0$ : perte $= -\\log(1 - y')$ → 0 si $y' \\to 0$, $\\to +\\infty$ si $y' \\to 1$.

### ⭐ Question tombée : « Pourquoi utilise-t-on la fonction Log ? »

Réponse structurée :

1. **Origine : le maximum de vraisemblance.** Pour des étiquettes de Bernoulli, la vraisemblance
   d'un point est $y'^{\\,y}(1-y')^{\\,1-y}$. Celle de tout le dataset est un **produit**. On prend
   le **log** pour transformer ce produit en **somme** (plus simple à dériver, et évite l'
   *underflow* numérique quand on multiplie des centaines de probabilités < 1). Minimiser la
   log-loss ⇔ **maximiser la log-vraisemblance**.
2. **Convexité.** La log-loss composée avec la sigmoïde est **convexe** en $(w,b)$ ⇒ un seul
   minimum global, la descente de gradient converge. Si on utilisait la **MSE** avec la
   sigmoïde, la surface de coût serait **non convexe** (plein de minima locaux) et le gradient
   **s'annulerait** dans les zones saturées de la sigmoïde ⇒ apprentissage bloqué.
3. **Pénalité adaptée à des probabilités.** Le $-\\log$ **punit énormément une prédiction
   confiante et fausse** ($y'=0{,}01$ alors que $y=1$ ⇒ perte $\\approx 4{,}6$) et récompense la
   confiance justifiée. C'est le bon signal pour calibrer des probabilités.
4. **Gradient simple et propre.** Avec la log-loss + sigmoïde, le gradient se simplifie en
   $\\dfrac{\\partial J}{\\partial w_j} = \\dfrac{1}{m}\\sum (y'^{(i)} - y^{(i)})\\,x_j^{(i)}$ —
   **exactement la même forme que la régression linéaire** (l'erreur $\\times$ la feature).

### Gradient de la log-loss (même forme que la régression linéaire !)

$$\\frac{\\partial J}{\\partial w_j} = \\frac{1}{m}\\sum_{i=1}^{m}\\big(\\sigma(z^{(i)}) - y^{(i)}\\big)\\,x_j^{(i)}
\\qquad
\\frac{\\partial J}{\\partial b} = \\frac{1}{m}\\sum_{i=1}^{m}\\big(\\sigma(z^{(i)}) - y^{(i)}\\big)$$

### Interprétation des coefficients — odds ratio

- **Cote (odds)** : $\\dfrac{P(y=1)}{P(y=0)} = e^{z}$.
- $e^{\\theta_j}$ = **odds ratio** : multiplier des cotes quand $x_j$ augmente de 1 unité (les
  autres fixées). $e^{\\theta_j} > 1$ ⇒ $x_j$ augmente la probabilité de la classe 1.
- $\\theta_j > 0$ ⇒ feature « pousse » vers la classe 1 ; $\\theta_j < 0$ ⇒ vers la classe 0.

### Régularisation L1 / L2

| | L2 (Ridge) | L1 (Lasso) |
|---|---|---|
| Terme ajouté à $J$ | $\\lambda \\sum \\theta_j^2$ | $\\lambda \\sum \\lvert\\theta_j\\rvert$ |
| Effet | rétrécit les coefficients, jamais exactement 0 | met des coefficients **exactement à 0** ⇒ **sélection de features** |
| sklearn | \`penalty='l2'\`, force $= 1/C$ | \`penalty='l1'\` |

$\\lambda$ grand ⇒ plus de régularisation ⇒ modèle plus simple (moins de variance, plus de biais).

## Formules clés

- $\\sigma(z) = 1/(1+e^{-z})$ · $\\sigma'(z) = \\sigma(z)(1-\\sigma(z))$
- Log-loss $= -\\frac{1}{m}\\sum [y\\log y' + (1-y)\\log(1-y')]$
- $\\partial J/\\partial w_j = \\frac{1}{m}\\sum (y'^{(i)} - y^{(i)})x_j^{(i)}$
- Odds $= e^{z}$ ; odds ratio $= e^{\\theta_j}$
- Frontière : $w^\\top x + b = 0$

## Pièges du prof

- Dire que la régression logistique est une régression : **non, c'est un classifieur** qui
  **estime une probabilité**.
- Oublier $\\sigma'(z) = \\sigma(z)(1-\\sigma(z))$ dans la question de rétropropagation.
- Répondre « on utilise le log pour normaliser » : non → **produit → somme + vraisemblance +
  convexité**.
- Confondre frontière de décision (linéaire ici) et forme de la sigmoïde (non linéaire).

## Questions types déjà tombées

**Q. Écrivez $\\partial E/\\partial x_{in}$ en fonction de $\\partial E/\\partial x_{out}$.**
→ $\\dfrac{\\partial E}{\\partial x_{in}} = \\dfrac{\\partial E}{\\partial x_{out}}\\cdot x_{out}(1-x_{out})$.

**Q. Expliquez pourquoi on utilise la fonction Log dans la perte logistique.**
→ Les 4 points ci-dessus (vraisemblance/produit→somme, convexité vs MSE, pénalité des erreurs
confiantes, gradient simple).

## Checklist

- [ ] Écrire $\\sigma$, sa courbe, $\\sigma(0)=0{,}5$, et $\\sigma'=\\sigma(1-\\sigma)$
- [ ] Dériver $\\partial E/\\partial x_{in}$ par la règle de la chaîne
- [ ] Écrire la log-loss et expliquer sa valeur selon $y=0$ / $y=1$
- [ ] Donner les 4 raisons d'utiliser le log
- [ ] Expliquer l'odds ratio $e^{\\theta_j}$
`;
window.ML.ficheText["04"] = `# 04 — Arbres de décision · 🔴 Priorité haute

> TD5. **Tombé** : construire un/des arbre(s) à partir d'un **tableau de contingence**, critère
> du **gain d'information**, en **justifiant le choix des attributs SANS faire les calculs**.

---

## Résumé express

On **partitionne récursivement** l'espace des features par des **questions binaires**
(« $x_i \\le$ seuil ? »). À chaque nœud, on choisit l'attribut qui **rend les sous-groupes les
plus purs possibles**, mesuré par le **gain d'information** (basé sur l'entropie) ou la
**réduction d'impureté de Gini**.

## À maîtriser absolument

### Mesures d'impureté

| Mesure | Formule | Nœud pur | Max (binaire) |
|---|---|---|---|
| **Entropie de Shannon** | $H(S) = -\\sum_i p_i \\log_2(p_i)$ | $H = 0$ | $H = 1$ (50/50) |
| **Impureté de Gini** | $G(S) = 1 - \\sum_i p_i^{\\,2}$ | $G = 0$ | $G = 0{,}5$ (50/50) |

- $p_i$ = proportion de la classe $i$ dans le nœud.
- **Nœud pur** = tous les exemples de la même classe ⇒ c'est **l'objectif** de l'arbre
  (feuille de décision fiable).
- Entropie et Gini donnent en pratique des arbres **très proches** ; Gini est un peu plus
  rapide (pas de log) → défaut de sklearn (CART).

### Gain d'information

$$IG(S, A) = H(S) - \\sum_{v \\in \\text{valeurs}(A)} \\frac{\\lvert S_v \\rvert}{\\lvert S \\rvert}\\, H(S_v)$$

= entropie du parent − **moyenne pondérée** des entropies des enfants après split sur $A$.
On choisit à chaque nœud **l'attribut $A$ qui maximise $IG$** (équivalent : qui minimise
l'impureté moyenne des enfants).

Variante Gini : $\\Delta G = G(S) - \\sum_v \\frac{\\lvert S_v\\rvert}{\\lvert S\\rvert} G(S_v)$.

### Algorithmes

| Algo | Critère | Données | Particularité |
|---|---|---|---|
| **ID3** | entropie / gain d'information | catégorielles | pas d'élagage, biaisé vers attributs à nombreuses modalités |
| **C4.5** | *gain ratio* (gain normalisé) | catégorielles + **continues** + **manquantes** | corrige le biais d'ID3, élagage |
| **CART** | **Gini** (classif.) / MSE (régression) | continues & catégorielles | arbres **binaires** uniquement ; utilisé par sklearn |

### Avantages / inconvénients

**+** Interprétable (règles SI/ALORS lisibles) · pas besoin de normalisation · gère
naturellement les valeurs manquantes et les features de types mélangés · capture des
interactions non linéaires.

**−** **Haute variance / instable** (un point qui change ⇒ arbre différent) · **sur-apprend
facilement** sans élagage · frontières « en escalier » · biais vers les features à nombreuses
modalités.

### Contrôler le sur-apprentissage (élagage / pré-élagage)

- \`max_depth\` (profondeur max), \`min_samples_leaf\` / \`min_samples_split\`,
  \`min_impurity_decrease\`, \`max_leaf_nodes\`.
- **Post-élagage** : construire l'arbre complet puis couper les branches qui n'améliorent pas la
  validation (*cost-complexity pruning*, \`ccp_alpha\`).
- Meilleure solution en pratique : les **forêts aléatoires** (fiche 08) qui moyennent la
  variance.

## ⭐ Méthode pour la question « tableau de contingence, SANS calculs »

Exemple de l'examen (200 patients, classes **M** malade / **B** bonne santé) :

| | Gorge irritée | Gorge non irritée |
|---|---|---|
| Température < 37,5 | 6 B, 37 M | 91 B, 1 M |
| Température ≥ 37,5 | 2 B, 21 M | 1 B, 41 M |

**Comment raisonner (sans calculer entropie/gain) :**

1. **Regarder la pureté induite par chaque attribut seul.**
   - *Gorge irritée* : « irritée » → 8 B / 58 M (très majoritairement **M**) ; « non irritée » →
     92 B / 42 M (majoritairement **B**). ⇒ Bonne séparation.
   - *Température* : « < 37,5 » → 97 B / 38 M (majoritairement **B**) ; « ≥ 37,5 » → 3 B / 62 M
     (très majoritairement **M**). ⇒ Bonne séparation aussi.
2. **Chercher les cellules quasi pures** (fort signal) :
   - (Temp < 37,5 **et** gorge non irritée) → **91 B, 1 M** : cellule quasi pure « B ».
   - (Temp ≥ 37,5 **et** gorge irritée) → **2 B, 21 M** : très majoritairement « M ».
   - (Temp ≥ 37,5 **et** gorge non irritée) → **1 B, 41 M** : quasi pure « M ».
3. **Conclusion à rédiger :** les **deux attributs sont informatifs** (chacun crée un enfant à
   forte majorité). On peut donc construire **plusieurs arbres valables** : un avec *gorge
   irritée* à la racine, un avec *température* à la racine. Le critère du gain d'information
   choisira comme racine **l'attribut dont les 2 enfants sont globalement les plus purs**
   (moyenne pondérée d'entropie la plus basse). Ici les deux sont proches ; après le 1er split,
   l'autre attribut sépare presque parfaitement les feuilles restantes (ex. après *temp ≥ 37,5*,
   *gorge irritée/non* donne 21 M vs 41 M — les deux « M » → nœud déjà quasi pur, split peu
   utile ; le vrai gain est côté *temp < 37,5* où *gorge* sépare 91 B/1 M de 6 B/37 M).
4. **Justifier « sans calcul »** = parler de **majorités écrasantes**, de **cellules pures**, de
   **réduction d'impureté**, pas de chiffres d'entropie.

> Astuce : un attribut est bon si, **après le split, on peut prédire la classe de chaque enfant
> avec peu d'erreurs**. Un attribut est inutile si les deux enfants gardent le même mélange que
> le parent.

## Formules clés

- $H(S) = -\\sum p_i \\log_2 p_i$
- $G(S) = 1 - \\sum p_i^{2}$
- $IG(S,A) = H(S) - \\sum_v \\frac{\\lvert S_v\\rvert}{\\lvert S\\rvert} H(S_v)$
- Règle : racine = $\\arg\\max_A IG(S,A)$

## Pièges du prof

- **Faire les calculs alors que la consigne dit de ne pas les faire** → raisonner sur la pureté.
- Oublier de dire qu'**il peut exister plusieurs arbres** (« quel(s) arbre(s) »).
- Dire qu'un arbre a besoin de normalisation (**faux** — insensible aux échelles).
- Confondre entropie (log₂, max 1) et Gini (max 0,5).

## Questions types déjà tombées

**Q. Quel(s) arbre(s) de décision peut-on construire à partir de ces données avec le critère du
gain d'information ? (justifier sans calculs)**
→ Voir la méthode ci-dessus : les deux attributs sont informatifs, plusieurs arbres possibles,
le gain d'information privilégie l'attribut créant les enfants les plus purs ; décrire les
cellules quasi pures.

## Checklist

- [ ] Écrire $H$, $G$, $IG$ de mémoire + valeurs pour nœud pur et 50/50
- [ ] Différencier ID3 / C4.5 / CART
- [ ] Sur un tableau de contingence : identifier l'attribut le plus « séparateur » sans calculer
- [ ] Citer 3 avantages et 3 inconvénients
- [ ] Nommer 3 hyperparamètres d'élagage
`;
window.ML.ficheText["05"] = `# 05 — K-Nearest Neighbors (KNN) · 🔴 Priorité haute

> TD5. **Tombé aux 2 examens** : « Donnez 3 types de distances pour l'algorithme KNN ».

---

## Résumé express

Algorithme **paresseux** (*lazy*) : **aucun entraînement**. Pour classer un nouveau point $x$,
on cherche ses **$K$ plus proches voisins** dans les données d'entraînement (selon une
**distance**) et on prend la **classe majoritaire** (ou la **moyenne** des $y$ en régression).

## ⭐ Les types de distances (la question du prof)

| Distance | Formule | Usage / remarque |
|---|---|---|
| **Euclidienne** ($L_2$) | $d(x,y) = \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}$ | la plus courante ; distance « à vol d'oiseau » ; **très sensible aux échelles** ⇒ normaliser |
| **Manhattan** ($L_1$, *city-block*) | $d(x,y) = \\sum_{i=1}^{n}\\lvert x_i - y_i\\rvert$ | déplacements en « damier » ; plus robuste aux outliers que $L_2$ ; bonne en grande dimension |
| **Minkowski** ($L_p$) | $d(x,y) = \\big(\\sum_{i=1}^{n}\\lvert x_i - y_i\\rvert^{p}\\big)^{1/p}$ | **généralise** les deux : $p=1$ → Manhattan, $p=2$ → Euclidienne, $p\\to\\infty$ → Chebyshev |
| **Chebyshev** ($L_\\infty$) | $d(x,y) = \\max_i \\lvert x_i - y_i\\rvert$ | ne retient que la plus grande différence sur un axe |
| **Hamming** | nombre de coordonnées où $x_i \\neq y_i$ | variables **catégorielles / binaires** (texte, ADN) |
| **Cosinus** (dissimilarité) | $1 - \\dfrac{x\\cdot y}{\\lVert x\\rVert\\,\\lVert y\\rVert}$ | compare l'**orientation** des vecteurs, pas leur norme ; texte / TF-IDF, recommandation |

> Pour l'examen, cite les **3 sûres** : **Euclidienne, Manhattan, Minkowski** (+ mentionner
> Hamming pour les données catégorielles montre que tu maîtrises).

## À maîtriser absolument

### Choix de $K$

- **$K$ petit** (ex. 1) → frontière **très découpée**, sensible au bruit → **sur-apprentissage**
  (faible biais, forte variance).
- **$K$ grand** → frontière **lisse**, on « moyenne » sur trop de voisins → **sous-apprentissage**
  (fort biais, faible variance).
- On choisit $K$ par **validation croisée** (courbe *Elbow* : $F_1$ ou erreur en fonction de $K$).
- Prendre $K$ **impair** en binaire pour éviter les égalités de vote.

### Normalisation OBLIGATOIRE

KNN repose sur des distances ⇒ une feature à grande échelle (ex. salaire en milliers) **écrase**
une feature à petite échelle (ex. âge). Il faut **standardiser** (z-score) ou **normaliser**
(min-max) **avant** de calculer les distances. *(À l'inverse, les arbres n'en ont pas besoin.)*

### Malédiction de la dimensionnalité

En haute dimension, **toutes les paires de points deviennent presque équidistantes** : le
rapport (distance max − distance min) / distance min → 0. La notion de « plus proche voisin »
perd son sens ⇒ KNN se dégrade fortement. Solutions : **réduction de dimension** (PCA, sélection
de features), plus de données.

### Coût

- Entraînement : $O(1)$ (on stocke juste les données).
- **Prédiction : $O(n \\cdot d)$** par requête (comparer à tous les points) ⇒ **lent sur gros
  datasets**. Accélération : KD-Tree / Ball-Tree (efficace si $d$ petit), approximate NN (FAISS).

### Pondération des voisins

- Vote **uniforme** : chaque voisin compte pareil.
- Vote **pondéré par $1/d$** : les voisins plus proches pèsent plus (\`weights='distance'\`).

### Quand utiliser KNN

Petit dataset, peu de features, frontière non linéaire, pas d'hypothèse de forme. À éviter :
grande dimension, gros volume, besoin de prédictions rapides.

## Arbre vs KNN (comparaison type examen)

| Critère | Arbre de décision | KNN |
|---|---|---|
| Entraînement | construction $O(n\\,d\\log n)$ | **aucun** (lazy) |
| Prédiction | $O(\\text{profondeur}) \\approx O(\\log n)$ | **$O(n\\,d)$** — coûteux |
| Normalisation | non requise | **obligatoire** |
| Interprétabilité | très élevée (règles) | nulle (boîte noire) |
| Hyperparamètre clé | \`max_depth\`, \`min_samples_leaf\` | **$K$**, la distance |
| Type de frontière | escaliers axis-aligned | locale, épouse les données |

## Formules clés

- Euclidienne : $\\sqrt{\\sum (x_i-y_i)^2}$
- Manhattan : $\\sum \\lvert x_i - y_i\\rvert$
- Minkowski : $\\big(\\sum \\lvert x_i-y_i\\rvert^p\\big)^{1/p}$
- Décision : classe majoritaire parmi les $K$ voisins (ou moyenne en régression)

## Pièges du prof

- Oublier **Minkowski** comme généralisation (c'est la réponse « élégante »).
- Ne pas mentionner la **normalisation obligatoire**.
- Dire que KNN « s'entraîne » : non, il **mémorise**.
- Confondre effet de $K$ petit (sur-apprentissage) et $K$ grand (sous-apprentissage).

## Questions types déjà tombées

**Q. Donnez 3 types de distances pour l'algorithme KNN.**
→ Euclidienne $\\sqrt{\\sum(x_i-y_i)^2}$, Manhattan $\\sum\\lvert x_i-y_i\\rvert$,
Minkowski $(\\sum\\lvert x_i-y_i\\rvert^p)^{1/p}$ (qui généralise les deux ; Hamming pour le
catégoriel).

## Checklist

- [ ] Écrire 3 distances avec formule
- [ ] Expliquer l'effet de $K$ petit vs grand (variance/biais)
- [ ] Justifier pourquoi la normalisation est obligatoire
- [ ] Expliquer la malédiction de la dimensionnalité
- [ ] Donner le coût de prédiction $O(n\\,d)$
`;
window.ML.ficheText["06"] = `# 06 — SVM : Machines à Vecteurs de Support · 🔴 Priorité haute

> TD6. **Tombé aux 2 examens** : « Expliquez brièvement le concept du SVM ».

---

## Résumé express

Là où d'autres modèles cherchent **une** frontière qui sépare les classes, le SVM cherche celle
qui les sépare avec la **marge la plus large possible**. Cette **maximisation de la marge** lui
donne une **excellente généralisation**. Pour les données non linéairement séparables, on
utilise le **kernel trick**.

## ⭐ « Expliquez brièvement le concept du SVM » — réponse modèle

Le SVM est un classifieur **linéaire à marge maximale**. Il cherche l'**hyperplan séparateur**
$w\\cdot x + b = 0$ qui **maximise la distance (marge)** aux points les plus proches de chaque
classe. Ces points les plus proches, situés exactement sur les hyperplans marginaux
$w\\cdot x + b = \\pm 1$, sont les **vecteurs support** : ce sont **eux seuls** qui déterminent la
frontière (les autres points n'ont aucune influence). Maximiser la marge revient à **minimiser
$\\lVert w \\rVert^2$** sous les contraintes $y_i(w\\cdot x_i + b) \\ge 1$. Une marge large ⇒ modèle
robuste, bonne généralisation. Pour les données non séparables linéairement, on projette les
données dans un espace de plus grande dimension via une **fonction noyau** (kernel), où elles
redeviennent séparables — sans jamais calculer explicitement cette projection.

## À maîtriser absolument

### SVM linéaire — géométrie

- Hyperplan de décision : $w\\cdot x + b = 0$.
- Hyperplans marginaux : $w\\cdot x + b = +1$ (classe +1) et $w\\cdot x + b = -1$ (classe −1).
- **Marge** $= \\dfrac{2}{\\lVert w \\rVert}$ (distance entre les deux hyperplans marginaux).
- **Problème d'optimisation (hard margin)** :
  $$\\min_{w,b} \\tfrac{1}{2}\\lVert w\\rVert^2 \\quad \\text{s.c.} \\quad y_i(w\\cdot x_i + b) \\ge 1 \\;\\; \\forall i$$
- **Vecteurs support** : les $x_i$ tels que $y_i(w\\cdot x_i + b) = 1$. La solution ne dépend
  **que** d'eux.

### Hard margin vs soft margin (paramètre $C$)

| | Hard margin | Soft margin |
|---|---|---|
| Contrainte | aucune violation ($y_i(w x_i + b) \\ge 1$) | tolère des violations via des variables d'écart $\\xi_i \\ge 0$ |
| Objectif | $\\min \\tfrac12\\lVert w\\rVert^2$ | $\\min \\tfrac12\\lVert w\\rVert^2 + C\\sum \\xi_i$ |
| Données | linéairement séparables uniquement | bruitées / chevauchantes (cas réel) |

**Rôle de $C$** (compromis biais/variance) :

| $C$ | Marge | Comportement |
|---|---|---|
| $C \\to 0$ (petit) | très large, **beaucoup** de violations tolérées | **sous-apprentissage** (biais élevé) |
| $C = 1$ | compromis équilibré | bon point de départ |
| $C \\to \\infty$ (grand) | très étroite, **peu** de violations | **sur-apprentissage** (variance élevée) |

$C$ est l'**inverse de la force de régularisation** (grand $C$ = peu de régularisation, analogue
à $1/\\lambda$).

### Kernel trick — séparation non linéaire

- **Idée** : si les données ne sont pas séparables en dimension $d$, les projeter via $\\phi$
  dans une dimension $d' \\gg d$ où elles le sont.
- **Astuce** : on n'a **jamais besoin de calculer $\\phi(x)$** — seulement les produits scalaires
  $K(x_i, x_j) = \\phi(x_i)\\cdot\\phi(x_j)$.

| Noyau | Formule | Remarque |
|---|---|---|
| **Linéaire** | $K(x,y) = x^\\top y$ | pas de projection ; beaucoup de features / texte |
| **Polynomial** | $K(x,y) = (\\gamma\\, x^\\top y + r)^d$ | interactions de degré $d$ |
| **RBF / Gaussien** | $K(x,y) = \\exp(-\\gamma \\lVert x - y\\rVert^2)$ | **le plus populaire**, dimension implicite infinie |

**Rôle de $\\gamma$ (RBF)** : grand $\\gamma$ ⇒ chaque exemple n'influence que son **voisinage
proche** ⇒ frontière très sinueuse ⇒ **sur-apprentissage**. Petit $\\gamma$ ⇒ influence large ⇒
frontière lisse ⇒ risque de sous-apprentissage.

**Réglage pratique** : commencer par **RBF** + \`GridSearchCV\` sur $(C, \\gamma)$.

### Points importants

- **Normalisation obligatoire** (comme KNN) : le SVM repose sur des distances / produits
  scalaires.
- **SVR** : version régression (tube d'insensibilité $\\varepsilon$ autour de la prédiction).
- **Multi-classe** : One-vs-One (OvO, $\\binom{k}{2}$ classifieurs) ou One-vs-Rest (OvR, $k$
  classifieurs).
- Forces : robuste en grande dimension, efficace si $n$ modéré, solution unique (problème
  convexe). Faiblesses : lent sur très gros $n$ ($O(n^2)$–$O(n^3)$), pas de probabilités
  natives (Platt scaling), sensible au choix du noyau.

## Formules clés

- Hyperplan : $w\\cdot x + b = 0$ ; marges : $w\\cdot x + b = \\pm 1$
- Marge $= 2/\\lVert w\\rVert$
- Optimisation : $\\min \\tfrac12\\lVert w\\rVert^2 + C\\sum\\xi_i$ s.c. $y_i(w x_i+b)\\ge 1-\\xi_i$
- RBF : $K(x,y) = e^{-\\gamma\\lVert x-y\\rVert^2}$

## Pièges du prof

- Dire « le SVM sépare les classes » sans le mot-clé **marge maximale** (c'est LE concept).
- Oublier les **vecteurs support** (seuls points qui comptent).
- Confondre $C$ (soft margin, régularisation) et $\\gamma$ (largeur du noyau RBF).
- Oublier la **normalisation**.

## Questions types déjà tombées

**Q. Expliquez brièvement le concept du SVM.**
→ La réponse modèle ci-dessus : hyperplan à marge maximale, vecteurs support,
$\\min\\lVert w\\rVert^2$ s.c. $y_i(wx_i+b)\\ge1$, kernel trick pour le non-linéaire.

## Checklist

- [ ] Définir hyperplan séparateur + marge $= 2/\\lVert w\\rVert$
- [ ] Expliquer « vecteurs support » et pourquoi eux seuls comptent
- [ ] Écrire le problème d'optimisation (avec et sans $\\xi_i$)
- [ ] Expliquer l'effet de $C$ (petit ↔ grand) sur biais/variance
- [ ] Citer 3 noyaux + effet de $\\gamma$ pour le RBF
- [ ] Rappeler : normalisation obligatoire
`;
window.ML.ficheText["07"] = `# 07 — Naive Bayes & raisonnement bayésien · 🟠 Priorité moyenne

> TD7. Pas encore tombé aux 2 annales, mais au programme. Classique en QCM / question de cours.

---

## Résumé express

Classifieur **probabiliste génératif** fondé sur le **théorème de Bayes** + une **hypothèse
naïve d'indépendance conditionnelle** des features sachant la classe. Simple, très rapide,
étonnamment efficace (surtout en texte), même quand l'hypothèse est fausse.

## À maîtriser absolument

### Théorème de Bayes

$$P(C \\mid X) = \\frac{P(X \\mid C)\\,P(C)}{P(X)}, \\qquad P(X) = \\sum_c P(X\\mid c)\\,P(c)$$

- $P(C)$ : **a priori** (fréquence de la classe) · $P(X\\mid C)$ : **vraisemblance** ·
  $P(C\\mid X)$ : **a posteriori** · $P(X)$ : **évidence** (normalisation, identique pour toutes
  les classes ⇒ on peut l'ignorer pour l'\`argmax\`).

### Hypothèse naïve d'indépendance conditionnelle

$$P(X \\mid C) = P(x_1,\\dots,x_n \\mid C) = \\prod_{i=1}^{n} P(x_i \\mid C)$$

**Règle de décision :**
$$\\hat{y} = \\arg\\max_{c}\\; P(C=c)\\prod_{i=1}^{n} P(x_i \\mid C=c)$$

En pratique on passe au **log** pour éviter l'*underflow* :
$\\hat y = \\arg\\max_c \\big[\\log P(c) + \\sum_i \\log P(x_i\\mid c)\\big]$.

### Les 3 variantes

| Variante | Modèle de $P(x_i\\mid C)$ | Données | Cas d'usage |
|---|---|---|---|
| **GaussianNB** | densité gaussienne $\\mathcal{N}(\\mu_c, \\sigma_c^2)$ (on estime $\\mu_c, \\sigma_c$ par classe) | features **continues** | médical, churn, Iris |
| **BernoulliNB** | Bernoulli : $P(x_i=1\\mid C) = \\theta_{ic}$ | features **binaires** (0/1) | présence/absence de mots |
| **MultinomialNB** | multinomiale : $P(x_i\\mid C) = \\dfrac{N_{ic} + \\alpha}{N_c + \\alpha\\lvert V\\rvert}$ | **comptages** entiers ≥ 0 | fréquences de mots (TF), spam |

### Lissage de Laplace (additif) — éviter les probabilités nulles

$$P(x_i \\mid C) = \\frac{N(x_i, C) + \\alpha}{N(C) + \\alpha\\,\\lvert V\\rvert}$$

- **Problème sans lissage** : si une modalité n'apparaît jamais dans une classe, $P(x_i\\mid C)=0$
  ⇒ **tout le produit devient 0**, quelles que soient les autres features.
- $\\alpha = 1$ : lissage de Laplace (défaut) · $\\alpha < 1$ : lissage partiel (Lidstone) ·
  $\\alpha = 0$ : pas de lissage (dangereux).
- $\\lvert V\\rvert$ = nombre de valeurs possibles de la feature (taille du vocabulaire en texte).
- sklearn : \`alpha\` (Bernoulli/Multinomial), \`var_smoothing\` (Gaussian).

### Génératif vs discriminatif (comparaison avec la régression logistique)

| | Naive Bayes (génératif) | Régression logistique (discriminatif) |
|---|---|---|
| Modélise | $P(X\\mid C)$ et $P(C)$ puis Bayes | directement $P(C\\mid X)$ |
| Hypothèse forte | indépendance conditionnelle | frontière linéaire |
| Peu de données | **meilleur** (converge vite) | a besoin de plus de données |
| Beaucoup de données | souvent dépassé | **souvent meilleur** |
| Features corrélées | souffre (double comptage) | gère mieux |
| Entraînement | comptages / moments : **très rapide**, une passe | itératif (descente de gradient) |

## Exemple type (dataset météo, 14 jours)

$P(\\text{Jouer}) $, $P(\\text{Ciel}=\\text{Ensoleillé}\\mid \\text{Jouer=Oui/Non})$, etc.
Prédiction pour un nouveau jour : calculer
$P(\\text{Oui})\\prod P(x_i\\mid\\text{Oui})$ vs $P(\\text{Non})\\prod P(x_i\\mid\\text{Non})$,
prendre le max, normaliser pour obtenir une probabilité.

## Formules clés

- Bayes : $P(C\\mid X) = P(X\\mid C)P(C)/P(X)$
- Naïf : $P(X\\mid C) = \\prod_i P(x_i\\mid C)$
- Décision : $\\arg\\max_c P(c)\\prod_i P(x_i\\mid c)$
- Laplace : $P(x_i\\mid C) = (N(x_i,C)+\\alpha)/(N(C)+\\alpha\\lvert V\\rvert)$

## Pièges du prof

- Oublier le lissage ⇒ « probabilité nulle qui absorbe tout ».
- Oublier l'a priori $P(C)$ dans l'\`argmax\` (surtout si classes déséquilibrées).
- Dire que NB « ignore » $P(X)$ par erreur : on l'ignore **volontairement** car constante pour
  l'\`argmax\`, mais il faut la remettre pour une **probabilité** calibrée.
- Confondre les 3 variantes (continu → Gaussian, binaire → Bernoulli, comptage → Multinomial).

## Checklist

- [ ] Écrire Bayes + le rôle de chaque terme
- [ ] Écrire l'hypothèse naïve et la règle de décision
- [ ] Expliquer le lissage de Laplace et le problème qu'il résout
- [ ] Choisir la bonne variante selon le type de features
- [ ] Comparer génératif / discriminatif avec la logistique
`;
window.ML.ficheText["08"] = `# 08 — Méthodes d'ensemble : Random Forest & Boosting · 🟠 Priorité moyenne

> TD8. Pas encore tombé, mais au programme. Souvent en question de cours « bagging vs boosting ».

---

## Résumé express

Combiner **plusieurs modèles faibles** pour former un modèle fort. Deux stratégies opposées :
**Bagging** (modèles **parallèles indépendants**, on réduit la **variance**) et **Boosting**
(modèles **séquentiels** qui corrigent les erreurs des précédents, on réduit le **biais**).

## Bagging (Bootstrap Aggregating)

- Entraîner $N$ modèles **indépendants** sur $N$ échantillons **bootstrap** (tirage **avec
  remise**, même taille que l'original).
- Agrégation : **vote majoritaire** (classif.) ou **moyenne** (régression).
- Chaque modèle voit un dataset légèrement différent ⇒ **décorrèle les erreurs** ⇒ réduction de
  variance : $\\sigma^2_{\\text{ensemble}} \\approx \\sigma^2_{\\text{base}} / N$ (si modèles
  indépendants).
- **Random Forest** = bagging d'**arbres** + à chaque split, tirage aléatoire de
  **$\\sqrt{n_{features}}$** features candidates ⇒ arbres encore plus **diversifiés / décorrélés**.
- **Out-of-Bag (OOB)** : ~**36,8 %** ($\\approx 1/e$) des exemples ne sont pas tirés dans un
  bootstrap donné ⇒ ils servent de **validation gratuite** (proche d'une CV 3-fold).

### Hyperparamètres RF

\`n_estimators\` (plus = mieux, plafonne), \`max_features\` (\`sqrt\` par défaut en classif.),
\`max_depth\`, \`min_samples_leaf\`. RF **sur-apprend peu** et demande peu de réglage.

## Boosting

- Entraîner $N$ modèles **séquentiellement** : chaque modèle se concentre sur ce que les
  précédents ratent.
- **AdaBoost** : augmente le **poids des exemples mal classés** à chaque tour ; les modèles
  suivants focalisent sur les cas difficiles. Prédiction = vote pondéré des modèles.
- **Gradient Boosting** : chaque arbre prédit les **résidus** (pseudo-gradients) du modèle
  courant.
  $$F_M(x) = F_0(x) + \\eta\\,h_1(x) + \\eta\\,h_2(x) + \\dots + \\eta\\,h_M(x)$$
- $\\eta$ (**learning rate**) : petit $\\eta$ ⇒ meilleure généralisation mais besoin de **plus
  d'arbres** (compromis $\\eta$ ↔ \`n_estimators\`).
- **XGBoost** : Gradient Boosting optimisé — **régularisation L1/L2**, calcul parallélisé,
  gestion native des **NaN**, *early stopping*.
- **Early stopping** : arrêter d'ajouter des arbres quand le score de validation ne s'améliore
  plus.

## Bagging vs Boosting (tableau type examen)

| Critère | Bagging (Random Forest) | Boosting (XGBoost) |
|---|---|---|
| Entraînement | **parallèle**, modèles indépendants | **séquentiel**, dépendant |
| Réduit surtout | **variance** | **biais** |
| Sur-apprentissage | rare, très robuste | possible si trop d'arbres / $\\eta$ trop grand |
| Données bruitées | très robuste | sensible au bruit |
| Réglage | facile | délicat ($\\eta$, profondeur, \`n_estimators\`) |
| Perf. typique | excellente, stable | souvent meilleure, mais fragile |

## Importance des features

| Méthode | Principe | Biais |
|---|---|---|
| **Gini / MDI** (impurity-based) | somme des réductions d'impureté dues à la feature | favorise les features **continues / à forte cardinalité** ; calculée sur le **train** |
| **Permutation** | on **mélange** une colonne et on mesure la chute de performance sur un set **de validation** | plus fiable, mais coûteux ; instable si features **corrélées** |
| **SHAP** | valeurs de Shapley (théorie des jeux) : contribution de chaque feature à **chaque prédiction** | explication **locale + globale** cohérente ; coûteux |

## Formules / chiffres clés

- Bagging : $\\sigma^2_{\\text{ens}} \\approx \\sigma^2_{\\text{base}}/N$
- RF : $\\sqrt{n_{features}}$ features par split
- OOB $\\approx 36{,}8\\% = 1/e$
- Boosting : $F_M(x) = F_0(x) + \\eta\\sum_{m=1}^{M} h_m(x)$

## Pièges du prof

- Inverser « bagging réduit le biais / boosting réduit la variance » ⇒ c'est **l'inverse**.
- Dire que la RF sur-apprend beaucoup (elle est robuste ; c'est **boosting** qui sur-apprend si
  mal réglé).
- Oublier que le boosting est **séquentiel** (non parallélisable au niveau des arbres).
- Confondre importance Gini (train, biais cardinalité) et permutation (validation, plus fiable).

## Checklist

- [ ] Définir bagging (bootstrap + agrégation) et boosting (séquentiel + correction d'erreurs)
- [ ] Dire ce que chacun réduit (variance / biais)
- [ ] Expliquer le $\\sqrt{n_{features}}$ de la Random Forest et l'OOB
- [ ] Écrire $F_M(x) = F_0 + \\eta\\sum h_m$ et le rôle de $\\eta$
- [ ] Comparer 2 méthodes d'importance de features
`;
window.ML.ficheText["09"] = `# 09 — Préparation & nettoyage des données · 🔴 Priorité haute

> **Tombé aux 2 examens** sous 3 formes : (a) tableau d'étudiants « sale » → « donnez les noms
> des problèmes + comment les traiter » ; (b) dataset type **California Housing** → « recenser
> les points qui posent problème pour un modèle linéaire + techniques de préparation » ;
> (c) précision vs accuracy (→ fiche 11).

---

## Résumé express

Avant tout modèle : **diagnostiquer** la qualité des données (doublons, manquants, incohérences,
aberrations, types, échelles, fuite de données), puis **corriger** chaque problème avec la
technique adaptée. Sur données déséquilibrées → fiche 12.

## Catalogue des problèmes de qualité de données (à réciter)

| Problème | Symptôme | Traitement |
|---|---|---|
| **Doublons** | 2 lignes identiques ou 2 lignes avec la **même clé (Id)** mais des valeurs différentes | dédupliquer (\`drop_duplicates\`) ; si conflit de clé → règle de fusion / garder la plus récente / lever l'ambiguïté |
| **Valeurs manquantes** (NaN, vide, « ? », « Unknown ») | cellules vides | **suppression** si peu de lignes concernées ; **imputation** (moyenne/médiane pour numérique, mode pour catégoriel, KNN-imputer, régression) ; **indicateur** « valeur manquante » comme feature |
| **Incohérences catégorielles** | mêmes concepts écrits différemment : « Italy » / « Ytali » / « italie » ; casse ; espaces | **normalisation des libellés** (trim, lower, mapping vers un référentiel), correction orthographique, dictionnaire de valeurs autorisées |
| **Valeurs hors domaine / invalides** | \`Gender = 'A'\` ; âge négatif ; probabilité > 1 | règles de validation ; remplacer par NaN puis imputer ; rejeter la ligne |
| **Erreur de colonne / donnée mal placée** | \`Country = 'Rome'\` (une ville dans la colonne pays) ; \`City = 'Italy'\` | détection par référentiel géographique ; remettre dans la bonne colonne ou recréer la valeur |
| **Formats hétérogènes** | dates \`31/12/1990\` vs \`1983-12-01\` ; nombres \`1,5\` vs \`1.5\` ; unités mélangées | **parsing / conversion vers un format unique** (ISO 8601 pour les dates), locale unique |
| **Unités incohérentes** | \`Age\` parfois en années, parfois en jours (\`10000\`) ; tailles en cm et m | conversion vers une **unité unique** |
| **Valeurs aberrantes (outliers)** | valeur très éloignée : \`housing_age = 1933\` alors que les autres ~170–190 ; \`#Students\` = 0 pour un enseignant | détection (IQR : hors $[Q_1 - 1{,}5\\,IQR,\\; Q_3 + 1{,}5\\,IQR]$ ; z-score > 3 ; visualisation boxplot) ; corriger, capper (winsoriser), supprimer, ou transformer (log) |
| **Contradictions logiques** | \`IsTeacher = 0\` mais \`#Students = 15\` | règles métier de cohérence, correction ou mise en NaN |
| **Colinéarité / redondance** | \`total_rooms\` ≈ k·\`total_bedrooms\` ; \`population\` ≈ k·\`households\` | supprimer une des deux, ou **créer des ratios** (\`rooms_per_household\`), PCA, régularisation |
| **Échelles très différentes** | \`population\` ~ des milliers, \`latitude\` ~ dizaines | **standardisation / normalisation** (fiche 10) — crucial pour GD, KNN, SVM |
| **Déséquilibre des classes** | 95 % classe 1, 5 % classe 2 | ré-échantillonnage, SMOTE, class weights (fiche 12) |
| **Fuite de données (data leakage)** | une feature contient de l'info du futur / de la cible | retirer la feature ; faire le prétraitement **après** le split train/test |
| **Cardinalité extrême d'une catégorie** | \`City\` avec des centaines de modalités | regrouper les rares en « Autre », *target/frequency encoding* |
| **Granularité / type erroné** | nombre stocké en texte ; date stockée en entier | conversion de type (\`astype\`, \`to_datetime\`) |

## ⭐ Étude de cas (a) — le tableau d'étudiants « sale »

Colonnes : \`# | Id | Name | Birthday | Gender | IsTeacher | #Students | Country | City\`

| Ligne | Problème observé | Nom du problème | Traitement |
|---|---|---|---|
| 5 & 6 | **Id = 555** pour Alex **et** Peter | doublon de clé primaire / identifiant non unique | vérifier si même personne ; sinon réattribuer un Id unique |
| 5 | \`Gender = 'A'\` | valeur catégorielle invalide (hors {M, F}) | mettre en NaN puis imputer, ou corriger d'après une autre source |
| 6 | \`Birthday = 1983-12-01\` alors que les autres sont \`JJ/MM/AAAA\` | format de date hétérogène | parser toutes les dates vers un format unique (ISO) |
| 2 | \`City\` **vide** (Iceland sans ville) | valeur manquante | imputer (capitale = Reykjavik) ou laisser NaN + indicateur |
| 7 | \`Country = 'Italy'\`, \`City = 'Italy'\` | donnée mal placée / ville manquante | corriger la ville (ex. Rome depuis une autre ligne) |
| 10 | \`Country = 'Ytali'\` (Rome) | libellé catégoriel incohérent / faute de frappe | mapping vers référentiel → « Italy » |
| 9 | \`IsTeacher = 0\` mais \`#Students = 5\` | contradiction logique | règle de cohérence : si \`#Students > 0\` alors enseignant ; corriger l'un des deux |
| 1,3,4,7,8 | \`#Students = 0\` (cohérent, non-enseignants) | RAS (pas un problème) | — |
| Général | \`Birthday\` non exploitable tel quel par un modèle | feature à transformer | convertir en **âge** (numérique) — voir fiche 10 |

**Réponse à « Comment pouvez-vous traiter ces problèmes ? »** : pipeline de nettoyage —
1) dédupliquer / réparer les identifiants ; 2) uniformiser les formats (dates, casse, unités) ;
3) valider les domaines (\`Gender ∈ {M,F}\`), mettre les invalides en NaN ; 4) réconcilier les
libellés géographiques via un référentiel (\`Ytali → Italy\`, ville dans la bonne colonne) ;
5) appliquer les règles de cohérence métier (\`IsTeacher\` ↔ \`#Students\`) ; 6) imputer ou
supprimer les manquants selon leur taux ; 7) transformer \`Birthday → âge\`, encoder \`Gender\`,
\`Country\`, \`City\`.

## ⭐ Étude de cas (b) — dataset type California Housing

Colonnes : \`longitude, latitude, housing_age, total_rooms, total_bedrooms, population,
households, median_house_value\`.

**Points qui posent problème pour un modèle linéaire :**

1. **Valeurs aberrantes** : \`housing_age = 1933\` au milieu de valeurs ~170–193 ⇒ erreur de
   saisie ; \`median_house_value\` **plafonnée** (valeurs identiques répétées, ex. 73400 sur
   plusieurs lignes ⇒ censure à un seuil).
2. **Colinéarité forte** : \`total_rooms\` ↔ \`total_bedrooms\` ↔ \`population\` ↔ \`households\` sont
   très corrélées (toutes proportionnelles à la taille du quartier) ⇒ coefficients instables,
   $X^\\top X$ mal conditionnée.
3. **Features agrégées, pas par ménage** : \`total_rooms\` est un total de quartier, pas très
   informatif seul ⇒ créer \`rooms_per_household = total_rooms / households\`,
   \`bedrooms_per_room\`, \`population_per_household\`.
4. **Échelles hétérogènes** : \`population\` (milliers) vs \`latitude\` (~34) vs \`housing_age\`
   (~190) ⇒ standardiser.
5. **Non-linéarité / géographie** : \`longitude\`/\`latitude\` ont un effet non linéaire sur le prix
   (proximité côte/villes) ⇒ features géographiques (distance à la côte, clustering), termes
   polynomiaux.
6. **Distributions asymétriques** (revenus, valeurs) ⇒ transformation **log**.
7. **Valeurs manquantes** possibles sur \`total_bedrooms\` ⇒ imputer (médiane).
8. **Doublon** apparent (2 lignes \`114.57 / 33.640\`) ⇒ vérifier.

**Techniques de préparation à citer :** suppression/correction des outliers ; imputation
(médiane) ; création de **ratios par ménage** ; suppression des features redondantes ou
**régularisation (Ridge/Lasso)** contre la colinéarité ; **standardisation** ;
**log-transformation** des variables asymétriques ; encodage des éventuelles catégorielles ;
**split train/test AVANT** le scaling pour éviter la fuite.

## Ordre canonique d'un pipeline

1. Split **train / test** (et validation).
2. Nettoyage (doublons, formats, domaines, cohérence) — appris sur le train.
3. Imputation des manquants (\`fit\` sur train).
4. Feature engineering (ratios, dates→âge, log, binning) — fiche 10.
5. Encodage des catégorielles (\`fit\` sur train).
6. Scaling / standardisation (\`fit\` sur train, \`transform\` sur test).
7. (si besoin) rééquilibrage des classes **sur le train uniquement** (fiche 12).
8. Entraînement + validation croisée.

## Pièges du prof

- Répondre « je supprime les lignes avec NaN » sans discuter **taux de manquants** et
  **imputation**.
- Oublier la **colinéarité** dans l'étude California Housing (c'est le point clé pour un modèle
  **linéaire**).
- Faire le scaling **avant** le split ⇒ **fuite de données**.
- Ne pas nommer les problèmes avec le bon terme (« outlier », « colinéarité », « incohérence de
  format », « valeur hors domaine », « fuite de données »).

## Checklist

- [ ] Réciter 8+ problèmes de qualité avec leur **nom** et leur **traitement**
- [ ] Sur le tableau d'étudiants : citer doublon d'Id, \`Gender='A'\`, dates mixtes, \`Ytali\`,
      ville/pays inversés, \`IsTeacher\` vs \`#Students\`, ville manquante
- [ ] Sur California Housing : outlier \`1933\`, colinéarité rooms/bedrooms, ratios par ménage,
      échelles, log, cible plafonnée
- [ ] Donner l'ordre du pipeline (split d'abord, scaling après)
`;
window.ML.ficheText["10"] = `# 10 — Feature engineering & transformations (features map) · 🔴 Priorité haute

> **Tombé** : « Quelles techniques de transformations pouvez-vous utiliser sur ces attributs
> pour bien construire la carte des caractéristiques (features map) ? Donner les étapes et les
> formalismes nécessaires. » (dataset santé cardiovasculaire).

---

## Résumé express

Transformer les données brutes en **représentation numérique exploitable et bien
conditionnée** : mise à l'échelle, encodage des catégories, conversion d'unités, création de
nouvelles features (ratios, polynômes, binning), et **feature map** $\\phi(x)$ pour rendre un
problème linéairement séparable.

## À maîtriser absolument

### 1. Mise à l'échelle (scaling)

| Technique | Formule | Résultat | Quand |
|---|---|---|---|
| **Normalisation min-max** | $x' = \\dfrac{x - x_{min}}{x_{max} - x_{min}}$ | $[0, 1]$ | bornes connues, pas d'outliers ; réseaux de neurones, images |
| **Standardisation (z-score)** | $x' = \\dfrac{x - \\mu}{\\sigma}$ | moyenne 0, écart-type 1 | **défaut** pour GD, KNN, SVM, régression logistique/linéaire, PCA |
| **Robust scaling** | $x' = \\dfrac{x - \\text{médiane}}{IQR}$ | centré, insensible aux outliers | présence d'outliers |
| **Normalisation $L_2$ de la ligne** | $x' = x / \\lVert x\\rVert_2$ | vecteur unitaire | texte / TF-IDF, similarité cosinus |

> **À retenir :** paramètres ($\\mu, \\sigma$, min, max) **estimés sur le train uniquement**, puis
> appliqués au test (pas de fuite).

### 2. Encodage des variables catégorielles

| Technique | Principe | Quand |
|---|---|---|
| **One-Hot** | 1 colonne binaire par modalité | catégoriel **nominal**, faible cardinalité (\`Country\`, \`Gender\`) |
| **Label / Ordinal** | entier par modalité, ordre conservé | catégoriel **ordinal** (\`Education: Uneducated<HS<College<...\`) |
| **Binary / Hashing** | encodage compact | cardinalité moyenne/élevée |
| **Target / Frequency encoding** | remplacer la modalité par la moyenne de la cible / sa fréquence | **haute cardinalité** (\`City\`) — attention à la fuite, faire en CV |

\`drop_first=True\` pour éviter la **colinéarité parfaite** (piège de la variable indicatrice).

### 3. Conversion d'unités & de types

- \`Age (jours) → Age (années)\` : $x' = x / 365{,}25$ (le dataset santé a \`Age\` en **jours**,
  ex. 10000 j ≈ 27,4 ans).
- \`Birthday → âge\` : $\\text{âge} = (\\text{date\\_ref} - \\text{date\\_naissance})/365{,}25$.
- Uniformiser cm/m, kg/g, dates → ISO.
- \`Taille + Poids → IMC\` : $\\text{IMC} = \\dfrac{\\text{poids (kg)}}{\\text{taille (m)}^2}$
  (feature métier plus informative).

### 4. Création de nouvelles features

- **Ratios / agrégats** : \`rooms_per_household\`, \`bedrooms_per_room\`, \`tension_diff = systolique − diastolique\`.
- **Binning / discrétisation** : transformer une continue en tranches (\`Age → {jeune, adulte,
  senior}\`) — utile pour capturer des effets non linéaires, réduire le bruit.
- **Features polynomiales & d'interaction** : $x_1, x_2 \\to x_1^2, x_2^2, x_1 x_2, \\dots$
  (\`PolynomialFeatures(degree=d)\`) — rend un modèle linéaire capable de courbes.
- **Features temporelles** : jour de semaine, mois, saison, sin/cos pour la cyclicité.
- **Transformations non linéaires** : $\\log(1+x)$, $\\sqrt{x}$, Box-Cox / Yeo-Johnson pour
  **symétriser** une distribution asymétrique et réduire l'effet des grandes valeurs.

### 5. Feature map $\\phi(x)$ (« carte des caractéristiques »)

Une **feature map** est une fonction $\\phi : \\mathbb{R}^d \\to \\mathbb{R}^{d'}$ qui envoie les
données dans un espace de dimension (souvent) plus grande où une **relation devient linéaire**.

- Exemple : données non séparables en 1D $\\{x\\}$ → $\\phi(x) = (x, x^2)$ → séparables par une
  droite dans le plan.
- Cas 2D : $\\phi(x_1,x_2) = (x_1^2, x_2^2, \\sqrt{2}\\,x_1x_2)$ ⇒ un cercle devient un hyperplan.
- **Kernel trick** (fiche 06) : on n'a besoin que de $K(x,y) = \\phi(x)\\cdot\\phi(y)$, jamais de
  $\\phi$ explicitement (noyau RBF ⇒ $\\phi$ de dimension infinie).
- En pratique côté « features map » d'un dataset tabulaire : c'est l'ensemble
  **scaling + encodage + features dérivées + polynômes** qui constitue la représentation
  finale $\\phi(x)$ donnée au modèle.

## ⭐ Réponse type — dataset santé cardiovasculaire

Attributs : \`Age (jours), Taille (cm), Poids (kg), Sexe, Tension systolique, Tension
diastolique, Cholestérol {1,2,3}, Glucose {1,2,3}, Fumeur {0,1}, Alcool {0,1}, Activité
physique {0,1}, Maladie cardiovasculaire {0,1}\` (cible).

**Étapes & formalismes :**

1. **Conversion d'unités** : \`Age_années = Age_jours / 365.25\` ; \`Taille_m = Taille_cm / 100\`.
2. **Feature métier** : \`IMC = Poids / Taille_m²\` ; \`Pression_pulsée = systolique − diastolique\`.
3. **Encodage** :
   - \`Sexe\` (1/2) → binaire (0/1) ou one-hot.
   - \`Cholestérol\`, \`Glucose\` (1=normal, 2=élevé, 3=très élevé) → **ordinal** (ordre conservé),
     ou one-hot si on ne veut pas imposer la linéarité.
   - \`Fumeur\`, \`Alcool\`, \`Activité\` : déjà binaires (0/1), on garde.
4. **Détection d'aberrations** : tensions ou tailles impossibles (systolique < diastolique,
   taille 250 cm) → IQR / z-score → correction ou NaN + imputation médiane.
5. **Standardisation** des continues (\`Age\`, \`IMC\`, \`Taille\`, \`Poids\`, tensions) :
   $x' = (x-\\mu)/\\sigma$ — indispensable si on utilise régression logistique / KNN / SVM.
6. **(optionnel) Features non linéaires** : \`PolynomialFeatures(degree=2)\` sur les continues,
   ou binning de l'âge en tranches, ou $\\log$ si distribution très asymétrique.
7. **Split train/test avant** les étapes 4–6 qui apprennent des paramètres (fuite).
8. **Représentation finale** $\\phi(x)$ = vecteur concaténant continues standardisées +
   binaires + one-hot + features dérivées → donné au modèle.

## Formules clés

- Min-max : $x' = (x - x_{min})/(x_{max}-x_{min})$
- Z-score : $x' = (x - \\mu)/\\sigma$
- Robust : $x' = (x - \\text{med})/IQR$
- IMC : poids / taille²
- Âge : jours / 365,25
- Feature map : $\\phi(x_1,x_2) = (x_1^2, x_2^2, \\sqrt2 x_1 x_2)$

## Pièges du prof

- Confondre **normalisation** (min-max, [0,1]) et **standardisation** (z-score, μ=0, σ=1) — bien
  donner **les deux formules**.
- Oublier de dire que les paramètres sont **appris sur le train**.
- Encoder un ordinal (\`Cholestérol\` 1<2<3) en one-hot en perdant l'ordre, ou un nominal
  (\`Country\`) en label en inventant un faux ordre.
- Oublier la **conversion \`Age\` jours→années** (indice fort du sujet).
- Ne pas relier « features map » au **kernel trick** / aux **features polynomiales**.

## Checklist

- [ ] Écrire min-max ET z-score ET robust scaling
- [ ] Choisir one-hot vs ordinal selon nominal / ordinal
- [ ] Convertir \`Age\` jours→années, créer l'IMC
- [ ] Définir une feature map $\\phi$ + un exemple qui rend un problème linéairement séparable
- [ ] Donner l'ordre des étapes (split avant fit des transformations)
`;
window.ML.ficheText["11"] = `# 11 — Évaluation & métriques · 🔴 Priorité haute

> **Tombé** : « Expliquer la différence entre précision et Accuracy ». Transverse à tout le
> cours (choix de métrique sur données déséquilibrées, biais/variance).

---

## Résumé express

Une métrique dépend du **problème** (régression vs classification) et du **contexte**
(classes équilibrées ou non, coût des erreurs). Sur données déséquilibrées, **l'accuracy
trompe** ⇒ utiliser précision, rappel, $F_1$, AUC.

## Matrice de confusion (classification binaire)

| | Prédit **Positif** | Prédit **Négatif** |
|---|---|---|
| **Réel Positif** | **VP** (TP) | **FN** (faux négatif) |
| **Réel Négatif** | **FP** (faux positif) | **VN** (TN) |

## ⭐ Précision vs Accuracy (la question du prof)

| | **Accuracy (exactitude)** | **Précision (precision)** |
|---|---|---|
| Formule | $\\dfrac{VP + VN}{VP + VN + FP + FN}$ | $\\dfrac{VP}{VP + FP}$ |
| Question | « **quelle proportion de TOUTES les prédictions** est correcte ? » | « **parmi les exemples prédits positifs**, quelle proportion l'est vraiment ? » |
| Portée | globale, **toutes classes confondues** | **spécifique à la classe positive** |
| Sensible au déséquilibre | **OUI** — trompeuse : 95 % de classe 1 ⇒ prédire « toujours 1 » donne 95 % d'accuracy sans rien apprendre | non : ignore les VN, se concentre sur les positifs |
| Se dégrade quand | le modèle se trompe beaucoup au total | le modèle crie « positif » à tort (beaucoup de FP → fausses alertes) |

**Phrase type :** « L'**accuracy** mesure la proportion totale de prédictions correctes (les 2
classes). La **précision** mesure, parmi les cas que le modèle a déclarés positifs, combien le
sont réellement — c'est le taux de vraies alertes. Sur données déséquilibrées, l'accuracy est
trompeuse (un classifieur trivial l'atteint), la précision + le rappel restent informatifs. »

> **Bonus fréquent : Precision vs Accuracy au sens "mesure"** — l'**accuracy** = proximité de la
> vraie valeur (justesse, absence de **biais**) ; la **précision** = reproductibilité / faible
> **dispersion** des mesures répétées (faible **variance**). On peut être précis mais pas exact
> (mesures serrées mais décalées), ou exact en moyenne mais peu précis. Mentionner les **deux
> lectures** rapporte des points.

## Les autres métriques de classification

| Métrique | Formule | Interprétation | Quand privilégier |
|---|---|---|---|
| **Rappel / Sensibilité / TPR** | $\\dfrac{VP}{VP + FN}$ | parmi les vrais positifs, combien retrouvés | coût élevé d'un **FN** (maladie non détectée, fraude ratée) |
| **Spécificité / TNR** | $\\dfrac{VN}{VN + FP}$ | parmi les vrais négatifs, combien bien classés | — |
| **$F_1$-score** | $2\\cdot\\dfrac{\\text{préc}\\cdot\\text{rappel}}{\\text{préc}+\\text{rappel}}$ | moyenne **harmonique** précision/rappel | **déséquilibre**, compromis précision/rappel |
| **$F_\\beta$** | $(1+\\beta^2)\\dfrac{PR}{\\beta^2 P + R}$ | $\\beta>1$ favorise le rappel | selon le coût métier |
| **AUC-ROC** | aire sous la courbe TPR vs FPR | proba qu'un positif tiré au hasard soit mieux classé qu'un négatif ; **indépendante du seuil** | comparer des modèles, déséquilibre modéré |
| **AUC-PR** | aire sous précision vs rappel | mieux que ROC en **fort déséquilibre** | fraude, anomalies rares |
| **Matrice de confusion** | table VP/FP/FN/VN | vue détaillée des types d'erreur | toujours regarder |

Le **seuil de décision** (0,5 par défaut) est réglable : le baisser augmente le rappel et baisse
la précision (et inversement) — courbe précision-rappel.

## Métriques de régression (rappel fiche 01)

| | Formule | Note |
|---|---|---|
| **MAE** | $\\frac1m\\sum\\lvert\\hat y - y\\rvert$ | robuste aux outliers, unité de $y$ |
| **MSE** | $\\frac1m\\sum(\\hat y - y)^2$ | pénalise les grosses erreurs, unité² |
| **RMSE** | $\\sqrt{\\text{MSE}}$ | unité de $y$, interprétable |
| **$R^2$** | $1 - SS_{res}/SS_{tot}$ | variance expliquée, peut être < 0 |
| **MAPE** | $\\frac{100}{m}\\sum\\lvert(\\hat y - y)/y\\rvert$ | erreur en %, instable si $y \\approx 0$ |

## Validation

- **Train / Validation / Test** : train pour apprendre, validation pour régler les
  hyperparamètres, test pour l'estimation finale **une seule fois**.
- **Validation croisée $k$-fold** : découper en $k$ blocs, entraîner sur $k-1$, tester sur 1,
  répéter, moyenner. \`k=5\` ou \`10\`. **Stratifiée** en classification (garde les proportions de
  classes).
- **Leakage** : tout prétraitement qui apprend des paramètres doit être \`fit\` **dans** la CV,
  pas avant.

## Biais / Variance

| | Biais élevé (sous-apprentissage) | Variance élevée (sur-apprentissage) |
|---|---|---|
| Symptôme | erreur train **et** test élevées | erreur train faible, test élevée (grand écart) |
| Causes | modèle trop simple, features insuffisantes, $\\alpha$/régularisation trop fort | modèle trop complexe, trop peu de données, pas de régularisation |
| Remèdes | modèle plus riche, plus de features, moins de régularisation, features polynomiales | plus de données, régularisation, réduction de features, early stopping, ensembles (bagging) |

Erreur de généralisation $\\approx$ biais$^2$ + variance + bruit irréductible.

## Pièges du prof

- Donner la formule de l'accuracy quand on demande la précision (ou vice-versa).
- Utiliser l'**accuracy** comme métrique sur données déséquilibrées.
- Confondre **précision** ($VP/(VP+FP)$) et **rappel** ($VP/(VP+FN)$).
- Oublier que l'**AUC-ROC est indépendante du seuil**.
- Oublier la **stratification** en CV pour la classification.

## Checklist

- [ ] Dessiner la matrice de confusion et placer VP/FP/FN/VN
- [ ] Écrire accuracy, précision, rappel, $F_1$
- [ ] Expliquer en 3 lignes précision vs accuracy (+ la lecture « mesure » biais/variance)
- [ ] Dire quelle métrique sur données déséquilibrées et pourquoi
- [ ] Expliquer $k$-fold stratifié et le leakage
- [ ] Diagnostiquer biais vs variance à partir des erreurs train/test
`;
window.ML.ficheText["12"] = `# 12 — Données déséquilibrées · 🔴 Priorité haute

> **Tombé aux 2 examens** : « Comment résoudre les problèmes des jeux de données non
> équilibrés ? » / « 95 instances Classe-1, 5 instances Classe-2, comment gérer ? » /
> « échantillon de 200 patients, 2 classes très inégales ».

---

## Résumé express

Quand une classe est très minoritaire, un modèle « paresseux » qui prédit toujours la majorité
obtient une **accuracy élevée mais est inutile**. On agit sur **3 leviers** : les **données**
(rééchantillonnage), l'**algorithme** (pondération / seuil), et l'**évaluation** (bonne
métrique).

## Pourquoi c'est un problème

- 95 % / 5 % ⇒ prédire « toujours classe 1 » = **95 % d'accuracy**, **0 % de rappel** sur la
  classe rare.
- Le gradient / la fonction de coût est **dominé** par la classe majoritaire ⇒ la frontière
  ignore la minorité.
- Or la classe rare est souvent **celle qui compte** (fraude, maladie, panne, churn).

## Solution 1 — Niveau données (rééchantillonnage) — **sur le train uniquement**

| Technique | Principe | Risque |
|---|---|---|
| **Sur-échantillonnage aléatoire** (oversampling) | dupliquer des exemples de la classe rare | sur-apprentissage (copies exactes) |
| **SMOTE** (Synthetic Minority Over-sampling) | créer des exemples **synthétiques** par interpolation entre un point minoritaire et ses $k$ voisins minoritaires | peut créer du bruit près de la frontière ; variantes Borderline-SMOTE, ADASYN |
| **Sous-échantillonnage aléatoire** (undersampling) | retirer des exemples de la classe majoritaire | perte d'information |
| **Under-sampling informé** | Tomek links, NearMiss, Edited Nearest Neighbours (nettoie la frontière) | plus complexe |
| **Combiné** | SMOTE + Tomek / SMOTE + ENN | bon compromis |

> ⚠️ **Rééchantillonner AVANT le split ou dans le test = fuite de données.** On rééchantillonne
> **à l'intérieur** de la validation croisée, sur le pli d'entraînement seulement.

## Solution 2 — Niveau algorithme

- **Pondération des classes** : \`class_weight='balanced'\` (sklearn) ⇒ poids
  $\\propto \\dfrac{n}{k \\cdot n_c}$ ⇒ une erreur sur la classe rare coûte plus cher dans $J$.
  Fonctionne pour régression logistique, SVM, arbres, RF.
- **Cost-sensitive learning** : matrice de coûts métier (FN 10× plus cher qu'un FP).
- **Ajustement du seuil de décision** : au lieu de 0,5, choisir le seuil qui maximise le $F_1$
  (ou le rappel cible) sur la courbe précision-rappel de validation.
- **Algorithmes d'anomalie** si extrême (One-Class SVM, Isolation Forest) quand la minorité est
  < 1 %.
- **Ensembles adaptés** : BalancedRandomForest, EasyEnsemble, RUSBoost.

## Solution 3 — Niveau évaluation

- **Ne PAS utiliser l'accuracy.** Utiliser : **rappel**, **précision**, **$F_1$**, **AUC-PR**
  (mieux que AUC-ROC en fort déséquilibre), **balanced accuracy**, matrice de confusion.
- **Validation croisée stratifiée** : garde le ratio de classes dans chaque pli.
- Reporter la performance **par classe** (\`classification_report\`).

## Autres pistes

- **Collecter plus de données** de la classe rare (le mieux si possible).
- **Regrouper des classes** si la granularité n'est pas nécessaire.
- **Data augmentation** spécifique au domaine (images, texte).

## ⭐ Réponse type — « 100 instances : 95 Classe-1, 5 Classe-2 »

1. **Constat** : 95/5 ⇒ un modèle trivial atteint 95 % d'accuracy → métrique inadaptée.
2. **Évaluation** : passer à $F_1$ / rappel / AUC-PR, matrice de confusion, **CV stratifiée**
   (avec seulement 5 exemples rares, faire du *stratified k-fold* voire du *leave-one-out* sur
   la classe rare).
3. **Données** : sur-échantillonner la classe 2 (SMOTE) **ou** sous-échantillonner la classe 1,
   uniquement sur le pli d'entraînement.
4. **Algorithme** : \`class_weight='balanced'\`, et **ajuster le seuil** de décision.
5. **Idéal** : collecter davantage d'exemples de la classe 2 (5 est trop peu pour généraliser).

## Pièges du prof

- Répondre « accuracy » comme métrique (**le** piège).
- Faire SMOTE / rééchantillonnage **avant** le split ⇒ fuite.
- Oublier \`class_weight\` et l'ajustement du seuil (solutions « gratuites »).
- Oublier la **stratification** en CV.
- Ne dire que « dupliquer » sans citer **SMOTE**.

## Checklist

- [ ] Expliquer pourquoi l'accuracy trompe sur 95/5
- [ ] Citer oversampling / SMOTE / undersampling (+ « train only »)
- [ ] Citer \`class_weight='balanced'\` et l'ajustement du seuil
- [ ] Donner la bonne métrique : $F_1$, rappel, AUC-PR, CV stratifiée
- [ ] Mentionner « collecter plus de données de la classe rare »
`;
window.ML.ficheText["13"] = `# 13 — Fiabilité (Reliability) d'un modèle ML · 🟠 Priorité moyenne

> **Tombé** : « What is Reliability of Machine learning? and Why bother about Machine Learning
> models reliability? »

---

## Résumé express

La **fiabilité** d'un modèle ML = sa capacité à **fournir des prédictions correctes,
cohérentes et stables** dans le temps et face à des conditions variées (bruit, données
légèrement différentes, changement de distribution), **et** à signaler quand il n'est pas sûr.
Ce n'est pas juste « bonne accuracy sur le test set ».

## ⭐ « Qu'est-ce que la fiabilité d'un modèle ML ? »

Un modèle fiable est un modèle qui :

1. **Généralise** : bonne performance sur des données **non vues**, pas seulement sur le train
   (pas de sur-apprentissage).
2. **Est robuste** : ses prédictions ne s'effondrent pas face à un peu de **bruit**, des
   **valeurs manquantes**, de légères perturbations des entrées, ou des exemples adverses.
3. **Est stable / reproductible** : même données + même code ⇒ même résultat (graines fixées) ;
   de petites variations du jeu d'entraînement ne changent pas radicalement le modèle (faible
   **variance**).
4. **Reste valide dans le temps** : résiste au **data drift** (la distribution des données
   change) et au **concept drift** (la relation X→y change).
5. **Est calibré** : quand il annonce « 90 % de confiance », il a raison ~90 % du temps ; il
   sait dire **« je ne sais pas »** (rejet / incertitude).
6. **Est équitable et non biaisé** : performances homogènes entre sous-groupes.
7. **Est monitoré en production** : suivi des métriques, alertes sur dérive, ré-entraînement.

## ⭐ « Pourquoi s'en soucier ? »

- **Décisions à fort enjeu** : santé, crédit, justice, conduite autonome, maintenance
  industrielle — une prédiction fausse a un **coût réel** (vie, argent, sécurité).
- **Le test set ment parfois** : bonne accuracy hors ligne ≠ bonne performance en production
  (distribution différente, fuite de données pendant l'évaluation).
- **Les données changent** : un modèle entraîné en 2023 se dégrade en 2025 si rien n'est
  surveillé (drift).
- **Confiance des utilisateurs & conformité** : un modèle non fiable/non expliqué n'est pas
  adopté et peut violer des réglementations (RGPD, AI Act).
- **Coût de maintenance** : un modèle instable doit être ré-entraîné/corrigé sans cesse.

## Ce qui menace la fiabilité

| Menace | Description | Parade |
|---|---|---|
| **Sur-apprentissage** | mémorise le train | régularisation, plus de données, CV, ensembles |
| **Data leakage** | info du futur/de la cible dans les features ou évaluation optimiste | prétraitement après split, audit des features |
| **Data / concept drift** | la distribution évolue | monitoring, tests statistiques (KS, PSI), ré-entraînement périodique |
| **Données de mauvaise qualité** | bruit, biais d'échantillonnage, manquants | nettoyage (fiche 09), collecte représentative |
| **Déséquilibre des classes** | ignore la minorité | fiche 12 |
| **Manque de robustesse** | sensible au bruit / adversarial | augmentation de données, entraînement adversarial |
| **Mauvaise calibration** | scores de confiance trompeurs | Platt scaling, isotonic regression |
| **Non-reproductibilité** | graines, versions, environnement | fixer seeds, versionner données/code/modèle |

## Comment améliorer / mesurer la fiabilité

- **Validation croisée** + jeu de test **vraiment** isolé + jeu de test **temporel** (out-of-time).
- **Tests de robustesse** : bruit ajouté, features masquées, perturbations.
- **Analyse par sous-groupe** (fairness).
- **Estimation d'incertitude** : ensembles, dropout MC, conformal prediction, intervalles de
  prédiction.
- **Explicabilité** : SHAP, importance de features → détecter qu'un modèle « triche ».
- **Monitoring en production** : dérive des entrées, dérive des performances, boucle de
  ré-entraînement (MLOps).

## Pièges du prof

- Réduire la fiabilité à « haute accuracy » : il faut parler de **généralisation + robustesse +
  stabilité + drift + calibration + monitoring**.
- Oublier le **data drift** (raison n°1 de dégradation en production).
- Oublier le lien avec **biais/variance** et **data leakage**.

## Checklist

- [ ] Définir la fiabilité en 5 dimensions (généralisation, robustesse, stabilité, drift,
      calibration)
- [ ] Donner 3 raisons de s'en soucier (enjeux, drift, confiance/conformité)
- [ ] Citer 4 menaces + parades
- [ ] Citer le monitoring / ré-entraînement en production
`;
window.ML.ficheText["99"] = `# 99 — Annales corrigées (2022/2023 & 2023/2024)

> Transcription des questions lisibles sur les 6 photos + **réponse modèle** rédigée.
> Prof. Benlahmar El Habib — Master DSBD — Machine Learning — Contrôle final.
> Renvois vers les fiches thématiques pour le détail.

---

## ══ EXAMEN 2022/2023 ══

### Partie 1

#### Q1. Expliquez les termes suivants : Cost Function MSE, MAE et RMSE.

- **MSE** $= \\frac1m\\sum(\\hat y_i - y_i)^2$ : erreur quadratique moyenne. Unité = unité de $y$
  **au carré**. Pénalise fortement les grosses erreurs (terme au carré). **Dérivable partout et
  convexe** ⇒ utilisée comme fonction de coût pour la descente de gradient.
- **MAE** $= \\frac1m\\sum\\lvert\\hat y_i - y_i\\rvert$ : erreur absolue moyenne. Unité = unité de
  $y$. **Robuste aux valeurs aberrantes**. Non dérivable en 0.
- **RMSE** $= \\sqrt{\\text{MSE}}$ : ramène la MSE à l'unité de $y$ ⇒ **directement
  interprétable**. Toujours ≥ MAE ; sensible aux outliers.

→ Fiche \`01_regression_lineaire.md\`.

#### Q2. Discutez des défis liés à la descente de gradient et des solutions possibles (choix du taux d'apprentissage, critères de convergence).

**Défis + solutions :**
| Défi | Solution |
|---|---|
| $\\alpha$ trop grand → divergence / oscillations | réduire $\\alpha$, tracer la courbe de loss |
| $\\alpha$ trop petit → convergence très lente | augmenter $\\alpha$, *learning rate scheduling* |
| Choix de $\\alpha$ inconnu | tester $\\{0{,}001; 0{,}01; 0{,}1\\}$, choisir d'après la courbe $J$ vs itérations |
| Features à échelles différentes → zigzag | **standardiser / normaliser** les features |
| Minima locaux / points selle (non convexe) | momentum, Adam ; plusieurs initialisations |
| Quand s'arrêter ? | $\\lvert J_t - J_{t-1}\\rvert < \\varepsilon$ ; $\\lVert\\nabla J\\rVert < \\varepsilon$ ; nb max d'itérations ; *early stopping* |

→ Fiche \`02_descente_gradient.md\`.

#### Q3. Le SVM et le KNN sont parmi les algorithmes supervisés les plus utilisés.
**3.1 Expliquez brièvement le concept du SVM.**
Classifieur linéaire à **marge maximale** : on cherche l'hyperplan $w\\cdot x + b = 0$ qui
maximise la distance ($2/\\lVert w\\rVert$) aux points les plus proches de chaque classe
(**vecteurs support**), en résolvant $\\min \\frac12\\lVert w\\rVert^2$ s.c.
$y_i(w\\cdot x_i + b)\\ge 1$. Version *soft margin* ($C$) pour les données bruitées ; **kernel
trick** (RBF, polynomial) pour le non-linéaire. → Fiche \`06_svm.md\`.

**3.2 Donnez 3 types de distances pour l'algorithme KNN.**
- Euclidienne : $d = \\sqrt{\\sum (x_i - y_i)^2}$
- Manhattan : $d = \\sum \\lvert x_i - y_i\\rvert$
- Minkowski : $d = \\big(\\sum \\lvert x_i - y_i\\rvert^p\\big)^{1/p}$ (généralise les deux ;
  $p=1$→Manhattan, $p=2$→Euclidienne). *(+ Hamming pour le catégoriel, cosinus pour le texte.)*

→ Fiche \`05_knn.md\`.

#### Q4. Descente de gradient — QCM. Quand $\\dfrac{\\partial}{\\partial w}J(w,b)$ est un nombre négatif, qu'advient-il de $w$ après une étape de mise à jour ?
○ W reste le même ○ impossible à savoir ○ W diminue ○ **W augmente** ✅

**Justification :** $w := w - \\alpha\\cdot\\frac{\\partial J}{\\partial w}$. Si
$\\frac{\\partial J}{\\partial w} < 0$ et $\\alpha > 0$, alors
$w := w - \\alpha\\times(\\text{négatif}) = w + (\\text{positif})$ ⇒ **$w$ augmente**.

#### Q4.1 Pour une régression linéaire, quel est le pas de mise à jour du paramètre $b$ ?
○ $b := b - \\alpha\\frac1m\\sum(f_{w,b}(x^{(i)}) - y^{(i)})\\,x^{(i)}$
● **$b := b - \\alpha\\frac1m\\sum(f_{w,b}(x^{(i)}) - y^{(i)})$** ✅

**Justification :** $\\frac{\\partial J}{\\partial b}$ de
$J = \\frac{1}{2m}\\sum(wx^{(i)} + b - y^{(i)})^2$ vaut $\\frac1m\\sum(f(x^{(i)}) - y^{(i)})$ : la
dérivée de $b$ vaut 1, **pas de $x^{(i)}$**. Le $x^{(i)}$ n'apparaît que dans la mise à jour de
$w$.

#### Q5. La régression logistique s'appuie sur le modèle linéaire suivi de la sigmoïde. Modèle : $P(y=1\\mid x_{in}) = x_{out} = \\sigma(x_{in}) = \\dfrac{1}{1 + e^{-x_{in}}}$.
**Si l'erreur renvoyée à $x_{out}$ est $\\partial E/\\partial x_{out}$, écrivez $\\partial E/\\partial x_{in}$ en fonction de $\\partial E/\\partial x_{out}$.**

$$\\frac{\\partial E}{\\partial x_{in}} = \\frac{\\partial E}{\\partial x_{out}}\\cdot\\frac{\\partial x_{out}}{\\partial x_{in}}
= \\frac{\\partial E}{\\partial x_{out}}\\cdot\\sigma'(x_{in})
= \\frac{\\partial E}{\\partial x_{out}}\\cdot x_{out}(1 - x_{out})$$

(règle de la chaîne ; $\\sigma'(z) = \\sigma(z)(1-\\sigma(z))$ et $x_{out} = \\sigma(x_{in})$).

**Démonstration en 5 étapes :**

1. **Forme puissance** : $x_{out}=(1+e^{-x_{in}})^{-1}$.
2. **Dérivée de $u^{-1}$** : $\\dfrac{d}{dx}(u^{-1})=-u^{-2}u'$ avec $u=1+e^{-x_{in}}$ ⇒
   $\\dfrac{\\partial x_{out}}{\\partial x_{in}} = -(1+e^{-x_{in}})^{-2}\\,(1+e^{-x_{in}})'$.
3. **Intérieur** : $(1+e^{-x_{in}})' = -e^{-x_{in}}$ (dérivée de $1$ nulle, $\\left(e^{-x}\\right)'=-e^{-x}$).
   Les deux « moins » se compensent ⇒ $\\dfrac{\\partial x_{out}}{\\partial x_{in}} = \\dfrac{e^{-x_{in}}}{(1+e^{-x_{in}})^2}$.
4. **Réécriture avec $x_{out}$** : $1-x_{out} = \\dfrac{e^{-x_{in}}}{1+e^{-x_{in}}}$, donc
   $x_{out}(1-x_{out}) = \\dfrac{e^{-x_{in}}}{(1+e^{-x_{in}})^2}$ = même résultat ⇒
   $\\dfrac{\\partial x_{out}}{\\partial x_{in}} = x_{out}(1-x_{out})$.
5. **Règle de la chaîne** $E\\to x_{out}\\to x_{in}$ ⇒
   $\\dfrac{\\partial E}{\\partial x_{in}} = \\dfrac{\\partial E}{\\partial x_{out}}\\,x_{out}(1-x_{out})$ — **c'est la rétropropagation**.

→ Fiches \`03_regression_logistique.md\` et \`Demonstration_Q5_backprop_sigmoide_2022-2023.md\`.

#### Q6. Perte logistique : $\\text{Log Loss} = \\sum_{(x,y)\\in D} -y\\log(y') - (1-y)\\log(1 - y')$. Expliquez pourquoi on utilise la fonction Log.

1. **Maximum de vraisemblance** : la vraisemblance du dataset est un **produit** de probabilités
   de Bernoulli ; le $\\log$ transforme le produit en **somme** (dérivable terme à terme, évite
   l'*underflow*). Minimiser la log-loss ⇔ maximiser la log-vraisemblance.
2. **Convexité** : log-loss ∘ sigmoïde est **convexe** ⇒ un seul minimum global, GD converge.
   Avec la MSE + sigmoïde, la surface serait non convexe et le gradient s'annulerait dans les
   zones saturées.
3. **Pénalité adaptée** : $-\\log$ punit très fortement une prédiction **confiante et fausse**
   ($y'=0{,}01$, $y=1$ ⇒ perte ≈ 4,6) ⇒ bon signal pour calibrer des probabilités.
4. **Gradient simple** : se réduit à $\\frac1m\\sum(y' - y)x_j$, même forme que la régression
   linéaire.

### Exercice 2 — Tableau d'étudiants « sale »

**Consigne :** donnez les noms des problèmes liés à ce dataset, et comment les traiter
(justifier).

| Problème | Nom | Traitement |
|---|---|---|
| Alex et Peter ont tous deux \`Id = 555\` | **identifiant non unique / doublon de clé** | vérifier si même personne, sinon réattribuer un Id unique |
| \`Gender = 'A'\` (ligne 5) | **valeur catégorielle invalide** (hors {M, F}) | mettre en NaN puis imputer / corriger |
| \`Birthday = 1983-12-01\` vs \`31/12/1990\` ailleurs | **format de date hétérogène** | parser vers un format unique (ISO 8601) |
| Ville manquante pour Mery (Iceland) | **valeur manquante** | imputer (Reykjavik) ou NaN + indicateur |
| Calvin : \`Country = Italy\`, \`City = Italy\` | **donnée mal placée / ville manquante** | corriger la ville (Rome) |
| Paul : \`Country = 'Ytali'\` | **libellé incohérent / faute de frappe** | mapping vers référentiel → « Italy » |
| Anne : \`IsTeacher = 0\` mais \`#Students = 5\` | **contradiction logique** | règle de cohérence : \`#Students > 0 ⇒ enseignant\` |
| \`Birthday\` non exploitable par un modèle | **feature à transformer** | convertir en **âge** (numérique) |
| \`Name\`, \`Country\`, \`City\` textuels | catégoriel non encodé | one-hot / label encoding |

**Comment traiter (pipeline) :** dédupliquer/réparer les Id → uniformiser formats (dates, casse)
→ valider les domaines (Gender) → réconcilier la géographie via référentiel → appliquer les
règles métier (IsTeacher ↔ #Students) → imputer/supprimer les manquants selon leur taux →
transformer (Birthday→âge) et encoder les catégorielles. → Fiche \`09_preparation_donnees.md\`.

---

## ══ EXAMEN 2023/2024 ══

### Question 1

**1. Descente de gradient** — même QCM que 2022/23 : quand $\\frac{\\partial}{\\partial w}J(w,b) < 0$,
**$w$ augmente** (justifier : \`w := w - α·(négatif) = w + positif\`).

**2. Pas de mise à jour de $b$ en régression linéaire** — même QCM :
**$b := b - \\alpha\\frac1m\\sum(f_{w,b}(x^{(i)}) - y^{(i)})$** (sans $x^{(i)}$).

**3. SVM & KNN** — a. concept du SVM (marge maximale, vecteurs support, kernel trick) ;
b. 3 distances KNN (Euclidienne, Manhattan, Minkowski).

### Question 2 — Arbre de décision sur tableau de contingence

200 patients, classes **M** (malade) / **B** (bonne santé). Attributs : gorge irritée,
température.

| | Gorge irritée | Gorge non irritée |
|---|---|---|
| Température < 37,5 | 6 B, 37 M | 91 B, 1 M |
| Température ≥ 37,5 | 2 B, 21 M | 1 B, 41 M |

**Quel(s) arbre(s) peut-on construire avec le critère du gain d'information ? (justifier le
choix des attributs SANS calculs).**

- **Marges de \`gorge irritée\`** : irritée → 8 B / 58 M (majorité écrasante **M**) ;
  non irritée → 92 B / 42 M (majorité **B**). ⇒ attribut **informatif**.
- **Marges de \`température\`** : < 37,5 → 97 B / 38 M (majorité **B**) ;
  ≥ 37,5 → 3 B / 62 M (majorité écrasante **M**). ⇒ attribut **informatif**.
- **Cellules quasi pures** : (T < 37,5 ∧ gorge non irritée) = **91 B, 1 M** ;
  (T ≥ 37,5 ∧ gorge non irritée) = **1 B, 41 M** ; (T ≥ 37,5 ∧ gorge irritée) = 2 B, 21 M.
- **Conclusion :** les **deux** attributs réduisent fortement l'impureté ⇒ **plusieurs arbres
  valides** (racine = gorge irritée, ou racine = température). Le gain d'information choisit
  comme racine l'attribut dont **les deux enfants sont globalement les plus purs** (entropie
  moyenne pondérée minimale). Après ce 1er split, le **second attribut** sépare presque
  parfaitement les feuilles restantes — surtout du côté \`T < 37,5\`, où \`gorge\` sépare
  (91 B, 1 M) de (6 B, 37 M). Du côté \`T ≥ 37,5\`, les deux sous-cellules sont déjà « M » ⇒ split
  peu utile, on peut faire une feuille « M ».
- Justification **sans calcul** = raisonnement sur les **majorités écrasantes** et la
  **pureté** des sous-groupes.

→ Fiche \`04_arbres_decision.md\`.

### Question 3 — « Comment résoudre les problèmes des jeux de données non équilibrés ? »

3 leviers :
1. **Données (train only)** : sur-échantillonnage / **SMOTE** (exemples synthétiques par
   interpolation) ; sous-échantillonnage (aléatoire, Tomek, NearMiss) ; combiné.
2. **Algorithme** : \`class_weight='balanced'\` (erreur sur la classe rare plus coûteuse) ;
   cost-sensitive learning ; **ajustement du seuil** de décision ; algos d'anomalie si extrême
   (Isolation Forest, One-Class SVM) ; ensembles équilibrés (BalancedRF, RUSBoost).
3. **Évaluation** : **ne pas utiliser l'accuracy** ⇒ $F_1$, rappel, précision, **AUC-PR**,
   balanced accuracy, matrice de confusion, **CV stratifiée**.
4. Idéalement : **collecter plus de données** de la classe rare.

→ Fiche \`12_donnees_desequilibrees.md\`.

### Question 4a — « What is Reliability of ML and why bother? »

**Fiabilité** = prédictions correctes, **cohérentes et stables** dans le temps et face à des
conditions variées : bonne **généralisation** (pas de sur-apprentissage), **robustesse** au
bruit/manquants/perturbations, **stabilité / reproductibilité**, résistance au **data/concept
drift**, **calibration** des probabilités, équité entre sous-groupes, **monitoring** en
production.

**Pourquoi s'en soucier :** décisions à fort enjeu (santé, crédit, sécurité) où une erreur
coûte cher ; le test set peut mentir (fuite, distribution différente) ; les données évoluent
(un modèle se dégrade dans le temps sans surveillance) ; confiance des utilisateurs et
conformité réglementaire ; coût de maintenance d'un modèle instable.

→ Fiche \`13_fiabilite_ml.md\`.

### Question 4b — Dataset santé cardiovasculaire : techniques de transformation (features map)

Attributs : \`Age (jours)\`, \`Taille (cm)\`, \`Poids (kg)\`, \`Sexe\`, \`Tension systolique\`,
\`Tension diastolique\`, \`Cholestérol {1,2,3}\`, \`Glucose {1,2,3}\`, \`Fumeur\`, \`Alcool\`,
\`Activité physique\`, \`Maladie cardiovasculaire\` (cible).

**Étapes & formalismes :**
1. **Conversion d'unités** : \`Age_années = Age_jours / 365.25\` ; \`Taille_m = Taille_cm / 100\`.
2. **Features dérivées** : \`IMC = Poids / Taille_m²\` ; \`Pression_pulsée = systolique − diastolique\`.
3. **Encodage** : \`Sexe\` → binaire/one-hot ; \`Cholestérol\`, \`Glucose\` (1<2<3) → **ordinal** ;
   \`Fumeur\`, \`Alcool\`, \`Activité\` déjà 0/1.
4. **Aberrations** : détecter (IQR : hors $[Q_1 - 1{,}5\\,IQR, Q_3 + 1{,}5\\,IQR]$ ; z-score > 3 ;
   systolique < diastolique impossible) → NaN + imputation médiane.
5. **Standardisation** des continues : $x' = (x - \\mu)/\\sigma$ (ou min-max
   $x' = \\frac{x - x_{min}}{x_{max}-x_{min}}$). Indispensable pour logistique / KNN / SVM.
6. **(option) Non-linéarité** : \`PolynomialFeatures(degree=2)\`, binning de l'âge, $\\log$ si
   asymétrie.
7. **Split train/test AVANT** les étapes qui apprennent des paramètres (fuite).
8. **Feature map** $\\phi(x)$ = concat(continues standardisées, binaires, one-hot, features
   dérivées) → donnée au modèle. Lien avec le **kernel trick** : $\\phi$ peut rendre un problème
   non séparable linéairement séparable (ex. $\\phi(x_1,x_2) = (x_1^2, x_2^2, \\sqrt2 x_1x_2)$).

→ Fiche \`10_feature_engineering.md\`.

### Question 6 (2023/24) — Dataset type California Housing

Features : \`longitude, latitude, housing_age, total_rooms, total_bedrooms, population,
households, median_house_value\`.

**6.1 Analyser le jeu de données et recenser les points qui posent problème pour la
construction d'un modèle linéaire :**
1. **Outliers / erreurs de saisie** : \`housing_age = 1933\` parmi des valeurs ~170–193 ;
   \`median_house_value\` répétée à l'identique sur plusieurs lignes ⇒ **cible plafonnée /
   censurée**.
2. **Colinéarité forte** : \`total_rooms\`, \`total_bedrooms\`, \`population\`, \`households\` sont
   toutes proportionnelles à la taille du quartier ⇒ coefficients instables, $X^\\top X$ mal
   conditionnée.
3. **Features agrégées** (totaux de quartier) peu informatives seules ⇒ besoin de **ratios par
   ménage**.
4. **Échelles très hétérogènes** (population en milliers vs latitude ~34).
5. **Effet géographique non linéaire** de \`longitude/latitude\` sur le prix.
6. **Distributions asymétriques** (revenus, valeurs).
7. **Valeurs manquantes** possibles (\`total_bedrooms\`).
8. **Doublon** apparent (\`114.57 / 33.640\`).

**6.2 Techniques de préparation :** correction/suppression des outliers ; imputation (médiane) ;
création de \`rooms_per_household\`, \`bedrooms_per_room\`, \`population_per_household\` ; suppression
des features redondantes ou **régularisation Ridge/Lasso** ; **standardisation** ;
**log-transformation** des variables asymétriques ; encodage des catégorielles éventuelles ;
**split train/test avant le scaling**.

→ Fiche \`09_preparation_donnees.md\`.

### Question 4 (2023/24) — Différence entre précision et Accuracy

- **Accuracy** $= \\dfrac{VP + VN}{VP + VN + FP + FN}$ : proportion de **toutes** les prédictions
  correctes (les 2 classes). **Trompeuse sur données déséquilibrées.**
- **Précision** $= \\dfrac{VP}{VP + FP}$ : parmi les exemples **prédits positifs**, proportion de
  vrais positifs (taux de vraies alertes). Spécifique à la classe positive, ignore les VN.
- Lecture « mesure » (bonus) : **accuracy = justesse** (proche de la vraie valeur, peu de
  **biais**) ; **précision = reproductibilité** (mesures répétées serrées, peu de **variance**).
  On peut être précis sans être exact, et inversement.

→ Fiche \`11_evaluation_metriques.md\`.

---

## Conseils de dernière minute

- Réécris **de mémoire** : les 2 mises à jour ($w$ avec $x$, $b$ sans $x$), $\\sigma$ et
  $\\sigma'$, la log-loss, MSE/MAE/RMSE, $H$/$G$/$IG$, marge $= 2/\\lVert w\\rVert$, les 3
  distances KNN.
- Pour toute étude de cas données : structure **Problème (nom exact) → Conséquence → Traitement**.
- Pour « expliquez le concept » : **définition + formule + schéma + limite**.
- N'utilise **jamais l'accuracy** comme métrique quand les classes sont déséquilibrées.
`;
