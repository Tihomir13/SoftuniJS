function MergeArrays(arr1, arr2) {
  arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
      arr[i] = Number(arr1[i]) + Number(arr2[i]);
    } else arr[i] = String(arr1[i]) + String(arr2[i]);
  }
  console.log(arr.join(` - `));
}
