const {
    filterEvenNumber, 
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC
} 
= require('../utils/ArrayHelper');

/**
 * Methods to process array
 */

// Literal declaration
let myNumArray = [1,2,3,4,5];

// 1. Most of methods to process an array can accept a function as a parameters
let evenNumbers = myNumArray.filter(filterEvenNumber);

// 2. The function to process the array: (value, index, array)
//function filterEvenNumber(value, index, array) {
//   return value % 2 === 0;
//}

for (const value of evenNumbers) {
    console.log(value);
}

// Map sth --> [SAME rule/ logic] --> sthElse

const evenNumArray = myNumArray.map(convertToEvenNumbers);

// print results
for (const value of evenNumArray) {
    console.log(value);
}


// SORT: Asc, desc

let myStrings = ['B', 'A', 'C'];
myStrings.sort();
myStrings.reverse();

// sort number
let complexNumArray = [100, 200, 300];
complexNumArray.sort(sortNumberASC);
complexNumArray.sort(sortNumberDESC);

console.log(complexNumArray);


// forEach: Str : 12345
myNumArray.forEach(convertToNoSpaceStr);

let targetStr = '';
function convertToNoSpaceStr(value, index, array) {
    targetStr =  targetStr + value;
}
console.log(targetStr);