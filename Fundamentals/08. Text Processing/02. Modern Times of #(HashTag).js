function ModernTimesOfHashTag(string) {
    string = string.split(` `);
    let words = string.filter((word) => (word.startsWith(`#`) && word.length > 1))

    for (let word of words) {
        word = word.slice(1);
        let isValid = true;
        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(word);
        }
    }
}