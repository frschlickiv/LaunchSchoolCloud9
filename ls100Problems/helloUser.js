let rlSync = require('readline-sync')

let name = rlSync.question('What is your name? ');
let adjust = name.replace('!', '').toUpperCase();



if(name.includes("!")){
    console.log (`HELLO ${adjust}. WHY ARE YOU SCREAMING?`)
} else {
   console.log (`Hello ${name}.`) 
}



