function isInteger(value: unknown, name: string): asserts value is number {
  if (typeof value !== "number") {
    throw new TypeError(`Expected ${name} to be number`)
  }
}
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) throw new TypeError(message)
}

function range(from: number, to: number): number[]
function range(from: unknown, to: unknown): number[] {
  isInteger(from, "from")
  isInteger(to, "to")
  const resultList = []
  for (let i = from; i <= to; i++) {
    resultList.push(i)
  }
  return resultList
}

console.log(range(23, 222))
