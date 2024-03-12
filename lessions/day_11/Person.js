// User-defined data
class Person {

    constructor(name, age){
        this._name = name; //_name: private variable
        this._age = age;
    }

    // getter | get the current value of the attribute/property
    get name(){
        return this._name;
    }

    set name(name){
        this._name= name;
    }

    get age(){
        return this._age
    }
}

// Export class:
module.exports = Person;