

// Literal declaration:
let myNumArray = [1,2,3,4,5];


let arrayLength = myNumArray.length;
console.log('arrayLength: ', arrayLength);

for(let index = 0; index < arrayLength; index++){
    const element = myNumArray[index];
    console.log(element);
}

/**
 * Convert all number in the array into even number. You can change all value
 */

for(let index =0; index < arrayLength; index++){
    const currentValue = myNumArray[index];  
    myNumArray[index] = currentValue*2;
}

for (let value of myNumArray) {
    console.log(value);
}