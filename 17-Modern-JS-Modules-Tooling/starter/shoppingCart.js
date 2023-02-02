// Exporting module
console.log(`Exporting module`);

// Blocking code
console.log('Start fetching data');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching data');

const shippingCost = 10;
const cart = [];

// allows us to use in another module
export const addProduct = (product, quanity) => {
  cart.push({
    product,
    quanity,
  });
  console.log(`${quanity}: ${product} added to cart`);
};

const totalPrice = 200;
const totalQuantity = 24;

// exporting multiple things
export { totalPrice, totalQuantity };

// default export when exporting one thing per module takes a value not variable
export default function (product, quanity) {
  cart.push({
    product,
    quanity,
  });
  console.log(`${quanity}: ${product} added to cart`);
}
