function NeedForSpeedIII(arr) {
    let CarsNumber = arr.shift();
    let cars = {};

    for (let i = 0; i < CarsNumber; i++) {
        let [name, mileage, fuel] = arr.shift().split(`|`);
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[name] = { mileage, fuel };
    }

    let [command, car, p1, p2] = arr.shift().split(` : `);
    while (command != `Stop`) {
        p1 = Number(p1);
        p2 = Number(p2);
        if (command == `Drive`) {
            if (cars[car].fuel >= p2) {
                cars[car].fuel -= p2;
                cars[car].mileage += p1;
                console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
            }
            else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }
        else if (command == `Refuel`) {
            if (cars[car].fuel + p1 > 75) {
                let refiledFuel = 75 - cars[car].fuel;
                cars[car].fuel = 75;
                console.log(`${car} refueled with ${refiledFuel} liters`);
            }
            else {
                cars[car].fuel += p1;
                console.log(`${car} refueled with ${p1} liters`);
            }
        }
        else if (command == `Revert`) {
            cars[car].mileage -= p1;
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else
                console.log(`${car} mileage decreased by ${p1} kilometers`);
        }
        [command, car, p1, p2] = arr.shift().split(` : `);
    }

    entires = Object.entries(cars);

    for (let [car, properties] of entires) {
        console.log(`${car} -> Mileage: ${properties.mileage} kms, Fuel in the tank: ${properties.fuel} lt.`);
    }
}