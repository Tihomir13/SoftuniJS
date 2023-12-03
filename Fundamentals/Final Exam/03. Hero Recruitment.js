function HeroRecruitment(arr) {
    let heroes = {};
    let [command, name, spell] = arr.shift().split(` `);

    while (command != `End`) {
        if (command === `Enroll`) {
            if (name in heroes)
                console.log(`${name} is already enrolled.`);
            else
                heroes[name] = { spells: [] };
        }
        else if (command == `Learn`) {
            if (name in heroes)
                if (heroes[name].spells.includes(spell))//
                    console.log(`${name} has already learnt ${spell}.`);
                else
                    heroes[name].spells.push(spell);//
            else
                console.log(`${name} doesn't exist.`);
        }
        else if (command == `Unlearn`) {
            if (name in heroes) {
                if (heroes[name].spells.includes(spell))//
                {
                    let index = heroes[name].spells.indexOf(spell);
                    heroes[name].spells.splice(index, 1);
                }
                else
                    console.log(`${name} doesn't know ${spell}.`);
            }
            else
                console.log(`${name} doesn't exist.`);
        }
        [command, name, spell] = arr.shift().split(` `);
    }
    let entries = Object.entries(heroes);
    if (heroes) {
        console.log(`Heroes:`);
        for (let [name, property] of entries) {
            console.log(`==${name}: property`);
        }

    }
}
HeroRecruitment([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"]);

// HeroRecruitment(["Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End"]);

// HeroRecruitment(["Enroll Stefan",
//     "Enroll Peter",
//     "Enroll John",
//     "Learn Stefan Spell",
//     "Learn Peter Dispel",
//     "End"])