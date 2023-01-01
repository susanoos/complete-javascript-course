'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating HTML elements
const displayMovements = movements => {
  // clears the HTML
  containerMovements.innerHTML = '';
  movements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${movement}</div>
  </div>
    `;
    // adds created HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcBalance = movements => {
  const balance = movements.reduce((acc, mov) => (acc += mov));
  labelBalance.textContent = `$${balance}`;
};
calcBalance(account1.movements);

// creates username based on their name 'Steven Thomas Williams' => 'stw'
const createUsername = acc => {
  acc.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let newArr = arr.slice(2); // 'slice' method returns a new array with the extracted parts
console.log(newArr);
newArr = arr.slice(2, 4); // 'slice' method with end parameter ['c', 'd']
console.log(newArr);
newArr = arr.slice(-2); // starts at the end ['f', 'g']
console.log(newArr);

// 'splice' mutates orginial array
// console.log(arr.splice(2)); // returns new array from ['c']
arr.splice(-1); // '-1' removes last element
console.log(arr); // logs ['a', 'b']
arr.splice(1, 2);
console.log(arr); // removes ['c', 'b']

// 'reverse' mutates orginial array
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const arr2 = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
console.log(arr2.reverse());
console.log(arr2);

// 'concat' combines 2 arrays
const letters = arr.concat(arr2);
console.log(letters); // logs ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'b', 'a', 'g', 'f', 'e', 'd', 'c']

new method 'at' also works on Strings
const arr = [24, 10, 9];
console.log(arr.at(0)); // logs 24
console.log(arr.at(-1)); // logs 9

'forEach' method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(
  '---------------------------- FOR EACH ------------------------------------'
);
movements.forEach((movement, i, arr) => {
  // takes a callback function
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else console.log(`Movement ${i + 1}: You withdrawn: ${movement}`);
});

console.log(
  '---------------------------- FOR OF ------------------------------------'
);

// 'for of' loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else console.log(`Movement ${i + 1}: You withdrawn: ${movement}`);
}

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

'forEach' on maps and sets
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // key is the same as the value
});

// ==============================================================================================
// Coding Challenge 1
const juliaDogs = [3, 5, 2, 12, 7];
const juliaDogs2 = [9, 16, 6, 8, 3];
const kateDogs = [4, 1, 15, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];
const checkDogs = (dogsJulia, dogsKate) => {
  const noCats = [...dogsJulia].slice(1, -2);
  const totalDogs = noCats.concat(dogsKate);
  // console.log(noCats);
  // console.log(totalDogs);
  totalDogs.forEach((age, i) => {
    const isDog = age >= 3 ? 'dog 🐺' : 'puppy 🐶';
    console.log(`Dog ${i + 1} is a ${isDog}`);
  });
};
checkDogs(juliaDogs, kateDogs);
console.log('==========================================================');
checkDogs(juliaDogs2, kateDogs2);


// ==============================================================================================
// 'map' method returns a new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD);

// has access to index and array
const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);


// creates a shallow copy of an array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
console.log(deposits);


// '.reduce' will combine all array elements into a single number, takes 2 parameters, callback function and inital value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return (acc += cur);
}, 0);
console.log(balance);

// Max value
const max = movements.reduce((acc, cur) => (acc > cur ? acc : cur));

console.log(max);
*/
// Coding Challenge 2
// test data [5, 2, 4, 1, 15, 8, 3], [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = ages => {
  const dogToHumanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = dogToHumanAges.filter(age => age >= 18);
  const average =
    adults.reduce((acc, age) => (acc += age), 0) / dogToHumanAges.length;
  console.log(dogToHumanAges);
  console.log(adults);
  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
