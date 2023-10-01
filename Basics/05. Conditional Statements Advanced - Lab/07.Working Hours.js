function WorkingHours(Input) {
  let chas = Number(Input.shift());
  let den = Input.shift();

  if (chas >= 10 && chas <= 18) {
    switch (den) {
      case `Monday`:
        console.log(`open`);
        break;
      case `Tuesday`:
        console.log(`open`);
        break;
      case `Wednesday`:
        console.log(`open`);
        break;
      case `Thursday`:
        console.log(`open`);
        break;
      case `Friday`:
        console.log(`open`);
        break;
      case `Saturday`:
        console.log(`open`);
        break;
      case `Sunday`:
        console.log(`closed`);
        break;
      default:
        console.log(`Error`);
        break;
    }
  } else console.log(`closed`);
}
