let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessfield')
const guessSlot=document.querySelector('.guesses')
const Remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const starOver=document.querySelector('.resultparas')

const p=document.createElement('p')

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
if(isNaN(guess)){
alert  ("Please Enter a valid number")
}else if(guess <1){
 alert  ("Please Enter a number more than 1")
}else if(guess > 100){
  alert  ("Please Enter a number less than 100")
}else{
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess)
    displayMassage(`Oops Better Luck Next Time.The Number Was ${randomNumber}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMassage(`YEEE You Win The Game`)
    endGame()
  }else if(guess<randomNumber){
    displayMassage(`Number is TOOOO Low`)
  }else if(guess>randomNumber){
    displayMassage(`Number is TOOOO High`)
  }
}
function displayGuess(guess){
  userInput.value=''
   guessSlot.innerHTML+=`${guess}, `
  numGuess++;
  Remaining.innerHTML=`${11-numGuess}`
 
}

function displayMassage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<button id="NewGame">Start New Game</button>`;
starOver.appendChild(p)
playGame=false
newGame()
}

function newGame(){
  const NewGameButton=document.querySelector('#NewGame')
  NewGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    Remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    starOver.removeChild(p);
    playGame=true;

    
  })
}

