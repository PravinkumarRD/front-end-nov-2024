const BajajWorkingOffices = ["Bangalore", "Chennai", "Delhi"];

for (const city of BajajWorkingOffices) {
    console.log(city);
}

const finalResult = BajajWorkingOffices[Symbol.iterator]();
console.log(finalResult.next());
console.log(finalResult.next());
console.log(finalResult.next());
console.log(finalResult.next());
