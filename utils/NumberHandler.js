function divide(firstNumber, secondNumber) {
    return Math.round(firstNumber / secondNumber);

}

/**
 * SOLID
 * S: Single Reposibility
 * 
 */
let result = divide(5, 2);
console.log('Value: ', result);

console.log(typeof result);

function isEvenNumber(number) {
    return number % 2 ===0;

}


module.exports = {
    divide: divide,
    isEvenNumber: isEvenNumber
}