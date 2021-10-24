type Overload = string | Array<number | string>;

function reverse(val: Overload): Overload {
  return Array.isArray(val)
    ? [...val].reverse()
    : val
        .split('')
        .reverse()
        .join('');
}

const reversedString = reverse('hello world');
const reversedArray = reverse([1, 2, 3, 4, 5]);

// console.log(reversedArray, reversedString);
export { reverse, Overload, reversedString, reversedArray };
