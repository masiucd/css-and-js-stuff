import * as numeric from "../mix/numericSeparator";

describe("numeric", () => {
  test("testing class method ", () => {
    let a = new numeric.Amount();
    expect(a.mix()).toBe(99999999999);
  });
});
