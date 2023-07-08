let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 1;


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

    // Returns the computerSelection to be used in the game.
    return computerSelection;
}

// Gets the player choice based on which button they select.
function getPlayerChoice() {

    // playerSelection is defined as a nodelist of items with the button class.
    let playerSelection = document.querySelectorAll(".button")

    // Defines the playerSelection as rock, paper or scissors based on which ID is clicked.
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
        return;
    }



    const computerScoreDisplay = document.querySelector(".score-display-computer");
    const playerScoreDisplay = document.querySelector(".score-display-player");

    playerScoreDisplay.textContent = `Player Score: ${playerWins}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerWins}`;
}

// Determines and outputs the game winner.
function gameWinner() {

    let winner = "";

    if (playerWins > computerWins) {
        winner = "player";
        console.log(`The winner is: ${winner}`);
        const gameWinner = document.createElement("p");
        gameWinner.textContent = `${winner} wins!`
        const scoreArea = document.querySelector(".score");
        scoreArea.appendChild(gameWinner);
    
        console.log("The game is over!");
    } else if (playerWins === computerWins) {
        console.log("It's a draw, play another round.");
        playRound();
        console.log(`Player Score: ${playerWins} | Computer Score: ${computerWins}`)
        if (playerWins > computerWins) {
            winner = "player";
            console.log(`The winner is: ${winner}`);
            const gameWinner = document.createElement("p");
            gameWinner.textContent = `${winner} wins!`
            const scoreArea = document.querySelector(".score");
            const score = document.querySelector("score");
        
            score.appendChild(gameWinner);
        
            console.log("The game is over!");
        } else {
            winner = "computer";
            console.log(`The winner is: ${winner}`);
            const gameWinner = document.createElement("p");
            gameWinner.textContent = `${winner} wins!`
            const scoreArea = document.querySelector(".score");
            const score = document.querySelector("score");
        
            score.appendChild(gameWinner);
        
            console.log("The game is over!");
        }
    } else {
        winner = "computer";
        console.log(`The winner is: ${winner}`);
        const gameWinner = document.createElement("p");
        gameWinner.textContent = `${winner} wins!`
        const scoreArea = document.querySelector(".score");
        const score = document.querySelector("score");
    
        score.appendChild(gameWinner);
    
        console.log("The game is over!");
    }
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
    </div>`; // Puts all this HTML inside the content div.
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
            if (roundsPlayed < 5) {
                let playerSelection = e.target.id;
                let computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                roundsPlayed++;
                const roundDisplay = document.querySelector(".round-display")
                roundDisplay.textContent = `Round: ${roundsPlayed}`;
            } else {
                controls.forEach(button => {
                    button.disabled = true;
                });
                gameWinner(playerWins, computerWins);
            }
        })
    })});

