function AdAstra(arr) {
    let text = arr.shift();
    let items = [];
    let totalCalories = 0;
    let pattern = /([|#])(?<foodName>[A-z\s]+)\1(?<experationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let matches = text.matchAll(pattern);

    for (let match of matches) {
        let { foodName, experationDate, calories } = match.groups;

        totalCalories += Number(calories);
        items.push({ foodName, experationDate, calories });
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    items.forEach(item => console.log(`Item: ${item.foodName}, Best before: ${item.experationDate}, Nutrition: ${item.calories}`));
}

AdAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);