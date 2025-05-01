const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const subText = document.getElementById("sub-text");
const resultText = document.getElementById("result-text");

const rulesBtn = document.getElementById("rules_btn");
const rulesModal = document.getElementById("rules_modal");
const closeBtn = document.getElementById("close_btn");

const gameDiagram = document.getElementById("game-diagram");
const gameResult = document.getElementById("game-results");
const playAgain = document.getElementById("play-again");
const gameRestart = document.getElementById("game-restart");
const nextBtn = document.getElementById("next-btn");

const winnerScreen =
  document.getElementById("winner-screen");
const gameHeader = document.getElementById("game-header");

const playerScoreDisplay =
  document.getElementById("player-score");
const computerScoreDisplay = document.getElementById(
  "computer-score"
);
const playerChoiceDisplay =
  document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById(
  "computer-choice"
);

let playerScore = 0;
let computerScore = 0;

const handleRestart = () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  gameHeader.style.display = "flex";
  winnerScreen.style.display = "none";
  gameDiagram.style.display = "flex";
  gameResult.style.display = "none";

  playerChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  resultText.innerHTML = "";
  subText.style.display = "block";
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    subText.style.display = "none";
    return "Tie Up";
  }

  const winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (winConditions[playerChoice] === computerChoice) {
    playerScore++;
    return "You win";
  } else {
    computerScore++;
    return "You Lost";
  }
};

const handlePlayAgain = () => {
  gameDiagram.style.display = "flex";
  gameResult.style.display = "none";
  nextBtn.style.display = "none";
};

const handleNext = () => {
  gameHeader.style.display = "none";
  gameResult.style.display = "none";
  winnerScreen.style.display = "flex";
  nextBtn.style.display = "none";
};

const renderChoice = (choice, target) => {
  target.innerHTML = `
    <div id="${choice}" class="choice-circle ${choice}">
      <img src="../images/${choice}.png" />
    </div>
  `;
};

const handleClick = (event) => {
  const options = ["rock", "paper", "scissors"];
  const playerChoice = event.currentTarget.id;
  const computerChoice =
    options[Math.floor(Math.random() * 3)];

  const result = determineWinner(
    playerChoice,
    computerChoice
  );
  resultText.innerHTML = result;

  gameDiagram.style.display = "none";
  gameResult.style.display = "flex";

  renderChoice(playerChoice, playerChoiceDisplay);
  renderChoice(computerChoice, computerChoiceDisplay);

  const playerCircle = playerChoiceDisplay.querySelector(
    ".choice-circle"
  );
  const computerCircle =
    computerChoiceDisplay.querySelector(".choice-circle");

  playerCircle.classList.remove("glow");
  computerCircle.classList.remove("glow");

  if (result === "You win") {
    playerCircle.classList.add("glow");
    nextBtn.style.display = "block";
  } else if (result === "You Lost") {
    computerCircle.classList.add("glow");
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};

rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);
gameRestart.addEventListener("click", handleRestart);
playAgain.addEventListener("click", handlePlayAgain);
nextBtn.addEventListener("click", handleNext);

rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
