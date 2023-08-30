console.log("Hello to nesting arrays!")

// Property = key : value
const fitbitData = {
    steps: 1000,
    calories: 1300,
    sleep: 14
};
console.log(fitbitData);

// Accesing data out of objects
const a = { first: "Boy", last: "Girl" };
console.log(a);
console.log(a["first"]);
console.log(a.last);

// New way to access data of an object using a different variable
const years = { 2019: "Good", 2020: "Bad" };
let birthyear = 2020;
console.log(birthyear);
console.log(years[birthyear]);

