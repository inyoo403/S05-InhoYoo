Code Smells Identified

1. Global Data
2. Duplicated Code
3. Magic Literals
4. Long Function
5. Shotgun Surgery

Refactoring Summary

1. Global Data was eliminated by encapsulating the counter’s state inside a closure using the makeCounter() function, preventing uncontrolled access and side effects.
2. Duplicated UI logic was removed by consolidating all repeated DOM updates into the updateDisplay() helper. This single source of truth updates the counter text, document title, and background color consistently. Each button now simply triggers a counter operation and calls updateDisplay(), minimizing redundancy and maintenance overhead.
3. Magic Literals were replaced with descriptive constant objects—IDS, TEXT, and COLORS—which improve readability, enable global adjustments from a single location, and give semantic meaning to previously arbitrary string values.
4. The original Long Function was decomposed into smaller, single-purpose functions: createUI() for DOM creation, makeCounter() for state management, and start() for initialization and event wiring.
5. Shotgun Surgery was mitigated by unifying all display-related logic within the helper layer, ensuring that future UI or behavioral changes can be made in a single place instead of multiple scattered handlers.
