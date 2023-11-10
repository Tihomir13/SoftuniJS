function WordTracker(arr) {
    let SearchedWords = arr.shift().split(` `);
    let final = {};

    for (let word of SearchedWords) {
        final[word] = 0;
    }
    for (let word of arr) {
        if (word in final) {
            final[word]++;
        }
    }

    let entries = Object.entries(final).sort((a, b) => {
        if (b[1] - a[1] !== 0) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
}