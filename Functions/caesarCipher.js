function caesarCipher(string, shiftFactor) {
  if (!string) {
    return "Please provide a string";
  }
  if (!shiftFactor || typeof shiftFactor !== "number") {
    return "Please provide a shift factor";
  }
}

export default caesarCipher;
