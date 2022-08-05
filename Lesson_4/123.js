let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];
let index = 0;
while ( index < numbers.length) {
  if (numbers[index] % 2 === 1){ continue;
}
  let square = numbers[index] * numbers[index];
  console.log(square);
   index += 1;
}
