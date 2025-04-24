import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Characters';

test.each([
  [Bowerman, 'Oleg', {
    // name: 'Oleg',
    // type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }],
  [Swordsman, 'Fily', {
    // name: 'Fily',
    // type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }],
  [Magician, 'Olay', {
    // name: 'Olay',
    // type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }],
  [Daemon, 'Pety', {
    // name: 'Pety',
    // type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }],
  [Undead, 'Vasy', {
    // name: 'Vasy',
    // type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }],
  [Zombie, 'Misha', {
    // name: 'Misha',
    // type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }],
  // [Zombie, 'Misha Very-very Big', {
  //   name: 'Misha Very-very Big',
  //   type: 'Zombe',
  //   health: 100,
  //   level: 1,
  //   attack: 25,
  //   defence: 25
  // }]
])('test create class', (classCharacter, name, expected) => {
  expect(new classCharacter(name)).toEqual(expected);
});

test.each([
  [Zombie, new Error("Слишком короткое или длинное имя"), ['ARRRRRRRRRRRRRRRRR']],
  [Character, new Error("Не найден тип персонажа"), ['Misha', 'Zombe', 100, 1, 1, 1]],
])('test error', (classCharacter, err, param) => {
  expect(() => {new classCharacter(...param)}).toThrow(err);
});

test.each([
  [Undead, 'Vasy', 'name', 'Vasy'],
  [Zombie, 'Misha', 'type', 'Zombie'],
])('test get', (classCharacter, name, testProperty, testValue) => {
  expect((new classCharacter(name))[testProperty]).toBe(testValue);
});

test.each([
  [Undead, ['Misha'], null, 'levelUp', 'level', 2],
  [Undead, ['Oleg'], 15, 'damage', 'health', 88.75],
  [Undead, ['Oleg'], 10000, 'damage', 'health', 0],
])('test method', (classCharacter, paramsClass, paramsMethod, testMethod, testProperty, expected) => {
  const character = new classCharacter(...paramsClass);
  character[testMethod](paramsMethod);
  expect(character[testProperty]).toBeCloseTo(expected);
})

test('testing leveling up a dead character', () => {
  const character = new Swordsman('Oleg');
  character.damage(10000);
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
})