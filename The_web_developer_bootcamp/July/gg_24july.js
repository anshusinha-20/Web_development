console.log('Hello again!')

// Guessing game
let max = parseInt(prompt('Enter a max no.:'));

while (!max) {
    max = parseInt(prompt('Enter a valid no.:'));
}

const num = Math.floor(Math.random() * max) + 1;
let guess = parseInt(prompt('Enter your first guess:'));
let attempts = 1;

while (parseInt(guess) !== num) {
    if (guess === "quit") {
        break;
    }
    attempts++;

    if (guess > num) {
        guess = prompt('Too high!');
    }
    else {
        guess = prompt('Too low!');
    }
}
if (guess === "quit") {
    console.log("************** Game ended! **************");
}
else {
    console.log(`You got it!
    It took you ${attempts} guesses`);
}