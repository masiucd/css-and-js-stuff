# Conditional types

Works like a ternary operator but for types.
Conditional types allow for types to be expressed using a very similar (basically, the same) syntax

```js
isMonday ? "Boooo" : "Yeaaahhh"
```

```ts
class Dog {
  eat() {}
  poop() {}
}

class Cat {
  drink() {}
}

type TypeOfAnimal<T> = T extends "doggie" ? Dog : Cat

let animal1: TypeOfAnimal<"doggie"> // dog
let animal2: TypeOfAnimal<"not_a_dog"> // cat
```

You probably notice the extends keyword in the condition.
As of TypeScript v4.3, is the only mechanism of expressing any kind of condition.
You can think of it kind of like a >= comparison.
I like to think of at that is should be at least of this type, it not a equality check.

```ts
type a1 = 10 extends number ? true : false // true
type a2 = number extends 20 ? true : false //  false
type a3 = Array<string> extends any ? true : false //  true
type a4 = Array<string> extends object ? true : false //  true
type a5 = Array<string> extends Record<string, string> ? true : false //  false
```

the a3 is intreating while e can think about it like this:
With all types of string arrays fit into any type in javascript...?
Yes it does!!

## Extra Excluded Types

> We’re Extracting the subset of FavoriteColors that is assignable to string

```ts
// a set of four specific things
type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | {red: number; green: number; blue: number}

// Give us just the strings
type StringColors = Extract<FavoriteColors, string>
// minimum retirement
type ObjectColors = Extract<FavoriteColors, {red: number}>
type TupleColors = Extract<FavoriteColors, [number, number, number]>
```

Exclude is the opposite of Extract, in that it’s useful for obtaining the part of a type that’s not assignable to some other type

```ts
type NonStringColors = Exclude<FavoriteColors, string>
```
