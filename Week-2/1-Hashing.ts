// Group Anagrams — given an array of strings, group the anagrams together.
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

function groupAnagrams(input: string[]): string[][] {
  const map: Record<string, string[]> = {};
  for (const str of input) {
    const key = str.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
