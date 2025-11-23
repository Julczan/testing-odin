import analyzeArray from "../Functions/analyzeArray";

test("Input is an array of numbers", () => {
  expect(analyzeArray()).toBe("Please provide an array of numbers");
});

test("Function returns the number's average", () => {
  expect(analyzeArray([2, 2])).toEqual({ average: 2 });
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4 });
  expect(analyzeArray([1, 8])).toEqual({ average: 4.5 });
});
