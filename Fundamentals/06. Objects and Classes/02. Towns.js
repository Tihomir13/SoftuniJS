function Towns(arr) {
    for (let info of arr) {
        let token = info.split(` |`);
        town = {
            name: token[0],
            latitude: Number(token[1]),
            longitude: Number(token[2]),
        }
        console.log(`{ town: '${town.name}', latitude: '${town.latitude.toFixed(2)}', longitude: '${town.longitude.toFixed(2)}' }`);
    }
}

Towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);