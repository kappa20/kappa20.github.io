#!/usr/bin/env node
/* build/verify.js — sanity check for data/*.js (zero dependencies).
 * Loads every data file in the same order index.html does, inside a vm context,
 * then asserts schema/counts/id-uniqueness/no dangling mindmap parentId refs.
 * Run: node build/verify.js */
"use strict";
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const NUMS = [1,2,3,4,5,6];

let errors = [];
let warnings = [];
function fail(msg){ errors.push(msg); }
function warn(msg){ warnings.push(msg); }

// ---- 1. control-char scan + node --check on every JS file ----
function walk(dir){
  let out = [];
  for(const f of fs.readdirSync(dir)){
    const p = path.join(dir, f);
    if(fs.statSync(p).isDirectory()) out = out.concat(walk(p));
    else if(f.endsWith('.js')) out.push(p);
  }
  return out;
}
const jsFiles = walk(DATA_DIR).concat(walk(path.join(ROOT,'app')));
jsFiles.forEach(f=>{
  const raw = fs.readFileSync(f, 'utf8');
  // eslint-disable-next-line no-control-regex
  if(/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(raw)) fail(`Control character found in ${path.relative(ROOT,f)}`);
  try{ execFileSync(process.execPath, ['--check', f], {stdio:'pipe'}); }
  catch(e){ fail(`node --check failed for ${path.relative(ROOT,f)}: ${e.stderr}`); }
});

// ---- 2. load all data files in index.html order inside a vm context ----
const sandbox = { window: {}, console };
vm.createContext(sandbox);
function loadFile(rel){
  const p = path.join(ROOT, rel);
  if(!fs.existsSync(p)){ fail(`Missing file: ${rel}`); return; }
  const code = fs.readFileSync(p, 'utf8');
  try{ vm.runInContext(code, sandbox, { filename: rel }); }
  catch(e){ fail(`Error evaluating ${rel}: ${e.message}`); }
}
loadFile('data/chapters.js');
NUMS.forEach(n=>loadFile(`data/flashcards-ch${n}.js`));
NUMS.forEach(n=>loadFile(`data/quiz-ch${n}.js`));
NUMS.forEach(n=>loadFile(`data/exam-ch${n}.js`));
NUMS.forEach(n=>loadFile(`data/mindmap-ch${n}.js`));

const MDO = sandbox.window.MDO || {};

// ---- 3. schema/count checks ----
if(!Array.isArray(MDO.chapters) || MDO.chapters.length !== 6) fail(`window.MDO.chapters must have 6 entries (found ${MDO.chapters && MDO.chapters.length})`);

const allIds = new Set();
function checkId(id, re, label){
  if(!id || typeof id !== 'string') { fail(`${label}: missing/invalid id`); return; }
  if(!re.test(id)) fail(`${label}: id "${id}" doesn't match ${re}`);
  if(allIds.has(id)) fail(`Duplicate id across all data: "${id}"`);
  allIds.add(id);
}

const fcCounts = {}, quizMcqCounts = {}, quizOpenCounts = {};
(MDO.flashcards || []).forEach(c=>{
  checkId(c.id, /^fc-ch[1-6]-/, 'flashcard');
  if(!c.chapter || !c.front || !c.back) fail(`flashcard ${c.id}: missing required field (chapter/front/back)`);
  fcCounts[c.chapter] = (fcCounts[c.chapter]||0)+1;
});
(MDO.quiz || []).forEach(q=>{
  checkId(q.id, /^q-ch[1-6]-(mcq|open)-/, 'quiz item');
  if(q.type==='mcq'){
    if(!Array.isArray(q.choices) || q.choices.length<2 || typeof q.answer!=='number') fail(`quiz ${q.id}: malformed mcq`);
    quizMcqCounts[q.chapter] = (quizMcqCounts[q.chapter]||0)+1;
  } else if(q.type==='open'){
    if(!q.model) fail(`quiz ${q.id}: open question missing model answer`);
    quizOpenCounts[q.chapter] = (quizOpenCounts[q.chapter]||0)+1;
  } else fail(`quiz ${q.id}: unknown type "${q.type}"`);
});

NUMS.forEach(n=>{
  if((fcCounts[n]||0) < 20) warn(`CH${n}: only ${fcCounts[n]||0} flashcards (target >=25)`);
  if((quizMcqCounts[n]||0) !== 8) fail(`CH${n}: quiz mcq count is ${quizMcqCounts[n]||0}, expected exactly 8`);
  if((quizOpenCounts[n]||0) < 5 || (quizOpenCounts[n]||0) > 8) warn(`CH${n}: quiz open count is ${quizOpenCounts[n]||0}, expected 5-8`);
});

const exams = MDO.exams || {};
NUMS.forEach(n=>{
  const ex = exams['ch'+n];
  if(!ex){ fail(`Missing window.MDO.exams.ch${n}`); return; }
  const c = k => (ex[k]||[]).length;
  if(c('qcm') !== 8) fail(`exam ch${n}: qcm count is ${c('qcm')}, expected exactly 8`);
  if(c('questions')<5 || c('questions')>8) warn(`exam ch${n}: questions count is ${c('questions')}, expected 5-8`);
  if(c('vocab')<8 || c('vocab')>12) warn(`exam ch${n}: vocab count is ${c('vocab')}, expected 8-12`);
  if(c('analysis')<2 || c('analysis')>5) warn(`exam ch${n}: analysis count is ${c('analysis')}, expected 2-5`);
  if(!ex.case || !Array.isArray(ex.case.tasks)) fail(`exam ch${n}: missing case.tasks`);
  else if(ex.case.tasks.length<4 || ex.case.tasks.length>6) warn(`exam ch${n}: case.tasks count is ${ex.case.tasks.length}, expected 4-6`);
  (ex.qcm||[]).forEach(it=>checkId(it.id, /^e-ch[1-6]-qcm-/, `exam ch${n} qcm`));
  (ex.questions||[]).forEach(it=>checkId(it.id, /^e-ch[1-6]-q-/, `exam ch${n} question`));
  (ex.vocab||[]).forEach(it=>checkId(it.id, /^e-ch[1-6]-v-/, `exam ch${n} vocab`));
  (ex.analysis||[]).forEach(it=>checkId(it.id, /^e-ch[1-6]-a-/, `exam ch${n} analysis`));
  ((ex.case&&ex.case.tasks)||[]).forEach(it=>checkId(it.id, /^e-ch[1-6]-c-/, `exam ch${n} case task`));
});

const mindmaps = MDO.mindmaps || {};
NUMS.forEach(n=>{
  const nodes = mindmaps['ch'+n];
  if(!Array.isArray(nodes) || !nodes.length){ fail(`Missing/empty window.MDO.mindmaps.ch${n}`); return; }
  if(nodes.length < 20 || nodes.length > 40) warn(`mindmap ch${n}: ${nodes.length} nodes, expected 20-40`);
  const ids = new Set(nodes.map(x=>x.id));
  nodes.forEach(x=>checkId(x.id, new RegExp('^ch'+n+'-'), `mindmap ch${n} node`));
  const roots = nodes.filter(x=>x.parentId===null);
  if(roots.length !== 1) fail(`mindmap ch${n}: expected exactly 1 root (parentId:null), found ${roots.length}`);
  nodes.forEach(x=>{
    if(x.parentId!==null && !ids.has(x.parentId)) fail(`mindmap ch${n} node "${x.id}": parentId "${x.parentId}" not found in same chapter`);
  });
  // cycle/orphan check: DFS from root must visit every node exactly once
  if(roots.length===1){
    const childrenOf = {}; nodes.forEach(x=>childrenOf[x.id]=[]);
    nodes.forEach(x=>{ if(x.parentId && childrenOf[x.parentId]) childrenOf[x.parentId].push(x.id); });
    const seen = new Set(); const stack=[roots[0].id];
    while(stack.length){ const id=stack.pop(); if(seen.has(id)) continue; seen.add(id); (childrenOf[id]||[]).forEach(c=>stack.push(c)); }
    if(seen.size !== nodes.length) fail(`mindmap ch${n}: ${nodes.length-seen.size} node(s) unreachable from root (orphan or cycle)`);
  }
});

// ---- report ----
console.log('\n=== Résumé par chapitre ===');
console.log('CH | flashcards | quiz mcq | quiz open | exam qcm/q/vocab/analysis/case | mindmap nodes');
NUMS.forEach(n=>{
  const ex = exams['ch'+n] || {};
  const c = k => (ex[k]||[]).length;
  const mm = (mindmaps['ch'+n]||[]).length;
  const caseTasks = (ex.case && ex.case.tasks) ? ex.case.tasks.length : 0;
  console.log(` ${n} | ${String(fcCounts[n]||0).padEnd(10)} | ${String(quizMcqCounts[n]||0).padEnd(8)} | ${String(quizOpenCounts[n]||0).padEnd(9)} | ${c('qcm')}/${c('questions')}/${c('vocab')}/${c('analysis')}/${caseTasks} | ${mm}`);
});

if(warnings.length){
  console.log('\n=== Avertissements ===');
  warnings.forEach(w=>console.log('  ⚠ '+w));
}
if(errors.length){
  console.log('\n=== Erreurs ===');
  errors.forEach(e=>console.log('  ✗ '+e));
  console.log(`\n${errors.length} erreur(s). Échec.`);
  process.exit(1);
} else {
  console.log(`\nOK — aucune erreur (${warnings.length} avertissement(s)).`);
}
