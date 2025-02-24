function generateRange(start, end, step = 1) {
  // Handle invalid input
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof step !== "number"
  ) {
    throw new Error("All parameters must be numbers");
  }
  if (step === 0) {
    throw new Error("Step cannot be zero");
  }
  if ((start < end && step < 0) || (start > end && step > 0)) {
    throw new Error("Invalid step direction");
  }

  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

module.exports = generateRange;
