//All these examples are for ECMAScript 5/ES5

//function, IIFE, namespace, clouser
//Block Level Scoping is not supported
//Variables and Functions declaration are hoisted
//Re-declaration is allowed within the same scope
/*
console.log(getHrMessage);
{
  var companyName = "Bajaj Pvt. Ltd.";
  var num1 = 100;
}
num1 = "Pravin";
console.log(num1);
//200
var result = num1 + 9000;
console.log(result);

if (true) {
  var company = "Microsoft India";
}
console.log(company);
for (var i = 0; i < 5; i++) {
  //some logic
}
console.log(i);

console.log(myFriend); //Hoisting
var myFriend = "Alisha C.";

var getHrMessage = function () {
  return "Welcome To Bajaj Bangalore ODC!";
};

var n1 = 100;
var n1 = "900";
console.log(n1);

var Customer = {
  customerId: 2389,
  contactName: "Manish Sharma",
  city: "Pune",
};
//Customer with Id 2389 and Name Manish Sharma lives in city Pune!
console.log("Customer with Id " + Customer.customerId + " and \n\tName " + Customer.contactName + " lives in city " + Customer.city + "!");
console.log("Customer with Id %d and Name %s lives in city %s!",Customer.customerId,Customer.contactName,Customer.city);

console.log(getCustomerInfo());

function getCustomerInfo(){
  //return ("Customer with Id " + Customer.customerId + " and \n\tName " + Customer.contactName + " lives in city " + Customer.city + "!");
  return ("Customer with Id %d and Name %s lives in city %s!",Customer.customerId,Customer.contactName,Customer.city)
}


var Companies = ["Bajaj", "Google", "Microsoft", "Amazon", "Infosys"];

for (let index = 0; index < Companies.length; index++) {
  if (Companies[index] === "Amazon") break;
  console.log(Companies[index]);
}
console.log("");
Companies.forEach(function (city) {
  //if (city === "Amamzon") return;
    console.log(city);
});


// function addition(num1, num2) {
//   return num1 + num2;
// }
// function addition(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// function addition(num1) {
//   return 100 + num1;
// }

// function addition() {
//   if(arguments.length===0) return 1000;
//   if(arguments.length===1) return 100 + arguments[0];
//   if(arguments.length===2) return arguments[0] + arguments[1];
//   if(arguments.length===3) return arguments[0] + arguments[1] + arguments[2];
// }

function addition(num1, num2) {
  if (!num1) num1 = 10;
  if (!num2) num2 = 20;
  if (arguments.length === 3) return num1 + num2 + arguments[2];
  return num1 + num2;
}
console.log(addition());
console.log(addition(100));
console.log(addition(100, 200));
console.log(addition(100, 200, 300));
  */

var Employee = {
  employeeId: 3489,
  employeeName: "Manish Kaushik",
  city: "Bangalore",
  printEmployeeInfo: function () {
    console.log(this);
    setTimeout(function () {
      console.log(this);
      console.log(
        "Employee " + this.employeeName + " Lives in city " + this.city
      );
    }.bind(this), 2000);
  },
  // printEmployeeInfo: function () {
  //   var _self = this;
  //   console.log(_self);
  //   setTimeout(function () {
  //     console.log(_self);
  //     console.log(
  //       "Employee " + _self.employeeName + " Lives in city " + _self.city
  //     );
  //   }, 2000);
  // },
};

Employee.printEmployeeInfo();
