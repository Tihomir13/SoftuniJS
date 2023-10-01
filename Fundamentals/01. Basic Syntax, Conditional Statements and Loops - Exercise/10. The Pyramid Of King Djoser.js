function ThePyramidOfKingDjoser(Input, Input2) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let heightCounter = 0;
  let height = 0;
  let i = Input;

  while (i > 0) {
    i -= 2;
    height++;
  }

  i = Input;
  while (i > 0) {
    heightCounter++;
    if (heightCounter === height) {
      gold = i * i;
      break;
    }
    i -= 2;
    stone += i * i;

    if (heightCounter % 5 === 0) lapis += (i + 2) * (i + 2) - i * i;
    else marble += (i + 2) * (i + 2) - i * i;
  }

  console.log(`Stone required: ${Math.ceil(stone * Input2)}`);
  console.log(`Marble required: ${Math.ceil(marble * Input2)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * Input2)}`);
  console.log(`Gold required: ${Math.ceil(gold * Input2)}`);
  console.log(`Final pyramid height: ${Math.floor(height * Input2)}`);
}
