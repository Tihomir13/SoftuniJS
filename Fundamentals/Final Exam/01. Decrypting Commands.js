function DecryptingCommands(arr) {
    let word = arr.shift();
    let [command, p1, p2] = arr.shift().split(` `);
    while (command != `Finish`) {
        if (command == `Replace`) {
            word = word.split(p1).join(p2);
            console.log(word);
        }
        else if (command == `Cut`) {
            if (p1 > 0 && p2 > 0 && p1 <= word.length && p2 <= word.length) {
                p1 = Number(p1);
                p2 = Number(p2);
                word = word.substring(0, p1) + word.substring(p2 + 1);
                console.log(word);
            }
            else console.log(`Invalid indices!`);
        }
        else if (command == `Make`) {
            if (p1 == `Upper`) {
                word = word.toUpperCase();
                console.log(word);
            }
            else {
                word = word.toLowerCase();
                console.log(word);
            }
        }
        else if (command == `Check`) {
            if (word.includes(p1)) {
                console.log(`Message contains ${p1}`);
            }
            else
                console.log(`Message doesn't contain ${p1}`);
        }
        else if (command == `Sum`) {
            if (p1 > 0 && p2 > 0 && p1 <= word.length && p2 <= word.length) {
                let sum = 0;
                for (let i = p1; i <= p2; i++) {
                    sum += word[i].charCodeAt()
                }
                console.log(sum);
            }
            else
                console.log(`Invalid indices!`);
        }
        [command, p1, p2] = arr.shift().split(` `);
    }
}