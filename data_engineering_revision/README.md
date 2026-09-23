# Révision Data Engineering

Site de révision pour le module Data Engineering (Master S2, Université Hassan II
de Casablanca, 2025/2026). Couvre NoSQL (MongoDB, Cassandra), Data Warehouse, modélisation
multidimensionnelle et ETL/ELT (Talend), à partir des supports de cours et des TP.

**En ligne :** https://kappa20.github.io/data_engineering_revision/

## Chapitres

1. Big Data & panorama NoSQL (5V, CAP, 4 familles)
2. MongoDB : architecture & modélisation (BSON, sharding, embedded vs referenced)
3. MongoDB : CRUD, requêtes & TP1-3
4. Cassandra (architecture, réplication, consistance ajustable, CQL)
5. Data Warehouse, BI & ETL/ELT (TP Talend)
6. Modélisation multidimensionnelle (faits, dimensions, étoile/flocon, SCD, Kimball)

## Fonctionnalités

- **Flashcards** — cartes à retourner, filtrables par chapitre, suivi « connue / à revoir ».
- **Quiz** — QCM avec correction immédiate + questions ouvertes auto-évaluées.
- **Examen** — structure TD/TP (QCM, questions directes, définitions, analyse, étude de
  cas), chronomètre, correction masquée section par section.
- **Mindmap** — carte mentale 2D par chapitre (déplier/replier, glisser, zoomer).

Zéro dépendance externe, zéro build — HTML/CSS/JS statique.

## Origine du contenu

- Chapitres 3 (MongoDB) et 5 (Talend) : les exercices d'examen reprennent les vrais TP
  (TP1, TP2, TP3 MongoDB de Pr. Bentaib ; TP Talend).
- Chapitres 1, 2, 4, 6 : pas de TD dans le dossier — les items d'examen sont construits à
  partir du cours (ce ne sont pas des sujets réels).
- Le cours MongoDB annonce « agrégation et indexation » mais ces diapositives ne sont pas
  dans le PDF : seuls `$match/$group/$project/$addFields` (liste du TP2) sont couverts.

## Utilisation locale

```
python3 -m http.server 8080
```
puis ouvrir `http://localhost:8080/`.

## Contribuer

Voir `CLAUDE.md` (quel fichier toucher pour quoi).
