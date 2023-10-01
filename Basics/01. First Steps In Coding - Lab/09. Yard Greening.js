function YardGreening(input) {
  let kvMetri = Number(input);
  kvMetri *= 7.61;
  kwMetriDiscount = kvMetri * 0.18;

  console.log(`The final price is: ${kvMetri - kwMetriDiscount} lv.`);
  console.log(`The discount is: ${kwMetriDiscount} lv.`);
}
