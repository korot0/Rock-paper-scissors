let humanPoints = 0;
let computerPoints = 0;
const humanPointsEl = document.getElementById('human');
const computerPointsEl = document.getElementById('computer');

const humanChoiceEl = document.getElementById('human-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultLogEl = document.getElementById('result-log');

const winnerEL = document.getElementById('winner');

//getComputerChoice() returns a random value from the choice array and stores the selection in computerSelection
const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const computer = Math.floor(Math.random() * choice.length);
    return choice[computer];
}

//Get human choice
const humanChoice = document.querySelectorAll('.button');

humanChoice.forEach((selection) => {
    selection.addEventListener('click', e => {
        humanSelection = e.target.id;
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        humanChoiceEl.textContent = 'You chose: ' + humanSelection;
        computerChoiceEl.textContent = 'Computer chose: ' + computerSelection;
    });
});

//plays a round
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return resultLogEl.textContent = 'It\'s a tie!';
    } else if ( 
        (humanSelection === 'Rock' && computerSelection === 'Paper') 
        || 
        (humanSelection === 'Paper' && computerSelection === 'Scissors') 
        || 
        (humanSelection === 'Scissors' && computerSelection === 'Rock') 
        ) {
        computerPoints++;
        computerPointsEl.textContent = 'Computer: ' + computerPoints;
        resultLogEl.textContent = `You Lose! ${computerSelection} beats ${humanSelection}`;
    } else {
        humanPoints++;
        humanPointsEl.textContent = 'Human: ' + humanPoints;
        resultLogEl.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
    }
    return getWinner();
}

//
function getWinner () {
    if (computerPoints === 5) {
        winnerEL.textContent = 'COMPUTER WINS!';
        return stopGame();
    } else if (humanPoints === 5) {
        winnerEL.textContent = 'HUMAN WINS!';
        return stopGame();
    }
}

//Disable buttons and removes log
function stopGame() {
    resultLogEl.remove();
    humanChoice.forEach(button => {
        button.disabled = true;
    });
}

function newGame() {

}
