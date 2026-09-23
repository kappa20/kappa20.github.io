/* Chapter registry — single source of truth for id/title/color.
   Every other data file references chapter numbers 1..6 defined here. */
window.DE = window.DE || {};

window.DE.chapters = [
  { id: "ch1", num: 1, title: "Big Data & panorama NoSQL",                    short: "Big Data & NoSQL",     color: "#3b82f6" },
  { id: "ch2", num: 2, title: "MongoDB : architecture & modélisation",        short: "MongoDB : modèle",     color: "#8b5cf6" },
  { id: "ch3", num: 3, title: "MongoDB : CRUD, requêtes & TP1-3",             short: "MongoDB : CRUD/TP",    color: "#059669" },
  { id: "ch4", num: 4, title: "Cassandra",                                    short: "Cassandra",            color: "#d97706" },
  { id: "ch5", num: 5, title: "Data Warehouse, BI & ETL/ELT (TP Talend)",     short: "DW, BI & ETL",         color: "#dc2626" },
  { id: "ch6", num: 6, title: "Modélisation multidimensionnelle",             short: "Modèle dimensionnel",  color: "#0891b2" }
];
