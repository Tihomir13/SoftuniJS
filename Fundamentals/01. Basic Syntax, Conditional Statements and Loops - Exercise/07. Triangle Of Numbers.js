function TriangleOfNumbers(Input) {
  for (let i = 1; i <= Input; i++) {
    let print = ``;
    for (let p = 1; p <= i; p++) {
      print += ` ${i}`;
    }
    console.log(print);
  }
}
