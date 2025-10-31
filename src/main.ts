let counter = 0;

// These constants are for button IDs and heading text
const IDS = {
  INC: "increment",
  DEC: "dec",
  RESET: "reset",
  VALUE: "counter",
} as const;

const TEXT = {
  HEADING: "CMPM 121 Project",
  TITLE: "Clicked ",
  LABEL: "Counter: ",
} as const;

const COLORS = {
  ODD: "pink",
  EVEN: "lightblue",
} as const;

function updateTitle(n: number) {
  document.title = TEXT.TITLE + n;
}

function updateColor(n: number) {
  document.body.style.backgroundColor = n % 2 ? COLORS.ODD : COLORS.EVEN;
}

function updateDisplay(valueEl: HTMLElement, n: number) {
  valueEl.textContent = String(n);
  updateTitle(n);
  updateColor(n);
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${TEXT.HEADING}</h1>
    <p>${TEXT.LABEL}<span id="${IDS.VALUE}">0</span></p>
    <button id="${IDS.INC}">Click Me!</button>
    <button id="${IDS.DEC}">Decrement</button>
    <button id="${IDS.RESET}">Reset</button>
  `;

  const btnInc = document.getElementById(IDS.INC);
  const btnDec = document.getElementById(IDS.DEC);
  const btnReset = document.getElementById(IDS.RESET);
  const valueEl = document.getElementById(IDS.VALUE);

  // Check if any element is missing, then exit the function
  if (!btnInc || !btnDec || !btnReset || !valueEl) return;

  btnInc.addEventListener("click", () => {
    counter++;
    updateDisplay(valueEl, counter);
  });
  btnDec.addEventListener("click", () => {
    counter--;
    updateDisplay(valueEl, counter);
  });
  btnReset.addEventListener("click", () => {
    counter = 0;
    updateDisplay(valueEl, counter);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
