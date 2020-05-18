let playerScore = 0;
let computerScore = 0;
let round = 1;
let pointsToWin = 3;

const results = document.querySelector('#resultsBox');
const div = document.querySelector('div');
const para = document.createElement('p');
const winner = document.createElement('p');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click' , (e) => {
    let playerSelection = button.id;
    playRound(playerSelection);
  });
});

function computerPlay() {
  let rps = ["rock", "paper" , "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function resetRound() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if(playerSelection === "scissors" && computerSelection === "paper") {
    results.textContent = "You win! Scissors beats paper!";
    playerScore++;
  } else if(playerSelection === "rock" && computerSelection === "scissors") {
    results.textContent = "You win! Rock beats scissors";
    playerScore++;
  } else if(playerSelection === "paper" && computerSelection === "rock") {
    results.textContent = "You win! Paper beats rock";
    playerScore++;
  } else if(playerSelection === "rock" && computerSelection === "paper") {
    results.textContent = "You lose! Paper beats rock";
    computerScore++;
  } else if(playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent = "You lose! Scissors beats paper";
    computerScore++;
  } else if(playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent = "You lose! Rock beats scissors";
    computerScore++;
  } else {
    results.textContent = "It's a tie!" + " You both picked " + playerSelection + ".";
  }

  if(playerScore < pointsToWin && computerScore < pointsToWin) {
    para.textContent = "[Round] " + round + " [Player] : " + playerScore  + " " + "VS" + "  [Computer] : " + computerScore + " . ";
    winner.textContent = "";
  };

  if (playerScore == pointsToWin && computerScore < pointsToWin) {
      para.textContent = "Round " + round + " Player: " + playerScore + " vs Computer: " + computerScore + " . ";
      winner.textContent = "CONGRADULATION!!! The Player is WINNER!!!";
      resetRound();
  } else if (playerScore < pointsToWin && computerScore == pointsToWin) {
      para.textContent = "Round " + round + " Player: " + playerScore + " vs Computer: " + computerScore + " . ";
      winner.textContent = "SORRY!!! The WINNER is Computer!";
      resetRound();
  } else if (playerScore == (pointsToWin -1) && computerScore == (pointsToWin -1)) {
      para.textContent = "Round " + round + " Player: " + playerScore + " vs Computer: " + computerScore + " . ";
      winner.textContent = "TIE BREAKER!!!";
  };

  div.appendChild(results);
  results.appendChild(para);
  results.appendChild(winner);

  round++;

}