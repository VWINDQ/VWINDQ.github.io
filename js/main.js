const PROJECTS = {
  room: {
    number: '01', label: 'social systems', title: 'RoomMatch',
    deck: 'A Tinder-inspired roommate matching platform.',
    notes: [
      ['The question', 'How might people discover a compatible roommate through a familiar matching flow?'],
      ['What exists', 'A roommate matching platform. Specific features, system design, and database relationships: <span class="todo">TODO</span>.'],
      ['My role / stack / learning', '<span class="todo">TODO — add verified details and repository link.</span>']
    ],
    visual: '<div class="profile-card profile-back">Find your fit</div><div class="profile-card profile-front"><div class="profile-avatar">RM</div><div class="profile-rule"></div><div class="profile-rule short"></div><div class="profile-actions">× <span>♡</span></div></div>',
    artLabel: 'Illustrative layered roommate profile cards', caption: 'Interface study / illustrative'
  },
  detective: {
    number: '02', label: 'investigation', title: 'Digital Detective',
    deck: 'An OSINT investigation tool built for cybersecurity and hackathon use.',
    notes: [
      ['The question', 'How can scattered public information become an investigation someone can follow?'],
      ['What exists', 'An OSINT investigation platform. Exact workflow and confidence indicators: <span class="todo">TODO</span>.'],
      ['My role / stack / learning', '<span class="todo">TODO — add verified details and repository link.</span>']
    ],
    visual: '<svg viewBox="0 0 700 390" aria-hidden="true"><path d="M105 190 320 80 580 170 430 310 105 190M320 80 430 310M580 170 235 330"/><circle cx="105" cy="190" r="22"/><circle cx="320" cy="80" r="22"/><circle cx="580" cy="170" r="22"/><circle cx="430" cy="310" r="22"/><circle cx="235" cy="330" r="22"/></svg><span class="node-label label-source">SOURCE</span><span class="node-label label-lead">LEAD</span>',
    artLabel: 'Illustrative investigation connections between source nodes', caption: 'Evidence map / illustrative'
  },
  cinema: {
    number: '03', label: 'systems', title: 'Cinema Booking System',
    deck: 'A booking system in C using POSIX message queues, running with Docker.',
    notes: [
      ['The question', 'How do separate processes coordinate a booking request?'],
      ['System', 'C · POSIX message queues · Docker. Exact architecture and edge cases: <span class="todo">TODO</span>.'],
      ['My role / learning', '<span class="todo">TODO — add verified details and repository link.</span>']
    ],
    visual: '<div class="system-diagram"><span>CLIENT</span><i>→</i><span>POSIX<br>QUEUE</span><i>→</i><span>SERVER</span></div>',
    artLabel: 'Illustrative client to message queue to server architecture', caption: 'System diagram / conceptual'
  },
  graph: {
    number: '04', label: 'algorithms', title: 'Graph Algorithm Visualizer',
    deck: 'Graph traversal made visible, one step at a time.',
    notes: [
      ['What exists', 'A step-by-step DFS and BFS web app with sample graphs.'],
      ['System', 'Python · Streamlit · NetworkX · streamlit-agraph. The browser demo above is a separate illustration; Dijkstra is included there as an exploration.'],
      ['Repository / learning', 'Individual role and technical challenge: <span class="todo">TODO</span>.<br><a href="https://github.com/VWINDQ/CSS113-Project" target="_blank" rel="noopener noreferrer">View repository ↗</a>']
    ],
    visual: '<div class="graph-controls" role="group" aria-label="Choose graph algorithm"><button type="button" data-algorithm="bfs">Run BFS</button><button type="button" data-algorithm="dfs">Run DFS</button><button type="button" data-algorithm="dijkstra">Run Dijkstra</button></div><svg viewBox="0 0 700 390" role="img" aria-label="Interactive graph with nodes A through F"><g class="graph-edges"><path d="M110 200 270 85M110 200 270 305M270 85 450 120M270 85 450 285M270 305 450 285M450 120 590 200M450 285 590 200"/></g><g class="graph-weights"><text x="190" y="133">2</text><text x="190" y="267">4</text><text x="360" y="92">3</text><text x="360" y="190">5</text><text x="360" y="308">1</text><text x="520" y="151">4</text><text x="520" y="254">2</text></g><g class="graph-nodes"><g data-node="A"><circle cx="110" cy="200" r="25"/><text x="110" y="200">A</text></g><g data-node="B"><circle cx="270" cy="85" r="25"/><text x="270" y="85">B</text></g><g data-node="C"><circle cx="270" cy="305" r="25"/><text x="270" y="305">C</text></g><g data-node="D"><circle cx="450" cy="120" r="25"/><text x="450" y="120">D</text></g><g data-node="E"><circle cx="450" cy="285" r="25"/><text x="450" y="285">E</text></g><g data-node="F"><circle cx="590" cy="200" r="25"/><text x="590" y="200">F</text></g></g></svg><p class="graph-status" aria-live="polite">Select an algorithm to trace the graph.</p>',
    artLabel: 'Interactive graph with traversal controls', caption: 'Interactive study / simplified graph'
  },
  ctf: {
    number: '05', label: 'security', title: 'CTF Archive',
    deck: 'A place for security experiments and challenge writeups.',
    notes: [
      ['Archive status', 'Challenge list, categories, tools, and writeups: <span class="todo">TODO</span>.'],
      ['What belongs here', 'Documented experiments and learning notes, without publishing challenge flags.'],
      ['Repository', '<span class="todo">TODO — add link when available.</span>']
    ],
    visual: '<div class="archive-lines"><span>ENTRY / 001</span><span>QUESTION ________</span><span>METHOD / inspect → test → note</span><span>RESULT [ REDACTED ]</span></div>',
    artLabel: 'Illustrative redacted research notes', caption: 'Research archive / illustrative'
  },
  database: {
    number: '06', label: 'education', title: 'Database Visual Lab',
    deck: 'An interactive Thai-language database learning website.',
    notes: [
      ['The question', 'How can database relationships be easier to see and understand?'],
      ['What exists', 'An interactive Thai-language learning site with visualization. Specific lessons and interactions: <span class="todo">TODO</span>.'],
      ['My role / stack / learning', '<span class="todo">TODO — add verified details and repository link.</span>']
    ],
    visual: '<div class="db-table"><b>STUDENT</b><span><strong>id</strong> primary key</span><span>name</span><span>course_id</span></div><div class="db-relation">→</div><div class="db-table"><b>COURSE</b><span><strong>id</strong> primary key</span><span>title</span><span>credits</span></div>',
    artLabel: 'Illustrative relation between two database tables', caption: 'Relational study / illustrative'
  }
};

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Leave Night Lab Mode' : 'Enter Night Lab Mode');
  themeButton.querySelector('.theme-name').textContent = theme === 'dark' ? 'Day dossier' : 'Night lab';
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111111' : '#f2f0e8';
  try { localStorage.setItem('poom-theme', theme); } catch { /* Storage can be unavailable in private browsing. */ }
}
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('poom-theme') || 'light'; } catch { /* Keep light mode. */ }
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

function updateBangkokTime() {
  const time = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
  document.getElementById('bangkok-time').textContent = `Thailand / ${time} ICT`;
}
updateBangkokTime();
window.setInterval(updateBangkokTime, 60_000);

function artMarkup(id, preview = false) {
  const project = PROJECTS[id];
  const accessible = preview ? 'aria-hidden="true"' : id === 'graph' ? '' : `role="img" aria-label="${project.artLabel}"`;
  return `<div class="case-art art-${id}" ${accessible}>${project.visual}<small>${project.caption}</small></div>`;
}

function caseMarkup(id) {
  const project = PROJECTS[id];
  const notes = project.notes.map(([heading, body]) => `<div><h4>${heading}</h4><p>${body}</p></div>`).join('');
  return `<div class="case-intro"><span>[ CASE_${project.number} ] / ${project.label}</span><h3>${project.title}</h3><p>${project.deck}</p></div>${artMarkup(id)}<div class="case-notes">${notes}</div>`;
}

const projectRows = [...document.querySelectorAll('.project')];
let graphTimers = [];
function clearGraphTimers() { graphTimers.forEach(window.clearTimeout); graphTimers = []; }
projectRows.forEach(row => {
  const button = row.querySelector('.project-toggle');
  const caseElement = row.querySelector('.case');
  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    projectRows.forEach(other => {
      if (other === row) return;
      other.querySelector('.project-toggle').setAttribute('aria-expanded', 'false');
      other.querySelector('.case').hidden = true;
    });
    if (opening && !caseElement.hasChildNodes()) caseElement.innerHTML = caseMarkup(row.dataset.project);
    if (!opening) clearGraphTimers();
    button.setAttribute('aria-expanded', String(opening));
    caseElement.hidden = !opening;
  });
});

const edges = { A: [['B', 2], ['C', 4]], B: [['A', 2], ['D', 3], ['E', 5]], C: [['A', 4], ['E', 1]], D: [['B', 3], ['F', 4]], E: [['B', 5], ['C', 1], ['F', 2]], F: [['D', 4], ['E', 2]] };
function traversal(kind) {
  if (kind === 'dijkstra') {
    const distances = Object.fromEntries(Object.keys(edges).map(key => [key, Infinity]));
    const visited = new Set();
    const order = [];
    distances.A = 0;
    while (visited.size < Object.keys(edges).length) {
      const next = Object.keys(edges).filter(key => !visited.has(key)).sort((a, b) => distances[a] - distances[b] || a.localeCompare(b))[0];
      visited.add(next); order.push(next);
      edges[next].forEach(([neighbor, weight]) => { distances[neighbor] = Math.min(distances[neighbor], distances[next] + weight); });
    }
    return order;
  }
  const frontier = ['A']; const seen = new Set(); const order = [];
  while (frontier.length) {
    const next = kind === 'dfs' ? frontier.pop() : frontier.shift();
    if (seen.has(next)) continue;
    seen.add(next); order.push(next);
    const neighbors = edges[next].map(([node]) => node).filter(node => !seen.has(node));
    frontier.push(...(kind === 'dfs' ? neighbors.reverse() : neighbors));
  }
  return order;
}
document.getElementById('project-index').addEventListener('click', event => {
  const algorithmButton = event.target.closest('[data-algorithm]');
  if (!algorithmButton) return;
  clearGraphTimers();
  const art = algorithmButton.closest('.art-graph');
  const kind = algorithmButton.dataset.algorithm;
  const order = traversal(kind);
  art.querySelectorAll('.graph-nodes g').forEach(node => node.classList.remove('visited'));
  art.querySelectorAll('.graph-controls button').forEach(button => button.classList.toggle('active', button === algorithmButton));
  const status = art.querySelector('.graph-status');
  status.textContent = `${kind.toUpperCase()} from A: ${order.join(' → ')}`;
  order.forEach((node, index) => {
    const visit = () => art.querySelector(`[data-node="${node}"]`)?.classList.add('visited');
    if (reducedMotion.matches) visit();
    else graphTimers.push(window.setTimeout(visit, index * 260));
  });
});

async function copyEmail(button) {
  try {
    await navigator.clipboard.writeText('poomsuttiphan@gmail.com');
    if (button) button.textContent = 'Email copied';
    return true;
  } catch {
    if (button) button.textContent = 'Select the email above to copy';
    return false;
  } finally {
    if (button) window.setTimeout(() => { button.textContent = 'Copy email'; }, 3000);
  }
}
document.querySelector('.copy-email').addEventListener('click', event => copyEmail(event.currentTarget));

const dialog = document.getElementById('command-dialog');
const commandSearch = dialog.querySelector('.command-search');
const commandButtons = [...dialog.querySelectorAll('[data-command]')];
const terminalPanel = dialog.querySelector('.terminal-panel');
const terminalInput = dialog.querySelector('#terminal-input');
const terminalOutput = dialog.querySelector('.terminal-output');
function openPalette(terminal = false) {
  if (!dialog.open) dialog.showModal();
  commandSearch.value = '';
  commandButtons.forEach(button => { button.hidden = false; });
  dialog.querySelector('.command-list').hidden = terminal;
  commandSearch.hidden = terminal;
  terminalPanel.hidden = !terminal;
  dialog.querySelector('#command-title').textContent = terminal ? 'A small terminal' : 'Jump somewhere';
  (terminal ? terminalInput : commandSearch).focus();
}
function closePalette() { if (dialog.open) dialog.close(); }
document.querySelector('.palette-trigger').addEventListener('click', () => openPalette());
dialog.querySelector('.command-close').addEventListener('click', closePalette);
dialog.addEventListener('click', event => { if (event.target === dialog) closePalette(); });
dialog.addEventListener('close', () => { terminalInput.value = ''; });
function runCommand(command) {
  if (['work', 'profile', 'lab'].includes(command)) {
    closePalette(); document.getElementById(command).scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  } else if (command === 'github') {
    closePalette(); window.open('https://github.com/VWINDQ', '_blank', 'noopener,noreferrer');
  } else if (command === 'email') {
    copyEmail().then(ok => { terminalOutput.textContent = ok ? 'Email copied.' : 'Use the email link in Contact.'; });
    closePalette();
  } else if (command === 'theme') { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); closePalette(); }
}
commandButtons.forEach(button => button.addEventListener('click', () => runCommand(button.dataset.command)));
commandSearch.addEventListener('input', () => {
  const query = commandSearch.value.trim().toLowerCase();
  commandButtons.forEach(button => { button.hidden = !button.textContent.toLowerCase().includes(query); });
});
commandSearch.addEventListener('keydown', event => {
  const visible = commandButtons.filter(button => !button.hidden);
  if (event.key === 'Enter' && visible[0]) { event.preventDefault(); visible[0].click(); }
  if (event.key === 'ArrowDown' && visible[0]) { event.preventDefault(); visible[0].focus(); }
});
dialog.querySelector('.command-list').addEventListener('keydown', event => {
  const visible = commandButtons.filter(button => !button.hidden);
  const index = visible.indexOf(document.activeElement);
  if (event.key === 'ArrowDown') { event.preventDefault(); visible[(index + 1) % visible.length]?.focus(); }
  if (event.key === 'ArrowUp') { event.preventDefault(); (index <= 0 ? commandSearch : visible[index - 1])?.focus(); }
});
terminalInput.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  const command = terminalInput.value.trim().toLowerCase();
  terminalInput.value = '';
  if (command === 'help') terminalOutput.textContent = 'help / projects / about / github / clear';
  else if (command === 'projects') { closePalette(); document.getElementById('work').scrollIntoView(); }
  else if (command === 'about') { closePalette(); document.getElementById('profile').scrollIntoView(); }
  else if (command === 'github') runCommand('github');
  else if (command === 'clear') terminalOutput.textContent = '';
  else terminalOutput.textContent = command ? `Unknown command: ${command}. Type help.` : 'Type help to list commands.';
});
let secretBuffer = '';
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openPalette(); return; }
  if (dialog.open || event.target.closest('input, textarea, [contenteditable]') || event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key.length !== 1) return;
  secretBuffer = (secretBuffer + event.key.toLowerCase()).slice(-9);
  if (secretBuffer === '/terminal') { secretBuffer = ''; openPalette(true); }
});

const navLinks = [...nav.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
const meter = document.querySelector('.scroll-meter span');
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(() => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    meter.style.width = `${available > 0 ? window.scrollY / available * 100 : 0}%`;
    scrollTicking = false;
  });
}, { passive: true });

if (finePointer.matches && !reducedMotion.matches) {
  root.classList.add('cursor-enabled');
  const cursor = document.querySelector('.custom-cursor');
  const cursorLabel = cursor.querySelector('span');
  const preview = document.querySelector('.hover-preview');
  const entry = document.querySelector('.entry');
  const coordinates = document.getElementById('coordinates');
  let pointerX = -100, pointerY = -100, activePreview = false, cursorFrame = 0;
  function paintPointer() {
    cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    if (activePreview) {
      const x = Math.min(pointerX + 32, window.innerWidth - 270);
      const y = Math.min(pointerY + 28, window.innerHeight - 190);
      preview.style.transform = `translate3d(${Math.max(8, x)}px, ${Math.max(8, y)}px, 0) rotate(-4deg)`;
    }
    cursorFrame = 0;
  }
  document.addEventListener('pointermove', event => {
    pointerX = event.clientX; pointerY = event.clientY;
    cursor.classList.add('visible');
    if (!cursorFrame) cursorFrame = window.requestAnimationFrame(paintPointer);
  }, { passive: true });
  document.addEventListener('pointerover', event => {
    const row = event.target.closest('.project-toggle');
    const link = event.target.closest('a, button');
    cursorLabel.textContent = row ? 'OPEN' : link ? '↗' : '';
    cursor.classList.toggle('action', Boolean(row || link));
    cursor.classList.toggle('project-action', Boolean(row));
  });
  document.addEventListener('pointerleave', () => cursor.classList.remove('visible'));
  entry.addEventListener('pointermove', event => {
    const rect = entry.getBoundingClientRect();
    entry.style.setProperty('--scan-x', `${event.clientX - rect.left}px`);
    coordinates.textContent = `X ${String(Math.round(event.clientX - rect.left)).padStart(3, '0')} / Y ${String(Math.round(event.clientY - rect.top)).padStart(3, '0')}`;
  }, { passive: true });
  projectRows.forEach(row => {
    const button = row.querySelector('.project-toggle');
    button.addEventListener('pointerenter', () => {
      preview.innerHTML = artMarkup(row.dataset.project, true);
      preview.classList.add('visible');
      activePreview = true;
    });
    button.addEventListener('pointerleave', () => { preview.classList.remove('visible'); activePreview = false; });
  });
}
