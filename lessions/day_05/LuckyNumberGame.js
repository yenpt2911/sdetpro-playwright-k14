const readline =  require('readline-sync');

/**
 * === Game menu ===
 * "1. Generate a random number(1->10)"
 * "0. Exit"
 * 
 */
let isPlaying = true;
while(isPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if(userOption == 0){
        isPlaying = false;
    } else if(userOption == 1){
    // Generate a random number and print out
       let randomNumber = Math.floor(Math.random() *10) + 1;
       console.log("The lucky number is: ", randomNumber);

    } else {
        console.log("Nhap data ");
    }
}
console.log("See you soon!");

function printGameMenu(){
    console.log('* === GAME MENU ===');
    console.log('1. Generate a random number(1->10)');
    console.log('0. Exist');

}

function getUserOption() {
    return readline.question('Please select an option: ');
}