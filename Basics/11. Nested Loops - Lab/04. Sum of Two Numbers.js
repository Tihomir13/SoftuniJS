function SumofTwoNumbers(Input) {
  let start = Number(Input.shift());
  let end = Number(Input.shift());
  let magicNumber = Number(Input.shift());
  let counter = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let i2 = start; i2 <= end; i2++) {
      counter++;
      if (i + i2 === magicNumber) {
        isFound = true;
        console.log(`Combination N:${counter} (${i} + ${i2} = ${magicNumber})`);
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound)
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
}
