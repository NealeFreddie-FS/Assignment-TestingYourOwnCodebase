function findMax(arr) {
  // Handle invalid input
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("All array elements must be numbers");
  }

  return Math.max(...arr);
}

module.exports = findMax;
