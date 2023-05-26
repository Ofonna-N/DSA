type Table = {
  [key: string]: string;
};

class HashTable {
  private table: Table = {};

  constructor() {
    this.table = {};
  }

  get(key: string) {
    return this.table[key];
  }

  set(key: string, value: string) {
    this.table[key] = value;
  }

  delete(key: string) {
    delete this.table[key];
  }

  print() {
    console.log(this.table);
  }
}

const hash = new HashTable();
hash.set("name", "Mike");
hash.set("age", "10");
hash.delete("age");
hash.print();

// console.log("Hello 0 0");
