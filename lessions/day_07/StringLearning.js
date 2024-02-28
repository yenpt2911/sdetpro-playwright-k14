let myString = ' abc12345 ';
console.log(myString);

// Length
const myStringLength = myString.length;
console.log(myStringLength);

// Get a character at a position
for (let index = 0; index < myStringLength; index++){
    console.log(typeof myString.charAt(index));
}

// Get rid of space at start and the end
console.log(myString.trim().length);

//Replace
let tobeReplaceStr = "Tmomi mnay gmap mnmhau 7h";
// /g -global, /i insensitive
console.log(tobeReplaceStr.replace(/M/gi,""));

let containNumStr = "200mins";
let num  = containNumStr.replace(/[^0-9]/gi,"");
console.log(num);
// Backstick | String template
let anotherVar = "567890-";
console.log(`typeof num: ${checkTypeOf(num)}${anotherVar}`);
console.log(Number(num) + 1);

// Concatention / concat
console.log("Hello, ".concat("Tui ten Teo!")+", how are you?");

function checkTypeOf(sth){
    return typeof sth;
}

// Substring
let strToBeCut = 'https://sdetpro.com';
const startIndex = 8;
const endIndex = 18;
console.log(strToBeCut.substring(startIndex, endIndex));

// substr, slice
getDomainName("https://sdetpro.com");
console.log(getDomainName("https://sdetpro.com"));
function getDomainName(url){
    let domain;
    // Logic go here
    const indicator = "://";
    const indexOfIndicator = url.indexOf(indicator);
    if(indexOfIndicator < 0){
        throw Error(`Invalid url, provided url was: ${url}`);
    }
    const domainStartIndex = indexOfIndicator + indicator.length;
    domain = url.substring(startIndex).replace(/\//gi, "");
    return domain
}

// Split
let googleUrl = "https://google.com";
console.log(googleUrl.split("://"));
