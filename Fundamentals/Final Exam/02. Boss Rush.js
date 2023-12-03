function BossRush(arr) {
    let Inputs = Number(arr.shift());
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;
    for (let i = 0; i < Inputs; i++) {
        let validBoss = arr[i].match(pattern);
        if (validBoss) {
            let { boss, title } = validBoss.groups;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        }
        else
            console.log(`Access denied!`);
    }
}