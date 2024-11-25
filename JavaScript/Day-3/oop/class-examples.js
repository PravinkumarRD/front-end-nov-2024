//Syntatic Sugar

class Person {
  #_socialId;
  constructor(fname, lname, city) {
    console.log(`Person Class Constructor called!`);
    this.firstName = fname;
    this.lastName = lname;
    this.city = city;
  }

  firstName;
  lastName;
  city;

  getPersonInfo() {
    return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
  }
}

//Inheritance

//Customer-Is-A-Person

class Customer extends Person {
  constructor(fname, lname, city, customerId) {
    super(fname, lname, city);
    console.log(`Customer Class Constructor called!`);
    this.customerId = customerId;
  }
  customerId;
  getPersonInfo() {
    let baseFuncMessage = super.getPersonInfo();
    return `${baseFuncMessage} and Id is ${this.customerId}!`;
    //return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}! Id of the customer is ${this.customerId}`;
  }
}
//PrimeCustomer Is-A Customer
class PrimeCustomer extends Customer {
  constructor(fname, lname, city, customerId) {
    super(fname, lname, city, customerId);
    console.log(`Prime Customer Class Constructor called!`);
  }
  primeFees = 1499;
}

//const person = new Person("Manish", "Kaushik", "Bangalore");
//const customer = new Customer("Manish", "Kaushik", "Bangalore");
const customer = new PrimeCustomer("Manish", "Kaushik", "Bangalore", 8976);
// customer.firstName = "Alisha";
// customer.lastName = "C.";
// customer.city = "Mumbai";
// customer.customerId = 2902;
console.log(customer.getPersonInfo());
console.log(typeof PrimeCustomer);

//Multi-Level Inheritance

class Parent {}
class Child extends Parent {}
//Multiple inheritance is not supported
//class GrandChild extends Child, Parent{

class GrandChild extends Child {}

//Questions -
//1) How do you make your properties readonly/writeonly?
//2) How do you implement validations to your data members?

//Static members
//Static members will never get re-initialized
//Sharing the data and the logic
//get/set properties

class Employee {
  #_employeeId=23892;

  get employeeId() {
    return this.#_employeeId;
  }
  set employeeId(value) {
    
    if (!value || value <= 0) {
      throw new Error("Employee Id must be greater than 0!");
    }
    this.#_employeeId = value;
    console.log(this.#_employeeId);
  }
}

const e1 = new Employee();
e1.employeeId = 100;
console.log(e1.employeeId);

class Counter {
  static count = 0;
  myName = "";
  constructor() {
    console.log(`Instance number is ${++Counter.count}`);
  }
  static getLatestCount() {
    return Counter.count;
  }
}

new Counter();
new Counter();
new Counter();
new Counter();

console.log(Counter.getLatestCount());
