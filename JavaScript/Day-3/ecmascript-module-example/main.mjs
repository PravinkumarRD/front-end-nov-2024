console.log("Main Module Started!");

//import { addition,division,multiply,subtraction } from "./app/basic-math.mjs";
import * as BajajMath from "./app/basic-math.mjs";

console.log(`Addition is ${BajajMath.addition(100, 200)}`);
console.log(`Multiplication is ${BajajMath.multiply(100, 200)}`);
console.log(`Division is ${BajajMath.division(800, 200)}`);
console.log(`Subtraction is ${BajajMath.subtraction(500, 200)}`);

console.log(`Sqaure from Main - ${BajajMath.square(17)}`);

//import Employee from './app/employee.mjs';

import e1 from "./app/employee.mjs";
import e2 from "./app/employee.mjs";

// const e1 = new Employee();
e1.firstName = "Manish";
e1.lastName = "Sharma";
e1.city = "Pune";
e1.employeeId = 23992;

e2.city = "Delhi";

console.log(e1.getEmployeeProfile());

// const e2 = new Employee();
// e2.firstName = "Alisha";
// e2.lastName = "C.";
// e2.city = "Mumbai";
// e2.employeeId = 25611;

console.log(e2.getEmployeeProfile());
console.log("Main Module Loaded!");
