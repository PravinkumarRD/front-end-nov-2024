const Employee = {
    employeeId: 2393,
    employeeName: 'Alisha C.',
    city: 'Mumbai',
    printEmployeeInfo: function () {
        setTimeout(() => {
            console.log(`Employee ${this.employeeName} lives in city ${this.city}!`);
        }, 2000);
    }
};
//Employee.printEmployeeInfo();
const msg = () => console.log(`The log time is ${new Date()}!`);
msg();
const square = (num) => num * num;
console.log(square(67));
const bajajSalesProfit = (cogs, expense, actualSales, gstPercent = 0) => {
    const gstAmount = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
};
//# sourceMappingURL=arrow-functions.js.map