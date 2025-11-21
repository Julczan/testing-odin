import capitalize from "../Functions/capitalize";

test("Input is a string", () => {
  expect(capitalize(1)).toBe("Input is not a string");
});

test("first letter capitalized when lowercase", () => {
  expect(capitalize("string")).toMatch(/String/);
});

test("first letter capitalized when uppercase", () => {
  expect(capitalize("Something")).toMatch(/Something/);
});

test("first letter capitalized when CAPSLOCK", () => {
  expect(capitalize("TEST")).toMatch(/TEST/);
});
