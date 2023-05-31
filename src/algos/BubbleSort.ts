class BubbleSort {
  sort(arr: number[]) {
    console.log("before: ", arr);
    for (let i = 0; i < arr.length; i++) {
      let isSorted: boolean = true;
      for (let j = 1; j < arr.length - 1; j++) {
        if (arr[j] < arr[j - 1]) {
          this.swap(arr, j);
          isSorted = false;
        }
      }

      if (isSorted) break;
    }

    console.log("after: ", arr);
  }

  swap(arr: number[], index: number) {
    let temp = arr[index];
    arr[index] = arr[index - 1];
    arr[index - 1] = temp;
  }
}

const bubbleSort = new BubbleSort();

bubbleSort.sort([3, 2, 1, 6, 4, 5]);
