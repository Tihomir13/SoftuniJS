function Train(Input) {

    wagons = Input[0].split(" ").map(Number);
    wagonSize = Input[1];
    commands = Input.splice(2);

    for (let p = 0; p < commands.length; p++) {

        if (commands[p].includes(`Add`)) {
            let a = commands[p].split(` `);
            a[1] = Number(a[1]);
            wagons.push(a[1]);
        }
        else {
            for (let i = 0; i < wagons.length; i++) {
                if ((wagons[i] + Number(commands[p])) <= wagonSize) {
                    wagons[i] += Number(commands[p]);
                    break;
                }
                else continue;
            }
        }
    }
    console.log(wagons.join(` `));
}