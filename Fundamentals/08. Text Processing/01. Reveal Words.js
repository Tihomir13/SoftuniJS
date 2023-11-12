function RevealWords(wordsToReplace, text) {
    let strings = wordsToReplace.split(`, `);

    for (const word of strings) {
        let wordToBeReplaced = ``;
        for (let i = 0; i < word.length; i++) {
            wordToBeReplaced += `*`;
        }
        text = text.replace(wordToBeReplaced, word);
    }
    console.log(text);
}