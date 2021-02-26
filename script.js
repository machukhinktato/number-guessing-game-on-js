let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton; 

function checkGuess() {
    let userGuesses = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuesses + ' '

    if (userGuesses === randomNumber) {
        lastResult.textContent = 'Congratulations. You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuesses < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low!';
        } else if (userGuesses > randomNumber) {
            lowOrHigh.textContent = 'last guess was too high';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
    
}
