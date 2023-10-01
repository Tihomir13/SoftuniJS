function GodzillaVsKong(Input) {
  let budget = Number(Input[0]);
  let broiStatisti = Number(Input[1]);
  let CenaOblekloStatist = Number(Input[2]);

  let sumDekor = budget * 0.1;
  let sumObleklo = broiStatisti * CenaOblekloStatist;

  if (broiStatisti >= 150) sumObleklo *= 0.9;
  let Suma = sumDekor + sumObleklo;

  if (Suma > budget) {
    console.log(`Not enough money!
  Wingard needs ${(Suma - budget).toFixed(2)} leva more.`);
  } else if (Suma <= budget) {
    console.log(`Action!
        Wingard starts filming with ${(budget - Suma).toFixed(2)} leva left.`);
  }
}
