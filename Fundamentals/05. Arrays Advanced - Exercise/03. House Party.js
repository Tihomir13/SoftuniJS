function HouseParty(list) {
    let OnlyNames = [];

    for (let i = 0; i < list.length; i++) {
        let a = list[i].split(` `);

        if (list[i].includes(`not`)) {
            if (OnlyNames.includes(a[0])) {
                let index = OnlyNames.indexOf(a[0])
                OnlyNames.splice(index, 1);
            }
            else {
                console.log(`${a[0]} is not in the list!`);
            }
        }
        else {
            if (OnlyNames.includes(a[0])) {
                console.log(`${a[0]} is already in the list! `);
            }
            else {
                OnlyNames.push(a[0]);
            }
        }
    }
    for (let i = 0; i < OnlyNames.length; i++) {
        console.log(OnlyNames[i]);
    }
}