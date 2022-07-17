const prompt = require("prompt-sync")();
const fs = require("fs");

function product(id, name, quantity, price) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

exports.update_product = (id) => {
  let cart = JSON.parse(fs.readFileSync("cart.json"));
  cart = cart.filter((product) => product.id != id);
  const name = prompt(`Enter product name:`);
  const quantity = prompt(`Enter product quantity:`);
  const price = prompt(`Enter product price:`);
  const cartObj = new product(id, name, quantity, price);
  cart = [...cart, cartObj];
  fs.writeFileSync("cart.json", JSON.stringify(cart), (err) => {
    if (err) console.log(`Something Went Wrong!`);
    else console.log(`Product with ${id} Updated Successfully!`);
  });
};
