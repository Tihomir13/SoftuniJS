function WordTracker(arr) {
    let [word1, word2] = arr.shift().split(` `);;
    let word1Count = 0;
    let word2Count = 0;

    let final = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word1)
            final[word1] = word1Count += 1;
        if (arr[i] == word2)
            final[word2] = word2Count += 1;
    }

    let entries = Object.entries(final);
    entries.sort((a, b) => b[1] - a[1]);
    final = Object.fromEntries(entries);

    for (let [word, occurrences] of Object.entries(final)) {
        console.log(`${word} - ${occurrences}`);
    }
}
WordTracker([

    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']

);