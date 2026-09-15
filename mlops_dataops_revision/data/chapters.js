/* Chapter registry — single source of truth for id/title/color.
   Every other data file references chapter numbers 1..6 defined here. */
window.MDO = window.MDO || {};

window.MDO.chapters = [
  { id: "ch1", num: 1, title: "Fondamentaux DataOps & MLOps",              short: "Fondamentaux",          color: "#3b82f6" },
  { id: "ch2", num: 2, title: "Pipelines agiles & orchestration",          short: "Pipelines",             color: "#8b5cf6" },
  { id: "ch3", num: 3, title: "Qualité & tests de données",                short: "Qualité données",       color: "#059669" },
  { id: "ch4", num: 4, title: "Reproductibilité & cycle de vie des modèles", short: "Reproductibilité",    color: "#d97706" },
  { id: "ch5", num: 5, title: "CI/CD, conteneurisation & déploiement",     short: "CI/CD & Déploiement",   color: "#dc2626" },
  { id: "ch6", num: 6, title: "Monitoring, gouvernance & LLMOps",          short: "Monitoring & LLMOps",   color: "#0891b2" }
];
