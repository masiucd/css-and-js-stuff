# Typescript Land λ😎🌮

Useful code examples how you could use Typescript and how they actually works.

### What This Repo will cover ⚛️🥕

* Generics 🏋️‍♀️
* interfaces 💎
* Constrains 💥
* basic typings 💈
* overload 𝐦
* enums 🍎
* functions λ

Generics Example

``` typescript

  interface Dog {
    name: string;
    breed: string;
    age: number;
  }

/**
 * This will give us a auto complete
 * can  'Name' | 'Breed' | 'Age'
 */
  type DogProps = keyof Dog

  function foo<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
  }

```

If there are any questions you could contact me on my Twitter <a href="https://twitter.com/CiszekMarcell" style="color: rgba(40, 53, 147, 1)"> MarcellCiszek </a>

<br/>

## get types

``` ts
const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

type D = typeof initialData;

const list = ["hello", "good bye"];
const list2 = ["hello", "good bye"];
const list3 = ["hello", "good bye"] as const;

type ListType = typeof list;
type ListType2 = typeof list2[number];
type ListType3 = typeof list3[number];

const countries = [
  {
    country: "pl",
    language: "Polish",
  },
  {
    country: "se",
    language: "Swedish",
  },
] as const;

type Country = typeof countries[number]["country"];
type CountryLang = typeof countries[number]["language"];

const currencySymbols = {
  GBP: "£",
  USD: "$",
  EUR: "€",
};

type Currency = typeof currencySymbols;
type Currency2 = keyof typeof currencySymbols;

const foo = ["text 1", "text 2"] as const;
// is the same as
// This will fail in React!!!
const bar = <const>["text 1", "text 2"];

```
