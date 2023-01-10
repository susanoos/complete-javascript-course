'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
const displayMovements = (movements, sort = false) => {
  // clears the HTML
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">$${movement}</div>
  </div>
    `;
    // adds created HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcBalance = accounts => {
  accounts.balance = accounts.movements.reduce((acc, mov) => (acc += mov));
  labelBalance.textContent = `$${accounts.balance}`;
};

const calcDisplaySummary = accounts => {
  const incomes = accounts.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$${incomes}`;

  const withdrawals = accounts.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$${Math.abs(withdrawals)}`; //'Math.abs' removes the -

  const interests = accounts.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * accounts.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interests}`;
};

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

const updateUI = accounts => {
  displayMovements(accounts.movements);

  calcBalance(accounts);

  calcDisplaySummary(accounts);
};

// Event Handlers
// Logging in
let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log(`LOGIN`);
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
  // console.log(currentAccount);
});

// Transferring between accounts
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // pushing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// Deleting the account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    currentAccount.username === inputClosePin.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
  }
  inputCloseUsername.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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


// Method Chaining
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // recall returns an array
  .map((mov, i, arr) => {
    // checking the prev array
    // console.log(arr); // logs the positives
    return mov * euroToUsd;
  }) // recall returns an array
  // .map((mov) => mov * euroToUsd) // recall returns an array
  .reduce((acc, mov) => (acc += mov), 0); // returns a value
console.log(totalDepositsUSD);


// Coding Challenge 3
const calcAverageHumanAge = ages => {
  const dogToHumanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => (acc += age / arr.length), 0);
  console.log(dogToHumanAges);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// 'find' method retrieves the first element from an array depending on the condition
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // Gets the object with the owner 'Jessica Davis'
console.log(account);

// Mini challenge same as above ^
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}

'.some' returns true or false checks a condition
const anyDeposits = movements.some(mov => mov > 0);

'.every' return true or false if every element passes the condition
console.log(movements.every(mov => mov > 0)); // logs false due to withdrawals

// '.flat' flattens an array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // logs [1, 2, 3, 4, 5, 6, 7, 8]
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // the parameter is the depth of the nested array

// All movements from all accounts
// const accMovements = accounts.map(acc => acc.movements);
// console.log(accMovements);
// const allMovements = accMovements.flat();
// console.log(allMovements);
// const overallMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallMovements);

// simple solution
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// '.flatMap' goes one level deep
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


// '.sort' method mutates the array and sorts them in order alphabetically
const owners = ['david', 'mariah', 'balto', 'sasuke'];
console.log(owners.sort()); // logs ['balto', 'david', 'mariah', 'sasuke']
console.log(movements.sort((a, b) => a - b)); // logs [-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(movements.sort((a, b) => b - a)); // logs [3000, 1300, 450, 200, 70, -130, -400, -650]


// create and fill arrays
const x = new Array(7);
x.fill(1);
x.fill(3, 3, 5);
console.log(x); // logs [1, 1, 1, 3, 3, 1, 1]

// 'Array.from()'
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // logs [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // logs [1, 2, 3, 4, 5, 6, 7]

const randomDice = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(randomDice.sort((a, b) => a - b));

labelBalance.addEventListener('click', () => {
  const movsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('$', ''))
  );
  console.log(movsUI);
});


// Array Method Practice
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000);
console.log(numDeposits.length);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, mov) => {
      // mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += mov);
      acc[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const convertTitleCase = title => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const newTitle = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.slice(0, 1).toUpperCase() + word.slice(1)
    )
    .join(' ');
  console.log(newTitle);
};
convertTitleCase(`this Is A lonG TItle`);

// Challenge 4
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  const recommenedFood = dog.weight ** 0.75 * 28;
  dog.recommenedFood = recommenedFood;
  console.log(dog);
});

// 2.
dogs.map(dog => {
  dog.owners.find(dogOwner => {
    if (dogOwner === 'Sarah') {
      console.log(
        dog.curFood != dog.recommenedFood
          ? 'Eating too much'
          : 'Eating too little'
      );
    }
  });
});

// 3.
const ownersEatTooMuch = dogs
  .flatMap(dog => {
    if (dog.curFood >= dog.recommenedFood) {
      return dog.owners;
    }
  })
  .filter(dogOwner => dogOwner != undefined);

const ownersEatTooLittle = dogs
  .flatMap(dog => {
    if (dog.curFood <= dog.recommenedFood) {
      return dog.owners;
    }
  })
  .filter(dogOwner => dogOwner != undefined);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
ownersEatTooMuch.forEach(owner => {
  console.log(`${owner} eats too much!`);
});
