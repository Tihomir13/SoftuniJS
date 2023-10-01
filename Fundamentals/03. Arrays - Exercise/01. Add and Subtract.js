function AddandSubtract(arr) {
  sum = 0;
  sumAfter = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else arr[i] -= i;
    sumAfter += arr[i];
  }
  console.log(arr);
  console.log(sum);
  console.log(sumAfter);
}
