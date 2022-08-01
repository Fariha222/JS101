let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let arrayProduce = Object.entries(produce);
/*console.log(arrayProduce);

let vegetableSelect = arrayProduce.filter( keyValues => {
	let [ key, value ] = keyValues;
	if (value === "Vegetable") {
		return keyValues;
	}
});
*/
vegetableObject = {};
arrayProduce.forEach(keyValue => {
 	let [key, value] = keyValue;
	if (value === "Vegetable") {
	vegetableObject[key] = value;
}
});
console.log(vegetableObject);
