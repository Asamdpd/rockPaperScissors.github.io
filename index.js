//a rock paper scissors game using the console, no gui 
let rounds = 5
let playerWins = 0;
let computerWins = 0;
// let playerSelection = "rock"

//create a function called computerPlay that would return either Rock, Paper or Scissors, do that by putting these
//options into an array and randomly select one item of the array when the function is called
function computerPlay(){
    const compChoice = ["rock", "paper", "scissors"]
    return compChoice[Math.floor(Math.random() * 3)]
}

//created a function that would play out a round of rock paper scissors by writing a function that takes two params
//the first one being playerSelection and the second one computerSelection, the computerSelection param should be 
//assigned the value that is being returned from the computerPlay function. The playerSelection value 
//should be taken from prompt. Return a string with the result of the round
//Also create a variable that would count how many wins the player and the computer have
function round(computerSelection){
    if(computerWins === 5){
        console.log("YOU LOSE")
        return
    }
    if(playerWins === 5){
        console.log("YOU WIN");
        return 
    }

    const choice = prompt("Write your choice, type either 'Rock', 'Paper' or 'Scissors'")
    const lower = choice.toLowerCase();

    if( !(lower == 'rock' || lower == 'paper' || lower == 'scissors') ){
        console.log('Please write a valid option');
        round()
    } 

    //where choice is rock
    switch (true){
        case (lower === "rock" && computerSelection === "rock"):
            console.log("Computer chose Rock!");
            console.log("DRAW");
            break;
        case (lower === "rock" && computerSelection === "paper"):
            console.log("Computer chose Paper!");
            console.log("You Lose! Paper beats Rock")
            computerWins++;
            break;
        case (lower === "rock" && computerSelection === "scissors"):
            console.log("Computer chose Scissors!");
            console.log("You Win! Rock beats Scissors");
            playerWins++;
            break;

        //where choice is paper
        case (lower === "paper" && computerSelection === "rock"):
            console.log("Computer chose Rock!");
            console.log("You Win! Paper beats Rock");
            playerWins++;
            break;
        case (lower === "paper" && computerSelection === "paper"):
            console.log("Computer chose Paper!");
            console.log("DRAW");
            break;
        case (lower === "paper" && computerSelection === "scissors"):
            console.log("Computer chose Scissors!");
            console.log("You Lose! Scissors beats Paper");
            computerWins++
            break;

        //where choice is scissors
        case (lower === "scissors" && computerSelection === "rock"):
            console.log("Computer chose Rock!");
            console.log("You Lose! Rock beats Scissors");
            computerWins++;
            break;
        case (lower === "scissors" && computerSelection === "scissors"):
            console.log("Computer chose Scissors!");
            console.log("DRAW");
            break;
        case (lower === "scissors" && computerSelection === "paper"):
            console.log("Computer chose Paper!");
            console.log("You Win! Scissors beats Paper");
            playerWins++
            break;
    }
    console.log(`Computer: ${computerWins} Player: ${playerWins}`)

  
}


//create a new functiob "game" that would repeat the previous function 5 times, use loop to do that

function game(){

    for(i = 0; i = 1;){
        if(computerWins === 5 || playerWins === 5){
            i++;
            break;
        }
        round(computerPlay())
    }
    console.log("OVERALL SCORE")
    console.log(`Computer: ${computerWins} Player: ${playerWins}`)

} 

game()



