import { blinkBar } from "./main.js";

export async function bucketSort(bars, barElements, sleep, speed) {
  const n = bars.length;
  const buckets = Array.from({ length: 10 }, () => []);
  for (let i = 0; i < n; i++) {
    const index = Math.floor(bars[i] / 10);
    buckets[index].push(bars[i]);
  }
  buckets.forEach(bucket => bucket.sort((a, b) => a - b));
  let idx = 0;
  for (const bucket of buckets) {
    for (const num of bucket) {
      bars[idx] = num;
      barElements[idx].style.height = `${num * 3}px`;
      await blinkBar(barElements[idx], sleep, speed);
      idx++;
    }
  }
}
