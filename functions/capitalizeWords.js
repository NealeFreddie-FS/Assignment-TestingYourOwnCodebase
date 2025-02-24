function capitalizeWords(str) {
  // Handle invalid input
  if (str === null || str === undefined) {
    throw new Error("Input must be a string");
  }
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str
    .trim() // Handle leading/trailing spaces
    .split(" ")
    .map((word) => {
      if (word.length === 0) return "";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

module.exports = capitalizeWords;
