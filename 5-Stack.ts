// ===============================
// STACK PATTERN PLAYBOOK
// ===============================

// Mental Trigger

// Whenever you see:
// - matching pairs ((), {}, [])
// - nested structure
// - need to remember last seen item
// - undo / backtracking behavior
// - “most recent” dependency
// - evaluate expressions / parsing

// your brain should immediately ask:
// Do I need to remember the MOST RECENT unresolved item?
// If yes → STACK (LIFO)

// ===============================
// 1. VALID PARENTHESIS
// ===============================

// Pattern: Matching using stack

function validParenthesis(s: string): boolean {
  const stack: string[] = [];

  const pair: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    // OPENING → store for future matching
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // CLOSING → must match most recent opening
    else {
      if (stack.length === 0) return false;

      const top = stack.pop();
      if (top !== pair[char]) return false;
    }
  }

  // all opens must be closed
  return stack.length === 0;
}

// ===============================
// KEY IDEA
// ===============================

// Stack stores "unfinished work"
// Last opened bracket must close first → LIFO rule

// Failure cases:
// 1. closing bracket with empty stack
// 2. mismatch with top of stack
// 3. leftover opening brackets at end

// ===============================
// 2. MIN STACK (AUXILIARY STACK PATTERN)
// ===============================

// Pattern: Maintain state at every level of stack

class MinStack {
  stack: number[] = [];
  minStack: number[] = [];

  push(x: number) {
    this.stack.push(x);

    // store minimum up to this point
    if (this.minStack.length === 0) {
      this.minStack.push(x);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(x, currentMin));
    }
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
      this.minStack.pop();
    }
  }

  top(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number | undefined {
    return this.minStack[this.minStack.length - 1];
  }
}

// ===============================
// KEY IDEA
// ===============================

// At each step, we store EXTRA INFORMATION:
// - not just value
// - but state (min so far)

// Pattern type:
// → “Mirror stack / helper stack / state stack”

// ===============================
// STACK THINKING FRAMEWORK
// ===============================

// Ask yourself:

// 1. Do I need the most recent element?
//    → YES → stack
//
// 2. Do I need to match pairs / nested structure?
//    → YES → stack
//
// 3. Do I need to undo or backtrack steps?
//    → YES → stack
//
// 4. Do I need to track state per step?
//    → YES → auxiliary stack

// ===============================
// STACK INTUITION SUMMARY
// ===============================

// Stack = memory of unfinished work
// LIFO = last unresolved problem gets solved first
// Used when order matters in reverse dependency chain
