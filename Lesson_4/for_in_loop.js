let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};
for (let currentPet in numberOfPets){// currentPet is the keys:iterating over keys
	let currentPetNumber = numberOfPets[currentPet];//saving each value to  variable currentPetNumber
	console.log("We have " + currentPetNumber + " " + currentPet);
}
