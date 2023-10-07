function SmallestofThreeNumbers(a, b, c) {
    if (a < b && a < c) console.log(a);
    else if (c < b && c < a) console.log(c);
    else if (b < c && b < a) console.log(b);
}
