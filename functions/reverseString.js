function reverseString(str) {
  // Handle invalid input
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str.split("").reverse().join("");
}

module.exports = reverseString;
