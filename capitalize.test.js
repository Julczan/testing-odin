import capitalize from "./capitalize";

test("first letter capitalized when lowercase", () => {
  expect(capitalize("string")).toMatch(/String/);
});

test("first letter capitalized when uppercase", () => {
  expect(capitalize("Something")).toMatch(/Something/);
});

test("first letter capitalized when CAPSLOCK", () => {
  expect(capitalize("TEST")).toMatch(/TEST/);
});
