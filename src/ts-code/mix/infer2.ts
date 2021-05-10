type IsItANumber<T> = T extends number ? "number" : "other"

type SomeNumber = IsItANumber<number>
type SomeOther = IsItANumber<string>

type IsArray<T> = T extends Array<any> ? "array" : "other"

type SomeArray<T> = IsArray<string[]>
type SomeOtherThing<T> = IsArray<number>

type UnWrapArray<T> = T extends Array<infer Member> ? Member : T
type SomeArrayIfArray<T> = T extends Array<infer Member> ? Member[] : T

type UnwrapIfArray = UnWrapArray<number[]> // number
type UnwrapIfArray2 = UnWrapArray<number> // number

type FooType = SomeArrayIfArray<string[]> // string[]
type BarType = SomeArrayIfArray<string> // string
