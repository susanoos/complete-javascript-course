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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'David');
lufthansa.book(635, 'Gojo');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EH',
  bookings: [],
};

const book = lufthansa.book;
// 'call' method will point the 'this' keyword to the object we put followed by the arguments of the original function

book.call(eurowings, 23, 'Sakura');
console.log(eurowings);
book.call(lufthansa, 69, 'Naruto');

// 'apply' method is similar but not as used and takes an array as an argument
const flightData = [583, 'Itadori'];
book.apply(eurowings, flightData);
console.log(eurowings);
// modern way of passing an array as an argument
book.call(lufthansa, ...flightData);
