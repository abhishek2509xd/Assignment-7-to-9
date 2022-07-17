const prompt = require('prompt-sync')();
const fs = require("fs");

function product(id, name, quantity, price) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

exports.add_product = () => {
  const pid = Number(prompt("Enter the number of products you wish to add:"));
  let cart = [];
  for (let i = 0; i < pid; i++) {
    const id = prompt("Enter product id:");
    const name = prompt("Enter product name:");
    const quantity = Number(prompt("Enter product quantity:"));
    const price = Number(prompt("Enter product price:"));

    const cartproduct = new product(id, name, quantity, price);
    cart = [...cart, cartproduct];
  }
  fs.writeFileSync("cart.json", JSON.stringify(cart), (err) => {
    if (err) console.log(`Error Occurred!`);
    else console.log(`Product with ${id} added to the cart successfully!`);
  });
};
