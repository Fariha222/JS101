let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOdd(array) {
for (let counter = 0; counter < myNumbers.length; counter += 1){
if (counter % 2 !== 0) {
array[counter] = array[counter] * 2;
}} return array;
}
console.log(doubleOdd(myNumbers));
