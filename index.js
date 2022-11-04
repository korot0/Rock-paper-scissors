let playerPoints = 0;
let computerPoints = 0;
let playerPointsEl = document.getElementById('human');
let computerPointsEl = document.getElementById('computer');

let resultLogEl = document.getElementById('result-log');
let humanChoice = document.getElementById('human-choice');
let computerChoice = document.getElementById('computer-choice');


// Takes the current string(this) and capitalizes the first letter by adding '.capitalizeFirstLetter' to the string. e.g. computerSelection.capitalizeFirstLetter()
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//getComputerChoice() returns a random value from the choice array and stores the selection in computerSelection
const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computer = Math.floor(Math.random() * choice.length);
    return choice[computer];
}

//player choice
const playerChoice = document.querySelectorAll('button');

playerChoice.forEach((selection) => {
    selection.addEventListener('click', e => {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        humanChoice.textContent = 'Player selection: ' + playerSelection.capitalizeFirstLetter();
        computerChoice.textContent = 'Computer selection: ' + computerSelection.capitalizeFirstLetter();
    });
});

//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return resultLogEl.textContent = 'It\'s a tie!';
    } else if ( 
        (playerSelection === 'rock' && computerSelection === 'paper') 
        || 
        (playerSelection === 'paper' && computerSelection === 'scissors') 
        || 
        (playerSelection === 'scissors' && computerSelection === 'rock') 
        ) {
        computerPoints++;
        computerPointsEl.textContent = 'Computer: ' + computerPoints;
        return resultLogEl.textContent = `You Lose! ${computerSelection.capitalizeFirstLetter()} beats ${playerSelection.capitalizeFirstLetter()}`
    } else {
        playerPoints++;
        playerPointsEl.textContent = 'Human: ' + playerPoints;
        return resultLogEl.textContent = `You Win! ${playerSelection.capitalizeFirstLetter()} beats ${computerSelection.capitalizeFirstLetter()}`;
    }
}

//
function getWinner () {
    if (computerPoints === 5) {
        console.log('Computer Wins!');
    } else if (playerPoints === 5) {
        console.log('Player Wins!');
    }
}

console.log(computerPoints);
console.log(playerPoints);


console.log(getWinner());