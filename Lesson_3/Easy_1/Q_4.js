// Launch Schools METHOD
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// #MY METHOD
munstersDescription = "the Munsters are CREEPY and Spooky.";
let  str = munstersDescription.toLowerCase();//turned to lower case
let array = str.split(' ');  // make an array of it

let getFirstElement = (array[0].split(''));// make array of first element
let firstCapital = getFirstElement[0].toUpperCase();//first alphabet capitalized
getFirstElement.splice(0,1); //remove first alphabet from first word
array.splice(0,1); //remove first element from the original array
console.log(firstCapital + getFirstElement.join('') + " " + array.join(' '));
