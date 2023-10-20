function PalindromeIntegers(arr1) {
    arr2 = [];
    const length = arr1.length;
    for (let i = 0; i < length; i++) {
        arr1.push(String(arr1[0]));
        arr1.shift(0);
    }

    for (let i = 0; i < length; i++) {
        let string = arr1[i];
        let a = ``;
        for (let i = string.length - 1; i >= 0; i--) {
            a += string[i];
        }
        arr2.push(a);
    }

    for (let i = 0; i < length; i++) {
        if (arr1[i] == arr2[i]) console.log(true);
        else console.log(false);
    }
}