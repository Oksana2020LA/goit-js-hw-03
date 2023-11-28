//Task 2. Array composition.

function makeArray (firstArray, secondArray, maxLength) {
  
  const allArray = firstArray.concat(secondArray);

  if (maxLength > 0) {
  return allArray.slice(0, maxLength);
  } else {
  return [];
  }
}

const randomArray1 = ["Apple", "Banana", "Orange"];
const randomArray2 = ["Grapes", "Kiwi", "Pineapple"];
const randomNumber = Math.floor(Math.random() * 10) + 1;


//audit

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

console.log(makeArray(randomArray1, randomArray2, randomNumber));