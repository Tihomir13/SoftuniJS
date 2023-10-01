function HotelRoom(input) {
  const month = input[0];
  const nights = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50 * nights;
      apartmentPrice = 65 * nights;
      if (nights > 7 && nights <= 14) {
        studioPrice -= studioPrice * 0.05;
      } else if (nights > 14) {
        studioPrice -= studioPrice * 0.3;
        apartmentPrice -= apartmentPrice * 0.1;
      }
      break;
    case "June":
    case "September":
      studioPrice = 75.2 * nights;
      apartmentPrice = 68.7 * nights;
      if (nights > 14) {
        studioPrice -= studioPrice * 0.2;
        apartmentPrice -= apartmentPrice * 0.1;
      }
      break;
    case "July":
    case "August":
      studioPrice = 76 * nights;
      apartmentPrice = 77 * nights;
      if (nights > 14) {
        apartmentPrice -= apartmentPrice * 0.1;
      }
      break;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
