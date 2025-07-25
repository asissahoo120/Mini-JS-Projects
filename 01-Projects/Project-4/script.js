let randomNumber = Math.floor(Math.random() * 100 + 1);
// let randomNumber = 1;
let form = document.querySelector("form");
let totalGuess = 10;
let previousGuess = [];

const result = document.querySelector(".result");
const history = document.querySelector(".history");
const bigSmall = document.querySelector(".bigSmall");
const inputBox = document.querySelector("#inputBox");
const preGuess = document.querySelector(".preGuess");
const guessRemaining = document.querySelector(".guessesRemaining");

form.addEventListener("submit", (e) => {
    const inputValue = parseInt(inputBox.value);
    e.preventDefault();
    if (!inputValue || inputValue <= 0 || inputValue > 100) {
        result.innerHTML = "❌ Enter a valid number between 1 and 100";
    } else if (previousGuess.includes(inputValue)) {
        result.innerHTML = "⚠️ You already guessed this number!";
        return;
    } else if (inputValue == randomNumber) {
        result.innerHTML = "you won!";
        history.innerHTML = "<b>Reload to play again!</b>";
        return;
    } else {
        previousGuess.push(inputValue);
        totalGuess -= 1;
        result.innerHTML = "❌ Try again!";
    }
    if (totalGuess == 0) {
        result.innerHTML = `💀 You lost! The number was ${randomNumber}`;
        history.innerHTML = "<b>Reload to play again!</b>";
        inputBox.disabled = true;
        form.querySelector("button").disabled = true;
        return;
    }

    preGuess.innerHTML = `Previous Guesses: ${previousGuess}`;
    guessRemaining.innerHTML = `Guesses remaining: ${totalGuess}`;
     bigSmall.innerHTML =
         inputValue < randomNumber
             ? "Hint: Guess Bigger value"
             : "Hint: Guess Smaller value";
});
