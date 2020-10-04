function generateId(val: number | string) {
  return typeof val === "number" ? val + 10 : Number(val) + 10;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type ID = FnReturnType<typeof generateId>;

lookupEntity(lookupEntity(22));
lookupEntity(generateId("56"));

function lookupEntity(id: ID) {
  return id;
}

interface Foo {
  name: string;
  cool: boolean;
  age: number;
  getName: () => string;
}
