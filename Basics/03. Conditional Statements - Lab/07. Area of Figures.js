function AreaOfFigures(Input) {
  let form = Input[0];

  if (form === `square`) {
    let side = Number(Input[1]);
    console.log(side * side);
  } else if (form === `rectangle`) {
    let side = Number(Input[1]);
    let side1 = Number(Input[2]);
    console.log(side * side1);
  } else if (form === `circle`) {
    let radius = Number(Input[1]);
    console.log(radius * radius * Math.PI);
  } else if (form === `triangle`) {
    let side = Number(Input[1]);
    let height = Number(Input[2]);
    console.log(side * (height / 2));
  }
}
