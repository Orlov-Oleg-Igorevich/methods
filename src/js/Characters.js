export default class Character {
  constructor(name, type) {
    Object.defineProperty(this, "_name", {writable: true});
    Object.defineProperty(this, "_type", {writable: true});
    this.name = name;          // - имя
    this.type = type;          // - тип
    this.health = 100;         // - уровень жизни
    this.level = 1;            // - уровень персонажа
    this.attack = undefined;   // - атака
    this.defence = undefined;  // - защита
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length >= 2 && value.length <= 10) {
      this._name = value;
    } else {
      throw new Error("Слишком короткое или длинное имя");
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(value)) {
      this._type = value;
    } else {
      throw new Error("Не найден тип персонажа");
    }
  }

  levelUp() {
    if (this.health == 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;  // - атака
    this.defence = 25; // - защита
  }
}
export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;  // - атака
    this.defence = 10; // - защита
  }
}
export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;  // - атака
    this.defence = 40; // - защита
  }
}
export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;  // - атака
    this.defence = 40; // - защита
  }
}
export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;  // - атака
    this.defence = 25; // - защита
  }
}
export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;  // - атака
    this.defence = 10; // - защита
  }
}