function TheImitationGame(arr) {
    let MSG = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let [command, s1, s2] = arr[i].split(`|`);
        switch (command) {
            case `ChangeAll`:
                MSG = MSG.split(`${s1}`).join(`${s2}`);
                break;
            case `Insert`:
                MSG = MSG.split(``);
                let sliced = MSG.splice(0, s1);
                sliced = sliced + s2;
                MSG = sliced + MSG;
                MSG = MSG.split(`,`).join(``);
                break;
            case `Move`:
                MSG = MSG.split(``);
                let MovePart = MSG.splice(0, s1);
                MSG = MSG.join(``) + MovePart.join(``);
                break;
            case `Decode`:
                console.log(`The decrypted message is: ${MSG}`)
                break;
        }
    }
}