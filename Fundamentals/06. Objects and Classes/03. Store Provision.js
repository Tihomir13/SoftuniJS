function StoreProvision(currentStock, deliveryStock) {
    let products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        products[productName] = quantity;
    }
    for (let i = 0; i < deliveryStock.length; i += 2) {
        let productName = deliveryStock[i];
        let quantity = Number(deliveryStock[i + 1]);

        if (productName in products) {
            products[productName] += quantity;
        }
        else {
            products[productName] = quantity;
        }
    }

    let entries = Object.entries(products);
    for (const entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}