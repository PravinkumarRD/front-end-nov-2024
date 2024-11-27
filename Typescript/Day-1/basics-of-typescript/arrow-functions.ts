const Employee = {
    employeeId: 2393,
    employeeName: 'Alisha C.',
    city: 'Mumbai',
    printEmployeeInfo: function () {
        setTimeout(() => {
            console.log(`Employee ${this.employeeName} lives in city ${this.city}!`)
        }, 2000);
    }
}

//Employee.printEmployeeInfo();
const msg = (): void => console.log(`The log time is ${new Date()}!`);
msg();
const square = (num: number): number => num * num;
console.log(square(67));
const bajajSalesProfit = (cogs: number, expense: number, actualSales: number, gstPercent: number = 0): number => {
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}

