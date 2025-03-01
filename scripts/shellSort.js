import { blinkBar } from "./main.js";

export async function shellSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = bars[i];
      let j = i;
      while (j >= gap && bars[j - gap] > temp) {
        await blinkBar(barElements[j], sleep, speed);
        bars[j] = bars[j - gap];
        barElements[j].style.height = `${bars[j] * 3}px`;
        j -= gap;
      }
      bars[j] = temp;
      barElements[j].style.height = `${bars[j] * 3}px`;
      await blinkBar(barElements[j], sleep, speed);
    }
    gap = Math.floor(gap / 2);
  }
}
