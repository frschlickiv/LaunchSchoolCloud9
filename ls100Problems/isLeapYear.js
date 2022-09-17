let rlSync = require("readline-sync");

function isLeapYear (year) {
if (year <= 1752 && year % 4 === 0){
    return true;
} else if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
    return true;
}
}

console.log('Please enter a year')
let yr = parseInt(rlSync.prompt(), 10)

console.log(isLeapYear(yr));