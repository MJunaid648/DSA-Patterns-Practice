// 💡 Key Idea (this is EVERYTHING)
// At each index, you ask:
// “Should I extend my current subarray, or start fresh from here?”

// 🧠 When to recognize Kadane in interviews
// If you see:
// maximum subarray sum
// maximum profit
// best contiguous gain/loss
// can reset anytime

// 👉 think: Kadane / dynamic running sum
function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6  (subarray [4, -1, 2, 1])
console.log(maxSubArray(input));

// 🔥 Core intuition
// Kadane is basically:
// If previous sum is helping → keep it
// If it is hurting → throw it away
