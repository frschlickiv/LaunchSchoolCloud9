let readline = require("readline-sync");

function initializeDeck() {
  let nums = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let suits = ["H", "S", "C", "D"];

  let cards = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cards.push(nums[i] + suits[j]);
    }
  }

  return cards;
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledDeck = shuffle(initializeDeck());

function total(cards) {
  let sum = 0;
  let aces = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].charAt(0) === "A") {
      sum += 11;
      aces++;
    } else if (["J", "Q", "K"].includes(cards[i].charAt(0))) {
      sum += 10;
    } else if (cards[i].charAt(0) === "1") {
      sum += 10;
    } else {
      sum += parseInt(cards[i].charAt(0));
    }
  }

  for (let i = 0; i < aces; i++) {
    if (sum > 21) {
      sum -= 10;
    }
  }
  return sum;
}

function game() {
  let deck = shuffledDeck;
  let player = { hand: [], score: 0 };
  let dealer = { hand: [], score: 0 };

  for (let i = 0; i < 2; i++) {
    player.hand.push(deck.shift());
    dealer.hand.push(deck.shift());
  }

  player.score = total(player.hand);
  dealer.score = total(dealer.hand);

  function declareScore() {
    console.log(
      `Your hand is ${player.hand} and your score is ${player.score}`
    );
    console.log(`The dealers score is: ${dealer.score}`);
  }

  function hit(personDeck) {
    personDeck.hand.push(deck.shift());
    personDeck.score = total(personDeck.hand);
  }

  function askHit() {
    let hitMe = readline.question(
      `Your current hand is: ${player.hand}  and your score is: ${player.score} Would you like to hit? Enter yes or no \n`
    );

    if (hitMe === "yes") {
      hit(player);
      return true;
    } else if (hitMe === "no") {
      return false;
    } else {
      console.log("Please enter a valid input");
      hitMe = readline.question(`Would you like to hit? Enter yes or no \n`);
    }
  }

  while (player.score < 21 && askHit() === true) {
    askHit();
  }

  while (dealer.score < 17) {
    hit(dealer);
  }

  declareScore();

  if (player.score > 21 && dealer.score > 21) {
    console.log("You both BUSTED");
  } else if (player.score > 21) {
    console.log("You have busted");
  } else if (dealer.score > 21) {
    console.log("The dealer busted");
  } else if (21 - dealer.score < 21 - player.score) {
    console.log("The dealer wins");
  } else if (21 - dealer.score > 21 - player.score) {
    console.log("You Win!");
  } else if (21 - dealer.score === 21 - player.score) {
    console.log("It's a tie");
  }
}

game();
