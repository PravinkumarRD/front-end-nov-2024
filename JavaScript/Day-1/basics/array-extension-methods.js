const values1 = new Array(100);
console.log(values1.length);

const values2 = Array.of(100);
console.log(values2.length);

const Amounts = [450, 340, 780, 670];

console.log(Amounts.find((value) => value > 600));

const afterDiscount = Array.from(
  Amounts,
  function (amt) {
    return (amt = amt - (amt * this.discount) / 100);
  },
  {
    discount: 12,
  }
);

console.log(afterDiscount);
console.log(Amounts);
console.log(Amounts.fill(10, -2, 6));

const myArray = [1, 2, 3, 4, 5];
myArray.fill(-1, 1, 3);
console.log(myArray); // Output: [1, -1, -1, 4, 5]