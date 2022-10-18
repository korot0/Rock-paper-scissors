let playerPoints = 0;
let computerPoints = 0;
const choice = ['rock', 'paper', 'scissors'];

// Takes the current string(this) and capitalizes the first letter by adding '.capitalizeFirstLetter' to the string. e.g. computerSelection.capitalizeFirstLetter()
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//getComputerChoice() returns a random value from the choice array
function getComputerChoice() {
    const computer = Math.floor(Math.random() * choice.length);
    return choice[computer];
}

//playRound() prints if you win or lost depending on the choice you made at the prompt window
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('It\'s a tie!');
    } else if ( 
        (playerSelection === 'rock' && computerSelection === 'paper') 
        || 
        (playerSelection === 'paper' && computerSelection === 'scissors') 
        || 
        (playerSelection === 'scissors' && computerSelection === 'rock') 
        ) {
        computerPoints++;
        return (`You Lose! ${computerSelection.capitalizeFirstLetter()} beats ${playerSelection.capitalizeFirstLetter()}`);
    } else {
        playerPoints++;
        return (`You Win! ${playerSelection.capitalizeFirstLetter()} beats ${computerSelection.capitalizeFirstLetter()}`);
    }
}

function checkPlayerChoice() {
    let answer = false;
    while (answer == false) {
        const playerChoice = prompt('Rock, Paper, or Scissors?');
        if (playerChoice == null) {
            continue;
        }
        const playerChoiceInLower = playerChoice.toLowerCase();
        if (choice.includes(playerChoiceInLower)) {
            answer = true;
            return playerChoiceInLower;
        }
    }
}

//game() plays 5 rounds and announces the winner or looser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = checkPlayerChoice();
        console.log('Player selection: ' + playerSelection.capitalizeFirstLetter());

        computerSelection = getComputerChoice();
        console.log('Computer selection: ' + computerSelection.capitalizeFirstLetter());
        
        console.log(playRound(playerSelection, computerSelection));

        console.log('Player points: ' + playerPoints);
        console.log('Computer points: ' + computerPoints);

        console.log('');
    }
    
    if (playerPoints > computerPoints) {
        return ('~YOU WON!~');
    } else if (computerPoints > playerPoints) {
        return ('~COMPUTER WON!~');
    } else {
        return ('~IT\'S A TIE!~');
    }
}

console.log(game());