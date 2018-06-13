'use strict';

function decode(str) {

  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  const decoder = function(letter) {
    return cipher[letter];
  };

  let decodedLetter = ' ';

  for (var key in cipher) {
    if (key === str[0]) {
      decodedLetter = str[decoder(str[0])];
    } 
  }

  return decodedLetter;
}

function decodeWords(str) {
  return str
    .split(' ')
    .map(el => decode(el))
    .join('');
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

