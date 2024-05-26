export function isEven(n: number) {
  return n % 2 === 0;
}

export function isOdd(n: number) {
  return !isEven(n);
}

export function isDivisibleBy(n: number, divisor: number) {
  return n % divisor === 0;
}
