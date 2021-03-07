type FlatIFList<T> = T extends (infer R)[] ? R : T
type UnWrappedPromise<T> = T extends Promise<infer R> ? R : T
type ReturnTypeFn<T> = T extends (...args: any[]) => infer R ? R : T

// This is great but let's use the infer keyword to really make it more powerful
type isXs<T> = T extends Array<any> ? "oui" : "no"
type WithXs = isXs<string[]> // oui
type WithNoXs = isXs<string> // no

type UnBoxXs<T> = T extends Array<infer R> ? R : T
type WithUnBoxXs = UnBoxXs<string[]> // from string[] to string
type WithNoUnBoxXs = UnBoxXs<number> // just number

type GetXsType<T> = T extends Array<infer R> ? R[] : T
type StringArrayType = GetXsType<string[]> // string[]
type JustString = GetXsType<string> // just string

const compose = (...fns: any[]) => (x: any) => fns.reduceRight((val, fn) => fn(val), x)

const ob = {
  name: "bob",
  lastName: "frankis",
  age: 45,
}
