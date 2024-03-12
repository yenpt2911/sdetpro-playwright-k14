const Person = require("./Person");
const teo = new Person("Teo", 18);
console.log(teo.age);
console.log(teo.name);  // call to getter
teo.name = "Teo dep trai"; // call to setter
console.log(teo.name);

/**
 * Data model: class (methods) - 00 (1)
 * Process Data Model (functions) - Functional Programing (2)
 * Requester to process datamodel: Contruct data, call (2) to process data
 * 
 * MVC - Model View Controller
 */