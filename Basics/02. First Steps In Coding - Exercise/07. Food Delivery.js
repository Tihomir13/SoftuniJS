function FoodDelivery(Input) {
  let Pileshko = 10.35;
  let Riba = 12.4;
  let Vegan = 8.15;

  Pileshko *= Number(Input[0]);
  Riba *= Number(Input[1]);
  Vegan *= Number(Input[2]);

  let obshtaCena = Pileshko + Riba + Vegan;
  let desert = obshtaCena * 0.2;

  obshtaCena = obshtaCena + desert + 2.5;
  console.log(obshtaCena);
}
