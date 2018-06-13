'use strict';

const elf = {
  name: 'Legolas',
  jobTitle: 'archer',
  boss: 'Gandalf',
};

const dwarf = {
  name: 'Gimli',
  jobTitle: 'axe-man',
  boss: 'Gandalf',
};

const man = {
  name: 'Aragorn',
  jobTitle: 'swordsman',
  boss: 'Gandalf',
};

const wizard = {
  name: 'Gandalf',
  jobTitle: 'magicky-dude',
};

const fellowship = [elf, dwarf, man, wizard];

function getInfo(arr) {
  arr.forEach(el => {
    const reportsTo = `${el.boss ? `reports to ${el.boss}.` : 'doesn\'t report to anybody.'}`
    console.log(`${el.name} the ${el.jobTitle} ${reportsTo}`);
  });
}

getInfo(fellowship);