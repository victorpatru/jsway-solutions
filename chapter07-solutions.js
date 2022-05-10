// Musketeers

const musketeers = ["Athos", "Porthos", "Aramis"]

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}

musketeers.push("D'Artagnan")

musketeers.forEach(musketeer => console.log(musketeer))

musketeers.splice(2, 1)

for (let musketeer of musketeers) {
    console.log(musketeer)
}

// Sum of Values

function sumOfValues() {
    const values = [3, 11, 7, 2, 9, 10];
    let sum = 0
    values.forEach(value => sum += value)

    return sum
}

console.log(sumOfValues())

// Array maxium

function arrayMaximumValue() {
    const values = [3, 11, 7, 2, 9, 10];
    let maxValue = 0

    values.forEach(value => {
        if (value >= maxValue) {
            maxValue = value
        }
    })
    return maxValue
}

console.log(arrayMaximumValue())

// List of words

function listOfWords() {
    const wordsInputed = []

    while (true) {
        let words = prompt('Please input a word. If you wanna leave please input "stop".')
        words.toLowerCase()
        if (words === 'stop') {
            break
        } else {
           wordsInputed.push(words) 
        }
    }

    return wordsInputed
}

console.log(listOfWords())