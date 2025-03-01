
- **index.html**: Contains the UI structure (controls, container, info card, footer).  
- **styles.css**: Manages the visual layout and appearance.  
- **main.js**: Core logic, event handlers, speed settings, info card updates.  
- **bubbleSort.js**, **selectionSort.js**, etc.: Each file contains one sorting algorithm.

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- (Optional) A local web server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode) for best results, but you can also open `index.html` directly in your browser.

### Installation & Setup
1. **Clone or Download** this repository.
2. **Open `index.html`** in your browser (or serve it via a local server).
3. You’ll see the controls at the top and an empty container for bars.

### Usage
1. **Number of Bars**: Set how many bars to generate (e.g., 50).
2. **Algorithm**: Select from the dropdown (Bubble, Selection, etc.).
3. **Speed**: Choose Slow, Medium, or Fast.
4. **Generate Bars**: Creates new bars of random heights.
5. **Start Sorting**: Runs the chosen algorithm, blinking any bars that move.  
   - Watch the info card for a short description and complexities.

---

## Algorithms Overview

1. **Bubble Sort**  
   - Compares adjacent pairs and swaps if out of order.  
   - Time: O(n^2), Space: O(1)

2. **Selection Sort**  
   - Finds the minimum and places it at the start.  
   - Time: O(n^2), Space: O(1)

3. **Insertion Sort**  
   - Inserts each element into the correct position among the sorted portion.  
   - Time: O(n^2), Space: O(1)

4. **Merge Sort**  
   - Recursively divides the array, sorts each half, and merges.  
   - Time: O(n log n), Space: O(n)

5. **Quicksort**  
   - Uses a pivot to partition the array, then sorts partitions recursively.  
   - Time: O(n log n), Space: O(log n)

6. **Counting Sort**  
   - Counts occurrences of each distinct element, then outputs in order.  
   - Time: O(n + k), Space: O(k)

7. **Radix Sort**  
   - Sorts by individual digits, from least to most significant.  
   - Time: O(d*(n + k)), Space: O(n + k)

8. **Bucket Sort**  
   - Distributes elements into buckets, sorts buckets, and concatenates.  
   - Time: O(n + k), Space: O(n*k)

9. **Heap Sort**  
   - Builds a heap, repeatedly extracts the top, and heapifies.  
   - Time: O(n log n), Space: O(1)

10. **Shell Sort**  
    - Variation of insertion sort with decreasing gap sizes.  
    - Time: O(n^(3/2)) or depends on gap sequence, Space: O(1)

---

## Customization

- **Blink Behavior**: Adjust `blinkBar` in `main.js` for different colors or number of blinks.  
- **Speeds**: Modify `speedSelect.addEventListener("change", ...)` in `main.js` to set your own delays.  
- **Styling**: Update `styles.css` for different backgrounds, bar colors, or layouts.

---
