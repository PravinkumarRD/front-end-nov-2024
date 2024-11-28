import Person from "./person";

console.log('Employee Module Started!');

class Employee extends Person{
    constructor(){
        super();
        console.log(`Employee class constructor executed!`);
    }
}

//Singleton Pattern
export default new Employee();
console.log('Employee Module Ended!');