function DungeonestDark(string) {
  let health = 100;
  let coins = 0;
  let arr = [];
  let currentRoom = ``;

  for (let i = 0; i < string.length; i++) {
    currentRoom += string;
    if (string[i].includes(`|`)) {
      i++;
      arr.push(currentRoom);
      currentRoom = ` `;
    }
  }
  console.log(arr);
  console.log(string.split(` `));
}
DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
