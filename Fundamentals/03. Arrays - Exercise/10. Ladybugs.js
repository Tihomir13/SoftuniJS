function Ladybug(info) {
    let field = [];
    let string = info[1].split(` `);
    let moving = [];

    //starting field
    for (let i = 0; i < info[0]; i++) {
        field.push(0);
    }
    //taken indexed by tmoovingsi    
    for (let i = 0; i < string.length; i++) {
        let a = Number(string[0]);
        string.push(a);
        string.shift(0);
    }
    //bugs tooked places
    for (let i = 0; i < string.length; i++) {
        field[string[i]] += 1;
    }
    //push-vame elementite 
    for (let i = 2; i < info.length; i++) {
        moving.push(info[i])
    }

    //pushvame vsqko po otdelno
    mvL = moving.length;
    for (let i = 0; i < mvL; i++) {
        let str = moving[i];
        let a = ``;
        for (let p = 0; p < str.length; p++) {
            if (str[p].includes(` `)) {
                moving.push(a)
                a = ``;
            }
            else {
                a += str[p];
            }
        }
        moving.push(a);
    }
    for (let i = 0; i < mvL; i++) {
        moving.shift(i);
    }

    let currentPos;
    let finalPosition;

    for (let i = 0; i < moving.length; i += 3) {
        currentPos = Number(moving[i]);
        nextPos = Number(moving[i + 2]);

        field[currentPos] -= 1;
        if (moving[i + 1] == `right`) {
            if (nextPos > 0) {
                for (let p = currentPos; p <= info[0]; p++) {
                    if (field[p + nextPos] >= 1) {
                        continue;
                    }
                    else {
                        field[p + nextPos] += 1;
                        break;
                    }
                }
            }
            else {
                for (let p = currentPos; p <= info[0]; p--) {
                    if (field[p - nextPos] >= 1) {
                        continue;
                    }
                    else {
                        field[p - nextPos] += 1;
                        break;
                    }
                }
            }
        }
        else if (moving[i + 1] == `left`) {
            if (moving[i + 2] > 0) {
                for (let p = currentPos; p <= info[0]; p--) {
                    if (field[p - nextPos] >= 1) {
                        continue;
                    }
                    else {
                        field[p - nextPos] += 1;
                        break;
                    }
                }
            }
            else {
                for (let p = currentPos; p <= info[0]; p++) {
                    nextPos *= -1;
                    if (field[p + nextPos] >= 1) {
                        continue;
                    }
                    else {
                        field[p + nextPos] += 1;
                        break;
                    }
                }
            }
        }
    }
    let string1 = ``;
    for (let i = 0; i < field.length; i++) {
        if (field[i] == 1 || field[i] == 0)
            string1 += ` ` + field[i];
    }
    console.log(string1);
}

Ladybug([3, '0 1',
    '0 right 1',
    '2 right 1']
);
Ladybug([5, '3',
    '3 left 2',
    '1 left -2',]);

Ladybug([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);

Ladybug([8, '0 1 2 4 5 6 7 8',
    '0 right 1',
    '1 right 1',
    '2 right 1']);
