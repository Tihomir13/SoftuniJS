function Cinema(Input) {
  let tip = Input.shift();
  let redove = Number(Input.shift());
  let koloni = Number(Input.shift());

  if (tip === `Premiere`) console.log((redove * koloni * 12.0).toFixed(2));
  else if (tip === `Normal`) console.log((redove * koloni * 7.5).toFixed(2));
  else if (tip === `Discount`) console.log((redove * koloni * 5.0).toFixed(2));
}
