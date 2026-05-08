import { getData, setData } from '../storage.js';
import { openFeatureModal } from '../components/featureModal.js';
import { escapeHtml } from '../utils.js';

/**
 * @param {HTMLElement} container
 */
export function renderConfig(container) {
  function render() {
    const data = getData();

    const featureListHtml =
      data.features.length === 0
        ? `<p class="empty-hint">No features yet. Add one to get started!</p>`
        : data.features
            .map(
              (f) => `
              <div class="feature-item">
                <span class="feature-item-icon">${escapeHtml(f.icon || '📋')}</span>
                <div class="feature-item-info">
                  <strong>${escapeHtml(f.name)}</strong>
                  <span class="text-muted">${escapeHtml(f.description || '')}</span>
                </div>
                <div class="feature-item-actions">
                  <button class="btn btn-ghost btn-sm edit-feature" data-id="${escapeHtml(f.id)}">Edit</button>
                  <button class="btn btn-danger btn-sm delete-feature" data-id="${escapeHtml(f.id)}">Delete</button>
                </div>
              </div>
            `
            )
            .join('');

    container.innerHTML = `
      <div class="page-config">
        <h2 class="page-title">⚙️ Configuration</h2>

        <section class="config-section">
          <div class="section-header">
            <h3>Features</h3>
            <button class="btn btn-primary btn-sm" id="addFeatureBtn">+ Add Feature</button>
          </div>
          <div class="feature-list">${featureListHtml}</div>
        </section>

        <section class="config-section">
          <h3>Settings</h3>
          <div class="settings-grid">
            <div class="setting-row">
              <span>Theme</span>
              <button class="btn btn-ghost btn-sm" id="themeToggleConfig">
                ${data.settings.theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
              </button>
            </div>
            <div class="setting-row">
              <span>Accent Colour</span>
              <input type="color" id="accentColour"
                     value="${escapeHtml(data.settings.accentColour || '#e94560')}"
                     class="color-picker" />
            </div>
          </div>
        </section>
      </div>
    `;

    // Add feature
    container.querySelector('#addFeatureBtn').addEventListener('click', () => {
      openFeatureModal(null, render);
    });

    // Edit feature
    container.querySelectorAll('.edit-feature').forEach((btn) => {
      btn.addEventListener('click', () => {
        const feature = getData().features.find((f) => f.id === btn.dataset.id);
        if (feature) openFeatureModal(feature, render);
      });
    });

    // Delete feature
    container.querySelectorAll('.delete-feature').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!confirm('Delete this feature? This cannot be undone.')) return;
        const d = getData();
        d.features = d.features.filter((f) => f.id !== btn.dataset.id);
        setData(d);
        render();
      });
    });

    // Theme toggle
    container.querySelector('#themeToggleConfig').addEventListener('click', () => {
      const d = getData();
      d.settings.theme = d.settings.theme === 'dark' ? 'light' : 'dark';
      setData(d);
      document.documentElement.setAttribute('data-theme', d.settings.theme);
      const headerToggle = document.getElementById('themeToggle');
      if (headerToggle) headerToggle.textContent = d.settings.theme === 'light' ? '🌙' : '☀️';
      render();
    });

    // Accent colour
    container.querySelector('#accentColour').addEventListener('change', (e) => {
      const d = getData();
      d.settings.accentColour = e.target.value;
      setData(d);
      document.documentElement.style.setProperty('--accent', e.target.value);
    });
  }

  render();
}
