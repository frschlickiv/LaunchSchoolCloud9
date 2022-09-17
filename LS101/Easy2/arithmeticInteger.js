let rlSync = require("readline-sync")


    let a = parseInt(rlSync.question('Enter an integer for a\n'), 10)
    let b = parseInt(rlSync.question('Enter an integer for b\n'), 10)
    
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a % b);
    console.log(a * b);
    console.log(a ** b);


