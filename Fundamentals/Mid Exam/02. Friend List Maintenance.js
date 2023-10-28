function FriendListMaintenance(arr) {
    let names = arr.shift().split(', ');
    let blacklistedCount = 0;
    let lostCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ');
        let command = token[0];
        let name = token[1];

        if (command === 'Blacklist') {
            if (names.includes(name)) {
                console.log(`${name} was blacklisted.`);
                names[names.indexOf(name)] = 'Blacklisted';
                blacklistedCount++;
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command === 'Error') {
            let index = parseInt(name);
            if (index >= 0 && index < names.length && names[index] !== 'Blacklisted' && names[index] !== 'Lost') {
                console.log(`${names[index]} was lost due to an error.`);
                names[index] = 'Lost';
                lostCount++;
            }
        } else if (command === 'Change') {
            let index = parseInt(name);
            let newName = token[2];
            if (index >= 0 && index < names.length) {
                console.log(`${names[index]} changed his username to ${newName}.`);
                names[index] = newName;
            }
        }
    }

    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(names.join(' '));
}