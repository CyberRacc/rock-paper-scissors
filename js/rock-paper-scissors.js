
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

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Make your choice: ");

    let playerSelLower = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();

    console.log(`User selected: ${playerSelLower}!`);

    console.log(`Computer selected: ${computerSelection}!`);

    if (playerSelLower == "rock" && computerSelection == "paper") {
        console.log("You lost, paper beats rock!");
    } else if (playerSelLower == "paper" && computerSelection == "rock") {
        console.log("You win, paper beats rock!");
    } else if (playerSelLower == "scissors" && computerSelection == "rock") {
        console.log("You lose, rock beats scissors!");
    } else if (playerSelLower == "rock" && computerSelection == "scissors") {
        console.log("You win, rock beats scissors!");
    } else if (playerSelLower == "paper" && computerSelection == "scissors") {
        console.log("You lose, paper beats scissors!");
    } else if (playerSelLower == "scissors" && computerSelection == "paper") {
        console.log("You win, scissors beats paper!");
    } else if (playerSelLower == computerSelection) {
        console.log(`You both selected ${playerSelLower}, it's a draw!`);    
    } else {
        console.log("Code not written yet!");
    }
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    console.log(result1 + result2 + result3 + result4 + result5);

}