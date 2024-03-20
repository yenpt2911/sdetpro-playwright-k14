/**
 * DRY: to group same logic bloc into same place -> reusable
 * Group same logic category into same place
 * -> Maintanable -> extendable -> reliable
 */


// Function declaration | It's hoisted to the top of the scope
let myReturnedValue = functionName();
console.log(myReturnedValue);
function functionName() {
   return 2;
}


// rau, ca: parameters | alias : định danh dữ liệu đầu vào
// Argument(s): giá trị thực sự của parameter cung cấp tại thời điểm runtime
function nauCanhChua(rau, ca){

}

//{scope/ code block/ code body}

// Function expression
const addNumber = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(addNumber(1,2));
