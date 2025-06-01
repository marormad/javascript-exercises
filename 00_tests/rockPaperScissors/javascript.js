// Greeting
console.log("Hello there!")

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
//console.log(getComputerChoice());

// Human choice
function getHumanChoice() {
    let userInput = window.prompt("Please enter your choice: ").toLowerCase();
    return userInput;
}

// Function that will play one round
function playRound () {
    let humanChoice = getHumanChoice();
        console.log(`You chose ${humanChoice}`);
    let computerChoice = getComputerChoice();
        console.log(`Computer chose ${computerChoice}`);

    // Check round winner
    if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) 
            {console.log("You win this round!"); return "human"; }
    else if (
        (humanChoice == "scissors" && computerChoice == "rock") || 
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")) 
            {console.log("You lose this round!"); return "computer";}
    else { console.log ("It's a tie"); return "tie";}

}

// Playing the game (5 rounds)
function playGame() {
    // Score tracking
    let humanScore = 0, computerScore = 0;
    // Game loop
    for (let i=0; i<5; i++) {
        let currentRound = playRound();
        if (currentRound == "human") humanScore++;
        else if (currentRound == "computer") computerScore++;
    }
    // Declare a winner at the end of the game
    if (humanScore > computerScore) console.log("You win the game!");
    else if (humanScore < computerScore) console.log("You lose the game!");
    else console.log("Game ends with a tie!");
}

// Start Game on reloading page
playGame();