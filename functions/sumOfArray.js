function sumOfArray(arr) {
  // Handle invalid input
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Validate all elements are numbers
  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("All array elements must be numbers");
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

module.exports = sumOfArray;
