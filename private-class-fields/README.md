# Private fields

When using the private fields in `Typescript` it can show some unexpected behavior.
To really make the fields protected I suggest to use the `#` sign instead.
This will really make it private and gives us the expected behavior as we expect.

```ts
class Thing {
  #name: string
  private age: number

  constructor(name: string, age: number) {
    this.#name = name
    this.age = age
  }

  get thingsAge(): number {
    return this.age
  }
  get myName(): string {
    return this.#name
  }

  setNewName(name: string) {
    this.#name = name
  }
}

const thing = new Thing("bob", 21)

thing["age"] // we can still access the private field
thing["#name"] // we get a compile error! This is a tru private field
```
