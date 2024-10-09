

function getComputerChoice() {
    let num= Math.random();
    let choice;

    if (num < 0.33) {
        choice = "Rock";
    } else if (num < 0.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}


function getHumanChoice() {
    let userInput = prompt("Choose your move");
    return userInput;
}

let humanScore = 0
let computerScore = 0

