var rpsArray = [
    'ROCK',
    'PAPER',
    'SCISSOR'
]
var Win = 0;
var Lose = 0;


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
            Lose++;
            return "You Lose! Paper beats Rock";

        }
        else if(playerSelection === "ROCK" && computerSelection === "SCISSOR") {
            Win++;
            return "You Win! Rock beats Scissor";
            
        } 
        else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
            Win++;
            return "You Win! Paper beats Rock";
            
        } 
        else if(playerSelection === "PAPER" && computerSelection === "SCISSOR") {
            Lose++;
            return "You Lose! Scissor beats Paper";
            
        } 
        else if(playerSelection === "SCISSOR" && computerSelection === "ROCK") {
            Lose++;
            return "You Lose! Rock beats Scissor";
        } 
        else if(playerSelection === "SCISSOR" && computerSelection === "PAPER") {
            Win++;
            return "You Win! Scissor beats Paper";
            
        } 
    } 
    else if(playerSelection === computerSelection) {
        console.log("Draw")
    }
    else {
        console.log("DONT DO IT")
    }

}

//const playerSelection = prompt("Choose your shit").toUpperCase();
//const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));  // testing playRound function


function game() {


     for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("Choose your shit").toUpperCase();
        const computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection));

     }
    if(Win > Lose) {
        console.log("CONGRATS! YOU ARE THE WINNER!!"); 
        }
        else if(Lose > Win){
        console.log("YOU LOSE");
        }
        else {
        console.log("ITS A DRAW!!");
        } 

}

game();  