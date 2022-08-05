let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};
let counter = 0;
let petKeys = Object.keys(numberOfPets);

while (counter < petKeys.length) {
	let petNames = petKeys[counter];//iterating over the keys of the array
	let petNumber = numberOfPets[petNames];//iterating over the values
	console.log(`I have ${numberOfPets[petNames]}: ${petKeys[counter]}`);
  counter += 1;
}
