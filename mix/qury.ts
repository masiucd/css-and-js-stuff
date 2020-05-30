interface Task {
  readonly id: string;
  text: string;
  completed: boolean;
}

const myTask: Task = {
  id: "22#@!2kkksa@@",
  text: "go out with the dog",
  completed: false,
};

// keyof Task
function foo<T, K extends keyof T>(data: T, key: K): T[K] {
  return data[key];
}

let res1 = foo(myTask, "text");
let res2 = foo(myTask, "id");
let res3 = foo(myTask, "completed");

console.log(res1, res2, res3);
