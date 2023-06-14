function InsertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let pointer = i - 1;

    while (pointer >= 0 && arr[pointer] > current) {
      arr[pointer + 1] = arr[pointer];
      pointer--;
    }

    arr[pointer + 1] = current;
  }
}

const num = [4, 3, 2, 1, 2];

console.log("before sort: ", num);

InsertionSort(num);

console.log("after sort: ", num);
