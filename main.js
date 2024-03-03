// ROCK PAPER SCISSOR

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const result = document.getElementById("result");
const ourScore = document.getElementById("ourScore");
const csScore = document.getElementById("csScore");

// FOR SCORE CARD

// NO MATCH LABEL
let nmLabels = [];
for (let i = 1; i <= 10; i++) {
  nmLabels.push(document.getElementById(`nmLabel${i}`));
}

// PLAYER LABEL
let plabels = [];
for (let i = 1; i <= 10; i++) {
  plabels.push(document.getElementById(`pLabel${i}`));
}

// COMPUTER LABEL
let clabels = [];
for (let i = 1; i <= 10; i++) {
  clabels.push(document.getElementById(`cLabel${i}`));
}

// POINTS
let csPoint = 0;
let userPoint = 0;
let matchNumber = 0;

function playRound(userChoice) {
  if (csPoint === 10 || userPoint === 10) {
    result.textContent = "Match Completed!";
    matchNumber += 1;
    updateHistory();
    colorChange();
    csPoint = 0;
    userPoint = 0;
    ourScore.textContent = csPoint;
    csScore.textContent = userPoint;
  }

  let csChoice = Math.floor(Math.random() * 3) + 1;
  let newCsChoice;

  // RANDOM CONVERSION
  if (csChoice === 1) {
    newCsChoice = "rock";
  } else if (csChoice === 2) {
    newCsChoice = "paper";
  } else {
    newCsChoice = "scissor";
  }
  console.log(`Computer Choice: ${newCsChoice}`);

  // MATCH CONDITION
  if (userChoice === newCsChoice) {
    result.textContent = "Draw!, Try Again 😅";
  } else if (
    (userChoice === "rock" && newCsChoice === "paper") ||
    (userChoice === "paper" && newCsChoice === "scissor") ||
    (userChoice === "scissor" && newCsChoice === "rock")
  ) {
    result.textContent = "You Lose!";
    csPoint += 1;
    csScore.textContent = csPoint;
  } else {
    result.textContent = "You Won!";
    userPoint += 1;
    ourScore.textContent = userPoint;
  }
}

function updateHistory() {
  if (matchNumber <= 10) {
    nmLabels[matchNumber - 1].textContent = matchNumber.toString();
    plabels[matchNumber - 1].textContent = userPoint === 10 ? "Won!" : "Lose!";
    clabels[matchNumber - 1].textContent = csPoint === 10 ? "Won!" : "Lose";
  }
}

rockBtn.onclick = function () {
  playRound("rock");
};

paperBtn.onclick = function () {
  playRound("paper");
};

scissorBtn.onclick = function () {
  playRound("scissor");
};

function colorChange() {
  const newPLabel = document.querySelector(".two");
  const newCLabel = document.querySelector(".three");

  if (plabels.textContent === "Won!") {
    newPLabel.setAttribute("style", "color:blue");
  } else {
    newPLabel.setAttribute("style", "color:red");
  }

  if (clabels.textContent === "Won!") {
    newCLabel.setAttribute("style", "color:blue");
  } else {
    newCLabel.setAttribute("style", "color:red");
  }
}
