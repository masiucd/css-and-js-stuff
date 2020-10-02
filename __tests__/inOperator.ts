import * as inOperator from "../mix/inOperator";

jest.spyOn(inOperator, "getAnimal");

describe("In operator", () => {
  test("printing props on dog object ", () => {
    expect(inOperator.getAnimal(inOperator.bobbyDog)).toBe(
      inOperator.bobbyDog.name,
    );
    expect(inOperator.getAnimal(inOperator.charlieCat)).not.toBe(
      inOperator.bobbyDog.name,
    );
  });

  test("getAnimal should been called", () => {
    expect(inOperator.getAnimal).toHaveBeenCalled();
  });
});
