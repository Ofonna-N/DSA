import CustomStack from "../stacks/CustomStack";
// const CustomStack = require("../stacks/CustomStack")

class CustomQueue {
  stack1: CustomStack;
  stack2: CustomStack;

  constructor() {
    this.stack1 = new CustomStack();
    this.stack2 = new CustomStack();
  }

  enqueue(item: number) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Que empty");
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        const item = this.stack1.pop();
        this.stack2.push(item || 0);
      }

      return this.stack2.pop();
    }
  }

  peek() {
    return this.stack2.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  print() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        const item = this.stack1.pop();
        this.stack2.push(item || 0);
      }

      this.stack2.print();
    }
  }
}

const queue = new CustomQueue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

console.log(queue.dequeue());

queue.print();

// queue.print();
