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

const heandleRestart = () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.innerHTML = `${playerScore}`;
  computerScoreDisplay.innerHTML = `${computerScore}`;

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

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      playerScore++;
      return "You win";
    } else {
      computerScore++;
      return "You Lost";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      playerScore++;
      return "You win";
    } else {
      computerScore++;
      return "You Lost";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerScore++;
      return "You win";
    } else {
      computerScore++;
      return "You Lost";
    }
  }
};

const handelPlayAgain = () => {
  gameDiagram.style.display = "flex";
  gameResult.style.display = "none";
  nextBtn.style.display = "none";
};

const handelNext = () => {
  gameHeader.style.display = "none";
  gameResult.style.display = "none";
  winnerScreen.style.display = "flex";
  nextBtn.style.display = "none";
};

const handelClick = (event) => {
  const randomNo = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  const playerChoice = event.currentTarget.id;
  const computerChoice = options[randomNo];

  const result = determineWinner(
    playerChoice,
    computerChoice
  );
  resultText.innerHTML = `${result}`;

  gameDiagram.style.display = "none";
  gameResult.style.display = "flex";

  if (playerChoice === "rock") {
    playerChoiceDisplay.innerHTML = `<div id="rock" class="choice-circle rock"><img src="../images/rock.png" /></div>`;
  } else if (playerChoice === "paper") {
    playerChoiceDisplay.innerHTML = `<div id="paper" class="choice-circle paper"><img src="../images/paper.png" /></div>`;
  } else if (playerChoice === "scissors") {
    playerChoiceDisplay.innerHTML = `<div id="scissors" class="choice-circle scissors"><img src="../images/scissors.png" /></div>`;
  }

  if (computerChoice === "rock") {
    computerChoiceDisplay.innerHTML = `<div id="rock" class="choice-circle rock"><img src="../images/rock.png" /></div>`;
  } else if (computerChoice === "paper") {
    computerChoiceDisplay.innerHTML = `<div id="paper" class="choice-circle paper"><img src="../images/paper.png" /></div>`;
  } else if (computerChoice === "scissors") {
    computerChoiceDisplay.innerHTML = `<div id="scissors" class="choice-circle scissors"><img src="../images/scissors.png" /></div>`;
  }

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

  playerScoreDisplay.innerHTML = `${playerScore}`;
  computerScoreDisplay.innerHTML = `${computerScore}`;
};

rock.addEventListener("click", handelClick);
paper.addEventListener("click", handelClick);
scissors.addEventListener("click", handelClick);
gameRestart.addEventListener("click", heandleRestart);
playAgain.addEventListener("click", handelPlayAgain);
nextBtn.addEventListener("click", handelNext);

rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
