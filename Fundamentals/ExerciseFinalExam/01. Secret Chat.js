function SecterChat(arr) {
  let word = arr.shift();
  let [command, p1, p2] = arr.shift().split(`:|:`);

  while (command != `Reveal`) {

    if (command == `InsertSpace`) {
      word = word.split(``);
      let firsthalf = word.splice(0, p1);
      word = firsthalf.join(``) + ` ` + word.join(``);
      console.log(word);
    }
    else if (command == `Reverse`) {
      if (word.includes(p1)) {
        p2 = p1.split(``).reverse().join(``)
        word = word.split(p1).join(p2);
        console.log(word);
      }
      else
        console.log(`error`);
    }
    else if (command == `ChangeAll`) {
      word = word.split(p1).join(p2);
      console.log(word);
    }
    [command, p1, p2] = arr.shift().split(`:|:`);
  }
  console.log(`You have a new text message: ${word}`);
}

SecterChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal']);