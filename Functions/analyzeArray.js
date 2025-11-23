function analyzeArray(array) {
  if (!array) {
    return "Please provide an array of numbers";
  }

  const average = getAverage(array);
  const min = getMin(array);

  return { average, min };
}

function getMin(array) {
  const numbers = getNumbers(array);

  const min = Math.min(...numbers);
  return min;
}

function getNumbers(array) {
  const numbers = [];

  for (let i = 0; i < array.length; i++) {
    numbers.push(array[i]);
  }

  return numbers;
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

export default analyzeArray;
