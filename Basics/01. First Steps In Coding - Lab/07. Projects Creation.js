function projects(input) {
  let name = input[0];
  let projects = input[1];
  let hours = Number(input[1]) * 3;

  console.log(
    `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
  );
}
