const buttons = document.querySelectorAll('.choices button');
const playerChoiceDisplay = document.querySelector('.playerChoice');
const computerChoiceDisplay = document.querySelector('.computerChoice');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const results = document.querySelector('.results');
const restart = document.querySelector('.restart');



function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor((Math.random() * 3) + 1) - 1];
}

function playRound(player, computer) {
    const choices = {"rock":"💎", "paper":"📃​", "scissors":"✂️"};
    computerChoiceDisplay.textContent = choices[computer];
    playerChoiceDisplay.textContent = choices[player];

    // tie = 0; computer = 1; player = 2
    if (player == computer) return [0, `Tie! Both picked ${player}`];

    else if (player == "rock" && computer == "paper") return [1, "You Lose! Paper beats Rock"];
    else if (player == "rock" && computer == "scissors") return [2, "You Win! Rock beats Scissors"];
    
    else if (player == "paper" && computer == "rock") return [2, "You Win! Paper beats Rock"];
    else if (player == "paper" && computer == "scissors") return [1, "You Lose! Scissors beats Paper"];
    
    else if (player == "scissors" && computer == "rock") return [1, "You Lose! Rock beats Scissors"];
    else if (player == "scissors" && computer == "paper") return [2, "You Win! Scissors beats Paper"];

    else return [0, "Invalid Input!"];
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function startGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    
    computerChoiceDisplay.textContent = "-";
    playerChoiceDisplay.textContent = "-";
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    results.textContent = "";
}

function game() {
    if (rounds < 5) {
        const playerChoice = this.name;
        const result = playRound(playerChoice, computerPlay());
        if (result[0] == 1) {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
        else if (result[0] == 2) {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        }
        
        if (result[0] != 0) rounds++;
    }
    if (rounds == 5) {
        if (playerScore > computerScore) results.textContent = `You won the game!\nScore: ${playerScore}:${computerScore}`;
        else if (computerScore > playerScore) results.textContent = `You lost the game!\nScore: ${playerScore}:${computerScore}`;
        else results.textContent = `The game was a tie!\nScore: ${playerScore}:${computerScore}`;
    }
}

startGame();

buttons.forEach(button => button.addEventListener('click', game));
restart.addEventListener('click', startGame);