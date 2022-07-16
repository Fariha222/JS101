let numbers = [1,2,3];
numbers[6] = 5;
console.log(numbers);
numbers[5] = undefined;
console.log(numbers);
console.log(numbers.map(() => 10));
console.log(numbers);
