# GIMP — D&D Companion App: Implementation Plan

## Overview

**GIMP** is a mobile-first, client-side only D&D companion app deployed as a static site via GitHub Pages. There is no backend — all data is persisted in `localStorage`. Navigation is handled via hash-based routing so the app works as a single-page app without a server.

---

## Tech Stack

| Concern | Choice | Rationale |
|---|---|---|
| Language | Vanilla JS (ES Modules) | No build step, works directly on GitHub Pages |
| Styling | Plain CSS (custom properties, flexbox/grid) | No dependencies, mobile-first easy to control |
| Routing | Hash router (`#/path`) | Works on static hosts with no server config |
| Persistence | `localStorage` | Client-only, no server needed |
| Icons | Unicode / SVG inline | No external dependency |

> **Why no framework?** A build step (React/Vue + Vite) would require a GitHub Actions workflow. Vanilla JS with ES modules works out of the box on GitHub Pages with zero config — easier to maintain and deploy.

---

## File Structure

```
gimp/
├── index.html              # Shell — loads app.js, links styles
├── styles/
│   ├── base.css            # Reset, variables, typography, mobile-first grid
│   └── components.css      # Cards, buttons, modals, form elements
├── js/
│   ├── app.js              # Entry point — initialises router, renders shell nav
│   ├── router.js           # Hash-based router (maps #/path → page module)
│   ├── storage.js          # localStorage read/write helpers
│   ├── utils.js            # UUID generation, random pick helpers
│   ├── pages/
│   │   ├── home.js         # Home page — tool card grid
│   │   ├── dice.js         # Dice Roller page
│   │   ├── config.js       # Configuration page — manage features + settings
│   │   └── feature.js      # Feature detail page — content + randomizers
│   └── components/
│       ├── diceRoller.js   # Reusable dice rolling logic + animation
│       ├── randomizer.js   # Single randomizer widget (list + button)
│       └── modal.js        # Generic modal component (used by config forms)
└── PLAN.md
```

---

## Routing Map

| Hash | Page | Description |
|---|---|---|
| `#/` | Home | Tool cards + Configure button |
| `#/dice` | Dice Roller | Roll any combination of dice |
| `#/config` | Configuration | Add / edit / delete features and app settings |
| `#/feature/:id` | Feature Detail | View feature content and run randomizers |

---

## Data Model (localStorage)

All app state lives under a single `gimp_data` key.

```json
{
  "features": [
    {
      "id": "uuid-v4",
      "name": "NPCs",
      "icon": "🧙",
      "description": "Key NPCs across the campaign world.",
      "content": "Free-text markdown-lite notes about specific NPCs.",
      "randomizers": [
        {
          "id": "uuid-v4",
          "name": "Human Faction Names",
          "items": ["Aldric Vane", "Sera Coldwell", "Bram Oakhurst"]
        },
        {
          "id": "uuid-v4",
          "name": "Goblin Names",
          "items": ["Snik", "Grub", "Twitchfang"]
        }
      ]
    }
  ],
  "settings": {
    "theme": "dark",
    "accentColour": "#8b0000"
  }
}
```

Key rules:
- `id` fields are generated client-side using `crypto.randomUUID()`.
- `content` is stored as plain text rendered with basic newline-to-`<br>` formatting — no markdown parser dependency.
- `randomizers` is an ordered array; the UI lets users reorder, add, and delete entries.

---

## Pages — Detailed Spec

### 1. Home Page (`#/`)

**Layout**: 2-column card grid on mobile, 3-column on tablet+.

Each built-in tool appears as a card:
- **Title** + icon
- One-line description
- Tap/click → navigates to that tool

A persistent **Configure** button (floating action button or fixed footer button) navigates to `#/config`.

**Built-in tool cards on launch:**
| Card | Route |
|---|---|
| 🎲 Dice Roller | `#/dice` |

**User-added features** also appear as cards on the home page. Tapping one goes to `#/feature/:id`.

---

### 2. Dice Roller (`#/dice`)

**Goal**: Roll any number and type of dice, see individual results and a total.

**Supported dice**: d4, d6, d8, d10, d12, d20, d100

**UI layout (mobile-first)**:
- Row of dice type buttons (d4 … d100), each shows current count with `+` / `−` controls
- Large **Roll** button
- Results area:
  - Each die shown as a card with its face value (animated roll effect via CSS)
  - Total displayed prominently
  - Optional modifier field (+/− flat number added to total)
- **Clear** button resets counts

**Implementation notes**:
- `Math.random()` is sufficient (no crypto randomness needed for a dice roller)
- Store last roll in session memory (resets on page reload — intentional)
- Dice counts stored in component state only, not persisted

---

### 3. Configuration Page (`#/config`)

**Sections**:

#### 3a. Features
- List of all user-created features (name, icon, description)
- **Add Feature** button → opens Add Feature modal
- Each feature has **Edit** and **Delete** (with confirmation) actions

#### 3b. Settings
- **Theme** toggle: Light / Dark
- **Accent colour** picker

#### Add / Edit Feature Modal
Fields:
| Field | Type | Notes |
|---|---|---|
| Name | Text input | Required |
| Icon | Emoji picker or text input | Single emoji |
| Description | Textarea | Short summary shown on home card |
| Content / Notes | Textarea | Longer free-text shown on feature page |
| Randomizers | Dynamic list | See below |

**Randomizer sub-section inside the modal**:
- List of randomizers already added to this feature
- Each entry shows: **Name** + number of items + Edit / Delete buttons
- **Add Randomizer** button → opens a nested form:
  - Randomizer name (e.g. "Human Faction Names")
  - Items list — a textarea with one item per line (simplest UX)
- Save writes the whole feature back to `localStorage`

---

### 4. Feature Detail Page (`#/feature/:id`)

**Layout**:
- Feature name + icon as heading
- Description (subtitle)
- Content / notes block (rendered with newlines preserved)
- **Randomizers** section:
  - Each randomizer shown as a card:
    - Title
    - Large **Randomise** button
    - Result display (previous result shown until button pressed again)
  - Results are purely ephemeral (not stored)
- **Edit Feature** button → opens the same modal as config edit

---

## Implementation Phases

### Phase 1 — Shell & Routing
- [ ] `index.html` with top nav (app title + back button logic)
- [ ] `styles/base.css` — CSS variables, mobile-first reset, grid system
- [ ] `js/router.js` — hash change listener, route matching, `render(page)` helper
- [ ] `js/app.js` — bootstrap, register routes, render home on load
- [ ] `js/storage.js` — `getData()`, `setData()`, `generateId()`

### Phase 2 — Home Page
- [ ] `js/pages/home.js` — renders built-in tool cards + user feature cards
- [ ] Configure FAB navigates to `#/config`
- [ ] `styles/components.css` — card styles, button styles

### Phase 3 — Dice Roller
- [ ] `js/components/diceRoller.js` — state, roll logic, result formatting
- [ ] `js/pages/dice.js` — UI for selecting dice counts, rendering results
- [ ] CSS: dice card animation (CSS `@keyframes` flip/spin on result change)

### Phase 4 — Configuration & Feature Management
- [ ] `js/components/modal.js` — open/close, focus trap, keyboard `Escape` close
- [ ] `js/pages/config.js` — feature list, settings panel
- [ ] Add/Edit/Delete feature flows using modal
- [ ] Randomizer management inside feature form (add/edit/remove randomizer entries)
- [ ] Theme toggle writes to `localStorage.settings` and applies CSS class to `<html>`

### Phase 5 — Feature Detail Page
- [ ] `js/pages/feature.js` — load feature by id, render content + randomizers
- [ ] `js/components/randomizer.js` — random pick from items array, display result
- [ ] Guard: 404 message if feature id not found

### Phase 6 — Polish & GitHub Pages Deploy
- [ ] Favicon (d20 emoji or simple SVG)
- [ ] `<meta>` tags for mobile viewport, theme-color
- [ ] README with usage instructions
- [ ] Verify `index.html` is at repo root (GitHub Pages default)
- [ ] Test on mobile viewport in browser devtools

---

## Key Design Decisions

### Mobile-First CSS Strategy
All base styles target small screens. Media queries widen layouts:
```css
/* base — single column */
.card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

/* tablet+ */
@media (min-width: 600px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### No Framework — How Pages Work
Each page module exports a `render(container)` function. The router calls it with the main `<div id="app">` element. The function sets `container.innerHTML` and attaches event listeners. Navigation clears the container and calls the next page's `render`.

```js
// router.js (simplified)
const routes = {};
export function registerRoute(path, renderFn) { routes[path] = renderFn; }
window.addEventListener('hashchange', () => navigate(location.hash));
function navigate(hash) {
  const [path, ...params] = hash.replace('#', '').split('/').filter(Boolean);
  const key = '/' + (path || '');
  routes[key]?.(document.getElementById('app'), params);
}
```

### Randomizer UX
Items are stored as a plain array. The **Randomise** button picks one at random and displays it with a brief CSS animation. This is intentionally simple — no weighting, no history tracking.

---

## Out of Scope (for now)

- User accounts / cloud sync (would require a server)
- Markdown rendering in content fields
- Drag-to-reorder randomizer lists
- Export / import data as JSON (good future feature)
- Spell/item databases (too large for localStorage, needs external data)
