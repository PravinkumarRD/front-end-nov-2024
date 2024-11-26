function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task-1 is processed and completed!");
      //reject('Found bug in Task-1! Status is incomplete!')
    }, 2000);
  });
}

console.log("Task-1 Started!");
const result = task1();
result.then(
  (value) => console.log(value),
  (reason) => console.log(`Error - ${reason}`)
);
console.log("Task-1 Completed!");
