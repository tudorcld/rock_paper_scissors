// getting all the choices
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const botChoice = document.getElementById("botChoice");
const result = document.getElementById("result");
const computerImg = document.getElementById("computerimg");
var humanChoice = "asd";
var botscore = 0;
var humanscore = 0;
let isAnimating = false;
const choices = ["rock", "paper", "scissors"];

// getting the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  console.log(choices[randomIndex]);
  return choices[randomIndex];
}

// getting the human choices
rock.addEventListener("click", () => {
  humanChoice = "rock";
  console.log(humanChoice);
  getComputerChoice();
  playRound();
});

paper.addEventListener("click", () => {
  humanChoice = "paper";
  console.log(humanChoice);
  getComputerChoice();
  playRound();
});

scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  console.log(humanChoice);
  getComputerChoice();
  playRound();
});
function addScore() {
  document.getElementById("humanscore").textContent = humanscore;
  document.getElementById("botscore").textContent = botscore;
}

// Animation function for bot choice
function animateBotChoice(finalChoice, callback) {
  isAnimating = true;
  let counter = 0;

  // Animation interval - cycle through choices
  const animationInterval = setInterval(() => {
    computerImg.src = `${choices[counter % 3]}.svg`;
    counter++;

    // Stop after 10 cycles (1 second)
    if (counter > 10) {
      clearInterval(animationInterval);
      computerImg.src = `${finalChoice}.svg`;
      isAnimating = false;

      // Execute callback after animation completes
      if (callback) callback();
    }
  }, 100);
}

// determining who wins
function playRound() {
  if (isAnimating) return;

  const computerChoice = getComputerChoice();

  // Start animation
  animateBotChoice(computerChoice, () => {
    // This callback executes after animation completes
    if (humanChoice === computerChoice) {
      result.textContent = "Draw";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      result.textContent = "Human wins.";
      humanscore++;
    } else {
      result.textContent = "Computer wins.";
      botscore++;
    }

    addScore();
  });
}
