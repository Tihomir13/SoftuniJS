function AMinerTask(arr) {
    let metals = {};

    for (let i = 0; i < arr.length; i += 2) {
        let metal = arr[i];
        let quantity = Number(arr[i + 1]);
        if (metal in metals)
            metals[metal] += quantity;
        else
            metals[metal] = quantity;
    }

    let entries = Object.entries(metals)
    for (let [metal, quantity] of entries) {
        console.log(`${metal} -> ${quantity}`);
    }
}