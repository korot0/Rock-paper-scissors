let playerPoints = 0;
let computerPoints = 0;

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
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    });
});

//
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


//Gets player choice and loops until correct input is received
// function checkPlayerChoice() {
//     let answer = false;
//     while (answer == false) {
//         const playerChoice = prompt('Rock, Paper, or Scissors?');
//         if (playerChoice == null) {
//             continue;
//         }
//         const playerChoiceInLower = playerChoice.toLowerCase();
//         if (choice.includes(playerChoiceInLower)) {
//             answer = true;
//             return playerChoiceInLower;
//         }
//     }
// }

//game() plays 5 rounds and announces the winner or looser at the end
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playerSelection = checkPlayerChoice();
//         console.log('Player selection: ' + playerSelection.capitalizeFirstLetter());

//         computerSelection = getComputerChoice();
//         console.log('Computer selection: ' + computerSelection.capitalizeFirstLetter());
        
//         console.log(playRound(playerSelection, computerSelection));

//         console.log('Player points: ' + playerPoints);
//         console.log('Computer points: ' + computerPoints);

//         console.log('');
//     }
    
//     if (playerPoints > computerPoints) {
//         return ('~YOU WON!~');
//     } else if (computerPoints > playerPoints) {
//         return ('~COMPUTER WON!~');
//     } else {
//         return ('~IT\'S A TIE!~');
//     }
// }

// console.log(game());