let rlSync = require('readline-sync');
let bill = rlSync.question("How much was the bill? \n");
let tip = rlSync.question("What percentage would you like to tip? \n")
let tipTotal = bill * (tip / 100)
let total = ((tip / 100) + 1) * bill

console.log(`Your bill is ${bill} with a tip of (${tip} percent) your tip is $${tipTotal} dollars, with a total of $${total} dollars.`)