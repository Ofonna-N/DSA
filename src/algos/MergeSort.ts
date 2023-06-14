class MergeSort {
  sort(nums: number[]) {
    if (nums.length < 2) {
      // console.log("base: ", nums);
      return;
    }

    let midPoint = Math.floor(nums.length / 2);
    let leftArr: number[] = Array.from({ length: midPoint });
    let rightArr: number[] = Array.from({ length: nums.length - midPoint });

    for (let l = 0; l < midPoint; l++) {
      leftArr[l] = nums[l];
      // leftArr.push(nums[l]);
    }

    for (let r = midPoint; r < nums.length; r++) {
      rightArr[r - midPoint] = nums[r];
      // rightArr.push(nums[r]);
    }
    // console.log("midPoint", midPoint);
    // console.log("left", leftArr);
    // console.log("right", rightArr);
    // return;
    this.sort(leftArr);
    this.sort(rightArr);

    this.mergeSort(leftArr, rightArr, nums);
  }

  private mergeSort(left: number[], right: number[], result: number[]) {
    let l = 0,
      r = 0,
      k = 0;

    while (l < left.length && r < right.length) {
      if (left[l] <= right[r]) {
        result[k++] = left[l++];
      } else {
        result[k++] = right[r++];
      }
    }

    while (l < left.length) {
      result[k++] = left[l++];
    }

    while (r < right.length) {
      result[k++] = right[r++];
    }

    // console.log("left over merge: ", nums);
  }
}

const sort = new MergeSort();

const nums = [12, 4, 3, 2, 1, 2];

console.log("before sort: ", nums);

sort.sort(nums);

console.log("after sort: ", nums);
