const Companies = ["Bajaj", "Google", "Microsoft", "Amazon", "Infosys"];

for (const city of Companies) {
  if (city === "Amazon") break;
  console.log(city);
}

const result = Companies[Symbol.iterator]();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());