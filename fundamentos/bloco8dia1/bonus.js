const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = () => {
    let minDmg = 15;
    let maxDmg = Math.floor(Math.random() * dragon.strength)
    let dragonDmg = maxDmg > minDmg ? maxDmg : minDmg
    return dragonDmg
  }

const warriorAttack = () => {
    let minDmg = warrior.strength
    let maxDmg = minDmg * warrior.weaponDmg
    let warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDmg
}

const mageAttack = () => {
    let mageMana = mage.mana
    let minDmg = mage.intelligence
    let maxDMg = minDmg * 2
    let mageObj = {
        mana: 125,
        dano
    }
}

  
