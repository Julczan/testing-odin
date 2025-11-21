function caesarCipher(string, shiftFactor) {
  if (!string) {
    return "Please provide a string";
  }
  if (!shiftFactor || typeof shiftFactor !== "number") {
    return "Please provide a shift factor";
  }

  return shift(string, shiftFactor);
}

function shift(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const shiftedStr = [];

  for (let i = 0; i < string.length; i++) {
    const index = alphabet.indexOf(string[i]) + shiftFactor;
    shiftedStr.push(alphabet[index]);
  }
  return shiftedStr.join("");
}

export default caesarCipher;
