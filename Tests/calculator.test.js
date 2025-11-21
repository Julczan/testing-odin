import calculator from "../Functions/calculator";

test("Input provides two numbers", () => {
  expect(calculator.divide("string")).toBe("Please input two numbers");
  expect(calculator.multiply("string")).toBe("Please input two numbers");
  expect(calculator.subtract("string")).toBe("Please input two numbers");
  expect(calculator.add("string")).toBe("Please input two numbers");
});

test("add function returns the result", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(-2, 2)).toBe(0);
  expect(calculator.add(100, 21)).toBe(121);
});

test("subtract function returns the result", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(2, 10)).toBe(-8);
  expect(calculator.subtract(200, 10)).toBe(190);
});

test("divide function returns the result", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.divide(10, -3)).toBeCloseTo(-3.33);
});

test("multiply function returns the result", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(12, 2)).toBe(24);
  expect(calculator.multiply(-2, 50)).toBe(-100);
});
