class CustomStack {
  private stack: number[] = [];

  push(item: number) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  print() {
    console.log(stack);
  }
}

const stack = new CustomStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();

stack.pop();

stack.print();

console.log(stack.peek());
