let rlSync = require("readline-sync");
const MESSAGES = require("./calc_messages.json");
const LANGUAGE = "en";
/* Greet the user
Ask the user their name
ask the user for a first number
ask the user for a second number
ask the user what operation to perform 
perform the operation on the two numbers
print the result to the terminal. */

function messages(message, LANGUAGE) {
  return MESSAGES[LANGUAGE][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN();
}

prompt("welcome");

while (true) {
  let num1 = rlSync.question("Enter a operand.\n");

  while (invalidNumber(num1)) {
    prompt("Hmm... that doesn/'t look like a valid number.");
    let num1 = rlSync.question("Enter a operand.\n");
  }

  let num2 = rlSync.question("Enter another operand. \n");

  while (invalidNumber(num2)) {
    prompt("Hmm... that doesn/'t look like a valid number.");
    let num1 = rlSync.question("Enter a operand.\n");
  }

  let operator = rlSync.question(MESSAGES["operatorQuestion"]);

  while (!["1", "2", "3", "4"].includes(operator)) {
    prompt(MESSAGES["1234"]);
  }

  let output;

  switch (operator) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }

  console.log(`The result is ${output}.`);

  let reset = rlSync.question(
    "Would you like to start a new operation? Please enter yes or no \n"
  );

  if (reset.toLowerCase() !== "yes") break;
}
