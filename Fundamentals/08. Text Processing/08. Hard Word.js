function HardWords(string) {
    let words = string.pop();
    string = String(string).split(` `);

    for (let i = 0; i < string.length; i++) {
        if (string[i].includes(`_`)) {
            for (let p = 0; p < words.length; p++) {
                if (string[i].endsWith(`.`)) {
                    if (string[i].length - 1 == words[p].length) {
                        string[i] = words[p] + `.`;
                        break;
                    }
                }
                if (string[i].endsWith(`,`)) {
                    if (string[i].length - 1 == words[p].length) {
                        string[i] = words[p] + `,`;
                        break;
                    }
                }
                if (string[i].length === words[p].length) {
                    string[i] = words[p];
                    break;
                }
            }
        }
    }
    console.log(string.join(` `));
}