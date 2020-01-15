

//letters that the computer has to choose from to hold as guess
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//below i create a computerGuess generator
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

//variables to keep track of and display as user plays
var win = 0
var lose = 0
var guessuesleft = 10
var userguessed = []


//listening to user key input
document.onkeyup = function (event) {
    userguess = String(event.key)
    var computerletter = alphabet[generateRandomInteger(0, 25)];
    console.log(userguess, computerletter)

    // win
    if (computerletter === userguess) {
        document.getElementById("win").innerHTML = win++;
        document.getElementById("remainingGuesses").innerHTML = guessuesleft--;
        userguessed.push(userguess);
        document.getElementById("guessed").innerHTML = userguess;
        //reset number of guesses if user wins
        userguessed=[];
        guessuesleft=10;
    }
    //  lose
    else if (computerletter !== userguess) {
        document.getElementById("remainingGuesses").innerHTML = guessuesleft--;
        userguessed.push(userguess);
        document.getElementById("guessed").innerHTML = userguessed;
        // reset if number of guesses were exhausted
        if (guessuesleft <1) {
            document.getElementById("losing").innerHTML = lose++;
            userguessed=[];
            guessuesleft=10;
        }
    }
}
