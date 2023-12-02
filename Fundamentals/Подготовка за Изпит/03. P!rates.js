function Pirates(arr) {
    let targets = {};

    let command = arr.shift();
    while (command != `Sail`) {
        let [city, population, gold] = command.split(`||`);
        population = Number(population);
        gold = Number(gold);

        if (city in targets) {
            targets[city].population += population;
            targets[city].gold += gold;
        }
        else {
            targets[city] = { population, gold };
        }
        command = arr.shift();
    }

    let event = arr.shift();
    while (event != `End`) {
        if (/Plunder/.test(event)) {
            let [, city, killed, stolenGold] = event.split(`=>`);
            targets[city].population -= killed;
            targets[city].gold -= stolenGold;
            console.log(`${city} plundered! ${stolenGold} gold stolen, ${killed} citizens killed.`);
            if (targets[city].population <= 0 || targets[city].gold <= 0) {
                delete targets[city];
                console.log(`${city} has been wiped off the map!`);
            }
        }
        else if (/Prosper/.test(event)) {
            let [, city, incomeGained] = event.split(`=>`);
            incomeGained = Number(incomeGained);
            if (incomeGained > 0) {
                targets[city].gold += incomeGained;
                console.log(`${incomeGained} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
            }
            else
                console.log(`Gold added cannot be a negative number!`);
        }
        event = arr.shift();
    }
    let count = Object.keys(targets).length;
    if (count > 0)
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    else
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

    let entries = Object.entries(targets);
    for (let [city, properties] of entries) {
        console.log(`${city} -> Population: ${properties.population} citizens, Gold: ${properties.gold} kg`);
    }
}