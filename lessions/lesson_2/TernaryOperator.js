const EXPECTED_TIME = 7;
let arrivalTime = 7;

let isHeOnTime = arrivalTime === EXPECTED_TIME; 
let msgContent = '';

/*
if(isHeOnTime) {
    msgContent = "Let's talk!";
} else {
    msgContent = "Write letter!";
}
*/

// Ternary Operator (Toan tu 3 ngoi)
msgContent = isHeOnTime ? (2 < 3 ?"Let's talk!" : "abc"): "Write letter!";
console.log(msgContent);
