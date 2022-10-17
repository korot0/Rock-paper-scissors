// ------------- TO DO -------------
    //write a function that checks for wrong spelling/words

    //Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

let playerPoints = 0;
let computerPoints = 0;

//getComputerChoice() returns a random value from the array
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];

    let computer = Math.floor(Math.random() * choice.length);
    return choice[computer];
}

//playRound() prints if you win or lost depending on the choice you made at the prompt window
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return('It\'s a tie!');
    } else if ( 
        (playerSelection === 'rock' && computerSelection === 'paper') 
        || 
        (playerSelection === 'paper' && computerSelection === 'scissors') 
        || 
        (playerSelection === 'scissors' && computerSelection === 'rock') 
        ) {
        computerPoints++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        playerPoints++;
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

//game() plays 5 rounds and announces the winner or looser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper, or Scissors?');
            if (playerSelection === null) {
            return ('Game canceled! Please refresh page to play again!');
            } else  if (playerSelection === '') {
                i--;
                playerPoints--;
                alert ('You entered an invalid selection, please try again.')
            }
        console.log('Player selection: ' + playerSelection);

        computerSelection = getComputerChoice();
        console.log('Computer selection: ' + computerSelection);
        
        console.log(playRound(playerSelection, computerSelection));

        console.log('Player points: ' + playerPoints);
        console.log('Computer points: ' + computerPoints);

        console.log('');
    }
    
    if (playerPoints > computerPoints) {
        return('~YOU WON!~');
    } else if (computerPoints > playerPoints) {
        return('~COMPUTER WON!~');
    } else {
        return('~IT\'S A TIE!~');
    }
}

console.log(game());