// A Game of Rock Paper Scissors

let playerWins = 0;
let computerWins = 0;

//Create a function that randomly selects between rock, paper, and scissors
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//Create a function that returns winner of one round and adds point to player scores
function playRound(playerSelection, computerSelection) {
  console.log(`Player selects ${playerSelection.toUpperCase()}.`);
  console.log(`Computer selects ${computerSelection.toUpperCase()}.`);

  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerWins++;
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
    return `${playerSelection} beats ${computerSelection}. You win!!!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "paper")
  ) {
    return "Draw";
  } else {
    return "Invalid input. Try Again.";
  }
}

//Create a function that returns winner and final score after completion of all rounds
 function finalScore() {
     if (playerWins > computerWins) {
         console.log(`You beat the computer ${playerWins} to ${computerWins}. Good work!`);
     } else if (playerWins < computerWins) {
        console.log(`The computer won ${computerWins} to ${playerWins}. Better luck next time!`);
     } else{
        console.log(`It's a tie! Player Score:${playerWins} | Computer Score:${computerWins}`);
     }
 }

//Create a function that loops through multiple rounds of game and returns score after each round
function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = computerPlay()
    let outcome = playRound(playerSelection, computerSelection);
    console.log(outcome);
    let score = `Player Score:${playerWins}\nComputer Score:${computerWins}`;
    console.log(score);

    if (outcome === "Invalid input. Try Again.") {
        i--;
    }
  }

  finalScore();

}

game(5);
