const DICE_TYPES = [4, 6, 8, 10, 12, 20, 100];

/**
 * @param {HTMLElement} container
 */
export function renderDice(container) {
  // Component state
  const counts = Object.fromEntries(DICE_TYPES.map((d) => [d, 0]));
  let modifier = 0;
  let lastResults = null;

  function getRollSummary() {
    if (!lastResults) return '';
    const { rolls, total } = lastResults;

    const diceHtml = rolls
      .map(
        (r) => `
        <div class="die-result">
          <span class="die-result-type">d${r.die}</span>
          <span class="die-result-value">${r.value}</span>
        </div>
      `
      )
      .join('');

    const modText =
      modifier !== 0
        ? `<span class="result-modifier">${modifier > 0 ? '+' : ''}${modifier} modifier</span>`
        : '';

    return `
      <div class="result-total">
        Total
        <strong>${total}</strong>
        ${modText}
      </div>
      <div class="result-dice">${diceHtml}</div>
    `;
  }

  function buildPage() {
    const diceSelectors = DICE_TYPES.map(
      (d) => `
      <div class="dice-type">
        <div class="die-label">d${d}</div>
        <div class="die-stepper">
          <button class="btn-stepper dec" data-die="${d}" aria-label="Remove a d${d}">−</button>
          <span class="die-count" id="count-${d}">${counts[d]}</span>
          <button class="btn-stepper inc" data-die="${d}" aria-label="Add a d${d}">+</button>
        </div>
      </div>
    `
    ).join('');

    container.innerHTML = `
      <div class="page-dice">
        <h2 class="page-title">🎲 Dice Roller</h2>
        <div class="dice-selector">${diceSelectors}</div>
        <div class="dice-modifier">
          <label for="modInput">Modifier</label>
          <input type="number" id="modInput" class="input" value="${modifier}" min="-99" max="99" />
        </div>
        <div class="dice-actions">
          <button class="btn btn-primary" id="rollBtn">🎲 Roll</button>
          <button class="btn btn-ghost" id="clearBtn">Clear</button>
        </div>
        <div id="results" class="dice-results${lastResults ? '' : ' hidden'}">
          ${getRollSummary()}
        </div>
      </div>
    `;

    attachEvents();
  }

  function roll() {
    const rolls = [];
    for (const die of DICE_TYPES) {
      for (let i = 0; i < counts[die]; i++) {
        rolls.push({ die, value: Math.floor(Math.random() * die) + 1 });
      }
    }
    if (rolls.length === 0) {
      // Shake the roll button to indicate nothing selected
      const btn = container.querySelector('#rollBtn');
      btn.style.transform = 'translateX(-4px)';
      setTimeout(() => (btn.style.transform = 'translateX(4px)'), 80);
      setTimeout(() => (btn.style.transform = ''), 160);
      return;
    }

    const sum = rolls.reduce((acc, r) => acc + r.value, 0) + modifier;
    lastResults = { rolls, total: sum };

    const resultsEl = container.querySelector('#results');
    resultsEl.classList.remove('hidden');
    resultsEl.innerHTML = getRollSummary();

    // Trigger roll animation on each die card
    resultsEl.querySelectorAll('.die-result').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('rolling');
        el.addEventListener('animationend', () => el.classList.remove('rolling'), { once: true });
      }, i * 40);
    });
  }

  function attachEvents() {
    container.querySelectorAll('.btn-stepper.inc').forEach((btn) => {
      btn.addEventListener('click', () => {
        const die = Number(btn.dataset.die);
        counts[die] = Math.min(counts[die] + 1, 20);
        container.querySelector(`#count-${die}`).textContent = counts[die];
      });
    });

    container.querySelectorAll('.btn-stepper.dec').forEach((btn) => {
      btn.addEventListener('click', () => {
        const die = Number(btn.dataset.die);
        counts[die] = Math.max(counts[die] - 1, 0);
        container.querySelector(`#count-${die}`).textContent = counts[die];
      });
    });

    container.querySelector('#modInput').addEventListener('input', (e) => {
      modifier = parseInt(e.target.value, 10) || 0;
    });

    container.querySelector('#rollBtn').addEventListener('click', roll);

    container.querySelector('#clearBtn').addEventListener('click', () => {
      DICE_TYPES.forEach((d) => { counts[d] = 0; });
      modifier = 0;
      lastResults = null;
      buildPage();
    });
  }

  buildPage();
}
