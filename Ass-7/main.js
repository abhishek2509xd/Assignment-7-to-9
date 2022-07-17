const { add_product } = require("./add_product");
const { update_product } = require("./update_product");
const { remove_product } = require("./remove_product");
const { show_products } = require("./show_products");
const prompt = require('prompt-sync')();

const operation = prompt(`Which operation do you want to perform?`);

switch (operation) {
  case "show":
    show_products();
    break;
  case "add":
    add_product();
    break;
  case "update":
    const id = prompt("Enter the product id you want to update:");
    update_product(id);
    break;
  case "remove":
    const n = prompt("Enter the product id you want to remove:");
    remove_product(n);
    break;
  default:
    console.log("Enter the correct operation please!");
    break;
}
