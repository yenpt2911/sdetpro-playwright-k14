class MethodOverloading {

    static add(a, b) {
        return a + b;
    }

    static add(a, b, c) {
        return a + b + c;
    }

    // JS:  Rest parameters: JS not support overloading but can use rest parameters
    static add(...nums) {
        return nums;
    }

    static divide(a, b) {
        // not 2 params, second param is 0
        if (arguments.length != 2) {
            throw new Error("Must provide 2 numbers!!");
        }
        if (b === 0) {
            throw new Error("Can't devide by zero");
        }
        return a / b;
    }
}

const addResult = MethodOverloading.divide(2, 2);
console.log(addResult);

module.exports = MethodOverloading;