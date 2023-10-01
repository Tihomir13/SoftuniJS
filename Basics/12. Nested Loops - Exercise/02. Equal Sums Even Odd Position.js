function printNumbersInRange(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);

  for (let number = firstNumber; number <= secondNumber; number++) {
    let digits = String(number).split("").map(Number);

    let sumEvenPositions = 0;
    let sumOddPositions = 0;

    for (let i = 0; i < digits.length; i++) {
      if (i % 2 === 0) {
        sumEvenPositions += digits[i];
      } else {
        sumOddPositions += digits[i];
      }
    }

    if (sumEvenPositions === sumOddPositions) {
      process.stdout.write(number + " ");
    }
  }
}
