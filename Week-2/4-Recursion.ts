// recursion with memoization
function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (memo.has(n)) return memo.get(n)!;
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo.set(n, result);
  return result;
}

console.log(fibonacci(5));
