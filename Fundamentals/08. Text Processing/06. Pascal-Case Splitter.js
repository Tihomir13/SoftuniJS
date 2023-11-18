function PascalCaseSplitter(string) {
    words = [];
    let word = ``;
    let lastWord = ``;
    for (let i = 1; i < string.length; i++) {
        word += string[i - 1];
        if (string[i] != string[i].toLowerCase()) {
            words.push(word.slice())
            lastWord = word;
            word = ``;
        }
    }
    words.push(word + string[string.length - 1]);
    console.log(words.join(`, `));
}