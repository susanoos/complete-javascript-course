// Importing module 'as' is used to change the name of the thing we are importing.
/*
import {
  addProduct,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';
addProduct('sneakers', 2);
console.log(price, totalQuantity);

console.log(`Importing module`);

// importing all from the module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addProduct('sneakers', 2);

import add from './shoppingCart.js';
add('sneakers', 2);
// add('shirts', 2);
// add('socks', 3);

// ES2022 top level await meaning it works outside of an async function.
// but blocks the module from executing.
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
// without using top level await
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// with top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
