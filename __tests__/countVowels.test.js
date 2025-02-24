const { countVowels } = require("../functionManager");

describe("countVowels", () => {
  test("should count vowels correctly", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("HELLO")).toBe(2);
    expect(countVowels("aeiou")).toBe(5);
  });

  test("should handle strings with no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
    expect(countVowels("")).toBe(0);
  });

  test("should handle mixed case strings", () => {
    expect(countVowels("AeIoU")).toBe(5);
    expect(countVowels("hElLo WoRlD")).toBe(3);
  });

  test("should handle strings with numbers and special characters", () => {
    expect(countVowels("h3ll0")).toBe(4);
    expect(countVowels("!@#$%")).toBe(0);
  });

  test("should handle numbers correctly", () => {
    expect(countVowels("123")).toBe(5);
    expect(countVowels("0")).toBe(2);
    expect(countVowels("7")).toBe(2);
  });

  test("should throw error for invalid input", () => {
    expect(() => countVowels(null)).toThrow("Input must be a string");
    expect(() => countVowels(123)).toThrow("Input must be a string");
    expect(() => countVowels(undefined)).toThrow("Input must be a string");
  });
});
