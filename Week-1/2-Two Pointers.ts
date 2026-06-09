// TWO SUM
const nums = [2, 7, 11, 15];
const target = 9;
function twoSum(arr: number[], target: number): number[] | undefined {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--;
    else left++;
  }
}
// console.log("Two Sum:", twoSum(nums, target));

// PALINDROME
function validPalindrome(str: string): boolean {
  if (str.length === 1) return true;
  let left = 0;
  let right = str.length - 1;
  const isAlphaNum = /[a-z0-9]/i;
  while (left < right) {
    if (!isAlphaNum.test(str[left])) left++;
    else if (!isAlphaNum.test(str[right])) right--;
    else if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}
// console.log(
//   "Valid Palindrome:",
//   validPalindrome("A man, a plan, a canal: Panama"),
// );

// Container With Most Water
function mostWater(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  while (left < right) {
    const currContainerHeight = Math.min(height[left], height[right]);
    const currWidth = right - left;
    maxWater = Math.max(maxWater, currContainerHeight * currWidth);
    if (height[left] > height[right]) right--;
    else left++;
  }
  return maxWater;
}
// console.log(
//   "Container with most area:",
//   mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]),
// );

// Remove Duplicates from Sorted Array
// Unique items in sorted array
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
// console.log("Unique items: ", removeDuplicates([1, 2, 2, 3, 3, 4]));
