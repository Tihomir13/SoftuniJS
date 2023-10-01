function FishingBoat(Input) {
  let budget = Number(Input.shift());
  let season = Input.shift();
  let broiRibari = Number(Input.shift());
  let smetka;

  if (season == `Spring`) {
    if (broiRibari <= 6) smetka = 3000 * 0.9;
    else if (broiRibari >= 7 && broiRibari <= 11) smetka = 3000 * 0.85;
    else if (broiRibari >= 12) smetka = 3000 * 0.75;
    if (broiRibari % 2 == 0) smetka *= 0.95;
  } else if (season == `Summer`) {
    if (broiRibari <= 6) smetka = 4200 * 0.9;
    else if (broiRibari >= 7 && broiRibari <= 11) smetka = 4200 * 0.85;
    else if (broiRibari >= 12) smetka = 4200 * 0.75;
    if (broiRibari % 2 == 0) smetka *= 0.95;
  } else if (season == `Autumn`) {
    if (broiRibari <= 6) smetka = 4200 * 0.9;
    else if (broiRibari >= 7 && broiRibari <= 11) smetka = 4200 * 0.85;
    else if (broiRibari >= 12) smetka = 4200 * 0.75;
  } else if (season == `Winter`) {
    if (broiRibari <= 6) smetka = 2600 * 0.9;
    else if (broiRibari >= 7 && broiRibari <= 11) smetka = 2600 * 0.85;
    else if (broiRibari >= 12) smetka = 2600 * 0.75;
    if (broiRibari % 2 == 0) smetka *= 0.95;
  }

  if (budget >= smetka) {
    console.log(`Yes! You have ${(budget - smetka).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(smetka - budget).toFixed(2)} leva.`
    );
  }
}
