import { blinkBar } from "./main.js";

export async function countingSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  const output = new Array(n).fill(0);
  const count = new Array(101).fill(0);
  for (let i = 0; i < n; i++) count[bars[i]]++;
  for (let i = 1; i <= 100; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    output[count[bars[i]] - 1] = bars[i];
    count[bars[i]]--;
  }
  for (let i = 0; i < n; i++) {
    bars[i] = output[i];
    barElements[i].style.height = `${bars[i] * 3}px`;
    await blinkBar(barElements[i], sleep, speed);
  }
}
