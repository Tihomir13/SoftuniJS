function makeDictionary(jsonArray) {
    let dictionary = {};

    for (let jsonString of jsonArray) {
        let obj = JSON.parse(jsonString);
        for (let term in obj) {
            dictionary[term] = obj[term];
        }
    }

    let sortedDictionary = {};
    Object.keys(dictionary).sort().forEach((term) => { sortedDictionary[term] = dictionary[term]; });

    for (let term in sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${sortedDictionary[term]}`);
    }
}