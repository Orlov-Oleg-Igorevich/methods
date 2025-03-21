export default class Character {
  constructor(name, type, health, level, attack, defence) {
    Object.defineProperty(this, "_name", {writable: true});
    Object.defineProperty(this, "_type", {writable: true});
    this.name = name; // - имя
    this.type = type; // - тип
    this.health = health; // - уровень жизни
    this.level = level; // - уровень персонажа
    this.attack = attack; // - атака
    this.defence = defence; // - защита
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

// let car = new Character('dddd', 'Daemon', 100, 100, 100, 100);

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman', 100, 1, 25, 25);
  }
}
export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}
export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}
export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}
export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}
export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}
