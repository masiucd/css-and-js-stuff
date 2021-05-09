const swapTuple = <T, U>(tuple: readonly [T, U]): [U, T] => {
  const [first, second] = tuple
  return [second, first]
}

const t: readonly [string, number] = ["Ice cream", 45]
const swappedT = swapTuple(t)
// console.log(t)
// console.log(swappedT)
