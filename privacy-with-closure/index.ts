function makeCounter() {
  // count is now private
  let count = 0
  return {
    get count() {
      return count
    },
    increment() {
      count++
    },
    decrement() {
      if (count > 0) {
        count--
      }
    },
  }
}

// const c = makeCounter()
// c.increment()
// c.increment()
// c.increment()
// c.increment()
// console.log(c.count)
