function ArrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    let a = arr.shift();
    arr.push(a);
  }
  console.log(arr.join(` `));
}

ArrayRotation([51, 47, 32, 61, 21], 2);
