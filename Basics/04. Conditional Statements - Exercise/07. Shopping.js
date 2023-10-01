function Shopping(Input) {
  let budget = Number(Input[0]);
  let GPUS = Number(Input[1]);
  let CPUS = Number(Input[2]);
  let RAMS = Number(Input[3]);

  let cenaGPUS = GPUS * 250;
  let cenaZaEdinCPUS = cenaGPUS * 0.35;
  let cenaZaEdinRAMS = cenaGPUS * 0.1;

  let cenaCPUS = cenaZaEdinCPUS * CPUS;
  let cenaRAM = cenaZaEdinRAMS * RAMS;

  let SUMA = cenaGPUS + cenaCPUS + cenaRAM;

  if (GPUS > CPUS) {
    SUMA *= 0.85;
  }

  if (budget >= SUMA) {
    console.log(`You have ${(budget - SUMA).toFixed(2)} leva left!`);
  } else if (SUMA > budget) {
    console.log(
      `Not enough money! You need ${(SUMA - budget).toFixed(2)} leva more!`
    );
  }
}
