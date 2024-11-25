console.log("Basic Math Module Started!");

import { square } from "./advance-math.mjs";

function addition(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}

console.log(`Square of 89 is ${square(89)}!`);

export { addition, subtraction, multiply, division, square };

console.log("Basic Math Module Loaded!");
