import { validateNumber } from "./validator";
describe("validator test suite", () => {
  it("should validate number divisible by 3", () => {
    const fn = jest.fn(validateNumber);

    const number1: number = 5;
    const number2: number = 9;

    expect(fn(number1)).toBe(false);
    expect(fn(number2)).toBe(true);
    expect(fn).toBeCalled();
  });
});
