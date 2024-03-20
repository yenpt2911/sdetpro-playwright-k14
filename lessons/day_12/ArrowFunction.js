// Function declaration

function add(a, b) {
    return a + b;
}

// Arrow function | Function expression
const addArrow = (a, b) => a + b; // meaning return a + b if there is one statement

console.log(addArrow(1));
//console.log(sayHello()); // in here not hosting -> it's not working

// No params
const sayHello = () => {
    console.log("Hello");
}
 console.log(sayHello());  // in here it's working

const intArray = [1, 2, 3, 4, 5];
const filteredArray = intArray.filter(value => value % 2 !== 0);
console.log(filteredArray);

// Destructure/ Destructuring {}
const covertPost = post => new Post(post.id, post.body);

const tempPost = {id: 1, body: "This is post body"}
const covertPost2 = ({ id, body }) => new Post(id, body); // syntax destructure
console.log(covertPost2(tempPost));

// Lexical this binding
const person = {
    name: "Teo",
    sayHello: function () {
        setTimeout(function () {
            console.log(`Hellu, tui ten ${this.name}`);
        }, 1000);
      
    }
}

person.sayHello();