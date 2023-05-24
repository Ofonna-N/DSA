class CustomArray {
  #arr = [];

  insert(element) {
    this.#arr.push(element);
  }

  removeAt(index) {
    if (index < 0 || index >= this.#arr.length) {
      throw new Error("Index out of range");
    }

    this.#arr.splice(index, 1);
  }

  remove(element) {
    if (!this.#arr.includes(element)) return;
    this.#arr = this.#arr.filter((x) => x !== element);
  }

  indexOf(element) {
    return this.#arr.indexOf(element);
  }

  print() {
    // this.#arr.forEach((element) => {
    //   console.log(element);
    // });

    console.log(this.#arr);
  }
}

const arr = new CustomArray();
arr.insert(10);
arr.insert(12);
arr.insert(15);
arr.print();

arr.remove(10);
arr.print();

arr.insert(17);
arr.print();

arr.insert(22);
arr.print();

arr.removeAt(2);
arr.print();

const index = arr.indexOf(22);
// arr.print();
console.log(index);
