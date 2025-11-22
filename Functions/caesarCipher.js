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
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const shiftedStr = [];

  const deconstr = string.split("");

  for (let i = 0; i < deconstr.length; i++) {
    let isUpper = isUpperCase(deconstr[i]);
    if (isUpper) {
      let encrypted = getEncrypted(alphabetUpperCase, deconstr[i], shiftFactor);
      shiftedStr.push(encrypted);
    } else {
      let encrypted = getEncrypted(alphabet, deconstr[i], shiftFactor);
      shiftedStr.push(encrypted);
    }
  }
  return shiftedStr.join("");
}

function getEncrypted(alphabet, letter, shiftFactor) {
  let index = alphabet.indexOf(letter) + shiftFactor;
  if (index > 25) {
    index %= 26;
  }
  return alphabet[index];
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

export default caesarCipher;
