function Journey(Input) {
  let budget = Number(Input.shift());
  let season = Input.shift();

  if (budget <= 100) {
    if (season == "summer") {
      budget *= 0.3;
      console.log(`Somewhere in Bulgaria \n Camp - ${budget.toFixed(2)}`);
    } else if (season == "winter") {
      budget *= 0.7;
      console.log(`Somewhere in Bulgaria \n Hotel - ${budget.toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    if (season == "summer") {
      budget *= 0.4;
      console.log(`Somewhere in Balkans \n Camp - ${budget.toFixed(2)}`);
    } else if (season == "winter") {
      budget *= 0.8;
      console.log(`Somewhere in Balkans \n Hotel - ${budget.toFixed(2)}`);
    }
  } else if (budget >= 1000) {
    budget *= 0.9;
    console.log(`Somewhere in Europe \n Hotel - ${budget.toFixed(2)}`);
  }
}
