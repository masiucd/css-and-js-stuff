import * as dictionary from "../generics/dictionary"

jest.spyOn(dictionary, "mapDict")

describe("dictionary", () => {
  test("should create a map with string arrays", () => {
    const md = dictionary.mapDict(
      {
        a: "a",
        b: "b",
      },
      s => [s.toUpperCase()]
    )

    expect(md.a[0]).toBe("A")
    expect(md.b[0]).toBe("B")

    expect(dictionary.mapDict).toHaveBeenCalled()
  })
})
