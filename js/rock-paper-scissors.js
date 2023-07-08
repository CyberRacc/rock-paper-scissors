let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 1;

const startGame = document.querySelector(".play-button");


// Randomly selects the computer's choice of rock, paper or scissors.
function getComputerChoice() {

    let computerSelection;

    // Create variable = to random number between 0 and 1.
    let getChoice = Math.random();

    // Each time the function is run getChoice is a random value.
    // If the value is within the thirds below, set it to that value.
    if (getChoice <= 0.33) {
        computerSelection = "rock";
    } else if (getChoice > 0.33 && getChoice <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    const beats = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    if (computerSelection === beats[playerSelection]) {
        playerWins ++;
    } else if (playerSelection === beats[computerSelection]) {
        computerWins ++;
    } else if (playerSelection == computerSelection) {
        playerWins ++;
        computerWins ++;
    } else {
        return;
    }

    updateScores(playerSelection, computerSelection);
}

// Determines and outputs the game winner.
function gameWinner() {
    let winner = "";

    if (playerWins > computerWins) {
        winner = "Player wins!";
    } else if (computerWins > playerWins) {
        winner = "Computer wins!";
    } else {
        winner = "It's a draw.";
    }

    const gameWinner = document.createElement("p");
    gameWinner.textContent = `${winner}`
    const scoreArea = document.querySelector(".score");
    scoreArea.appendChild(gameWinner);
}

// Updates the scores and roud values.
function updateScores(playerSelection, computerSelection, winner) {
    const computerScoreDisplay = document.querySelector(".score-display-computer");
    const playerScoreDisplay = document.querySelector(".score-display-player");
    const roundDisplay = document.querySelector(".round-display")
    const selections = document.querySelector(".selections");
    const roundWinner = document.querySelector(".round-winner");

    playerScoreDisplay.textContent = `Player Score: ${playerWins}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerWins}`;
    selections.innerHTML = `Player chose: <b>${playerSelection}</b>! <br> Computer chose: <b>${computerSelection}</b>!`;
    roundDisplay.textContent = `Round: ${roundsPlayed}`;
    roundWinner.textContent = `${winner} wins, ${playerSelection} beats ${computerSelection}!`;

}

// After the Play button is clicked, creates the UI to be used for the game
function createUI() {
    const content = document.querySelector(".content"); // Selects the div with class="content".
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
    </div>
    
    <div class="reset-area">
        <div class="reset-button">
            <button>Reset</button>
        </div>
    </div>

    <div class="feedbackArea">
        <div class="feedback">
            <p class="selections"></p>
            <p class="roundWinner"></p>
        </div>
    </div>`; // Puts all this HTML inside the content div.
}

startGame.addEventListener("click", function (e) {
    const content = document.querySelector(".content");
    const playButton = content.querySelector(".play");
    playButton.remove();
    createUI();
    content.classList.add("content-border");
    const controls = document.querySelectorAll(".controls");
    controls.forEach( (button) => {
        button.addEventListener("click", function (e) {
            if (roundsPlayed < 5) {
                let playerSelection = e.target.id;
                let computerSelection = getComputerChoice();
                roundsPlayed++;
                playRound(playerSelection, computerSelection);
            } else {
                controls.forEach(button => {
                    button.disabled = true;
                    button.classList.add("grey-out")
                });
                gameWinner();
            }
        });
        button.addEventListener("mouseover", function (e) {
            button.classList.add("hover");
        });
        button.addEventListener("mouseout", function (e) {
            button.classList.remove("hover");
        })
    });
    

    // Resets the game when reset button is clicked.
    const resetGame = document.querySelector(".reset-button");
    resetGame.addEventListener("click", function (e) {
        // Code that resets the game to go here
    });
    resetGame.addEventListener("mouseover", function (e) {
        resetGame.classList.add("hover-reset");
    });
    resetGame.addEventListener("mouseout", function (e) {
        resetGame.classList.remove("hover-reset");
    });
    
});

