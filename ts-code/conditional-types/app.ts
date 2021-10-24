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

type a1 = 10 extends number ? true : false // true
type a2 = number extends 20 ? true : false //  false
type a3 = Array<string> extends any ? true : false //  true
type a4 = Array<string> extends object ? true : false //  true
type a5 = Array<string> extends Record<string, string> ? true : false //  false
