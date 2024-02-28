// O(n^2)
/**
 * [3, 7, 22, 1], target number: 8
 * [index1, index2] that sum of them = targetNum
 * Assumption: Only one indice existing
 * 
 */

// Hint 01: nested loop - 2 loops -> 0(n^2)

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;

for (let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++) {
    const firstNum = givenArray[firstNumberIndex];
    for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < givenArray.length; secondNumberIndex++) {
        const secondNum = givenArray[secondNumberIndex];
        if(secondNum === targetNumber - firstNum) {
            console.log([firstNumberIndex, secondNumberIndex]);
            break;
        }    
    }
}

// Hint 02: using map -> 0(n)