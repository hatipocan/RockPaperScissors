// Script for a simple console playable Rock Papper Scissors game.


// Get computer selection ( a random selection from array)
function computerSelect() {
    let chooseArray = ['rock', 'paper', 'scissors'];

    // a random index number for chooseArray
    const randomIndex = Math.floor(Math.random() * chooseArray.length);

    // a random item from chooseArray by using random index
    const item = chooseArray[randomIndex];

    return item;

}

const statusDiv = document.getElementsByClassName('round-status');
const scoreBoard = document.getElementsByClassName('score-board');

let playerSelect = "";

let playerScore = 0;
let computerScore = 0;


// a function which represents a game round comparing 
// player's selection against computer selection

function round (playerSelect, computer) {
    if (playerSelect == computer) {
        statusDiv[0].textContent = "it's a tie!!!";
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;

    } else if (playerSelect == "rock" && computer == "scissors") {
        playerScore += 1;
        statusDiv[0].textContent = "Computer is Scissors. You win!!!";
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
              
        
    } else if (playerSelect == "rock" && computer == "paper") {
        computerScore +=1;
        statusDiv[0].textContent = "Computer is Paper. Computer wins!!!"
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
        
        
    } else if (playerSelect == "paper" && computer == "rock") {
        playerScore += 1;
        statusDiv[0].textContent = `Computer is Rock. You win!!!`;
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
        
        
    } else if (playerSelect == "paper" && computer == "scissors") {
        computerScore += 1;
        statusDiv[0].textContent = `Computer is Scissors. Computer wins!!!`;
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
        
       
    } else if (playerSelect == "scissors" && computer == "rock") {
        computerScore +=1;
        statusDiv[0].textContent = `Computer is Rock. Computer wins!!!`;
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
        
    } else if (playerSelect == "scissors" && computer =="paper") {
        playerScore +=1;
        statusDiv[0].textContent = `Computer is Paper. You win!!!`;
        scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }

    if (computerScore == 3) {
        alert(scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}
Game Over You Lose :(((`);
        location.reload();
    } else if (playerScore == 3) {
        alert(scoreBoard[0].textContent =  `Player: ${playerScore} - Computer: ${computerScore}
Game Over You Win :)))`);
        location.reload();

    }
    
}

// Get user Selection from button by adding eventListen and use the output.
// fire the user selection and computer selection under the round function 
// and display the raound status on status div as text


const buttonRock = document.getElementById('myRock');
buttonRock.addEventListener("click", () => {
    playerSelect = "rock";
    round(playerSelect, computerSelect());
});

const buttonPaper = document.getElementById('myPaper');
buttonPaper.addEventListener("click", () => {
    playerSelect = "paper";
    round(playerSelect,computerSelect());
});

const buttonScissors = document.getElementById('myScissors');
buttonScissors.addEventListener("click", () => {
    playerSelect = "scissors";
    round(playerSelect, computerSelect());
});





















// if statement for restarting the game or leave

// let restart = confirm("Would you like to play again?");

// if (restart == false) {
//     alert('Thanks for playing. Bye');
//     location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
// } else {
//     location.reload();
// }


