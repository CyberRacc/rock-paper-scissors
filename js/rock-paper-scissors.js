let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 0;
let stopGame = false;

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

    let playerSelection = prompt("Enter rock, paper, or scissors: ");

    if (playerSelection === null || playerSelection === "") {
        return stopGame = true;
    } else {
        let playerSelLower = playerSelection.toLowerCase();
        return playerSelLower;
    }

}

function playRound(playerSelection, computerSelection) {

    getComputerChoice();

    const beats = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    console.log(`User selected: ${playerSelection}!`);

    console.log(`Computer selected: ${computerSelection}!`);

    if (computerSelection === beats[playerSelLower]) {
        console.log(`You win, ${playerSelLower} beats ${computerSelection}!`);
        playerWins ++;
    } else if (playerSelLower === beats[computerSelection]) {
        console.log(`You lose, ${computerSelection} beats ${playerSelLower}!`)
        computerWins ++;
    } else if (playerSelLower == computerSelection) {
        console.log(`You both selected ${playerSelLower}, it's a draw!`);
    } else {
        return stopGame = true;
    }
}
function game() {

    console.log("Game Started!");



    /*
        for (i = roundsPlayed = 1; i < 6; i++) {
            if (stopGame == false) {
                console.log(`Round ${roundsPlayed}`)
                roundsPlayed++;
                playRound();
                console.log(`Player Score: ${playerWins} | Computer Score: ${computerWins}`);
            } else {
                // Temp output, need to restart the same round if incorrect input.
                console.log("Incorrect input, try again.")
                roundsPlayed - 1;
                playRound();
            }
        }
    */

        /*

            Need to add the below HTML code to the page after the play button is clicked.

            <div class="board">

                <div class="score">
                    <p>Player Score: </p>
                    <p>Computer Score: </p>
                    <p>Rounds Played: </p>
                </div>

                <div class="output">
                    <p>Press Play to start</p>
                </div>

            </div>

            <div class="controls">
                <div class="button">
                    <button>Rock</button>
                </div>
                <div class="button">
                    <button>Paper</button>
                </div>
                <div class="button">
                    <button>Scissors</button>
                </div>
            </div>
        */

    if (playerWins > computerWins) {
        const score = document.querySelector("score");
        score.element
        
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
        <p>Player Score: </p>
        <p>Computer Score: </p>
        <p>Rounds Played: </p>
    </div>

</div>

<div class="controls">
    <div class="button">
        <button>Rock</button>
    </div>
    <div class="button">
        <button>Paper</button>
    </div>
    <div class="button">
        <button>Scissors</button>
    </div>
</div>`;
}

const startGame = document.querySelector(".play");
startGame.addEventListener("click", function (e) {
    console.log(e)
    const content = document.querySelector(".content");
    const playButton = content.querySelector(".play");
    playButton.remove();
    createUI();
});

const controls = document.querySelector(".controls");
controls.addEventListener("click", function (e) {
    console.log(e);
    playRound();
    document.querySelector(".button");
    button.classList.add(".pressed");
});
