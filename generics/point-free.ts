type StringOreNumber = string | number

interface FileExtension<T> {
  [key: string]: T[]
}

const fileExt: FileExtension<StringOreNumber> = {
  ts: ["ts"],
  js: ["js"],
  jpeg: ["jpg", "jpeg"],
  html: ["html", "html"],
  someRandom: [2, "html"],
}

export const makeTuple = <T>(a: T) => <X>(b: X) => [a, b] as [T, X]

const tuple1 = makeTuple(true)("legia")

const tuple2 = makeTuple(fileExt.ts[0])(fileExt.html[1])
