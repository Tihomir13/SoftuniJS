function DungeonestDark(arr) {
  let health = 100;
  let coins = 0;

  let string = arr[0];
  let rooms = [];
  let a = ``;

  console.log(string);

  for (let i = 0; i < string.length; i++) {
    if (string[i].includes(`|`)) {
      rooms.push(a)
      a = ``;
    }
    else {
      a += string[i];
    }
  }
  console.log(rooms);
}

DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);