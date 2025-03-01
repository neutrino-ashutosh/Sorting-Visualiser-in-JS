import { blinkBar } from "./main.js";

async function merge(bars, barElements, sleep, speed, start, mid, end) {
  const left = bars.slice(start, mid + 1);
  const right = bars.slice(mid + 1, end + 1);
  let i = 0, j = 0, k = start;
  while (i < left.length && j < right.length) {
    bars[k] = (left[i] < right[j]) ? left[i++] : right[j++];
    barElements[k].style.height = `${bars[k] * 3}px`;
    await blinkBar(barElements[k], sleep, speed);
    k++;
  }
  while (i < left.length) {
    bars[k] = left[i++];
    barElements[k].style.height = `${bars[k] * 3}px`;
    await blinkBar(barElements[k], sleep, speed);
    k++;
  }
  while (j < right.length) {
    bars[k] = right[j++];
    barElements[k].style.height = `${bars[k] * 3}px`;
    await blinkBar(barElements[k], sleep, speed);
    k++;
  }
}

export async function mergeSort(bars, barElements, sleep, speed, start, end) {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  await mergeSort(bars, barElements, sleep, speed, start, mid);
  await mergeSort(bars, barElements, sleep, speed, mid + 1, end);
  await merge(bars, barElements, sleep, speed, start, mid, end);
}
