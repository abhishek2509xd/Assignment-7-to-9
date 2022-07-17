const prompt = require("prompt-sync")();
const fs = require("fs");

exports.remove_product = (id) => {
  let cart = JSON.parse(fs.readFileSync("cart.json"));
  cart = cart.filter((cart) => cart.id != id);
  fs.writeFile("cart.json", JSON.stringify(cart), (err) => {
    if (err) console.log(`Unknown Error Occurred!`);
    else console.log(`Product with ${id} has been removed!!`);
  });
};
