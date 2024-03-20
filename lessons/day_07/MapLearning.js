// CRUD | Create read update delete

let emergencyList = new Map();
emergencyList.set('113', 'Police Dept');
emergencyList.set('114', 'Fire Dept');
emergencyList.set('115', 'Hospital Dept');
emergencyList.set('116', 'Others Dept');

// Read a single value
console.log(emergencyList.get('113'));
console.log(`Is 113 key existing?: ${emergencyList.has('113')}`);

// Loop the map's entried via key
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

// Loop the map's entried via values
for (const value of emergencyList.values()) {
    console.log(`value: ${value}`);
}

console.log("=== Iterator | keys ====");
console.log(Array.from(emergencyList.keys())[0]);
// Number(string) -> Number
// Array.from(IterableIterator) -> array)
emergencyList.delete('116');
console.log(`Map size: ${emergencyList.size}`);
printTheMap(emergencyList);
console.log(emergencyList);

function printTheMap(emergencyList){
    for (const key of emergencyList.keys()) {
        console.log(`${key}: ${emergencyList.get(key)}`);
    }
}