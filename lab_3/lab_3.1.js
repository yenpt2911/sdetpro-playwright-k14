const {filterEvenNumber, filterOddNumber} = require('../utils/ArrayHelper');
let intArr = [1, 2, 3, 4, 5];

let totalEvenNum = 0;
let totalOddNum = 0;

for (let index = 0; index < intArr.length; index++) {
    const value = intArr[index];
    if(value % 2 === 0 ) {
        totalEvenNum++; 
    } else {
        totalOddNum++;
    }
}

console.log('totalEvenNum: ', totalEvenNum);
console.log('totalOddNum: ', totalOddNum);


// Second approach
let totalEvenNum2nd = intArr.filter(filterEvenNumber).length;
let totalOddNum2nd = intArr.filter(filterOddNumber).length;

console.log('totalEvenNum2nd: ', totalEvenNum2nd);
console.log('totalOddNum2nd: ', totalOddNum2nd);