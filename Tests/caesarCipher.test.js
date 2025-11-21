import caesarCipher from "../Functions/caesarCipher";

test("string is provided", () => {
  expect(caesarCipher()).toBe("Please provide a string");
});

test("shift factor is provided", () => {
  expect(caesarCipher("string")).toBe("Please provide a shift factor");
});
