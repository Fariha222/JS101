//console.log([1, 4, 3, 7, 2, 6].map(element => element * 2))
let array = [1, 4, 3, 7, 2, 6];
function doubleArray(input) {
	for (let counter = 0; counter < input.length; counter += 1 ) {
	currentNum = input[counter];
	input[counter] = currentNum * 2;
} return input;
}
console.log(doubleArray(array));
console.log(array);
