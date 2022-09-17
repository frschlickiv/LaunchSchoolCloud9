/*
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

takes in a 
*/

let rlSync = require("readline-sync");
//using a json file named MortgageCalcMessages to store my messages
const MESSAGES = require('./mortgageCalcMessages.json');

//adjusting the prompt command
function prompt(message){
    console.log(`=> ${message}`);
}

// this function is check if our inputs are valid numbers and will keep looping until a proper input is made
function isValidNumber(num) {
    return num.trim() === '' ||
           Number(num) < 0   ||
           Number.isNaN(Number(num));
}

prompt(MESSAGES["welcome"]);
//while loop to ask if you want to make another calculation
while (true) {

// prompt + json + while loop for every input to make sure all my edge cases make sense

prompt(MESSAGES["Q_loanAmount"]);
let loanAmount = rlSync.question() ;
while (isValidNumber(loanAmount)) {
    prompt(MESSAGES["invalidNum"]);
    loanAmount = rlSync.question();
}

prompt(MESSAGES["Q_APY"]);
let yearlyInterest = rlSync.question();
while (isValidNumber(yearlyInterest)) {
    prompt(MESSAGES["invalidNum"]);
    yearlyInterest = rlSync.question();
}

// asking for the duration in months to avoid another calculation
prompt(MESSAGES["Q_duration"]);
let loanDuration = rlSync.question();
while (isValidNumber(loanDuration)) {
    prompt(MESSAGES["invalidNum"]);
    loanDuration = rlSync.question()
}
    
    let annualInterestRate = Number(yearlyInterest) / 100;
    let monthlyInterestRate = annualInterestRate / 12;
// I took this from the template this is the equation for a mortage payment 
let monthlyPayment = Number(loanAmount) * (monthlyInterestRate/
(1-Math.pow((1 + monthlyInterestRate), (-loanDuration))));
    
    //use toFixed to get a float with only 2 decimals
    prompt(`Your monthly mortgage payment is $${monthlyPayment.toFixed(2)}`);
 //to continue asking for calcuations   
      prompt("Another calculation?");
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}