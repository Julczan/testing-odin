import reverseString from "./reverseString";

test("Input is a string", () => {
  expect(reverseString(1)).toBe("Input is not a string");
});

test("String gets reversed", () => {
  expect(reverseString("String")).toMatch(/gnirtS/);
});

test("String gets reversed", () => {
  expect(reverseString("Test")).toMatch(/tseT/);
});
