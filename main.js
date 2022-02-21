var rpsArray = [
    'ROCK',
    'PAPER',
    'SCISSOR'
]
var count = 0;


function computerPlay () {
    arrayIndex = Math.floor(Math.random()*rpsArray.length);
    return rpsArray[arrayIndex];
}

/* console.log(computerPlay());    this test computerPlay function*/

function playRound (playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)   // testing....

    if(playerSelection !== computerSelection) {
        if(playerSelection === "ROCK" && computerSelection === "PAPER") {
            console.log("You Lose! Paper beats Rock ")
        }
        else if(playerSelection === "ROCK" && computerSelection === "SCISSOR") {
            console.log("You Win! Rock beats Scissor")
            return count++;
        } 
        else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
            console.log("You Win! Paper beats Rock")
            return count++;
        } 
        else if(playerSelection === "PAPER" && computerSelection === "SCISSOR") {
            console.log("You Lose! Scissor beats Paper")
        } 
        else if(playerSelection === "SCISSOR" && computerSelection === "ROCK") {
            console.log("You Lose! Rock beats Scissor")
        } 
        else if(playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            console.log("You Win! Scissor beats Paper")
            return count++;
        } 
    } 
    else if(playerSelection === computerSelection) {
        console.log("Draw")
    }
    else {
        console.log("DONT DO IT")
    }

}

const playerSelection = prompt("Choose your shit").toUpperCase();
const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));  // testing playRound function

/* function game() {
    for (let i = 0; i < 5; i++) {
        
        playRound(playerSelection, computerSelection);
        
    }
}

game(); */