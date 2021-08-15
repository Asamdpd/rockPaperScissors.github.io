//a rock paper scissors game using the console, no gui 
let rounds = 5
let playerWins = 0;
let computerWins = 0;
let playerChoice = "";
let computerChoice = "";
// let playerSelection = "rock"

//create a function called computerPlay that would return either Rock, Paper or Scissors, do that by putting these
//options into an array and randomly select one item of the array when the function is called
function computerPlay(){
    const compChoice = ["rock", "paper", "scissors"]
    return compChoice[Math.floor(Math.random() * 3)]
    
}

function playAgain(){

    const div = document.createElement('div')
    div.className = "grid-item";
    const content = document.createTextNode("Play Again");
    div.appendChild(content)
    document.body.appendChild(div)

    div.addEventListener("click", (e) => {
        playerWins = 0;
        computerWins = 0;
        document.querySelector('div[id="plScore"]').innerHTML = `Player Score: ${playerWins}`
        document.querySelector('div[id="comScore"]').innerHTML = `Computer Score: ${computerWins}`
        document.querySelector('div[id="text"]').innerHTML = "Make Your Choice";
        div.remove()

    })

    
}



const rock = document.querySelector('img[id="rockImage"]')

rock.addEventListener("click", () => {
playerChoice = "rock";
compare(playerChoice, compareRock(computerPlay()))
})

const paper = document.querySelector('img[id="paperImage"]')
paper.addEventListener("click", () => {
playerChoice = "paper"

if(!(playerWins === 5 || computerWins === 5)){
    comparePaper(computerPlay()) && compareScissors(computerPlay()) && compareRock(computerPlay()) 
} 



})


const scissors = document.querySelector('img[id="scissorsImage"]')

scissors.addEventListener("click", () => {
playerChoice = "scissors"
compareScissors(computerPlay())
})

//check if player or computer won
function win(){
    if(playerWins === 5){
        document.querySelector('div[id="text"]').innerHTML = "YOU WON!";
    } else if(computerWins === 5){
        document.querySelector('div[id="text"]').innerHTML = "COMPUTER WON!" 
    } 

    if(playerWins === 5 || computerWins === 5){
        playAgain()
    }
    
}


function compareRock(computerChoice){
    if((playerWins === 5 || computerWins === 5)){
        return;
    }
    switch(computerChoice){
        case "rock":
            document.querySelector('div[id="text"]').innerHTML = "Draw!"
            break;
        case "scissors":
            playerWins++;
            document.querySelector('div[id="text"]').innerHTML = "You Win!";
            document.querySelector('div[id="plScore"]').innerHTML = `Player Score: ${playerWins}`;
            
            break;
        case "paper":
            computerWins++;
            document.querySelector('div[id="text"]').innerHTML = "You Lose!";
            document.querySelector('div[id="comScore"]').innerHTML = `Computer Score: ${computerWins}`;
            
            break
        default: return;
    }

    win()
      
}

function comparePaper(computerChoice){

    if((playerWins === 5 || computerWins === 5)){
        return;
    }
    
    switch(computerChoice){
        case "paper":
            document.querySelector('div[id="text"]').innerHTML = "Draw!"
            break;
        case "rock":
            playerWins++
            document.querySelector('div[id="text"]').innerHTML = "You Win!";
            document.querySelector('div[id="plScore"]').innerHTML = `Player Score: ${playerWins}`
            
            break;
        case "scissors":
            computerWins++;
            document.querySelector('div[id="text"]').innerHTML = "You Lose!";
            document.querySelector('div[id="comScore"]').innerHTML = `Computer Score: ${computerWins}`;
            
            break
        default: return;
    }
    win()
}

function compareScissors(computerChoice){
    if((playerWins === 5 || computerWins === 5)){
        return;
    }
    switch(computerChoice){
        case "scissors":
            document.querySelector('div[id="text"]').innerHTML = "Draw!"
            break;
        case "paper":
            playerWins++;
            document.querySelector('div[id="text"]').innerHTML = "You Win!";
            document.querySelector('div[id="plScore"]').innerHTML = `Player Score: ${playerWins}`
            
            break;
        case "rock":
            computerWins++;
            document.querySelector('div[id="text"]').innerHTML = "You Lose!";
            document.querySelector('div[id="comScore"]').innerHTML = `Computer Score: ${computerWins}`;
            break
        default: return;
    }
    win()
}

function compare(){
    computerChoice = computerPlay();
    
}

