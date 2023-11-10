function Piccolo(arr) {
    parkingLot = {};

    for (let i = 0; i < arr.length; i++) {
        let [command, VehicleNumber] = arr[i].split(`, `);

        if (command == `IN`) {
            parkingLot[VehicleNumber] = `IN`;
        }
        else if (command == `OUT`) {
            if (VehicleNumber in parkingLot)
                delete parkingLot[VehicleNumber];
        }
    }
    let keys = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));
    for (const Number of keys) {
        console.log(`${Number}`);
    }
}