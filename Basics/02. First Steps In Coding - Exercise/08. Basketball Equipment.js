function BasketballEquipment(Input) {
  let Kecove = Number(Input[0]) * 0.6;
  let Ekip = Kecove * 0.8;
  let Topka = Ekip / 4;
  let Aksesoari = Topka / 5;

  let obshtaCena = Number(Input[0]) + Kecove + Ekip + Topka + Aksesoari;

  console.log(obshtaCena);
}
