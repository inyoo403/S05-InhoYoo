// These constants are for button IDs and heading text
const IDS = {
  INC: "increment",
  DEC: "decrement",
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
  if (n === 0) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = n % 2 ? COLORS.ODD : COLORS.EVEN;
  }
}

type View = {
  valueEl: HTMLSpanElement;
  btnInc: HTMLButtonElement;
  btnDec: HTMLButtonElement;
  btnReset: HTMLButtonElement;
};

function createUI(): View {
  document.body.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = TEXT.HEADING;

  const p = document.createElement("p");
  p.textContent = TEXT.LABEL;

  const valueEl = document.createElement("span");
  valueEl.id = IDS.VALUE;
  valueEl.textContent = "0";
  p.appendChild(valueEl);

  const btnInc = document.createElement("button");
  btnInc.id = IDS.INC;
  btnInc.textContent = "Click Me!";

  const btnDec = document.createElement("button");
  btnDec.id = IDS.DEC;
  btnDec.textContent = "Decrement";

  const btnReset = document.createElement("button");
  btnReset.id = IDS.RESET;
  btnReset.textContent = "Reset";

  document.body.append(h1, p, btnInc, btnDec, btnReset);

  return { valueEl, btnInc, btnDec, btnReset };
}

function updateDisplay(view: View, n: number) {
  view.valueEl.textContent = String(n);
  updateTitle(n);
  updateColor(n);
}

function makeCounter(initial = 0) {
  let value = initial;
  const listeners = new Set<(n: number) => void>();
  const notify = () => listeners.forEach((fn) => fn(value));
  return {
    get: () => value,
    inc: () => {
      value++;
      notify();
    },
    dec: () => {
      value--;
      notify();
    },
    reset: () => {
      value = 0;
      notify();
    },
    onChange: (fn: (n: number) => void) => {
      listeners.add(fn);
      fn(value);
    },
  };
}

function start() {
  const view = createUI();
  const counter = makeCounter(0);

  counter.onChange((n) => updateDisplay(view, n));
  view.btnInc.addEventListener("click", counter.inc);
  view.btnDec.addEventListener("click", counter.dec);
  view.btnReset.addEventListener("click", counter.reset);
}

start();
