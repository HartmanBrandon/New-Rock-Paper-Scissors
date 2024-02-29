let arr = ["Rock", "Paper", "Scissors"];

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

// Randomly selects an item in the arr for the Computer's choice
function getComputerChoice() {
  let computerChoice = arr[Math.floor(random(1, 4)) - 1];
  return computerChoice;
}

getComputerChoice();

// Gets the players choice
function getPlayerSelection() {
  let playerSelection = prompt(
    "Choice either rock, paper, or scissors. Good luck!"
  ).toLowerCase();
  return playerSelection;
}

function playGame() {
  let playerSelection = getPlayerSelection();
  let computerChoice = getComputerChoice();

  // Might make the decision making its own function that
  if (
    (playerSelection == "rock" && computerChoice == "rock") ||
    (playerSelection == "paper" && computerChoice == "paper") ||
    (playerSelection == "scissors" && computerChoice == "scissors")
  ) {
    console.log("Oh no. You all picked the same thing. Go again");
    playGame();
  } else if (
    (playerSelection == "rock" && computerChoice == "scissors") ||
    (playerSelection == "paper" && computerChoice == "rock") ||
    (playerSelection == "scissors" && computerChoice == "paper")
  ) {
    console.log(`${playerSelection} beats ${getComputerChoice}`);
  }
}

playGame();
