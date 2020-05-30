import { autoComplete } from "../mix/types";

describe("testing string types", () => {
  test("should match string type ", () => {
    expect(autoComplete).toEqual("off");
    expect(autoComplete).toContain("o");
    expect(autoComplete).toBeDefined();
    expect(autoComplete).not.toMatch("on");
  });
});
