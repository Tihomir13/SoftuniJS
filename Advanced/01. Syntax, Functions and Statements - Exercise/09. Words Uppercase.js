function WordsUppercase(string) {
    let pattern = /\w+/gm;
    let filteredString = string.match(pattern).join(`, `).toUpperCase();

    console.log(filteredString);
}

WordsUppercase('Functions in JS can be nested, i.e. hold other functions');