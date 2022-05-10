// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let dayArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
let userInputDay = prompt('What is your chosen day?')

if (dayArray.includes(userInputDay.toLowerCase())) {
    console.log(userInputDay)
} else {
    console.log('Please try inputting a valid day!')
}


// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
function numberComparison(a, b) {
    return a > b ? 'Your first number is larger than the second one' : a < b ? 'Your second number is larger than the first one' : 'Both numbers are equal'
}

console.log(numberComparison(50, 10))

// Final values
// Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

// In case: nb1=nb2=nb3=4 => nb1 = 0, nb2 = 4, nb3 = 12	
// In case: nb1=4,nb2=3,nb3=2 => nb1 = 4, nb2 = 3, nb3 = 2	
// In case: nb1=2,nb2=4,nb3=0 => nb1 = 3, nb2 = 4, nb3 = 0	


// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
const daysInMonthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function returnDaysInMonth(month) {
    return month === 1 ? daysInMonthArray[0] : month >= 12 ? daysInMonthArray[daysInMonthArray.length - 1] : daysInMonthArray[month - 1]
}

console.log(returnDaysInMonth(2))

// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

function followingSecond(hours, minutes, seconds) {
    seconds++
    if (seconds >= 60) {
        minutes++
        seconds = 0
    } 
    if (minutes >= 60) {
        hours++
        minutes = 0
    }
    if (hours >= 24) {
      hours = 0
      minutes = 0
      seconds = 0
    }
    return `${hours}h${minutes}m${seconds}s`

}

console.log(followingSecond(14, 17, 59))
console.log(followingSecond(6, 59, 59))
console.log(followingSecond(23, 59, 59))


// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)
