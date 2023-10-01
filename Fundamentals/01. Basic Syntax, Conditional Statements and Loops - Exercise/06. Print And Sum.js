function LeapYear(Input, Input2) {
  let sum = 0;
  let line = ``;
  for (let i = Input; i <= Input2; i++) {
    sum += i;
    a = String(i);
    line += `${a} `;
  }
  console.log(line);
  console.log(`Sum: ${sum}`);
}
