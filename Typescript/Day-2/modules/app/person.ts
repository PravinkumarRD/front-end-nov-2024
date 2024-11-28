console.log('Person Module Started!');

export default abstract class Person {
    constructor(public firstName?: string, public lastName?: string, public city?: string) {
        console.log(`Person class constructor executed!`);
    }
    getPersonBiodata(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}

console.log('Person Module Ended!');