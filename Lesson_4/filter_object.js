let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
let produceKeyValues = Object.entries(produce);
console.log(produceKeyValues);
let onlyVegetable = produceKeyValues.filter(keyValue => {
	let [key, value] = keyValue;
if (value === "Vegetable") {    // return value = "Vegetable";
	return keyValue;
}
});
console.log(onlyVegetable);
