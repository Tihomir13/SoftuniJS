function Rounding(Input, presision) {
  if (presision > 15) presision = 15;

  console.log(parseFloat(Input.toFixed(presision)));
}
