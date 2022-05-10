// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
let firstName = prompt('What is your first name?')
let lastName = prompt('What is your last name?')
console.log(`${firstName} ${lastName}`)
// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2;
a -= 1;
a++; // outputs 2
let b = 8;
b += 2; // outputs 10
const c = a + b * b; // outputs 102
const d = a * b + b; // outputs 30
const e = a * (b + b); // outputs 40
const f = a * b / a; // outputs 10
const g = b / a * a; // outputs 10
console.log(a, b, c, d, e, f, g);
// Check your prediction by executing it.

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let price = prompt('What is your chosen price?')

console.log(+price * 1.206)

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celsius = prompt('What is the value in celsius?')

let fahrenheit = (+celsius * 9 / 5) + 32

console.log(fahrenheit)

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

let numberPlaceholder = number1
number1 = number2
number2 = numberPlaceholder

console.log(number1, number2)

// T> This exercise has several valid solutions. You may use more than two variables to solve it.