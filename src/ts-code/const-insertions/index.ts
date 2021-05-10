const PERSON = {
  name: "Bob",
  age: 33,
} as const

// PERSON.age = 33 -----> NOT OK !!!

const IMMUTABLE_PERSON = Object.freeze({
  name: "Bob",
  age: 33,
} as const)
