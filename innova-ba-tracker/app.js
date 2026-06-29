const STORAGE_KEY = 'innova-ba-tracker';

const state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) { /* ignore */ }
  return {
    checks: {},
    starNotes: {},
    skillLevels: {},
    notes: [],
    streak: 0,
    lastCompletedDate: null,
    dailyChecks: {},
    dailyDate: null,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateStats();
}

function updateStats() {
  const allCheckIds = getAllCheckIds();
  const done = allCheckIds.filter(id => state.checks[id]).length;
  const pct = allCheckIds.length ? Math.round((done / allCheckIds.length) * 100) : 0;
  document.getElementById('overallProgress').textContent = pct + '%';
  document.getElementById('streakCount').textContent = state.streak;
}

function getAllCheckIds() {
  const groups = [
    'telefon', 'ik-oncesi', 'teknik-hazirlik', 'mulakat-gunu',
    'temelYetkinlikler', 'tercihYetkinlikler', 'sorumluluklar',
  ];
  return groups.flatMap(g => APP_DATA[g].map(item => item.id));
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}

function renderChecklists() {
  const groups = {
    telefon: APP_DATA.telefon,
    'ik-oncesi': APP_DATA['ik-oncesi'],
    'teknik-hazirlik': APP_DATA['teknik-hazirlik'],
    'mulakat-gunu': APP_DATA['mulakat-gunu'],
    temelYetkinlikler: APP_DATA.temelYetkinlikler,
    tercihYetkinlikler: APP_DATA.tercihYetkinlikler,
    sorumluluklar: APP_DATA.sorumluluklar,
    sabah: APP_DATA.sabah,
    ogle: APP_DATA.ogle,
    'ogleden-sonra': APP_DATA['ogleden-sonra'],
    'gun-sonu': APP_DATA['gun-sonu'],
  };

  const today = getToday();
  if (state.dailyDate !== today) {
    state.dailyChecks = {};
    state.dailyDate = today;
    saveState();
  }

  Object.entries(groups).forEach(([group, items]) => {
    const ul = document.querySelector(`.checklist[data-group="${group}"]`);
    if (!ul) return;

    const isDaily = ul.classList.contains('daily');
    ul.innerHTML = items.map(item => {
      const checked = isDaily
        ? state.dailyChecks[item.id]
        : state.checks[item.id];
      return `
        <li class="${checked ? 'done' : ''}">
          <input type="checkbox" data-id="${item.id}" data-daily="${isDaily}" ${checked ? 'checked' : ''}>
          <span>${item.text}</span>
        </li>
      `;
    }).join('');

    ul.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const id = cb.dataset.id;
        const isDailyCheck = cb.dataset.daily === 'true';
        if (isDailyCheck) {
          state.dailyChecks[id] = cb.checked;
        } else {
          state.checks[id] = cb.checked;
        }
        cb.closest('li').classList.toggle('done', cb.checked);
        saveState();
      });
    });
  });
}

function renderStarScenarios() {
  const container = document.getElementById('starScenarios');
  container.innerHTML = APP_DATA.starScenarios.map(s => `
    <div class="star-item">
      <label for="${s.id}">${s.title}</label>
      <textarea id="${s.id}" placeholder="${s.placeholder}">${state.starNotes[s.id] || ''}</textarea>
    </div>
  `).join('');

  container.querySelectorAll('textarea').forEach(ta => {
    ta.addEventListener('input', () => {
      state.starNotes[ta.id] = ta.value;
      saveState();
    });
  });
}

function renderInterviewQuestions() {
  const container = document.getElementById('interviewQuestions');
  container.innerHTML = APP_DATA.interviewQuestions.map((item, i) => `
    <div class="accordion-item" data-index="${i}">
      <button class="accordion-q">${item.q}</button>
      <div class="accordion-a">${item.a}</div>
    </div>
  `).join('');

  container.querySelectorAll('.accordion-q').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.accordion-item').classList.toggle('open');
    });
  });
}

function renderWeekFocus() {
  const container = document.getElementById('weekFocus');
  const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const today = days[new Date().getDay()];

  container.innerHTML = APP_DATA.weekFocus.map(w => `
    <div class="week-day" style="${w.day === today ? 'background:rgba(59,130,246,0.08);border-radius:8px;padding:10px 12px;' : ''}">
      <strong>${w.day}${w.day === today ? ' ← Bugün' : ''}</strong>
      <span>${w.focus}</span>
    </div>
  `).join('');
}

const LEVELS = ['Başlangıç', 'Orta', 'İyi', 'Uzman'];
const LEVEL_PCT = [25, 50, 75, 100];

function renderSkills(filter = 'all') {
  const container = document.getElementById('skillsGrid');
  const skills = filter === 'all'
    ? APP_DATA.skills
    : APP_DATA.skills.filter(s => s.priority === filter);

  container.innerHTML = skills.map(skill => {
    const level = state.skillLevels[skill.id] ?? 0;
    const pct = LEVEL_PCT[level];
    return `
      <div class="skill-card" data-priority="${skill.priority}">
        <div class="skill-header">
          <h4>${skill.name}</h4>
          <span class="badge ${skill.priority}">${skill.priority}</span>
        </div>
        <div class="skill-progress">
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          <span class="progress-label">${LEVELS[level]} — %${pct}</span>
        </div>
        ${skill.tools.length ? `<div class="skill-tools"><strong>Araçlar:</strong> ${skill.tools.join(', ')}</div>` : ''}
        <div class="skill-topics"><strong>Konular:</strong> ${skill.topics.join(', ')}</div>
        <div class="skill-level">
          ${LEVELS.map((l, i) => `
            <button class="level-btn ${i === level ? 'active' : ''}" data-skill="${skill.id}" data-level="${i}">${l}</button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.skillLevels[btn.dataset.skill] = parseInt(btn.dataset.level, 10);
      saveState();
      renderSkills(filter);
    });
  });
}

function renderGlossary() {
  const container = document.getElementById('glossary');
  if (!container || !APP_DATA.glossary) return;
  container.innerHTML = APP_DATA.glossary.map(g => `
    <div class="glossary-item">
      <strong>${g.term}</strong>
      <span>${g.def}</span>
    </div>
  `).join('');
}

function renderResources() {
  const container = document.getElementById('resourcesList');
  container.innerHTML = APP_DATA.resources.map(r => `
    <div class="resource-item">
      <a href="${r.url}" target="_blank" rel="noopener">${r.name}</a>
      <span class="resource-type">${r.type}</span>
    </div>
  `).join('');
}

function renderNotes() {
  const container = document.getElementById('notesList');
  if (!state.notes.length) {
    container.innerHTML = '<p class="hint">Henüz not eklenmedi.</p>';
    return;
  }

  const categoryLabels = { mulakat: 'Mülakat', proje: 'Proje', ogrenme: 'Öğrenme', genel: 'Genel' };

  container.innerHTML = [...state.notes].reverse().map((note, i) => `
    <div class="note-item">
      <div class="note-meta">
        <h4>${escapeHtml(note.title)}</h4>
        <span class="note-category">${categoryLabels[note.category] || note.category}</span>
      </div>
      <div class="note-date">${note.date}</div>
      <div class="note-body">${escapeHtml(note.content)}</div>
      <button class="note-delete" data-index="${state.notes.length - 1 - i}">Sil</button>
    </div>
  `).join('');

  container.querySelectorAll('.note-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      state.notes.splice(parseInt(btn.dataset.index, 10), 1);
      saveState();
      renderNotes();
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function initNotes() {
  document.getElementById('addNote').addEventListener('click', () => {
    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();
    const category = document.getElementById('noteCategory').value;

    if (!title || !content) return;

    state.notes.push({
      title,
      content,
      category,
      date: new Date().toLocaleString('tr-TR'),
    });

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    saveState();
    renderNotes();
  });
}

function initDailyActions() {
  document.getElementById('resetDaily').addEventListener('click', () => {
    state.dailyChecks = {};
    saveState();
    renderChecklists();
  });

  document.getElementById('completeDay').addEventListener('click', () => {
    const today = getToday();
    const dailyIds = [
      ...APP_DATA.sabah,
      ...APP_DATA.ogle,
      ...APP_DATA['ogleden-sonra'],
      ...APP_DATA['gun-sonu'],
    ].map(i => i.id);

    const allDone = dailyIds.every(id => state.dailyChecks[id]);
    if (!allDone) {
      alert('Tüm günlük rutin maddelerini tamamlamadan günü kapatamazsınız.');
      return;
    }

    if (state.lastCompletedDate) {
      const last = new Date(state.lastCompletedDate);
      const now = new Date(today);
      const diff = (now - last) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        state.streak += 1;
      } else if (diff > 1) {
        state.streak = 1;
      }
    } else {
      state.streak = 1;
    }

    state.lastCompletedDate = today;
    saveState();
    alert(`Tebrikler! ${state.streak} günlük seriniz var.`);
  });
}

function initSkillFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    });
  });
}

function initTodayLabel() {
  const label = document.getElementById('todayLabel');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  label.textContent = new Date().toLocaleDateString('tr-TR', options);
}

function init() {
  initTabs();
  renderChecklists();
  renderStarScenarios();
  renderInterviewQuestions();
  renderWeekFocus();
  renderSkills();
  renderResources();
  renderGlossary();
  renderNotes();
  initNotes();
  initDailyActions();
  initSkillFilters();
  initTodayLabel();
  updateStats();
}

document.addEventListener('DOMContentLoaded', init);
