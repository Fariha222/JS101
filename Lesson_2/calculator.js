const readline = require("readline-sync");
const readMessage = require("./calculator_messages.json");
function prompt(message) {
  console.log(`==> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
 prompt(readMessage["first_message"]);
 prompt(readMessage["second_message"]);
 let number1 = readline.question();

 while (invalidNumber(number1)) {
  prompt(readMessage["third_message"]);
  number1 = readline.question();
 }
 prompt(readMessage["secondmg_message"]);
 let number2 = readline.question();

 while (invalidNumber(number2)) {
  prompt(readMessage["third_message"]);
  number2 = readline.question();
 }
 prompt(readMessage["fourth_message"]);
 let operation = readline.question();

 while (!['1','2','3','4'].includes(operation)) {
  prompt(readMessage["fifth_message"]);
  operation = readline.question();
 }
 let output;
 switch (operation) {
   case '1':
     output = Number(number1) + Number(number2);
     break;
   case '2':
     output = Number(number1) - (number2);
     break;
   case '3':
     output = Number(number1) * Number(number2);
     break;
   case '4':
     output = Number(number1) / (number2);
     break;
 }
 prompt(readMessage["sixth_message"] + output);

 prompt(readMessage["seventh_message"]);
 let answer = readline.question();

 while (answer[0] !== 'n' && answer[0] !== 'y') {
 prompt(readMessage["eight_message"]);
 answer = readline.question();
 }

 if (answer === 'n') break;
}
