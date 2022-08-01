let myNumbers = [1, 4, 3, 7, 2, 6];
function doubleNumber(array) {

for (let counter = 0; counter < myNumbers.length; counter += 1) {
	 array[counter] = array[counter] * 2;

} return array;
}
console.log(doubleNumber(myNumbers));
console.log(myNumbers);
