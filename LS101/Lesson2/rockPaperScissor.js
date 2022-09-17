const rlSync = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'rock'];
function prompt(message) {
  console.log(`=> ${message}`);
}
let play = "";

function computerPlay() {
  let playNum = Math.floor(Math.random() * 3);

  switch (playNum) {
    case 1:
      play = "rock";
      break;
    case 2:
      play = "paper";
      break;
    case 3:
      play = "scissors";
      break;
  }
  console.log(`The computer played ${play}.`);
}

while (true) {
  
 // code omitted

prompt('Choose one: rock, paper, scissors');
let you = rlSync.question();

while (!VALID_CHOICES.includes(you)) {
  prompt("That's not a valid choice");
  you = rlSync.question();
}
  console.log(`You played ${you}`);

  computerPlay();

  if (you === play) {
    console.log("Draw");
  } else if (you === "rock" && play === "paper") {
    console.log("You Lose");
  } else if (you === "rock" && play === "scissors") {
    console.log("You Win");
  } else if (you === "paper" && play === "scissors") {
    console.log("You Lose");
  } else if (you === "paper" && play === "rock") {
    console.log("You Win");
  } else if (you === "scissors" && play === "rock") {
    console.log("You Lose");
  } else if (you === "scissors" && play === "paper") {
    console.log("You win");
  }

  prompt("play again?");
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === "n") break;
}
