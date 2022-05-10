// Carousel

let turn = prompt('How many turns?', '');
turn = Number(turn);
i = 1;

while (i <= turn) {
	console.log(`Carousel turn ${i}`)
  i++
 }


// Parity

let i = prompt('Starting number? ', '1')
i = Number(i)

while (i <= 10) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
   } else if (i % 2 === 1) {
    console.log(`${i} is odd`)
   }
	i++
}


// Prompt

while (true) {
	let chosenValue = Number(prompt("Chosen Value: "));

	if (chosenValue <= 100 && chosenValue > 50) {
		console.log('Desirable input')
		break
   }
}


// Multiplication table

while (true) {
  let chosenValue = Number(prompt('Chosen number?', ''));
  for (let i = 1; i <= 10; i++) {
    if (chosenValue <= 9 && chosenValue > 2) {
      console.log(`Chosen value: ${chosenValue}, Multiplication level ${i}, and output ${chosenValue * i}`)
    } else {
      console.log("Try again")
    }
  }
  break
}

// Yes or No


while (true) {
  let chosenValue = (prompt('What is your choice?')).toLowerCase();

  if (chosenValue == 'no' || chosenValue == 'yes') {
    console.log('Game has ended as you have inputted the right element')
    break
  } else {
    console.log('Please try again')
  }
}

// Fizz Buzz


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz')
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz')
  }
  else {
    console.log(`Number ${i}`)
  }
}