import { blinkBar } from "./main.js";

export async function selectionSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (bars[j] < bars[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      await blinkBar(barElements[i], sleep, speed);
      await blinkBar(barElements[minIndex], sleep, speed);
      [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
      barElements[i].style.height = `${bars[i] * 3}px`;
      barElements[minIndex].style.height = `${bars[minIndex] * 3}px`;
    }
  }
}
