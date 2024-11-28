console.log('Main Module Started!');

import * as BajajMath from './app/basic-math';

import e1 from "./app/employee";
import e2 from "./app/employee";

console.log(`Addition is ${BajajMath.addition(1000, 2000)}`);
console.log(`Multiplication is ${BajajMath.multiplication(100, 200)}`);
console.log(`Subtraction is ${BajajMath.subtraction(8000, 2000)}`);
console.log(`Square of 78 is ${BajajMath.square(78)}`);

e1.firstName = "Manish";
e1.lastName = "Sharma";
e1.city = "London";

console.log(e1.getPersonBiodata());
console.log(e2.getPersonBiodata());

console.log('Main Module Ended!');