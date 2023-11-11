function OddOccurrences(s) {
    let words = s.toLowerCase().split(` `);
    let OddOccurrences = [];
    let isNotValid = {};

    for (let i = 0; i < words.length; i++) {
        let counter = 0;
        if (words[i] in isNotValid) {
            continue;
        } else {
            if (!OddOccurrences.includes(words[i])) {
                for (let j = i; j < words.length; j++) {
                    if (words[i] == words[j]) {
                        counter++;
                    }
                }
                if (counter % 2 != 0) {
                    OddOccurrences.push(words[i]);
                }
                else {
                    isNotValid[words[i]] = true;
                }
            }
        }
    }
    console.log(OddOccurrences.join(` `));
}