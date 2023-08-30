console.log("Hello there!");

const marks = { Maths: 80, English: 92 };
console.log(marks);
marks.Maths = 90;
console.log(marks);
marks.Maths = "A+";
console.log(marks);

// Nesting arrays and objects (Arrays + Objects)
const comments = [
    { username: 'Tammy', votes: '90' },
    { username: 'Tommy', votes: '88' }
];
console.log(comments);
comments[1].votes = '67';
console.log(comments);
