function BonusScore(Input) {
  let startingScore = Number(Input[0]);
  let bonusPoints = 0.0;

  if (startingScore <= 100) {
    bonusPoints += 5;
  } else if (startingScore > 100 && startingScore <= 1000) {
    bonusPoints = startingScore * 0.2;
  } else if (startingScore > 1000) {
    bonusPoints = startingScore * 0.1;
  }

  if (startingScore % 2 === 0) {
    bonusPoints++;
  } else if (startingScore % 10 === 5) {
    bonusPoints += 2;
  }

  console.log(bonusPoints);
  console.log(startingScore + bonusPoints);
}
