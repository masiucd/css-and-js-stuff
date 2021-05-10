type Dict<T> = {
  [key: string]: T
}

export const mapDict = <T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> => {
  const output: Dict<S> = {}

  Object.keys(dict).forEach((dKey, index) => {
    if (typeof dict[dKey] !== "undefined") {
      output[dKey] = fn(dict[dKey], index)
    }
  })

  return output
}

let md1 = mapDict(
  {
    a: "a",
    b: "b",
  },
  s => [s.toUpperCase()]
)

const reduceDict = <T>(dict: Dict<T>) => {
  //
}
