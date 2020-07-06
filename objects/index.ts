interface Dog {
  name: string;
  breed: string;
  age: number;
}

type DogKeys = keyof Dog;

/**
 * This will give us a auto complete
 * can  'Name' | 'Breed' | 'Age'
 */
let key1: DogKeys = 'name'; // 'Name' | 'Breed' | 'Age'

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
