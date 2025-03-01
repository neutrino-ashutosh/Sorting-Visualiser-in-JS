import { blinkBar } from "./main.js";

async function partition(bars, barElements, sleep, speed, start, end) {
  const pivot = bars[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (bars[j] < pivot) {
      await blinkBar(barElements[j], sleep, speed);
      await blinkBar(barElements[i], sleep, speed);
      [bars[i], bars[j]] = [bars[j], bars[i]];
      barElements[i].style.height = `${bars[i] * 3}px`;
      barElements[j].style.height = `${bars[j] * 3}px`;
      i++;
    }
  }
  await blinkBar(barElements[i], sleep, speed);
  await blinkBar(barElements[end], sleep, speed);
  [bars[i], bars[end]] = [bars[end], bars[i]];
  barElements[i].style.height = `${bars[i] * 3}px`;
  barElements[end].style.height = `${bars[end] * 3}px`;
  return i;
}

export async function quickSort(bars, barElements, sleep, speed, start, end) {
  if (start < end) {
    const pivotIndex = await partition(bars, barElements, sleep, speed, start, end);
    await quickSort(bars, barElements, sleep, speed, start, pivotIndex - 1);
    await quickSort(bars, barElements, sleep, speed, pivotIndex + 1, end);
  }
}
