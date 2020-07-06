function foo<T, K extends keyof T>(obj: T, key: K) {
  // console.log(typeof obj[key]);

  console.log(key === 'name');
  return obj[key];
}

let person = {
  name: 'MIKE',
  age: 21,
  cool: true,
};
console.log(foo(person, 'name'));
