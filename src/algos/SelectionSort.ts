function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[minIndex]) {
        minIndex = k;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}

const array = [4, 3, 2, 1, 2];

console.log("before sort: ", array);

selectionSort(array);

console.log("after sort: ", array);
