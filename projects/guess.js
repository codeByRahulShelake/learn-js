let randomNumber = parseInt(Math.random()*100 + 1)


let guessField = document.querySelector('.guessField')
let submit = document.querySelector('.guessSubmit')
let prevGuess = document.querySelector('.guesses')
let remainGuess = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let resultpara = document.querySelector('.resultParas')

let gameFlag = true;
let createButton = document.createElement('button')

let count = 10;

if(gameFlag)
{
submit.addEventListener('click', (e) => {
    e.preventDefault()
    let guessNumber = parseInt(guessField.value)
    validateGuess(guessNumber)
});
}

let validateGuess = (guess) => {
    if(guess < 1 || isNaN(guess) || guess > 100)
    {
        let message = 'Enter valid number i.e between 1 to 100'
        displayMessage(message)
    }
    else
    {
        if (count == 0)
        {
            let message = `Game over. Random number was : ${randomNumber}`
            displayMessage(message)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

let checkGuess = (guess) =>{
    if(randomNumber === guess)
    {
        let message = 'You got it right'
        displayMessage(message)
        endGame()
    }
    else{
        
        if(guess > randomNumber)
        {
            let message = 'Your guess was high'
            displayMessage(message)
        }
        else
        {
            let message = 'Your guess was low'
            
            displayMessage(message)
        }
            
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    guessField.value = '';
    prevGuess.innerHTML += `${guess}, `;
    count--;
    remainGuess.innerHTML = `${count} `;
  }

let endGame = () => {
    guessField.value = '';
    guessField.setAttribute('disabled', '')
    
    createButton.className = 'newGame'
    createButton.style.backgroundColor = '#161616'
    createButton.style.color = '#ffff'
    createButton.style.width = '200px'
    createButton.style.height = '50px'
    createButton.style.borderRadius = '10px'
    createButton.style.fontSize = '10px'
    createButton.style.borderStyle = 'none'
    createButton.innerHTML= 'New Game'

    resultpara.appendChild(createButton)
    gameFlag = false;
    newGame()
}

let newGame = () => {
    let start = document.querySelector('.newGame')

    start.addEventListener('click', (e) => {
    prevGuess.innerHTML = '';
    count = 10;
    remainGuess.innerHTML = `${count} `;
    lowOrHi.innerHTML = ''
    randomNumber = parseInt(Math.random()*100 + 1)
    guessField.removeAttribute('disabled')
    resultpara.removeChild(createButton)
    gameFlag = true;
    })
}
