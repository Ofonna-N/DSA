class BSTNODE {
  value: number;
  left: BSTNODE | null;
  right: BSTNODE | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNODE | null;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    let newNode = new BSTNODE(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(value: number) {
    let current = this.root;

    while (current) {
      if (current.value == value) {
        return true;
      } else if (current.value < value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  dfs_Print_Pre_rec(node = this.root) {
    if (node == null) return;

    console.log(node.value);

    this.dfs_Print_Pre_rec(node.left);
    this.dfs_Print_Pre_rec(node.right);
  }
}

const tree = new BST();

tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(1);
console.log(tree.root);

console.log("10 in tree", tree.find(10));
console.log("2 in tree", tree.find(2));

tree.dfs_Print_Pre_rec();
