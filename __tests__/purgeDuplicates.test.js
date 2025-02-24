const { purgeDuplicates } = require("../functionManager");

describe("purgeDuplicates", () => {
  test("should remove duplicates from array", () => {
    expect(purgeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(purgeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("should handle array with no duplicates", () => {
    expect(purgeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should handle empty array", () => {
    expect(purgeDuplicates([])).toEqual([]);
  });

  test("should handle mixed type arrays", () => {
    expect(purgeDuplicates([1, "1", true, "true"])).toEqual([
      1,
      "1",
      true,
      "true",
    ]);
  });

  test("should handle arrays with objects and arrays", () => {
    const obj = { a: 1 };
    const arr = [1, 2];
    expect(purgeDuplicates([obj, arr, obj, arr])).toEqual([obj, arr]);
  });

  test("should throw error for invalid input", () => {
    expect(() => purgeDuplicates("not an array")).toThrow(
      "Input must be an array"
    );
    expect(() => purgeDuplicates(123)).toThrow("Input must be an array");
    expect(() => purgeDuplicates(null)).toThrow("Input must be an array");
  });
});
