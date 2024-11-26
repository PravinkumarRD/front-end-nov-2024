//Generator Function
// function* generateOrderNumbers() {
//   yield 1001;
//   yield 1002;
//   yield 1003;
// }
function* generateOrderNumbers(startNumber, endNumber, stepUp = 4) {
  // logic
  while (startNumber < endNumber) {
    yield (startNumber += stepUp);
    console.log(startNumber);
  }
}
// const v1 = generateOrderNumbers();
// console.log(v1.next());
// console.log(v1.next());
// console.log(v1.next());
// console.log(v1.next());
for (const value of generateOrderNumbers(0, 30)) {
  console.log(value);
}
