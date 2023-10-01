function ToyShop(Input) {
  let EkskurziqCena = Number(Input[0]);
  let Pazeli = Number(Input[1]);
  let Kukli = Number(Input[2]);
  let Mecheta = Number(Input[3]);
  let Minioni = Number(Input[4]);
  let Kamioncheta = Number(Input[5]);

  let BroiIgrachki = Pazeli + Kukli + Mecheta + Minioni + Kamioncheta;
  let sumPazeli = Pazeli * 2.6;
  let sumKukli = Kukli * 3.0;
  let sumMecheta = Mecheta * 4.1;
  let sumMinioni = Minioni * 8.2;
  let sumKamioncheta = Kamioncheta * 2.0;

  let Suma = sumPazeli + sumKukli + sumMecheta + sumMinioni + sumKamioncheta;

  if (BroiIgrachki >= 50) {
    Suma *= 0.75;
  }

  let Pechalba = Suma * 0.9;

  let MoneyLeft;
  if (Pechalba >= EkskurziqCena) {
    console.log(`Yes! ${(Pechalba - EkskurziqCena).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(EkskurziqCena - Pechalba).toFixed(2)} lv needed.`
    );
  }
}
