console.log("Hello!");

// Basic array
let days = ['Monday', 'Tuesday', 'Wednesday', 'thursday'];
console.log(days[0]);
console.log(days.length);
console.log(days[3]);
console.log(days[1][0]);

// Difference b/w string and array (String values are not changeable)
let a = "tuesday"
a[0] = "T";
console.log(a);

days[3] = "Thursday";
console.log(days[3]);

// Adding index of 6, leaving 2 empty slots in  the array
days[6] = 'Sunday';
console.log(days);

// Push and pop in an array (Push adds an element at the end and pop removes from the end)
let b = [1, 2, 3, 4];
b.push(5);
console.log(b);
b.pop();
console.log(b);

// Shift and unshift in an array (Shift removes at first and unshift add at first)
let c = [1, 1, 2, 3, 4];
c.shift();
console.log(c);
c.unshift(7);
console.log(c);

// Concat in arrays
let days1 = ["Monday", "Tuesday"];
let days2 = ["Wednesday", "Thursday"];
days3 = days1.concat(days2);
console.log(days3);

// Includes in arrays
if (days1.includes("Monday")) {
    console.log("True");
}
else {
    console.log("False");
}

// Indexof in arrays
console.log(days3.indexOf("Monday"));
console.log(days3.indexOf("Friday"));

// Reverse in arrays and destruction caused to the original ones
console.log(days3.reverse());
console.log(days3);


// More methods in arrays
console.log("More methods in arrays!");
// Slice in arrays
let months = ['Jan', 'April', 'Jun', 'Jul'];
console.log(months.slice(1, 3));
console.log(months);

// Splice in arrays(index, delete count, insert)
let colors = ['violet', 'indigo', 'black', 'green', 'yellow', 'orange', 'red'];
colors.splice(2, 1, 'blue');
console.log(colors);

// Reference types and equality testing in arrays
if (1 === 1) {
    console.log("True");
}
else {
    console.log("False");
}

if ([1] === [1]) {
    console.log("True");
}
else {
    console.log("False"); //why false?
}

// Nested arrays(Multidimesional arrays)
let board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
];
console.log(board);
console.log(board[1][1]);

