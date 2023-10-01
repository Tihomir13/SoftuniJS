function SmallShop(Input) {
  let produkt = Input.shift();
  let grad = Input.shift();
  let broika = Number(Input.shift());

  let krainaCena;
  switch (grad) {
    case `Sofia`:
      switch (produkt) {
        case `coffee`:
          krainaCena = broika * 0.5;
          break;
        case `water`:
          krainaCena = broika * 0.8;
          break;
        case `beer`:
          krainaCena = broika * 1.2;
          break;
        case `sweets`:
          krainaCena = broika * 1.45;
          break;
        case `peanuts`:
          krainaCena = broika * 1.6;
          break;
      }
      break;
    case `Varna`:
      switch (produkt) {
        case `coffee`:
          krainaCena = broika * 0.45;
          break;
        case `water`:
          krainaCena = broika * 0.7;
          break;
        case `beer`:
          krainaCena = broika * 1.1;
          break;
        case `sweets`:
          krainaCena = broika * 1.35;
          break;
        case `peanuts`:
          krainaCena = broika * 1.55;
          break;
      }
      break;
    case `Plovdiv`:
      switch (produkt) {
        case `coffee`:
          krainaCena = broika * 0.4;
          break;
        case `water`:
          krainaCena = broika * 0.7;
          break;
        case `beer`:
          krainaCena = broika * 1.15;
          break;
        case `sweets`:
          krainaCena = broika * 1.3;
          break;
        case `peanuts`:
          krainaCena = broika * 1.5;
          break;
      }
      break;
  }
  console.log(krainaCena);
}
