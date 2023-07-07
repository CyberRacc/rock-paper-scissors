let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 1;

function getComputerChoice() {

    let computerSelection;

    let getChoice = Math.random();

    if (getChoice <= 0.33) {
        computerSelection = "rock";
    } else if (getChoice > 0.33 && getChoice <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
}


function getPlayerChoice() {

    let playerSelection = document.querySelectorAll(".button")

    if (document.querySelector("#rock")) {
        return playerSelection = "rock";
    } else if (document.querySelector("#paper")) {
        return playerSelection = "paper";
    } else {
        return playerSelection = "scissors";
    }

}

function playRound(playerSelection, computerSelection) {

    const beats = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    console.log(`User selected: ${playerSelection}!`);

    console.log(`Computer selected: ${computerSelection}!`);

    if (computerSelection === beats[playerSelection]) {
        // const win = document.createElement("p");
        // win.appendChild(".score")
        // win.textContent = (`You win, ${playerSelection} beats ${computerSelection}!`);
        console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
        playerWins ++;
    } else if (playerSelection === beats[computerSelection]) {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}!`)
        computerWins ++;
    } else if (playerSelection == computerSelection) {
        console.log(`You both selected ${playerSelection}, it's a draw!`);
    } else {
        return stopGame = true;
    }

    roundsPlayed++;
    const roundDisplay = document.querySelector(".round-display")
    roundDisplay.textContent = `Round: ${roundsPlayed}`;

    const computerScoreDisplay = document.querySelector(".score-display-computer");
    const playerScoreDisplay = document.querySelector(".score-display-player");

    playerScoreDisplay.textContent = `Player Score: ${playerWins}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerWins}`;
}
function gameWinner() {

    const gameWinner = document.createElement("p");
    gameWinner.textContent = `${winner} wins!`
    const scoreArea = document.querySelector(".score");
    scoreArea.appendChild(gameWinner);

    if (playerWins > computerWins) {
        const score = document.querySelector("score");
        
        
    } else if (playerWins === computerWins) {
        console.log("It's a draw, play another round.");
        playRound();
        console.log(`Player Score: ${playerWins} | Computer Score: ${computerWins}`)
        if (playerWins > computerWins) {
            console.log("You've won the game!");
        } else {
            console.log("You've lost the game :(")
        }
    } else {
        console.log("You've lost the game :(");
    }

    console.log("The game is over!");

}

function createUI() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    
    <div class="board">
        <div class="score">
            <p class="round-display">Round: ${roundsPlayed}</p>
            <p class="score-display-player">Player Score: ${playerWins}</p>
            <p class="score-display-computer">Computer Score: ${computerWins}</p>
        </div>
    </div>

    <div class="buttons">
        <div class="button">
            <button class="controls" id="rock">Rock</button>
        </div>
        <div class="button">
            <button class="controls" id="paper">Paper</button>
        </div>
        <div class="button">
            <button class="controls" id="scissors">Scissors</button>
        </div>
    </div>`;
}

function announceWinner() {

}

const startGame = document.querySelector(".play-button");
startGame.addEventListener("click", function (e) {
    const content = document.querySelector(".content");
    const playButton = content.querySelector(".play");
    playButton.remove();
    createUI();
    const controls = document.querySelectorAll(".controls");
    controls.forEach( (button) => {
        button.addEventListener("click", function (e) {
            let roundsPlayed = 1
            if (roundsPlayed < 6) {
                let playerSelection = e.target.id;
                let computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                roundsPlayed++;
            } else {
                gameWinner(playerWins, computerWins);
            }
        })
    })});

