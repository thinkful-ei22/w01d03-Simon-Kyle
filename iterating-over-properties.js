'use strict';

const object = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4, 
  spam: 5,
};

function loopy(obj) {
  for (const key in obj) {
    console.log(`${key} is ${obj[key]}`);
  }
}

loopy(object);