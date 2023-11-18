// Функция за декодиране по метода на Хафман
function huffmanDecode(encodedMessage, huffmanTable) {
    let decodedMessage = "";
    let currentCode = "";
    for (let bit of encodedMessage) {
        currentCode += bit;
        if (currentCode in huffmanTable) {
            decodedMessage += huffmanTable[currentCode];
            currentCode = "";
        }
    }
    return decodedMessage;
}

// Примерни данни за кодирано съобщение и таблица на Хафман
const encodedMessage = "21621322";
const huffmanTable = {
    "10": "A",
    "110": "B",
    "011": "C",
    "010": "D"
};

// Декодиране на съобщението
const decodedMessage = huffmanDecode(encodedMessage, huffmanTable);

// Извеждане на декодираното съобщение
console.log(decodedMessage);