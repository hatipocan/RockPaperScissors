// Script for a simple console playable Rock Papper Scissors game.

alert("Welcome to Rock Paper Scissors game. Have fun :)");

// Get computer selection ( a random selection from array)
function computerSelect() {
    let chooseArray = ['rock', 'paper', 'scissors'];

    // a random index number for chooseArray
    const randomIndex = Math.floor(Math.random() * chooseArray.length);

    // a random item from chooseArray by using random index
    const item = chooseArray[randomIndex];

    return item;

}

// compare user selection against computer selection
// increase the score of winner party by 1 point

let playerScore = 0;
let computerScore = 0;

function score () {
    return (`Player: ${playerScore} - Computer: ${computerScore}`);
}

function round (playerSelect, computer) {
        if (playerSelect == computer) {
            alert("it's a tie!!!")

        } else if (playerSelect == "rock" && computer == "scissors") {
            playerScore += 1;
            alert(`Computer is Scissors. You win!!! 
            ${score()} `);
                  
            
        } else if (playerSelect == "rock" && computer == "paper") {
            computerScore +=1;
            alert(`Computer is Paper. Computer wins!!! 
            ${score()}`);
            
            
        } else if (playerSelect == "paper" && computer == "rock") {
            playerScore += 1;
            alert(`Computer is Rock. You win!!! 
            ${score()}`);
            
            
        } else if (playerSelect == "paper" && computer == "scissors") {
            computerScore += 1;
            alert(`Computer is Scissors. Computer wins!!! 
            ${score()} `);
            
           
        } else if (playerSelect == "scissors" && computer == "rock") {
            computerScore +=1;
            alert(`Computer is Rock. Computer wins!!! 
            ${score()}`);
            
        } else if (playerSelect == "scissors" && computer =="paper") {
            playerScore +=1;
            alert(`Computer is Paper. You win!!! 
            ${score()}`);
            
        } else {
            alert("Please choose a valid weapon");
        }
}

let gameState = true;

// basic game loop which stops either computer or player hits to score 3

while (gameState = true) {


    // Get user Selection imputed to the console
    let playerSelect = prompt(" Please choose your weapon(rock, paper or scissors): ").toLowerCase();
    
    const computer = computerSelect();

    round(playerSelect, computer);

    if (computerScore == 3 || playerScore == 3) {
        gameState = false;
        if (playerScore == 3){
            alert("Game Over. You Win the Game!!!");
            break;
        } else {
            alert("Game Over. You Lose the Game :(((");
            break;
        }
    }
}

// if statement for restarting the game or leave

let restart = confirm("Would you like to play again?");

if (restart == false) {
    alert('Thanks for playing. Bye');
    location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
} else {
    location.reload();
}


