import { blinkBar } from "./main.js";

export async function bubbleSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (bars[j] > bars[j + 1]) {
        await blinkBar(barElements[j], sleep, speed);
        await blinkBar(barElements[j + 1], sleep, speed);
        [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
        barElements[j].style.height = `${bars[j] * 3}px`;
        barElements[j + 1].style.height = `${bars[j + 1] * 3}px`;
      }
    }
  }
}
