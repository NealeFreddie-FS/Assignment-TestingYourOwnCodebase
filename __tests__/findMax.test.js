const { findMax } = require("../functionManager");

describe("findMax", () => {
  test("should find maximum number in array", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3])).toBe(-1);
  });

  test("should handle array with one element", () => {
    expect(findMax([42])).toBe(42);
  });

  test("should handle floating point numbers", () => {
    expect(findMax([1.1, 2.2, 3.3])).toBe(3.3);
    expect(findMax([-1.1, -2.2, -3.3])).toBe(-1.1);
  });

  test("should handle very large numbers", () => {
    expect(findMax([Number.MAX_SAFE_INTEGER, 1, 2])).toBe(
      Number.MAX_SAFE_INTEGER
    );
  });

  test("should throw error for invalid input", () => {
    expect(() => findMax([])).toThrow("Array cannot be empty");
    expect(() => findMax("not an array")).toThrow("Input must be an array");
    expect(() => findMax([1, "2", 3])).toThrow(
      "All array elements must be numbers"
    );
  });
});
