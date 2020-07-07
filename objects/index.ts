interface Dog {
  name: string;
  breed: string;
  age: number;
  date: Date;
}

type DogKeys = keyof Dog;

/**
 * This will give us a auto complete
 * can  'Name' | 'Breed' | 'Age'
 */
let key1: DogKeys = 'name'; // 'Name' | 'Breed' | 'Age'

export function foo<T, K extends keyof T>(obj: T, key: K) {
  // console.log(obj[key]);
  return obj[key];
}

let person = {
  name: 'MIKE',
  age: 21,
  cool: true,
};

// foo(person, 'name');
// foo(person, 'age');
// foo(person, 'cool');
