'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const queryValues = []; 
  let objectValues = [];  
  let count = 0;
  let result = null;
  for (let key in query) {
    queryValues.push(query[key]);
  }
  for (let i = arr.length - 1; i >= 0; i--) { 
    for (let key in arr[i]) {
      objectValues.push(arr[i][key]);
    }
    for (let t = 0; t < queryValues.length; t++) {
      if (objectValues.includes(queryValues[t])) {
        count++;
      }
    }
    if (count === queryValues.length) {
      result = arr[i];
    } else if (count !== queryValues.length) {
      count = 0;
      objectValues = [];
    }
  }
  console.log(queryValues);
  return result;
}

console.log(findOne(HEROES, { id: 1 }));
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
// => null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// => null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
// => { id: 4, name: 'Superman', squad: 'Justice League' }
