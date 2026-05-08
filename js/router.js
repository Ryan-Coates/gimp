/** @type {Map<string, (container: HTMLElement, params: string[]) => void>} */
const routes = new Map();

/**
 * Register a route handler.
 * @param {string} path - e.g. '/' or '/dice'
 * @param {(container: HTMLElement, params: string[]) => void} renderFn
 */
export function registerRoute(path, renderFn) {
  routes.set(path, renderFn);
}

/**
 * Programmatically navigate to a hash route.
 * @param {string} hash - e.g. '#/dice' or '#/feature/some-uuid'
 */
export function navigate(hash) {
  window.location.hash = hash;
}

function parseHash() {
  const hash = location.hash || '#/';
  // Strip leading #/ or #
  const stripped = hash.replace(/^#\/?/, '');
  const parts = stripped.split('/').filter(Boolean);
  const path = '/' + (parts[0] ?? '');
  const params = parts.slice(1);
  return { path, params };
}

function handleRoute() {
  const { path, params } = parseHash();
  const app = document.getElementById('app');
  const backBtn = document.getElementById('backBtn');

  // Show back button on all pages except home
  backBtn.hidden = path === '/';

  const renderFn = routes.get(path);
  if (renderFn) {
    renderFn(app, params);
  } else {
    app.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🗺️</div>
        <p>Page not found.</p>
        <a href="#/" class="btn btn-ghost">Go Home</a>
      </div>
    `;
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
