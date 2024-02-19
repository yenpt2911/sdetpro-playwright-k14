const readline = require('readline-sync');
const givenStr = getUserInput();

let individualWords = givenStr.split(" ");
const result = groupWordMap(givenStr);
console.log(result);

function groupWordMap(givenStr){
    let wordMap = new Map();
    for (const word of individualWords){
        if(!wordMap.has(word)){
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}

function getUserInput(){
    return readline.question('Please enter your strings:')
}


