const { sumOfArray } = require("../functionManager");

describe("sumOfArray", () => {
  test("should sum normal array of numbers", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumOfArray([-1, -2, 3, 4])).toBe(4);
  });

  test("should handle empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  test("should handle array with one element", () => {
    expect(sumOfArray([5])).toBe(5);
  });

  test("should throw error for non-array input", () => {
    expect(() => sumOfArray("not an array")).toThrow("Input must be an array");
    expect(() => sumOfArray(123)).toThrow("Input must be an array");
  });

  test("should throw error for array with non-number elements", () => {
    expect(() => sumOfArray([1, "2", 3])).toThrow(
      "All array elements must be numbers"
    );
  });

  test("should handle floating point numbers", () => {
    expect(sumOfArray([1.1, 2.2, 3.3])).toBeCloseTo(6.6);
  });

  test("should handle large arrays", () => {
    const largeArray = Array(1000).fill(1);
    expect(sumOfArray(largeArray)).toBe(1000);
  });

  test("should handle very small decimal numbers", () => {
    expect(sumOfArray([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    expect(sumOfArray([0.0001, 0.0002])).toBeCloseTo(0.0003);
  });
});
