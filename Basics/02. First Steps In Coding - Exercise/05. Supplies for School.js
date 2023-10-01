function SuppliesforSchool(Input) {
  let himikalki = 5.8;
  let markeri = 7.2;
  let preparat = 1.2;

  let cenaSnamalenie;
  himikalki *= Number(Input[0]);
  markeri *= Number(Input[1]);
  preparat *= Number(Input[2]);
  procent = 0.01 * Number(Input[3]);
  namalenie = (himikalki + markeri + preparat) * procent;
  cenaSnamalenie = himikalki + markeri + preparat - namalenie;

  console.log(cenaSnamalenie);
}
