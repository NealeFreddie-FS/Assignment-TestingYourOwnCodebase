const { countWords } = require("../functionManager");

describe("countWords", () => {
  test("should count words correctly", () => {
    expect(countWords("hello world")).toBe(2);
    expect(countWords("one two three four")).toBe(4);
  });

  test("should handle empty string", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });

  test("should handle multiple spaces", () => {
    expect(countWords("hello   world")).toBe(2);
    expect(countWords("  hello  world  ")).toBe(2);
  });

  test("should handle special characters", () => {
    expect(countWords("hello, world!")).toBe(2);
    expect(countWords("hello-world")).toBe(1);
  });

  test("should handle numbers in words", () => {
    expect(countWords("hello123 world456")).toBe(2);
    expect(countWords("123 456 789")).toBe(3);
  });

  test("should throw error for invalid input", () => {
    expect(() => countWords(null)).toThrow("Input must be a string");
    expect(() => countWords(123)).toThrow("Input must be a string");
    expect(() => countWords(undefined)).toThrow("Input must be a string");
  });
});
