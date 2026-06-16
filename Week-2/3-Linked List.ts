// Traversal Skeleton

// let current = head;

// while (current !== null) {
//    // work
//    current = current.next;
// }
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}

const n1 = new ListNode(10);
const n2 = new ListNode(20);
const n3 = new ListNode(30);

n1.next = n2;
n2.next = n3;

function traverse(head: ListNode | null) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}
function listLength(head: ListNode | null) {
  let current = head;
  let length = 0;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}
function contains(head: ListNode | null, target: number): boolean {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
}
function getNodeValue(head: ListNode | null, index: number): number | null {
  let current = head;
  let currentIndex = 0;
  while (current !== null) {
    if (currentIndex == index) return current.val;
    currentIndex++;
    current = current.next;
  }
  return null;
}
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
// n1 -> n2 -> n3
// iteration   prev  next    current
// 0           null  n2      n1                 n1
// 1           n1    n3      n2                 n1->null
// 2           n2    n3      n3                 n2->n1->null
// 3           n3    null    null                 n3->n2->n1->null

// traverse(n1);
// console.log(listLength(n1));
// console.log(contains(n1, 20));
// console.log(getNodeValue(n1, 2));
