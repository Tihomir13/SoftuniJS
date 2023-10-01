function TradeCommissions(Input) {
  let grad = Input.shift();
  let obemNaProdajbi = Number(Input.shift());

  switch (grad) {
    case `Sofia`:
      if (obemNaProdajbi >= 0 && obemNaProdajbi <= 500)
        console.log((obemNaProdajbi * 0.05).toFixed(2));
      else if (obemNaProdajbi > 500 && obemNaProdajbi <= 1000)
        console.log((obemNaProdajbi * 0.07).toFixed(2));
      else if (obemNaProdajbi > 1000 && obemNaProdajbi <= 10000)
        console.log((obemNaProdajbi * 0.08).toFixed(2));
      else if (obemNaProdajbi > 10000)
        console.log((obemNaProdajbi * 0.12).toFixed(2));
      else console.log(`error`);
      break;
    case `Varna`:
      if (obemNaProdajbi >= 0 && obemNaProdajbi <= 500)
        console.log((obemNaProdajbi * 0.045).toFixed(2));
      else if (obemNaProdajbi > 500 && obemNaProdajbi <= 1000)
        console.log((obemNaProdajbi * 0.075).toFixed(2));
      else if (obemNaProdajbi > 1000 && obemNaProdajbi <= 10000)
        console.log((obemNaProdajbi * 0.1).toFixed(2));
      else if (obemNaProdajbi > 10000)
        console.log((obemNaProdajbi * 0.13).toFixed(2));
      else console.log(`error`);
      break;
    case `Plovdiv`:
      if (obemNaProdajbi >= 0 && obemNaProdajbi <= 500)
        console.log((obemNaProdajbi * 0.055).toFixed(2));
      else if (obemNaProdajbi > 500 && obemNaProdajbi <= 1000)
        console.log((obemNaProdajbi * 0.08).toFixed(2));
      else if (obemNaProdajbi > 1000 && obemNaProdajbi <= 10000)
        console.log((obemNaProdajbi * 0.12).toFixed(2));
      else if (obemNaProdajbi > 10000)
        console.log((obemNaProdajbi * 0.145).toFixed(2));
      else console.log(`error`);
      break;
    default:
      console.log(`error`);
      break;
  }
}
