// Object Literal - Use to construct DATA object
// Create

let teo = {
    name: "Teo",
    "my age": 18
};

// Read: dot notation, [] syntax
console.log(teo.name);
console.log(teo["my age"]);

// Update:
teo.name = "Tun";
teo["my age"] = 22;
teo.gender = "M";
console.log(teo);


// Delete properties
delete teo["my age"];
console.log(teo);


// Delete object
delete teo;
console.log(teo);