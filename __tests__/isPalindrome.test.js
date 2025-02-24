const { isPalindrome } = require("../functionManager");

describe("isPalindrome", () => {
  test("should identify palindromes correctly", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("should identify non-palindromes correctly", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("javascript")).toBe(false);
  });

  test("should handle empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("should handle single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("should ignore case and special characters", () => {
    expect(isPalindrome("Race Car!")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("should throw error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });

  test("should handle null and undefined", () => {
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string");
  });

  test("should handle numeric strings", () => {
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("12345")).toBe(false);
  });

  test("should handle mixed alphanumeric palindromes", () => {
    expect(isPalindrome("A1b22b1A")).toBe(true);
    expect(isPalindrome("12321abc")).toBe(false);
  });
});
