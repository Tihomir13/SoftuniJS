function Race(arr) {
    let names = arr.shift().split(`, `);
    let string = arr.shift();

    let result = {};
    let namePattern = /[A-Za-z]/g;
    let digitPattern = /[\d]/g;

    names.forEach(name => result[name] = 0);

    while (string != `end of race`) {
        let letterMatches = string.match(namePattern);
        let name = letterMatches.join(``);
        let digitMatches = string.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in result) {
            result[name] += distance;
        }

        string = arr.shift();
    }

    let entries = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}