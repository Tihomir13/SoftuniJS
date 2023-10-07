function ArrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    let a = arr.shift();
    arr.push(a);
  }
  console.log(arr.join(` `));
}