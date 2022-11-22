'use strict';
// learning about the 'this' keyword
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);

//   //   will point to undefined
//   console.log(this);
// };
// calcAge(1998);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);

//   //   will point to the global scope since the arrow function does not get its own keyword
//   console.log(this);
// };
// calcAgeArrow(1998);

// const david = {
//   birthYear: 1998,
//   calcAge: function () {
//     // points to the 'david' object
//     console.log(this);
//     console.log(2022 - this.birthYear);
//   },
// };
// david.calcAge();

// const matilda = {
//   birthYear: 2010,
// };

// // method borrowing
// matilda.calcAge = david.calcAge;

// // 'this' will point to 'matilda'
// matilda.calcAge();

// const f = david.calcAge;
// // error since 'this' is now not pointing to an object but to undefined
// f();

// const david = {
//   firstName: 'David',
//   birthYear: 1998,
//   calcAge: function () {
//     // points to the 'david' object
//     console.log(this);
//     console.log(2022 - this.birthYear);

//     // Solution 1
//     // const isMillenial = function () {
//     //   // undefined since it is a regular function call
//     //   console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     // works since the arrow function does not get its own 'this' keyword
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//     };
//     isMillenial();
//   },

//   //   never use arrown functions in methods
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// // will not print `Hey David` since the arrow function does not get its own 'this' keyword
// david.greet();
// david.calcAge();

// Primitive types
let lastName = 'Escobar';
let oldLastName = lastName;
lastName = 'Sales';
console.log(lastName, oldLastName);

// Reference types
const mariah = {
  firstName: 'Mariah',
  lastName: 'Sales',
};
const marriedMariah = mariah;
marriedMariah.lastName = 'Escobar';
console.log('Before marriage: ', mariah);
console.log('After marriage: ', marriedMariah);

// Copying objects
const mariah2 = {
  firstName: 'Mariah',
  lastName: 'Sales',
  age: 27,
  family: ['Sister', 'Mom', 'Dad', 'Brother'],
};

// 'Object.assign()' copies the object to a new object but this method only works on the 1st level
const mariahCopy = Object.assign({}, mariah2);
mariahCopy.lastName = 'Escobar';
mariahCopy.family.push('Mother-in-law', 'Father-in-law');
console.log(mariah2);
console.log(mariahCopy);
