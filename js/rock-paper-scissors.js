
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

function getComputerChoice(rock, paper, scissors) {
    let computerSelection = Math.floor(Math.random() * getComputerChoice)
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}