function Furniture(arr) {
    let items = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z]\w+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let command = arr.shift();
    while (command != `Purchase`) {
        let match = command.match(pattern);
        command = arr.shift();
        if (match) {
            let { name, price, quantity } = match.groups;
            items.push(name);
            totalPrice += Number(quantity) * Number(price)
        }

    }
    console.log(`Bought furniture:`)
    if (items.length > 0)
        console.log(items.join(`\n`));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}