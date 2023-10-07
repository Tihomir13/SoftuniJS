function EqualSums(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < i; a++) {
      sum1 += arr[a];
    }
    for (let d = arr.length - 1; d > i; d--) {
      sum2 += arr[d];
    }
    if (sum1 === sum2) {
      console.log(i);
      return;
    } else {
      sum1 = 0;
      sum2 = 0;
    }
  }
  console.log(`no`);
}