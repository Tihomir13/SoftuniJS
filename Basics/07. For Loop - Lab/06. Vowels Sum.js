function VowelsSum(text) {
  let str = text[0];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === `a`) {
      sum += 1;
    } else if (str[i] === `e`) {
      sum += 2;
    } else if (str[i] === `i`) {
      sum += 3;
    } else if (str[i] === `o`) {
      sum += 4;
    } else if (str[i] === `u`) {
      sum += 5;
    }
  }
  console.log(sum);
}
