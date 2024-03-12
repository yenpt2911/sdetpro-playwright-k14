class Employee {

    constructor(salary){
        this._validateSalary(salary);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._validateSalary(salary);
        this._salary = salary;
    }

    // Support method
    _validateSalary(salary){
        if(salary <= 0){
            throw new Error("Salary must be greater than 0");
        }
    }

    // Service method

}

module.exports = Employee;