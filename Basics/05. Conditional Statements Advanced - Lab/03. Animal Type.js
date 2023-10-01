function WeekendorWorkingDay(Input) {
  switch (Input[0]) {
    case `dog`:
      console.log(`mammal`);
      break;
    case `snake`:
    case `crocodile`:
    case `tortoise`:
      console.log(`reptile`);
      break;
    case `cat`:
      console.log(`unknown`);
      break;
    default:
      console.log(`Error`);
      break;
  }
}
