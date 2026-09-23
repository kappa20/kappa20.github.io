/* Chapter 6 — Modélisation multidimensionnelle : examen blanc.
   Items construits à partir du cours (Datawarehouse2.pdf) — pas de TD réel pour ce chapitre. */
window.DE = window.DE || {};
window.DE.exams = window.DE.exams || {};
window.DE.exams.ch6 = {
  chapter: 6,
  title: `Modélisation multidimensionnelle : faits, dimensions, schémas et méthode de Kimball`,
  timeMinutes: 90,
  qcm: [
    { id:"e-ch6-qcm-01", q:`Dans un modèle dimensionnel, la table des faits :`, choices:[`a peu de lignes et beaucoup de colonnes descriptives`,`contient les mesures et une clé composite vers les dimensions`,`n'est jamais volumineuse`,`ne contient aucune clé étrangère`], answer:1, correction:`b — mesures + clé composite de FK ; grande, centrale` },
    { id:"e-ch6-qcm-02", q:`Le chiffre d'affaires est un fait :`, choices:[`additif`,`semi-additif`,`non additif`,`dégénéré`], answer:0, correction:`a — additif sur toutes les dimensions` },
    { id:"e-ch6-qcm-03", q:`Le solde bancaire est :`, choices:[`additif sur toutes les dimensions`,`semi-additif : pas additionnable sur les dates`,`non additif`,`une dimension`], answer:1, correction:`b — semi-additif (Σ comptes oui, Σ dates non)` },
    { id:"e-ch6-qcm-04", q:`La granularité d'une table de faits répond à la question :`, choices:[`Combien de tables de dimensions ?`,`Que représente un enregistrement de la table de faits ?`,`Quel SGBD utiliser ?`,`Quelle est la durée de la base ?`], answer:1, correction:`b — niveau de détail le plus fin d'une ligne` },
    { id:"e-ch6-qcm-05", q:`Une clé de substitution est :`, choices:[`la clé naturelle des systèmes sources`,`une clé non intelligente qui remplace la clé naturelle (business key)`,`une clé étrangère de la table de faits`,`un numéro de transaction`], answer:1, correction:`b — clé non intelligente remplaçant la business key` },
    { id:"e-ch6-qcm-06", q:`Une table de faits sans faits (factless) sert à :`, choices:[`stocker des montants`,`capturer des relations plusieurs-à-plusieurs entre dimensions (événements)`,`remplacer la dimension Temps`,`stocker les métadonnées`], answer:1, correction:`b — que des clés étrangères, l'enregistrement est le fait (assiduité, inscriptions)` },
    { id:"e-ch6-qcm-07", q:`Le SCD de type 2 :`, choices:[`écrase l'ancienne valeur`,`ajoute une nouvelle ligne`,`ajoute une nouvelle colonne`,`supprime la dimension`], answer:1, correction:`b — nouvelle ligne (historique complet)` },
    { id:"e-ch6-qcm-08", q:`Le modèle en étoile, par rapport au flocon, :`, choices:[`normalise les dimensions`,`limite le nombre de jointures avec des dimensions dénormalisées`,`n'a pas de table de faits`,`exige plusieurs tables de faits`], answer:1, correction:`b — dimensions dénormalisées, moins de jointures, plus performant` }
  ],
  questions: [
    { id:"e-ch6-q-01", q:`Quels sont les cinq axes de qualité d'un modèle multidimensionnel ?`, correction:`Lisibilité, performance au chargement, performance des requêtes (≈ 30 s max), administration, évolutivité.` },
    { id:"e-ch6-q-02", q:`Différence entre modélisation E/R et modélisation dimensionnelle.`, correction:`E/R : OLTP, 3FN, sans redondance, indépendant des requêtes. Dimensionnel : dimensions + mesures, guidé par les requêtes analytiques, redondance désirée.` },
    { id:"e-ch6-q-03", q:`Distinguer attribut et fait ; où les placer ?`, correction:`Attribut : non mesurable, connu d'avance, discret/caractère → dimension. Fait : observation du marché, numérique continu → table de faits.` },
    { id:"e-ch6-q-04", q:`Expliquer la typologie des faits avec un exemple de chaque type.`, correction:`Additif : quantité vendue. Semi-additif : solde bancaire. Non additif : prix unitaire.` },
    { id:"e-ch6-q-05", q:`Expliquer les SCD 1, 2, 3, 4 et 6.`, correction:`1 écrasement ; 2 nouvelle ligne ; 3 nouvelle colonne ; 4 valeur d'origine/courante ; 6 hybride.` },
    { id:"e-ch6-q-06", q:`Énoncer les quatre règles de normalisation dimensionnelle.`, correction:`Pas de DF entre dimensions d'un même contexte ; faits cohérents pour toutes les combinaisons ; faits définis au grain du contexte ; graphe de dimension acyclique.` },
    { id:"e-ch6-q-07", q:`Comparer étoile, flocon et constellation (avantages/inconvénients).`, correction:`Étoile : rapide, lisible, redondance. Flocon : espace, drill down, mais jointures nombreuses. Constellation : plusieurs faits, dimensions communes.` },
    { id:"e-ch6-q-08", q:`Lister les neuf étapes de Kimball.`, correction:`Sujet, granularité, dimensions, faits, pré-calculs, tables de dimensions, durée de la base, dimensions lentement évolutives, requêtes prioritaires.` }
  ],
  vocab: [
    { id:"e-ch6-v-01", term:`mesure`, correction:`Indicateur numérique cumulable analysé selon les dimensions.` },
    { id:"e-ch6-v-02", term:`dimension`, correction:`Axe d'analyse à hiérarchie de niveaux (Temps, Géographie, Produit).` },
    { id:"e-ch6-v-03", term:`fait`, correction:`Valeur d'une mesure pour un membre de chaque dimension.` },
    { id:"e-ch6-v-04", term:`granularité (grain)`, correction:`Niveau de détail le plus fin d'une ligne de la table de faits.` },
    { id:"e-ch6-v-05", term:`clé de substitution`, correction:`Clé non intelligente remplaçant la clé naturelle des sources.` },
    { id:"e-ch6-v-06", term:`dimension conforme`, correction:`Dimension de même signification dans tous les data marts qui l'utilisent.` },
    { id:"e-ch6-v-07", term:`dimension dégénérée`, correction:`Clé de dimension dans la table des faits, sans table propre (n° de transaction).` },
    { id:"e-ch6-v-08", term:`table de faits sans faits`, correction:`Table de clés étrangères seules, relation n-m (événements, assiduité).` },
    { id:"e-ch6-v-09", term:`SCD (dimension à évolution lente)`, correction:`Dimension dont les attributs changent lentement ; traitement par écrasement, ligne, colonne…` },
    { id:"e-ch6-v-10", term:`schéma en flocon`, correction:`Étoile avec dimensions normalisées, un niveau de hiérarchie par table.` },
    { id:"e-ch6-v-11", term:`constellation`, correction:`Plusieurs étoiles (tables de faits) partageant des dimensions communes.` }
  ],
  analysis: [
    { id:"e-ch6-a-01", scenario:`Une table de faits contient la colonne « pourcentage de marge » par vente.`, question:`Est-ce un bon choix ? Que stocker à la place ?`, correction:`Non — ratios/pourcentages sont non additifs. Stocker numérateur (bénéfice) et dénominateur (montant) ; recalculer le ratio après agrégation.` },
    { id:"e-ch6-a-02", scenario:`Un client déménage et l'entreprise veut conserver l'historique des ventes par ville.`, question:`Quel type de SCD choisir et comment ?`, correction:`SCD 2 : ajouter une nouvelle ligne avec nouvelle clé de substitution ; les anciens faits restent liés à l'ancienne adresse.` },
    { id:"e-ch6-a-03", scenario:`Les produits sont organisés par région, mais Région est une table séparée liée seulement à la table de faits.`, question:`Quelle règle est violée ? Corriger.`, correction:`Règle 1 : dépendance fonctionnelle entre dimensions du même contexte → intégrer Région dans la dimension Produit.` },
    { id:"e-ch6-a-04", scenario:`Une table de faits stocke à la fois « marge_ventes » et « marge_achats », mais la marge des achats ne dépend ni du client ni de la région.`, question:`Quelle règle est concernée ?`, correction:`Règle 2 : faits cohérents pour toutes les combinaisons → éclater le contexte (achats dans un autre contexte).` },
    { id:"e-ch6-a-05", scenario:`Les tables de dimension sont très volumineuses et l'espace disque est limité, mais les analystes se plaignent de requêtes lentes.`, question:`Étoile ou flocon ? Justifier.`, correction:`Étoile : les dimensions sont petites face aux faits, le gain d'espace du flocon est marginal ; jointures en moins → requêtes plus rapides.` }
  ],
  case: {
    title: `Cas distribution : DW des ventes de magasins (méthode de Kimball)`,
    context: `Une chaîne de distribution veut comprendre les achats de ses clients saisis aux terminaux points de vente (TPV). Elle veut savoir quels produits se vendent dans quel magasin, à quel prix, quand, et dans quelles conditions de promotion. Les données proviennent de l'application opérationnelle des TPV et du fichier Produits.`,
    tasks: [
      { id:"e-ch6-c-01", prompt:`1. Choisir le sujet et le grain de la table de faits (étapes 1 et 2).`, correction:`- Sujet : ventes au niveau TPV
- Grain : une ligne individuelle de transaction TPV (donnée atomique) pour anticiper les requêtes ad hoc` },
      { id:"e-ch6-c-02", prompt:`2. Identifier les dimensions principales (étape 3) et leurs attributs.`, correction:`- Date (jour, mois, trimestre, semestre, année…)
- Produit (clé, description, marque, catégorie, emballage, poids…)
- Magasin (nom, ville, téléphone, manager)
- Promotion
- Dimensions supplémentaires : une seule valeur par combinaison` },
      { id:"e-ch6-c-03", prompt:`3. Choisir les faits (étape 4) et traiter le bénéfice et la marge.`, correction:`- Quantité vendue, montant des ventes (DH), coût standard, bénéfice brut
- Pourcentages/ratios non additifs → stocker numérateur et dénominateur` },
      { id:"e-ch6-c-04", prompt:`4. Schématiser la table de faits « Transaction TPV » (clés, dimension dégénérée, mesures).`, correction:`- Clé Date, Clé Produit, Clé Magasin, Clé Promotion
- N° de transaction TPV (dimension dégénérée)
- Quantité vendue, Montant des ventes, Coût, Bénéfice brut
- Schéma en étoile` },
      { id:"e-ch6-c-05", prompt:`5. Quel modèle (étoile / flocon / constellation) proposer, et comment gérer le changement de catégorie d'un produit ?`, correction:`- Étoile (dimensions dénormalisées, peu de jointures) ; constellation si on ajoute les Achats
- Changement de catégorie : dimension à évolution lente → SCD 2 (nouvelle ligne + nouvelle clé de substitution) pour garder l'historique` }
    ],
    deliverables: [
      `Énoncé du sujet et du grain`,
      `Schéma en étoile (table de faits + 4 dimensions)`,
      `Liste des mesures (additives) et traitement des ratios`,
      `Stratégie SCD pour les dimensions à évolution lente`
    ]
  }
};
