// class Person {
//     firstName: string;
//     lastName:string;
//     city: string;
//     getPersonInfo(): string {
//         return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
//     }
// }

// class Person {
//     constructor(fname: string, lname: string, city: string) {
//         this.firstName = fname;
//         this.lastName = lname;
//         this.city = city;
//     }
//     firstName: string;
//     lastName: string;
//     city: string;
//     getPersonInfo(): string {
//         return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
//     }
// }
// class Person {
//     constructor(public firstName?: string, public lastName?: string, public city?: string) {

//     }
//     #_socialId: string;
//     getPersonInfo(): string {
//         return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
//     }
// }

abstract class Person {
    constructor(public firstName?: string, public lastName?: string, public city?: string) {
        console.log('Abstract Class Constructor Executed!');
    }
    address: string;
    private _socialId: number;
    get socialId(): number {
        console.log('GET - Accessor Executed!');
        return this._socialId;
    }
    set socialId(value: number) {
        console.log('SET - Accessor Executed!');
        if (!value || value <= 0)
            throw new Error("Social Id can not be zero or less than zero!");
        this._socialId = value;
    }
    getPersonInfo(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!His/Her social Id is ${this.socialId}!`;
    }
    abstract changeAddress(socialId: number, oldAddress: string, newAddress: string): boolean;
}

//Customer IS-A Person

class Customer extends Person {
    changeAddress(socialId: number, oldAddress: string, newAddress: string): boolean {
        console.log(`Customer ${this.firstName} ${this.lastName} has changed his/her address from ${oldAddress} to ${newAddress}!`);
        return true;
    }

}

//const p1: Person = new Person("Pravinkumar", "R. D.", "Pune");
const p1: Customer = new Customer();
p1.address = "MoonCity, A8/404";
p1.socialId = 1000238923;
p1.firstName = "Alisha";
p1.lastName = "C.";
p1.city = "Mumbai";
console.log(p1.getPersonInfo());
console.log(p1.changeAddress(p1.socialId, p1.address, "Suncity, A8/404"));

console.log(typeof (Person));

class BaseSales {
    getItGstValue(): number {
        return 18;
    }
    salesNetProfit(cogs: number, expense: number, actualSales: number): number;
    salesNetProfit(cogs: number, expense: number, actualSales: number, gstPercent: number): number;
    salesNetProfit(value1: number, value2: number, value3: number, value4?: number): number {
        if (!value4) {
            return value3 - (value1 + value2);
        }
        const gstAmount: number = value3 * value4 / 100;
        return value3 - (value1 + value2 + gstAmount);
    }
}
class UsaSales extends BaseSales {
    getItGstValue(): number {
        return 30;
    }
}

//const sales: BaseSales = new BaseSales();
//console.log(`Sales Net Profit without Gst is INR ${sales.salesNetProfit(12000, 13000, 150000)}/-`);
//console.log(`Sales Net Profit with 18% Gst is INR ${sales.salesNetProfit(12000, 13000, 150000, 18)}/-`);
const sales: BaseSales = new UsaSales();
console.log(sales.getItGstValue());

class Parent {
    private a: number;
    protected b: number;
    public c: number;
}
class Child extends Parent {
    private x: number;
    protected y: number;
    public z: number;
}
//Multiple Inheritance in Classes is not supported
//class GrandChild extends Child,Parent{
class GrandChild extends Child {
    constructor() {
        super();
    }
    id: number;
}

const gc: GrandChild = new GrandChild();


class Counter {
    static count: number = 1;
    constructor() {
        console.log(`Counter Object Number is ${Counter.count++}`);
    }
    static getCurrentCounterValue():number{
        return Counter.count;
    }
}

new Counter();
new Counter();
new Counter();
new Counter();
console.log(Counter.getCurrentCounterValue());