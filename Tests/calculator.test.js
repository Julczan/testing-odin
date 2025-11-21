import calculator from "../Functions/calculator";

test("Input provides two numbers", () => {
  expect(calculator.add("string")).toBe("Please input two numbers");
});
test("Input provides two numbers", () => {
  expect(calculator.subtract("string")).toBe("Please input two numbers");
});
test("Input provides two numbers", () => {
  expect(calculator.divide("string")).toBe("Please input two numbers");
});
test("Input provides two numbers", () => {
  expect(calculator.multiply("string")).toBe("Please input two numbers");
});
