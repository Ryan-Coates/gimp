import { getData } from '../storage.js';
import { escapeHtml } from '../utils.js';

const BUILT_IN_TOOLS = [
  {
    id: 'dice',
    icon: '🎲',
    name: 'Dice Roller',
    description: 'Roll any combination of dice — d4 to d100.',
    route: '#/dice',
  },
];

/**
 * @param {HTMLElement} container
 */
export function renderHome(container) {
  const { features } = getData();

  const builtInCards = BUILT_IN_TOOLS.map(
    (t) => `
    <button class="card card-tool" data-route="${t.route}">
      <span class="card-icon">${t.icon}</span>
      <span class="card-name">${escapeHtml(t.name)}</span>
      <span class="card-desc">${escapeHtml(t.description)}</span>
    </button>
  `
  ).join('');

  const featureCards = features
    .map(
      (f) => `
    <button class="card card-tool" data-route="#/feature/${escapeHtml(f.id)}">
      <span class="card-icon">${escapeHtml(f.icon || '📋')}</span>
      <span class="card-name">${escapeHtml(f.name)}</span>
      <span class="card-desc">${escapeHtml(f.description || '')}</span>
    </button>
  `
    )
    .join('');

  const emptyHint =
    features.length === 0
      ? `<p class="empty-hint" style="grid-column:1/-1;text-align:center;padding:1.5rem 0">
           No custom features yet — tap <strong>Configure</strong> to add some!
         </p>`
      : '';

  container.innerHTML = `
    <div class="page-home">
      <div class="card-grid">
        ${builtInCards}
        ${featureCards}
        ${emptyHint}
      </div>
      <button class="fab" id="configFab" aria-label="Configure app">⚙️ Configure</button>
    </div>
  `;

  container.querySelectorAll('[data-route]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.hash = btn.dataset.route;
    });
  });

  document.getElementById('configFab').addEventListener('click', () => {
    window.location.hash = '#/config';
  });
}
