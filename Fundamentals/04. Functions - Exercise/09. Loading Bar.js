function LoadingBar(load) {
    load /= 10;
    let bar = ``;
    for (let i = 1; i <= 10; i++) {
        if (i <= load)
            bar += `%`;
        else bar += `.`;
    }
    if (load < 10) {
        console.log(`${load * 10}% [${bar}]`);
        console.log(`Still loading...`);
    }
    else {
        console.log(`${load * 10}% Complete!`);
        console.log(`[${bar}]`);
    }
}