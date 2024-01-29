let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length -1;

while (unsortedPosition > 0 ){
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        if(leftValue > rightValue){
           
            array[index] = rightValue;
            array[index + 1] = leftValue;

        }
    }
    unsortedPosition--;
}

console.log(array);