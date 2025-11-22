import caesarCipher from "../Functions/caesarCipher";

test("string is provided", () => {
  expect(caesarCipher()).toBe("Please provide a string");
});

test("shift factor is provided", () => {
  expect(caesarCipher("string")).toBe("Please provide a shift factor");
});

test("shifting works", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("abce", 10)).toBe("klmo");
  expect(caesarCipher("julek", 5)).toBe("ozqjp");
  expect(caesarCipher("ceasar", 4)).toBe("giewev");
});

test("alhpabet wraps", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("julek", 20)).toBe("dofye");
  expect(caesarCipher("julek", 60)).toBe("rctms");
  expect(caesarCipher("caesar", 120)).toBe("squiqh");
});

test("follows the lettercase", () => {
  expect(caesarCipher("Caesar", 2)).toBe("Ecguct");
  expect(caesarCipher("CaeSaR", 2)).toBe("EcgUcT");
  expect(caesarCipher("JuLEk", 60)).toBe("RcTMs");
  expect(caesarCipher("HeLLo", 30)).toBe("LiPPs");
});

test("Punctuation remains the same", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Hello, Caesar made this cipher!", 14)).toBe(
    "Vszzc, Qosgof aors hvwg qwdvsf!"
  );
});
