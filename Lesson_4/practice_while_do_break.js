/* while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  while (number === 5) {
    console.log('Exiting...');
    break;
  }
}
let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');


let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}


let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');

while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) {
    console.log('Exiting...');
    break;
  }

  console.log(number);
}
*/
//while(true){
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;
while (index < names.length) {
  if (names[index][0] === 'E') {
    continue;
  }
  console.log(names[index]);
  index += 1;
}
//}
 /*
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    continue;
  }
}
*/
