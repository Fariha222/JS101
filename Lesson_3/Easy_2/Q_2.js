//reverse method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice().reverse());

//using forEach method;
let number = [1, 2, 3, 4, 5];
let number1 = number.slice();
number1.forEach(num=> {
  for (let index = 0; index < number1.length; index +=1) {
    if (number1[index] < number1[index + 1]) {
      [number1[index], number1[index + 1]] = [number1[index + 1], number1[index]];
    }
  }
});
console.log(number1);

//using sort method
let newArray = number.slice();
newArray.sort((num1,num2) => num2 - num1);
console.log(newArray);

//usind forEach according to LAUNCH SCHOOL
reversedArray = [];
number.forEach(num=>
reversedArray.unshift(num)
);
console.log(reversedArray);
