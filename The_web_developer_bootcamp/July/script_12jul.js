console.log("Hello to our first js page!");

let a = Math.random();

if (a < 1) {
    console.log("Your no. is less than 1");
    console.log(a);
}

// let rating = 5;

// if (rating === 2) {
//     console.log("False");
// }
// else if (rating === 3) {
//     console.log("True");
// }
// else {
//     console.log("Invalid rating");
// }


// const password = prompt("Please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password");
//     }
//     else {
//         console.log("Password must have no spaces");
//     }
// }
// else {
//     console.log("Invalid password");
// }

// const input = prompt("Enter something");

// if (input) {
//     console.log("True value");
// }
// else {
//     console.log("False value");
// }
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password")
// }
// else {
//     console.log("Invalid password")
// }
// const firstname = prompt('Enter a name');
// if (!firstname) {
//     console.log("Try again")
// }
const day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday")
}
