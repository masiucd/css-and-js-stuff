const intersperse = <T>(list: readonly T[], separator: T): T[] => {
  const finalList: T[] = []
  for (const x of list) {
    if (list.length !== 0) {
      finalList.push(separator)
    }
    finalList.push(x)
  }
  return finalList
}

const list: readonly string[] = ["A", "B", "C"]
const sameSameBuDifferent: ReadonlyArray<string> = ["A", "B", "C"]

const listWithSeparator = intersperse(list, "*****")
const sameSameBuDifferentListWithSeparator = intersperse(sameSameBuDifferent, "X")

// console.log(listWithSeparator)
// console.log(sameSameBuDifferentListWithSeparator)
