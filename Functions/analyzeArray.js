function analyzeArray(array) {
  if (!array) {
    return "Please provide an array of numbers";
  }

  const average = getAverage(array);

  return { average };
}

function getAverage(array) {
  const numbers = [];

  for (let i = 0; i < array.length; i++) {
    numbers.push(array[i]);
  }

  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  const average = sum / numbers.length;

  return average;
}

export default analyzeArray;
