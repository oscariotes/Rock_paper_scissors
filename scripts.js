const myItems = ['rock', 'paper', 'scissors'];
//Choose random from the array.
function computerPlay(){ 
   selected = myItems[Math.floor(Math.random()*myItems.length)];
     computerChoice.innerHTML = 'Computer choose ' + selected;
};



let computerScore = 1;
let playerScore = 1;



//computerInput = computerPlay();
let playerInput;
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let result = document.getElementById('result');
let pDisplayScore = document.getElementById('playerScore');
let cDisplayScore =  document.getElementById('computerScore')
let theWinner = document.getElementById('theWinner')

const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');



btnRock.addEventListener('click', rock);
function rock (){
   playerInput = 'rock';
   playerChoice.innerHTML = 'You choose rock.'
   //computerChoice.innerHTML ='Computer choose ' + computerInput;
   playRound();
   winner();
}
btnPaper.addEventListener('click', paper);
   function paper (){
      playerInput = 'paper';
      playerChoice.innerHTML ='You choose paper.';
      //computerChoice.innerHTML ='Computer choose ' + computerInput;
      playRound();
      winner();
   }


btnScissors.addEventListener('click', scissors);
   function scissors(){
      playerInput = 'scissors';
      playerChoice.innerHTML = 'You choose scissors ';
      //computerChoice.innerHTML ='Computer choose ' + computerInput;
      playRound();
      winner();
   }
   


//The main logic of the game.
function playRound(){ 
   computerPlay();
//rock
   if(playerInput === selected) {
      result.innerHTML = 'This is a tie';
   }if (playerInput === 'rock' && selected === 'paper'){
      result.innerHTML = 'Lose!';
      cDisplayScore.innerHTML = 'Computer Score = ' + computerScore++;
   }if (playerInput === 'rock' && selected === 'scissors'){
      result.innerHTML = 'Win!'
      pDisplayScore.innerHTML = 'Player Score = ' + playerScore++;
   }

   //paper

   if (playerInput === 'paper' && selected === 'rock'){
      result.innerHTML ='Win!'
      pDisplayScore.innerHTML = 'Player Score = ' + playerScore++;
   }if (playerInput === 'paper' && selected === 'scissors'){
      result.innerHTML ='Lose!'
      cDisplayScore.innerHTML = 'Computer Score = ' + computerScore++;
   }

//scissors

   if (playerInput === 'scissors' && selected === 'paper'){
      result.innerHTML = 'Win!'
      pDisplayScore.innerHTML = 'Player Score = ' + playerScore++;
   }if (playerInput === 'scissors' && selected === 'rock'){
      result.innerHTML = 'Lose!'
      cDisplayScore.innerHTML = 'Computer Score = ' + computerScore++;
   }else {
      return 'this is an error'
   }

}


function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}



// This will determine the winner.
//Tie are scored both for computer and player. Remove it from plaRound ////function to remove the tie.
function winner(){
   if (computerScore === playerScore) {
      theWinner.innerHTML = 'This a tie';
   } if (computerScore > playerScore){
      theWinner.innerHTML = 'You lose! ';
   } if (computerScore < playerScore){
      theWinner.innerHTML = 'You win!';
   } else {
      theWinner.innerHTML = 'This is a no contest'
   }
}


//console.log(theWinner());
//console.log(computerScore, playerScore);






