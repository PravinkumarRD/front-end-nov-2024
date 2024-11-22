//ECMAScript 2015/ES6

//Block level scoping let and const
//Hoisting in TDZ
//Re-declaration within the same scope is not allowed

{
  let companyName = "Bajaj";
}
// console.log(companyName);

if (true) {
  let num1 = 1000;
}
//console.log(num1);
for (let i = 0; i < 5; i++) {
  //some loic
}
//console.log(i);
//console.log(myFriend);//Let varaibles are hoisted in TDZ - Temporal Dead Zone
let myFriend = "Alisha C.";
console.log(myFriend);

{
  let n1 = 100;
}
var n1 = 200;

const PI = 3.14;

const Offices = ["Bangalore", "Pune", "Hyderabad"];
Offices.push("Chennai");
console.log(Offices);
Offices = [];
