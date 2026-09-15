window.MDO = window.MDO || {};
window.MDO.mindmaps = window.MDO.mindmaps || {};
window.MDO.mindmaps.ch4 = [
  { id:"ch4-root", label:"CH4 — Reproductibilité & cycle de vie des modèles", parentId:null, kind:"root" },

  { id:"ch4-b1", label:"Notion de reproductibilité", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b1-l1", label:"Définition", parentId:"ch4-b1", kind:"leaf", note:"Capacité à reconstruire/rejouer un workflow ML dans des conditions définies → résultats cohérents, comparables, explicables." },
  { id:"ch4-b1-l2", label:"6 dimensions à versionner", parentId:"ch4-b1", kind:"leaf", note:"Code, données, dépendances, configurations, modèles, résultats — le maillon le plus faible détermine la fiabilité globale." },
  { id:"ch4-b1-l3", label:"Artisanal vs reproductible", parentId:"ch4-b1", kind:"leaf", note:"Notebook/données locales/params à la main vs pipeline structuré/données identifiées/environnement maîtrisé." },

  { id:"ch4-b2", label:"Traçabilité des expériences", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b2-l1", label:"Définition", parentId:"ch4-b2", kind:"leaf", note:"Conserver/relier les métadonnées d'un run (code, données, paramètres, métriques, artefacts)." },
  { id:"ch4-b2-l2", label:"Fiche de run", parentId:"ch4-b2", kind:"leaf", note:"run_id+date+auteur, code version, dataset, modèle, hyperparamètres, métriques, artefact." },
  { id:"ch4-b2-l3", label:"Apports au projet", parentId:"ch4-b2", kind:"leaf", note:"Mémoire, comparaison objective, justification des choix, prépare le registry, renforce l'audit." },

  { id:"ch4-b3", label:"Versionnement des datasets", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b3-l1", label:"Définition", parentId:"ch4-b3", kind:"leaf", note:"Identifier/historiser les états d'un dataset (brut, préparé, transformé)." },
  { id:"ch4-b3-l2", label:"Ce qu'on versionne", parentId:"ch4-b3", kind:"leaf", note:"Source, date/snapshot, transformations, schéma, filtre, usage dans le pipeline." },
  { id:"ch4-b3-l3", label:"Risques sans versionnement", parentId:"ch4-b3", kind:"leaf", note:"Entraînement non rejouable, comparaison faussée, audit limité ; le split train/val/test doit aussi être maîtrisé." },

  { id:"ch4-b4", label:"Versionnement des modèles", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b4-l1", label:"Définition", parentId:"ch4-b4", kind:"leaf", note:"Identifier/historiser les versions d'un modèle en les reliant à leur contexte de fabrication." },
  { id:"ch4-b4-l2", label:"Artefact + contexte = version gouvernable", parentId:"ch4-b4", kind:"leaf", note:"model.pkl + dataset/code/paramètres/métriques = version de modèle gouvernable." },
  { id:"ch4-b4-l3", label:"5 statuts du cycle de vie", parentId:"ch4-b4", kind:"leaf", note:"Experimental → Candidate → Staging → Production → Archived." },

  { id:"ch4-b5", label:"Model registry", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b5-l1", label:"Définition", parentId:"ch4-b5", kind:"leaf", note:"Composant centralisé pour enregistrer, versionner, documenter et gouverner les modèles." },
  { id:"ch4-b5-l2", label:"Fonctions", parentId:"ch4-b5", kind:"leaf", note:"Enregistrer, centraliser, stocker métriques, gérer statuts, suivre promotions, associer métadonnées." },
  { id:"ch4-b5-l3", label:"Avant / après registry", parentId:"ch4-b5", kind:"leaf", note:"Fichier local + statut implicite vs artefact enregistré + statut explicite + gouvernance possible." },
  { id:"ch4-b5-l4", label:"Promotion & rollback", parentId:"ch4-b5", kind:"leaf", note:"Critères : métriques, comparaison à une baseline, run traçable, tests validés. Rollback : restaurer une version stable." },

  { id:"ch4-b6", label:"Packaging d'un projet ML", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b6-l1", label:"Définition & objectifs", parentId:"ch4-b6", kind:"leaf", note:"Encapsuler projet/modèle/service dans une forme stable et réutilisable — build once, run many." },
  { id:"ch4-b6-l2", label:"Continuum de structuration", parentId:"ch4-b6", kind:"leaf", note:"Script → package Python → CLI → archive d'artefacts → image Docker → service ML exposé par API." },
  { id:"ch4-b6-l3", label:"Structure type + exemple churn", parentId:"ch4-b6", kind:"leaf", note:"data/, configs/, src/, models/, reports/, requirements.txt, Dockerfile — ex. churn-mlops-project/." },

  { id:"ch4-b7", label:"Pipelines ML reproductibles", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b7-l1", label:"Définition", parentId:"ch4-b7", kind:"leaf", note:"Chaîne d'étapes aux entrées/sorties/paramètres/artefacts identifiés → exécution répétable et tracée." },
  { id:"ch4-b7-l2", label:"Propriétés attendues", parentId:"ch4-b7", kind:"leaf", note:"Modularité, traçabilité, rejouabilité, clarté des dépendances, stabilité, intégration, tracking/registry." },
  { id:"ch4-b7-l3", label:"Étapes typiques", parentId:"ch4-b7", kind:"leaf", note:"Chargement → validation → préparation → split → entraînement → évaluation → logging → sérialisation → registry → packaging." },

  { id:"ch4-b8", label:"Cycle de vie global du modèle", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b8-l1", label:"Cercle du cycle de vie", parentId:"ch4-b8", kind:"leaf", note:"Conception → Expérimentation → Validation → Enregistrement → Packaging → Déploiement → Monitoring → Réentraînement → Archivage." },
  { id:"ch4-b8-l2", label:"4 axes transverses", parentId:"ch4-b8", kind:"leaf", note:"Reproductibilité, traçabilité, gouvernance, industrialisation." },
  { id:"ch4-b8-l3", label:"Le modèle = actif évolutif", parentId:"ch4-b8", kind:"leaf", note:"Pas un objet ponctuel ; un actif qui évolue dans le temps via statuts et promotions." },

  { id:"ch4-b9", label:"Auditabilité & industrialisation", parentId:"ch4-root", kind:"branch" },
  { id:"ch4-b9-l1", label:"Questions d'audit", parentId:"ch4-b9", kind:"leaf", note:"Quel modèle ? quelle version en prod ? quelles données ? quels paramètres ? quel run ? pourquoi retenu ?" },
  { id:"ch4-b9-l2", label:"Industrialisation", parentId:"ch4-b9", kind:"leaf", note:"Rejouer, comparer, transférer, intégrer dans un pipeline, déployer proprement, surveiller dans le temps." },
  { id:"ch4-b9-l3", label:"Synthèse", parentId:"ch4-b9", kind:"leaf", note:"Reproductibilité = Auditabilité + Industrialisation." }
];
