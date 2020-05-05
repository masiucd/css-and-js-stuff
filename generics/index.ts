function identity<T>(arg: T): T {
  return arg;
}

const x = identity<string>('apa');
const xs = identity<number>(2);
console.log(x, xs);
