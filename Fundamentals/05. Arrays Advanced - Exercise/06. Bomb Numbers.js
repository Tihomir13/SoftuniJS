function BombNumber(field, BR) {
    const bomb = BR[0];
    const radius = BR[1];

    while (field.includes(bomb)) {
        const bombIndex = field.indexOf(bomb);
        const startIndex = bombIndex - radius < 0 ? 0 : bombIndex - radius;
        const endIndex = bombIndex + radius >= field.length ? field.length - 1 : bombIndex + radius;

        field.splice(startIndex, endIndex - startIndex + 1);
    }

    let sum = 0;
    for (let i = 0; i < field.length; i++) {
        sum += field[i];
    }
    console.log(sum);
}