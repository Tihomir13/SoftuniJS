function LeapYear(Input) {
  if ((Input % 4 === 0 && Input % 100 !== 0) || Input % 400 === 0) {
    console.log(`yes`);
  } else console.log(`no`);
}
