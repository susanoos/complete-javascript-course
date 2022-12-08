'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring in function parameters and showing an example of default values
  orderDelivery: function ({
    starterIndex,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

// ================================================================================================

// restaurant.orderPizza('mushrooms', 'pineapple', 'pepperoni', 'bacon');

// // REST Operator condenses elements into an array, must be last element
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // using destructuring and REST
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...otherFood);

// // REST in Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // in functions
// const add = (...nums) => {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// };
// add(1, 2, 3);
// add(4, 5, 6, 7, 8);
// add(9, 10, 11, 12, 13, 14, 15, 16, 17);

// const x = [23, 5, 7];
// add(...x);

// ===========================================================================================================

// Spread operator
// const arr = [7, 8, 9];
// // unpacks the 'arr' and writes it out in the 'newArr'
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // adding new item to the 'restaurant.mainMenu' array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copying array (shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 or more arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets NOT objects
// const str = 'david';
// const letters = [...str, ' ', 'd'];
// console.log(letters);
// // will log the elements individually
// console.log(...str);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1"),
// //   prompt("Let's make pasta! Ingredient 2"),
// //   prompt("Let's make pasta! Ingredient 3"),
// // ];
// // console.log(ingredients);
// // // will be the same as logging 'restaurant.orderPasta('mushroom', 'chicken', 'cheese')'
// // restaurant.orderPasta(...ingredients);

// // spread operator on Objects
// // making a new object from an old object
// const newRestaurant = { foundedIn: 1995, ...restaurant, founder: 'Mario' };
// console.log(newRestaurant);

// // object shallow copy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// =====================================================================================================

// does not have to match the order as the function parameters
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });
// // Destructuring objects to extract variables we need to use the excat property names from the object we want
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // setting new variable names to the destructured object the colored names are the new variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // setting default values if it dosn't exist
// // in this case '{}' are the default values since 'menu' does not exist
// const { menu = {}, starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   // renaming variables in the nested object
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ==========================================================================================================

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // shorter way of declaring 3 variables 'destructuring'
// const [x, y, z] = arr;
// console.log(x, y, z);

// // getting specific variables from an array
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // swapping variables

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // recieve 2 return values from a function
// const [starter, entree] = restaurant.order(2, 0);
// console.log(starter, entree);

// const nested = [2, 4, [5, 6]];
// // const [two, , nestArr] = nested;
// // console.log(two, nestArr);

// // destructuring in a nested array
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values 'r' will equal 1
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
