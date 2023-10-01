function NewHouse([flowerType, flowerCount, budget]) {
  flowerCount = Number(flowerCount);
  budget = Number(budget);

  let flowerPrice = 0;

  switch (flowerType) {
    case "Roses":
      flowerPrice = 5;
      break;
    case "Dahlias":
      flowerPrice = 3.8;
      break;
    case "Tulips":
      flowerPrice = 2.8;
      break;
    case "Narcissus":
      flowerPrice = 3;
      break;
    case "Gladiolus":
      flowerPrice = 2.5;
      break;
  }

  let totalPrice = flowerCount * flowerPrice;

  if (flowerType === "Roses" && flowerCount > 80) {
    totalPrice *= 0.9;
  } else if (flowerType === "Dahlias" && flowerCount > 90) {
    totalPrice *= 0.85;
  } else if (flowerType === "Tulips" && flowerCount > 80) {
    totalPrice *= 0.85;
  } else if (flowerType === "Narcissus" && flowerCount < 120) {
    totalPrice *= 1.15;
  } else if (flowerType === "Gladiolus" && flowerCount < 80) {
    totalPrice *= 1.2;
  }

  if (budget >= totalPrice) {
    let left = budget - totalPrice;
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${left.toFixed(
        2
      )} leva left.`
    );
  } else {
    let needed = totalPrice - budget;
    console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
  }
}
