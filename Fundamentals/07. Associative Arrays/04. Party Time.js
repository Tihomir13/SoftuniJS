function PartyTime(arr) {

    VIPFINDER = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 }
    let guests = [];

    while (arr[0] != `PARTY`) {
        guests.push(arr.shift());
    };

    for (const name of arr) {
        let index = guests.indexOf(name);
        if (index != -1) {
            guests.splice(index, 1);
        }
    }

    let vips = [];
    let regulars = [];

    for (const name of guests) {
        if (name[0] in VIPFINDER)
            vips.push(name);
        else
            regulars.push(name);
    }
    console.log(guests.length);
    if (vips.length > 0)
        console.log(vips.join(`\n`));
    if (regulars.length > 0)
        console.log(regulars.join(`\n`));
}