let randomNum = parseInt(Math.random() * 10 + 1)
console.log(randomNum)
const usrInput = document.getElementById('guessField')
const submit = document.getElementById('subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startGame = document.querySelector('#startGame')

const startOver = document.getElementsByClassName('resultParas')

let guesStore = []
let numGuesses = 1

startGame.addEventListener('click', (e)=>{
    e.preventDefault()
    
    usrInput.setAttribute('disabled', '')

    let playGame = true
    usrInput.removeAttribute('disabled')

    if(playGame){
        submit.addEventListener('click', (e)=>{
            e.preventDefault()
            const guess = parseInt(usrInput.value)
            guessValidate(guess)
        })
    }
})





function guessValidate(guess){
    if(isNaN(guess)){
        lowOrHi.innerHTML = 'Please Enter a valid Number 1 to 100!'
    }
    else if(guess>100){
        lowOrHi.innerHTML= 'Number is grater than 100 !'
    }
    else if(guess<1){
        lowOrHi.innerHTML = 'Number is less than 1 !'
    }
    else{
        guesStore.push(guess)

        if(numGuesses === 11){
            displayMessage(`Your Game is Over !!! & Random Number is Guess ${randomNum}`)
            endGame()
        }
        else{
            guessCalculate(guess)
            checkGuess(guess)
        }
    }
}

function guessCalculate(guess){
    usrInput.value = ''
    guesses.innerHTML += `${guess} `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
}

function checkGuess(guess){
    if(guess < randomNum){
        lowOrHi.innerHTML = `Your Guess is too low !`
    }
    else if(guess > randomNum){
        lowOrHi.innerHTML = `Your Guess is too High !`
    }
    else if(guess === randomNum){
        lowOrHi.innerHTML = ` Hurrah !! You Won the game ! \n Random number is ${randomNum}`
        endGame()
    }
}

function displayMessage(message){
    guesses.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    usrInput.value = ''
    playGame = false
    p.classList.add('button');
    guesses.removeAttribute("disabled", '')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#startGame');
    newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    guesStore = [];
    numGuesses = 1;
    usrInput.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses} `;
    usrInput.removeAttribute('disabled', '')
    playGame = true;
    })
}