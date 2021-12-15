// src/components/validator.test.ts
import { validateNumber } from "./validator";

describe("validator test suite", () => {

  it("should validate number divisible by 3", () => {
    const fn = jest.fn(validateNumber);

    const number1: number = 5;
    const number2: number = 9;

    const result1: boolean = fn(number1);
    const result2: boolean = fn(number2); 

    expect(result1).toBe(false);
    expect(result2).toBe(true);
    expect(fn).toBeCalled();
  });
});
