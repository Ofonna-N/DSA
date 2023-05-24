import NodeCustom from "./CustomNode";

class LinkedList {
  private head: NodeCustom | null = null;
  private tail: NodeCustom | null = null;

  public length = 0;

  addFirst(value: number) {
    const node = new NodeCustom(value);
    this.updateLength(1);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  addLast(value: number) {
    const node = new NodeCustom(value);
    this.updateLength(1);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.tail != null) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeFirst() {
    if (this.head === null) return;
    this.updateLength(-1);
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    const newHead = this.head.next;

    this.head.next = null;
    this.head = newHead;
  }

  removeLast() {
    if (this.isEmpty()) return;
    this.updateLength(-1);
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    let current = this.head;

    while (current) {
      if (current.next === this.tail) break;
      current = current.next;
    }

    current!.next = null;
    this.tail = current;
  }

  reverse() {
    if (this.isEmpty()) return;

    if (this.head === this.tail) return;

    let current = this.head;
    let prev: null | NodeCustom = null;

    // this.head = this.tail;
    // this.tail = current;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  indexOf(value: number) {
    if (this.isEmpty()) {
      return -1;
    }

    let current = this.head;
    let i = 0;
    while (current != null) {
      if (current.value == value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return -1;
  }

  constains(value: number) {
    return this.indexOf(value) != -1;
  }

  private updateLength(value: number) {
    this.length += value;
  }

  private isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;
    const printArr: NodeCustom[] = [];
    while (current != null) {
      printArr.push(current);

      current = current.next;
    }
    console.log(printArr);
  }
}

const linkedList = new LinkedList();
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.print();
console.log("length: ", linkedList.length);
console.log("space =====");
linkedList.addFirst(8);
linkedList.print();
console.log("length: ", linkedList.length);
console.log("index of 2", linkedList.indexOf(2));
console.log("Linked List contains 3", linkedList.constains(13));
console.log("Linked List contains 2", linkedList.constains(2));
console.log("space =====");
linkedList.removeFirst();
linkedList.print();
console.log("length: ", linkedList.length);
// console.log("space ===== removed last");
// linkedList.removeLast();
// linkedList.print();
// console.log("length: ", linkedList.length);
console.log("==space==");
linkedList.reverse();
linkedList.print();
