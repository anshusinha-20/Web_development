console.log("Hello again!")

let input = prompt('Say something');
while (true) {
    input = prompt(input);
    if (input === "stop") {
        break;
    }
}
console.log('You win!');