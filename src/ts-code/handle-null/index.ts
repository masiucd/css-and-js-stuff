function assertIsNonNull<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new TypeError(message)
  }
}

let root = document.getElementById("root")
assertIsNonNull(root, "Could not find DOM element of type null")

root.innerHTML = `<div>
  <h1>Hello world</h1>
</div>`
