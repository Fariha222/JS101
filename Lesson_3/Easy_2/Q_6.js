//CONCAT
let flintstones = ["Fred", "Wilma"];
console.log(flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]));

//THE SPREAD METHOD:
let flintstones2 = ["Fred", "Wilma"];
flintstones2 = [...flintstones2, ...["Barney", "Betty"], ...["Bambam", "Pebbles"]];
console.log(flintstones2);

//FLAT METHOD
let flintstones1 = ["Fred", "Wilma"];
flintstones1.push(["Barney", "Betty"]);
flintstones1.push(["Bambam", ["Pebbles"]]);
console.log(flintstones1.flat(2));

//REDUCE METHOD
let flintstones3 = ["Fred", "Wilma"];
flintstones3.push(["Barney", "Betty"]);
flintstones3.push(["Bambam", "Pebbles"]);
flintstones3 = flintstones3.reduce((accu,ele) => { return accu.concat(ele)}, []);
console.log(flintstones3);

//forEach METHOD
let newFlintstones6 = [];
let flintstones6 = ["Fred", "Wilma"];
flintstones6.push(["Barney", "Betty"]);
flintstones6.push(["Bambam", "Pebbles"]);
flintstones6.forEach(num => {
  newFlintstones6 = newFlintstones6.concat(num) //as concat is non mutatating we have to save it
});
console.log(newFlintstones6);
