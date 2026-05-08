import { getData } from '../storage.js';
import { openFeatureModal } from '../components/featureModal.js';
import { escapeHtml, randomPick } from '../utils.js';

/**
 * @param {HTMLElement} container
 * @param {string[]} params - [featureId]
 */
export function renderFeature(container, params) {
  const id = params?.[0];

  function render() {
    const feature = getData().features.find((f) => f.id === id);

    if (!feature) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>Feature not found.</p>
          <a href="#/" class="btn btn-ghost">Back to Home</a>
        </div>
      `;
      return;
    }

    const randHtml =
      feature.randomizers.length > 0
        ? `
        <div class="feature-randomizers">
          <h3>Randomizers</h3>
          ${feature.randomizers
            .map(
              (r, i) => `
            <div class="randomizer-card">
              <div class="randomizer-name">${escapeHtml(r.name)}</div>
              <div class="randomizer-result empty" id="rand-result-${i}">Press button to randomize</div>
              <button type="button" class="btn btn-primary randomizer-roll-btn" data-idx="${i}">
                🎲 Randomise
              </button>
            </div>
          `
            )
            .join('')}
        </div>
      `
        : `
        <div class="empty-state" style="padding: 2rem 0">
          <div class="empty-state-icon">🎲</div>
          <p>No randomizers configured.</p>
          <p class="text-muted">Edit this feature to add some.</p>
        </div>
      `;

    container.innerHTML = `
      <div class="page-feature">
        <div class="feature-header">
          <div class="feature-header-icon">${escapeHtml(feature.icon || '📋')}</div>
          <div class="feature-header-text">
            <h2>${escapeHtml(feature.name)}</h2>
            ${feature.description ? `<p>${escapeHtml(feature.description)}</p>` : ''}
          </div>
          <div class="feature-header-actions">
            <button class="btn btn-ghost btn-sm" id="editFeatureBtn">Edit</button>
          </div>
        </div>

        ${
          feature.content
            ? `<div class="feature-content" id="featureContent"></div>`
            : ''
        }

        ${randHtml}
      </div>
    `;

    // Use textContent for the notes block so newlines render naturally via CSS
    const contentEl = container.querySelector('#featureContent');
    if (contentEl) contentEl.textContent = feature.content;

    // Edit button
    container.querySelector('#editFeatureBtn').addEventListener('click', () => {
      const fresh = getData().features.find((f) => f.id === id);
      if (fresh) openFeatureModal(fresh, render);
    });

    // Randomizer buttons
    container.querySelectorAll('.randomizer-roll-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const fresh = getData().features.find((f) => f.id === id);
        if (!fresh) return;
        const idx = Number(btn.dataset.idx);
        const rand = fresh.randomizers[idx];
        if (!rand || rand.items.length === 0) return;

        const result = randomPick(rand.items);
        const resultEl = container.querySelector(`#rand-result-${idx}`);
        resultEl.classList.remove('empty', 'rand-flash');
        resultEl.textContent = result;

        // Trigger reflow to restart animation
        void resultEl.offsetWidth;
        resultEl.classList.add('rand-flash');
        resultEl.addEventListener('animationend', () => resultEl.classList.remove('rand-flash'), {
          once: true,
        });
      });
    });
  }

  render();
}
