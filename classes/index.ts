interface Opponent {
  alias: string;
  health: number;
}
class ActionChar {
  alias: string;

  health: number;

  strength: number;

  secretIdentify: number;

  stamina: number;

  constructor(
    alias: string,
    health: number,
    strength: number,
    secretIdentify: number,
    stamina: number
  ) {
    this.alias = alias;
    this.health = health;
    this.strength = strength;
    this.secretIdentify = secretIdentify;
    this.stamina = stamina;
  }

  attack(opponent: Opponent, attackWith: number) {
    this.stamina -= attackWith;
    opponent.health -= attackWith;
  }

  changeAlias(newAlias: string) {
    this.alias = newAlias;
    return this;
  }
}

const bobo = new ActionChar('bobo', 222, 60, 1, 500);
// console.log(bobo);
bobo.changeAlias('Logan');
// console.log(bobo);

export { ActionChar };
