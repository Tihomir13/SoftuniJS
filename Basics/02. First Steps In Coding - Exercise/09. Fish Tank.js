function FishTank(Input) {
  let Daljina = Number(Input[0]);
  let Shirochina = Number(Input[1]);
  let Visochina = Number(Input[2]);
  let ZaetoProstranstvo = 0.01 * Number(Input[3]);

  let obem = Daljina * Shirochina * Visochina;
  obem *= 0.001;
  let nujniLitri = obem * (1 - ZaetoProstranstvo);
  console.log(nujniLitri);
}
