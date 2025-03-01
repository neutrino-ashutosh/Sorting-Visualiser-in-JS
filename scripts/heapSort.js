import { blinkBar } from "./main.js";

async function heapify(bars, barElements, sleep, speed, n, i) {
  let largest = i, left = 2 * i + 1, right = 2 * i + 2;
  if (left < n && bars[left] > bars[largest]) largest = left;
  if (right < n && bars[right] > bars[largest]) largest = right;
  if (largest !== i) {
    await blinkBar(barElements[i], sleep, speed);
    await blinkBar(barElements[largest], sleep, speed);
    [bars[i], bars[largest]] = [bars[largest], bars[i]];
    barElements[i].style.height = `${bars[i] * 3}px`;
    barElements[largest].style.height = `${bars[largest] * 3}px`;
    await heapify(bars, barElements, sleep, speed, n, largest);
  }
}

export async function heapSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(bars, barElements, sleep, speed, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
    await blinkBar(barElements[0], sleep, speed);
    await blinkBar(barElements[i], sleep, speed);
    [bars[0], bars[i]] = [bars[i], bars[0]];
    barElements[0].style.height = `${bars[0] * 3}px`;
    barElements[i].style.height = `${bars[i] * 3}px`;
    await heapify(bars, barElements, sleep, speed, i, 0);
  }
}
