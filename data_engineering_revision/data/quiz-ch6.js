/* Chapter 6 — Modélisation multidimensionnelle : quiz (QCM + questions ouvertes). */
window.DE = window.DE || {};
window.DE.quiz = window.DE.quiz || [];
window.DE.quiz.push(
  // --- QCM (8) ---
  { id:"q-ch6-mcq-01", chapter:6, type:"mcq", q:`La table des faits contient :`, choices:[`des attributs textuels descriptifs uniquement`,`les mesures et les clés étrangères vers les dimensions`,`les métadonnées du DW`,`uniquement des clés primaires`], answer:1, explain:`Table de faits = clé composite de FK vers les dimensions + mesures numériques.` },
  { id:"q-ch6-mcq-02", chapter:6, type:"mcq", q:`Le solde d'un compte bancaire est un fait :`, choices:[`additif`,`semi-additif`,`non additif`,`dégénéré`], answer:1, explain:`Additionnable sur les comptes mais pas sur les dates → semi-additif.` },
  { id:"q-ch6-mcq-03", chapter:6, type:"mcq", q:`Le prix unitaire est un fait :`, choices:[`additif`,`semi-additif`,`non additif`,`sans fait`], answer:2, explain:`Non additionnable selon aucune dimension → non additif.` },
  { id:"q-ch6-mcq-04", chapter:6, type:"mcq", q:`Le grain d'une table de faits désigne :`, choices:[`le nombre de dimensions`,`le niveau de détail le plus fin d'une ligne de la table`,`la taille du DW`,`le type de mesure`], answer:1, explain:`Grain = ce que représente un enregistrement (ex : produit × jour × magasin).` },
  { id:"q-ch6-mcq-05", chapter:6, type:"mcq", q:`Quelle solution de SCD ajoute une nouvelle ligne pour conserver l'historique ?`, choices:[`SCD 1`,`SCD 2`,`SCD 3`,`SCD 4`], answer:1, explain:`SCD 1 = écrasement ; SCD 2 = nouvelle ligne ; SCD 3 = nouvelle colonne.` },
  { id:"q-ch6-mcq-06", chapter:6, type:"mcq", q:`Un numéro de transaction stocké dans la table des faits, sans table de dimension propre, est :`, choices:[`une dimension conforme`,`une dimension dégénérée`,`une clé de substitution`,`une table sans faits`], answer:1, explain:`Dimension dégénérée : clé de dimension dans la table de faits, sans attribut.` },
  { id:"q-ch6-mcq-07", chapter:6, type:"mcq", q:`Le modèle en flocon de neige, comparé à l'étoile :`, choices:[`a des dimensions dénormalisées`,`a des dimensions normalisées mais plus de jointures`,`n'a pas de table de faits`,`est toujours plus performant`], answer:1, explain:`Flocon = dimensions normalisées : gain d'espace, mais navigation difficile et requêtes moins performantes.` },
  { id:"q-ch6-mcq-08", chapter:6, type:"mcq", q:`Un modèle en constellation comprend :`, choices:[`une seule table de faits`,`plusieurs tables de faits partageant des dimensions`,`aucune dimension`,`uniquement des dimensions dégénérées`], answer:1, explain:`Constellation = fusion de plusieurs étoiles avec dimensions communes.` },

  // --- Questions ouvertes ---
  { id:"q-ch6-open-01", chapter:6, type:"open", q:`Comparer la modélisation entité/relation et la modélisation multidimensionnelle.`, model:`- E/R : OLTP, 3FN, élimine les redondances, indépendant des requêtes
- Dimensionnel : DW, dimensions + mesures, basé sur les requêtes analytiques, redondance acceptée, lisible et performant` },
  { id:"q-ch6-open-02", chapter:6, type:"open", q:`Définir mesure, dimension et fait, avec un exemple.`, model:`- Mesure : indicateur numérique cumulable (montant_ventes)
- Dimension : axe d'analyse avec hiérarchie (Temps : année-semestre-mois-jour)
- Fait : valeur d'une mesure pour un membre de chaque dimension (50 000 DH, coût des travaux, 2021, Marrakech)` },
  { id:"q-ch6-open-03", chapter:6, type:"open", q:`Typologie des faits : additif, semi-additif, non additif (exemples).`, model:`- Additif : toutes dimensions (quantité, CA)
- Semi-additif : certaines dimensions (solde : Σ comptes, pas Σ dates)
- Non additif : aucune (prix unitaire)` },
  { id:"q-ch6-open-04", chapter:6, type:"open", q:`Différence entre table de faits et table de dimension.`, model:`- Faits : centrale, très grande, beaucoup de lignes/peu de colonnes, clé composite de FK + mesures numériques
- Dimension : peu de lignes/beaucoup de colonnes textuelles, clé primaire unique, descriptions (axe d'analyse)` },
  { id:"q-ch6-open-05", chapter:6, type:"open", q:`Expliquer les types de SCD (1, 2, 3, 4, 6) et donner un exemple.`, model:`- SCD 1 : écrase (pas d'historique)
- SCD 2 : nouvelle ligne (historique complet)
- SCD 3 : nouvelle colonne (ancienne valeur)
- SCD 4 : valeur d'origine/courante
- SCD 6 : hybride
- Ex : changement d'adresse ou de catégorie d'un produit` },
  { id:"q-ch6-open-06", chapter:6, type:"open", q:`Comparer les modèles en étoile, en flocon de neige et en constellation.`, model:`- Étoile : 1 table de faits + dimensions dénormalisées ; rapide, peu de jointures ; redondance
- Flocon : dimensions normalisées par niveau ; économie d'espace, drill down ; plus de jointures, moins performant
- Constellation : plusieurs faits partageant des dimensions` },
  { id:"q-ch6-open-07", chapter:6, type:"open", q:`Énoncer les 4 règles de normalisation dimensionnelle.`, model:`1. Pas de dépendance fonctionnelle entre entités de dimensions différentes → les regrouper
2. Faits d'un contexte définis de façon cohérente pour toutes les combinaisons → sinon éclater le contexte
3. Faits définis pour le grain du contexte
4. Graphe de chaque dimension acyclique` },
  { id:"q-ch6-open-08", chapter:6, type:"open", q:`Appliquer les 9 étapes de Kimball à la distribution (TPV).`, model:`1. Sujet : ventes au niveau TPV
2. Grain : ligne de transaction TPV
3. Dimensions : Date, Produit, Magasin, Promotion
4. Faits : quantité, montant, coût, bénéfice brut (ratios : numérateur/dénominateur)
5-9. Pré-calculs, tables de dimensions, durée, SCD, requêtes prioritaires` }
);
