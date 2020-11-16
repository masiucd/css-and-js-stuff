interface IPerson {
  name: string
  age: number
  friends: string[]
}

const getPersonKey = <K extends keyof IPerson>(person: IPerson, key: K) => {
  return person[key]
}

const jim: IPerson = {
  name: "jim",
  age: 21,
  friends: ["bob", "aleks", "tina"],
}

const getJim = getPersonKey(jim, "name")
console.log(getJim)

type PeronKeys = keyof IPerson
type JimType = typeof jim

type EventualType<T> = T extends infer R ? R : T
type Unpromisify<T> = T extends Promise<infer R> ? R : T

type T1 = EventualType<{ b: string }>
