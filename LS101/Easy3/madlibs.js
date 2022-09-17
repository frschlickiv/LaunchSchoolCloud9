let rlSync = require("readline-sync");

let noun = rlSync.question("Enter a noun\n");
let verb = rlSync.question("Enter a verb\n");
let adj = rlSync.question("Enter an adjective\n");
let adverb = rlSync.question("Enter an adverb\n");


console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`)
console.log(`The ${adj} ${noun} ${verb} ${adverb} over the lazy ${noun}.`)
console.log(`The ${noun} quickly ${verb} up blue Joe's turtle.`)