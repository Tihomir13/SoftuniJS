function TheHuntingGames(arr) {

    let days = Number(arr.shift());
    let players = Number(arr.shift());
    let energy = Number(arr.shift());
    let waterPerson = Number(arr.shift());
    let foodPerson = Number(arr.shift());
    let energyLosing = arr.map(Number);

    let Water = days * players * waterPerson;
    let Food = days * players * foodPerson;

    for (let i = 1; i <= days; i++) {
        energy -= energyLosing[i - 1];
        if (energy <= 0)
            break;
        if (i % 2 == 0) {
            energy *= 1.05;
            Water *= 0.7;
        }
        if (i % 3 == 0) {
            energy *= 1.1;
            Food -= (Food / players);

        }
    }
    if (energy <= 0)
        console.log(`You will run out of energy. You will be left with ${Food.toFixed(2)} food and ${Water.toFixed(2)} water.`);
    else
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}