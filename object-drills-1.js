'use strict';


// ******** Object creator ************

// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     }
//   };
// }

// const myObject = createMyObject();

// console.log(myObject.sayHello());


// ******** Object updater ************

// function updateObject(obj) {
//   // First version:
//   // const tempObj = {
//   //   foo: 'foo',
//   //   bar: 'bar',
//   //   bizz: 'bizz',
//   //   bang: 'bang',
//   // };
//   // return Object.assign(obj, tempObj);

//   // Cleaner(?) version:
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';

//   return obj;
// }

// const orig = {hello: 'hello',};
// console.log(orig);
// updateObject(orig);
// console.log(orig);


// ******** Self-reference ************

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
//   return person;
// }

// const test = personMaker();

// console.log(test.fullName());


// ******** Deleting keys ************

// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// function keyDeleter(obj) {

//   // Easy to understand version:
//   const unwantedKeys = ['foo', 'bar'];
//   for (const key in obj) {
//     if (unwantedKeys.includes(key)) {
//       delete obj[key];
//     }
//   }

//   // Faster(?) version:
//   // const unwantedKeys = ['foo', 'bar'];
//   // const allKeys = Object.keys(obj);
//   // for (let i = 0; i < unwantedKeys.length; i++ ) {
//   //   const currentKey = unwantedKeys[i];
//   //   if (allKeys.includes(currentKey)) {
//   //     delete obj[currentKey];
//   //   }
//   // }

//   // Simple Version:
//   // delete obj.foo;
//   // delete obj.bar;
//   return obj;
// }

// console.log(sampleObj);
// keyDeleter(sampleObj);
// console.log(sampleObj);
