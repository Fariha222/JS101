//LAUNCH SCHOOLS METHOD changes only the 1st occurances
let advice = "Few things in life are as important as house training your pet important important dinosaur.";

console.log(advice.replace("important", "urgent"));

//MY METHOD changes all the occourances
let advice1 = "Few things in life are as important as house training your pet important dinosaur.";

let myArray = advice1.split(" ");
for (index = 0; index < myArray.length; index += 1){
  if (myArray[index] === "important") {
  myArray[index] = "urgent";}
}
let string = myArray.join(' ');
console.log(string);
