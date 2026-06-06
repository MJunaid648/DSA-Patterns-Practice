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
