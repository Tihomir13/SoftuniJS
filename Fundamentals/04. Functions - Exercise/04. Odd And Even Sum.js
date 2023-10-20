function OddAndEvenSum(num) {
    let num1 = String(num);
    arr = [];
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num1.length; i++) {
        arr.push(Number(num1[i]));
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            evenSum += arr[i];
        else
            oddSum += arr[i];
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}