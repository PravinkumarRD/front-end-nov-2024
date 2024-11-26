const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task-1 is Completed Successfully!");
    //reject("Task-1 Failed!");
  }, 1000);
});
const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Task-2 is Completed Successfully!");
    reject("Task-2 Failed!");
  }, 4000);
});
const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task-3 is Completed Successfully!");
    //reject("Task-3 Failed!");
  }, 2000);
});

// Promise.all([task3, task1, task2]).then(
//   (values) => console.log(values),
//   (reason) => console.log(reason)
// );

// Promise.race([task3, task1, task2]).then(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );

// Promise.any([task3, task1, task2]).then(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );

Promise.allSettled([task3, task1, task2]).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
