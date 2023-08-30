console.log("Hello again!")

// Syntax:
// for (initial expression; condition; increment) {
//     console.log(variable);
// }
for (let i = 1; i <= 10; i++) {
    console.log(i);
    console.log("Hola");
}

// wap to print even nos. form 0 to 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
// wap to print odd nos. form 0 to 20
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
// wap to print nos. form 100 to 0 in steps of 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// Infinite loops (Danger ahead!!)
// for (let i = 14; i >= 14; i++) {
//     console.log("Love is endless")
// };

// Looping over arrays
const companies = ['Apple', 'Google', 'Microsoft', 'Adobe', 'Nokia'];
for (let i = 0; i < companies.length; i += 1) {
    console.log(companies[i].toUpperCase());
}

// Looping over arrays in reverse order
const companies2 = ['Apple', 'Google', 'Microsoft', 'Adobe', 'Nokia'];
for (let i = companies.length - 1; i >= 0; i -= 1) {
    console.log(companies2[i]);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`);
    for (let j = 1; j < 6; j++) {
        console.log(`     j is ${j}`);
    }

}
const seating = [
    ['Linda', 'Jonathan', 'Carl'],
    ['Alex', 'Cheng', 'Duma'],
    ['John', 'Natasha', 'Chris']
]
for (let i = 0; i < seating.length; i++) {
    const Row = seating[i]
    console.log(`Row #${i + 1}:`);
    for (let j = 0; j < Row.length; j++) {
        console.log(Row[j]);
    }
}