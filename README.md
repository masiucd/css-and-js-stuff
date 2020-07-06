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
