/**
 * Given String: Hey, tui ten Teo, ban cung ban cung ten Teo ah?
 * --> output:
 * ten: 2
 * Teo: 2
 * ban: 1
 * ...
 * 
 */

const givenStr = "Hey, tui ten Teo, ban cung ban cung ten Teo ah?";
let individualWords = givenStr.split(" ");
console.log(individualWords);
const returnedGroupWord = groupWordMap(givenStr);
console.log(returnedGroupWord);

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