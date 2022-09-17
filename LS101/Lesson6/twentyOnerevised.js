/*
1. Initialize deck
    - Create a deck with a loop
    -shuffle the deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/



let readline = require("readline-sync");
//declare the two arrays to loop through to initialize the deck
const SUITS = ['H', 'D', 'S', 'C']
const VALS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


//replaces console.log 
function prompt(msg){
    console.log(`=> ${msg}`)
}




//shuffle the deck by swapping an element with a random element then returning the scrambled array
function shuffle (array) {
    for (let first = array.length - 1; first > 0; first--) {
        let second = Math.floor(Math.random() * (first + 1)) // this will give the random index for swapping
        [array[first], array[second]] = [array[second], array[first]] // array destructuring for the swap
    }
    
    return array
}



//create the deck with a nested loop to output an array comprised of small arrays that represent a card ['A', '3']
function initializeDeck() {
    let deck = []
    
    for(let suitInd = 0; suitInd < SUITS.length; suitInd++) {
        let suit = SUITS[suitInd];
        
        for (let valsInd = 0; valsInd < VALS.length; valsInd++) {
            let vals = VALS[valsInd];
            
            deck.push([suit, vals])
        }
    }
    
    return shuffle(deck)
}


function total (cards) {
    //takes in the player hand and returns a total for the hand also has built in Ace logic as to not automatically bust 
    
    let handValues = cards.map(card => {
        return card[1]
    })
    
    let sum = 0 //total sum
    let aces = 0 // number of aces in the hand
    
    handValues.forEach(num => {
        if(num === 'A') {
            sum += 11;
            aces ++
        } else if (['J', 'Q', 'K'].includes(num)){
            sum += 10;
        } else {
            sum += parseInt(num)
        }
    })
    
    for (let i = 0; i < aces; i++) { //if the value is over 21 and there is an Ace(s) in the hand it will change the aces value to 1 instead of 11
    if (sum > 21) {
      sum -= 10;
    }
  }
  return sum;
}


