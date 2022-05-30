const myItems = ['rock', 'paper', 'scissors'];
//Choose random from the array.
function computerPlay(){ 
   selected = myItems[Math.floor(Math.random()*myItems.length)];
     computerChoice.innerHTML = 'Computer choose ' + selected;
};

let playerScore = 0;
let computerScore = 0;

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

//User click to run the program

btnRock.addEventListener('click', rock);
function rock (){
   playerInput = 'rock';
   playerChoice.innerHTML = 'You choose rock.'
   playRound();
   winner();
}
btnPaper.addEventListener('click', paper);
   function paper (){
      playerInput = 'paper';
      playerChoice.innerHTML ='You choose paper.';
      playRound();
      winner();
   }


btnScissors.addEventListener('click', scissors);
   function scissors(){
      playerInput = 'scissors';
      playerChoice.innerHTML = 'You choose scissors ';
      playRound();
      winner();
   }
   
//The main logic of the game.
function playRound(){ 
   computerPlay();

   if(playerInput === selected) {
      result.innerHTML = 'This is a tie';
   };

   //rock
   if (playerInput === 'rock' && selected === 'paper'){
      result.innerHTML = 'You lose the round';
      cDisplayScore.innerHTML = 'Computer Score = ' + ++computerScore;
   }if (playerInput === 'rock' && selected === 'scissors'){
      result.innerHTML = 'You win the round!';
      pDisplayScore.innerHTML = 'Player Score = ' + ++playerScore;
   }

   //paper

   if (playerInput === 'paper' && selected === 'rock'){
      result.innerHTML ='You win the round!';
      pDisplayScore.innerHTML = 'Player Score = ' + ++playerScore;
   }if (playerInput === 'paper' && selected === 'scissors'){
      result.innerHTML ='You lose the round';
      cDisplayScore.innerHTML = 'Computer Score = ' + ++computerScore;
   }

//scissors

   if (playerInput === 'scissors' && selected === 'paper'){
      result.innerHTML = 'You win the round!'
      pDisplayScore.innerHTML = 'Player Score = ' + ++playerScore;
   }if (playerInput === 'scissors' && selected === 'rock'){
      result.innerHTML = 'You lose the round';
      cDisplayScore.innerHTML = 'Computer Score = ' + ++computerScore;
   }else {
      return 'this is an error'
   }

}

// This will determine the winner.
//Tie are scored both for computer and player. Remove it from plaRound ////function to remove the tie.
function winner(){

   
   if (playerScore >= 5){
      theWinner.innerHTML = 'You win the match! ';
      alert('You Win! Press Ok, then F5 to restart.')
   } else if (computerScore >= 5) {
      theWinner.innerHTML = 'Computer win the match!';
      alert('Computer Win! Press Ok, then F5 to restart.')
   } else {
      theWinner.innerHTML = 'First to reach 5 points wins.';
   }
}



