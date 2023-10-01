function EvenPowersof2(a) {
  let n = Number(a[0]);
  for (let i = 0; i <= n; i++) {
    let power = 2 ** i;
    if (i % 2 === 0 || power === 1) {
      console.log(power);
    }
  }
}
