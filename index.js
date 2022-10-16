const computerSelection = getComputerChoice();
const playerSelection = prompt('Your selection?');

//getComputerChoice() returns a random value from the array with the 3 choices of this game
function getComputerChoice() {

    let choice = ['Rock', 'Paper', 'Scissors'];

    let computer = Math.floor(Math.random() * choice.length);
    return choice[computer];

}

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//playRound() prints if you win or lost depending on the choice you made at the prompt window
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        return('It\'s a tie!');

    } else if ( 

        (playerSelection === 'Rock' && computerSelection === 'Paper') 
        || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') 
        || 
        (playerSelection === 'Scissors' && computerSelection === 'Rock') 

        ) {

        return(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else {
    
        return(`You Win! ${playerSelection} beats ${computerSelection}`);

    }
}

//game() ...
function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}

console.log(game())

console.log('Player selection: ' + playerSelection);
console.log('Computer selection: ' + computerSelection);
// console.log(playRound(playerSelection, computerSelection));