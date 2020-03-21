let playerScore = 0;
let computerScore = 0;
let round = 1;
let pointsToWin = 5;

const resultsDiv = document.querySelector("#resultsBox");
const score = document.createElement("p");
const roundUpdate = document.createElement("p");
const showDecision = document.createElement("p");

const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let playerSelection = button.id;
      playRound(playerSelection);
    }) ;
  }) ;

function computerPlay() { 
  let rps = ["rock", "paper", "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function resetRound() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
};

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissors.";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        roundUpdate.textContent = "You lose! Paper beats rock.";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        roundUpdate.textContent = "You win! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        roundUpdate.textContent = "You lose! Rock beats scissors.";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        roundUpdate.textContent = "You win! Paper beats rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        roundUpdate.textContent = "You lose! Scissors beats paper.";
    } else {
        roundUpdate.textContent = "It's a tie!" + " You both picked " + playerSelection + ".";
    };


    if (playerScore < pointsToWin && computerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        showDecision.textContent = "";    
    };
    
    if (computerScore == pointsToWin && playerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        showDecision.textContent = "Computer wins, sorry!";
        resetRound();
    } else if (playerScore == pointsToWin && computerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        showDecision.textContent = "You win, congratulations!";
        resetRound();
    } else if (playerScore == (pointsToWin - 1) && computerScore == (pointsToWin - 1)) {
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        showDecision.textContent = "Tie breaker!";
    }; 
  
  resultsDiv.appendChild(roundUpdate);
  resultsDiv.appendChild(score);
  resultsDiv.appendChild(showDecision);

  round++;
}; 