function reverseString(string) {
  if (typeof string !== "string") {
    return "Input is not a string";
  }
  return string.split("").reverse().join("");
}

export default reverseString;
