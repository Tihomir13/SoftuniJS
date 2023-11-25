function StarEnigma(arr) {
    let msgCount = Number(arr.shift());
    let decryptedMsgs = [];
    let starPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {
        let msg = arr[i];
        let decryptedMsg = ``;
        let matches = msg.match(starPattern);

        if (matches) {
            let count = matches.length;
            for (let char of msg) {
                let code = char.charCodeAt();
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }
        decryptedMsgs.push(decryptedMsg)
    }

    let planetPattern = /@(?<planetName>[A-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decryptedMsgs) {
        let match = msg.match(planetPattern);

        if (match != null) {
            let { planetName, attackType } = match.groups;

            if (attackType == 'A') {
                attackedPlanets.push(planetName);
            }
            else {
                destroyedPlanets.push(planetName);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (let pName of attackedPlanets) {
        console.log(`-> ${pName}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (let pName of destroyedPlanets) {
        console.log(`-> ${pName}`);
    }
}