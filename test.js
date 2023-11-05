// obj = {
//     name: "Ivan",
// }
// map = {
//     'name': "Ivan",
// }

// console.log(obj);
// console.log(map);
// console.log(Object.hasOwn(obj, 'name')); 
const dictionary = {
    banana: 2,
    apple: 5,
    orange: 1
};

const sortedDictionary = {};

Object.keys(dictionary)
    .sort()
    .forEach((term) => {
        sortedDictionary[term] = dictionary[term];
    });

console.log(sortedDictionary);