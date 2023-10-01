function ReversedChars(p1, p2, p3) {
  let sum = p1 + p2 + p3;
  let sum2 = ``;
  for (let i = sum.length - 1; i >= 0; i--) {
    sum2 += String(`${sum[i]} `);
  }
  console.log(sum2);
}
