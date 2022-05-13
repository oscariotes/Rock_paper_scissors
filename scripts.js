const myItems = ['rock', 'paper', 'scissors'];
//Choose random from the array.
function computerPlay(){ 
   let selected = myItems[Math.floor(Math.random()*myItems.length)];
   return selected;
};

let computerInput;
let playerInput;
let computerScore = 0;
let playerScore = 0;

//The main logic of the game.
function playRound(){
let computerInput = computerPlay();
let playerInput = prompt('Type rock, paper or scissors').toLowerCase();
console.log(computerInput, playerInput);

   if (computerInput === playerInput){
     computerScore++;
     playerScore++;
      return('This is a tie!');
   }

     if(computerInput ==='rock'){
        if(playerInput ==='paper'){
           playerScore++;
           return('Win! Paper wraps rock.')
        } else {
           playerInput ==='scissors';
           computerScore++;
           return('Lose! Broken scissors.')
        }
     }

     if (computerInput === 'paper'){
        if (playerInput === 'rock'){
           computerScore++;
         return('Lose! Paper wraps rock.')
        } else {
           playerInput ==='scissors';
           playerScore++;
           return('Win! Scissor rips paper.')
        }
     }

     if (computerInput ==='scissors'){
        if (playerInput === 'rock'){
           playerScore++;
           return('Win! Broken scissors.')
        } else {
           playerInput === 'paper';
           computerScore++;
           return('Lose! Scissor cuts paper.')
        }
     }
};

console.log(playRound()) 

function game() {
  //Loop function to play 5 times.
   for (let i = 0; i < 4; i++) {
   console.log(playRound(playerInput, computerPlay()));
   }
}
console.log(game())

// This will determine the winner.
//Tie are scored both for computer and player. Remove it from plaRound ////function to remove the tie.
function theWinner(){
   if (computerScore == playerScore) {
      return ('This is a tie! Computer score on the left and yours on the right.')
   } if (computerScore > playerScore){
      return ('You lose! Computer score on the left and yours on the right. ')
   } else {
      return ('You win! Computer score on the left and yours on the right.')
   }
}


console.log(theWinner());
console.log(computerScore, playerScore);






