/**
 * fooPosition,  barPosition, mergedPosition
 * while(fooStillHasElement && barStillHasElement)
 * if(fooValue < = barValue){
 *  merge[mergedPosition] = fooValue
 *  mergedPosition++
 *  fooPosition++
 * }
 * else {
 *  merge[mergedPosition] = barValue
 *  mergedPosition++
 *  barValue++
 * }
 * while(fooStillHasElement)
 *  put into foo's element into merge array
 * 
 * while(barStillHasElement)
 *  put into bar's element into merge array
 */

const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const merge = [];

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergedPosition = 0;

while(fooPosition < fooLength && barPosition < barLength){
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if(fooValue <= barValue){
        merge[mergedPosition] = fooValue;
        mergedPosition++;
        fooPosition++;
    } else {
        merge[mergedPosition] = barValue;
        mergedPosition++;
        barPosition++;
    }
}

while(fooPosition < fooLength){
    merge[mergedPosition++] = foo[fooPosition++];
}

while(barPosition < barLength){
    merge[mergedPosition++] = bar[barPosition++];
}

console.log("foo array: ", foo);
console.log("bar array: ", bar);
console.log("Merge array: ", merge);