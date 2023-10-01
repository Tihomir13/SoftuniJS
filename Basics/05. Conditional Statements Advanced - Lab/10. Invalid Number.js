function InvalidNumber(Input) {
  let chislo = Input.shift();

  if ((chislo <= 200 && chislo >= 100) || chislo == 0) {
    console.log();
  } else console.log(`invalid`);
}
