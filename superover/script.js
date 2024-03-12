const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team1Wickets = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");


var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1Balls = 0;
var team2Balls = 0;
var turn = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function gameOver() {
  if (team1Score > team2Score) alert("IND wins");
  if (team2Score > team1Score) alert("PAK wins");
  if (team2Score === team1Score) alert("It is another superover!");
}

function updateScore() {
  $team1Score.textContent = team1Score;
  $team1Wickets.textContent = team1Wickets;
  $team2Score.textContent = team2Score;
  $team2Wickets.textContent = team2Wickets;
}

resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {
  const randomElement =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  if (turn === 2) {
    team2Balls++;
    document.querySelector(
      '#team2-superover div:nth-child(${team2Balls})'
    ).textContent = randomElement;
    
    if (randomElement === "W") {
      team2Wickets++;
    }
    
    else {
      team2Score += randomElement;
    }
    if (
      team2Balls === 6 ||
      team2Wickets === 2 ||
      team2Score > team1Score
    ) {
      turn = 3;
      gameOver();
    }
  }

  if (turn === 1) {
    team1Balls++;
    document.querySelector(
      '#team1-superover div:nth-child(${team1Balls})'
    ).textContent = randomElement;
    if (randomElement === "W") {
      team1Wickets++;
    } else {
      team1Score += randomElement;
    }
    if (team1Balls === 6 || team1Wickets === 2) turn = 2;
  }
  updateScore();
};