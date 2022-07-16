let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let counter = 0;
statement1.split('').forEach(char => {
for (let index = 0; index < statement1.length; index += 1) {
if (char[index] === 't') {
  counter += 1;
}
} //console.log(counter);
});
console.log(counter);

//METHOD 2
console.log(statement1.split("").filter(char => char === 't').length);
