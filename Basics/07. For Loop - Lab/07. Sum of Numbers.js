function SumofNumbers(n) {
  const digits = String(n[0]).split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }

  console.log(`The sum of the digits is:${sum}`);
}
