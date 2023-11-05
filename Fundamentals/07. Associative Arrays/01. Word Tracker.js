function WordTracker(arr) {
    let SearchedWords = arr.shift().split(` `);
    let final = {};

    for (let word of arr) {
        if (SearchedWords.includes(word)) {
            if (word in final) {
                final[word]++;
            }
            else
                final[word] = 1;
        }
    }

    // for (let word of SearchedWords) {
    //     final[word] = 0;
    // }
    // for (let word of arr) {
    //     if (word in final) {
    //         final[word]++;
    //     }
    // }

    let entries = Object.entries(final).sort((a, b) => b[1] - a[1]);

    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
}
WordTracker([

    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']

);