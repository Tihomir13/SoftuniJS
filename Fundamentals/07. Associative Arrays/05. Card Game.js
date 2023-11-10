function CardGame(arr) {
    let PlayerCards = {};
    let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typesValues = { S: 4, H: 3, D: 2, C: 1 };

    for (let PlayerDeck of arr) {
        let [PlayerName, cardsStr] = PlayerDeck.split(`: `);
        let cards = cardsStr.split(', ');

        if (PlayerName in PlayerCards) {
            PlayerCards[PlayerName].push(...cards);
        } else {
            PlayerCards[PlayerName] = cards;
        }
    }
    let entries = Object.entries(PlayerCards);
    for (let [name, deck] of entries) {
        let uniqueDeck = new Set(deck);
        let deckValue = 0;

        for (const card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = powerValues[power] * typesValues[type];
            deckValue += cardValue;
        }
        console.log(`${name}: ${deckValue}`);
    }
}