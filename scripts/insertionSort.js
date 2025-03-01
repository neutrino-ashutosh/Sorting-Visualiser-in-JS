import { blinkBar } from "./main.js";

export async function insertionSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  for (let i = 1; i < n; i++) {
    const key = bars[i];
    let j = i - 1;
    while (j >= 0 && bars[j] > key) {
      await blinkBar(barElements[j], sleep, speed);
      bars[j + 1] = bars[j];
      barElements[j + 1].style.height = `${bars[j + 1] * 3}px`;
      j--;
    }
    bars[j + 1] = key;
    barElements[j + 1].style.height = `${key * 3}px`;
    await blinkBar(barElements[j + 1], sleep, speed);
  }
}
