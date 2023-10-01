function ArrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    let a = arr[0];
    arr.shift(0);
    arr.push(a);
  }
  console.log(arr.join(` `));
}

ArrayRotation([51, 47, 32, 61, 21], 2);
