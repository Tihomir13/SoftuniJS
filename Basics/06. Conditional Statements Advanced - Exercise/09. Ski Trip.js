function SkiТrip(input) {
  const days = Number(input[0]);
  const roomType = input[1];
  const grade = input[2];

  let pricePerNight = 0;

  if (roomType === "room for one person") {
    pricePerNight = 18;
  } else if (roomType === "apartment") {
    pricePerNight = 25;
    if (days < 10) {
      pricePerNight *= 0.7;
    } else if (days <= 15) {
      pricePerNight *= 0.65;
    } else {
      pricePerNight *= 0.5;
    }
  } else if (roomType === "president apartment") {
    pricePerNight = 35;
    if (days < 10) {
      pricePerNight *= 0.9;
    } else if (days <= 15) {
      pricePerNight *= 0.85;
    } else {
      pricePerNight *= 0.8;
    }
  }

  let totalPrice = (days - 1) * pricePerNight; // Приспадаме 1 нощувка за деня на тръгване

  if (grade === "positive") {
    totalPrice *= 1.25;
  } else if (grade === "negative") {
    totalPrice *= 0.9;
  }

  console.log(totalPrice.toFixed(2));
}
