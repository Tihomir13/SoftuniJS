function MirrorWords(arr) {
    let string = arr.shift();
    let mirrorWords = [];
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;

    let pairs = Array.from(string.matchAll(pattern));
    if (pairs.length > 0) {
        console.log(`${pairs.length} word pairs found!`);
        for (let pair of pairs) {
            let { word1, word2 } = pair.groups;

            if (word1 == word2.split(``).reverse().join(``)) {
                mirrorWords.push(`${word1} <=> ${word2}`);
            }
        }
        if (mirrorWords.length > 0) {
            console.log(`The mirror words are:`);
            console.log(`${mirrorWords.join(`, `)}`);
        }
        else
            console.log(`No mirror words!`);
    }
    else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}