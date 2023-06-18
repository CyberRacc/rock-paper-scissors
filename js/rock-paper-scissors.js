
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

*/

function getComputerChoice(choice) {
    let choice = Math.random(0, 100);

    console.log(choice);
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Make your choice: ");
    playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lost, paper beats rock!")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, rock beats scissors!");
    } else {
        console.log("Code not written yet!")
    }
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}