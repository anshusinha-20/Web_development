console.log('Hello there!')

// Syntax of function:
// function funcName() {
//     //do something
// }
function singSong() {
    console.log('Nope');
}
singSong();

// Arguments
function greet(person) {
    console.log(`Hi ${person}!`);
}
greet('Anya');

// Exercise
function rant(message) {
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
}
rant('I hate beets');

// Multiple arguments
function repeat(str, numTimes) {
    let a = '';
    for (let i = 0; i < numTimes; i++) {
        a += str;
    }
    console.log(a);
}
repeat('Hi', 14);
// Exercise
function isSnakeEyes(first, second) {
    if (first === 1 && second === 1) {
        console.log('Snake Eyes!');
    }
    else {
        console.log('Not Snake Eyes!');
    }
}
isSnakeEyes(1, 4);

// Return (Exports value out of the fuction(s))
function sum(x, y) {
    return x + y;
}
sum(sum(1, 4), 9);


