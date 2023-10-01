function DepositCalculator(Input) {
  let DepoziranaSuma = Number(Input[0]);
  let Srok = Number(Input[1]);
  let Procent = Number(Input[2]);

  Procent = Procent * 0.01;

  let Suma = DepoziranaSuma + Srok * ((DepoziranaSuma * Procent) / 12);
  console.log(Suma);
}
