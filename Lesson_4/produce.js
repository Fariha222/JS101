let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(productList) {
	let productKeys = Object.keys(productList);
   console.log(productList);
  let selectedFruit = {};
	for (let counter = 0; counter < productKeys.length; counter += 1) {
		let currentKey = productKeys[counter];
		let currentValue = productList[currentKey];
	if (currentValue === "Fruit") {
		selectedFruit[currentKey] = currentValue;
  }
}
return selectedFruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
