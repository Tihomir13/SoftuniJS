function DungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let currentRoom = 0;

  let string = arr[0];
  let rooms = [];
  let a = ``;

  for (let i = 0; i < string.length; i++) {
    if (string[i].includes(`|`) || string[i].includes(` `)) {
      rooms.push(a)
      a = ``;
    }
    else {
      a += string[i];
    }
  }
  rooms.push(a);
  for (let i = 0; i < rooms.length; i += 2) {
    currentRoom++;
    if (rooms[i] === `potion`) {
      if (health > 100) {
        health = 100;
        console.log(`You healed for ${0} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
        let hpdiff = 100 - health;
        health += Number(rooms[i + 1]);
        if (health > 100) {
          console.log(`You healed for ${hpdiff} hp.`);
          health = 100;
          console.log(`Current health: ${health} hp.`);
        }
        else {
          console.log(`You healed for ${rooms[i + 1]} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
      }
    }
    else if (rooms[i] === `chest`) {
      coins += Number(rooms[i + 1]);
      console.log(`You found ${rooms[i + 1]} coins.`);
    }
    else {
      health -= rooms[i + 1];
      if (health > 0)
        console.log(`You slayed ${rooms[i]}.`);
      else {
        console.log(`You died! Killed by ${rooms[i]}.`);
        console.log(`Best room: ${currentRoom}`);
        return;
      }
    }
  }
  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}