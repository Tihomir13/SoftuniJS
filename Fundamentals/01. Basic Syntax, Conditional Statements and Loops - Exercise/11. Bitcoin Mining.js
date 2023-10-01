function BitcoinMining(Input) {
  const BTCprice = 11949.16;
  const Goldprice = 67.51;

  let BTCcounter = 0;
  let BTCfirstPurchase = [];
  let money = 0;

  for (let i = 0; i < Input.length; i++) {
    if ((i + 1) % 3 === 0 && i !== 0) money += Input[i] * 0.7 * Goldprice;
    else money += Input[i] * Goldprice;

    while (money >= BTCprice) {
      money -= BTCprice;
      BTCcounter++;
      BTCfirstPurchase.push(i + 1);
    }
  }

  console.log(`Bought bitcoins: ${BTCcounter}`);
  if (BTCcounter !== 0)
    console.log(`Day of the first purchased bitcoin: ${BTCfirstPurchase[0]}`);
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
