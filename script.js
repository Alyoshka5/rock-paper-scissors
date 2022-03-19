
function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor((Math.random() * 3) + 1) - 1];
}

for (var i = 0; i < 10; i++) {console.log(computerPlay())}