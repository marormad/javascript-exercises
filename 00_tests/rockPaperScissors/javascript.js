// Greeting
console.log("Hello there!")

// Variable that will store the 'div' element in which round results will be showed
const divLog = document.getElementById('logDiv');

// Generate computer choice
// Generate random number between 0 and 2 (three options)
function randomizer() {return Math.floor(Math.random() * 3)}
// Computer chooses one option
function getComputerChoice() {
    let randomNumber = randomizer();
    if (randomNumber == 0) return "rock";
    else if (randomNumber == 1) return "paper";
    else return "scissors";
    };

// Function that will play one round
function playRound (humanChoice) {
    console.log(`You chose ${humanChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`);
    
    // Check round winner
    if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) 
            {console.log("You win this round!");
             logger("You win this round!");
             scoreTracker("human");
            }
    else if (
        (humanChoice == "scissors" && computerChoice == "rock") || 
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")) 
            {console.log("You lose this round!");
             logger("You lose this round!"); 
             scoreTracker("computer");
            }
    else {console.log ("It's a tie");
          logger("It's a tie.");
         }

}

// Event Listeners for the buttons. They will call the function playRound with the player selection
// every time a button is clicked
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const playerChoice = button.value;
        playRound(playerChoice);
    });
});
//console.log(buttons[1].value);

// Function that will add the result of each round inside the 'div' element
function logger (text) {
    // Create element 'p' to show the result of the round inside the 'div' element
    let newResult = document.createElement('p');
    newResult.textContent = text;
    divLog.append(newResult);
}

// Function to keep track of the score and announce a winner once a player reaches 5 points
let humanScore = 0;
let computerScore = 0;
function scoreTracker (roundWinner) {
    if (roundWinner === "human") {humanScore++;}
    else if ( roundWinner === "computer") {computerScore++;}
    if (humanScore == 5 || computerScore == 5) {
        logger("Game ended!");
        if (humanScore == 5) {logger("You are the winner of the game!");}
        else {logger("Computer is the winner of the game!");}
        humanScore = 0;
        computerScore = 0;
    }
}