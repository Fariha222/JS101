let numbers = [1,2,3,4,5,6,7];
let newNumbers = [];
function multiplyNumbers(input, times) {
	for (let counter = 0; counter < input.length; counter += 1) {
		newNumbers.push(input[counter] * times);
	} return newNumbers;
}
console.log(multiplyNumbers(numbers,4));
