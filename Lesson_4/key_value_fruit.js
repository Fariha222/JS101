let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(input) {
newProduce = {};
let index = 0;
let produceArray = Object.keys(input);
let currentKey = produceArray[index];
while (index < produceArray.length) {
	for (let currentKey in input) {
		let valueProduce = input[currentKey];
		if(valueProduce === "Fruit") {
			newProduce[currentKey] = valueProduce;

		}index += 1;
	} console.log(newProduce);
}}
selectFruit(produce);




















/*let index = 0;
function selectFruit(input){
let	produceArray = Object.keys(produce);
let newObject = {};
while (index < produceArray.length) {
	let	currentKey = produceArray[index];
  for (let currentKey in produce){
	let valueProduce = produce[currentKey];
  if (valueProduce === "Fruit") {
		newObject[currentKey] = valueProduce;
	}
		index += 1;}
} console.log(newObject);
}
selectFruit(produce);
*/
