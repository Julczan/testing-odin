import caesarCipher from "../Functions/caesarCipher";

test("shift factor is provided", () => {
  expect(caesarCipher("string")).toBe("Please provide a shift factor");
});
