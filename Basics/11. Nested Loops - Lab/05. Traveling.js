function travelDestinations(input) {
  let index = 0;
  let destination = input[index++];

  while (destination !== "End") {
    let budget = Number(input[index++]);
    let savedMoney = 0;

    while (savedMoney < budget) {
      savedMoney += Number(input[index++]);
    }

    console.log(`Going to ${destination}!`);
    destination = input[index++];
  }
}
