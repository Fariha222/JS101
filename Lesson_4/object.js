let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
let produceArray = Object.entries(produce);

produceArray.forEach(valuePair => {
	let [key, value] = valuePair;
console.log(`${key} is a ${value}`);
});
