function SoftUniBarIncome(arr) {
    let income = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    let string = arr.shift();

    while (string !== `end of shift`) {
        let match = string.match(pattern);
        if (match) {
            let { name, product, quantity, price } = match.groups;
            price = Number(quantity) * Number(price);
            console.log(`${name}: ${product} - ${price.toFixed(2)}`);
            income += price
        }
        string = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}