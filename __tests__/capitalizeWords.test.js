const { capitalizeWords } = require("../functionManager");

describe("capitalizeWords", () => {
  test("should capitalize words correctly", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
    expect(capitalizeWords("javascript is awesome")).toBe(
      "Javascript Is Awesome"
    );
  });

  test("should handle empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("should handle single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  test("should handle multiple spaces", () => {
    expect(capitalizeWords("hello   world")).toBe("Hello   World");
  });

  test("should handle already capitalized words", () => {
    expect(capitalizeWords("HELLO WORLD")).toBe("Hello World");
  });

  test("should throw error for non-string input", () => {
    expect(() => capitalizeWords(123)).toThrow("Input must be a string");
  });

  test("should handle leading and trailing spaces", () => {
    expect(capitalizeWords("  hello world  ")).toBe("Hello World");
  });

  test("should handle mixed case input", () => {
    expect(capitalizeWords("hElLo wOrLd")).toBe("Hello World");
  });

  test("should handle null and undefined", () => {
    expect(() => capitalizeWords(null)).toThrow("Input must be a string");
    expect(() => capitalizeWords(undefined)).toThrow("Input must be a string");
  });

  test("should handle strings with numbers and special characters", () => {
    expect(capitalizeWords("hello123 world!")).toBe("Hello123 World!");
    expect(capitalizeWords("web3 is cool")).toBe("Web3 Is Cool");
  });

  test("should handle strings with punctuation between words", () => {
    expect(capitalizeWords("hello,world")).toBe("Hello,world");
    expect(capitalizeWords("stop.go.continue")).toBe("Stop.go.continue");
    expect(capitalizeWords("hello-world")).toBe("Hello-world");
  });
});
