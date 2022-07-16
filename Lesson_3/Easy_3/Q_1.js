let numbers = [1, 2, 3, 4];
//for (let counter = 0; counter <= 4; counter += 1){
  //numbers.shift();}
  //console.log(numbers);

while(numbers.length){
  numbers.shift();
}
console.log(numbers);
console.log(numbers.slice(0,4));
console.log(numbers.splice(0,4));
let numbers1 = [1,2,3,4]
numbers1.length = 0;
  console.log(numbers1);
//console.log(numbers1[0]);

let numbers2 = [1, 2, 3, 4];
while (numbers2.length){
  numbers2.pop();
}
console.log(numbers2);
