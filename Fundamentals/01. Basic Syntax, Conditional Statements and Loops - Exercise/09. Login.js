function Login(Input) {
  let password = Input[0];
  password = password.split(``).reverse().join(``);

  for (let i = 1; i <= Input.length; i++) {
    if (Input[i] === password) {
      console.log(`User ${Input[0]} logged in.`);
      break;
    } else if (i === 4) {
      console.log(`User ${Input[0]} blocked!`);
      break;
    } else console.log(`Incorrect password. Try again.`);
  }
}
