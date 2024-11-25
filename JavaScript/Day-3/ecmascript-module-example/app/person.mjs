console.log('Person Module Started!');
export default class Person{
    constructor(){
        console.log(`Person class Constructor Executed!`);
    }
    firstName;
    lastName;
    city;
}
console.log('Person Module Loaded!');