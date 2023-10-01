function Time15Minutes(Input) {
  let hours = Number(Input[0]);
  let minutes = Number(Input[1]);

  if (minutes >= 45) {
    hours++;
    minutes += 15;
    minutes %= 60;
  } else {
    minutes += 15;
  }

  if (hours === 24) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else console.log(`${hours}:${minutes}`);
}
