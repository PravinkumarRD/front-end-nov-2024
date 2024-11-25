console.log("Employee Module Started!");

import BajajPerson from "./person.mjs";

//export default class Employee extends BajajPerson {
class Employee extends BajajPerson {
  constructor() {
    super();
    console.log("Employee Class Constructor Executed!");
  }
  employeeId;
  getEmployeeProfile() {
    return `Employee ${this.firstName} ${this.lastName} lives in city ${this.city} has Id ${this.employeeId}!`;
  }
}

//Singleton pattern
export default new Employee();

console.log("Employee Module Loaded!");
