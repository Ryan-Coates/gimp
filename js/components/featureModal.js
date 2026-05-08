import { getData, setData, generateId } from '../storage.js';
import { escapeHtml } from '../utils.js';
import { openModal } from './modal.js';

const ICON_PRESETS = [
  '🧙', '👹', '🐉', '⚔️', '🏰', '📜', '💰', '🗺️',
  '🧪', '👑', '🛡️', '🏺', '💀', '🐺', '🌿', '🎭',
];

/**
 * Open the Add / Edit feature modal.
 * @param {import('../storage.js').Feature|null} existingFeature
 * @param {() => void} onSaved - called after save closes the modal
 * @returns {{ close: () => void }}
 */
export function openFeatureModal(existingFeature, onSaved) {
  const isEdit = !!existingFeature;
  const featureData = existingFeature
    ? structuredClone(existingFeature)
    : {
        id: generateId(),
        name: '',
        icon: '📋',
        description: '',
        content: '',
        randomizers: [],
      };

  const body = document.createElement('div');
  body.className = 'feature-form';

  // ── Randomizer list renderer ──────────────────────────────────────────────
  function renderRandList() {
    if (featureData.randomizers.length === 0) {
      return `<p class="empty-hint">No randomizers yet.</p>`;
    }
    return featureData.randomizers
      .map(
        (r, i) => `
        <div class="rand-item">
          <div class="rand-item-info">
            <strong>${escapeHtml(r.name)}</strong>
            <span class="text-muted">${r.items.length} item${r.items.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="rand-item-actions">
            <button type="button" class="btn btn-ghost btn-sm edit-rand" data-idx="${i}">Edit</button>
            <button type="button" class="btn btn-danger btn-sm delete-rand" data-idx="${i}">✕</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  // ── Randomizer inline sub-form ─────────────────────────────────────────────
  function showRandForm(idx) {
    const randFormEl = body.querySelector('#randForm');
    const existing = idx !== null ? featureData.randomizers[idx] : null;

    randFormEl.classList.remove('hidden');
    randFormEl.innerHTML = `
      <div class="form-group">
        <label for="randName">Randomizer Name *</label>
        <input type="text" id="randName" class="input"
               value="${escapeHtml(existing?.name ?? '')}"
               placeholder="e.g. Goblin Names" maxlength="80" />
      </div>
      <div class="form-group">
        <label for="randItems">Items <span class="text-muted">(one per line)</span></label>
        <textarea id="randItems" class="input textarea" rows="6"
                  placeholder="Snik&#10;Grub&#10;Twitchfang">${escapeHtml(
                    (existing?.items ?? []).join('\n')
                  )}</textarea>
      </div>
      <div class="form-actions-sm">
        <button type="button" class="btn btn-primary btn-sm" id="saveRandBtn">Save</button>
        <button type="button" class="btn btn-ghost btn-sm" id="cancelRandBtn">Cancel</button>
      </div>
    `;

    randFormEl.querySelector('#randName').focus();

    randFormEl.querySelector('#saveRandBtn').addEventListener('click', () => {
      const name = randFormEl.querySelector('#randName').value.trim();
      if (!name) {
        randFormEl.querySelector('#randName').focus();
        return;
      }
      const items = randFormEl
        .querySelector('#randItems')
        .value.split('\n')
        .map((s) => s.trim())
        .filter(Boolean);

      const entry = { id: existing?.id ?? generateId(), name, items };
      if (idx !== null) {
        featureData.randomizers[idx] = entry;
      } else {
        featureData.randomizers.push(entry);
      }

      randFormEl.classList.add('hidden');
      refreshRandList();
    });

    randFormEl.querySelector('#cancelRandBtn').addEventListener('click', () => {
      randFormEl.classList.add('hidden');
    });
  }

  // ── Re-render randomizer list and rebind events ────────────────────────────
  function refreshRandList() {
    const listEl = body.querySelector('#randList');
    listEl.innerHTML = renderRandList();
    attachRandListEvents();
  }

  function attachRandListEvents() {
    body.querySelectorAll('.edit-rand').forEach((btn) => {
      btn.addEventListener('click', () => showRandForm(Number(btn.dataset.idx)));
    });
    body.querySelectorAll('.delete-rand').forEach((btn) => {
      btn.addEventListener('click', () => {
        featureData.randomizers.splice(Number(btn.dataset.idx), 1);
        refreshRandList();
      });
    });
  }

  // ── Build modal body ───────────────────────────────────────────────────────
  const presetHtml = ICON_PRESETS.map(
    (e) => `<button type="button" class="emoji-preset" data-emoji="${escapeHtml(e)}">${e}</button>`
  ).join('');

  body.innerHTML = `
    <div class="form-group">
      <label for="fName">Name *</label>
      <input type="text" id="fName" class="input"
             value="${escapeHtml(featureData.name)}"
             placeholder="e.g. NPCs" maxlength="60" />
    </div>
    <div class="form-group">
      <label>Icon</label>
      <div class="icon-row">
        <input type="text" id="fIcon" class="input input-icon"
               value="${escapeHtml(featureData.icon)}"
               placeholder="📋" maxlength="4" />
        <div class="emoji-presets">${presetHtml}</div>
      </div>
    </div>
    <div class="form-group">
      <label for="fDesc">Short Description</label>
      <input type="text" id="fDesc" class="input"
             value="${escapeHtml(featureData.description)}"
             placeholder="Shown on home screen" maxlength="120" />
    </div>
    <div class="form-group">
      <label for="fContent">Notes / Content</label>
      <textarea id="fContent" class="input textarea" rows="5"
                placeholder="Campaign notes, reference info...">${escapeHtml(featureData.content)}</textarea>
    </div>
    <div class="form-group">
      <div class="section-header">
        <label>Randomizers</label>
        <button type="button" class="btn btn-ghost btn-sm" id="addRandBtn">+ Add</button>
      </div>
      <div id="randList" class="rand-list">${renderRandList()}</div>
      <div id="randForm" class="rand-form hidden"></div>
    </div>
    <div class="form-actions">
      <button type="button" class="btn btn-primary" id="saveFeatureBtn">
        ${isEdit ? 'Save Changes' : 'Add Feature'}
      </button>
    </div>
  `;

  // Emoji preset clicks
  body.querySelectorAll('.emoji-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      featureData.icon = btn.dataset.emoji;
      body.querySelector('#fIcon').value = btn.dataset.emoji;
    });
  });

  // Icon input sync
  body.querySelector('#fIcon').addEventListener('input', (e) => {
    featureData.icon = e.target.value || '📋';
  });

  body.querySelector('#addRandBtn').addEventListener('click', () => showRandForm(null));
  attachRandListEvents();

  // Save feature
  body.querySelector('#saveFeatureBtn').addEventListener('click', () => {
    const name = body.querySelector('#fName').value.trim();
    if (!name) {
      body.querySelector('#fName').focus();
      return;
    }
    featureData.name = name;
    featureData.icon = body.querySelector('#fIcon').value.trim() || '📋';
    featureData.description = body.querySelector('#fDesc').value.trim();
    featureData.content = body.querySelector('#fContent').value;

    const data = getData();
    if (isEdit) {
      const idx = data.features.findIndex((f) => f.id === featureData.id);
      if (idx !== -1) data.features[idx] = featureData;
    } else {
      data.features.push(featureData);
    }
    setData(data);
    modal.close();
    onSaved();
  });

  const modal = openModal({
    title: isEdit ? `Edit: ${existingFeature.name}` : 'Add Feature',
    bodyEl: body,
  });

  return modal;
}
