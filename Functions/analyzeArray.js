function analyzeArray(array) {
  if (!array || !Array.isArray(array) || checkIfNumber(array)) {
    return "Please provide an array of numbers";
  }

  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = getArrayLength(array);

  return { average, min, max, length };
}

function checkIfNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return true;
    }
  }
  return false;
}

function getArrayLength(array) {
  return array.length;
}

function getMax(array) {
  const max = Math.max(...array);
  return max;
}

function getMin(array) {
  const min = Math.min(...array);
  return min;
}

function getAverage(array) {
  let sum = 0;

  array.forEach((number) => {
    sum += number;
  });

  const average = sum / array.length;

  return average;
}

export default analyzeArray;
