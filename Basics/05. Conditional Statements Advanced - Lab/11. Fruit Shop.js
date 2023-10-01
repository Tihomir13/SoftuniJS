function FruitShop(Input) {
  let plod = Input.shift();
  let den = Input.shift();
  let kolichestvo = Number(Input.shift());

  switch (den) {
    case `Monday`:
    case `Tuesday`:
    case `Wednesday`:
    case `Thursday`:
    case `Friday`:
      switch (plod) {
        case `banana`:
          console.log((2.5 * kolichestvo).toFixed(2));
          break;
        case `apple`:
          console.log((1.2 * kolichestvo).toFixed(2));
          break;
        case `orange`:
          console.log((0.85 * kolichestvo).toFixed(2));
          break;
        case `grapefruit`:
          console.log((1.45 * kolichestvo).toFixed(2));
          break;
        case `kiwi`:
          console.log((2.7 * kolichestvo).toFixed(2));
          break;
        case `pineapple`:
          console.log((5.5 * kolichestvo).toFixed(2));
          break;
        case `grapes`:
          console.log((3.85 * kolichestvo).toFixed(2));
          break;
        default:
          console.log(`error`);
      }
      break;
    case `Saturday`:
    case `Sunday`:
      switch (plod) {
        case `banana`:
          console.log((2.7 * kolichestvo).toFixed(2));
          break;
        case `apple`:
          console.log((1.25 * kolichestvo).toFixed(2));
          break;
        case `orange`:
          console.log((0.9 * kolichestvo).toFixed(2));
          break;
        case `grapefruit`:
          console.log((1.6 * kolichestvo).toFixed(2));
          break;
        case `kiwi`:
          console.log((3 * kolichestvo).toFixed(2));
          break;
        case `pineapple`:
          console.log((5.6 * kolichestvo).toFixed(2));
          break;
        case `grapes`:
          console.log((4.2 * kolichestvo).toFixed(2));
          break;
        default:
          console.log(`error`);
      }
      break;
    default:
      console.log(`error`);
  }
}
