let intArr = [1, 2, 3, 4, 5];
let maxValue, minValue;

for(let i = 0; i < intArr.length; i++) {
    if(intArr[i] < intArr[i+1]){
        maxValue = intArr[i+1];
    }
}

for(let i = 0; i < intArr.length; i++) {
    if(intArr[i] > intArr[0]){
        minValue = intArr[0];
    }
}

console.log('Max value is: ', maxValue);
console.log('Min value is: ', minValue);
