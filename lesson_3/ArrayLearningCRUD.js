// Literal declaration

let myNumArray = [1,2,3,4,5];
//myNumArray = 'sthElse';
console.log(myNumArray);

/**
 * length: mumber of elements
 * index: 0 -> (length -1)
 */
console.log(myNumArray.length);
console.log('Value of the second number before updating: ', myNumArray[1]);
myNumArray[1] = 100;
console.log('Value of the second number after updating: ', myNumArray[1]);

console.log(myNumArray[99]);
//Possibly undefine holes
myNumArray[10] = 1000;

// Adding one more on top of array
myNumArray.push(6);
console.log(myNumArray);

// Removing the last element from array
let removedValue = myNumArray.pop();
console.log(removedValue);
console.log('After removing last element: ', myNumArray);

// Removing the first element from array
myNumArray.shift();
console.log(removedValue);
console.log('After removing first element: ', myNumArray);

// Deleting | splice
myNumArray.splice(0,2);
console.log(myNumArray);


let myNewArray = [1,3,4,5];
let whereToInsert =1;
let numberOfArgToBeRemoved = 0;
let valueToBeAdded =2;
myNewArray.splice(whereToInsert, numberOfArgToBeRemoved, valueToBeAdded);
console.log(myNewArray);


// Via Array constructor
// let viaConstructor = new Array(1,2,3,4,5);