import * as pointFree from "../generics/point-free"

jest.spyOn(pointFree, "makeTuple")

describe("makeTuple", () => {
  test("should create a new tuple", () => {
    const t1 = pointFree.makeTuple(true)("hello")
    expect(t1[0]).toBe(true)
    expect(t1[1]).toBe("hello")
    expect(pointFree.makeTuple).toHaveBeenCalled()
  })
})
