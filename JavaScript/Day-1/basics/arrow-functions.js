const Employee = {
  employeeId: 3489,
  employeeName: "Manish Kaushik",
  city: "Bangalore",
  printEmployeeInfo: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(
        "Employee " + this.employeeName + " Lives in city " + this.city
      );
    }, 2000);
  },
};
//Employee.printEmployeeInfo();

// function logger() {
//   console.log(`Bajaj Logger Time - ${new Date()}`);
// }

const logger = () => console.log(`Bajaj Logger Time - ${new Date()}`);

logger();

// function square(num) {
//   return num * num;
// }
const square = (num) => num * num;
console.log(square(78));

const salesNetProfit = (cogs, expense, actualSales, gstPercent = 0) => {
  const gstAmount = (actualSales * gstPercent) / 100;
  return actualSales - (cogs + expense + gstAmount);
};

console.log(
    `Bajaj Sales Net Profit without GST is INR ${salesNetProfit(
      12000,
      13000,
      150000
    )}/-`
  );
  console.log(
    `Bajaj Sales Net Profit with 18% GST is INR ${salesNetProfit(
      12000,
      13000,
      150000,
      18
    )}/-`
  );