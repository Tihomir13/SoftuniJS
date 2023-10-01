function NumbersDivisibleby9(Input) {
  let chislo1 = Number(Input[0]);
  let chislo2 = Number(Input[1]);
  let sum = 0;

  for (let i = chislo1; i < chislo2; i++) {
    if (i % 9 === 0) {
      sum += i;
    }
  }
  console.log(`The sum: ${sum}`);

  for (let i = chislo1; i < chislo2; i++) {
    if (i % 9 === 0) {
      sum += i;
      console.log(i);
    }
  }
}
