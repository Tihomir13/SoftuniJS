function SchoolLibrary(commands) {
    let shelf = commands.shift().split(`&`);

    for (let i = 0; i < commands.length; i++) {
        let token = commands[i].split(` | `);
        let command = token[0];
        let book1 = token[1];
        let book2 = token[2];

        if (command == `Add Book`) {
            if (shelf.includes(book1))
                continue;
            else
                shelf.unshift(book1);
        }
        else if (command == `Take Book`) {
            if (shelf.includes(book1))
                shelf.splice(shelf.indexOf(book1), 1);
            else continue;
        }
        else if (command == `Swap Books`) {
            if (shelf.includes(book1 && book2)) {
                let s = shelf[shelf.indexOf(book2)];
                shelf[shelf.indexOf(book2)] = shelf[shelf.indexOf(book1)];
                shelf[shelf.indexOf(book1)] = s;
            }
            else continue;
        }
        else if (command == `Insert Book`) {
            if (shelf.includes(book1))
                continue;
            else
                shelf.push(book1);
        }
        else if (command == `Check Book`) {
            if (shelf.length - 1 >= book1)
                console.log(shelf[book1]);
            else
                continue;
        }
        else if (command == `Done`) {
            console.log(shelf.join(`, `));
            return;
        }
    }
}