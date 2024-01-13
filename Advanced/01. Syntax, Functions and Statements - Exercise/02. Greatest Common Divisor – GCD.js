function GreatestCommonDivisorGCD(number1, number2) {
    x = Math.abs(number1);
    y = Math.abs(number2);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    console.log(x)
}
GreatestCommonDivisorGCD(458, 2154);