// ===============================
// BINARY SEARCH PATTERN PLAYBOOK
// ===============================

// Mental Trigger

// Whenever you see:
// - sorted array
// - sorted answer space
// - search efficiently
// - find first / last occurrence
// - minimum or maximum satisfying condition
// - "can we do better than O(n)?"

// your brain should immediately ask:
// Can I eliminate HALF of the remaining search space?
// If yes → BINARY SEARCH

// Core Idea

// Instead of checking every element,
// repeatedly divide the search space into halves.

// Time Complexity:
// O(log n)

// Common Variants:
// 1. Exact search
// 2. First occurrence
// 3. Last occurrence
// 4. Lower bound
// 5. Upper bound
// 6. Binary search on answer
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
let nums = [1, 3, 5, 7, 9, 10];
let target = 5;
console.log(binarySearch(nums, target));

// Binary Search
// - Condition: left <= right (= handles single element case)
// - mid = left + Math.floor((right - left) / 2) (overflow-safe)
// - Shrink window: right = mid-1 or left = mid+1 (never mid — infinite loop)
// - O(log n) — halves search space each iteration
