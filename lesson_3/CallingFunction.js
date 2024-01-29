const NumberHandler = require('../utils/NumberHandler');

// dot notation
let result = NumberHandler.divide(10, 3);
console.log('Result: ', result);
console.log('Is 5 even number: ', NumberHandler.isEvenNumber(5));

// Destructuring:
const {
    divide,
    isEvenNumber
} = require('../utils/NumberHandler');

let result2 = NumberHandler.divide(10, 3);
console.log('Result: ', result2);
console.log('Is 5 even number: ', NumberHandler.isEvenNumber(5));