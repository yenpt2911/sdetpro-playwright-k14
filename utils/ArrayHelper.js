const filterEvenNumber = function(value, index, array) {
    return value % 2 === 0;
}

const filterOddNumber = function(value, index, array) {
    return value % 2 !== 0;
}

const convertToEvenNumbers = function(value, index, array) {
    if(value % 2 !== 0){
        return value + 1;
    } else {
        return value;
    }
} 

const sortNumberASC = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const sortNumberDESC = function (firstNumber, secondNumber) {
    return secondNumber - firstNumber;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    filterOddNumber: filterOddNumber,
    convertToEvenNumbers: convertToEvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}