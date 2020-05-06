function identity<T>(arg: T): T {
  return arg;
}

const x = identity<string>('apa');
const xs = identity<number>(2);

const giveMeLast = <T>(arr: Array<T>): T => arr[arr.length - 1];

const l1 = giveMeLast<number>([1, 2, 3, 4]);
const l2 = giveMeLast<string>(['jon', 'tina', 'monkey', 'kiwi']);

console.log(l1, l2);
