'use strict';

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

function decode(str) {
  const num = cipher[str[0]];

  if (num) {
    return str[num];
  }

  return ' ';
}

function decodeWords(str) {
  return str
    .split(' ')
    .map(decode)
    .join('');
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

