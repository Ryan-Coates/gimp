import { getData } from '../storage.js';
import { openFeatureModal } from '../components/featureModal.js';
import { escapeHtml, randomPick } from '../utils.js';

function statMod(score) {
  const m = Math.floor((score - 10) / 2);
  return (m >= 0 ? '+' : '') + m;
}

function renderEncounterSection(encounters) {
  if (!encounters || encounters.length === 0) return '';

  const cards = encounters.map((enc) => {
    const optRows = [
      enc.saves            ? `<div class="sb-row"><b>Saving Throws</b> ${escapeHtml(enc.saves)}</div>` : '',
      enc.skills           ? `<div class="sb-row"><b>Skills</b> ${escapeHtml(enc.skills)}</div>` : '',
      enc.vulnerabilities  ? `<div class="sb-row"><b>Damage Vulnerabilities</b> ${escapeHtml(enc.vulnerabilities)}</div>` : '',
      enc.resistances      ? `<div class="sb-row"><b>Damage Resistances</b> ${escapeHtml(enc.resistances)}</div>` : '',
      enc.damageImmunities ? `<div class="sb-row"><b>Damage Immunities</b> ${escapeHtml(enc.damageImmunities)}</div>` : '',
      enc.conditionImmunities ? `<div class="sb-row"><b>Condition Immunities</b> ${escapeHtml(enc.conditionImmunities)}</div>` : '',
      `<div class="sb-row"><b>Senses</b> ${escapeHtml(enc.senses)}</div>`,
      `<div class="sb-row"><b>Languages</b> ${escapeHtml(enc.languages || '—')}</div>`,
      `<div class="sb-row"><b>Challenge</b> ${escapeHtml(String(enc.cr))} (${escapeHtml(String(enc.xp))} XP)</div>`,
    ].filter(Boolean).join('');

    const traitsHtml = (enc.traits || []).map(
      (t) => `<p class="sb-trait"><b>${escapeHtml(t.name)}.</b> ${escapeHtml(t.text)}</p>`
    ).join('');

    const actionsHtml = (enc.actions || []).map(
      (a) => `<p class="sb-trait"><b>${escapeHtml(a.name)}.</b> ${escapeHtml(a.text)}</p>`
    ).join('');

    const reactionsHtml = (enc.reactions || []).length
      ? `<p class="sb-section-title">Reactions</p>` +
        enc.reactions.map((r) => `<p class="sb-trait"><b>${escapeHtml(r.name)}.</b> ${escapeHtml(r.text)}</p>`).join('')
      : '';

    const legendaryHtml = (enc.legendaryActions || []).length
      ? `<p class="sb-section-title">Legendary Actions</p>` +
        enc.legendaryActions.map((la) => `<p class="sb-trait"><b>${escapeHtml(la.name)}.</b> ${escapeHtml(la.text)}</p>`).join('')
      : '';

    return `
      <details class="encounter-card">
        <summary class="encounter-summary">
          <div class="encounter-summary-info">
            <span class="encounter-name">${escapeHtml(enc.name)}</span>
            <span class="encounter-meta">${escapeHtml(enc.size)} ${escapeHtml(enc.type)} · CR ${escapeHtml(String(enc.cr))} (${escapeHtml(String(enc.xp))} XP)</span>
          </div>
          <span class="encounter-chevron">›</span>
        </summary>
        <div class="stat-block">
          ${enc.narrative ? `<p class="sb-narrative">${escapeHtml(enc.narrative)}</p><div class="sb-divider"></div>` : ''}
          <p class="sb-alignment">${escapeHtml(enc.size)} ${escapeHtml(enc.type)}, ${escapeHtml(enc.alignment)}</p>
          <div class="sb-divider"></div>
          <div class="sb-row"><b>Armor Class</b> ${escapeHtml(enc.ac)}</div>
          <div class="sb-row"><b>Hit Points</b> ${escapeHtml(enc.hp)}</div>
          <div class="sb-row"><b>Speed</b> ${escapeHtml(enc.speed)}</div>
          <div class="sb-divider"></div>
          <div class="sb-scores">
            <div class="sb-score"><div class="sb-score-label">STR</div><div class="sb-score-val">${enc.str}<br>(${statMod(enc.str)})</div></div>
            <div class="sb-score"><div class="sb-score-label">DEX</div><div class="sb-score-val">${enc.dex}<br>(${statMod(enc.dex)})</div></div>
            <div class="sb-score"><div class="sb-score-label">CON</div><div class="sb-score-val">${enc.con}<br>(${statMod(enc.con)})</div></div>
            <div class="sb-score"><div class="sb-score-label">INT</div><div class="sb-score-val">${enc.int}<br>(${statMod(enc.int)})</div></div>
            <div class="sb-score"><div class="sb-score-label">WIS</div><div class="sb-score-val">${enc.wis}<br>(${statMod(enc.wis)})</div></div>
            <div class="sb-score"><div class="sb-score-label">CHA</div><div class="sb-score-val">${enc.cha}<br>(${statMod(enc.cha)})</div></div>
          </div>
          <div class="sb-divider"></div>
          ${optRows}
          ${traitsHtml ? `<div class="sb-divider"></div>${traitsHtml}` : ''}
          ${actionsHtml ? `<p class="sb-section-title">Actions</p>${actionsHtml}` : ''}
          ${reactionsHtml}
          ${legendaryHtml}
          ${enc.description ? `<div class="sb-divider"></div><p class="sb-description">${escapeHtml(enc.description)}</p>` : ''}
        </div>
      </details>
    `;
  }).join('');

  return `
    <div class="feature-encounters">
      <h3>Encounters</h3>
      <div class="encounter-list">${cards}</div>
    </div>
  `;
}

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

    const hasEncounters = (feature.encounters || []).length > 0;
    const hasRandomizers = feature.randomizers.length > 0;

    const randHtml = hasRandomizers
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
      : !hasEncounters
      ? `
        <div class="empty-state" style="padding: 2rem 0">
          <div class="empty-state-icon">🎲</div>
          <p>No randomizers configured.</p>
          <p class="text-muted">Edit this feature to add some.</p>
        </div>
      `
      : '';

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

        ${feature.content ? `<div class="feature-content" id="featureContent"></div>` : ''}

        ${renderEncounterSection(feature.encounters)}

        ${randHtml}
      </div>
    `;

    const contentEl = container.querySelector('#featureContent');
    if (contentEl) contentEl.textContent = feature.content;

    container.querySelector('#editFeatureBtn').addEventListener('click', () => {
      const fresh = getData().features.find((f) => f.id === id);
      if (fresh) openFeatureModal(fresh, render);
    });

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
