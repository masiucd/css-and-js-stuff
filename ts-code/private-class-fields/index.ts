class Human {
  #name: string
  #age: number

  constructor(name: string, age: number) {
    this.#name = name
    this.#age = age
  }

  get name(): string {
    return this.#name
  }
  get age(): number {
    return this.#age
  }

  birthday(): void {
    this.#age++
  }

  identity(): string {
    return `Hello I am ${this.#name} and am ${this.#age} years old`
  }
}

const bobby = new Human("bobby", 22)

// console.log(bobby.identity())
