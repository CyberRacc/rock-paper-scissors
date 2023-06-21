
/*
Plan

    Need to create a function that randomly return either rock, paper or scissors.
    This will be the computer's choice.

    Need another cuntion that takes the playerSelection and computerSelection,
    then returns a string that declares the winner of the round like: "You've lost,
    paper beats rock."

    The playerSelection function's parameters must be case-insensitive so the user
    can input "rock", "ROCK", "rOcK", etc.

    Each function should return a result, not console.log the results. This is so
    I can use the results later.

Pseudocode

    Generate a random number, use Math.random to generate a number between 0 and 1.
    There are three possible values, "rock", "paper", and "scissors" so we will
    use thirds to get the result. If the number generated is less than or equal
    to 0.33, then the computer has selected "rock", if the number is greater than
    0.33 AND less than or equal to 0.67, then the computer has chosen "paper".
    Anything else, and the computer has chosen "scissors".

    Get a choice from the player using a prompt, convert the answer to lowercase,
    use the lowecase answer to compare to computerSelection.

*/

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

function playRound(playerSelLower, computerSelection) {

    playerSelLower = getPlayerChoice();

    computerSelection = getComputerChoice();

    const beats = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    console.log(`User selected: ${playerSelLower}!`);

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

    stopGame = false;

    console.log("Let the game begin!");

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

    if (playerWins > computerWins) {
        console.log("You've won the game!");
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