function purgeDuplicates(arr) {
  // Handle invalid input
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  return [...new Set(arr)];
}

module.exports = purgeDuplicates;
