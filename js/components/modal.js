import { escapeHtml } from '../utils.js';

/**
 * Open a generic modal dialog.
 * @param {{ title: string, bodyEl: HTMLElement, onClose?: () => void }} options
 * @returns {{ close: () => void }}
 */
export function openModal({ title, bodyEl, onClose }) {
  // Remove any stacked modal first
  document.querySelector('.modal-backdrop')?.remove();

  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.setAttribute('role', 'presentation');

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'modalTitle');

  modal.innerHTML = `
    <div class="modal-header">
      <span class="modal-title" id="modalTitle">${escapeHtml(title)}</span>
      <button class="btn-icon modal-close" aria-label="Close modal">✕</button>
    </div>
    <div class="modal-body"></div>
  `;

  modal.querySelector('.modal-body').append(bodyEl);
  backdrop.append(modal);
  document.body.append(backdrop);

  function close() {
    backdrop.remove();
    document.removeEventListener('keydown', keyHandler);
    onClose?.();
  }

  modal.querySelector('.modal-close').addEventListener('click', close);

  // Close on backdrop click (not on modal itself)
  backdrop.addEventListener('pointerdown', (e) => {
    if (e.target === backdrop) close();
  });

  const keyHandler = (e) => {
    if (e.key === 'Escape') close();
  };
  document.addEventListener('keydown', keyHandler);

  // Focus first interactive element inside modal
  requestAnimationFrame(() => {
    const first = modal.querySelector('input, textarea, select, button:not(.modal-close)');
    first?.focus();
  });

  return { close };
}
