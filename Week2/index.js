// Task 1: Declare variables and check if age is 18 or more
let age = 25;
let isAdult = false;

if (age >= 18) {
    isAdult = true;
}
console.log("Your age is:",age,"and you are an adult:", isAdult);

// Task 2: Perform operations with x and y
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Check if a number is even or odd
let n = 7; 
let type = "Odd";
if (n % 2 === 0) {
    type = "Even";
}
console.log("Number is:", type);

// Task 4: Store numbers from 1 to 5 in an array
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log("Numbers Array:", arr);

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4));
