console.log("Hello again!!!");

// Syntax:
// initial exp;
// while(cosndition){
//     console.log(var);
//     final exp;
// }

let a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}

const secret = 'Hello';
let guess = prompt("Enter the code:");
while (guess !== secret) {
    guess = prompt("Enter the code:");
}
console.log("You got it right!");



