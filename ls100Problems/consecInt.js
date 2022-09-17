function computeSum(targetNum) {
    let total = 0;
    
    for (let num = 1; num <= targetNum; num++) {
        total += num;
    }
    
    return total;
}

function computeProduct(targetNum) {
    let total = 1;
    
    for (let num = 1; num <= targetNum; num++) {
        total *= num;
    }
    return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0")
//parseInt requires a second parameter (radix) this is not set to 10 by default!
let number = parseInt(readlineSync.prompt(), 10)

console.log(`Enter 's' to compute the sum, enter 'p' to compute the product`);
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}