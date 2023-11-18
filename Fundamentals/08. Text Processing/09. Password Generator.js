function PasswordGenerator(arr) {

    let [firstWord, secondWord, Changer] = arr;
    let index = 0
    vowels = { a: ``, e: ``, i: ``, o: ``, u: `` };

    let string = firstWord + secondWord;
    string = string.split(``);

    for (let i = 0; i < string.length; i++) {
        if (string[i] in vowels) {
            if (index == Changer.length)
                index = 0;
            string[i] = Changer[index].toUpperCase();
            index++;
        }
    }
    console.log(`Your generated password is ${string.reverse().join(``)}`);
}