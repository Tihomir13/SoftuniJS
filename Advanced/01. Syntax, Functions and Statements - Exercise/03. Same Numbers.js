function SameNumbers(numbers) {
    array = String(numbers).split("").map(a => Number(a));
    let pN = array[0];
    let sum = 0;
    let flag = true;
    for (const number of array) {
        if (pN == number) {
            continue;
        }
        else {
            flag = false;
            sum = array.reduce((sum, a) => sum + a);
            console.log(flag);
            console.log(sum);
            return;
        }
    }
    sum = array.reduce((sum, a) => sum + a);
    console.log(flag);
    console.log(sum);
}