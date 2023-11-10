function LegendaryFarming(string) {
    function ShowInventory(inventory) {
        let entries = Object.entries(inventory).sort((a, b) => {
            if (b[1] - a[1] != 0)
                return b[1] - a[1];
            else
                return a[0].localeCompare(b[0]);
        });
        for (let [material, quantity] of entries) {
            console.log(`${material}: ${quantity}`);
        }
    }
    let resource = string.split(` `);

    let inventory = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};

    let legendaryItems = {
        shards: `Shadowmourne`,
        fragments: `Valanyr`,
        motes: `Dragonwrath`
    };

    for (let i = 0; i < resource.length; i += 2) {
        let quantity = Number(resource[i]);
        let material = resource[i + 1].toLowerCase();

        if (material in inventory)
            inventory[material] += quantity;
        else if (material in junk) {
            junk[material] += quantity; continue;
        }
        else {
            junk[material] = quantity; continue;
        }

        if (inventory[material] >= 250) {
            inventory[material] -= 250;
            let weapon = legendaryItems[material];
            console.log(`${weapon} obtained!`);
            ShowInventory(inventory);
            let entries = Object.entries(junk).sort();
            for (let [material, quantity] of entries) {
                console.log(`${material}: ${quantity}`);
            }
            return;
        }
    }
}