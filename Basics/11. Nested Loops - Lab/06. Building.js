function Building(Input) {
  let floor = Number(Input[0]);
  let room = Number(Input[1]);

  console.log();
  for (let i = floor; i > 0; i--) {
    let buffer = "";
    for (let i2 = 0; i2 < room; i2++) {
      if (i === floor) {
        buffer += `L${i}${i2} `;
      }
      if (i % 2 === 0 && i != floor) {
        buffer += `O${i}${i2} `;
      } else if (i % 2 === 1 && i != floor) {
        buffer += `A${i}${i2} `;
      }
    }
    console.log(buffer);
  }
}
