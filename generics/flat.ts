const numbers = [1, 2, 3, 4, 5, 6, 7];

const somePerson = {
  id: 222,
  name: "Boris",
};

const bool = true;

type Flatten<T> = T extends any[]
  ? T[number]
  : T extends object
  ? T[keyof T]
  : T;

type xsFlatten = Flatten<typeof numbers>;
type objFlatten = Flatten<typeof somePerson>;
type boolFlatten = Flatten<typeof bool>;
