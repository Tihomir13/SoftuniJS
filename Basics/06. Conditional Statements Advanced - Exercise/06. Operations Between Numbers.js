function OperationsBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];
  let result = 0;
  let output = "";

  switch (operator) {
    case "+":
      result = N1 + N2;
      output = `${N1} + ${N2} = ${result} - ${
        result % 2 === 0 ? "even" : "odd"
      }`;
      break;
    case "-":
      result = N1 - N2;
      output = `${N1} - ${N2} = ${result} - ${
        result % 2 === 0 ? "even" : "odd"
      }`;
      break;
    case "*":
      result = N1 * N2;
      output = `${N1} * ${N2} = ${result} - ${
        result % 2 === 0 ? "even" : "odd"
      }`;
      break;
    case "/":
      if (N2 === 0) {
        output = `Cannot divide ${N1} by zero`;
      } else {
        result = (N1 / N2).toFixed(2);
        output = `${N1} / ${N2} = ${result}`;
      }
      break;
    case "%":
      if (N2 === 0) {
        output = `Cannot divide ${N1} by zero`;
      } else {
        result = N1 % N2;
        output = `${N1} % ${N2} = ${result}`;
      }
      break;
  }

  console.log(output);
}
OperationsBetweenNumbers(["10", "12", "+"]);
