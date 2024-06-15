const number= (Math.random() *100 +1).toFixed(0);
console.log(number)
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessFeild');
const slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
// slot.innerHTML = 0
let playGame = true;
let numofguess =0;
let preguess =[];

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess = parseInt(input.value);
        validate(guess);
    });
}
function validate(guess){
    if ((guess>=0 )&& (guess<=100)) {
        checkGuess(guess);
        numofguess+=1;
        preguess.push(guess);
        slot.innerHTML += `${guess}`;

    }
    else alert('Please enter a valid guess ');
}
function checkGuess(guess){
    if(guess === number){
        displayMessage("You guessed it right")
    }else{
        if(guess<number){
            displayMessage(`number is low`)
        }
        else displayMessage(`number is high`)
    }
}
function displayMessage(a){
    loOrHi.innerHTML = `<h4>${a}</h4>`;

}


// working code  
// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }
