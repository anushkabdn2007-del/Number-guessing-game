let random = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (guess === random) {
        message.innerText = ` Correct! Number was ${random}`;
        message.style.color = "green";
    } 
    else if (guess < random) {
        message.innerText = " Too Small! Try Again";
        message.style.color = "orange";
    } 
    else {
        message.innerText = " Too Large! Try Again";
        message.style.color = "red";
    }
}