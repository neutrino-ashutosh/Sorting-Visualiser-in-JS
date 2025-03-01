import { countingSortForRadix } from "./countingSortForRadix.js";

export async function radixSort(bars, barElements, sleep, speed) {
  const max = Math.max(...bars);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    await countingSortForRadix(bars, barElements, sleep, speed, exp);
  }
}
