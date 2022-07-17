const prompt = require("prompt-sync")();
const fs = require("fs");

exports.show_products = () => {
  let cart = JSON.parse(fs.readFileSync("cart.json"));
  console.log(`Products available in the cart:`);
  console.log(`ID       Name   Quantity`);

  var s = 0;
  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i].id}\t${cart[i].name}\t${cart[i].quantity}\n`);
    for (let j = 0; j < cart[i].quantity; j++) {
      s += cart[i].price;
    }
  }
  console.log(`Total price of products in the cart is ${s}`);
};
