//Task 3. Filtering an array of numbers

function filterArray(numbers, value) {
const newNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {

      newNumbers.push(numbers[i]);
    }
  }

  return newNumbers;
}

const randomNumbers = [8, 15, 30, 42, 55];
const randomValue = Math.floor(Math.random() * 58); 


//audit

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

console.log(filterArray(randomNumbers, randomValue));