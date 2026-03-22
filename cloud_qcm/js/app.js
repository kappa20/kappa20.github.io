// =====================================================================
//  DATA AGGREGATION — combine all séance files into flat arrays
// =====================================================================
const ALL_SEANCES = [
  SEANCE_1, SEANCE_2, SEANCE_3, SEANCE_4, SEANCE_5, SEANCE_6,
  SEANCE_7, SEANCE_8, SEANCE_9, SEANCE_10, SEANCE_11, SEANCE_12
];

const SESSIONS = ALL_SEANCES.map(s => ({ id: s.id, title: s.title }));

const QUESTIONS = ALL_SEANCES.flatMap(s =>
  s.questions.map(q => ({ ...q, seance: s.id }))
);

const FLASHCARDS = ALL_SEANCES.flatMap(s =>
  s.flashcards.map(f => ({ ...f, seance: s.id }))
);

// =====================================================================
//  STATE
// =====================================================================
let selectedSessions = new Set(SESSIONS.map(s => s.id));
let quizQuestions = [];
let currentIdx = 0;
let score = 0;
let answered = false;
let results = [];

// =====================================================================
//  INIT
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  buildSessionsGrid();
  renderHistory();
  buildFcSessionsGrid();
});

function buildSessionsGrid() {
  const grid = document.getElementById('sessions-grid');
  grid.innerHTML = '';
  SESSIONS.forEach(s => {
    const count = QUESTIONS.filter(q => q.seance === s.id).length;
    const div = document.createElement('div');
    div.className = 'session-item' + (selectedSessions.has(s.id) ? ' selected' : '');
    div.innerHTML = `
      <input type="checkbox" id="s${s.id}" ${selectedSessions.has(s.id) ? 'checked' : ''} onchange="toggleSession(${s.id})">
      <div>
        <div class="session-num">Séance ${s.id}</div>
        <div class="session-title">${s.title}</div>
        <div style="font-size:.75rem;color:#aaa;margin-top:2px">${count} questions</div>
      </div>`;
    div.onclick = (e) => { if(e.target.tagName !== 'INPUT') toggleSession(s.id); };
    grid.appendChild(div);
  });
}

function toggleSession(id) {
  if(selectedSessions.has(id)) selectedSessions.delete(id);
  else selectedSessions.add(id);
  buildSessionsGrid();
}

function selectAll(val) {
  if(val) SESSIONS.forEach(s => selectedSessions.add(s.id));
  else selectedSessions.clear();
  buildSessionsGrid();
}

// =====================================================================
//  NAVIGATION
// =====================================================================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const idx = ['setup','quiz','history','flashcards'].indexOf(name);
  document.querySelectorAll('nav button')[idx]?.classList.add('active');
  if(name === 'history') renderHistory();
  if(name === 'flashcards') buildFcSessionsGrid();
}

// =====================================================================
//  QUIZ LOGIC
// =====================================================================
function startQuiz() {
  if(selectedSessions.size === 0) { alert('Veuillez sélectionner au moins une séance.'); return; }
  const pool = QUESTIONS.filter(q => selectedSessions.has(q.seance));
  if(pool.length === 0) { alert('Aucune question disponible pour les séances sélectionnées.'); return; }

  const nbQ = parseInt(document.getElementById('nb-questions').value);
  const order = document.getElementById('order-questions').value;

  let shuffled = order === 'random' ? shuffle([...pool]) : [...pool].sort((a,b) => a.seance - b.seance);
  quizQuestions = shuffled.slice(0, Math.min(nbQ, shuffled.length));

  currentIdx = 0; score = 0; results = []; answered = false;

  document.getElementById('nav-quiz').disabled = false;
  showPage('quiz');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = quizQuestions[currentIdx];
  const total = quizQuestions.length;
  const pct = Math.round((currentIdx / total) * 100);

  document.getElementById('q-counter').textContent = `Question ${currentIdx + 1} / ${total}`;
  const sName = SESSIONS.find(s => s.id === q.seance)?.title || '';
  document.getElementById('q-seance-info').textContent = `Séance ${q.seance} — ${sName}`;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = pct + '%';
  document.getElementById('score-display').textContent = `Score: ${score}`;

  document.getElementById('q-meta').innerHTML = `
    <span class="badge badge-seance">Séance ${q.seance}</span>
    <span class="badge ${q.type === 'multi' ? 'badge-multi' : 'badge-type'}">${q.type === 'multi' ? 'Choix multiples' : 'Choix unique'}</span>`;

  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-hint').textContent = q.type === 'multi' ? '(Plusieurs réponses possibles — cochez toutes les bonnes réponses)' : '(Une seule bonne réponse)';

  const container = document.getElementById('options-container');
  const letters = ['A','B','C','D','E','F'];
  container.innerHTML = '';
  q.options.forEach((opt, i) => {
    const item = document.createElement('div');
    item.className = 'option-item';
    item.id = `opt-${i}`;
    item.innerHTML = `
      <input type="${q.type === 'multi' ? 'checkbox' : 'radio'}" name="opt" id="input-${i}" value="${i}" onchange="onSelect(${i})">
      <div class="option-letter">${letters[i]}</div>
      <div class="option-text">${opt}</div>`;
    item.onclick = (e) => { if(e.target.tagName !== 'INPUT') { document.getElementById(`input-${i}`).click(); } };
    container.appendChild(item);
  });

  document.getElementById('explanation').className = '';
  document.getElementById('explanation').textContent = '';
  document.getElementById('btn-validate').style.display = 'inline-block';
  document.getElementById('btn-next').style.display = 'none';
}

function onSelect(i) {
  const q = quizQuestions[currentIdx];
  if(q.type === 'single') {
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
  }
  const item = document.getElementById(`opt-${i}`);
  const input = document.getElementById(`input-${i}`);
  if(q.type === 'multi') {
    item.classList.toggle('selected', input.checked);
  } else {
    item.classList.add('selected');
  }
}

function getSelected() {
  const inputs = document.querySelectorAll('#options-container input:checked');
  return Array.from(inputs).map(i => parseInt(i.value));
}

function validateAnswer() {
  if(answered) return;
  const q = quizQuestions[currentIdx];
  const selected = getSelected();
  if(selected.length === 0) { alert('Veuillez sélectionner au moins une réponse.'); return; }

  answered = true;
  const correct = q.correct.slice().sort();
  const sel = selected.slice().sort();
  const isCorrect = JSON.stringify(correct) === JSON.stringify(sel);
  if(isCorrect) score++;

  q.options.forEach((_, i) => {
    const item = document.getElementById(`opt-${i}`);
    const isSelectedByUser = selected.includes(i);
    const isCorrectAnswer = q.correct.includes(i);

    if(isCorrectAnswer && isSelectedByUser) item.classList.add('correct');
    else if(!isCorrectAnswer && isSelectedByUser) item.classList.add('incorrect');
    else if(isCorrectAnswer && !isSelectedByUser) item.classList.add('missed');
    item.classList.remove('selected');
  });

  document.getElementById('explanation').textContent = '💡 ' + q.explanation;
  document.getElementById('explanation').className = 'show';

  results.push({ q, selected, correct: q.correct, isCorrect });

  document.getElementById('btn-validate').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
  document.getElementById('btn-next').textContent = currentIdx + 1 < quizQuestions.length ? 'Suivant →' : 'Voir les résultats';
  document.getElementById('score-display').textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentIdx++;
  if(currentIdx < quizQuestions.length) {
    document.getElementById('question-card').style.animation = 'none';
    requestAnimationFrame(() => {
      document.getElementById('question-card').style.animation = '';
      renderQuestion();
    });
  } else {
    showResults();
  }
}

function quitQuiz() {
  if(confirm('Abandonner le quiz ? La progression sera perdue.')) {
    showPage('setup');
  }
}

// =====================================================================
//  RESULTS
// =====================================================================
function showResults() {
  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);
  const circle = document.getElementById('res-circle');
  circle.style.borderColor = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warn)' : 'var(--fail)';
  document.getElementById('res-score').textContent = score;
  document.getElementById('res-total').textContent = '/ ' + total;
  document.getElementById('res-pct').textContent = pct + '% de bonnes réponses';

  let msg = pct >= 80 ? '🎉 Excellent ! Très bonne maîtrise du cours !' :
            pct >= 60 ? '👍 Bien ! Continuez vos révisions.' :
            pct >= 40 ? '📚 Des lacunes à combler, révisez les séances concernées.' :
            '⚠️ Des révisions importantes sont nécessaires.';
  document.getElementById('res-message').textContent = msg;

  const details = document.getElementById('result-details');
  details.innerHTML = '';
  results.forEach((r, i) => {
    const sName = SESSIONS.find(s => s.id === r.q.seance)?.title || '';
    const letters = ['A','B','C','D','E','F'];
    const correctLabels = r.correct.map(i => letters[i] + '. ' + r.q.options[i]).join(', ');
    const selectedLabels = r.selected.map(i => letters[i] + '. ' + r.q.options[i]).join(', ');
    details.innerHTML += `
      <div class="result-row ${r.isCorrect ? 'rr-correct' : 'rr-wrong'}">
        <div class="result-icon">${r.isCorrect ? '✅' : '❌'}</div>
        <div>
          <div class="result-q">Q${i+1}. <span style="font-size:.8rem;color:#888">[Séance ${r.q.seance} – ${sName}]</span></div>
          <div class="result-q" style="margin-top:4px">${r.q.text}</div>
          <div class="result-ans" style="margin-top:6px">
            ${!r.isCorrect ? `<span style="color:var(--fail)">Votre réponse : ${selectedLabels}</span><br>` : ''}
            <span style="color:var(--success)">Bonne réponse : ${correctLabels}</span>
          </div>
        </div>
      </div>`;
  });

  const sessions = [...new Set(quizQuestions.map(q => q.seance))].sort();
  saveHistory({ score, total, pct, sessions, date: new Date().toISOString() });

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-results').classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
}

// =====================================================================
//  HISTORY
// =====================================================================
function saveHistory(entry) {
  const h = JSON.parse(localStorage.getItem('qcm_history') || '[]');
  h.unshift(entry);
  if(h.length > 50) h.pop();
  localStorage.setItem('qcm_history', JSON.stringify(h));
}

function renderHistory() {
  const h = JSON.parse(localStorage.getItem('qcm_history') || '[]');
  const list = document.getElementById('history-list');
  if(!list) return;
  if(h.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>Aucun quiz passé pour l'instant.</div></div>`;
    return;
  }
  list.innerHTML = h.map((entry) => {
    const date = new Date(entry.date);
    const dateStr = date.toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
    const fillClass = entry.pct >= 70 ? '' : entry.pct >= 50 ? 'medium' : 'low';
    const sessions = (entry.sessions || []).map(s => `S${s}`).join(', ');
    return `<div class="history-item">
      <div class="hist-score">${entry.score}/${entry.total}</div>
      <div class="hist-info">
        <div style="font-weight:600">${entry.pct}% — ${getMention(entry.pct)}</div>
        <div class="hist-date">${dateStr}</div>
        <div class="hist-sessions">Séances : ${sessions || 'N/A'}</div>
      </div>
      <div class="hist-bar-wrap">
        <div style="font-size:.75rem;text-align:right;color:#888">${entry.pct}%</div>
        <div class="hist-bar"><div class="hist-fill ${fillClass}" style="width:${entry.pct}%"></div></div>
      </div>
    </div>`;
  }).join('');
}

function getMention(pct) {
  if(pct >= 80) return '🏆 Excellent';
  if(pct >= 60) return '👍 Bien';
  if(pct >= 40) return '📚 À améliorer';
  return '⚠️ Insuffisant';
}

function clearHistory() {
  if(confirm('Effacer tout l\'historique ?')) {
    localStorage.removeItem('qcm_history');
    renderHistory();
  }
}

// =====================================================================
//  FLASHCARD LOGIC
// =====================================================================
let fcSelectedSeance = null;
let fcCards = [];
let fcIndex = 0;
let fcKnown = new Set();
let fcReview = new Set();
let fcFlipped = false;

function buildFcSessionsGrid() {
  const grid = document.getElementById('fc-sessions-grid');
  if(!grid) return;
  grid.innerHTML = '';
  SESSIONS.forEach(s => {
    const count = FLASHCARDS.filter(f => f.seance === s.id).length;
    const btn = document.createElement('button');
    btn.className = 'fc-session-btn' + (fcSelectedSeance === s.id ? ' active' : '');
    btn.innerHTML = `<div class="s-num">Séance ${s.id}</div><div class="s-title">${s.title}</div><div class="s-count">${count} cartes</div>`;
    btn.onclick = () => { fcSelectedSeance = s.id; buildFcSessionsGrid(); };
    grid.appendChild(btn);
  });
}

function startFlashcards() {
  if(!fcSelectedSeance) { alert('Veuillez sélectionner une séance.'); return; }
  const pool = FLASHCARDS.filter(f => f.seance === fcSelectedSeance);
  if(pool.length === 0) { alert('Aucune flashcard disponible pour cette séance.'); return; }
  fcCards = shuffle([...pool]);
  fcIndex = 0; fcKnown = new Set(); fcReview = new Set(); fcFlipped = false;
  document.getElementById('fc-setup').style.display = 'none';
  document.getElementById('fc-trainer').style.display = 'block';
  document.getElementById('fc-nav').style.display = '';
  fcRestoreCardHTML();
  renderFlashcard();
}

function fcRestoreCardHTML() {
  document.getElementById('fc-card-wrap').innerHTML = `
    <div class="fc-card" id="fc-card">
      <div class="fc-face fc-front">
        <div class="fc-badge-front" id="fc-card-badge"></div>
        <div class="fc-term" id="fc-card-term"></div>
        <div class="fc-hint">Cliquer pour voir la définition</div>
      </div>
      <div class="fc-face fc-back">
        <div class="fc-def-label">Définition</div>
        <div class="fc-def" id="fc-card-def"></div>
      </div>
    </div>`;
}

function renderFlashcard() {
  if(fcIndex >= fcCards.length) { showFcDone(); return; }
  const card = fcCards[fcIndex];
  const sName = SESSIONS.find(s => s.id === card.seance)?.title || '';
  document.getElementById('fc-counter').textContent = `Carte ${fcIndex + 1} / ${fcCards.length}`;
  document.getElementById('fc-seance-label').textContent = `Séance ${card.seance} — ${sName}`;
  document.getElementById('fc-card-badge').textContent = `Séance ${card.seance}`;
  document.getElementById('fc-card-term').textContent = card.term;
  document.getElementById('fc-card-def').textContent = card.def;
  const el = document.getElementById('fc-card');
  if(el) el.classList.remove('flipped');
  fcFlipped = false;
  document.getElementById('fc-prev').disabled = fcIndex === 0;
  document.getElementById('fc-next').disabled = false;
  updateFcStats();
}

function flipCard() {
  const el = document.getElementById('fc-card');
  if(!el) return;
  fcFlipped = !fcFlipped;
  el.classList.toggle('flipped', fcFlipped);
}

function markCard(type) {
  if(type === 'known') { fcKnown.add(fcIndex); fcReview.delete(fcIndex); }
  else { fcReview.add(fcIndex); fcKnown.delete(fcIndex); }
  updateFcStats();
  fcNext();
}

function fcNext() {
  if(fcIndex < fcCards.length - 1) {
    fcIndex++;
    renderFlashcard();
  } else {
    showFcDone();
  }
}

function fcPrev() {
  if(fcIndex > 0) { fcIndex--; renderFlashcard(); }
}

function updateFcStats() {
  const remain = fcCards.length - fcKnown.size - fcReview.size;
  document.getElementById('fc-known-count').textContent = fcKnown.size;
  document.getElementById('fc-review-count').textContent = fcReview.size;
  document.getElementById('fc-remain-count').textContent = Math.max(0, remain);
}

function showFcDone() {
  document.getElementById('fc-nav').style.display = 'none';
  document.getElementById('fc-counter').textContent = 'Session terminée';
  document.getElementById('fc-seance-label').textContent = '';
  const reviewCount = fcReview.size;
  document.getElementById('fc-card-wrap').innerHTML = `
    <div class="fc-done-msg">
      <h3>Toutes les cartes parcourues !</h3>
      <p style="color:#888;margin-bottom:24px">${fcKnown.size} connues &nbsp;·&nbsp; ${reviewCount} à revoir &nbsp;·&nbsp; ${fcCards.length - fcKnown.size - reviewCount} non notées</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="fcRestart('all')">Recommencer tout</button>
        ${reviewCount > 0 ? `<button class="btn btn-review" onclick="fcRestart('review')">Revoir uniquement (${reviewCount})</button>` : ''}
        <button class="btn btn-outline" onclick="exitFlashcards()">Changer de séance</button>
      </div>
    </div>`;
}

function fcRestart(mode) {
  const allCards = FLASHCARDS.filter(f => f.seance === fcSelectedSeance);
  if(mode === 'review') {
    const reviewIdx = [...fcReview];
    fcCards = reviewIdx.map(i => fcCards[i]);
  } else {
    fcCards = shuffle([...allCards]);
  }
  fcIndex = 0; fcKnown = new Set(); fcReview = new Set(); fcFlipped = false;
  document.getElementById('fc-nav').style.display = '';
  fcRestoreCardHTML();
  renderFlashcard();
}

function exitFlashcards() {
  document.getElementById('fc-setup').style.display = '';
  document.getElementById('fc-trainer').style.display = 'none';
  document.getElementById('fc-nav').style.display = '';
  buildFcSessionsGrid();
}

// =====================================================================
//  UTILS
// =====================================================================
function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
