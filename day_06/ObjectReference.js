let teo = {
    name: "Teo",
    myAge: 18,
    bankAccount: {
        accountNum: "1122334455",
        balance: 10000000
    }
};

// Shallow copy - spread syntax
// Just copy one level . For example: name, myAge, not copy bankAccount.accountNum
/*let ti = {...teo}
ti.name = "ti";
ti.bankAccount.accountNum = "6677889910";

console.log(teo);
console.log(ti);
**/

// Shallow copy - Hanle for nested object, array.. {NOT for function, cicular reference}
/*
let min = JSON.parse(JSON.stringify(teo)); // Convert object teo to string and then convert to object with JSON.parse
min.name = "min";
min.bankAccount.accountNum = "6677889910";

console.log(teo);
console.log(min);

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let mergeArr = [...arr1, ...arr2]
console.log("This is merge array: ",  mergeArr);
**/

// Object.keys(targetObject)
console.log("This is object key: ", Object.keys(teo));

// Object.values(targetObject)
console.log("This is object values: ", Object.values(teo));

// Object.entries(targetObject)
console.log("This is object entries: ", Object.entries(teo))

