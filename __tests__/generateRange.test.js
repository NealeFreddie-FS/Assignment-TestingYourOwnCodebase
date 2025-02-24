const { generateRange } = require("../functionManager");

describe("generateRange", () => {
  test("should generate range with positive step", () => {
    expect(generateRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateRange(1, 5, 2)).toEqual([1, 3, 5]);
  });

  test("should generate range with negative step", () => {
    expect(generateRange(5, 1, -1)).toEqual([5, 4, 3, 2, 1]);
    expect(generateRange(5, 1, -2)).toEqual([5, 3, 1]);
  });

  test("should handle single number range", () => {
    expect(generateRange(1, 1)).toEqual([1]);
  });

  test("should handle decimal steps", () => {
    expect(generateRange(1, 2, 0.5)).toEqual([1, 1.5, 2]);
  });

  test("should handle negative numbers", () => {
    expect(generateRange(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
    expect(generateRange(-1, -5, -1)).toEqual([-1, -2, -3, -4, -5]);
  });

  test("should throw error for invalid input", () => {
    expect(() => generateRange("1", 5)).toThrow(
      "All parameters must be numbers"
    );
    expect(() => generateRange(1, "5")).toThrow(
      "All parameters must be numbers"
    );
    expect(() => generateRange(1, 5, "1")).toThrow(
      "All parameters must be numbers"
    );
    expect(() => generateRange(1, 5, 0)).toThrow("Step cannot be zero");
    expect(() => generateRange(1, 5, -1)).toThrow("Invalid step direction");
    expect(() => generateRange(5, 1, 1)).toThrow("Invalid step direction");
  });
});
