'use strict';

const elf = {
  name: 'Legolas',
  jobTitle: 'archer',
};

const dwarf = {
  name: 'Gimli',
  jobTitle: 'axe-man',
};

const man = {
  name: 'Aragorn',
  jobTitle: 'swordsman',
};

const fellowship = [elf, dwarf, man];

function getInfo(arr) {
  arr.forEach(el => console.log(`${el.name} is the ${el.jobTitle}`));
}

getInfo(fellowship);