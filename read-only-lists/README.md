# Readonly Lists

```ts
const alpha: readonly string[] = ["A", "B", "C"]
const alpha2 = ["A", "B", "C"] as const

alpha.push("D") // we cant push new items to the list to the array
alpha2.push("D") // we cant push new items to the list to the array
```
