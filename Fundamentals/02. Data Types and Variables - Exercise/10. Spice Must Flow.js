function SpiceMustFlow(Yield) {
  let spice = 0;
  let days = 0;
  while (Yield >= 100) {
    spice += Yield;
    if (spice < 26) {
      break;
    }
    spice -= 26;
    days++;
    Yield -= 10;
  }
  if (spice < 26) {
    spice = 0;
  } else spice -= 26;
  console.log(days);
  console.log(spice);
}
