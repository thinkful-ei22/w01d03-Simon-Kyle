'use strict';


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon: 'fists',
    equipWeapon: function(weapon) {
      this.weapon = weapon;
      return this;
    },
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight: function(opponent) {
      const damageToOpponent = (this.attack - opponent.defense) > 0 ? this.attack - opponent.defense : 0;
      const damageToSelf = (opponent.attack - this.defense) > 0 ? opponent.attack - this.defense : 0;
      return `Your opponent takes ${damageToOpponent} damage and you receive ${damageToSelf} damage`;
    },
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 6, 6));

characters[0].describe();
// console.log(characters[0].evaluateFight(characters[1]));

characters.find(char => char.nickname === 'aragorn').equipWeapon('Anduril').describe();

const hobbits = characters.filter(char => char.race === 'Hobbit');
// console.log(hobbits);

const dps = characters.filter(char => char.attack > 5);
// console.log(dps);