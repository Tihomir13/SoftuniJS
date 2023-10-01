function LunchBreak(Input) {
  let ImeNaSerial = Input[0];
  let Prodaljitelnost = Number(Input[1]);
  let ProdaljitelnostNaPochivkata = Number(Input[2]);

  let VremeZaObqd = (ProdaljitelnostNaPochivkata * 1) / 8;
  let VremeZaOtdit = (ProdaljitelnostNaPochivkata * 1) / 4;
  let ostanaloVreme = ProdaljitelnostNaPochivkata - VremeZaObqd - VremeZaOtdit;

  if (ostanaloVreme >= Prodaljitelnost) {
    console.log(
      `You have enough time to watch ${ImeNaSerial} and left with ${Math.ceil(
        ostanaloVreme - Prodaljitelnost
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${ImeNaSerial}, you need ${Math.ceil(
        Prodaljitelnost - ostanaloVreme
      )} more minutes.`
    );
  }
}
