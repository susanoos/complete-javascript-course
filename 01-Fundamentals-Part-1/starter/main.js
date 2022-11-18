// Coding Challenge 1
// BMI calculation 

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBmi = johnMass / johnHeight ** 2;

// const markMass = 78;
// const markHeight = 1.69
// const markBmi = markMass / markHeight ** 2;

// if (markBmi > johnBmi) {
//     console.log(`Mark has a greater BMI of ${markBmi}`);
// } else {
//     console.log(`John has a greater BMI of ${johnBmi}`)
// }

// Coding Challenge 2 
// calculating average score

// const dolphinsAverage = Math.floor((97 + 112 + 101) / 3);
// console.log(dolphinsAverage);

// const koalasAverage = Math.floor((109 + 95 + 106) / 3);
// console.log(koalasAverage);

// if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins win with a score of ${dolphinsAverage}.`);
// } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
//     console.log(`Koalas win with a score of ${koalasAverage}`);    
// } else if (dolphinsAverage === koalasAverage) {
//     console.log(`Both teams have a tied score of with Dolphins: ${dolphinsAverage} and Koalas: ${koalasAverage}`);
// } else {
//     console.log('Teams did not meet a the requirement of 100 so both lose.');
// }

// Switch statement
// const day = 'Thursday';

// // uses strict comparisons
// // switching the day
// switch(day) {
//     case 'Monday': // day === 'Monday'
//         console.log('Relax and play games.');
//         break;
//     case 'Tuesday': 
//         console.log('Attend sqaud meeting')
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('Work and do techelevator assignments');
//         break;

//     case 'Friday':
//         console.log('Work and attend tech sqaud meeting');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the weekend.');
//         break;

//     // basically an else block
//     default:
//     console.log('This is the else part of the switch statement')    
// }

// // samething using else if
// if (day === 'Monday') {
//     console.log('Relax and play games.');
// } else if (day === 'Tuesday') {
//     console.log('Attend sqaud meeting')
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Work and do techelevator assignments');
// } else if (day === 'Friday') {
//     console.log('Work and attend tech sqaud meeting');
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend.');
// } else console.log('This is the else part of the switch statement');

// ternary operator
// const age = 24;
// // age >= 18 ? console.log('I drink alcohol') : console.log('I am too young to drink');
// const drink = age >= 18 ? 'drink 🍺' : 'drink 🧃';
// console.log(drink);
// // can use ternary operator in string template literals
// console.log(`I like to drink ${age >= 18 ? '🍺' : '🧃'}`);

// Coding Challenge 4
// Tip calculation
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// console.log(`The was bill was ${bill}, the tip was ${tip}, the total was ${bill + tip} `);