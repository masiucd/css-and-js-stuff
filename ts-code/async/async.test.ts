import { getUserDetails } from "./getUser";
import { main } from "./app";

describe("async Typescript", () => {
  test("the data should be teams data", () => {
    return getUserDetails("legia").then((res) => {
      expect(res.name).toBe("Legia Warszawa");
      expect(res.ultras).toBe("Zyleta");
    });
  });
  test("function should exists", () => {
    expect(getUserDetails).toBeDefined();
  });

  it("calls console.log with right number", () => {
    const consoleSpy = jest.spyOn(console, "log");
    console.log("hello");

    expect(consoleSpy).toHaveBeenCalledWith("hello");
  });
});
