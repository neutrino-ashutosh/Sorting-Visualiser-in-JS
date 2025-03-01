import { bubbleSort } from "./bubbleSort.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { countingSort } from "./countingSort.js";
import { radixSort } from "./radixSort.js";
import { bucketSort } from "./bucketSort.js";
import { heapSort } from "./heapSort.js";
import { shellSort } from "./shellSort.js";

const container = document.getElementById("bars-container");
const speedSelect = document.getElementById("speed");
const algorithmSelect = document.getElementById("algorithm");
const generateBtn = document.getElementById("generate");
const startBtn = document.getElementById("start");
const numBarsInput = document.getElementById("numBars");
const infoTitle = document.getElementById("info-title");
const infoDescription = document.getElementById("info-description");
const infoComplexity = document.getElementById("info-complexity");
const githubLink = document.getElementById("github-link");
let bars = [];
let speed = 500;

const sortDetails = {
  bubble: {
    title: "Bubble Sort",
    description: "Repeatedly compares adjacent elements and swaps if out of order.",
    complexity: "Time: O(n^2), Space: O(1)"
  },
  selection: {
    title: "Selection Sort",
    description: "Selects the smallest element and places it at the beginning iteratively.",
    complexity: "Time: O(n^2), Space: O(1)"
  },
  insertion: {
    title: "Insertion Sort",
    description: "Builds the final array one item at a time.",
    complexity: "Time: O(n^2), Space: O(1)"
  },
  merge: {
    title: "Merge Sort",
    description: "Divides array into halves, sorts each half, and merges.",
    complexity: "Time: O(n log n), Space: O(n)"
  },
  quick: {
    title: "Quicksort",
    description: "Uses a pivot to partition the array and recursively sort sub-parts.",
    complexity: "Time: O(n log n), Space: O(log n)"
  },
  counting: {
    title: "Counting Sort",
    description: "Counts occurrences of each distinct element, then places them.",
    complexity: "Time: O(n + k), Space: O(k)"
  },
  radix: {
    title: "Radix Sort",
    description: "Sorts numbers by processing digits from least to most significant.",
    complexity: "Time: O(d*(n + k)), Space: O(n + k)"
  },
  bucket: {
    title: "Bucket Sort",
    description: "Distributes elements into buckets, sorts them, and concatenates.",
    complexity: "Time: O(n + k), Space: O(n*k)"
  },
  heap: {
    title: "Heap Sort",
    description: "Builds a heap and repeatedly extracts the max (or min).",
    complexity: "Time: O(n log n), Space: O(1)"
  },
  shell: {
    title: "Shell Sort",
    description: "Generalization of insertion sort with a gap strategy.",
    complexity: "Time: O(n^(3/2)) depends on gap, Space: O(1)"
  }
};

export function blinkBar(element, sleepFn, s) {
  // 2-blink pattern
  return new Promise(async (resolve) => {
    for (let i = 0; i < 2; i++) {
      element.style.backgroundColor = "red";
      await sleepFn(s / 2);
      element.style.backgroundColor = "blue";
      await sleepFn(s / 2);
    }
    resolve();
  });
}

function generateBars(num = 50) {
  container.innerHTML = "";
  bars = [];
  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    container.appendChild(bar);
    bars.push(value);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateAlgorithmInfo(algo) {
  const details = sortDetails[algo];
  if (details) {
    infoTitle.textContent = details.title;
    infoDescription.textContent = details.description;
    infoComplexity.textContent = details.complexity;
  } else {
    infoTitle.textContent = "";
    infoDescription.textContent = "";
    infoComplexity.textContent = "";
  }
}

async function startSorting() {
  const algo = algorithmSelect.value;
  updateAlgorithmInfo(algo);
  const barElements = document.getElementsByClassName("bar");
  if (algo === "bubble") await bubbleSort(bars, barElements, sleep, speed);
  else if (algo === "selection") await selectionSort(bars, barElements, sleep, speed);
  else if (algo === "insertion") await insertionSort(bars, barElements, sleep, speed);
  else if (algo === "merge") await mergeSort(bars, barElements, sleep, speed, 0, bars.length - 1);
  else if (algo === "quick") await quickSort(bars, barElements, sleep, speed, 0, bars.length - 1);
  else if (algo === "counting") await countingSort(bars, barElements, sleep, speed);
  else if (algo === "radix") await radixSort(bars, barElements, sleep, speed);
  else if (algo === "bucket") await bucketSort(bars, barElements, sleep, speed);
  else if (algo === "heap") await heapSort(bars, barElements, sleep, speed);
  else if (algo === "shell") await shellSort(bars, barElements, sleep, speed);
}

// Speeds: slow, medium, fast
speedSelect.addEventListener("change", () => {
  const sel = speedSelect.value;
  if (sel === "slow") speed = 120;
  else if (sel === "medium") speed = 60;
  else speed = 15;
});

generateBtn.addEventListener("click", () => {
  generateBars(parseInt(numBarsInput.value));
  updateAlgorithmInfo(algorithmSelect.value);
});

startBtn.addEventListener("click", () => startSorting());

// Update this link as needed
githubLink.href = "https://github.com/neutrino-ashutosh/Sorting-Visualiser-in-JS";

generateBars(parseInt(numBarsInput.value));
updateAlgorithmInfo(algorithmSelect.value);
