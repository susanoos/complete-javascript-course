'use strict';
// const flight = 'LH234';
// const david = {
//   name: 'David Escobar',
//   passport: 24739479284,
// };

// //
// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else alert('Wrong passport');
// };

// checkIn(flight, david);
// console.log(flight);
// console.log(david);

// const newPassport = person => {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(david);
// checkIn(flight, david);

// const oneWord = str => str.replace(/ /g, '').toLowerCase();

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher order function
// const transformer = (str, fn) => {
//   console.log(`Original: ${str}`);
//   console.log(`Transformed: ${fn(str)}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}!`);
//   };
// };

// // is now the function we returned in the 'greet' function
// const greeterHey = greet('Hey');
// greeterHey('David');
// greeterHey('Sasuke');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'David');
// lufthansa.book(635, 'Gojo');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EH',
//   bookings: [],
// };

// const book = lufthansa.book;

// // 'call' method will point the 'this' keyword to the object we put followed by the arguments of the original function

// book.call(eurowings, 23, 'Sakura');
// console.log(eurowings);
// book.call(lufthansa, 69, 'Naruto');

// // 'apply' method is similar but not as used and takes an array as an argument
// const flightData = [583, 'Itadori'];
// book.apply(eurowings, flightData);
// console.log(eurowings);
// // modern way of passing an array as an argument
// book.call(lufthansa, ...flightData);

// // 'bind' method returns a new function
// const bookLH = book.bind(lufthansa);
// const bookEW = book.bind(eurowings);
// bookLH(22, 'Sakuara');
// bookEW(10, 'Messi');

// // presetting a default value
// const bookEW24 = book.bind(eurowings, 24);
// bookEW24('Kobe');

// Challenge 1
// const pollBtn = document.querySelector('.poll');

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Java', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// Closures
// const secureBooking = () => {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// const helloWorld = () => {
//   let str = 'Hello';
//   return function (str2) {
//     console.log('Outer: ' + str);
//     console.log('Inner: ' + str2);
//   };
// };

// const newFunction = helloWorld();
// newFunction('World');
// console.dir(newFunction);

// Examples of CLosures
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 50;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // 'f' was reassigned by 'h'
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassenger = (n, wait) => {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassenger(180, 3);

// Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
