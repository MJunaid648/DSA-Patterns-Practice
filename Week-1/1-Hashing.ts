// Contains Duplicate
function containDuplicates(arr: number[]): boolean {
  return new Set(arr).size !== arr.length;
}
// console.log(containDuplicates([1, 2, 3, 4, 4]));

// Is Anangram
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const charMap: Record<string, number> = {};
  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for (const char of t) {
    charMap[char]--;
    if (charMap[char] < 0) return false;
  }
  return true;
}
// console.log("Is anagram: ", isAnagram("aab", "aba"));

function unsortedTwoSum(nums: number[], target: number): number[] {
  let indexMap: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let diff = target - currentNum;
    console.log("map:", indexMap);
    console.log("diff:", diff);
    if (diff in indexMap) return [i, indexMap[diff]];
    indexMap[currentNum] = i;
  }
  return [0, 0];
}

// console.log(unsortedTwoSum([2, 7, 11, 15], 9));
