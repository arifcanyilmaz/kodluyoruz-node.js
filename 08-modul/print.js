const { primeNumbers } = require('./primeNumbersModule.js')

const number = process.argv.slice(2).map(num => parseInt(num))

console.log(`${number[0]}-${number[1]} aralığındaki asal sayılar:`)

primeNumbers(number[0],number[1])