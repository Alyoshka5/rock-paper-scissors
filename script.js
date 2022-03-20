const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');

function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor((Math.random() * 3) + 1) - 1];
}

function playRound(player, computer) {
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

function game2() {
    if (rounds < 5) {
        rounds++;
        const playerChoice = this.name;
        const result = playRound(playerChoice, computerPlay());
        if (result[0] == 1) computerScore++;
        else if (result[0] == 2) playerScore++;
        console.log(result[1]);
    }
    if (rounds == 5) {
        if (playerScore > computerScore) results.textContent = `You won the game!\nScore: ${playerScore}:${computerScore}`;
        else if (computerScore > playerScore) results.textContent = `You lost the game!\nScore: ${playerScore}:${computerScore}`;
        else results.textContent = `The game was a tie!\nScore: ${playerScore}:${computerScore}`;
    }
}

buttons.forEach(button => button.addEventListener('click', game2));