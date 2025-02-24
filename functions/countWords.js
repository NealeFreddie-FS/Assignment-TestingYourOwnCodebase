function countWords(str) {
  // Handle invalid input
  if (str === null || str === undefined) {
    throw new Error("Input must be a string");
  }
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Trim and split by one or more whitespace characters
  return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
}

module.exports = countWords;
