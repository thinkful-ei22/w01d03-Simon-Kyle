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
  const keys = Object.keys(query);
  let result = null;
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    // console.log(key);
    for (let t = 0; t < arr.length; t++) {
      if (arr[t][key] === query[key]) {
        count++;
      }
    }
  }
  if (count === keys.length - 1) {
    result = arr[t];
  }
  return result;
}

