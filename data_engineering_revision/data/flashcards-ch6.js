/* Chapter 6 — Modélisation multidimensionnelle : flashcards. */
window.DE = window.DE || {};
window.DE.flashcards = window.DE.flashcards || [];
window.DE.flashcards.push(
  // --- Principes ---
  { id:"fc-ch6-001", chapter:6, topic:"principes", kind:"concept", front:`Objectif de la modélisation multidimensionnelle`, back:`Proposer un accès aux données **intuitif et très performant** : le sujet analysé est un **point dans un espace à plusieurs dimensions**.
- Données organisées autour des **faits** (mesures numériques additives) décrits par des **axes d'analyse (dimensions)**
- Transforme les sources en structures logiques décisionnelles, selon les requêtes analytiques envisagées
- Redondance possible, voire désirée` },
  { id:"fc-ch6-002", chapter:6, topic:"principes", kind:"concept", front:`ER (3FN) vs modèle dimensionnel`, back:`- **Entité/relation** (OLTP) : vise à **éliminer les redondances**, schéma en 3FN, conçu **indépendamment des requêtes**
- **Dimensionnel** (DW) : dimensions + mesures, basé sur les **requêtes analytiques**, redondance acceptée
- Modélisation conceptuelle BDR = entité et relation ; DW = **dimension et mesure**` },
  { id:"fc-ch6-003", chapter:6, topic:"principes", kind:"concept", front:`Les 5 axes de qualité d'un modèle multidimensionnel`, back:`1. **Lisibilité** pour l'utilisateur final
2. **Performance au chargement** (sources hétérogènes, transformation/filtrage)
3. **Performance à l'exécution des requêtes** (~30 s maximum ; agrégats/redondances)
4. **Administration** des données (« faire vivre » le DW, industrialiser l'extraction)
5. **Évolutivité** (incrémental plutôt qu'itératif ; pas de modèle isolé)` },
  { id:"fc-ch6-004", chapter:6, topic:"principes", kind:"definition", front:`Mesure`, back:`Élément de données **numérique et cumulable** sur lequel portent les analyses, selon les dimensions.
- Ex : montant_ventes, qte_vendue, prix, remise, coût des travaux, nombre d'accidents
- Résultat d'une opération d'agrégation ; stockée dans la table des faits` },
  { id:"fc-ch6-005", chapter:6, topic:"principes", kind:"definition", front:`Dimension`, back:`**Axe d'analyse** (point de vue) selon lequel les mesures sont observées ; contient des **membres organisés en hiérarchie**.
- Ex : Temps, Géographie, Produits, Clients
- Stockée dans une table de dimension` },
  { id:"fc-ch6-006", chapter:6, topic:"principes", kind:"definition", front:`Fait`, back:`Valeur d'une mesure, **mesurée ou calculée**, selon un membre de chaque dimension : sujet d'analyse, grain de mesure de l'activité.
- Ex : « 50 000 DH » = mesure « coût des travaux » pour le membre 2021 (niveau année de Temps) et Marrakech (niveau ville de Géographie)` },
  { id:"fc-ch6-007", chapter:6, topic:"principes", kind:"concept", front:`Hiérarchie et granularité d'une dimension`, back:`- Chaque membre appartient à un **niveau hiérarchique** ; ex Temps : année – semestre – mois – jour
- **Granularité d'une dimension** = nombre de niveaux hiérarchiques` },
  { id:"fc-ch6-008", chapter:6, topic:"faits", kind:"concept", front:`Typologie des faits : additif, semi-additif, non additif`, back:`- **Additif** : additionnable selon toutes les dimensions (quantités vendues, chiffre d'affaires ; bénéfice = vente − coût)
- **Semi-additif** : seulement selon certaines dimensions (solde bancaire : Σ sur les comptes oui, sur les dates non)
- **Non additif** : jamais (prix unitaire)` },
  { id:"fc-ch6-009", chapter:6, topic:"faits", kind:"concept", front:`Table des faits`, back:`Table centrale, en général la **plus grande** ; contient les mesures et une **clé composite** de clés étrangères vers les dimensions (relation n,m).
- **Beaucoup de lignes, peu de colonnes** ; nombreuses FK
- Plusieurs tables de faits possibles dans un DW ; faits utiles = numériques et additifs` },
  { id:"fc-ch6-010", chapter:6, topic:"faits", kind:"definition", front:`Granularité (grain) de la table de faits`, back:`**Niveau de détail le plus fin** d'une ligne de la table de faits ; répond à : *que représente un enregistrement ?*
- Découle du niveau de détail des dimensions ; **toutes les lignes ont le même grain**
- Ex : ventes par produit, par jour et par magasin` },
  { id:"fc-ch6-011", chapter:6, topic:"dimensions", kind:"concept", front:`Table de dimension`, back:`Entoure la table de faits ; clé primaire unique = un des composants de la clé de la table des faits.
- **Peu de lignes, beaucoup de colonnes**, attributs souvent textuels/discrets
- Sert de contraintes et d'en-têtes de lignes dans les résultats` },
  { id:"fc-ch6-012", chapter:6, topic:"dimensions", kind:"concept", front:`Attribut ou fait ?`, back:`- **Attribut** : non mesurable, connu d'avance, valeur discrète, souvent caractère (→ dimension)
- **Fait** : « observation du marché », pas connu à l'avance, numérique à variation continue (→ table de faits)` },
  { id:"fc-ch6-013", chapter:6, topic:"dimensions", kind:"definition", front:`Clé de substitution (surrogate key)`, back:`Clé **non intelligente** qui remplace la clé naturelle (business key, souvent composée) des systèmes opérationnels.
- Rend un élément unique dans la dimension ; à ne pas confondre avec la clé artificielle du système opérationnel
- Ex : Clé Produit (PK)` },
  { id:"fc-ch6-014", chapter:6, topic:"dimensions", kind:"concept", front:`Dimension Temps`, back:`Commune à **tout le DW**, reliée à toute table de faits.
- Clé temps (PK), Jour, Mois, Trimestre, Semestre, Année, N° jour dans l'année, N° semaine dans l'année…` },
  { id:"fc-ch6-015", chapter:6, topic:"dimensions", kind:"definition", front:`Dimension conforme et faits conformes`, back:`- **Dimension conforme** : même signification dans toutes les tables de faits/data marts qui l'utilisent (Produit pour Finance et Marketing, clients, lieux, promotions, temps)
- **Faits conformes** : mêmes définitions/terminologie dans tous les data marts (recettes, bénéfices, prix, coût)` },
  { id:"fc-ch6-016", chapter:6, topic:"dimensions", kind:"definition", front:`Table de faits sans faits (factless fact table)`, back:`Capture des relations **plusieurs-à-plusieurs** entre dimensions, sans fait numérique : que des clés étrangères (l'enregistrement est le fait).
- Ex : promotions non vendues, assiduité/inscriptions d'étudiants, accidents (assurance), équipements d'un hôpital` },
  { id:"fc-ch6-017", chapter:6, topic:"dimensions", kind:"definition", front:`Dimension dégénérée`, back:`Clé de dimension **dans la table des faits**, sans attribut ni table de dimension propre.
- Ex : n° de bon de commande, n° de transaction, n° d'interruption de service
- Permet de compter (ex : combien de fois un client a été interrompu)` },
  // --- SCD ---
  { id:"fc-ch6-018", chapter:6, topic:"scd", kind:"definition", front:`Dimension à évolution lente (SCD)`, back:`Dimension dont les **attributs descriptifs des membres changent** (adresse/statut d'un client, renommage d'une région, catégorie d'un produit).
- Si la transition n'est pas immédiate (anciens produits encore en rayon) : traiter comme **deux membres différents**` },
  { id:"fc-ch6-019", chapter:6, topic:"scd", kind:"concept", front:`Les types de SCD (1, 2, 3, 4, 6)`, back:`- **SCD 1** : écrasement de l'ancienne valeur (pas d'historique)
- **SCD 2** : ajout d'une **nouvelle ligne** (historique complet)
- **SCD 3** : ajout d'une **nouvelle colonne** (ancienne valeur)
- **SCD 4** : valeur d'origine / valeur courante
- **SCD 6** : hybride` },
  { id:"fc-ch6-020", chapter:6, topic:"scd", kind:"definition", front:`Dimension à évolution rapide`, back:`Dimension dont les attributs à historiser changent **très fréquemment** (salaire, poste des collaborateurs).
- Ex : adresse du client dans un pays où 70 % de la population déménage chaque année` },
  // --- Règles & modèles ---
  { id:"fc-ch6-021", chapter:6, topic:"modeles", kind:"concept", front:`Avantages et inconvénients du modèle dimensionnel`, back:`- + **Lisibilité** (structure prévisible), **performances** (moins de tables/jointures, pré-calculs), **évolutivité**, redondances envisageables, pas de MAJ en ligne (chargement seul), pas de souci d'intégrité
- − tables plus volumineuses ; fréquence d'accès très variable aux contenus des tables` },
  { id:"fc-ch6-022", chapter:6, topic:"modeles", kind:"concept", front:`Règles de normalisation dimensionnelle 1 et 2`, back:`- **Règle 1** : pas de dépendance fonctionnelle entre deux entités de dimensions différentes d'un même contexte → regrouper les entités dépendantes dans une même dimension (ex : produits organisés par région → Région dans Produit)
- **Règle 2** : tous les faits d'un contexte doivent être définis de façon cohérente pour toutes les combinaisons dimensionnelles → sinon éclater le contexte (marge des achats ≠ client/région)` },
  { id:"fc-ch6-023", chapter:6, topic:"modeles", kind:"concept", front:`Règles de normalisation dimensionnelle 3 et 4`, back:`- **Règle 3** : tous les faits d'un contexte doivent être définis pour le **grain** du contexte (combinaison des grains des dimensions)
- **Règle 4** : le graphe de chaque dimension doit être **acyclique** → rompre les cycles (Gamme/Marque/Région/Pays)` },
  { id:"fc-ch6-024", chapter:6, topic:"modeles", kind:"concept", front:`Forme dimensionnelle normale (constellation)`, back:`Le modèle multidimensionnel (MDD) d'un domaine = **constellation ou galaxie** où chaque étoile est un contexte.
- Une même entité ou un même fait peut appartenir à plusieurs contextes, à condition d'une **définition unique**
- Préférable de représenter les contextes sous forme déconnectée` },
  { id:"fc-ch6-025", chapter:6, topic:"modeles", kind:"concept", front:`Modèle en étoile`, back:`Une table de faits centrale + plusieurs tables de dimension **dénormalisées** sans lien entre elles ; relations (1,n).
- + navigation facile, lisibilité, **performance** (peu de jointures), gestion des agrégats et des données creuses
- − redondances dans les dimensions, alimentation complexe, toutes les dimensions ne concernent pas toutes les mesures` },
  { id:"fc-ch6-026", chapter:6, topic:"modeles", kind:"concept", front:`Modèle en flocon de neige`, back:`Variante de l'étoile : **dimensions normalisées** (un niveau de hiérarchie par table), table de faits inchangée ; utilisé quand les tables sont très volumineuses.
- + moins de volume/espace disque, **drill down** par paliers, perf. des updates
- − navigation difficile, **nombreuses jointures**, requêtes moins performantes` },
  { id:"fc-ch6-027", chapter:6, topic:"modeles", kind:"concept", front:`Modèle en constellation`, back:`**Fusion de plusieurs modèles en étoile** partageant des dimensions communes : plusieurs tables de faits (ex : Ventes et Achats) + dimensions communes ou non.
- Ex : Produit et Période partagées ; Magasin pour Ventes, Fournisseur pour Achats` },
  { id:"fc-ch6-028", chapter:6, topic:"modeles", kind:"concept", front:`Étoile vs flocon : synthèse`, back:`- Étoile : dimensions plus grosses (redondance), pas de jointures pour reconstruire → plus rapide
- Flocon : normalisé, jointures pour reconstruire
- « Étoile >> flocon » car tables de dimension << tables de faits (le gain d'espace du flocon est marginal)` },
  { id:"fc-ch6-029", chapter:6, topic:"stockage", kind:"concept", front:`Modes de stockage OLAP`, back:`- **ROLAP** : Relational OLAP
- **MOLAP** : Multi-Dimensional OLAP
- **HOLAP** : Hybrid OLAP
- **OOLAP** : Object OLAP
- **DOLAP** : Desktop OLAP` },
  // --- Kimball ---
  { id:"fc-ch6-030", chapter:6, topic:"kimball", kind:"concept", front:`Les 9 étapes de Kimball`, back:`1. Choisir le sujet
2. Choisir la granularité des faits
3. Identifier et adapter les dimensions
4. Choisir les faits
5. Stocker les pré-calculs
6. Établir les tables de dimensions
7. Choisir la durée de la base
8. Suivre les dimensions lentement évolutives
9. Décider des requêtes prioritaires et des modes de requêtes` },
  { id:"fc-ch6-031", chapter:6, topic:"kimball", kind:"case", front:`Cas TPV (distribution) : sujet et grain`, back:`- Sujet : comprendre les achats des clients saisis aux **terminaux points de vente (TPV)** → modéliser les ventes au niveau TPV
- Grain : **donnée atomique = une ligne individuelle de transaction TPV** (plus fin possible pour anticiper les requêtes ad hoc)
- Quels produits se vendent, dans quel magasin, à quel prix, quand, avec quelle promotion ?` },
  { id:"fc-ch6-032", chapter:6, topic:"kimball", kind:"case", front:`Cas TPV : dimensions et faits`, back:`- Dimensions principales : **Date/Temps, Produit, Magasin, Promotion** (l'énoncé du grain détermine les dimensions ; les ajouts doivent prendre une valeur unique par combinaison)
- Table des faits Transaction TPV : clés Date/Produit/Magasin/Promotion + **n° de transaction TPV** (dimension dégénérée), quantité vendue, montant des ventes, coût, bénéfice brut
- **Ratios/pourcentages non additifs** : stocker numérateur et dénominateur` }
);
