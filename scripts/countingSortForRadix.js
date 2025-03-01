import { blinkBar } from "./main.js";

export async function countingSortForRadix(bars, barElements, sleep, speed, exp) {
  const n = bars.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) count[Math.floor(bars[i] / exp) % 10]++;
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(bars[i] / exp) % 10;
    output[count[index] - 1] = bars[i];
    count[index]--;
  }
  for (let i = 0; i < n; i++) {
    bars[i] = output[i];
    barElements[i].style.height = `${bars[i] * 3}px`;
    await blinkBar(barElements[i], sleep, speed);
  }
}
