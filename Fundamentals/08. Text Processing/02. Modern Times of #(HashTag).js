function ModernTimesOfHashTag(string) {
    string += ` `;
    let HashTagWords = [];
    for (let i = 0; i < string.length; i++) {
        let wordLength = 0;
        if (string[i] == `#`) {
            let p = i;
            while (string[p] != ` `) {
                wordLength++;
                p++;
            }
            if (wordLength >= 2)
                HashTagWords.push(string.substring(i, p));
        }
        else continue;
    }

    for (const word of HashTagWords) {
        console.log(word.substring(1, word.length));
    }
}