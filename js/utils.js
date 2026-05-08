/**
 * Pick a random item from an array.
 * @param {any[]} arr
 * @returns {any|null}
 */
export function randomPick(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Escape a string for safe insertion into HTML.
 * @param {any} str
 * @returns {string}
 */
export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
