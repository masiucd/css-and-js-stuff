/* eslint-disable no-shadow */
function identity<T>(arg: T): T {
  return arg;
}

const x = identity<string>('apa');
const xs = identity<number>(2);

const giveMeLast = <T>(arr: Array<T>): T => arr[arr.length - 1];

const l1 = giveMeLast<number>([1, 2, 3, 4]);
const l2 = giveMeLast<string>(['jon', 'tina', 'monkey', 'kiwi']);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const tuple1 = makeTuple(1, 2);
const tuple2 = makeTuple('baaz', 'foo');
const tuple3 = makeTuple(1, '2');
const tuple4 = makeTuple<string, boolean>('3', true);

// console.log(tuple1, tuple2, tuple3, tuple4);


const makeFullname = <T extends { first: string, last: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.first + " " + obj.last

  }
}


console.log(makeFullname({ first: 's', last: 's', age: 22 }))
