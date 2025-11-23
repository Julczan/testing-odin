function analyzeArray(array) {
  if (!array || checkIfNumber(array)) {
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
  const numbers = getNumbers(array);

  const max = Math.max(...numbers);
  return max;
}

function getMin(array) {
  const numbers = getNumbers(array);

  const min = Math.min(...numbers);
  return min;
}

function getAverage(array) {
  const numbers = getNumbers(array);

  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  const average = sum / numbers.length;

  return average;
}

function getNumbers(array) {
  const numbers = [];

  for (let i = 0; i < array.length; i++) {
    numbers.push(array[i]);
  }

  return numbers;
}

export default analyzeArray;
