function CookingbyNumbers(string, operation1, operation2, operation3, operation4, operation5) {
    number = Number(string);
    let operations = [operation1, operation2, operation3, operation4, operation5];

    for (const opearion of operations) {
        switch (opearion) {
            case `chop`:
                number /= 2;
                break;
            case `dice`:
                number = Math.sqrt(number);
                break;
            case `spice`:
                ++number;
                break;
            case `bake`:
                number *= 3;
                break;
            case `fillet`:
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}

CookingbyNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');