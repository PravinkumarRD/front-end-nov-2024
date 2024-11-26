function task1() {
  console.log("Task-1 Started!");
  setTimeout(() => {
    return "Task-1 is processed and Completed!";
  }, 2000);
  console.log("Task-1 Ended!");
}

const result = task1();
console.log(result);
