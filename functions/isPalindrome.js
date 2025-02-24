function isPalindrome(str) {
  // Handle invalid input
  if (str === null || str === undefined) {
    throw new Error("Input must be a string");
  }
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
