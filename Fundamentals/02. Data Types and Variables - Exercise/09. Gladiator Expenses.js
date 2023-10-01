function GladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmor = 0;

  let brokenShieldRefresh = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0 && i % 3 == 0) {
      brokenShieldRefresh += 1;
      brokenShield += 1;
    }
    if (i % 2 == 0) {
      brokenHelmet += 1;
    }
    if (i % 3 == 0) {
      brokenSword += 1;
    }
    if (brokenShieldRefresh == 2) {
      brokenArmor += 1;
      brokenShieldRefresh = 0;
    }
  }

  console.log(
    `Gladiator expenses: ${(
      brokenHelmet * helmetPrice +
      brokenSword * swordPrice +
      brokenShield * shieldPrice +
      brokenArmor * armorPrice
    ).toFixed(2)} aureus`
  );
}
