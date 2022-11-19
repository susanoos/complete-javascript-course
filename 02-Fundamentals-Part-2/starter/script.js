'use strict';
// Functions

// function logger() {
//     console.log('My name is David');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; 
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// Function declaration
// can be called before the function
// const age3 = calcAge1(1996);
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
// const age1 = calcAge1(1998);
// // console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(1997);
// // console.log(age2);
// console.log(age1, age2, age3);

// Arrow functions
// const calcAge3 = birthYear => 2022 - birthYear;
// const age4 = calcAge3(1995);
// console.log(age4);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1998, 'Mariah'));
// const retirementAge = yearsUntilRetirement(1998, 'David');
// console.log(retirementAge);

// Calling functions within a function
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice; 
// }
// console.log(fruitProcessor(2, 3));

// Coding Challenge 1 ✅
// const calcAverage = (score1, score2, score3) => {
//     const avergae = (score1 + score2 + score3) / 3;
//     return avergae;
// }

// const dolphinsScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else console.log('No winner');
// }
// checkWinner(dolphinsScore, koalasScore);
// checkWinner(345, 134);

// ===========================================================================

// Arrays
// /1st way of creating arrays
// const friends = ['Itadori', 'Megumi', 'Maki'];
// console.log(friends);

// // 2nd way
// const years = new Array(1996, 1997, 1998);

// // Retrieving elements from arrays
// console.log(friends[2]);
// console.log(years[0]);
// console.log(friends.length);

// // changing elements in array -- 'mutating'
// friends[2] = 'Gojo';
// console.log(friends);

// // Arrays can hold different values
// const firstName = 'David';
// const david = [firstName, 'Escobar', 2022 - 1998, true, friends];
// console.log(david);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const y = [1990, 1968, 1969, 1998];
// const age1 = calcAge(y[0]);
// const age2 = calcAge(y[1]);
// const age3 = calcAge(y[y.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// ===========================================

// Array methods

// push method adds elements to the end of the array
// const friends = ['Itadori', 'Megumi', 'Maki'];
// const newLength = friends.push('Gojo');
// console.log(friends);
// console.log(newLength);

// // unshift method adds elements to the beginning
// friends.unshift('Panda');
// console.log(friends);

// // pop() removes last element of the array
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // shift() removes first element of the array
// friends.shift();
// console.log(friends);

// // indexOf method returns the index that the element is in
// console.log(friends.indexOf('Megumi'));

// // includes method returns true if element is in the array or false if it is not
// console.log(friends.includes('Megumi'));
// console.log(friends.includes('Naruto'));

// Coding Challenge 2 ✅
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(totals);

// ==========================================

// Objects
// const david = {
//     firstName: 'David',
//     lastName: 'Escobar',
//     age: 2022 - 1998,
//     job: 'Developer',
//     friends: ['Ash', 'Brock', 'May', 'Max']
// }
// console.log(david)

// // retrieve elements from objects using '.' or '['']'
// console.log(david.lastName);
// console.log(david['firstName']);

// // getting elemet with a variable
// const nameKey = 'Name';
// // firstName
// console.log(david['first' + nameKey]);
// // lastName
// console.log(david['last' + nameKey]);

// // retrieving user input and saving to a variable and then printing the result
// // const userInterest = prompt('What do you want to know about me? Choose firstName, lastName, age, job, or friends');
// // if (david[userInterest]) {
// //     console.log(david[userInterest]);
// // } else console.log('Does not exist');

// // Adding elements to the object
// david.location = 'California';
// david['Pokemon'] = 'Charmander';
// console.log(david)

// // Mini challenge ✅
// // Writing how many friends and the name of my best friend
// console.log(`${david.firstName} has ${david.friends.length} friends and his best friend is ${david.friends[0]}`);

// Object functions
// const david = {
//     firstName: 'David',
//     lastName: 'Escobar',
//     birthYear: 1998,
//     job: 'Developer',
//     friends: ['Ash', 'Brock', 'May', 'Max'],
//     hasDriversLicense: true,
//     // adding a function
//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear;
//     // }
//     // calcAge: function() {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function() {
//         // creating new property 'age' and setting it to the calculated age
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         this.summary = `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriversLicense ? "a driver's license" : "no driver's license"}.`
//         return this.summary;
//     }

    
// }
// david.calcAge();
// david.getSummary();
// console.log(david.age);
// console.log(david.summary);

// Coding Challenge 3
// const mark = {
//     firstName: 'Mark',
//     height: 1.69,
//     weight: 78,
//     calcBmi: function() {
//         this.bmi = Math.floor(this.weight / this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     height: 1.95,
//     weight: 92,
//     calcBmi: function() {
//         this.bmi = Math.floor(this.weight / this.height ** 2);
//         return this.bmi;
//     }
// }
// mark.calcBmi();
// john.calcBmi();
// mark.bmi > john.bmi ? console.log(`Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})!`) : console.log(`John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})!`);

// Coding Challenge 4 ✅
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = arr => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage(totals));