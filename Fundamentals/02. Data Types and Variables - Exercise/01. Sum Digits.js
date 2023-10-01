function SumDigits(number) {
  let inString = String(number);
  let sum = 0;

  for (let i = 0; i < inString.length; i++) {
    sum += Number(inString[i]);
  }
  console.log(sum);
}
