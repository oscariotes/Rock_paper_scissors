const myItems = ['rock', 'paper', 'scissors'];
//Choose random from the array.
function computerPlay(){ 
   let selected = myItems[Math.floor(Math.random()*myItems.length)];
   return selected;
};

let computerInput;
let playerInput;

//Players type the selection based on the array. This will be modified later to accept any case.
//let playerInput = prompt ('Type any');

//The main logic.
function playRound(){
//Computer picks from the array.
let computerInput = computerPlay();
let playerInput = prompt ('Type any');
console.log(computerInput, playerInput);

   if (computerInput === playerInput){
      return('This is a tie!');
   }

     if(computerInput ==='rock'){
        if(playerInput ==='paper'){
           return('Win! Paper wraps rock.')
        } else {
           playerInput ==='scissors';
           return('Lose! Broken scissor.')
        }
     }

     if (computerInput === 'paper'){
        if (playerInput === 'rock'){
         return('Lose! Paper wraps rock.')
        } else {
           playerInput ==='scissors';
           return('Win! Scissor rips paper.')
        }
     }

     if (computerInput ==='scissors'){
        if (playerInput ==='rock'){
           return('Win! Broken scissors.')
        } else {
           playerInput === 'paper';
           return('Lose! Scissor cuts paper.')
        }
     }
};

console.log(playRound()) 

function game() {

   
   //This will play 5 times
   for (let i = 0; i < 4; i++) {

      
     // let playerInput = prompt ('Type any');
     // let computerInput = computerPlay();
   //console.log(playRound())
   console.log(playRound(playerInput, computerPlay()));
   }
}

console.log(game())







