let readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X'
const COMPUTER_MARKER = 'O'
function displayBoard(board) {
    console.clear();
    
    console.log(`You are ${HUMAN_MARKER} the computer is ${COMPUTER_MARKER}`)
    console.log('First to FIVE is the Winner')
    
console.log('');
console.log('     |     |');
console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
console.log('     |     |     ');
console.log('');
}

//initializeBoard => 
function initializeBoard () {
    // ***** This is THE BOARD ***** Without him, this game is nothing.****
    let board = {};
    
    for(let square = 1; square <= 9; square += 1) {
        board[String(square)] = INITIAL_MARKER;
    }
    return board
}

//prompt => 
function prompt(msg) {
    console.log(`=>${msg}`)
}

//joinor is a better version of .join()
function joinOr (arr, delimiter = ', ', word = 'or') {
  
  switch (arr.length) {
  
  case 0:
    return ''
  case 1: 
    return `${arr[0]}`
  case 2: 
    return `${arr[0]} or ${arr[1]}`
  default: 
    return arr.slice(0, arr.length-1).join(delimiter) + `${delimiter}${word} ${arr[arr.length-1]}`
  
 }
}


//emptySquares => keeps track of the empty squares to display on the board.
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER)
}


function boardFull(board) {
    return emptySquares(board).length === 0 
}


function someoneWon(board) {
    return false;
}

//playerChoosesSquare =>  the player's choice functionality. Enter a number and if it hasn't been used before it will enter your choice to the cooresponding board square.
function playerChoosesSquare(board) {
    let square;
    
   
     //
    while (true) {
    prompt(`Choose a Square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
      
        prompt("That's not a valid choice.")
    
    }
    board[square] = HUMAN_MARKER;
}



// computerChoosesSquare => The computer generates a random number between 1-9. I
function computerChoosesSquare(board) {

let randomIndex = Math.floor(Math.random() * emptySquares(board).length)
let square = emptySquares(board)[randomIndex]

board[square] = COMPUTER_MARKER;
}




function someoneWon(board) {
    return !!detectWinner(board);
};



function detectWinner(board) {
    let winningLines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
    [1, 4, 7,], [2, 5, 8], [3, 6, 9,], //columns
    [1, 5, 9], [3, 5, 7] //diagonals
    ];
    
    for (let line = 0; line < winningLines.length; line++) {
        let [ sq1, sq2, sq3 ] = winningLines[line];
        
        if (
            board[sq1] === HUMAN_MARKER &&
            board[sq2] === HUMAN_MARKER &&
            board[sq3] === HUMAN_MARKER 
            ) {
                return 'Human'
            } else if (
            board[sq1] === COMPUTER_MARKER &&
            board[sq2] === COMPUTER_MARKER &&
            board[sq3] === COMPUTER_MARKER  
            ) {
                 return 'Computer'
                }
            }
          return null; 
 };


//The running game
while (true) {

//looping the match
while(true) {

let playerWin = 0
let computerWin = 0



let board = initializeBoard()
displayBoard(board)
//looping the game
while(true) {
  displayBoard(board)
  playerChoosesSquare(board)
  
  if (someoneWon(board) || boardFull(board)) break;
  
  computerChoosesSquare(board)
  displayBoard(board)
  
      
  if (someoneWon(board) || boardFull(board)) break; 
     
  }
  
  displayBoard(board)
  
  if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`)
      
      if(detectWinner(board) === 'Human') {
          playerWin++
          
          prompt(`You:${playerWin} Computer:${computerWin}`)
      } else if (detectWinner(board) === 'Computer') {
          computerWin++
      }
      
  } else {
      prompt("It's a tie!");
  }

if (playerWin === 5) {
    prompt('You have won the match!')
    break;
} else if (computerWin === 5) {
    prompt('The computer has won the match!')
    break;
}
    
}

prompt ('Would you like to play again? y/n');
let answer = readline.question().toLowerCase()[0];
if (answer !== 'y') 
}
prompt('Thanks for playing Tic Tac Toe!');