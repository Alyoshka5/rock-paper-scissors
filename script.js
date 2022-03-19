
function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor((Math.random() * 3) + 1) - 1];
}

function playRound(player, computer) {
    // tie = 0; computer = 1; player = 2
    if (player == "rock" && computer == "paper") return [1, "You Lose! Paper beats Rock"];
    else if (player == "rock" && computer == "scissors") return [2, "You Win! Rock beats Scissors"];
    
    else if (player == "paper" && computer == "rock") return [2, "You Win! Paper beats Rock"];
    else if (player == "paper" && computer == "scissors") return [1, "You Lose! Scissors beats Paper"];
    
    else if (player == "scissors" && computer == "rock") return [2, "You Lose! Rock beats Scissors"];
    else if (player == "scissors" && computer == "paper") return [1, "You Win! Scissors beats Paper"];

    else return [0, `Tie! Both picked ${player}`];
}
