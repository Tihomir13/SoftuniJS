function Inventory(arr) {
    allheroes = [];
    for (let i = 0; i < arr.length; i++) {
        tokens = arr[i].split(` / `);
        let hero = {
            name: tokens[0],
            level: Number(tokens[1]),
            items: tokens[2],
        };
        allheroes.push(hero);
    }
    allheroes.sort((a, b) => a.level - b.level);
    for (const hero of allheroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}