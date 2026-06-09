// Mental Trigger

// Whenever you see:
// subarray
// substring
// consecutive
// contiguous
// window size k

// your brain should immediately ask:
// Can I reuse work from the previous range?
// If yes:=> Sliding Window

// 1. maximum sum of k elements
function maxSubArraySum(nums: number[], k: number): number {
  let winstart = 0;
  let winEnd = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;
  for (winEnd; winEnd < nums.length; winEnd++) {
    currSum += nums[winEnd];
    if (winEnd >= k - 1) {
      maxSum = Math.max(currSum, maxSum);
      currSum -= nums[winstart];
      winstart++;
    }
  }
  return maxSum;
}
// console.log("maxSubArraySum: ", maxSubArraySum([2, 1, 5, 1, 3, 2], 3));

// length of the smallest contiguous subarray with sum >= target
function minSubArrayWithSumK(nums: number[], target: number): number {
  let winstart = 0;
  let winEnd = 0;
  let minSubArrayLength = Number.POSITIVE_INFINITY;
  let currSum = 0;
  for (winEnd; winEnd < nums.length; winEnd++) {
    currSum += nums[winEnd];
    while (currSum >= target) {
      minSubArrayLength = Math.min(minSubArrayLength, winEnd - winstart + 1);
      currSum -= nums[winstart];
      winstart++;
    }
  }
  return minSubArrayLength === Infinity ? 0 : minSubArrayLength;
}
// console.log(
//   "minSubArrayWithSumK: ",
//   minSubArrayWithSumK([2, 1, 5, 2, 3, 2], 7),
// );

function lengthOfLongestSubstring(s: string): number {
  let winStart = 0;
  let maxLength = 0;
  const freq: Record<string, number> = {};
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    const rightChar = s[winEnd];
    freq[rightChar] = (freq[rightChar] || 0) + 1;
    while (freq[rightChar] > 1) {
      const leftChar = s[winStart];
      freq[leftChar]--;
      winStart++;
    }
    maxLength = Math.max(maxLength, winEnd - winStart + 1);
  }
  return maxLength;
}
// console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("abcabcbb"));
