import analyzeArray from "../Functions/analyzeArray";

test("Input is an array of numbers", () => {
  expect(analyzeArray()).toBe("Please provide an array of numbers");
});
