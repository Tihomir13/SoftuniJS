function Vacation(numberOfPeaople, typeOfPeople, day) {
  let reduce = 1;
  if (typeOfPeople === `Students`) {
    if (numberOfPeaople >= 30) reduce = 0.85;
    if (day === `Friday`) {
      console.log(
        `Total price: ${(numberOfPeaople * 8.45 * reduce).toFixed(2)}`
      );
    } else if (day === `Saturday`) {
      console.log(
        `Total price: ${(numberOfPeaople * 9.8 * reduce).toFixed(2)}`
      );
    } else if (day === `Sunday`) {
      console.log(
        `Total price: ${(numberOfPeaople * 10.46 * reduce).toFixed(2)}`
      );
    }
  } else if (typeOfPeople === `Business`) {
    if (numberOfPeaople >= 100) numberOfPeaople -= 10;
    if (day === `Friday`) {
      console.log(`Total price: ${(numberOfPeaople * 10.9).toFixed(2)}`);
    } else if (day === `Saturday`) {
      console.log(`Total price: ${(numberOfPeaople * 15.6).toFixed(2)}`);
    } else if (day === `Sunday`) {
      console.log(`Total price: ${(numberOfPeaople * 16).toFixed(2)}`);
    }
  } else if (typeOfPeople === `Regular`) {
    if (numberOfPeaople >= 10 && numberOfPeaople <= 20) reduce = 0.95;

    if (day === `Friday`) {
      console.log(`Total price: ${(numberOfPeaople * 15 * reduce).toFixed(2)}`);
    } else if (day === `Saturday`) {
      console.log(`Total price: ${(numberOfPeaople * 20 * reduce).toFixed(2)}`);
    } else if (day === `Sunday`) {
      console.log(
        `Total price: ${(numberOfPeaople * 22.5 * reduce).toFixed(2)}`
      );
    }
  }
}
