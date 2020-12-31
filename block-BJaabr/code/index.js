// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne( number ) {
  return number + 1;
}

// - Write a Function Expression
const addOne = function (number) {
  return number + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
const addOne = (number) => number + 1;

// - Write an Arrow Function with curly brackets
const addOne = (number) => {
  return number + 1;
}

// - Execute the function
addOne(2);

// - Execute the function and store the return value in a variable.
let returnValue = addOne(2);

// - What is the typeof returnValue
// typeof returnValue is "number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number) {
  return number - 1;
}

// - Write a Function Expression
const substractOne = function(number) {
  return number - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
const substractOne = (number) => number - 1;

// - Write an Arrow Function with curly brackets
const substractOne = (number) => {
  return number - 1;
}

// - Execute the function
substractOne(3);

// - Execute the function and store the return value in a variable.
let returnValue = substractOne(3);

// - What is the typeof returnValue
// typeof returnValue is "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2) {
  return num1 + num2;
}

// - Write a Function Expression
const sum = function(num1 , num2) {
  return num1 + num2;
}

// - Write an Arrow Function without curly brackets(if possible)
const sum = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets
const sum = (num1, num2) => {
  return num1 + num2;
}

// - Execute the function
sum(2,3);

// - Execute the function and store the return value in a variable
let returnValue = sum(2,3);

// - What is the typeof returnValue
// typeof returnValue is "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
  return n*n;
}

// - Write a Function Expression
const square = function(n) {
  return n*n;
}

// - Write an Arrow Function without curly brackets(if possible)
const square = (n) => n*n;

// - Write an Arrow Function with curly brackets
const square = (n) => {
  return n*n;
}

// - Execute the function
square(5);

// - Execute the function and store the return value in a variable
let returnValue = square(5);

// - What is the typeof returnValue
// typeof returnValue is "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y) {
  return x > y ? true : false;
}

// - Write a Function Expression
const isGreater = function(x,y) {
  return x > y ? true : false;
}

// - Write an Arrow Function without curly brackets(if possible)
const isGreater = (x,y) => x > y ? true : false;

// - Write an Arrow Function with curly brackets
const isGreater = (x,y) => {
  return x > y ? true : false;
}

// - Execute the function
isGreater(3,1);

// - Execute the function and store the return value in a variable
let returnValue = isGreater(3,1);

// - What is the typeof returnValue
// typeof returnValue is "boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
}

// - Write an anonymous Function Expression
const oddOrEven = function(number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
}

// - Write an named Function Expression
const checkOddOrEven = function oddOrEven(number) {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEven = (number) => number % 2 == 0 ? `Number is even` : `Number is odd`;

// - Write an Arrow Function with curly brackets
const oddOrEven = (number) => {
  return number % 2 == 0 ? `Number is even` : `Number is odd`;
}

// - Execute the function
oddOrEven(3);

// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(3);

// - What is the typeof returnValue
// typeof returnValue is "string"