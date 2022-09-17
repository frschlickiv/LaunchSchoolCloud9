let rlSync = require("readline-sync");

function squared (num) {
    num = rlSync.question('Enter a number to square. \n')
    return num * num
}

console.log(squared())