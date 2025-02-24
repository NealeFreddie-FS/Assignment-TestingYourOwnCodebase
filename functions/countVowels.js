function countVowels(str) {
  // Handle invalid input
  if (str === null || str === undefined) {
    throw new Error("Input must be a string");
  }
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Convert string to lowercase and replace numbers with their word equivalents
  const processedStr = str.toLowerCase().replace(/[0-9]/g, (num) => {
    const words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    return words[parseInt(num)];
  });

  return (processedStr.match(/[aeiou]/g) || []).length;
}

module.exports = countVowels;
