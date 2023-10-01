function SummerOutfit(Input) {
  let gradusi = Number(Input.shift());
  let vreme = Input.shift();
  let Outfit;
  let Shoes;

  if (10 <= gradusi && gradusi <= 18) {
    if (vreme == `Morning`) {
      Outfit = `Sweatshirt`;
      Shoes = `Sneakers`;
    } else if (vreme == `Afternoon`) {
      Outfit = `Shirt`;
      Shoes = `Moccasins`;
    } else if (vreme == `Evening`) {
      Outfit = `Shirt`;
      Shoes = `Moccasins`;
    }
  } else if (18 <= gradusi && gradusi <= 24) {
    if (vreme == `Morning`) {
      Outfit = `Shirt`;
      Shoes = `Moccasins`;
    } else if (vreme == `Afternoon`) {
      Outfit = `T-Shirt`;
      Shoes = `Sandals`;
    } else if (vreme == `Evening`) {
      Outfit = `Shirt`;
      Shoes = `Moccasins`;
    }
  } else if (gradusi >= 25)
    if (vreme == `Morning`) {
      Outfit = `T-Shirt`;
      Shoes = `Sandals`;
    } else if (vreme == `Afternoon`) {
      Outfit = `Swim Suit`;
      Shoes = `Barefoot`;
    } else if (vreme == `Evening`) {
      Outfit = `Shirt`;
      Shoes = `Moccasins`;
    }
  console.log(`It's ${gradusi} degrees, get your ${Outfit} and ${Shoes}.`);
}
