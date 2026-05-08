import { initRouter, registerRoute } from './router.js';
import { renderHome } from './pages/home.js';
import { renderDice } from './pages/dice.js';
import { renderConfig } from './pages/config.js';
import { renderFeature } from './pages/feature.js';
import { getData, setData, seedDefaults } from './storage.js';

// ── Theme / accent application ────────────────────────────────────────────────

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
}

function applyAccent(colour) {
  if (colour) document.documentElement.style.setProperty('--accent', colour);
}

function initSettings() {
  const { settings } = getData();
  applyTheme(settings.theme || 'dark');
  applyAccent(settings.accentColour);
}

// ── Header controls ────────────────────────────────────────────────────────────

document.getElementById('themeToggle').addEventListener('click', () => {
  const data = getData();
  const newTheme = data.settings.theme === 'light' ? 'dark' : 'light';
  data.settings.theme = newTheme;
  setData(data);
  applyTheme(newTheme);
});

document.getElementById('backBtn').addEventListener('click', () => {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.hash = '#/';
  }
});

// ── Routes ─────────────────────────────────────────────────────────────────────

registerRoute('/', renderHome);
registerRoute('/dice', renderDice);
registerRoute('/config', renderConfig);
registerRoute('/feature', renderFeature);

// ── Boot ───────────────────────────────────────────────────────────────────────

seedDefaults();
initSettings();
initRouter();
