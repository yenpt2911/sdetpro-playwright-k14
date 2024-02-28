const readline = require('readline-sync');
const inputNum = getUserInputNum();

if(inputNum === 2) {
    console.log("Monday");
} else if(inputNum === 3) {
    console.log("Tuesday");
} else if(inputNum === 4) {
    console.log("Wednesday");
} else if(inputNum === 5) {
    console.log("Thursday");
} else if(inputNum === 6) {
    console.log("Friday");
} else {
    console.log("Nhap lui roi: 2->6");
}

switch (inputNum){
case "2":
    console.log("Monday");
    break;
case "3":
    console.log("Tuesday");
    break;
case "4":
    console.log("Wednesday");
    break;
case "5":
    console.log("Thursday");
    break;
case "6":
    console.log("Friday");
    break;
case "7":
    console.log("Saturday");
    break;
case "8":
    console.log("Sunday");
    break;
default:
    console.log("Nhap lui roi: 2->8");
}

function getUserInputNum(){
    return readline.question('Please select an option: ');
}