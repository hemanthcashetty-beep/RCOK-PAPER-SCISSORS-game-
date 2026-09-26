let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.querySelector("#userscore");
const computerScoreDisplay = document.querySelector("#compscore");
const message = document.querySelector("#mesg");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    message.textContent = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    message.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    message.textContent = `Computer wins! ${computerChoice} beats ${userChoice}.`;
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Convert the HTML ID to lowercase so "Scissors" works too.
    const userChoice = choice.id.toLowerCase();
    playRound(userChoice);
  });
});