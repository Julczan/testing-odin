import analyzeArray from "../Functions/analyzeArray";

test("Input is an array of numbers", () => {
  expect(analyzeArray()).toBe("Please provide an array of numbers");
  expect(analyzeArray(["3", "2"])).toBe("Please provide an array of numbers");
  expect(analyzeArray(["3", 2])).toBe("Please provide an array of numbers");
  expect(analyzeArray([3, "2"])).toBe("Please provide an array of numbers");
  expect(analyzeArray(3, "2")).toBe("Please provide an array of numbers");
});

test("Function returns the number's average, min number, max number and the array length", () => {
  expect(analyzeArray([2, 2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 2,
  });
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 8])).toEqual({
    average: 4.5,
    min: 1,
    max: 8,
    length: 2,
  });
});
