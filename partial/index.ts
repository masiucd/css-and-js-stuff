interface Numbers {
  a: number
  b: number
}

type HasThen<T> = Pick<Promise<T>, "then" | "catch">

let hasThen: HasThen<number> = Promise.resolve(24)
hasThen.then

const nums: Numbers = { a: 1, b: 2 }

type OneOreThree = Pick<Numbers, "a">

let oneOreThree: OneOreThree

type UserType = {
  name: string
  age: number
  gender: "M" | "F"
}

type PartialUser = Partial<UserType>

const user: PartialUser = {
  name: "Bob",
  age: 45,
}
