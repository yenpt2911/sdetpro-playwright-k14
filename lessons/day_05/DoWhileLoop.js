/**
 * 1. do sth before checking the condition for the FIRST interation
 * 
 */
const readline = require('readline-sync')
let guessingTime = 0;
let randomNum = getRandomNumber();
do {
    // Do the guessing game
    let userNum = getUserNum();
    if(userNum === randomNum){
        console.log("Hooray!");
        break;
    }
    guessingTime++;

} while(guessingTime <3);

if(guessingTime === 3){
    console.log('Chuc ban may man lan sau!');
}

function getRandomNumber(){
    return Math.floor(Math.random() *10) + 1;
}

function getUserNum(){
    return readline.question('Please enter your number: ');
}