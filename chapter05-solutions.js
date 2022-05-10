/* Improved hello */
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
let firstName = prompt('What is your first name?')
let lastName = prompt('What is your first name?')


// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

console.log(sayHello(firstName, lastName))
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result


/* Number squaring */
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  return x ** 2
}

// Square the given number x
const square2 = x => x * x // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// When it's done, update the program so that it shows the square of every number between 0 and 10.

for (let i = 1; i <= 10; i++) {
    console.log(square1([i]))
}


/* Minimum of two numbers */
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
const min = (a, b) => a >= b ? b : a
// TODO: write the min() function

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1



/* Calculator */
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

function calculate(number1, operation, number2) {
    switch (operation) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2
            break;
        case '*':
            return number1 * number2
            break;
        case '/':
            return number1 / number2
            break;
        default:
            return 'Please input a valid operation'
    }
}

// TODO: complete program

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


/* Circumference and area of a circle */
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

function area(radius) {
    return Math.PI * (radius ** 2)
}

function circumference(radius) {
    return 2 * Math.PI * radius
}

console.log(area(50).toFixed(2)) // should output 7853.98
console.log(circumference(50).toFixed(2)) // should output 314.16