/*while (true) {
	let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;
while (index < names.length) {
  if (names[index]=== 'Elizabeth') {
    continue;
  }
  console.log(names[index]);
  index += 1;
}
}
*/
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;
while (index < names.length) {
	//for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
console.log(upperCaseName);
	upperNames.push(upperCaseName);
	index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
