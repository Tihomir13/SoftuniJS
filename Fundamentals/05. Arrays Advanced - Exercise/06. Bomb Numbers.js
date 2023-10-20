function BombNumber(field, BR) {
    bomb = BR[0];
    radius = BR[1];
    i1 = field.indexOf(bomb);
    i1 - 1;

    while (field.includes(bomb)) {
        field.splice(field.indexOf(bomb), radius + 1);
        field.splice(i1 - radius, radius);
    }
    let sum = 0;
    for (let i = 0; i < field.length; i++) {
        sum += field[i];
    }
    console.log(sum);
}

BombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);
BombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// 1 1 1 1