function MaxNumber(arr) {
  let MAX = [];
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    for (let p = i + 1; p < arr.length; p++) {
      if (arr[i] > arr[p]) {
        bool = true;
      } else {
        bool = false;
        break;
      }
    }
    if (bool == true) {
      MAX.push(arr[i]);
      bool = false;
    }
  }
  MAX.push(arr[arr.length - 1]);
  console.log(MAX.join(` `));
}