console.log('Hello again!')

// Syntax:
// for(let some variable of difined iterable item){
// console.log(some variable);
// }

// Iterating arrays
const v = ['GHe', 'gsd', 'fsdd'];
for (let b of v) {
    console.log(b);
}

for (let c of v) {
    console.log(`Visit reddit//.com ${c}`);
}

//Iterating strings
let d = "Forever"
for (let a of d) {
    console.log(a);
}

// Iterating objects
let testscores = { Alia: 78, Ranveer: 80, kat: 92, Farhan: 87 };

for (let person in testscores) {
    console.log(`${person} scored ${testscores[person]}`);
}

let total = 0;
let scores = Object.values(testscores);
for (let score of scores) {
    total += score;

}

console.log(total / scores.length);
