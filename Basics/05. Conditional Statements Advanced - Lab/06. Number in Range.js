function NumberInRange(Input) {
  let chislo = Input.shift();
  let grad = Input.shift();
  let broika = Number(Input.shift());

  if (chislo == 0) console.log(`No`);
  else if (chislo <= 100 && chislo >= -100) console.log(`Yes`);
  else console.log(`No`);
}
