function Sorting(arr) {
    let min = arr.map(x => x);
    let max = arr.map(x => x);

    min.sort((a, b) => a - b);
    max.sort((a, b) => b - a);

    let finalArr = [];
    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 || i == 0) {
            finalArr.push(max[c1]);
            c1 += 1;
        }
        else {
            finalArr.push(min[c2]);
            c2 += 1;
        }
    }
    console.log(finalArr.join(` `));
}