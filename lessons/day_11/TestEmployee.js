const Employee = require("./Employee");
const SalaryController = require("./SalaryController");
//const SalaryController = require("./SalaryController");

// Data
const teo  = new Employee(50);
const ti = new Employee(40);

// Controller
const salaryController = new SalaryController();
const totalSalary =  salaryController.getTotalSalary([teo,ti]);

// View
console.log(totalSalary);

