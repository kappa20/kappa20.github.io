/* Chapter 6 — Modélisation multidimensionnelle : mindmap. */
window.DE = window.DE || {};
window.DE.mindmaps = window.DE.mindmaps || {};
window.DE.mindmaps.ch6 = [
  { id:"ch6-root", label:"CH6 — Modélisation multidimensionnelle", parentId:null, kind:"root" },

  // Branche 1 — Principes
  { id:"ch6-b1", label:"Principes & qualité", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b1-l1", label:"Objectif", parentId:"ch6-b1", kind:"leaf", note:`Accès intuitif et très performant ; le sujet analysé est un point dans un espace à plusieurs dimensions.` },
  { id:"ch6-b1-l2", label:"E/R vs dimensionnel", parentId:"ch6-b1", kind:"leaf", note:`E/R : OLTP, 3FN, sans redondance. Dimensionnel : dimensions + mesures, guidé par les requêtes, redondance désirée.` },
  { id:"ch6-b1-l3", label:"5 axes de qualité", parentId:"ch6-b1", kind:"leaf", note:`Lisibilité, chargement, requêtes (≈ 30 s), administration, évolutivité.` },

  // Branche 2 — Faits & mesures
  { id:"ch6-b2", label:"Faits & mesures", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b2-l1", label:"Mesure vs fait", parentId:"ch6-b2", kind:"leaf", note:`Mesure = indicateur numérique cumulable ; fait = valeur de la mesure pour un membre de chaque dimension.` },
  { id:"ch6-b2-l2", label:"Additif", parentId:"ch6-b2", kind:"leaf", note:`Additionnable sur toutes les dimensions (quantités, CA, bénéfice).` },
  { id:"ch6-b2-l3", label:"Semi-additif", parentId:"ch6-b2", kind:"leaf", note:`Certaines dimensions seulement (solde bancaire : pas sur les dates).` },
  { id:"ch6-b2-l4", label:"Non additif", parentId:"ch6-b2", kind:"leaf", note:`Aucune dimension (prix unitaire) ; ratios : stocker numérateur et dénominateur.` },
  { id:"ch6-b2-l5", label:"Table des faits & grain", parentId:"ch6-b2", kind:"leaf", note:`Table centrale, clé composite de FK, beaucoup de lignes/peu de colonnes ; grain = niveau de détail le plus fin, identique pour toutes les lignes.` },

  // Branche 3 — Dimensions
  { id:"ch6-b3", label:"Dimensions", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b3-l1", label:"Table de dimension", parentId:"ch6-b3", kind:"leaf", note:`Peu de lignes, beaucoup de colonnes textuelles ; axe d'analyse avec hiérarchie (granularité = nombre de niveaux).` },
  { id:"ch6-b3-l2", label:"Clé de substitution", parentId:"ch6-b3", kind:"leaf", note:`Clé non intelligente remplaçant la clé naturelle (business key).` },
  { id:"ch6-b3-l3", label:"Dimension Temps", parentId:"ch6-b3", kind:"leaf", note:`Commune au DW : jour, mois, trimestre, semestre, année, n° semaine.` },
  { id:"ch6-b3-l4", label:"Dimension conforme", parentId:"ch6-b3", kind:"leaf", note:`Même signification dans tous les data marts ; faits conformes = mêmes définitions.` },
  { id:"ch6-b3-l5", label:"Dimension dégénérée", parentId:"ch6-b3", kind:"leaf", note:`Clé de dimension dans la table de faits, sans attribut (n° de transaction/commande).` },
  { id:"ch6-b3-l6", label:"Factless fact table", parentId:"ch6-b3", kind:"leaf", note:`Que des clés étrangères ; relation n-m ; événements (assiduité, accidents, promotions).` },

  // Branche 4 — SCD
  { id:"ch6-b4", label:"Évolution des dimensions (SCD)", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b4-l1", label:"SCD 1", parentId:"ch6-b4", kind:"leaf", note:`Écrasement de l'ancienne valeur ; pas d'historique.` },
  { id:"ch6-b4-l2", label:"SCD 2", parentId:"ch6-b4", kind:"leaf", note:`Nouvelle ligne ; historique complet.` },
  { id:"ch6-b4-l3", label:"SCD 3", parentId:"ch6-b4", kind:"leaf", note:`Nouvelle colonne pour l'ancienne valeur.` },
  { id:"ch6-b4-l4", label:"SCD 4 et 6", parentId:"ch6-b4", kind:"leaf", note:`4 : valeur d'origine/courante ; 6 : hybride.` },
  { id:"ch6-b4-l5", label:"Évolution rapide", parentId:"ch6-b4", kind:"leaf", note:`Attributs changeant très souvent (salaire, poste, adresse) dont on veut l'historique.` },

  // Branche 5 — Règles & schémas
  { id:"ch6-b5", label:"Règles & schémas", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b5-l1", label:"4 règles de normalisation", parentId:"ch6-b5", kind:"leaf", note:`1) pas de DF entre dimensions ; 2) faits cohérents ; 3) faits au grain du contexte ; 4) dimension acyclique.` },
  { id:"ch6-b5-l2", label:"Étoile", parentId:"ch6-b5", kind:"leaf", note:`Faits + dimensions dénormalisées ; peu de jointures, performant ; redondance.` },
  { id:"ch6-b5-l3", label:"Flocon de neige", parentId:"ch6-b5", kind:"leaf", note:`Dimensions normalisées ; gain d'espace, drill down ; jointures nombreuses.` },
  { id:"ch6-b5-l4", label:"Constellation", parentId:"ch6-b5", kind:"leaf", note:`Plusieurs faits partageant des dimensions communes.` },
  { id:"ch6-b5-l5", label:"ROLAP / MOLAP / HOLAP", parentId:"ch6-b5", kind:"leaf", note:`Relational, Multi-dimensional, Hybrid ; aussi OOLAP (objet), DOLAP (desktop).` },

  // Branche 6 — Kimball
  { id:"ch6-b6", label:"Méthode de Kimball (9 étapes)", parentId:"ch6-root", kind:"branch" },
  { id:"ch6-b6-l1", label:"Étapes 1 à 4", parentId:"ch6-b6", kind:"leaf", note:`Sujet, granularité, dimensions, faits (de préférence numériques et additifs).` },
  { id:"ch6-b6-l2", label:"Étapes 5 à 9", parentId:"ch6-b6", kind:"leaf", note:`Pré-calculs, tables de dimensions, durée de la base, dimensions lentement évolutives, requêtes prioritaires.` },
  { id:"ch6-b6-l3", label:"Exemple TPV", parentId:"ch6-b6", kind:"leaf", note:`Grain = ligne de transaction TPV ; dimensions Date, Produit, Magasin, Promotion ; faits quantité, montant, coût, bénéfice brut ; n° transaction dégénéré.` }
];
