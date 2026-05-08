import { DEFAULT_FEATURES, DEFAULT_SETTINGS } from './defaults.js';

const KEY = 'gimp_data';

const DEFAULT = {
  features: [],
  settings: DEFAULT_SETTINGS,
};

/**
 * Seed the app with default data if localStorage is empty.
 * Called once on first boot; never overwrites existing data.
 */
export function seedDefaults() {
  if (localStorage.getItem(KEY)) return; // already has data — don't overwrite

  const features = DEFAULT_FEATURES.map((f) => ({
    ...f,
    id: crypto.randomUUID(),
    randomizers: f.randomizers.map((r) => ({ ...r, id: crypto.randomUUID() })),
  }));

  localStorage.setItem(
    KEY,
    JSON.stringify({ features, settings: structuredClone(DEFAULT_SETTINGS) })
  );
}

/**
 * Read all app data from localStorage.
 * @returns {{ features: Feature[], settings: Settings }}
 */
export function getData() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    const parsed = JSON.parse(raw);
    return {
      features: parsed.features ?? [],
      settings: { ...DEFAULT.settings, ...(parsed.settings ?? {}) },
    };
  } catch {
    return structuredClone(DEFAULT);
  }
}

/**
 * Persist app data to localStorage.
 * @param {{ features: Feature[], settings: Settings }} data
 */
export function setData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

/**
 * Generate a collision-resistant unique id.
 * @returns {string}
 */
export function generateId() {
  return crypto.randomUUID();
}

/**
 * @typedef {{ id: string, name: string, icon: string, description: string, content: string, randomizers: Randomizer[] }} Feature
 * @typedef {{ id: string, name: string, items: string[] }} Randomizer
 * @typedef {{ theme: 'dark'|'light', accentColour: string }} Settings
 */
