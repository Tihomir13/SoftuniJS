function PersonalTitles(Input) {
  let godini = Number(Input.shift());
  let pol = Input.shift();

  if (pol == `f`) {
    if (godini >= 16) console.log(`Ms.`);
    else console.log(`Miss`);
  } else {
    if (godini >= 16) console.log(`Mr.`);
    else console.log(`Master`);
  }
}
