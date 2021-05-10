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
let key1: DogKeys = "name"; // 'Name' | 'Breed' | 'Age'

export function foo<T, K extends keyof T>(obj: T, key: K) {
  // console.log(obj[key]);
  return obj[key];
}

let person = {
  name: "MIKE",
  age: 21,
  cool: true,
};

let tina: typeof person = {
  name: "Tina",
  age: 22,
  cool: false,
};

let dogsList = ["Boris", "Yohi", "Lina", "Bobo", "Karol"] as const;

type Dog2 = typeof dogsList[number];

const lina: Dog2 = "Lina";
const boris: Dog2 = "Boris";

let teams = [
  {
    name: "Legia",
    ultras: "zyleta",
  },
  {
    name: "ifk",
    ultras: "anglarna",
  },
] as const;

type Team = keyof typeof teams;
type TeamName = typeof teams[number]["name"];

let arrayMethods: Team = "filter";
let ifk: TeamName = "ifk";
let legia: TeamName = "Legia";

// console.log(ifk, legia);

// foo(person, 'name');
// foo(person, 'age');
// foo(person, 'cool');
