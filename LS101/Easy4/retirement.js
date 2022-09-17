let rlSync = require("readline-sync")
/* What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

let date = 2022

function retirement () {
let age = rlSync.question('How old are you?\n');
let retireAge = rlSync.question('At what age would you like to retire? \n');

let numberedAge = Number(age);
let numberedRetireAge = Number(retireAge);
let yearsToGo = numberedRetireAge - numberedAge;
let retirementDate = date + yearsToGo;

console.log(`You will retire in ${yearsToGo} years and the year will be ${retirementDate}`)

}

retirement()