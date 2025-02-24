const { reverseString } = require("../functionManager");

describe("reverseString", () => {
  test("should reverse normal strings", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });

  test("should handle empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("should handle single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("should handle strings with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("should throw error for non-string input", () => {
    expect(() => reverseString(123)).toThrow("Input must be a string");
    expect(() => reverseString(null)).toThrow("Input must be a string");
  });

  test("should handle special characters", () => {
    expect(reverseString("hello!@#$%")).toBe("%$#@!olleh");
  });

  test("should handle unicode characters", () => {
    expect(reverseString("café")).toBe("éfac");
  });

  test("should handle strings with numbers", () => {
    expect(reverseString("hello123")).toBe("321olleh");
    expect(reverseString("12345")).toBe("54321");
  });
});
