//METHOD 1
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
console.log(numbers.includes(8));
console.log(numbers.includes(95));


//METHOD 2
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
function findNumber(input) {
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] === input) {
    return true;
  }
 }
}
console.log(findNumber(8));  // false
console.log(findNumber(95)); // true
console.log(findNumber(17));  // false
console.log(findNumber(96)); // true
